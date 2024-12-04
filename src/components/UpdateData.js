import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateData({ table, selectedRow, setShowUpdateForm, updateDataInParent }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (selectedRow) {
            const updatedData = { ...selectedRow };
            delete updatedData.EmpID; // Exclude EmpID from being updated
            setFormData(updatedData);
        }
    }, [selectedRow]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5001/${table}/${selectedRow.EmpID}`, formData);
            alert("Data updated successfully!");
            updateDataInParent(response.data); // Update data in parent component state
            setShowUpdateForm(false);
        } catch (error) {
            alert("Error updating data");
        }
    };

    const handleCancel = () => {
        setShowUpdateForm(false); // Close the form without making changes
    };

    return (
        <div>
            <h2>Update Data for {table}</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div key={key} className="form-group">
                        <label htmlFor={key}>{key}</label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            value={formData[key] || ""}
                            onChange={handleChange}
                            className="input-field"
                        />
                    </div>
                ))}
                <div className="button-group">
                    <button type="submit" className="submit-button">Update Data</button>
                    <button type="button" onClick={handleCancel} className="submit-button">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateData;