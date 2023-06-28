import React from 'react';

const ListA = ({ listA, handleChange, required }) => {
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className="mb-4 w-[600px] mx-auto">
      <label className="block text-[#11030a] text-xl font-extrabold mb-2" htmlFor="listA">
        List A:
      </label>
      <textarea
        id="listA"
        name="listA"
        value={listA}
        onChange={handleInputChange}
        required={required}
        placeholder="Enter items for List A..."
        className={`w-full px-3 py-2 border-2 rounded-md resize-none ${
          listA === '' ? 'border-red-500' : 'border-[#5b1011] border-2'
        }`}
        rows={6}
      ></textarea>
      {listA === '' && (
        <p className="text-red-500 text-xs mt-1">This field is required.</p>
      )}
    </div>
  );
};

export default ListA;
