import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Submit task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      description,
    };

    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
  };

  // Delete task
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gradient-to-tr from-purple-50 to-amber-50 shadow-2xl rounded-2xl p-8 border border-dashed border-purple-400">
      <h2 className="text-3xl font-bold text-purple-700 text-center mb-6 tracking-tight">
        Task Manager 📝
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-purple-700 mb-1">Task Title</label>
          <input
            type="text"
            className="p-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-purple-700 mb-1">Task Description</label>
          <textarea
            className="p-2 rounded-lg border border-purple-300 focus:ring-2 focus:ring-purple-500"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
          >
            ➕ Add Task
          </button>
        </div>
      </form>

      {/* Task List */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-purple-600 mb-4">Your Tasks</h3>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-500 italic">No tasks yet. Add something! 🚀</p>
        ) : (
          <div className="grid gap-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-white border border-purple-100 rounded-xl p-4 shadow hover:shadow-lg transition-all flex justify-between items-start"
              >
                <div>
                  <h4 className="text-lg font-semibold text-purple-800">{task.title}</h4>
                  <p className="text-gray-600">{task.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="ml-4 text-red-600 hover:text-red-800 font-semibold"
                  title="Delete Task"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
