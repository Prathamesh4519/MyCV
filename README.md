# MyCV — Interactive Developer Portfolio & CV 🚀

An interactive, high-performance personal portfolio and CV built with React 19, Three.js, Vite, Tailwind CSS, Framer Motion, and Node.js/Express with MongoDB.

---

## ✨ Features

- **Dynamic Visuals:** Custom Aurora and Spotlight particle background shaders with Three.js / OGL.
- **Interactive Command Palette:** Instant keyboard shortcut navigation (`Cmd/Ctrl + K`).
- **Comprehensive CV Sections:**
  - **Hero & About:** Introduction, status badge, and quick bio.
  - **Skills Matrix:** Categorized technical proficiencies with animations.
  - **Projects Showcase:** Featured works with live demo and GitHub links.
  - **Achievements & Certifications:** Verified honors and recognitions.
  - **Experience & Learning Journey:** Career trajectory and roadmap.
  - **Interactive Contact:** Direct messaging form integrated with MongoDB backend.
  - **Resume Modal:** Instant interactive resume view & PDF download.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide Icons, Canvas Confetti
- **3D / Graphics:** Three.js, OGL, Postprocessing
- **Backend:** Node.js, Express.js
- **Database:** MongoDB & Mongoose
- **Deployment:** Firebase / Vercel ready

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- MongoDB (Local or MongoDB Atlas)

### 2. Installation
```bash
git clone https://github.com/Prathamesh4519/MyCV.git
cd MyCV
npm install
```

### 3. Environment Configuration
Create a `.env` file from the example:
```bash
cp .env.example .env
```
Configure your MongoDB connection string in `.env`:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio_db
PORT=5000
```

### 4. Running the Development Server
```bash
# Run both frontend and backend concurrently
npm run dev:all

# Or run frontend only
npm run dev

# Or run backend API only
npm run server
```

### 5. Production Build
```bash
npm run build
npm run preview
```
