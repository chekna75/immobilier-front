import React from 'react';
import {
  Button,
  ExpoImage,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const WelcomeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const myFunctionName = (text, onPress) => {
    return (
      <Button onPress={onPress}>
        <Text>{text}</Text>
      </Button>
    );
  };
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (!isFocused) {
      return;
    }
    const entry = StatusBar.pushStackEntry?.({ barStyle: 'light-content' });
    return () => StatusBar.popStackEntry?.(entry);
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Container */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <ImageBackground
          resizeMode={'cover'}
          source={imageSource(Images['WelcomeBg'])}
          style={StyleSheet.applyWidth(
            { height: '100%', width: '100%' },
            dimensions.width
          )}
        >
          {/* Main */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Top Section */}
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 16, marginRight: 16, marginTop: 64 },
                dimensions.width
              )}
            >
              {/* Icon Image */}
              <ExpoImage
                allowDownscaling={true}
                cachePolicy={'disk'}
                contentPosition={'center'}
                transitionDuration={300}
                transitionEffect={'cross-dissolve'}
                transitionTiming={'ease-in-out'}
                resizeMode={'contain'}
                source={imageSource(Images['koti'])}
                style={StyleSheet.applyWidth(
                  { height: 100, width: 125 },
                  dimensions.width
                )}
              />
              <Spacer left={8} right={8} bottom={12} top={12} />
              {/* Headings */}
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Medium Inverse'],
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 26,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Discover your next stay.'}
              </Text>
              {/* Sub Headings */}
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(theme.typography.body1, {
                    color: palettes.Brand['Medium Inverse'],
                    fontFamily: 'Poppins_400Regular',
                  }),
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'The best rental properties, curated for you. '}
              </Text>
            </View>
            {/* Bottom Section */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 64, paddingLeft: 24, paddingRight: 24 },
                dimensions.width
              )}
            >
              {/* Create Account */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    navigation.navigate('SignUpScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.branding.primary,
                    borderRadius: 12,
                    color: palettes.Brand.Surface,
                    fontFamily: 'System',
                    fontWeight: '700',
                    paddingBottom: 20,
                    paddingTop: 20,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
                title={'Create An Account'}
              />
              <Spacer left={8} right={8} bottom={12} top={12} />
              {/* Sign In Your Account */}
              <View
                style={StyleSheet.applyWidth(
                  { alignSelf: 'center' },
                  dimensions.width
                )}
              >
                <Link
                  accessible={true}
                  onPress={() => {
                    try {
                      navigation.navigate('SignInScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.Brand.Surface,
                      fontFamily: 'Poppins_500Medium',
                    },
                    dimensions.width
                  )}
                  title={'Sign in to your account'}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
