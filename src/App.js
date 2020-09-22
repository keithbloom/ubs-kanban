import React, { Component, useState } from 'react';
import './App.css';

const TaskCard = ({taskName}) => (
  <div className="TaskCard">{taskName}</div>
)

const TaskList = ({ showState, tasks}) => (
  <div className="TaskStateItem">
    <h2>{showState}</h2>
    {tasks.filter(({state}) => state === showState).map(({taskName}) => <TaskCard key={taskName} taskName={taskName} />)}
  </div>

)

const AddTask = ({onAdd}) => {
  const [task, setTask] = useState('');
  const handleChange = ({ target: {value}}) => setTask(value)
  const onClick = onAdd(task);

  return (
  <div>
    <input value={task} onChange={handleChange} />
    <button type="button" onClick={onClick}>Add</button>
  </div>
)}

class App extends Component {

  backlog = [{state: 'ready', taskName: 'task1'}, {state: 'in-progress', taskName: 'task2'}]

  render() {
    return (
      <div className="Board">
        <div className="BoardHeader">
          <AddTask onAdd={() => {}} />
          <div>My Kanban Board</div>
        </div>
        <div className='TaskStates'>
          <TaskList showState='ready' tasks={this.backlog} />
          <TaskList showState='in-progress' tasks={this.backlog} />
          <TaskList showState='testing' tasks={this.backlog} />
          <TaskList showState='done' tasks={this.backlog} />
        </div>
        
      </div>
    );
  }
}

export default App;
