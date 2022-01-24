import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import fonts from '../../theme/fonts';

export default function EmptyComp() {
  return (
    <View
      style={{
        height: hp('80%'),
        // alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: colors.white,
          fontSize: fonts.size.font3,
          fontFamily: fonts.type.TLight,
        }}>
        No movies found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
