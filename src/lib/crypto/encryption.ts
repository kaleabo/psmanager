import { randomBytes, pbkdf2Sync, createCipheriv, createDecipheriv } from 'crypto'
import { promisify } from 'util'
import bcrypt from 'bcryptjs'

const ALGORITHM = 'aes-256-gcm'
const IV_LENGTH = 16
const SALT_LENGTH = 64
const TAG_LENGTH = 16
const KEY_LENGTH = 32
const ITERATIONS = 100000

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export async function generateMasterKey(password: string, salt?: string): Promise<{
  key: Buffer
  salt: string
}> {
  const usedSalt = salt || randomBytes(SALT_LENGTH).toString('hex')
  const key = await promisify(pbkdf2Sync)(
    password,
    usedSalt,
    ITERATIONS,
    KEY_LENGTH,
    'sha512'
  )

  if (!Buffer.isBuffer(key)) {
    throw new Error('Key generation failed')
  }

  return { key, salt: usedSalt }
}

export async function encryptData(data: string, masterKey: Buffer): Promise<{
  encrypted: string
  iv: string
  tag: Buffer
}> {
  const iv = randomBytes(IV_LENGTH)
  const cipher = createCipheriv(ALGORITHM, masterKey, iv)
  
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    tag: cipher.getAuthTag()
  }
}

export async function decryptData(
  encrypted: string,
  iv: string,
  tag: Buffer,
  masterKey: Buffer
): Promise<string> {
  const decipher = createDecipheriv(
    ALGORITHM,
    masterKey,
    Buffer.from(iv, 'hex')
  )
  decipher.setAuthTag(tag)
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  
  return decrypted
} 