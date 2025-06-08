import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCountry/AddCountry';
import Cities from './src/Cities/Cities';
import { CountryProvider } from './src/context/CountryContext';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
import { colors } from './src/theme';

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
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="CitiesNav"
        options={{ title: 'Cities' }}
      >
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

function CountriesStackScreen() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="CountriesList" 
        component={Countries}
        options={{ title: 'Countries' }}
      />
      <Stack.Screen 
        name="Country" 
        component={Country}
        options={{ title: 'Country' }}
      />
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
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'white',
            },
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: colors.primary,
          }}
        >
          <Tab.Screen 
            name="CitiesNav"
            options={{ title: 'CitiesNav' }}
          >
            {(props) => <CitiesStackScreen {...props} cities={cities} />}
          </Tab.Screen>
          <Tab.Screen name="AddCity">
            {(props) => <AddCity {...props} addCity={addCity} />}
          </Tab.Screen>
          <Tab.Screen 
            name="CountriesNav" 
            component={CountriesStackScreen}
            options={{ title: 'CountriesNav' }}
          />
          <Tab.Screen name="AddCountry" component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    </CountryProvider>
  );
}