import React from 'react';
import { View, TextInput, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Install expo icons if not using already
import colors from '../utils/colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/RootStackParamList';
import { useNavigation } from '@react-navigation/native';
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchHeader = () => {

  const navigation = useNavigation<RegisterScreenNavigationProp>();


  return (
    <View style={styles.c1}>
      <Ionicons name="search" size={36} color="#ECDFCC" style={{width:30,height:30}}/>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#ECDFCC"
      />
            <Pressable onPress={() => navigation.navigate('Welcome')}>

      <Image
        source={{ uri: 'https://assets.zenn.com/blog/4240180c-a9f2-4c2f-b439-cfa200575452.jpg' }} // Replace with your logo URI
        style={styles.logo}
        resizeMode="contain"
      />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  c1: {
    flexDirection:"row",
    gap:10,
    padding: 20,
    paddingBottom:"1%",
    width: "80%",
    backgroundColor: colors.secondary,
    borderBottomWidth:1,
    borderColor: colors.text
  },
  searchBar: {
    height: 40,
    backgroundColor: colors.primary,
    borderWidth: 0,
    borderRadius: 8,
    width: '100%',
    paddingLeft: 10,
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop:-4,
    backgroundColor:"black",
    borderRadius:100,
  },
});

export default SearchHeader;
