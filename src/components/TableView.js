import React, { useEffect, useState } from "react";
import axios from "axios";
import InsertData from "./InsertData";
import UpdateData from "./UpdateData";
import DeleteRecord from "./DeleteRecord";
import SearchData from "./SearchData";

function TableView({ table }) {
    const [data, setData] = useState([]);
    const [showInsertForm, setShowInsertForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/${table}`);
                setData(response.data);
            } catch (error) {
                alert("Error fetching data");
            }
        };
        fetchData();
    }, [table]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5001/${table}/${id}`);
            setData(data.filter((row) => row.EmpID !== id)); // Replace 'EmpID' with the actual ID field for your table
        } catch (error) {
            alert("Error deleting data");
        }
    };

    const updateDataInParent = (updatedData) => {
        setData((prevData) => prevData.map((item) => (item.EmpID === updatedData.EmpID ? updatedData : item))); // Ensure 'EmpID' is the correct key
    };

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setShowUpdateForm(true);
    };

    return (
        <div style={{ padding: "20px" }}>

            {/* Search Form */}
            {/* In TableView Component */}
            <SearchData
                table={table}
                onSearchResults={(results) => {
                    if (results.length > 0) {
                        setData(results);
                    } else {
                        alert("No records found");
                    }
                }}
            />

            
            <button
                onClick={() => setShowInsertForm(!showInsertForm)}
                className="newData"
            >
                {showInsertForm ? "Cancel" : "Add New Data"}
            </button>

            {/* Insert Form */}
            {showInsertForm && <InsertData table={table} setData={setData} />}

            {/* Update Form */}
            {showUpdateForm && selectedRow && (
                <UpdateData
                    table={table}
                    selectedRow={selectedRow}
                    setShowUpdateForm={setShowUpdateForm}
                    updateDataInParent={updateDataInParent}
                />
            )}


            <p>P.S: Click on any row you want to update.</p>
            {/* Data Table */}
            {data.length > 0 ? (
                <table style={{ marginTop: "20px", width: "100%", border: "1px solid #ccc", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key} style={{ padding: "10px", border: "1px solid #ddd" }}>
                                    {key}
                                </th>
                            ))}
                            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.EmpID} onClick={() => handleRowClick(row)} style={{ cursor: "pointer" }}>
                                {Object.values(row).map((value, idx) => (
                                    <td key={idx} style={{ padding: "10px", border: "1px solid #ddd" }}>
                                        {value}
                                    </td>
                                ))}
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                    <DeleteRecord table={table} id={row.EmpID} onDelete={handleDelete} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default TableView;