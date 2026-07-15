# 🗳️ Campus Voting System

A secure and modern **Online Campus Voting System** that enables students to vote digitally while providing administrators with tools to manage candidates, elections, and results. The application uses JWT authentication, role-based authorization, and real-time election management.

---

## 🚀 Features

### 👨‍🎓 Student
- Register and Login
- Secure JWT Authentication
- View Profile
- Change Password
- Cast Vote
- View Voting Status
- View Voting Events
- Check Whether Already Voted
- View Election Results
- View Winner

### 👨‍💼 Admin
- Create Candidates
- Manage Elections
- View Election Results
- Manage Voting Events
- Secure Role-Based Access

### 🔒 Security
- JWT Authentication
- Password Hashing
- Rate Limiting
- Role-Based Access Control (RBAC)
- Protected Routes

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Express Rate Limiter

---

# 📂 Project Structure

```
Campus-Voting-System
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── Components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── socket
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/abhinendraSingh3/campus-voting-system.git
```

```bash
cd campus-voting-system
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

JWT_REFRESH_SECRET=your_refresh_secret
```

Run server

```bash
npm start
```

or

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/student/signup` | Register Student |
| POST | `/student/login` | Login |
| POST | `/student/refreshtoken` | Refresh JWT |
| GET | `/student/profile` | Student Profile |
| PUT | `/student/profile/password` | Change Password |

---

## Voting

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/vote/casteVote` | Cast Vote |
| GET | `/vote/myvotes` | Voting Status |
| GET | `/vote/voteevents` | View Voting Events |
| GET | `/vote/checkvote` | Check Vote |
| GET | `/vote/viewResult` | Election Result |
| GET | `/vote/winner` | Winner |

---

## Candidate

| Base URL |
|----------|
| `/candidate` |

Candidate CRUD endpoints are available under this route.

---

## Voting Events

| Base URL |
|----------|
| `/votingEvents` |

---

## Result

| Base URL |
|----------|
| `/result` |

---

# 🔐 Authentication

Protected APIs require a JWT token.

Example

```http
Authorization: Bearer <your_token>
```

---

# 🗃️ Database Schema

### Student

```text
name
email
studentId
department
password
role
```

### Candidate

```text
candidateName
department
position
votes
```

### Vote

```text
studentId
candidateId
timestamp
```

### Election

```text
title
startDate
endDate
status
```

---

# 📈 Future Improvements

- Email Verification
- Forgot Password
- OTP Authentication
- Live Vote Count
- Admin Dashboard Analytics
- Unit Testing
- CI/CD Pipeline
- Audit Logs
- Election Scheduling
- Develop Profile Section

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/your-feature
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature/your-feature
```

5. Open a Pull Request

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

# 👨‍💻 Author

**Abhinendra Singh**

---

## 📄 License

This project is licensed under the MIT License.
