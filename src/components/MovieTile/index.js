/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../theme/colors';

export default function MovieTile({title = 'Untitled', img}) {
  //to extract filename without extension
  let name = img.replace(/\.[^/.]+$/, '');
  const [imgUri, setImgUri] = React.useState('');

  //asign image from local
  React.useEffect(() => {
    setImgUri(images[name]);
  }, []);

  //handle image load error case
  const onError = () => {
    setImgUri(null);
  };

  return (
    <View style={styles.container}>
      <Image
        onError={() => onError()}
        style={styles.movieImg}
        source={imgUri ? imgUri : images.missingPlaceholder}
      />
      <Text numberOfLines={1} style={styles.titleText}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: wp('1%'),
    marginBottom: hp('3%'),
    alignItems: 'flex-end',
  },
  movieImg: {
    width: wp('32%'),
    height: hp('24%'),
    resizeMode: 'contain',
  },
  titleText: {color: colors.white, marginTop: hp('0.5%'), width: wp('30%')},
});
