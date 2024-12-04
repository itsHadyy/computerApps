import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the fields for each table
const tableFields = {
    Employee: ["EmpID", "Name", "Username", "Password", "Salary", "Gender", "DeptNo"],
    Department: ["Department No", "Name", "Location", "Phone Ext"],
    Project: ["Project Number", "Name", "Delivery Date", "Cost", "DeptNo"],
};

function InsertData({ table }) {
    const [formData, setFormData] = useState({});
    const [fields, setFields] = useState([]);

    // Update fields based on selected table
    useEffect(() => {
        console.log("Selected table:", table);
        console.log("Fields for the table:", tableFields[table]);
        setFields(tableFields[table] || []); // Set fields based on table
        setFormData({}); // Clear form data when table changes
    }, [table]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5001/${table}`, formData);
            alert(response.data.message || "Data inserted successfully!");
        } catch (error) {
            console.error("Error inserting data:", error);
            alert("Error inserting data");
        }
    };

    return (
        <div>
            <h2>Add Data to {table}</h2>
            <form onSubmit={handleSubmit}>
                {fields.length > 0 ? (
                    fields.map((field) => (
                        <div key={field} className="form-group">
                            <label htmlFor={field}>{field}</label>
                            <input
                                type="text"
                                id={field}
                                name={field}
                                placeholder={`Enter ${field}`}
                                value={formData[field] || ""}
                                onChange={handleChange}
                                className="input-field"
                            />
                        </div>
                    ))
                ) : (
                    <p>No fields found for the selected table.</p>
                )}
                <button type="submit" className="submit-button">
                    Add Data
                </button>
            </form>
        </div>
    );
}

export default InsertData;