# Savoria 🍽️

**Savoria** is a full-stack restaurant management and ordering application built with the MERN stack (MongoDB, Express, React, Node.js). It provides a seamless experience for customers to browse menus, make reservations, and manage their orders, while offering administrators tools to manage the restaurant's operations.

---

## 🚀 Features

-   **User Authentication**: Secure user login and registration powered by **Clerk**.
-   **Dynamic Menu System**: Browse food categories and items with a beautiful UI.
-   **Reservation Management**: Users can book tables, and admins can manage reservations.
-   **Admin Dashboard**: comprehensive dashboard for managing menu items, reservations, and orders.
-   **Newsletter Subscription**: Users can subscribe to newsletters for updates.
-   **Responsive Design**: Fully responsive interface built with **Tailwind CSS**.
-   **Modern Tech Stack**: Utilizes the latest features of React 19 and Node.js.

---

## 🛠️ Tech Stack

### Client (Frontend)
-   **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) (Animations)
-   **Routing**: [React Router Dom](https://reactrouter.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **HTTP Client**: Axios
-   **Authentication**: Clerk React SDK

### Server (Backend)
-   **Runtime**: [Node.js](https://nodejs.org/)
-   **Framework**: [Express.js](https://expressjs.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
-   **Authentication**: Clerk Node SDK + JWT
-   **Security**: BcryptJS, CORS, Dotenv

---

## 📂 Project Structure

```bash
Savoria/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── assets/         # Images and icons
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React Context (Auth, etc.)
│   │   ├── pages/          # Application pages (Home, Menu, Admin, etc.)
│   │   ├── App.jsx         # Main App component
│   │   ├── main.jsx        # Entry point
│   │   └── config.js       # Configuration files
│   ├── .env                # Environment variables (gitignored)
│   ├── index.html          # HTML template
│   ├── tailwind.config.js  # Tailwind configuration
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend Express Application
│   ├── controllers/        # Route logic and request handling
│   ├── middleware/         # Custom middleware (Auth, Error handling)
│   ├── models/             # Mongoose schemas (Menu, Reservation, User)
│   ├── routes/             # API route definitions
│   ├── scripts/            # Utility scripts (Seeding data)
│   ├── index.js            # Server entry point
│   └── .env                # Environment variables (gitignored)
│
├── .gitignore              # Git ignore file
├── package.json            # Root configuration (optional)
└── README.md               # Project documentation
```

---

## ⚡ Getting Started

### Prerequisites

-   **Node.js** (v18 or higher recommended)
-   **MongoDB** (Local or Atlas connection string)
-   **Clerk Account** (for Authentication keys)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/garvbahl37-gif/Savoria.git
    cd Savoria
    ```

2.  **Install Client Dependencies:**
    ```bash
    cd client
    npm install
    ```

3.  **Install Server Dependencies:**
    ```bash
    cd ../server
    npm install
    ```

---

## 🔑 Environment Variables

You need to set up environment variables for both the Client and Server.

### Client (`client/.env`)
Create a `.env` file in the `client` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

### Server (`server/.env`)
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/savoria
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

---

## 🏃‍♂️ Running the Application

1.  **Start the Backend Server:**
    ```bash
    cd server
    npm run dev
    # Server will start on http://localhost:5000
    ```

2.  **Start the Frontend Client:**
    ```bash
    cd client
    npm run dev
    # Client will start on http://localhost:5173 (usually)
    ```

---

## 📡 API Endpoints

### Auth
-   `POST /api/auth/webhook` - Clerk Webhook handler (if applicable)

### Menu
-   `GET /api/menu` - Fetch all menu items
-   `POST /api/menu` - Add new menu item (Admin)

### Reservations
-   `POST /api/reservations` - Create a reservation
-   `GET /api/reservations` - Get user reservations

### Newsletter
-   `POST /api/newsletter` - Subscribe to newsletter

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
