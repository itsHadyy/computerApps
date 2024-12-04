# BIT Company Project

This project is a simple web application designed for managing a company's employees, departments, and projects. It includes both a backend built with Node.js and a frontend built with React.js. The database is managed using MySQL (phpMyAdmin). Handcrafted with love.

---

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on employees, departments, and projects.
- **Login System**: Secure login for users based on the database.
- **Dynamic Search**: Search records in the database by column and value.
- **Modular Frontend**: Built with React components for scalability.

---

## Prerequisites

Make sure you have the following installed on your system:

1. **Node.js** (v14 or higher)
2. **npm** (comes with Node.js)
3. **MySQL** and **phpMyAdmin**
4. **Git** (to clone the repository)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/itsHadyy/computerApps
cd bit_company
```

### 2. Import the Database

1. Open **phpMyAdmin** in your browser.
2. Create a new database named `bit_company`.
3. Import the `bit_company.sql` file from this repository:
   - Navigate to your database in phpMyAdmin.
   - Click **Import**.
   - Upload the `bit_company.sql` file from your cloned repository.
   - Click **Go**.

### 3. Setup the Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install express cors mysql2
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server will run on [http://localhost:5001](http://localhost:5001).

---

### 4. Setup the Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install axios
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Use the login system to access the application.
3. Perform CRUD operations, search, and view data dynamically.

---

## Folder Structure

```plaintext
bit_company/
├── backend/
│   ├── server.js          # Backend server
│   ├── package.json       # Backend dependencies
│   ├── package-lock.json  # Lock file
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Dashboard.js
│   │   │   ├── DeleteRecord.js
│   │   │   ├── InsertData.js
│   │   │   ├── Login.js
│   │   │   ├── Navbar.js
│   │   │   ├── SearchData.js
│   │   │   ├── TableView.js
│   │   │   ├── UpdateData.js
│   │   ├── App.js          # Main React app file
│   │   ├── App.css         # CSS for the app
│   ├── public/
│   │   ├── index.html      # HTML entry point
├── README.md               # This file
├── bit_company.sql         # Database file
```

---

## Important Notes

- Make sure your MySQL server is running and your phpMyAdmin is accessible before importing the database.
- The database connection in the backend assumes `root` as the username with no password. Update these credentials in `server.js` if your setup is different.
- Start the backend server first, then the frontend.

---

## Troubleshooting

- **Error: Connection refused:** Ensure MySQL is running, and the database is imported properly.
- **Modules not found:** Run `npm install` in both `backend` and `frontend` directories.

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

## License

This project is licensed under the MIT License.
"""