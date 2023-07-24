# ProlobbyCompany

## Overview

ProlobbyCompany is a web application that provides a platform for companies to manage their public relations and lobbying activities effectively. It aims to streamline communication and engagement with various stakeholders, including government bodies, clients, and the general public.

## Features

- **User Management**: Register and authenticate as a company user to access the platform's features.
- **Public Relations Campaigns**: Create and manage public relations campaigns to promote your company's message.
- **Lobbying Activities**: Track lobbying efforts and interactions with government officials or organizations.
- **Stakeholder Engagement**: Maintain a database of stakeholders and manage communication with them.
- **Event Management**: Organize events and invite stakeholders or clients to participate.
- **Analytics and Reports**: Get insights into the performance of campaigns and lobbying efforts through analytics and reports.

## Technologies Used

- Frontend: React.js, Redux, Bootstrap
- Backend: Node.js, Express.js, MongoDB
- Authentication: JSON Web Tokens (JWT)
- Hosting: Heroku

## Getting Started

To run the ProlobbyCompany web application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/SashaPavlovski/ProlobbyCompany.git
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd ProlobbyCompany/frontend
   npm install
   cd ../backend
   npm install
   ```

3. Configure the environment variables:
   Create a `.env` file in the `backend` directory and set the following variables:
   ```
   PORT=3001
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```

4. Run the application:
   ```bash
   # In the frontend directory
   cd ../frontend
   npm start

   # In the backend directory
   cd ../backend
   npm start
   ```

5. Access the application:
   Open your web browser and visit `http://localhost:3000` to view the ProlobbyCompany web app.
