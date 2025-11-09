import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskList';
import TaaskLis from '../TaskList/TaaskLis';

const EmployeeDashboard = () => {
  return (
    <div>
       <div className='p-20 bg-[#1c1c1c] h-screen w-screen'>
        <Header />
        <TaskList />
        <TaaskLis />
       </div>
    </div>
  );
}

export default EmployeeDashboard;
