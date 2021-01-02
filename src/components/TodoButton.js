import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteData } from '../redux/todo';

export default function TodoButton({ idPrivate }) {
  const dispatch = useDispatch();

  return (
    <div className="uk-button-group">
      <button className="uk-button uk-button-small uk-button-danger" onClick={() => dispatch(deleteData(idPrivate))}>
        Remove
      </button>
    </div>
  );
}
