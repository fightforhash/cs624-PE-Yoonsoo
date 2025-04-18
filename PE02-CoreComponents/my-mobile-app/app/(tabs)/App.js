import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
    // State to store the user's favorite course input
    const [favorite, setFavorite] = useState('');

    return (
        // Scrollable container for the entire screen
        <ScrollView style = {styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {require('../../assets/images/icon.png')} style = {styles.logo} />
        </View>

        {/* Question and input field for favorite course */}

        <Text style = {styles.question}> Which course did you like?</Text>
        <TextInput
            style = {styles.input}
            placeholder = "ex. CS624"
            value = {favorite}
            onChangeText = {setFavorite}
        />

        {/* Display user input if not empty */}

        {favorite !== '' && (
            <Text style = {styles.result}> You liked : {favorite} </Text>
        )}

        {/* Core Requirements section */}
        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}>Core requirements (24 credits)</Text>
            {[
                'CS 504 Software engineering',
                'CS 506 Programming for Computing',
                'CS 519 Cloud Computing Overview',
                'CS 533 Computer Architecture',
                'CS 547 Secure Systems and Programs',
                'CS 622 Discrete Math and Algorithms for Computing',
                'DS 510 Artificial Intelligence for Data Science',
                'DS 620 Machine Learning & Deep Learning'
            ].map((course, idx) => (
                <Text style = {styles.course} key = {idx}>{course} </Text>
            ))}
        </View>
        {/* Depth of Study section */}
        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}> Depth of Study (6 credits)</Text>
            <Text style = {styles.course}> CS 624 Full-Stack Development - Mobile App</Text>
            <Text style = {styles.course}> CS 628 Full-Stack Development - Web App</Text>
        </View>
        {/* Capstone section */}
        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}> Capstone (3 credits)</Text>
            <Text style = {styles.course}> CS 687 Comptuer Science Capstone</Text>
            
        </View>

        </ScrollView>
    );
};

// Internal stylesheet
const styles = StyleSheet.create({
    footerSpacer: {
        height: 200,         
        backgroundColor: '#fff',
      },
    container: {
        backgroundColor: '#fff',
        padding: 15
    },
    logoContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    logo: {
        width : 150,
        height : 150,
        resizeMode: 'contain'
    },
    question: {
        fontSize: 16,
        marginBottom : 5,
    },
    input : {

        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius : 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 10
    },
    result: {

        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 20 
    },
    section: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10
    },
    sectionTitle: {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 8,
        backgroundColor: '#ffff66'
    },
    course : {
        fontSize : 16, 
        paddingVertical: 2
    }
});
//export component
export default App;
