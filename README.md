# 🏨 GSM — Guest Service Management & Hotel Operations Platform

A modern, full-featured **Guest Service Management (GSM)** & Hospitality Operations SaaS platform built with **Next.js 16 (App Router)**, **React 19**, **Prisma ORM (SQLite / PostgreSQL)**, and **Tailwind CSS**.

---

## 🌟 Key Functional Views

### 1. 📱 Guest Portal (`/ or ?view=guest`)
- **QR-Code In-Room Access**: Deep link directly to room (`?hotel=shams_resort&room=305&lang=ar`).
- **One-Tap Requests**: Quick category navigation (Housekeeping, Maintenance, In-Room Dining, Front Desk, Laundry).
- **Customized Submissions**: Select specific options, urgency level (Normal, High, Urgent 🔴), and add special notes.
- **4-Step Live Tracking**: Received ➡️ Assigned ➡️ In Progress ➡️ Completed.
- **Real-Time Ticket Chat**: Direct in-ticket messaging with assigned staff members.
- **Guest Feedback & Rating**: 5-star satisfaction rating with compliment tags and celebratory confetti.
- **🚨 Direct Manager Hotline**: Immediate escalation channel to hotel duty management for urgent concerns.

### 2. 👷 Department Staff Station (`?view=staff`)
- **Department Tasks Queue**: Filter tickets by Department (Maintenance, Housekeeping, etc.) or operational state.
- **Ticket Claiming & Workflow**:
  - `Claim Ticket (استلام)` ➡️ Assigns staff member.
  - `Start (بدء التنفيذ)` ➡️ Sets ticket to *In Progress*.
  - `Complete (إنهاء)` ➡️ Prompts for staff resolution note and completes the task.
  - `Transfer (تحويل لقسم آخر)` ➡️ Reassigns ticket across departments with audit notes.
- **Printable Job Cards / Work Orders**: Clean printable slips formatted for on-site staff.

### 3. 🚨 Operational Room Map (`?view=rooms`)
- **Active Service Rooms (الخدمات الجارية)**: Instant visibility into all rooms currently receiving services with live timers and staff assignment.
- **Completed Today (المنجزة اليوم)**: Audit trail of all serviced rooms with staff resolution notes and guest satisfaction stars.
- **Interactive Whole-Hotel Floor Map**: Floor-by-floor occupancy and room status indicators (Clear 🟢, Service 🟡, Maintenance Alert 🔴).
- **Room Inspector**: Quick action drawer to inspect tickets, view room as a guest, or generate dedicated QR codes.

### 4. 📊 Shams Group Multi-Property HQ (`?view=admin`)
- **Multi-Property Performance Matrix**: Live comparison across 4 hotel properties (Shams Resort & Spa, Shams Lodge, Shams Imperial, Shams Prestige).
- **Executive KPIs**: Total requests, open tickets, avg response time (minutes), avg resolution time (minutes), guest rating (⭐), and tickets completed today.
- **Staff Performance Leaderboards**: Completed task velocity and guest ratings per staff member.
- **CSV Data Export**: One-click report download containing full operational logs.

### 5. ⚙️ SaaS Settings & Configuration (`?view=settings`)
- **Service Catalog Management**: Add and toggle services across departments with target SLA response times.
- **Department SLAs**: Configurable response targets in minutes.

---

## 🌍 Multi-Language & RTL Support
Built-in native support with instant switching and auto-direction (`dir="rtl"` / `dir="ltr"`):
- 🇸🇦 **العربية** (Arabic - Full RTL layout and Cairo typography)
- 🇬🇧 **English**
- 🇩🇪 **Deutsch** (German)
- 🇷🇺 **Русский** (Russian)
- 🇫🇷 **Français** (French)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup (Prisma SQLite)
```bash
# Push schema to database
npx prisma db push

# Seed sample hotels, departments, services, staff, and initial rooms
node prisma/seed.js
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm run start
```

### Deploying to Vercel / Render / Railway
1. Set the environment variable `DATABASE_URL="file:./gsm_database.db"` (or point to a hosted PostgreSQL database by updating `datasource db` in `prisma/schema.prisma`).
2. Set the build command: `npx prisma db push && node prisma/seed.js && npm run build`
3. Set the output directory to standard Next.js output.

---

## 🔒 Security & Guest Isolation Mode
- **Guest Mode Lock**: Click "Lock as Guest" in the navigation bar to isolate the UI to the pure Guest Portal, hiding all management, staff, and admin tabs from hotel guests.
- **Staff PIN Unlock**: Enter PIN `1234` or `admin` to unlock staff station and administrative controls.
