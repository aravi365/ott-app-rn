/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import Header from '../../components/Header';
import strings from '../../theme/strings';
import MovieTile from '../../components/MovieTile';
import * as listActions from '../../redux/actions/listActions';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/Input';
import EmptyComp from '../../components/EmptyComponent';
import {useDebouncedEffect} from '../../hooks/useDebouncedEffect';
export default function Home({navigation, navigate}) {
  const dispatch = useDispatch();
  const [searchMode, setSearchMode] = React.useState(false);
  const [input, setInput] = React.useState('');

  //load first page data at first
  React.useEffect(() => {
    dispatch(listActions.fetchData(currentPage));
  }, [navigation]);

  //debounce for search with custom hook
  const debouncedTitle = useDebouncedEffect(input, 800);

  //search from the reducer using search string
  React.useEffect(() => {
    dispatch(listActions.searchMovie(input));
  }, [debouncedTitle]);

  //get stored values from the listReducer
  const {currentPage, data, isLoading, totalCount, dataSearch} = useSelector(
    state => state.listReducer,
  );

  //handle end reached case for pagination
  const handleEndReached = () => {
    if (data.length < totalCount) {
      dispatch(listActions.fetchData(currentPage + 1));
    }
  };

  //handle textinput change
  const handleChangeText = text => {
    setInput(text);
  };

  //toggle search mode,clear input
  const handleRightPress = () => {
    setSearchMode(prevState => !prevState);
    setInput('');
    dispatch(listActions.searchMovie(input));
  };
  return (
    <View style={styles.container}>
      <Header
        leftItem={
          <Image style={styles.leftButtonImg} source={images.backArrow} />
        }
        leftItemOnPress={() => setSearchMode(false)}
        centreItem={
          searchMode ? (
            <View style={styles.inputWrapper}>
              <Input
                onChangeText={text => handleChangeText(text)}
                value={input}
              />
            </View>
          ) : (
            <Text style={styles.titleText}>{strings.listing.rc_title}</Text>
          )
        }
        rightItem={
          searchMode ? (
            <Image style={styles.rightButtonImg} source={images.close} />
          ) : (
            <Image style={styles.rightButtonImg} source={images.search} />
          )
        }
        rightItemOnPress={() => handleRightPress()}
      />
      {!isLoading ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<EmptyComp />}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          style={styles.flStyle}
          data={searchMode ? dataSearch : data}
          renderItem={({item, index}) => (
            <MovieTile title={item?.name} img={item['poster-image']} />
          )}
          onEndReachedThreshold={0.25}
          onEndReached={() => handleEndReached()}
        />
      ) : null}
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
  titleText: {
    color: colors.white,
    fontFamily: fonts.type.TRegular,
    fontSize: fonts.size.font2,
    marginLeft: wp('3%'),
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
