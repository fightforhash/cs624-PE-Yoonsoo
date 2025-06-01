import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { CountryContext } from '../context/CountryContext';
import { colors } from '../theme';

export default function Countries() {
  const { countries } = useContext(CountryContext);

  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}> 
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}> 
        {!countries.length && <CenterMessage message="No saved countries!" />} 
        {countries.map((item, index) => (
          <View style={styles.cityContainer} key={index}>
            <Text style={styles.city}>{item.country}</Text>
            <Text style={styles.country}>{item.currency}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cityContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  city: {
    fontSize: 20,
  },
  country: {
    color: 'rgba(0, 0, 0, .5)',
  },
}); 