import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>This is an italic footer message.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor:colors.secondary
  },
  footerText: {
    fontStyle: 'italic',
    color: colors.text,
    fontSize: 16,
  },
});

export default Footer;
