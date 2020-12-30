import React, { Component, useState } from 'react';
import './App.css';

const TaskCard = ({taskName}) => (
  <div className="TaskCard">{taskName}</div>
)

const TaskList = ({ showState, tasks}) => (
  <div className="TaskStateItem">
    <h2>{showState}</h2>
    {tasks && tasks.filter(({state}) => state === showState).map(({taskName}) => <TaskCard key={taskName} taskName={taskName} />)}
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

  constructor(props) {
    super(props);
    this.state = {tasks: [{state: 'ready', taskName: 'task1'}, {state: 'in-progress', taskName: 'task2'}]};
  }

  onAdd = (taskName) => {
    this.setState(({tasks}) => ({tasks: [{state: 'ready', taskName}, ...tasks]}))
  }

  render() {
    return (
      <div className="Board">
        <div className="BoardHeader">
          <AddTask onAdd={() => this.onAdd} />
          <div>My Kanban Board</div>
        </div>
        <div className='TaskStates'>
          <TaskList showState='ready' tasks={this.state.tasks} />
          <TaskList showState='in-progress' tasks={this.state.tasks} />
          <TaskList showState='testing' tasks={this.state.tasks} />
          <TaskList showState='done' tasks={this.state.tasks} />
        </div>
        
      </div>
    );
  }
}

export default App;
