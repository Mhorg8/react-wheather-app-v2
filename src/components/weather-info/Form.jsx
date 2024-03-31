import React from "react";

function Form({ onSetCity, city, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  function setCity(e) {
    const value = e.target.value;
    onSetCity(value);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[150px] flex items-center justify-center">
      <input
        value={city}
        onChange={(e) => setCity(e)}
        className="px-5 py-[10px] rounded-2xl w-[70%] outline-none border-none shadow-md"
        type="text"
        placeholder="Enter city name..."
      />
      <button
        className="primary-btn py-3 rounded-l-none shadow-md relative -left-6"
        type="submit">
        Check
      </button>
    </form>
  );
}

export default Form;
