# Task_management_system

# Task Manager API + Simple UI

A simple Task Management System built with **Node.js**, **Express.js**, and **MongoDB**, along with a basic HTML/CSS frontend to interact with the APIs.

---
##  Features
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
##  Installation & Setup

### 1. Clone the repository
git clone https://github.com/your-username/task_management_system.git
cd task_management_system

### 2. Install dependencies (express dotenv morgan cors )
### 3. Configure environment variables
MONGO_URI=mongodb://localhost:27017/tasks OR Mongo Atlas URI
PORT=5000
### 4. Run server

## Task API Endpoints (request and response)

## Frontend (Create Task)
<img width="944" height="917" alt="image" src="https://github.com/user-attachments/assets/e23b222f-d9c5-4f00-a0d1-9cd4ac1045a7" />

## Frontend (Show Tasks)
<img width="944" height="855" alt="image" src="https://github.com/user-attachments/assets/5e771f45-c188-41eb-80b3-7a372ab44ac3" />


### 1. POST/api/task
<img width="976" height="738" alt="image" src="https://github.com/user-attachments/assets/e2e9011d-8e2e-4f20-a008-94de9b132266" />

### 2. GET/api/tasks

<img width="966" height="746" alt="image" src="https://github.com/user-attachments/assets/79f899e5-d4f6-4e60-8e0e-edcae74a570f" />

### 3. GET/api/tasks/:id

<img width="961" height="616" alt="image" src="https://github.com/user-attachments/assets/6477ec17-9e30-402e-9964-df34bbee5b77" />

### 4. PUT/api/task

<img width="1377" height="772" alt="image" src="https://github.com/user-attachments/assets/753065d7-eea0-47cb-8bb1-62e7e2012071" />

### 5. GET/api/tasks?status=pending

<img width="1366" height="881" alt="image" src="https://github.com/user-attachments/assets/75705162-844a-4b88-bcd7-c8290a8d8cae" />

### 6. DELETE/api/task/:id

<img width="1386" height="460" alt="image" src="https://github.com/user-attachments/assets/25ea4f5f-ef62-4bcd-a621-cd3ba592f503" />

