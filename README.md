# 🍔 Food Delivery App

A full-stack food delivery web application built with React and Node.js. Users can browse menus, place orders, and pay online — while admins manage products and orders through a dedicated dashboard.

---

## 🗂️ Project Structure

```
food-del-react/
├── frontend/   # Customer-facing React app
├── Admin/      # Admin dashboard (React)
└── backend/    # REST API (Node.js + Express)
```

---

## ✨ Features

### Customer App
- Browse food menu by category
- Add items to cart and place orders
- Secure checkout with **Stripe** payment integration
- User registration and login (JWT-based auth)

### Admin Dashboard
- Add, update, and delete food items (with image upload)
- View and manage all orders
- Update order status in real time

### Backend API
- RESTful API with Express
- MongoDB database via Mongoose
- JWT authentication & bcrypt password hashing
- File uploads handled with Multer
- Stripe payment processing

---

## 🛠️ Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 18, Vite, React Router DOM, Axios         |
| Admin     | React 18, Vite, React Router DOM, React Toastify|
| Backend   | Node.js, Express, MongoDB, Mongoose             |
| Auth      | JWT, Bcrypt                                     |
| Payments  | Stripe                                          |
| Uploads   | Multer                                          |
| Mobile    | Capacitor (Android)                             |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Stripe account (for payment keys)

---

### 1. Clone the Repository

```bash
git clone https://github.com/AabuUbaid/food-del-react.git
cd food-del-react
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the server:

```bash
npm run server
```

The API will run on `http://localhost:4000`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The customer app will run on `http://localhost:5173`

---

### 4. Admin Setup

```bash
cd Admin
npm install
npm run dev
```

The admin dashboard will run on `http://localhost:5174`

---

## 📁 Environment Variables

| Variable           | Description                        |
|--------------------|------------------------------------|
| `PORT`             | Backend server port                |
| `MONGO_URI`        | MongoDB connection string          |
| `JWT_SECRET`       | Secret key for JWT tokens          |
| `STRIPE_SECRET_KEY`| Stripe secret key for payments     |

---

## 📸 Screenshots

> *Coming soon*

---

## 🚀 Deployment

- Frontend & Admin can be deployed on **Vercel** or **Netlify**
- Backend can be deployed on **Render** or **Railway**
- Use **MongoDB Atlas** for cloud database

---

## 👨‍💻 Author

**Abu Ubaid**  
[GitHub](https://github.com/AabuUbaid) • [Portfolio](https://aabuubaid.github.io/portfolio/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
