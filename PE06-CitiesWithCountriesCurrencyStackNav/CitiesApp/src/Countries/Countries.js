import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { CountryContext } from '../context/CountryContext';
import { colors } from '../theme';

export default function Countries({ navigation }) {
  const { countries } = useContext(CountryContext);

  const handleCountryPress = (country) => {
    navigation.navigate('Country', { country });
  };

  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}> 
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}> 
        {!countries.length && <CenterMessage message="No saved countries!" />} 
        {countries.map((item, index) => (
          <TouchableOpacity 
            key={index}
            onPress={() => handleCountryPress(item)}
            activeOpacity={0.7}
          >
            <View style={styles.countryContainer}>
              <Text style={styles.country}>{item.country}</Text>
              <Text style={styles.currency}>{item.currency}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
}); 