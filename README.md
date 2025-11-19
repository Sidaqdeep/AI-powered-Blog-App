📝 AI-Powered Blog Application (MERN Stack)

An advanced full-stack blog platform built using the MERN stack with integrated AI-powered blog content generation.
Admin users can create, manage, and publish blogs, while readers can explore, search, and comment on posts.
Images are optimized using ImageKit, and the entire app is deployed online.

🚀 Features
👥 User Features

Browse all published blog posts

Search blogs by title or category

Filter blogs by predefined categories

Read full blog with title, subtitle, date, image & description

Post comments on blog articles

Share blogs on social platforms

🛠️ Admin Features

Admin login & authentication

Create new blog posts

Generate blog description using AI

Upload & optimize images via ImageKit

Publish / Unpublish blogs

Edit or delete blog posts

View dashboard stats (blogs, drafts, comments)

Manage user comments (approve/delete)

🤖 AI Integration

AI auto-generates high-quality blog descriptions

Improves writing workflow

Ensures consistent content creation

🧰 Tech Stack
Frontend

React.js

HTML, CSS

Tailwind CSS

Backend

Node.js

Express.js

Database

MongoDB

Image Management

ImageKit (Upload, Compression, Optimization)

AI

AI-based blog description generator (via API integration)

Deployment

Vercel (Frontend + Backend)

📂 Folder Structure
AI-powered-Blog-App/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.js
│
└── frontend/
    ├── src/
    ├── components/
    ├── pages/
    ├── context/
    └── App.js

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Sidaqdeep/AI-powered-Blog-App.git
cd AI-powered-Blog-App

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_uri
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
AI_API_KEY=your_ai_key
JWT_SECRET=your_secret


Start backend:

npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🌐 Deployment

This project is deployed using Vercel.
All environment variables must be added in Vercel’s dashboard under Project Settings → Environment Variables.

🎥 Demo

(Add your live link or demo video here)

🖼️ Screenshots

(Add screenshots of homepage, admin dashboard, blog page, etc.)

📌 Future Improvements

Add user authentication

Add rich-text blog editor

Add social login for comment posting

Add pagination & infinite scrolling
