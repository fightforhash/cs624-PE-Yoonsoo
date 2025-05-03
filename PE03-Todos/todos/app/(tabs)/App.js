import React, { Component } from 'react';
import { View, ScrollView, StyleSheet , TouchableOpacity, Text } from 'react-native';
import Input from './Input';
import Heading from './Heading';
import TodoList from './TodoList';
import Button from './Button';

// Main component managing state, todo actions, and filter type
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '', // current text input
      todos: [],      // array of todos
      type: 'All',    // current filter type: 'All', 'Completed', or 'Incomplete'
    };

    // bind methods to this
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.setType = this.setType.bind(this);
  }

  // delete todo by its unique index
  deleteTodo(todoIndex) {
    const todos = this.state.todos.filter(todo => todo.todoIndex !== todoIndex);
    this.setState({ todos });
  }

  // toggle the completion status of todo
  toggleComplete(todoIndex) {
    const todos = this.state.todos.map(todo => {
      if (todo.todoIndex === todoIndex) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({ todos });
  }

  // update inputValue as user types
  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  // add new todo item
  submitTodo() {
    if (this.state.inputValue.trim() === '') return;

    const newTodo = {
      title: this.state.inputValue,
      complete: false,
      todoIndex: Date.now(), // unique ID based on timestamp
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
      inputValue: '',
    });
  }

  // set filter type: All, Completed, or Incomplete
  setType(type) {
    this.setState({ type });
  }

  // filter todos based on current filter type
  filterTodo() {
    const { todos, type } = this.state;
    if (type === 'Completed') return todos.filter(todo => todo.complete);
    if (type === 'Incomplete') return todos.filter(todo => !todo.complete);
    return todos;
  }

  // render UI components
  render() {
    const { inputValue, type } = this.state;
    const filteredTodos = this.filterTodo();

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input inputValue={inputValue} inputChange={this.inputChange} />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos} // filtered todos based on type
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>

        {/* Bottom tab bar for filtering todos */}
        <View style={styles.tabBar}>
          {['All', 'Completed', 'Incomplete'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, type === tab && styles.activeTab]}
              onPress={() => this.setType(tab)}
            >
              <Text style={[styles.tabText, type === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 70, 
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  tabText: {
    color: '#888',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff',
  },
});

export default App;

