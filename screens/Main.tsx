import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList'; // Adjust the path based on your project
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';

// Define the type for navigation prop
type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const Main: React.FC = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Welcome to React Native!</Text>
      
      <Image
        source={{ uri: 'https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/315535273_644254940732890_1965975177868866243_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=C1uDZu_rHTsQ7kNvgEAr8LP&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=A6tLV7QqE46xGqbZg9nhSX9&oh=00_AYB8ep49URXBy4m0wHeDLODL43EtSO7CIjMuNdbXk6SCNw&oe=66F4F9BC' }} // Replace with your logo URI
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <Pressable onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Register')} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
    backgroundColor: colors.primary,
  },
  welcomeText: {
    color: colors.text,
    fontSize: 30,
    marginBottom: 20,
    fontWeight:"500"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Main;
