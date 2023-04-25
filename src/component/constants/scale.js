import {Dimensions, Platform, NativeModules} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const dimensions = {};
const {width, height} = Dimensions.get('window');

dimensions.window = {
  width,
  height,
};

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const BOTTOM_TAB_HEIGHT =
  Platform.OS === 'ios' && DeviceInfo.hasNotch()
    ? verticalScale(81)
    : verticalScale(61);

export const MARGIN_TOP_HEADER =
  DeviceInfo.hasNotch() || Platform.OS === 'ios'
    ? verticalScale(50)
    : verticalScale(16);

export const ERROR_POPUP_PADDING =
  DeviceInfo.hasNotch() || Platform.OS === 'ios' ? 40 : 30;

dimensions.spacing = {
  vertical: 10,
  horizontal: 15,
};

const DEVICE = {
  WIDTH: width,
  HEIGHT: height,
};
dimensions.borderRadius = 9;

export const LINE_HEIGHT = {
  BoldTitle: scale(50),
  Title1: scale(42),
  Title2: scale(34),
  Title3: scale(26),
  Heading: scale(19),
  BodyText: scale(17),
  SubHead: scale(22),
  Small: scale(14),
  Tiny: scale(12),
};

export const SPACING = {
  Tiny: scale(2),
  Small: scale(4),
  XSmall: scale(6),
  Normal: scale(8),
  Fit: scale(10),
  XNormal: scale(12),
  XXNormal: scale(14),
  Medium: scale(16),
  XMedium: scale(20),
  XXMedium: scale(22),
  Large: scale(24),
  XLarge: scale(26),
  XXLarge: scale(32),
};

const {StatusBarManager} = NativeModules;

const STATUS_BAR_HEIGHT = StatusBarManager.HEIGHT;

export {
  dimensions,
  scale,
  verticalScale,
  moderateScale,
  DEVICE,
  STATUS_BAR_HEIGHT,
};
