import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Cities from './src/Cities/Cities';
import { CountryProvider } from './src/context/CountryContext';
import Countries from './src/Countries/Countries';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  function CityPlaceholder() {
    return (
      <View>
        <Text>City Details Placeholder</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities((prevCities) => [...prevCities, city]);
  };

  return (
    <CountryProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities">
            {(props) => <CitiesStackScreen {...props} cities={cities} />}
          </Tab.Screen>
          <Tab.Screen name="AddCity">
            {(props) => <AddCity {...props} addCity={addCity} />}
          </Tab.Screen>
          <Tab.Screen name="Countries" component={Countries} />
          <Tab.Screen name="AddCountry" component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    </CountryProvider>
  );
}