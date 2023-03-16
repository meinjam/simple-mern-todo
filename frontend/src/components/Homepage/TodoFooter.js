import React from 'react';

const tabs = ['All', 'Active', 'Completed'];

const TodoFooter = ({ todos, activeTab, handleActiveTab }) => {
  return (
    <div className='flex flex-row text-LightMyDarkGrayishBlue shadow-lg text-sm bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue justify-around py-4 rounded-b-md'>
      <span className='ml-5'>{todos.length} items left</span>
      <div>
        {tabs.map((tab, i) => (
          <span
            className={`cursor-pointer mx-2 ${
              activeTab === tab ? 'text-MyBrightBlue' : 'hover:text-DarkMyLightGrayishBlue'
            }`}
            key={i}
            onClick={() => handleActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
        {/* <span
          className={`cursor-pointer ${
            filterButtons['all'] ? 'text-MyBrightBlue' : 'hover:text-DarkMyLightGrayishBlue'
          }`}
          onClick={displayAllItems}
        >
          All
        </span>
        <span
          className={`cursor-pointer mx-5 ${
            filterButtons['active'] ? 'text-MyBrightBlue' : 'hover:text-DarkMyLightGrayishBlue'
          }`}
        >
          Active
        </span>
        <span
          className={`cursor-pointer ${
            filterButtons['completed'] ? 'text-MyBrightBlue' : 'hover:text-DarkMyLightGrayishBlue'
          }`}
        >
          Completed
        </span> */}
      </div>
      <span className='hover:text-DarkMyLightGrayishBlue cursor-pointer mr-5'>Clear Completed</span>
    </div>
  );
};

export default TodoFooter;
