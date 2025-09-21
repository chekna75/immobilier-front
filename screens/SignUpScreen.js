import React from 'react';
import {
  Button,
  ExpoImage,
  Icon,
  LinearGradient,
  Link,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  Spacer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const SignUpScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = React.useState('');
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
        <LinearGradient
          endX={100}
          endY={100}
          startX={0}
          startY={0}
          color1={palettes.Rentbit.Darker_Pink}
          color2={theme.colors.branding.primary}
          style={StyleSheet.applyWidth(
            { height: '100%', width: '100%' },
            dimensions.width
          )}
        >
          <SimpleStyleKeyboardAwareScrollView
            enableAutomaticScroll={false}
            enableOnAndroid={false}
            enableResetScrollToCoords={false}
            keyboardShouldPersistTaps={'never'}
            showsVerticalScrollIndicator={true}
            viewIsInsideTabBar={false}
            style={StyleSheet.applyWidth(
              {
                flex: 1,
                justifyContent: 'center',
                paddingBottom: 48,
                paddingLeft: 48,
                paddingRight: 48,
                paddingTop: 48,
              },
              dimensions.width
            )}
          >
            {/* Logo */}
            <View>
              <ExpoImage
                allowDownscaling={true}
                cachePolicy={'disk'}
                contentPosition={'center'}
                transitionDuration={300}
                transitionEffect={'cross-dissolve'}
                transitionTiming={'ease-in-out'}
                resizeMode={'contain'}
                source={imageSource(Images['LogoWhite'])}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 125 },
                  dimensions.width
                )}
              />
            </View>
            <Spacer bottom={8} left={8} right={8} top={8} />
            {/* Header */}
            <View>
              {/* Title */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand.Surface,
                    fontFamily: 'Poppins_600SemiBold',
                    fontSize: 20,
                  },
                  dimensions.width
                )}
              >
                {'Find your next destination'}
              </Text>
              <Spacer left={8} right={8} bottom={4} top={4} />
              {/* Sub Title */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Medium Inverse'],
                    fontFamily: 'Poppins_400Regular',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {
                  "Premium vacation rentals for the discerning adventurer (that's you)"
                }
              </Text>
            </View>
            <Spacer left={8} right={8} bottom={24} top={24} />
            {/* Form */}
            <View>
              {/* Name */}
              <View>
                {/* Label */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.Brand.Surface,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 14,
                    },
                    dimensions.width
                  )}
                >
                  {'Name'}
                </Text>
                {/* Field */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: palettes.Brand['Light Inverse'],
                      flexDirection: 'row',
                      marginTop: 8,
                      paddingBottom: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.Brand.Surface}
                    name={'Feather/user'}
                    size={20}
                    style={StyleSheet.applyWidth(
                      { height: 20, width: 20 },
                      dimensions.width
                    )}
                  />
                  {/* Name Input */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 4 },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      autoCorrect={true}
                      changeTextDelay={500}
                      onChangeText={newTextInputValue => {
                        const textInputValue = newTextInputValue;
                        try {
                          setValue(value);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      webShowOutline={true}
                      autoCapitalize={'words'}
                      keyboardType={'default'}
                      placeholder={'Jane Doh'}
                      placeholderTextColor={palettes.Brand['Light Inverse']}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.Brand.Surface,
                          fontFamily: 'Poppins_400Regular',
                          fontSize: 18,
                        },
                        dimensions.width
                      )}
                      value={textInputValue}
                    />
                  </View>
                </View>
              </View>
              <Spacer left={8} right={8} bottom={12} top={12} />
              {/* Email */}
              <View>
                {/* Label */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.Brand.Surface,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 14,
                    },
                    dimensions.width
                  )}
                >
                  {'Email'}
                </Text>
                {/* Field */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: palettes.Brand['Light Inverse'],
                      flexDirection: 'row',
                      marginTop: 8,
                      paddingBottom: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.Brand.Surface}
                    name={'MaterialIcons/alternate-email'}
                    size={20}
                    style={StyleSheet.applyWidth(
                      { height: 20, width: 20 },
                      dimensions.width
                    )}
                  />
                  {/* Email Input */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 4 },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      autoCapitalize={'none'}
                      autoCorrect={true}
                      changeTextDelay={500}
                      onChangeText={newTextInputValue => {
                        const textInputValue = newTextInputValue;
                        try {
                          setValue(value);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      webShowOutline={true}
                      keyboardType={'email-address'}
                      placeholder={'JaneDoh@email.com'}
                      placeholderTextColor={palettes.Brand['Light Inverse']}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.Brand.Surface,
                          fontFamily: 'Poppins_400Regular',
                          fontSize: 18,
                        },
                        dimensions.width
                      )}
                      value={textInputValue}
                    />
                  </View>
                </View>
              </View>
              <Spacer left={8} right={8} bottom={12} top={12} />
              {/* Password */}
              <View>
                {/* Label */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.Brand.Surface,
                      fontFamily: 'Poppins_500Medium',
                      fontSize: 14,
                    },
                    dimensions.width
                  )}
                >
                  {'Password'}
                </Text>
                {/* Field */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 2,
                      borderColor: palettes.Brand['Light Inverse'],
                      flexDirection: 'row',
                      marginTop: 8,
                      paddingBottom: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.Brand.Surface}
                    name={'MaterialIcons/lock-outline'}
                    size={20}
                    style={StyleSheet.applyWidth(
                      { height: 20, width: 20 },
                      dimensions.width
                    )}
                  />
                  {/* Password Input */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 4 },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      autoCapitalize={'none'}
                      autoCorrect={true}
                      changeTextDelay={500}
                      onChangeText={newTextInputValue => {
                        const textInputValue = newTextInputValue;
                        try {
                          setValue(value);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      webShowOutline={true}
                      keyboardType={'default'}
                      placeholder={'MySecretPassword'}
                      placeholderTextColor={palettes.Brand['Light Inverse']}
                      secureTextEntry={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.Brand.Surface,
                          fontFamily: 'System',
                          fontSize: 18,
                          fontWeight: '400',
                        },
                        dimensions.width
                      )}
                      value={textInputValue}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Spacer left={8} right={8} bottom={32} top={32} />
            {/* Actions */}
            <View>
              {/* Get Started Button */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    navigation.navigate('HomeScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                title={'Get Started'}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.Rentbit.Transparent,
                    borderBottomWidth: 3,
                    borderColor: palettes.Brand['Medium Inverse'],
                    borderLeftWidth: 3,
                    borderRadius: 12,
                    borderRightWidth: 3,
                    borderTopWidth: 3,
                    color: palettes.Brand.Surface,
                    fontFamily: 'Poppins_500Medium',
                    fontSize: 16,
                    paddingBottom: 16,
                    paddingTop: 16,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              />
              <Spacer left={8} right={8} bottom={12} top={12} />
              {/* Already Have An Account */}
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
                      fontSize: 12,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  title={'Already have an account? Sign in'}
                />
              </View>
            </View>
          </SimpleStyleKeyboardAwareScrollView>
        </LinearGradient>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SignUpScreen);
