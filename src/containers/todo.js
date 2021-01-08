import React from 'react';

import { Layout, Heading, TodoForm, TodoList } from '../components';

export function TodoContainer() {
  return (
    <>
      <Heading align="center">Todo List</Heading>
      <Layout>
        <TodoForm />
        <TodoList />
      </Layout>
    </>
  );
}
