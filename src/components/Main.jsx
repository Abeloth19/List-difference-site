import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import ListA from './ListA';
import ListB from './ListB';

const Main = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [itemsOnlyInA, setItemsOnlyInA] = useState([]);
  const [itemsOnlyInB, setItemsOnlyInB] = useState([]);
  const [itemsInBoth, setItemsInBoth] = useState([]);
  const [combinedItems, setCombinedItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleListAChange = (value) => {
    setListA(value);
  };

  const handleListBChange = (value) => {
    setListB(value);
  };

  const computeDifferences = () => {
    const listAItems = listA.split(',').map((item) => item.trim());
    const listBItems = listB.split(',').map((item) => item.trim());
    const inBoth = listAItems.filter((item) => listBItems.includes(item));
    const combined = [...new Set([...listAItems, ...listBItems])];

    setItemsOnlyInA(listAItems);
    setItemsOnlyInB(listBItems);
    setItemsInBoth(inBoth);
    setCombinedItems(combined);
    setShowModal(true);
  };

  const clearAll = () => {
    setListA('');
    setListB('');
    setItemsOnlyInA([]);
    setItemsOnlyInB([]);
    setItemsInBoth([]);
    setCombinedItems([]);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4 relative">
      <div className="mb-4">
        <ListA listA={listA} handleChange={handleListAChange} required={true} />
      </div>
      <div className="mb-4">
        <ListB listB={listB} handleChange={handleListBChange} required={true} />
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-[#5b1011] hover:bg-[#34090A] text-white font-bold py-2 px-4 rounded mr-4"
          onClick={computeDifferences}
          disabled={!listA || !listB}
        >
          Compute
        </button>
        <button
          className="bg-[#fad6e8] hover:bg-[#F292C2] text-[#11030a] font-bold py-2 px-4 rounded"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="modal p-4 rounded-xl text-[#11030a] bg-[#fdf2f8] border-2 border-[#5b1011] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black w-[90vw] md:w-[90vh] max-h-[80vh] m-auto flex flex-col"
        overlayClassName="modal-overlay"
        ariaHideApp={false}
      >
        <div className="modal-header flex justify-between items-center text-[#11030a]">
          <h2 className="text-lg font-bold mb-2">Results:</h2>
          <AiOutlineClose
            onClick={closeModal}
            className="cursor-pointer text-[#11030a]"
            size={20}
          />
        </div>

        <div className="modal-content overflow-auto custom-scrollbar">
          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Items only in A:</h2>
            {itemsOnlyInA.length > 0 ? (
              <ul className="list-disc list-inside">
                {itemsOnlyInA.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No Items Found In List A.</p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Items only in B:</h2>
            {itemsOnlyInB.length > 0 ? (
              <ul className="list-disc list-inside">
                {itemsOnlyInB.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items found in List B.</p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Items in both A and B:</h2>
            {itemsInBoth.length > 0 ? (
              <ul className="list-disc list-inside">
                {itemsInBoth.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No common items found.</p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold mb-2">Combined Items of A and B (Unique):</h2>
            {combinedItems.length > 0 ? (
              <ul className="list-disc list-inside">
                {combinedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No items found.</p>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Main;
