import React, { useState } from "react";
import Navbar from "./Navbar";
import TableView from "./TableView";

function Dashboard() {
    const [selectedTable, setSelectedTable] = useState("");
    const tables = ["Employee", "Department", "Project"]; // Add your database table names here

    return (
        <div>
            {/* Navigation Bar */}
            <Navbar tables={tables} onSelectTable={setSelectedTable} />

            <div style={{ padding: "20px" }}>
                {selectedTable ? (
                    <div>

                        {/* Table View */}
                        <div style={{ marginBottom: "30px" }}>
                            <TableView table={selectedTable} />
                        </div>
                    </div>
                ) : (
                    <h2>Select a table to view or add data</h2>
                )}
            </div>
        </div>
    );
}

export default Dashboard;