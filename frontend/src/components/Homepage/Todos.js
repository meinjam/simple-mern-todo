import React from 'react';
import iconChecked from '../../assets/img/icon-check.svg';

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      {todos.length !== 0 ? (
        <div
          className='flex flex-col bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue mt-8 rounded-t-md shadow-lg'
          id='todo-list'
        >
          {todos.map((item, index) => (
            <div
              key={index}
              draggable={true}
              className={`py-4 items-center justify-between border-b-[1px] cursor-move border-LightMyLightGrayishBlue hover:bg-LightMyLightGrayishBlue dark:border-DarkMyVeryDarkGrayishBlue dark:hover:bg-DarkMyVeryDarkGrayishBlue2 first:hover:rounded-t-md flex flex-row 
                    ${item.is_completed ? 'line-through text-DarkMyVeryDarkGrayishBlue' : ''}`}
            >
              <div className='flex items-center'>
                <div
                  className={`flex justify-center ml-6 rounded-full w-6 h-6 absolute ${
                    item.is_completed
                      ? 'cursor-pointer bg-gradient-to-r from-GradientBlue to-GradientPurple'
                      : 'cursor-pointer bg-LightMyLightGrayishBlue dark:bg-DarkMyDarkGrayishBlue hover:bg-gradient-to-r from-GradientBlue to-GradientPurple'
                  }`}
                  onClick={() => toggleTodo(item)}
                >
                  <div
                    className={`bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue rounded-full w-5 h-5 mt-[2px] absolute ${
                      item.is_completed ? 'hidden' : ''
                    }`}
                  />
                  <img
                    src={iconChecked}
                    className={`rounded-full w-3.5 h-3.5 my-auto  ${item.is_completed ? '' : 'hidden'}`}
                    alt='icon of a checkmark'
                  />
                </div>

                <span className='text-xl ml-20'>{item.name}</span>
              </div>
              <div
                onClick={() => deleteTodo(item)}
                className='stroke-LightMyLightGrayishBlue dark:stroke-DarkMyDarkGrayishBlue mr-6 cursor-pointer'
              >
                <TrashIcon />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-col bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue shadow-lg border-b-[1px] border-LightMyLightGrayishBlue dark:border-DarkMyVeryDarkGrayishBlue  mt-8 rounded-t-md'>
          <p className='p-10 text-xl'>No items here...</p>
        </div>
      )}
    </div>
  );
};

export default Todos;

const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-trash'
    width={30}
    height={30}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <line x1={4} y1={7} x2={20} y2={7} />
    <line x1={10} y1={11} x2={10} y2={17} />
    <line x1={14} y1={11} x2={14} y2={17} />
    <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
    <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
  </svg>
);
