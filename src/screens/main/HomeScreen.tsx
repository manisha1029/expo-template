import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Set up is ready.</Text>
      <Text>Start working on your project.</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});