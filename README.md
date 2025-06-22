# 📝 Blog Dashboard Interface (React + Redux Toolkit)

A fully responsive **Blog Dashboard** web app built with **React.js**, **Redux Toolkit**, and **Tailwind CSS**. Users can view, filter, and add blog posts in a clean, mobile-friendly UI. This project was developed as part of a scenario-based assignment.

---

## 🔍 Features

- ✅ Fetch blog posts from an external API (JSONPlaceholder)
- 📁 Display blog cards with title, body, category, and author
- 🔍 Filter blog posts by category: **Tech**, **Lifestyle**, **News**, or **All**
- ➕ Add new blog posts via a modal form
- 🌓 Dark/Light mode toggle support
- 📱 Fully responsive design (mobile & desktop)
- ⚙️ State management using Redux Toolkit

---

## 🧪 Technologies Used

| Tech               | Purpose                             |
|--------------------|-------------------------------------|
| React.js           | Component-based UI                  |
| Redux Toolkit      | State management                    |
| Tailwind CSS       | Utility-first CSS framework         |
| Axios              | HTTP requests                       |
| JSONPlaceholder API| Dummy data source for blog content  |

---

## 📁 Project Structure

blog-dashboard/
├── public/ # Static files
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx
│ │ ├── Sidebar.jsx
│ │ ├── BlogList.jsx
│ │ ├── BlogCard.jsx
│ │ └── AddPostModal.jsx
│ ├── redux/ # Redux Toolkit setup
│ │ ├── store.js
│ │ └── blogSlice.js
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
│ └── index.css # Tailwind setup
├── .env.example
├── README.md
└── package.json

# blog-dashboard
