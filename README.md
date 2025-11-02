# 🧠 Therapy Session Quick Notes

A modern, minimalistic web app for therapists to record and manage their session notes efficiently.  
Built with **React + TypeScript + Material UI + Supabase (Database + Edge Functions)**.

![React](https://img.shields.io/badge/React-18.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![MaterialUI](https://img.shields.io/badge/Material_UI-5.0-blue?logo=mui)
![Supabase](https://img.shields.io/badge/Supabase-Backend-success?logo=supabase)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🌟 Features

- 📝 Add session notes with:
  - Client name  
  - Session date  
  - Quick notes (up to 500 chars)  
  - Duration (validated by Supabase Edge Function)
- 📋 View and manage all notes (sorted by session date)
- 🗑️ Delete notes with confirmation dialog
- ☁️ Supabase-powered real-time storage
- ⚡ Built with Vite for fast local development

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React (Vite) + TypeScript |
| UI | Material UI (MUI) |
| Backend | Supabase Database + Edge Function (Deno) |
| Data Handling | Supabase JS Client |
| Validation | Supabase Edge Function for Duration Check |

---

## 📁 Project Structure

session-notes/
├── src/
│ ├── components/
│ │ ├── NoteForm.tsx # Add new notes
│ │ └── NoteList.tsx # List and delete notes
│ ├── hooks/
│ │ └── useSessionNotes.ts # Custom hook for Supabase CRUD
│ ├── lib/
│ │ └── supabaseClient.ts # Supabase initialization
│ ├── App.tsx # Main app
│ └── main.tsx # Entry point
│
├── supabase/
│ └── functions/
│ └── validate-session-note/
│ └── index.ts # Edge Function for validation
│
├── .env
├── package.json
├── tsconfig.json
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/session-notes.git
cd session-notes

npm install
