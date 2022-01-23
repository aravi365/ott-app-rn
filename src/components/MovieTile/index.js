/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../theme/colors';

export default function MovieTile({index = 0, title = 'Untitled', img}) {
  // for smooth display animation
  const ANIMATION_DURATION = 400;
  const [scaleValue, setScaleValue] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      delay: index * 10,
      useNativeDriver: true,
    }).start();
  }, []);
  //end of animation related

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
    <Animated.View style={[styles.container, {opacity: scaleValue}]}>
      <Image
        onError={() => onError()}
        style={styles.movieImg}
        source={imgUri ? images[name] : images.missingPlaceholder}
      />
      <Text numberOfLines={1} style={styles.titleText}>
        {title}
      </Text>
    </Animated.View>
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
