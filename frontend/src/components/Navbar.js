import React from "react";

function Navbar({ tables, onSelectTable }) {
    return (
        <nav style={styles.nav}>
            {tables.map((table) => (
                <button
                    key={table}
                    onClick={() => onSelectTable(table)}
                    style={styles.navButton}
                >
                    {table}
                </button>
            ))}
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#007bff",
    },
    navButton: {
        margin: "0 10px",
        padding: "10px 15px",
        backgroundColor: "white",
        color: "#007bff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

export default Navbar;