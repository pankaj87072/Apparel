#This is an MVP (Minimum Viable Product) platform that allows users to submit information about their unused or worn-out apparel for proper disposal, donation, or recycling. It is developed as part of a challenge and includes both a backend and frontend, with the frontend served from the backend in a monorepo structure.

->The application is built using the following technologies:
   1->Frontend: React with Tailwind CSS for styling
   2->Backend: Node.js with Express.js 
   3->Database: MongoDB (via a virtual MongoDB Atlas cluster)
   4->Environment Variables: Configured using .env for MongoDB connection URL and server port

#How to Run the Project Locally
#Prerequisites
 ->Ensure you have the following installed:
   1->Node.js (v14.x or higher) 
   2->npm (v6.x or higher)
   3->MongoDB Atlas account (or local MongoDB instance)
#Steps to Run Locally
->Clone the repository:
#bash
#Copy code
->git clone https://github.com/yourusername/apparel-recycling-mvp.git
->cd apparel-recycling-mvp
->Install dependencies: Run the following command in the root directory of the project:
    -->npm install
Environment Variables: Create a .env file in the backend/ directory with the following content:
->MONGODB_URL=your-mongodb-atlas-url
->PORT=6060
#Build the Frontend: After making any changes to the frontend, you need to rebuild the React app:
->cd backend/frontend
->npm run build
Run the Backend: Now, return to the root directory and run the backend, which also serves the frontend:
->nodemon index.js
Access the App: Open your browser and navigate to http://localhost:6060. You should see the app running with both frontend and backend connected.
