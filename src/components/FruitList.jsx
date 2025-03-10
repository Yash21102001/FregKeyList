import React, { useState, useRef } from 'react';

function FruitList({ theme }) {
    const [fruits, setFruits] = useState([
        { id: 1, name: "Apple", color: "red", quantity: "5" },
        { id: 2, name: "Banana", color: "yellow", quantity: "10" },
        { id: 3, name: "Cherry", color: "red", quantity: "15" },
        { id: 4, name: "Date", color: "brown", quantity: "20" },
        { id: 5, name: "Fig", color: "brown", quantity: "25" },
    ]);

    const [newFruit, setNewFruit] = useState({
        name: "",
        color: "",
        quantity: 1,
    });

    const newfruitRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFruit({
            ...newFruit,
            [name]: name === "quantity" ? Number(value) : value,
        });
    };

    const addFruit = (e) => {
        e.preventDefault();

        if (!newFruit.name || !newFruit.color) return;

        const newId = fruits.length > 0 ? Math.max(...fruits.map((f) => f.id)) + 1 : 1;

        setFruits([...fruits, { ...newFruit, id: newId }]);
        setNewFruit({ name: "", color: "", quantity: 1 });

        newfruitRef.current.focus();
    };

    const deleteFruit = (id) => {
        setFruits(fruits.filter((f) => f.id !== id));
    };

    const styles = {
        light: {
            border: "#ddd",
        },
        dark: {
            border: "#555",
        },
    };

    const fruitItemStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderBottom: `1px solid ${styles[theme].border}`,
    };

    return (
        <>
            <h1>Fruit List</h1>
            <p>Using List & keys, Refs and Fragments</p>
            <form onSubmit={addFruit}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Fruit name"
                        ref={newfruitRef}
                        value={newFruit.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="color"
                        value={newFruit.color}
                        onChange={handleInputChange}
                        placeholder="Color"
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        value={newFruit.quantity}
                        onChange={handleInputChange}
                        min={1}
                        placeholder="Quantity"
                        required
                    />
                </div>
                <button type="submit">Add Fruit</button>
            </form>
            <div>
                {fruits.length === 0 ? (
                    <h3>No Fruits in the list</h3>
                ) : (
                    fruits.map((fruit) => (
                        <div key={fruit.id} style={fruitItemStyle}>
                            <div>
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: "15px",
                                        height: "15px",
                                        backgroundColor: fruit.color,
                                        borderRadius: "50%",
                                        marginRight: "10px",
                                    }}
                                ></span>
                                <strong>{fruit.name}</strong> - {fruit.quantity} in Stock
                            </div>
                            <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default FruitList;
