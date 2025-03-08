import React, { useState, useRef } from 'react'

function FruitList({theme}) {

    const [fruits, setFruits] = useState([
        { id: 1, name: "Apple" , color : "red", quantity : "5" },
        { id: 2, name: "Banana", color : "yellow", quantity : "10" },
        { id: 3, name: "Cherry", color : "red", quantity : "15" },
        { id: 4, name: "Date", color : "brown", quantity : "20" },
        { id: 5, name: "Fig", color : "brown", quantity : "25" },
    ])
  return (
    <div>
      
    </div>
  )
}

export default FruitList
