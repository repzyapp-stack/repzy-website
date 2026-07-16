# Repzy Website

Welcome to the Repzy Website repository! This is a modern, high-performance landing page built with React, Vite, and Supabase.

## Getting Started

### 1. Install Dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 2. Environment Variables
This project uses Supabase for the waitlist backend. You must create a `.env` file in the root directory before running the app. 

Create a file named `.env` and add your keys:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the Development Server
Start the local Vite development server:
```bash
npm run dev
```

### 4. Build for Production
To create a production-ready bundle:
```bash
npm run build
```
