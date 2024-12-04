# **Bit Company Web Application**

---

## **Project Overview**
This is a full-stack web application for managing company data, built using:
- **Frontend**: React.js
- **Backend**: Node.js (Express.js)
- **Database**: MySQL

The application includes key features such as data insertion, updating, deletion, and searching. It provides user authentication through a `Login` component and a dashboard to manage company records.

---

## **File Structure**

```
bit_company/
│
├── backend/
│   ├── node_modules/          // Backend dependencies
│   ├── package.json           // Backend package dependencies
│   ├── server.js              // Node.js Express server
│
├── frontend/
│   ├── node_modules/          // Frontend dependencies
│   ├── public/                // Public assets
│   │   ├── index.html         // Main HTML file
│   │   ├── manifest.json      // Web app manifest
│   │   ├── robots.txt         // Robots.txt for SEO
│   │
│   ├── src/                   // Frontend source code
│       ├── components/        // React components
│       │   ├── Dashboard.js   // Dashboard view
│       │   ├── DeleteRecord.js // Component to delete records
│       │   ├── InsertData.js  // Component to insert data
│       │   ├── Login.js       // Login page
│       │   ├── Navbar.js      // Navigation bar
│       │   ├── SearchData.js  // Component to search for records
│       │   ├── TableView.js   // Table view for records
│       │   ├── UpdateData.js  // Component to update data
│       │
│       ├── draft/             // Draft components for testing
│       ├── App.css            // Global CSS for the application
│       ├── App.js             // Main React app file
│       ├── App.test.js        // Tests for the app
│       ├── index.css          // Global styles
│       ├── index.js           // Main entry point for React
│       ├── reportWebVitals.js // Performance monitoring
│       ├── setupTests.js      // Setup for testing
│
└── README.md                  // Project documentation
```

---

## **Setup and Installation**

### **1. Prerequisites**
- Node.js (version 14 or higher)
- MySQL installed and running
- A code editor like VS Code

### **2. Clone the Repository**
Download or clone this repository to your local machine:
```bash
git clone <repository-url>
cd bit_company
```

### **3. Backend Setup**
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Start the Node.js server:
```bash
node server.js
```

By default, the backend runs on `http://localhost:5001`. Ensure your MySQL database is configured to connect with the server.

### **4. Frontend Setup**
Navigate to the `frontend` folder and install dependencies:
```bash
cd ../frontend
npm install
```

Start the React development server:
```bash
npm start
```

By default, the React app runs on `http://localhost:3000`.

---

## **Key Components**

### **1. InsertData.js**
- Allows users to insert new records into the database.
- Includes a dynamic form to handle various table fields.

### **2. UpdateData.js**
- Provides functionality to update existing records.
- Fetches the selected row's data and pre-fills the form.
- Includes a "Cancel" button to close the form without saving changes.

### **3. DeleteRecord.js**
- Handles record deletion by calling the backend API.
- Provides a confirmation prompt before deletion.

### **4. SearchData.js**
- Implements a search functionality for querying records.
- Supports dynamic search based on user inputs.

### **5. TableView.js**
- Displays database records in a table format.
- Integrates with `UpdateData` and `DeleteRecord` for record management.

### **6. Login.js**
- Handles user authentication.
- Sends credentials to the backend for validation.

### **7. Navbar.js**
- A reusable navigation bar component for the application.

---

## **API Endpoints**
The backend exposes the following RESTful API endpoints:

1. **Insert Record**
   - `POST /<table>`: Inserts a new record into the specified table.

2. **Update Record**
   - `PUT /<table>/<id>`: Updates a record with the given ID.

3. **Delete Record**
   - `DELETE /<table>/<id>`: Deletes a record with the given ID.

4. **Search Records**
   - `GET /<table>?query=<value>`: Searches for records based on a query.

5. **Login**
   - `POST /login`: Authenticates user credentials.

---

## **How to Customize**
- Update the API endpoints in the React components to match your backend routes.
- Modify CSS files (`App.css` and `index.css`) to style the application according to your needs.
- Add more components or functionality as per your project requirements.

---

## **Common Issues**

1. **CORS Error**
   - Ensure CORS is enabled on your backend server.

2. **API Endpoint Not Found**
   - Verify that the backend server is running and the endpoints are correct.

3. **MySQL Connection Error**
   - Check your MySQL connection details in `server.js`.

---

## **Student Notes**
1. **Understand Each Component**: Take time to understand how each React component interacts with the backend.
2. **Experiment**: Try modifying the code to add additional features.
3. **Debugging**: Use `console.log` to debug issues during development.
4. **Follow Best Practices**: Write clean, modular code and follow proper naming conventions.

---

## **Contributing**
Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

---

## **License**
This project is licensed under the MIT License.