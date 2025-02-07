# Markdown Note-taking App (Frontend)

## 📌 Overview

This is the frontend for the Markdown Note-taking App, built with **React.js (Vite)** and styled using **Tailwind CSS**. It allows users to create, view, and check the grammar of Markdown notes.

## 🚀 Features

- Create and save Markdown notes.
- View a list of saved notes.
- Convert Markdown to HTML.
- Check grammar using an API.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **API Calls:** Fetch API
- **Routing:** React Router

---

## 🔧 Installation & Setup

### **1️⃣ Clone Repository**

```sh
git clone https://github.com/07krW5Hnr5ghy/markdown-note-frontend.git
cd markdown-note-frontend
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a `.env` file in the root directory and add:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### **4️⃣ Start Development Server**

```sh
npm run dev
```

---

## 📌 Project Structure

```
📂 src
 ├── 📂 api         # API functions
 ├── 📂 components  # Reusable UI components
 ├── 📂 pages       # Page components
 ├── 📂 styles      # Tailwind CSS configuration
 ├── App.jsx        # Main App component
 ├── main.jsx       # React entry point
```

---

## 📌 Usage

### **1️⃣ Create a Note**

- Enter a title and Markdown content in the editor.
- Click **Save Note** to store it.

### **2️⃣ View Saved Notes**

- The homepage lists all saved notes.
- Click on a note to view its **HTML-rendered version**.

### **3️⃣ Check Grammar**

- Click **Check Grammar** to highlight grammar mistakes.

---

## 📄 Deployment

### **Build for Production**

```sh
npm run build
```

This will generate optimized files in the `dist/` folder.

### **Deploy to Vercel or Netlify**

- Add **VITE_API_BASE_URL** as an environment variable in your hosting settings.
- Deploy via the hosting platform dashboard.
