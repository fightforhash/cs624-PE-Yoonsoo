import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {

    const [favorite, setFavorite] = useState('');

    return (

        <ScrollView style = {styles.container}>
        <View style = {styles.logoContainer}>
            <Image source = {require('../../assets/images/icon.png')} style = {styles.logo} />
        </View>

        <Text style = {styles.question}> Which course did you like?</Text>
        <TextInput
            style = {styles.input}
            placeholder = "ex. CS624"
            value = {favorite}
            onChangeText = {setFavorite}
        />
        {favorite !== '' && GG(
            <Text style = {styles.result}> You liked : {favorite} </Text>
        )}

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
        
        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}> Depth of Study (6 credits)</Text>
            <Text style = {styles.course}> CS 624 Full-Stack Development - Mobile App</Text>
            <Text style = {styles.course}> CS 628 Full-Stack Development - Web App</Text>
        </View>

        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}> Depth of Study ( 6 Credits)</Text>
            <Text style = {styles.sectionTitle}> Depth of Study ( 6 Credits)</Text>
            <Text style = {styles.sectionTitle}> Depth of Study ( 6 Credits)</Text>
        </View>

        <View style = {styles.section}>
            <Text style = {styles.sectionTitle}> Depth of Study ( 6 Credits)</Text>
            <Text style = {styles.sectionTitle}> Depth of Study ( 6 Credits)</Text>
        </View>
        </ScrollView>
    );
};


const Styles = StyleSheet.create({
    contianer: {
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

        backgroundColor: '#ffff66',
        padding: 10,
        marginBottom: 10
    },
    sectionTitle: {
        fontSize : 20,
        fontWeight : 'bold',
        marginBottom : 8
    },
    course : {
        fontSize : 16, 
        paddingVertical: 2
    }
});

export default App;
