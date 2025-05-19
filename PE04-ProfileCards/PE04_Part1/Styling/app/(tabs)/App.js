import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { profileCardStyles } from './styles';

export default class App extends Component {
  render() {
    return (
      <View style={profileCardStyles.container}>
        <View style={profileCardStyles.cardContainer}>
          <View style={profileCardStyles.cardImageContainer}>
            <Image
              style={profileCardStyles.cardImage}
              source={require('../../assets/images/user.png')}
            />
          </View>
          <View style={profileCardStyles.cardTextContainer}>
            <Text style={profileCardStyles.cardTitle}>John Doe</Text>
            <Text style={profileCardStyles.cardSubtitle}>React Native Developer</Text>
            <Text style={profileCardStyles.cardDescription}>
              John is a really great JavaScript developer. He loves using JS to build React Native applications for iOS and Android.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
