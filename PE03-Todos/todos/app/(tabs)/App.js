import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import TodoList from './TodoList';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  deleteTodo(todoIndex) {
    const todos = this.state.todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  toggleComplete(todoIndex) {
    const todos = this.state.todos.map(todo => {
      if (todo.todoIndex === todoIndex) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({ todos });
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  submitTodo() {
    if (this.state.inputValue.trim() === '') {
      return;
    }

    const newTodo = {
      title: this.state.inputValue,
      complete: false,
      todoIndex: Date.now(), // 확실히 중복되지 않는 키값
    };

    const todos = [...this.state.todos, newTodo];

    this.setState({
      todos,
      inputValue: '',
    });
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
