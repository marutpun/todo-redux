import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Alert from './Alert';
import { postData } from '../redux/todo';
import { textCapitalize } from '../utils';

export default function TodoForm() {
  const [task, setTask] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useDispatch();

  const _handleSubmit = (event) => {
    event.preventDefault();
    if (task !== '') {
      dispatch(postData(task));
      setIsEmpty(false);
      setTask('');
    } else {
      setIsEmpty(true);
    }
  };

  const _handleChangeInput = (event) => {
    const {
      target: { value },
    } = event;

    setTask(textCapitalize(value));
  };

  return (
    <div>
      <form onSubmit={_handleSubmit}>
        <label className="uk-form-label" htmlFor="new-todo-input">
          Add new task
        </label>
        <div className="uk-form-controls uk-margin-small">
          <input
            className="uk-input"
            id="new-todo-input"
            type="text"
            placeholder="Some text..."
            onChange={_handleChangeInput}
            value={task}
          />
        </div>
        <button type="submit" className="uk-button uk-width-1-1 uk-button-primary">
          Add
        </button>
      </form>
      <Alert isEmpty={isEmpty} />
    </div>
  );
}
