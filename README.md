# 🚀 Next.js + Prisma Starter

This is a [Next.js](https://nextjs.org) application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses **Prisma** for database access, **Zod** for validation, **React `useState`** for state management, and the **Geist** font from Vercel.

---

## 📦 Getting Started

Follow these steps to get your development environment set up.

### 1. Clone the repository

```bash
git clone https://github.com/salvik21/TodoList.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```
DATABASE_URL="file:./dev.db"
```

> Using SQLite for local development.

### 4. Initialize Prisma

Run the following to set up Prisma:

```bash
npx prisma init
```

Replace the contents of `prisma/schema.prisma` with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Todo {
  id        String   @id @default(uuid())
  title     String
  completed Boolean  @default(false)
  createdAt DateTime @default(now())
}
```

Then generate the client and run the first migration:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧱 Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Language:** TypeScript
- **ORM:** [Prisma](https://www.prisma.io)
- **Validation:** [Zod](https://zod.dev)
- **State Management:** React `useState`
- **Data Fetching:** Native `fetch`
- **Fonts:** [Geist](https://vercel.com/font)
- **Deployment:** [Vercel](https://vercel.com)

---

## 📚 Useful Commands

```bash
npm run dev                         # Start development server
npm run build                       # Build for production
npm run start                       # Start production server
npx prisma studio                   # Open Prisma GUI
npx prisma migrate dev --name NAME  # Create and apply migration
```

---

## 📦 Deployment

Deploy easily with [Vercel](https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app-readme).  
Refer to [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

---

## ✅ Done!

You're ready! You now have a running Next.js app with:

- Prisma-powered database
- Zod schema validation
- React `useState` for managing state
- Clean UI using Geist font

Happy coding! 🎉
