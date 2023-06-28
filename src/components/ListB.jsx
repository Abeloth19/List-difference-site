import React from 'react';

const ListB = ({ listB, handleChange, required }) => {
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <div className="mb-4 w-[600px] mx-auto">
      <label className="block text-[#11030a] text-xl font-extrabold mb-2" htmlFor="listB">
        List B:
      </label>
      <textarea
        id="listB"
        name="listB"
        value={listB}
        onChange={handleInputChange}
        required={required}
        placeholder="Enter items for List B..."
        className={`w-full px-3 py-2 border-2 rounded-md resize-none ${
          listB === '' ? 'border-red-500' : 'border-[#5b1011] border-2'
        }`}
        rows={6}
      ></textarea>
      {listB === '' && (
        <p className="text-red-500 text-xs mt-1">This field is required.</p>
      )}
    </div>
  );
};

export default ListB;
