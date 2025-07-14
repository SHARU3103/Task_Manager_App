
import './App.css';
import TaskManager from './component/TaskManager';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700">React Task Manager App</h1>
      <TaskManager />
    </div>
  );
}

export default App;
