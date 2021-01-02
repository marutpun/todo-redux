import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/todo';

import TodoButton from './TodoButton';

export default function TodoList() {
  const content = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="uk-margin-top">
      <ul className="uk-list uk-list-divider">
        {content.map((task) => (
          <li key={task.id}>
            <div className="uk-flex uk-flex-between">
              <p>{task.title}</p>

              <TodoButton idPrivate={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
