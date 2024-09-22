import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import colors from '../utils/colors';

// Zod Schema for form validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Submit handler
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <Image
        source={{ uri: 'https://assets.zenn.com/blog/4240180c-a9f2-4c2f-b439-cfa200575452.jpg' }} // Replace with your logo URI
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#fffbe8"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#fffbe8"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
          </>
        )}
      />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? "Logging in..." : "Login"}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginText}>Don't have an account? Go to Register</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor:"black",
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: '80%',
    color: colors.text,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    color: colors.text,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
