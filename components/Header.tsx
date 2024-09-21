import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Install expo icons if not using already
import colors from '../utils/colors';

const SearchHeader = () => {
  return (
    <View style={styles.c1}>
      <Ionicons name="search" size={36} color="#E6D9A2" style={{width:30,height:30}}/>
      
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        placeholderTextColor="#b27cf2"
      />
      <Image
        source={{ uri: 'https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/315535273_644254940732890_1965975177868866243_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=C1uDZu_rHTsQ7kNvgEAr8LP&_nc_ht=scontent.fhyd1-3.fna&_nc_gid=A6tLV7QqE46xGqbZg9nhSX9&oh=00_AYB8ep49URXBy4m0wHeDLODL43EtSO7CIjMuNdbXk6SCNw&oe=66F4F9BC' }} // Replace with your logo URI
        style={styles.logo}
        resizeMode="contain"
      />
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
    borderRadius:100,
  },
});

export default SearchHeader;
