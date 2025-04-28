import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
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

    render(){
        return(
            <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
              <Heading/>
              <Input
                inputValue = {this.state.inputValue}
                inputChange = {text => this.inputChange(text)}
              />
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
});

export default App;