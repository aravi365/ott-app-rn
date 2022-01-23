/*
 * platform/application wide metrics for proper styling
 */
import {Dimensions, Platform, StatusBar} from 'react-native';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const hasNotch =
  Platform.OS === 'android' ? StatusBar.currentHeight > 24 : false;

export default {metrics, hasNotch};
