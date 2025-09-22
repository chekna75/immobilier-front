import React from 'react';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import openImagePickerUtil from '../utils/openImagePicker';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const UpdateProfileScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              color={palettes.App['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 20,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {'Fill Your Profile'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-evenly',
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Photo */}
          <View>
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                      allowsMultipleSelection: false,
                      selectionLimit: 0,
                      outputBase64: true,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['Avatar'])}
                style={StyleSheet.applyWidth(
                  { height: 160, width: 160 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
          {/* Full name */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                placeholder={'Full Name'}
                placeholderTextColor={palettes.App['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
          </View>
          {/* Nickname */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                placeholder={'Nickname'}
                placeholderTextColor={palettes.App['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* DOB */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 5 },
                dimensions.width
              )}
            >
              <DatePicker
                autoDismissKeyboard={true}
                disabled={false}
                hideLabel={false}
                inline={false}
                leftIconMode={'inset'}
                mode={'date'}
                onDateChange={newDatePickerValue => {
                  try {
                    setDatePickerValue(newDatePickerValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                date={datePickerValue}
                label={'Date of Birth'}
                rightIconName={'Feather/calendar'}
                type={'underline'}
              />
            </View>
          </View>
          {/* Email */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                placeholder={'Email'}
                placeholderTextColor={palettes.App['Custom Color_20']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
            <Icon
              size={24}
              color={palettes.App['Custom Color_20']}
              name={'MaterialCommunityIcons/email-outline'}
            />
          </View>
          {/* Phone */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.App['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 56,
                justifyContent: 'space-between',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingRight: 10 },
                dimensions.width
              )}
            >
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                keyboardType={'phone-pad'}
                placeholder={'+1 000 000 000'}
                placeholderTextColor={palettes.App['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              />
            </View>
          </View>
          {/* Gender */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'column',
                height: 56,
                justifyContent: 'center',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Touchable
              style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 56,
                    justifyContent: 'space-between',
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: palettes.App['Custom Color_21'],
                      fontFamily: 'Inter_400Regular',
                    },
                    dimensions.width
                  )}
                >
                  {'Gender'}
                </Text>
                <Icon
                  size={24}
                  color={palettes.App['Custom Color_20']}
                  name={'FontAwesome/caret-down'}
                />
              </View>
            </Touchable>
          </View>
          {/* Continue */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.branding.primary,
                borderRadius: 100,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 15,
                height: 58,
                marginBottom: 20,
                marginTop: 40,
                textAlign: 'center',
                width: '100%',
              },
              dimensions.width
            )}
            title={'Continue '}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(UpdateProfileScreen);
