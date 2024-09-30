# Apparel Recycling MVP

This is an MVP (Minimum Viable Product) platform that allows users to submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. It is developed as part of a challenge and includes both a backend and frontend, with the frontend served from the backend in a monorepo structure.

## Technologies Used
The application is built using the following technologies:
1. **Frontend**: React with Tailwind CSS for styling
2. **Backend**: Node.js with Express.js
3. **Database**: MongoDB (via a virtual MongoDB Atlas cluster)
4. **Environment Variables**: Configured using `.env` for MongoDB connection URL and server port

## How to Run the Project Locally

### Prerequisites
Ensure you have the following installed:
1. Node.js (v14.x or higher)
2. npm (v6.x or higher)
3. MongoDB Atlas account (or a local MongoDB instance)

### Steps to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/apparel-recycling-mvp.git
   cd apparel-recycling-mvp


2. **Install Dependencies**: 
   Run the following command in the root directory of the project:
   ```bash
   npm install
   

2. **to the frontend, you need to rebuild the React app:**:
3. ```bash
   cd backend/frontend
   npm run build
4.**Run the Backend: Now, return to the root directory and run the backend, which also serves the frontend:**
    ```bash
    
    nodemon index.js

     
**Access the App: Open your browser and navigate to http://localhost:6060. You should see the app running with both frontend and backend connected.**
