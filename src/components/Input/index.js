import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fonts from '../../theme/fonts';
import strings from '../../theme/strings';
export default function Input({
  keyboardType = 'default',
  autoFocus = true,
  autoCorrect = false,
  autoComplete = 'off',
  autoCapitalize = 'words',
  value = '',
  onChangeText,
}) {
  // The following values work across platforms for keyboardType:
  // default
  // number-pad
  // decimal-pad
  // numeric
  // email-address
  // phone-pad
  return (
    <TextInput
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      keyboardType={keyboardType}
      style={styles.input}
      placeholderTextColor={colors.grey}
      placeholder={strings.listing.placeholder_search}
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: hp('4%'),
    color: colors.white,
    fontFamily: fonts.type.TRegular,
    fontSize: fonts.size.font3,
  },
});
