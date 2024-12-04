import React from "react";
import axios from "axios";

function DeleteRecord({ table, id, onDelete }) {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5001/${table}/${id}`);
            onDelete(id); // Call the parent function to remove the record from the state
            alert("Record deleted successfully!");
        } catch (error) {
            alert("Error deleting record");
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete
        </button>
    );
}

export default DeleteRecord;