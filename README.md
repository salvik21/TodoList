This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js App with Prisma

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses **Prisma** for database access and **Geist** font for UI design.

---

# Next.js + Prisma Project

This is a [Next.js](https://nextjs.org) application using [Prisma](https://www.prisma.io/) as an ORM and [Geist](https://vercel.com/font) for font styling. It also uses native `fetch` for API calls, `zod` for schema validation, and React `useState` for state management.

---

## 🚀 How to Run the Project

Follow these steps to get your development environment up and running.



 Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root of the project:


If you're using SQLite for testing, use:

```
DATABASE_URL="file:./dev.db"
```

### 4. Initialize Prisma

```bash
npx prisma init
```
Edit the `prisma/schema.prisma` file to define your models.
opy this Isati
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

Then run:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Install additional libraries

```bash
npm install zod
```

> `useState` is part of React and does not require installation.  
> `fetch` is available globally in the browser and in Next.js.

### 6. Start the development server

```bash
npm run dev
```

Now open [http://localhost:3000](http://localhost:3000) to view the app.

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
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npx prisma studio  # Open Prisma database GUI
npx prisma migrate dev --name NAME  # Create and apply migration


## ✅ Done!

You now have a running Next.js app with Prisma, Zod validation, and React state handling.