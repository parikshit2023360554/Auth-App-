# Authentication Web Application

A full-stack authentication application built with React frontend and Express.js backend, featuring user registration, login, and protected routes with JWT token authentication.

## Features

- **User Registration & Login**: Secure user authentication with form validation
- **JWT Token Authentication**: Stateless authentication using JSON Web Tokens
- **Protected Routes**: Route protection for authenticated users only
- **Password Security**: Bcrypt password hashing for secure storage
- **Modern UI**: Responsive design with gradient backgrounds and animations
- **User Profile**: Display user information on the home page
- **Context API**: Global state management for authentication

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database (with Mongoose ODM)
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **Context API** - State management
- **Axios** - HTTP client
- **CSS3** - Styling with animations

## Project Structure

```
Auth-App-/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Authentication context
│   │   ├── pages/          # Page components
│   │   └── App.js          # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Auth-App-
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```
   Or install manually:
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server && npm install
   
   # Install client dependencies
   cd ../client && npm install
   ```

3. **Environment Setup**
   
   Update the server `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth-app
   JWT_SECRET=your_secure_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Database Setup**
   - Make sure MongoDB is running locally, or
   - Update `MONGODB_URI` in `.env` to point to your MongoDB Atlas cluster

### Running the Application

1. **Development Mode** (runs both frontend and backend):
   ```bash
   npm run dev
   ```

2. **Run separately**:
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run client
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## API Endpoints

### Authentication Routes (`/api/auth`)

- **POST** `/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **POST** `/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **GET** `/me` - Get current user (Protected)
  - Requires: `Authorization: Bearer <token>` header

## Usage

1. **Registration**: New users can create an account with name, email, and password
2. **Login**: Existing users can log in with email and password
3. **Home Page**: After login, users see a welcome message with their name
4. **Logout**: Users can logout, which clears the authentication token
5. **Route Protection**: Unauthenticated users are redirected to login page

## Security Features

- Password hashing with bcrypt
- JWT token expiration (7 days)
- Input validation and sanitization
- Protected routes with middleware
- CORS configuration
- Environment variable protection

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.