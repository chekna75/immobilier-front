import React from 'react';
import { Circle, Icon, ScreenContainer, Spacer, withTheme } from '@draftbit/ui';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ExampleUserApi from '../apis/ExampleUserApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const ProfileScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          paddingBottom: 24,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 24,
        },
        dimensions.width
      )}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
          dimensions.width
        )}
      >
        <ExampleUserApi.FetchGetUserGET>
          {({ loading, error, data, refetchGetUser }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* User Info */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.background.brand,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.border.brand,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'row',
                      overflow: 'hidden',
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Profile Picture */}
                  <View>
                    <Circle bgColor={theme.colors.branding.primary} size={84}>
                      <Image
                        resizeMode={'cover'}
                        source={imageSource(`${fetchData?.avatar}`)}
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            borderRadius: 42,
                            height: 76,
                            width: 76,
                          },
                          dimensions.width
                        )}
                      />
                    </Circle>
                  </View>
                  <Spacer bottom={8} left={8} right={8} top={8} />
                  {/* Name & Location */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, justifyContent: 'center' },
                      dimensions.width
                    )}
                  >
                    {/* Full Name */}
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.text.strong,
                          fontFamily: 'Poppins_600SemiBold',
                          fontSize: 20,
                        },
                        dimensions.width
                      )}
                    >
                      {fetchData?.full_name}
                    </Text>
                    <Spacer left={8} right={8} bottom={3} top={3} />
                    {/* Location & Tags */}
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      {/* Location */}
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'center', flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.branding.primary}
                          name={'MaterialIcons/location-on'}
                          size={20}
                          style={StyleSheet.applyWidth(
                            { height: 20, width: 20 },
                            dimensions.width
                          )}
                        />
                        {/* City & State */}
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.light,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.city}
                          {', '}
                          {fetchData?.state}{' '}
                        </Text>
                      </View>
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      {/* Tag */}
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'center', flexDirection: 'row' },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.branding.primary}
                          name={'MaterialIcons/alternate-email'}
                          size={20}
                          style={StyleSheet.applyWidth(
                            { height: 20, width: 20 },
                            dimensions.width
                          )}
                        />
                        {/* Tag Name */}
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.light,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 12,
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.username}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Spacer left={8} right={8} bottom={6} top={6} />
                {/* User Bio */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.background.brand,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.border.brand,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* Bio Title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.branding.primary,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'Bio'}
                  </Text>
                  <Spacer left={8} right={8} bottom={4} top={4} />
                  {/* Bio Description */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(theme.typography.body1, {
                        color: theme.colors.text.medium,
                        fontFamily: 'Poppins_400Regular',
                      }),
                      dimensions.width
                    )}
                  >
                    {fetchData?.bio}
                  </Text>
                </View>
                <Spacer left={8} right={8} bottom={6} top={6} />
                {/* More Info */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.background.brand,
                      borderBottomWidth: 1,
                      borderColor: theme.colors.border.brand,
                      borderLeftWidth: 1,
                      borderRadius: 12,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      paddingBottom: 24,
                      paddingLeft: 24,
                      paddingRight: 24,
                      paddingTop: 24,
                    },
                    dimensions.width
                  )}
                >
                  {/* More Title */}
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.branding.primary,
                        fontFamily: 'Poppins_600SemiBold',
                        fontSize: 20,
                      },
                      dimensions.width
                    )}
                  >
                    {'More'}
                  </Text>
                  <Spacer left={8} right={8} bottom={4} top={4} />
                  {/* University */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Title  */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontFamily: 'Poppins_500Medium',
                          },
                          dimensions.width
                        )}
                      >
                        {'University'}
                      </Text>
                    </View>
                    {/* Description */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 2 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.medium,
                            fontFamily: 'Poppins_400Regular',
                          },
                          dimensions.width
                        )}
                      >
                        {fetchData?.university}
                      </Text>
                    </View>
                  </View>
                  <Spacer left={8} right={8} bottom={4} top={4} />
                  {/* Job Info */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Title */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontFamily: 'Poppins_500Medium',
                          },
                          dimensions.width
                        )}
                      >
                        {'Job Title'}
                      </Text>
                    </View>
                    {/* Description */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 2 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.medium,
                            fontFamily: 'Poppins_400Regular',
                          },
                          dimensions.width
                        )}
                      >
                        {fetchData?.job_title}
                      </Text>
                    </View>
                  </View>
                  <Spacer left={8} right={8} bottom={4} top={4} />
                  {/* DOB */}
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    {/* Title */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontFamily: 'Poppins_500Medium',
                          },
                          dimensions.width
                        )}
                      >
                        {'Birthday'}
                      </Text>
                    </View>
                    {/* Description */}
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 2 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.medium,
                            fontFamily: 'Poppins_400Regular',
                          },
                          dimensions.width
                        )}
                      >
                        {fetchData?.birthdate}
                      </Text>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        </ExampleUserApi.FetchGetUserGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileScreen);
