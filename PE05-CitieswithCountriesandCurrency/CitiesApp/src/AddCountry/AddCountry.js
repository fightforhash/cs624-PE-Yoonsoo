import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CountryContext } from '../context/CountryContext';
import { colors } from '../theme';

export default function AddCountry() {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const { addCountry } = useContext(CountryContext);

  const submit = () => {
    if (country === '' || currency === '') {
      alert('please complete form');
      return;
    }
    addCountry({ country, currency });
    setCountry('');
    setCurrency('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country name"
        onChangeText={setCountry}
        style={styles.input}
        value={country}
      />
      <TextInput
        placeholder="Currency"
        onChangeText={setCurrency}
        style={styles.input}
        value={currency}
      />
      <TouchableOpacity onPress={submit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
}); 