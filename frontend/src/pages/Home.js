import axios from 'axios';
import React, { useEffect, useState } from 'react';
import iconMoon from '../assets/img/icon-moon.svg';
import iconSun from '../assets/img/icon-sun.svg';
import iconChecked from '../assets/img/icon-check.svg';
import backgroundImage_desktop_dark from '../assets/img/bg-desktop-dark.jpg';
import backgroundImage_desktop_light from '../assets/img/bg-desktop-light.jpg';

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const [displayItems, setDisplayItems] = useState([]);

  const [filterButtons, setFilterButtons] = useState({
    all: true,
    active: false,
    completed: false,
  });

  function displayAllItems() {
    // setDisplayItems(items); // update state with items array, so all items are displayed
    setFilterButtons({
      all: true,
      active: false,
      completed: false,
    });
  }

  useEffect(() => {
    axios
      .get('/notes')
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className='min-h-screen bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkBlue text-LightMyVeryDarkGrayishBlue dark:text-DarkMyLightGrayishBlue'>
        <img
          className='w-full absolute dark:block hidden '
          src={backgroundImage_desktop_dark}
          alt='background image for desktop dark mode'
        />
        <img
          className='w-full absolute block dark:hidden'
          src={backgroundImage_desktop_light}
          alt='background image for desktop light mode'
        />
        <div className='w-full min-h-screen absolute flex justify-center'>
          <div className='md:w-2/3 lg:w-2/5 mt-20 flex flex-col'>
            <div className='flex justify-between'>
              <span className='text-4xl font-bold text-white'>T O D O</span>
              <img
                className='w-7 h-7 cursor-pointer hidden dark:block'
                src={iconSun}
                alt='sun icon for light mode'
                onClick={toggleDarkMode}
              />
              <img
                className='w-7 h-7 cursor-pointer block dark:hidden'
                src={iconMoon}
                alt='moon icon for dark mode'
                onClick={toggleDarkMode}
              />
            </div>

            <div className='flex bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue mt-8 py-5 rounded-md shadow-lg'>
              <div className='flex justify-center ml-6 bg-LightMyLightGrayishBlue dark:bg-DarkMyDarkGrayishBlue rounded-full w-6 h-6 absolute'>
                <div className='bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue rounded-full w-5 h-5 mt-[2px] absolute' />
              </div>
              <input
                type='text'
                className='bg-transparent w-full outline-0 text-xl ml-20'
                placeholder='Create a new todo...'
                // onKeyDown={handleKeyPress}
              />
            </div>

            {displayItems.length !== 0 ? (
              <div
                className='flex flex-col bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue mt-8 rounded-t-md shadow-lg'
                id='todo-list'
              >
                {displayItems.map((item, index) => (
                  <div
                    key={index}
                    draggable={true}
                    className={`py-4 border-b-[1px] cursor-move border-LightMyLightGrayishBlue hover:bg-LightMyLightGrayishBlue dark:border-DarkMyVeryDarkGrayishBlue dark:hover:bg-DarkMyVeryDarkGrayishBlue2 first:hover:rounded-t-md flex flex-row 
                                 ${item.completed ? 'line-through text-DarkMyVeryDarkGrayishBlue2' : ''} 
                                 ${
                                   1 === index ? 'dark:bg-DarkMyVeryDarkGrayishBlue2 bg-LightMyDarkGrayishBlue/50' : ''
                                 }`}
                    // onDragStart={() => handleDragStart(index)}
                    // onDragOver={(event) => handleDragOver(event, index)}
                    // onDrop={handleDrop}
                    style={{
                      backgroundColor: 1 === index ? 'dark:bg-' : '',
                    }}
                  >
                    <div
                      className={`flex justify-center ml-6 rounded-full w-6 h-6 absolute ${
                        item.completed
                          ? 'cursor-pointer bg-gradient-to-r from-GradientBlue to-GradientPurple'
                          : 'cursor-pointer bg-LightMyLightGrayishBlue dark:bg-DarkMyDarkGrayishBlue hover:bg-gradient-to-r from-GradientBlue to-GradientPurple'
                      }`}
                      // onClick={() => toggleCompleted(index)}
                    >
                      <div
                        className={`bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue rounded-full w-5 h-5 mt-[2px] absolute ${
                          item.completed ? 'hidden' : ''
                        }`}
                      />
                      <img
                        src={iconChecked}
                        className={`rounded-full w-3.5 h-3.5 my-auto  ${item.completed ? '' : 'hidden'}`}
                        alt='icon of a checkmark'
                      />
                    </div>

                    <span className='text-xl ml-20'>{item.text}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex flex-col bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue shadow-lg border-b-[1px] border-LightMyLightGrayishBlue dark:border-DarkMyVeryDarkGrayishBlue  mt-8 rounded-t-md'>
                <p className='p-10 text-xl'>No items here...</p>
              </div>
            )}

            <div className='flex flex-row text-LightMyDarkGrayishBlue shadow-lg text-sm bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkDesaturatedBlue justify-around text-DarkMyVeryDarkGrayishBlue py-4 rounded-b-md'>
              <span className='ml-5'>{displayItems.length} items left</span>
              <div>
                <span
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
                </span>
              </div>
              <span className='hover:text-DarkMyLightGrayishBlue cursor-pointer mr-5'>Clear Completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
