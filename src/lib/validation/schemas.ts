import { z } from 'zod'

export const PasswordSchema = z.object({
  title: z.string(),
  username: z.string(),
  password: z.string(),
  url: z.string().optional(),
  notes: z.string().optional(),
  vaultId: z.string()
})

export const SecuritySettingsSchema = z.object({
  autoLockTimeout: z.number().min(1).max(60),
  requireMasterPassword: z.boolean(),
  enableBiometric: z.boolean(),
  enableTwoFactor: z.boolean()
})

export type Password = z.infer<typeof PasswordSchema>
export type SecuritySettings = z.infer<typeof SecuritySettingsSchema> 