# Soludesks - Learning Management System

A pixel-perfect LMS application built with Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and RTK Query.

## Deployment

[Live Demo](https://soludesks-tau.vercel.app)

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit**
- **RTK Query**
- **Vercel** (Hosting)

## Project Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/Deji-thedev/soludesks.git
cd soludesks
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── courses/                # Course Management page
│   │   └── [id]/               # Course Detail page
│   │       └── learn/          # Course Learning page
│   ├── layout.tsx              # Root layout with Redux Provider
│   └── page.tsx                # Redirects to /courses
├── components/
│   ├── layout/                 # Navbar, Sidebar, MainLayout, Providers
│   ├── courses/                # CourseCard, StatsCard, Pagination
│   └── ui/                     # Shared UI components
├── store/
│   ├── index.ts                # Redux store configuration
│   ├── userSlice.ts            # Dummy user state (setUser/clearUser)
│   └── apiSlice.ts             # RTK Query API slice
├── types/
│   └── index.ts                # TypeScript interfaces
└── lib/
    └── data.ts                 # Mock data
```

## Redux Toolkit Setup

### User Slice

Manages a dummy authenticated user with `setUser` and `clearUser` actions:

```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    isAuthenticated: boolean;
  }
}
```

### RTK Query

Configured with two demo endpoints:

- `getCourses` — returns mock course list
- `getProfile` — returns mock user profile
