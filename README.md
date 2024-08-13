**User Authentication System - Backend**
        This project implements a backend REST API for user registration and login, using Node.js, Express, and MongoDB with Mongoose. 
        It provides secure authentication features, including password hashing and JWT-based token authentication.

**Table of Contents**
        Project Overview
        Features
        Installation
        Environment Variables
        Running the Application
        API Endpoints
        Technologies Used
        License
        Project Overview
**The backend API allows users to:**

Register: Create a new user account with a name, email, and password.
Login: Authenticate using email and password to receive a JWT token for secure access.
This backend serves as the foundation for a secure authentication system, designed to be integrated with a frontend interface.

User Authentication System - Backend
This project implements a backend REST API for user registration and login, using Node.js, Express, and MongoDB with Mongoose. It provides secure authentication features, including password hashing and JWT-based token authentication.

**Table of Contents**        
        Project Overview
        Features
        Installation
        Environment Variables
        Running the Application
        API Endpoints
        Technologies Used
        License
        Project Overview
        
**The backend API allows users to:**

**Register:** Create a new user account with a name, email, and password.
**Login:** Authenticate using email and password to receive a JWT token for secure access.

This backend serves as the foundation for a secure authentication system, designed to be integrated with a frontend interface.

**Features**

**User Registration:** Validates user input and hashes passwords before storing them in the database.
**User Login**: Authenticates users and provides a JWT token for secure access to protected routes.
**Input Validation:** Uses express-validator to ensure data integrity.
**Error Handling:** Provides meaningful error messages for invalid input and server issues.
**User Registration:** Validates user input and hashes passwords before storing them in the database.
**User Login:** Authenticates users and provides a JWT token for secure access to protected routes.
**Input Validation:** Uses express-validator to ensure data integrity.
**Error Handling:** Provides meaningful error messages for invalid input and server issues.

**Technologies Used:**
        Node.js:JavaScript runtime for building the backend.
        Express: Web framework for Node.js.
        MongoDB: NoSQL database for storing user data.
        Mongoose: ODM for MongoDB, used for database operations.
        bcryptjs: Library for hashing passwords.
        jsonwebtoken: Library for generating and verifying JWT tokens.
        express-validator: Middleware for validating user input.
