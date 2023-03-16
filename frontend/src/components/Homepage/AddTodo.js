import React from 'react';

const AddTodo = ({ inputValue, setInputValue, handleAddTodo }) => {
  return (
    <form
      onSubmit={handleAddTodo}
      className='flex bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue mt-8 py-5 rounded-md shadow-lg'
    >
      <div className='flex justify-center ml-6 bg-LightMyLightGrayishBlue dark:bg-DarkMyDarkGrayishBlue rounded-full w-6 h-6 absolute'>
        <div className='bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue rounded-full w-5 h-5 mt-[2px] absolute' />
      </div>
      <input
        type='text'
        className='bg-transparent w-full outline-0 text-xl ml-20'
        placeholder='Create a new todo...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default AddTodo;
