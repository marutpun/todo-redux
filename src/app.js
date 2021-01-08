import React from 'react';
import { Provider } from 'react-redux';
import 'uikit/dist/css/uikit.min.css';

import { store } from './redux/todo';
import { TodoContainer } from './containers/todo';

export default function App() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}
