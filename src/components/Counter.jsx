import React, { useEffect, useState } from "react";

function Counter({ theme, ThemeToggle }) {
    const [count, setCount] = useState(0);
    const [autoIncrement, setAutoIncrement] = useState(false);
    const [incrementValue, setIncrementValue] = useState(1);

    useEffect(() => {
        let interval;
        if (autoIncrement) {
            interval = setInterval(() => setCount((prev) => prev + incrementValue), 1000);
        }
        return () => interval && clearInterval(interval);
    }, [autoIncrement, incrementValue]);

    const handleReset = () => {
        setCount(0);
        setAutoIncrement(false);
    };

    const handleIncrement = () => {
        setCount((prev) => Math.min(prev + incrementValue, 100));
    };

    const handleDecrement = () => {
        setCount((prev) => Math.max(prev - incrementValue, 0));
    };

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "25px",
        // padding: "20px",
        // height: "100vh", // Full viewport height
        overflow: "hidden", // Prevent scrolling
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
    };

    const cardStyle = {
        background: "#fff",
        borderRadius: "20px",
        padding: "30px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        textAlign: "center",
        width: "450px",

        backgroundColor: theme === "light" ? "#2228" : "#2D3748",
        color: theme === "light" ? "#fff" : "#black",
    };

    const inputStyle = {
        padding: "15px 15px",
        border: "none",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "600",
        backgroundColor: theme === "light" ? "#2229" : "rgb(26, 32, 44)",
        color: theme === "light" ? "white" : "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        margin: "10px -15px 18px",//10px -15px 18px
        width: "100%",
    };

    const buttonStyle = {
        padding: "12px 20px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        margin: "10px",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-in-out",
    };

    const toggleButtonStyle = {
        ...buttonStyle,
        background: autoIncrement ? "rgba(255, 77, 77, 0.8)" : "rgba(76, 175, 80, 0.8)",
    };

    return (

        <div style={containerStyle} >

            <div style={cardStyle}>
                <h1 style={{ marginBottom: "10px", fontSize: "28px", fontWeight: "bold", color: theme === "light" ? "#fff" : "white", }}>Creative Counter</h1>
                <h3 style={{ marginBottom: "20px", fontSize: "16px", color: theme === "light" ? "#fff" : "white", }}>
                    Using React Hooks
                </h3>
                <h1 style={{ ...inputStyle, fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>{count}</h1>

                <div>
                    <label htmlFor="increment" style={{ fontWeight: "bold", display: "block", marginBottom: "10px",color: theme === "light" ? "#fff" : "white", }}>
                        Increment Amount
                    </label>
                    <input
                        type="number"
                        value={incrementValue}
                        onChange={(e) => setIncrementValue(Number(e.target.value))}
                        min="1"
                        max="100"
                        style={inputStyle}
                    />
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <button
                        onClick={handleDecrement}
                        style={{ ...buttonStyle, background: "rgba(255, 77, 77, 0.8)", marginRight: "30px" }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >➖</button>

                    <button
                        onClick={handleIncrement}
                        style={{ ...buttonStyle, background: "rgba(76, 175, 80, 0.8)" }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >➕</button>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={() => setAutoIncrement(!autoIncrement)}
                        style={toggleButtonStyle}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        {autoIncrement ? "⏹ Stop Auto Increment" : "▶️ Start Auto Increment"}
                    </button>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={handleReset}
                        style={{ ...buttonStyle, background: "rgba(255, 152, 0, 0.8)" }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >🔄 Reset</button>
                </div>
            </div>
        </div>

    );
}

export default Counter;