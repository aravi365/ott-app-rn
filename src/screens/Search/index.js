import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import api from '../../api';
import Header from '../../components/Header';
import strings from '../../theme/strings';
import MovieTile from '../../components/MovieTile';
import Input from '../../components/Input';
const dummy = [
  {
    name: 'Rear Window',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster6.jpg',
  },
  {
    name: 'Family Pot',
    'poster-image': 'poster5.jpg',
  },
  {
    name: 'Rear Window',
    'poster-image': 'poster4.jpg',
  },
];
export default function Search({navigation}) {
  const [input, setInput] = React.useState('');
  return (
    <View style={styles.container}>
      <Header
        title={strings.listing.rc_title}
        leftItem={
          <Image style={styles.leftButtonImg} source={images.backArrow} />
        }
        leftItemOnPress={() => navigation.goBack()}
        centreItem={
          <View style={styles.inputWrapper}>
            <Input onChangeText={text => setInput(text)} value={input} />
          </View>
        }
        rightItemOnPress={() => {}}
        rightItem={undefined}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        style={styles.flStyle}
        data={dummy}
        renderItem={({item, index}) => (
          <MovieTile title={item?.name} img={item['poster-image']} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  leftButtonImg: {
    height: hp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
  rightButtonImg: {
    height: hp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  flStyle: {
    paddingBottom: hp('4%'),
  },
  inputWrapper: {
    height: hp('4%'),
    width: wp('80%'),
    borderBottomWidth: 0.5,
    borderColor: colors.grey,
    marginHorizontal: wp('4%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
