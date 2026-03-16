# Task_management_system

# Task Manager API + Simple UI

A simple Task Management System built with **Node.js**, **Express.js**, and **MongoDB**, along with a basic HTML/CSS frontend to interact with the APIs.

---

## 🚀 Features
- Create, read, update, and delete tasks
- Task fields:
  - `title` (String)
  - `description` (String)
  - `status` (pending/completed)
  - `priority` (low/medium/high)
  - `createdAt` (Date)
- Filter tasks by status (e.g., `/api/tasks?status=pending`)
- Simple UI:
  - Task creation form
  - Task list table with actions (mark complete, delete)

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Frontend:** HTML, CSS, JavaScript (optional for API calls)
- **Version Control:** Git + GitHub

---
## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/task_management_system.git
cd task_management_system

### 2. Install dependencies
### 3. Configure environment variables
MONGO_URI=mongodb://localhost:27017/tasks OR Mongo Atlas URI
PORT=5000
### 4. Run server


