import React from 'react';
import Task from '../task/Task';

const FeaturedTasks = ({tasksData}) => {
    
    return (
       <div className='custom-card'>
         <div className='max-w-7xl mx-auto py-6'>
            <h1 className='text-3xl font-bold'>Featured Tasks</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2'>
                {tasksData.map(task=><Task key={task._id} task={task}></Task>)}
            </div>
        </div>
       </div>
    );
};

export default FeaturedTasks;