# School Management System API

## Overview

The School Management System API is a RESTful API built using Node.js, Express, MongoDB, and Mongoose. This API provides a backend service for managing school-related entities such as students, teachers, classes, and subjects. The project also includes user authentication using bcrypt for password hashing and JSON Web Tokens (JWT) for secure session management.

## Features

- **User Authentication**: Secure user registration and login with password hashing and JWT-based authentication.
- **CRUD Operations**: Create, Read, Update, and Delete operations for managing students, teachers, classes, and other school-related entities.
- **Role-Based Access Control**: User roles (e.g., admin, teacher, student) to manage access to different resources.
- **Token-Based Authentication**: Protects sensitive routes using JWT tokens.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js, used to create the API endpoints.
- **MongoDB**: NoSQL database used for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken (JWT)**: Library for creating and verifying JSON Web Tokens.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud-based like MongoDB Atlas)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/school-management-system-api.git
   cd school-management-system-api

2. **Install the dependencies:**

    npm install 

2. **Run the server:**

    npm start


    