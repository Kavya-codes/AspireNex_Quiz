**AspireNex Quiz - Task 3**

AspireNex Quiz is a MERN stack-based online quiz application for creating and managing quizzes.

**Table of Contents**

1.)Overview
2.)Features
3.)Technologies Used
4.)Project Structure
5.)Setup Instructions
a.)Backend Setup
b.)Frontend Setup
6.)Running the Application
7.)Deployment
8.)Contributing
9.)License

**1.) Overview**

AspireNex Quiz is a full-stack web application built using the MERN stack:

-MongoDB: NoSQL database for storing quiz data.
-Express.js: Node.js framework for building the backend API.
-React: Frontend library for building user interfaces.
-Node.js: Backend runtime environment.

The application allows users to create quizzes with multiple-choice questions and manage them through an intuitive user interface.

**2.) Features**

-Quiz Creation: Users can create new quizzes by adding questions and multiple-choice answers.
-Quiz Management: Edit, delete, and view details of created quizzes.
-User Authentication: Basic authentication system with login and registration functionality.
-Responsive Design: Mobile-friendly layout for seamless user experience across devices.

**3.) Technologies Used**

**BackEnd**

-Node.js: Runtime environment for server-side JavaScript.
-Express.js: Web framework for building APIs.
-MongoDB: NoSQL database for storing quiz data.
-Mongoose: MongoDB object modeling for Node.js.

**FrontEnd**

-React: JavaScript library for building user interfaces.
-React Router: Declarative routing for React applications.
-Axios: Promise-based HTTP client for making API requests.
-CSS: Custom styling for frontend components.

**Deployment**

-Heroku: Cloud platform for hosting the backend server.
-Netlify: Platform for hosting the frontend application.

**4.) Project Structure**

The project is organized into frontend and backend directories:

AspireNex_Quiz/
├── backend/          
│   ├── controllers/  
│   ├── models/       
│   ├── routes/       
│   ├── app.js       
│   ├── server.js     
│   ├── .env          
│   └── package.json  
│
├── frontend/        
│   ├── public/     
│   ├── src/          
│   │   ├── components/  
│   │   ├── pages/       
│   │   ├── services/  
│   │   ├── App.js     
│   │   ├── index.js     
│   │   └── App.css   
│   ├── .env           
│   ├── package.json   
│   └── README.md      
│
├── .env               
├── package.json       
├── README.md         
├── LICENSE            
└── .gitignore         

**5.) Setup Instructions**

**a.) BackEnd Setup**

1.)Clone the Repository:

git clone https://github.com/kavya-codes/AspireNex_Quiz.git
cd AspireNex_Quiz/backend

2.)Install Dependencies:

npm install

3.)Set Environment Variables:

-Create a .env file in the backend directory.
-Define environment variables such as PORT, MONGODB_URI, and JWT_SECRET.

4.)Run the Server:

npm start

5.)BackEnd API:

-The backend server will start at http://localhost:5000.
-API endpoints can be accessed for quiz management (/api/quizzes, /api/questions, etc.).

**b.) FrontEnd Setup**

1.)Navigate to Frontend Directory:

cd ../frontend

2.)Install Dependencies:

npm install

3.)Set Enviornment Variables:

-Create a .env file in the frontend directory.
-Define REACT_APP_API_URL as the URL of your backend API (http://localhost:5000).

4.)Run The Application:

npm start

5.)Access the Application

Open http://localhost:3000 in your web browser to view the application.

**6.)Running the Application**

-Development Mode: Use npm start in both backend and frontend directories concurrently for development.
-Production Build: Use npm run build in the frontend directory to create an optimized production build.

**7.)Deployment**

-Backend: Deploy the backend to a cloud platform like Heroku. Ensure to set environment variables (PORT, MONGODB_URI, etc.) in your hosting environment.
-Frontend: Deploy the frontend to a platform like Netlify. Configure environment variables (REACT_APP_API_URL) in your deployment settings.

**8.)Contributing**

Contributions are welcome! Fork the repository and submit a pull request with your changes or enhancements. Please follow the coding standards and conventions used in the project.

**9.)License**

This project is licensed under the MIT License. See the LICENSE file for details.
