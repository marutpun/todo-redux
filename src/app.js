import React from 'react';
import { Provider } from 'react-redux';
import 'uikit/dist/css/uikit.min.css';

import { store } from './redux/todo';
import Heading from './components/Heading';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Layout from './components/Layout';

export default function App() {
  return (
    <Provider store={store}>
      <Heading align="center">Todo List</Heading>
      <Layout>
        <TodoForm />
        <TodoList />
      </Layout>
    </Provider>
  );
}
