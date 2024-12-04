import React, { useState } from "react";
import axios from "axios";

function SearchData({ table, onSearchResults }) {
    const [column, setColumn] = useState("");
    const [value, setValue] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!column || !value) {
            alert("Please specify both column and value for the search");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5001/${table}/search`, {
                params: { column, value },
            });
            onSearchResults(response.data); // Pass the results to the parent component
        } catch (error) {
            console.error("Error searching data:", error.response || error.message);
            alert("Error searching data. Please check your column and value.");
        }
    };

    return (
        <div className="SearchDiv">
            <h3>Search {table} Data</h3>
            <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <label>
                    Column: <br/>
                    <input
                        type="text"
                        value={column}
                        onChange={(e) => setColumn(e.target.value)}
                        placeholder="e.g., Name"
                    />
                </label>
                <label>
                    Value:<br/>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="e.g., John Doe"
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "blue",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchData;