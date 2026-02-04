# 🚀 Frontend Monorepo with Shared UI (Turborepo)

A modern **frontend monorepo** setup built using **Turborepo**, where multiple frontend applications share a **single reusable UI component library**.  
This project demonstrates **real-world frontend architecture**, scalability, and clean UI practices.

---

## ✨ Project Overview

This monorepo contains two independent frontend applications:

- **Marketing App** – Public-facing landing page  
- **Dashboard App** – Internal admin-style application  

Both applications **share a common UI package**, proving how reusable components can be managed efficiently in a large-scale frontend system.

> 💡 The goal of this project is to showcase **industry-level frontend architecture**, not just UI.

---




---

## 🧩 Shared UI Package

The **UI package** contains reusable components used across both apps.

### Example:
- `Button` component  
- Same styling, same behavior  
- Used in **Marketing** and **Dashboard** without duplication

This ensures:
- Consistent UI
- Faster development
- Easier maintenance

---

## 🖥️ Applications

### 🌐 Marketing App
- Clean landing page
- CTA buttons
- Demonstrates shared UI usage
- Runs independently

📍 **URL:** `http://localhost:3000`

---

### 📊 Dashboard App
- Admin-style layout
- Stats cards & actions
- Premium SaaS-like UI
- Uses same shared Button component

📍 **URL:** `http://localhost:3001`

---

## 🛠️ Tech Stack

- **Next.js** – App Router
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Turborepo**
- **ESLint (shared config)**

---

## ⚡ Why Monorepo?

This setup reflects how **real companies** structure frontend systems.

### Benefits:
- Code reusability
- Single source of truth for UI
- Faster builds with Turborepo caching
- Clean separation of concerns
- Easy scalability

> Marketing and Dashboard are **separate apps**, not separate files — exactly how production systems work.

---

## ▶️ How to Run Locally

```bash
# Install dependencies
npm install

# Run all apps in parallel
npm run dev


Ports:

Marketing → http://localhost:3000

Dashboard → http://localhost:3001

## 🏗️ Monorepo Structure

```text
frontend-monorepo/
├── apps/
│   ├── marketing/        # Marketing website (Next.js)
│   └── dashboard/        # Dashboard application (Next.js)
│
├── packages/
│   ├── ui/               # Shared UI components (Button, Modal, etc.)
│   ├── eslint-config/    # Shared ESLint configuration
│   └── typescript-config/# Shared TypeScript configuration
│
├── turbo.json            # Turborepo pipeline configuration
├── package.json          # Root dependencies & scripts
└── README.md             # Project documentation
