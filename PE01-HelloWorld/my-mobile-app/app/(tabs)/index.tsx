import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thomas Ha</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>CityU of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default App;
