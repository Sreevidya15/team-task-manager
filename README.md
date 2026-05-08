# Team Task Manager

A full-stack MERN application for managing team tasks and projects with role-based access control.

## Features

- **Authentication**: User registration and login with JWT tokens
- **Role-based Access Control**: Admin and Member roles
- **Project Management**: Create, edit, delete projects (Admin only)
- **Task Management**: Create, assign, update, and track tasks
- **Dashboard**: Overview of tasks, statistics, and progress
- **Responsive UI**: Modern, mobile-friendly interface

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, React Router, Axios, Bootstrap
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing, Helmet for security headers

## Project Structure

```
team-task-manager/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── roleCheck.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── tasks.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js
    │   │   └── Sidebar.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Dashboard.js
    │   │   ├── Projects.js
    │   │   └── Tasks.js
    │   ├── utils/
    │   │   └── api.js
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    ├── .env
    └── package.json
```

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/team-task-manager
   JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
   JWT_EXPIRE=30d
   FRONTEND_URL=http://localhost:3000
   ```

4. Start MongoDB service (if running locally)

5. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000`

2. Register a new account (first user can be admin)

3. Login with your credentials

4. Access the dashboard to view task statistics

5. Navigate to Projects to manage projects (Admin only)

6. Navigate to Tasks to view and manage your assigned tasks

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user info

### Projects (Admin only)
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Tasks
- `GET /api/tasks` - Get all tasks (role-based)
- `POST /api/tasks` - Create new task (Admin only)
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task (Admin only)

## Database Models

### User
- name: String (required)
- email: String (required, unique)
- password: String (required, hashed)
- role: String (admin/member, default: member)

### Project
- title: String (required)
- description: String (required)
- members: Array of User references
- createdBy: User reference (required)

### Task
- title: String (required)
- description: String (required)
- status: String (pending/in-progress/completed)
- priority: String (low/medium/high)
- assignedTo: User reference (required)
- project: Project reference (required)
- deadline: Date (required)

## Deployment

### Backend Deployment (Railway)
1. Create a Railway account
2. Connect your GitHub repository
3. Set environment variables in Railway dashboard
4. Deploy

### Frontend Deployment
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes with middleware
- Input validation and sanitization
- CORS configuration
- Security headers with Helmet

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.