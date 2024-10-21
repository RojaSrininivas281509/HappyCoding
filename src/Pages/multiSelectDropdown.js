import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const options = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleOption = (value) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value) // Remove option if already selected
        : [...prevSelected, value] // Add option if not selected
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected options: ${selectedOptions.join(', ')}`);
  };

  return (
    <div>
      <h1>Multi-Select Dropdown Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          {options.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleToggleOption(option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Selected Options:</h2>
        <p>{selectedOptions.join(', ') || 'None'}</p>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
