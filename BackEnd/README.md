# AspireNex Quiz Backend

This is the backend of the AspireNex Quiz application, built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- MongoDB installed locally or have access to a MongoDB Atlas cluster.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kavya-codes/AspireNex_Quiz.git
   cd AspireNex_Quiz

**2. Install dependencies:**

npm install

**3. Create a `.env` file in the root directory and add the following:**

MONGO_URI=mongodb://localhost/quizdb
JWT_SECRET=your_jwt_secret

**4. Start the server:**

node server.js

**Project Structure**

-`server.js`: The main entry point of the application.
-`models/`: Contains the Mongoose models (Quiz and User).
-`routes/`: Contains the route handlers for quizzes and authentication.
-`middleware/`: Contains middleware functions for authentication and error handling.

**API Endpoints**

**Authentication**

1.)POST /api/auth/register

-Registers a new user.
-Request body: { "username": "your_username", "password": "your_password" }
-Response: { "token": "jwt_token" }

2.)POST /api/auth/login

-Logs in a user.
-Request body: { "username": "your_username", "password": "your_password" }
-Response: { "token": "jwt_token" }

**Quizzes**

1.)GET /api/quizzes

-Gets all quizzes.
-Headers: Authorization: Bearer jwt_token
-Response: [{ "title": "Quiz Title", "questions": [ { "questionText": "Question?", "options": ["Option1", "Option2"], "correctAnswer": "Option1" } ] }]

2.)POST /api/quizzes

-Creates a new quiz.
-Headers: Authorization: Bearer jwt_token
-Request body:
{
  "title": "Quiz Title",
  "questions": [
    { 
      "questionText": "Question?",
      "options": ["Option1", "Option2"],
      "correctAnswer": "Option1"
    }
  ]
}

-Response: { "title": "Quiz Title", "questions": [ { "questionText": "Question?", "options": ["Option1", "Option2"], "correctAnswer": "Option1" } ] }

**Error Hnadling**

This application includes basic error handling middleware to handle errors and send appropriate responses.

**LICENSE**

This project is licensed under the MIT License. See the LICENSE file for details.
