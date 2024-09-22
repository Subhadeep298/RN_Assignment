import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import colors from '../utils/colors';

// Zod Schema for form validation
const registerSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phoneNumber: z.string()
  .length(10, "Phone number must be exactly 10 digits long")
  .regex(/^[0-9]+$/, "Phone number must contain only digits"),});

type RegisterFormData = z.infer<typeof registerSchema>;

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Register: React.FC = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://assets.zenn.com/blog/4240180c-a9f2-4c2f-b439-cfa200575452.jpg' }} // Replace with your logo URI
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Register</Text>

      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, onBlur } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#fffbe8"
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
          </>
        )}
      />

      {/* Email */}
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

      {/* Password */}
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

      {/* Phone Number */}
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, onBlur } }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#fffbe8"
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>}
          </>
        )}
      />

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)} disabled={isSubmitting}>
        <Text style={styles.buttonText}>{isSubmitting ? "Submitting..." : "Register"}</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Go to Login</Text>
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
    marginBottom:10,
  },
});

export default Register;
