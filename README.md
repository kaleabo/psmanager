# SecurePass

SecurePass is a modern password manager that combines military-grade encryption with AI-powered security features. Built with Next.js 14 and the App Router, it offers a seamless and secure way to store and manage passwords across all devices.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Development](#development)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Overview

SecurePass provides enterprise-grade password management with zero-knowledge architecture. All data is encrypted client-side before being stored, ensuring that even we cannot access your sensitive information.

## Key Features

- 🔒 Zero-knowledge end-to-end encryption
- 🤖 AI-powered password generation and security analysis
- 🔄 Real-time cross-device synchronization
- 👆 Biometric authentication support
- 🔍 Smart autofill across platforms
- ♾️ Unlimited password storage
- 🛡️ Breach monitoring and alerts
- 💯 Forever free

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Framer Motion
- Tailwind CSS
- Shadcn UI
- Radix UI
- Stylus

### Security
- AES-256 encryption
- bcryptjs
- Web Crypto API
- Zero-knowledge architecture

### State Management
- Zustand
- React Query
- nuqs (URL state)

### Development
- ESLint
- Prettier
- Husky
- Jest
- React Testing Library

## Architecture

SecurePass follows a modern, secure architecture designed for scalability and performance:

### Frontend Architecture
- Server Components for improved performance
- Client Components only where interactivity is needed
- Modular component structure with atomic design principles
- Responsive layouts using Tailwind's mobile-first approach
- Custom hooks for reusable logic
- Error boundaries for graceful error handling

### Security Architecture
- Zero-knowledge encryption using AES-256
- Client-side encryption before data transmission
- Secure key derivation using PBKDF2
- Salt and pepper for password hashing
- Rate limiting and brute force protection
- Regular security audits and penetration testing

### State Management
- Zustand for global state
- React Query for server state
- URL state management with nuqs
- Local storage encryption for sensitive data
- Optimistic updates for better UX

### Database Schema
- Users table with encrypted metadata
- Encrypted vaults for password storage
- Audit logs for security monitoring
- Separate schemas for different data types

### API Architecture
- RESTful endpoints with versioning
- GraphQL for complex data requirements
- Rate limiting middleware
- JWT authentication
- CORS protection

### Deployment
- Vercel for frontend hosting
- Edge functions for improved latency
- CDN for static assets
- Automated CI/CD pipeline
- Regular backups and disaster recovery

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/kaleabo/psmanager.git
   cd psmanager
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration values.

4. Set up the database:
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Prerequisites

- Node.js 18.17 or later
- pnpm 8.0 or later
- PostgreSQL 14 or later
