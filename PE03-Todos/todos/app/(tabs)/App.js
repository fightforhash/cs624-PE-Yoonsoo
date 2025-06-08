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

  componentDidMount() {
    this.fetchTodos();
  }

  async fetchTodos() {
    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos');
      const todos = await response.json();
      this.setState({ todos });
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  async deleteTodo(todoIndex) {
    const todo = this.state.todos.find(t => t.todoIndex === todoIndex);
    if (!todo || !todo._id) return;

    try {
      await fetch(`https://cityutodoapi.azurewebsites.net/todos/${todo._id}`, {
        method: 'DELETE',
      });
      this.setState(prevState => ({
        todos: prevState.todos.filter(t => t.todoIndex !== todoIndex),
      }));
    } catch (error) {
      console.error('Delete error:', error);
    }
  }

  async toggleComplete(todoIndex) {
    const todo = this.state.todos.find(t => t.todoIndex === todoIndex);
    if (!todo || !todo._id) return;

    const updated = { ...todo, complete: !todo.complete };

    try {
      await fetch(`https://cityutodoapi.azurewebsites.net/todos/${todo._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });

      this.setState(prevState => ({
        todos: prevState.todos.map(t =>
          t.todoIndex === todoIndex ? updated : t
        ),
      }));
    } catch (error) {
      console.error('Toggle error:', error);
    }
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  async submitTodo() {
    if (this.state.inputValue.trim() === '') return;

    const newTodo = {
      title: this.state.inputValue,
      complete: false,
    };

    try {
      const response = await fetch('https://cityutodoapi.azurewebsites.net/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      const createdTodo = await response.json();

      // 추가된 투두를 state에 반영
      this.setState(prevState => ({
        todos: [...prevState.todos, {
          ...createdTodo,
          todoIndex: Date.now(), // UI용 인덱스
        }],
        inputValue: '',
      }));
    } catch (error) {
      console.error('Submit error:', error);
    }
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={this.inputChange} />
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
