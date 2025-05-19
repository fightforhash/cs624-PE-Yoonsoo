// Listing 5.3 Scaling ProfileCard from full size to thumbnail
/*
    If you press the thumbnail, the component will return to full size. 
    If you press the full-size component, it will collapse back down into a thumbnail view.
    By reorganizing the structure of the component, you can better handle adding more ProfileCard components to the application. 
    
    In section 5.3, you'll add more ProfileCards and see how to organize them into a gallery layout.
*/
import React, { Component } from 'react';
// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types'; 

// The immutability helper function update lets you update a specific piece of the component's state.
// npm install immutability-helper --save
import update from 'immutability-helper'; 

/*
  Imports the Platform utility component to programmatically select styles based on the platform.
*/
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight , Dimensions } from 'react-native'; 

const userImage = require('../../assets/images/user.png');

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Card size and spacing
const CARD_WIDTH = (SCREEN_WIDTH - 40) / 2; // 10px padding on both sides, 20px spacing in the middle
const CARD_HEIGHT = SCREEN_HEIGHT / 4; // 1/4 of screen height (to fit 3 rows)

const data = [
  [
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
  ],
  [
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
  ],
  [
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
    {
      image: userImage,
      name: 'John Doe',
      occupation: 'React Native Developer',
      description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android.',
      showThumbnail: false,
    },
  ],
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (rowIndex, colIndex) => {
    const showThumbnail = !this.state.data[rowIndex][colIndex].showThumbnail;
    this.setState({
      data: update(this.state.data, {
        [rowIndex]: {
          [colIndex]: {
            showThumbnail: { $set: showThumbnail }
          }
        }
      })
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.row}>
            {row.map((item, colIndex) => (
              <ProfileCard 
                key={`card-${rowIndex}-${colIndex}`}
                image={item.image}
                name={item.name}
                occupation={item.occupation}
                description={item.description}
                onPress={() => this.handleProfileCardPress(rowIndex, colIndex)}
                showThumbnail={item.showThumbnail}
              />
            ))}
          </View>
        ))}
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

//Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  cardContainer: {
    width: 120,
    height: 160,
    marginBottom: 80,
    borderRadius: 8,
    backgroundColor: '#2196F3',
    borderWidth: 2,
    borderColor: '#black',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 24,
  },
  cardImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1.5,
    borderColor: '#black',
    width: 36,
    height: 36,
    borderRadius: 18,
    marginTop: 8,
    marginBottom: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 16,
    
  },
  cardImage: {
    width: 20,
    height: 20,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardOccupation: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 10,
    marginVertical: 2,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 6,
    color: 'black',
    marginTop: 2,
    textAlign: 'left',
  },
  cardThumbnail: {
    transform: [{scale: 1.6}]
  }
});