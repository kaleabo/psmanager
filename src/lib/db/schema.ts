import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  masterKeyHash: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const VaultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const PasswordEntrySchema = z.object({
  id: z.string(),
  vaultId: z.string(),
  title: z.string(),
  username: z.string(),
  password: z.string(),
  url: z.string().optional(),
  notes: z.string().optional(),
  category: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export type User = z.infer<typeof UserSchema>
export type Vault = z.infer<typeof VaultSchema>
export type PasswordEntry = z.infer<typeof PasswordEntrySchema> 