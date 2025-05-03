import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

// Single todo item displaying title and action buttons (Done/Delete)
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  // 안전장치: todo나 title이 없으면 null 반환
  if (!todo || !todo.title) return null;

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{todo.title}</Text>
      <View style={styles.buttons}>
        <TodoButton
          name='Done'
          complete={todo.complete}
          onPress={() => toggleComplete(todo.todoIndex)}
        />
        <TodoButton
          name='Delete'
          onPress={() => deleteTodo(todo.todoIndex)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17
  },
  buttons: { 
    flex : 1,
    flexDirection: 'row',
    justifyContent : 'flex-end',
    alignItems: 'center'
  }
});

export default Todo;
