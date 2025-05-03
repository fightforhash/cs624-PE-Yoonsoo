import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Todo from './Todo';

// Renders a list of todo items based on provided data and actions

const TodoList = ({ todos = [], deleteTodo, toggleComplete }) => (
  <View>
    {todos && todos.length > 0 ? (
      todos.map((todo) =>
        todo && todo.title ? (
          <Todo
            key={todo.todoIndex}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            todo={todo}
          />
        ) : null
      )
    ) : null}
  </View>
);
  
export default TodoList