📝 AI-Powered Blog Application (MERN Stack)

A full-stack blogging platform built using the MERN stack with integrated AI-powered blog content generation.
The app supports admin-managed blog creation, AI-based content generation, ImageKit optimization, and full CRUD functionality.

🚀 Features
👥 User Features

View all published blogs

Search blogs by title or category

Filter blogs using category tags

Read full articles with images, titles & descriptions

Add comments on blogs

Share articles through social icons

🔐 Admin Features

Admin authentication

Create & publish blog posts

AI-generated blog content

Upload & optimize images using ImageKit

Edit, delete, publish/unpublish blogs

Dashboard stats (blogs, drafts, comments)

Manage comments (approve/delete)

🤖 AI Integration

AI auto-generates long blog descriptions

Removes manual writing workload

Ensures quality & consistent content creation

🧰 Tech Stack
Frontend (client)

React.js

HTML, CSS

Tailwind CSS

Backend (server)

Node.js

Express.js

Database

MongoDB

Image Handling

ImageKit (image upload, compression, optimization)

AI

AI-based blog description generator API

Deployment

Vercel

📁 Folder Structure
AI-powered-Blog-App/
│── client/        # React frontend
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── ...
│
└── server/        # Node.js backend
    ├── controllers/
    ├── models/
    ├── routes/
    ├── config/
    └── index.js

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Sidaqdeep/AI-powered-Blog-App.git
cd AI-powered-Blog-App

2️⃣ Backend Setup (server)
cd server
npm install


Create .env file:

MONGO_URI=your_mongo_uri
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
AI_API_KEY=your_ai_key
JWT_SECRET=your_secret


Start server:

npm run dev

3️⃣ Frontend Setup (client)
cd ../client
npm install
npm start

🌐 Deployment

Frontend and backend deployed using Vercel

Add environment variables inside Vercel project settings

🎥 Demo

(Add your live link here)

🖼️ Screenshots

(Add homepage, admin dashboard, blog detail page screenshots)

📌 Future Enhancements

Rich text blog editor

User authentication for comments

Bookmark/favorite blogs

Infinite scroll / pagination
