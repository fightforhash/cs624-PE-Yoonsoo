import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Input from './Input';
import Heading from './Heading';

class App extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type : 'All',
        };
    }

    inputChange(inputValue){
        console.log(' Input Value: ', inputValue);
        this.setState({inputValue});
    }

    addTodo = () => {
        if (this.state.inputValue.trim() === ''){
            return ;
        }

        const newTodo = {
            title : this.state.inputValue,
        };

        const todos = [...this.state.todos, newTodo];

        this.setState({
            todos,
            inputValue: '',
        }, () => {
            console.log('Current todos:' , this.state.todos);
        });
    }                        

    render(){

        const { inputValue } = this.state;

        return( 
            <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
              <Heading/>
              <Input
                inputValue = {this.state.inputValue}
                inputChange = {text => this.inputChange(text)}
              />
              <TouchableOpacity style={styles.button} onPress={this.addTodo}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#f5f5f5',
    },
    content:{
        flex : 1,
        paddingTop : 60,
    },
    button: {
        backgroundColor: '#ffffff', // 흰색 배경
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'flex-end', // 우측 정렬
        marginRight: 20, // 오른쪽 여백 추가
        marginTop: 10,
        borderRadius: 5, // 버튼 둥글게
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      buttonText: {
        color: '#000', // 버튼 글자 색 검정
        fontSize: 16,
      },
});

export default App;