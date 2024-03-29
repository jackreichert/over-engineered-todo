import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from '../../context';
import Task from '../Task/index';

export default function List() {
  const { tasks } = useContext(AppContext);

  return (
    <ul data-testid="task-list" className="mt-10 w-1/3 mx-auto">
      {tasks.map((task) => (
        <Task key={uuidv4()} title={task.title} status={task.status} />
      ))}
    </ul>
  );
}
