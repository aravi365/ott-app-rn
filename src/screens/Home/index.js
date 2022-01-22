import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../theme/fonts';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: fonts.type.TSemiBold}}>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
  },
});
