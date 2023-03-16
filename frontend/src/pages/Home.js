import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import iconMoon from '../assets/img/icon-moon.svg';
import iconSun from '../assets/img/icon-sun.svg';
import backgroundImage_desktop_dark from '../assets/img/bg-desktop-dark.jpg';
import backgroundImage_desktop_light from '../assets/img/bg-desktop-light.jpg';
import Todos from '../components/Homepage/Todos';
import AddTodo from '../components/Homepage/AddTodo';
import StoreContext from '../context/StoreContext';
import TodoFooter from '../components/Homepage/TodoFooter';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const Home = () => {
  const { handleDarkMode, isApiLoading, setIsApiLoading } = useContext(StoreContext);
  const [todos, setTodos] = useState([]);
  const [displayedTodos, setDisplayedTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get('/todos')
      .then((resp) => {
        // console.log(resp.data);
        setTodos(resp.data);
        setDisplayedTodos(resp.data);
        setIsApiLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setIsApiLoading(false);
        toast.error('Sorry, something went wrong.');
      });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    setIsApiLoading(true);

    const newTodo = {
      name: inputValue,
      is_completed: false,
    };

    axios
      .post('/todos', newTodo)
      .then((resp) => {
        // console.log(resp.data);
        setInputValue('');
        fetchTodos();
        setTimeout(() => {
          toast.success(resp?.data?.message);
        }, 500);
      })
      .catch((error) => {
        // console.log(error.response.data);
        toast.error(error?.response?.data);
        setIsApiLoading(false);
      });
  };

  const toggleTodo = (todo) => {
    setIsApiLoading(true);
    const newTodo = {
      name: todo.name,
      is_completed: !todo.is_completed,
    };

    axios
      .put(`/todos/${todo.id}`, newTodo)
      .then((resp) => {
        // console.log(resp.data);
        fetchTodos();
        setTimeout(() => {
          toast.success(resp?.data?.message);
        }, 500);
      })
      .catch((error) => {
        // console.log(error.response);
        toast.error(error?.response?.data?.error);
        setIsApiLoading(false);
      });
  };

  const deleteTodo = (todo) => {
    setIsApiLoading(true);
    axios
      .delete(`/todos/${todo.id}`)
      .then((resp) => {
        // console.log(resp.data);
        fetchTodos();
        setTimeout(() => {
          toast.success(resp?.data?.message);
        }, 500);
      })
      .catch((error) => {
        // console.log(error.response);
        toast.error(error?.response?.data?.error);
        setIsApiLoading(false);
      });
  };

  const handleActiveTab = (tab) => {
    setActiveTab(tab);

    if (tab === 'Active') {
      const activeTodos = todos.filter((todo) => !todo.is_completed);
      setDisplayedTodos(activeTodos);
    } else if (tab === 'Completed') {
      const activeTodos = todos.filter((todo) => todo.is_completed);
      setDisplayedTodos(activeTodos);
    } else {
      setDisplayedTodos(todos);
    }
  };

  return (
    <div>
      {isApiLoading && <Loading />}
      <div className='min-h-screen bg-LightMyVeryLightGray dark:bg-DarkMyVeryDarkBlue text-LightMyVeryDarkGrayishBlue dark:text-DarkMyLightGrayishBlue'>
        <img className='w-full absolute dark:block hidden ' src={backgroundImage_desktop_dark} alt='nnnnn' />
        <img className='w-full absolute block dark:hidden' src={backgroundImage_desktop_light} alt='mmmmm' />
        <div className='w-full min-h-screen absolute flex justify-center'>
          <div className='md:w-2/3 lg:w-2/5 mt-20 flex flex-col'>
            <div className='flex justify-between'>
              <span className='text-4xl font-bold text-white'>T O D O</span>
              <img
                className='w-7 h-7 cursor-pointer hidden dark:block'
                src={iconSun}
                alt='sun icon for light mode'
                onClick={() => handleDarkMode(false)}
              />
              <img
                className='w-7 h-7 cursor-pointer block dark:hidden'
                src={iconMoon}
                alt='moon icon for dark mode'
                onClick={() => handleDarkMode(true)}
              />
            </div>

            <AddTodo inputValue={inputValue} setInputValue={setInputValue} handleAddTodo={handleAddTodo} />

            <Todos todos={displayedTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

            <TodoFooter todos={todos} activeTab={activeTab} handleActiveTab={handleActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
