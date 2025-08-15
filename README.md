# Coding Beasts - MERN STACK Software Company Website

## Project Overview
Coding Beasts is a comprehensive full-stack e-commerce application designed to provide a robust platform for online businesses. It features a user-friendly frontend for customers, a powerful backend for data management, and an intuitive admin dashboard for managing products, orders, users, and more.

## Features

### Frontend (Customer-facing)
-   **Product Catalog:** Browse and view details of available products.
-   **Shopping Cart:** Add, remove, and manage items in the cart.
-   **User Authentication:** Secure user registration and login.
-   **Order Placement:** Seamless checkout process for placing orders.
-   **Responsive Design:** Optimized for various devices (desktops, tablets, mobiles).

### Backend (API & Database)
-   **RESTful API:** Provides endpoints for all frontend and dashboard functionalities.
-   **User Management:** Handles user registration, authentication, and profiles.
-   **Product Management:** API for creating, reading, updating, and deleting products.
-   **Order Processing:** Manages order creation, status updates, and history.
-   **Contact Management:** Handles customer inquiries.
-   **Database:** MongoDB for efficient data storage.

### Admin Dashboard
-   **Dashboard Overview:** Centralized view of key metrics (e.g., total contacts, total users, new messages).
-   **Order Management:** View, update, and manage customer orders.
-   **User Management:** Administer user accounts.
-   **Message Management:** View and respond to customer messages.
-   **Settings:** Configure application settings.
-   **Data Visualization:** Graphical representation of key data (e.g., users and orders over time).

## How It Works
The application follows a client-server architecture:
-   **Frontend:** Built with React, it communicates with the backend API to fetch and send data.
-   **Backend:** Developed with Node.js and Express.js, it handles all business logic, interacts with the MongoDB database, and exposes RESTful APIs.
-   **Admin Dashboard:** Also built with React, it consumes the same backend APIs to provide administrative functionalities.

## Technologies Used

### Frontend & Admin Dashboard
-   **React.js:** A JavaScript library for building user interfaces.
-   **Vite:** A fast build tool for modern web projects.
-   **React Router DOM:** For declarative routing in React applications.
-   **Recharts:** A composable charting library built on React components (for Dashboard).
-   **CSS:** For styling and responsive design.

### Backend
-   **Node.js:** JavaScript runtime environment.
-   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
-   **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
-   **MongoDB:** A NoSQL database for storing application data.
-   **Dotenv:** To load environment variables from a `.env` file.
-   **CORS:** Middleware to enable Cross-Origin Resource Sharing.

## Setup and Installation

To get a copy of the project up and running on your local machine for development and testing purposes, follow these steps.

### Prerequisites
-   Node.js (LTS version recommended)
-   npm (Node Package Manager)
-   MongoDB (Community Server recommended, running locally or accessible via a connection string)

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/developer-yasir/coding-beasts.git
    cd coding-beasts
    ```

2.  **Backend Setup:**
    Navigate to the `backend` directory, install dependencies, and create a `.env` file.
    ```bash
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory with the following content:
    ```
    MONGO_URI=mongodb://localhost:27017/coding-beasts
    PORT=5000
    # Add any other environment variables as needed (e.g., JWT_SECRET)
    ```
    Start the backend server:
    ```bash
    npm start
    ```

3.  **Frontend Setup:**
    Open a new terminal, navigate to the `frontend` directory, and install dependencies.
    ```bash
    cd ../frontend
    npm install
    ```
    Start the frontend development server:
    ```bash
    npm run dev
    ```

4.  **Admin Dashboard Setup:**
    Open another new terminal, navigate to the `dashboard` directory, and install dependencies.
    ```bash
    cd ../dashboard
    npm install
    ```
    Start the admin dashboard development server:
    ```bash
    npm run dev
    ```

## Usage
-   The frontend application will typically run on `http://localhost:5173` (or another port if 5173 is in use).
-   The admin dashboard will typically run on `http://localhost:5174` (or another port).
-   The backend API will be accessible at `http://localhost:5000`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.
