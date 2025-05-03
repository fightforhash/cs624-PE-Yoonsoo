import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete }) => (
    <View>
      {todos.map(todo => (
        <Todo
          key={todo.todoIndex}  // key를 todoIndex로 확실히 잡아줌
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </View>
  );
  
export default TodoList