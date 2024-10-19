import React, { useState } from "react";

export default function InputTextFormat() {
  const [input, setInput] = useState('');

  // Function to format the input according to your requirements
  const formatInput = (input) => {
    let formatted = '';
    
    for (let i = 0; i < input.length; i++) {
      if (i % 2 === 1) {
        formatted += input[i].toLowerCase(); // Make even-indexed letters lowercase
      } else {
        formatted += input[i].toUpperCase(); // Make odd-indexed letters uppercase
      }
      if (i < input.length - 1) {
        formatted += '#'; // Add '#' between letters
      }
    }
    
    return formatted;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{formatInput(input)}</p> {/* Display the formatted output */}
    </div>
  );
}
