import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList'; // Adjust the path based on your project
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';

// Define the type for navigation prop
type MainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Main: React.FC = () => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Nike. Just Do It.</Text>
      <Image
        source={{ uri: 'https://assets.zenn.com/blog/4240180c-a9f2-4c2f-b439-cfa200575452.jpg' }} // Replace with your logo URI
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
    fontWeight:"500",
    fontStyle:"italic"
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
    backgroundColor: "black",
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
