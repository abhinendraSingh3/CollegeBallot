# 🗳️ **CollegeBallot**
## 🚀 **A Full Stack Online Voting System for Colleges**

---

## 📌 **Overview**
**CollegeBallot** is a full-stack web application that allows students to securely participate in college elections.  
It ensures fair voting with authentication, one-user-one-vote logic, and real-time result updates.

---

## ✨ **Features**

- 🔐 **Authentication & Authorization**
  - Secure login & registration
  - Role-based access (Admin / Student)

- 🧑‍🎓 **Student Panel**
  - Register with details + profile image
  - View candidates
  - Cast vote (**one vote per user**)

- 🧑‍💼 **Admin Panel**
  - Manage candidates
  - Monitor voting process
  - View results

- 📊 **Real-Time Results**
  - Live updates using **Socket.IO**

- ⚡ **Security**
  - Rate limiting
  - Protected routes
  - Password hashing

---

## 🛠️ **Tech Stack**

**Frontend:** React.js, CSS, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Other Tools:** JWT, Socket.IO, Multer  

---

## 📁 **Project Structure**

```bash
CollegeBallot/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── api.js
│
├── backend/
│   ├── config/
│   ├── controller/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── server.js
│   └── .env
```

---

## ⚙️ **Installation & Setup**

### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/your-username/CollegeBallot.git
cd CollegeBallot
```

---

### 2️⃣ **Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:
```bash
npm start
```

---

### 3️⃣ **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

---

## 🔌 **API Endpoints**

### 🔐 **Auth**
- POST `/api/auth/register`
- POST `/api/auth/login`

### 🧑‍💼 **Candidates**
- GET `/api/candidates`
- POST `/api/candidate`

### 🗳️ **Voting**
- POST `/api/vote`
- GET `/api/results`

---

## 🔒 **Security Features**

- 🔐 JWT Authentication  
- 🔑 Password Hashing  
- ⚡ Rate Limiting  
- 🗳️ One User → One Vote  

---

## 📡 **Real-Time Updates**

- 📊 Live voting results using **Socket.IO**

---

## 🧠 **Future Improvements**

- ✉️ Email verification  
- 🧑‍💻 Admin dashboard UI  
- 📅 Election scheduling  
- 📱 Mobile responsiveness  

---

## 🤝 **Contributing**

Contributions are welcome!  
Feel free to fork this repository and submit a pull request.

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

## 👨‍💻 **Author**

**Abhinendra Singh**  

