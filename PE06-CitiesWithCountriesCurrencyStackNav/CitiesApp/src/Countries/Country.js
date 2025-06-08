import React, { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CountryContext } from '../context/CountryContext';
import { colors } from '../theme';
import CenterMessage from '../components/CenterMessage';

export default function Country({ route, navigation }) {
  const { country } = route.params;
  const { updateCountry } = useContext(CountryContext);
  
  const [currencyName, setCurrencyName] = useState('');
  const [info, setInfo] = useState('');

  // 기존 정보들을 배열로 변환
  const existingInfo = country.currencies || [];

  const handleAdd = () => {
    if (currencyName === '' || info === '') {
      alert('please complete form');
      return;
    }
    
    const newCurrency = {
      currencyName: currencyName,
      info: info,
    };
    
    const updatedCountry = {
      ...country,
      currencies: [...existingInfo, newCurrency],
    };
    
    updateCountry(updatedCountry);
    setCurrencyName('');
    setInfo('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={[!existingInfo.length && { flex: 1 }]} style={styles.scrollView}>
        <View style={[!existingInfo.length && { justifyContent: 'center', flex: 1 }]}>
          {!existingInfo.length && <CenterMessage message="No currency information saved!" />}
          {existingInfo.map((item, index) => (
            <View key={index} style={styles.infoContainer}>
              <Text style={styles.currency}>{item.currencyName}</Text>
              <Text style={styles.info}>{item.info || 'No additional info'}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.addSection}>
        <TextInput
          placeholder="Currency name"
          onChangeText={setCurrencyName}
          style={styles.input}
          value={currencyName}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TextInput
          placeholder="Currency info"
          onChangeText={setInfo}
          style={styles.input}
          value={info}
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
        />
        <TouchableOpacity onPress={handleAdd}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Currency</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  infoContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  currency: {
    fontSize: 20,
  },
  info: {
    color: 'rgba(0, 0, 0, .5)',
  },
  addSection: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    margin: 5,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    height: 50,
    borderWidth: 1,
    borderColor: colors.primary,
    color: 'white',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
}); 