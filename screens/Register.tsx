import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;


const Register: React.FC = () => {

    const navigation = useNavigation<RegisterScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Screen</Text>
      <View style={{flexDirection: 'row'}}>
      <Pressable style={styles.button} onPress={() =>  navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={() =>  navigation.navigate('Welcome')}>
        <Text style={styles.buttonText}>Go to Main</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
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

export default Register;
