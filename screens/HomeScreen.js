import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ExamplePropertiesApi from '../apis/ExamplePropertiesApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const HomeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.background.base },
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
        {/* heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Poppins_600SemiBold',
              fontSize: 26,
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 32,
            },
            dimensions.width
          )}
        >
          {'Popular Rentals'}
        </Text>
        {/* Property List */}
        <View>
          <ExamplePropertiesApi.FetchListOfPropertiesGET
            limit={12}
            method={'GET'}
          >
            {({ loading, error, data, refetchListOfProperties }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <SimpleStyleFlatList
                  data={fetchData}
                  decelerationRate={'normal'}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ??
                    listData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(listData)
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'Container->Property List->Fetch->List'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  pagingEnabled={false}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Property Card */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: theme.colors.background.brand,
                              borderBottomWidth: 1,
                              borderColor: theme.colors.border.brand,
                              borderLeftWidth: 1,
                              borderRadius: 8,
                              borderRightWidth: 1,
                              borderTopWidth: 1,
                              overflow: 'hidden',
                            },
                            dimensions.width
                          )}
                        >
                          <Touchable
                            onPress={() => {
                              try {
                                navigation.navigate('PropertyDetailsScreen');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            {/* Top Section */}
                            <View
                              style={StyleSheet.applyWidth(
                                { height: 240 },
                                dimensions.width
                              )}
                            >
                              <ImageBackground
                                resizeMode={'cover'}
                                source={imageSource(`${listData?.image_url}`)}
                                style={StyleSheet.applyWidth(
                                  {
                                    borderRadius: 6,
                                    height: '100%',
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Rates */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    { alignItems: 'flex-end', marginTop: 16 },
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        backgroundColor:
                                          theme.colors.branding.primary,
                                        borderBottomLeftRadius: 8,
                                        borderTopLeftRadius: 8,
                                        flexDirection: 'row',
                                        paddingBottom: 4,
                                        paddingLeft: 8,
                                        paddingRight: 8,
                                        paddingTop: 4,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Price */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.Brand.Surface,
                                          fontFamily: 'Poppins_600SemiBold',
                                          fontSize: 16,
                                        },
                                        dimensions.width
                                      )}
                                      textBreakStrategy={'highQuality'}
                                    >
                                      {'$'}
                                      {listData?.nightly_price}
                                    </Text>
                                    {/* Period */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: palettes.Brand.Surface,
                                          fontFamily: 'Poppins_500Medium',
                                          fontSize: 10,
                                        },
                                        dimensions.width
                                      )}
                                      textBreakStrategy={'highQuality'}
                                    >
                                      {'/night'}
                                    </Text>
                                  </View>
                                </View>
                              </ImageBackground>
                            </View>
                            {/* Bottom Section */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  paddingBottom: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 16,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Section Container */}
                              <View>
                                {/* Property Name */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={2}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Poppins_600SemiBold',
                                      fontSize: 18,
                                    },
                                    dimensions.width
                                  )}
                                  textBreakStrategy={'highQuality'}
                                >
                                  {listData?.name}
                                </Text>
                                <Spacer left={8} right={8} bottom={4} top={4} />
                                {/* Property Description */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={2}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.medium,
                                      lineHeight: 24,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.description}
                                </Text>
                                <Divider
                                  color={theme.colors.border.base}
                                  style={StyleSheet.applyWidth(
                                    {
                                      height: 1,
                                      marginBottom: 12,
                                      marginTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                />
                                {/* Property Details */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      flexDirection: 'row',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Beds */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      size={24}
                                      color={theme.colors.branding.primary}
                                      name={'MaterialCommunityIcons/bed-king'}
                                    />
                                    <Spacer left={2} right={2} />
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.medium,
                                          fontFamily: 'Poppins_400Regular',
                                          fontSize: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.beds}
                                      {' beds'}
                                    </Text>
                                  </View>
                                  <Spacer
                                    bottom={8}
                                    left={8}
                                    right={8}
                                    top={8}
                                  />
                                  {/* Baths */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      color={theme.colors.branding.primary}
                                      name={'MaterialIcons/bathtub'}
                                      size={20}
                                    />
                                    <Spacer left={2} right={2} />
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.medium,
                                          fontFamily: 'Poppins_400Regular',
                                          fontSize: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.bathrooms}
                                      {' baths'}
                                    </Text>
                                  </View>
                                  <Spacer
                                    bottom={8}
                                    left={8}
                                    right={8}
                                    top={8}
                                  />
                                  {/* Guests */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      size={24}
                                      color={theme.colors.branding.primary}
                                      name={'MaterialIcons/group'}
                                    />
                                    <Spacer left={2} right={2} />
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.medium,
                                          fontFamily: 'Poppins_400Regular',
                                          fontSize: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.maxGuests}
                                      {' guests'}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </Touchable>
                        </View>
                        <Spacer left={8} right={8} bottom={12} top={12} />
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  snapToAlignment={'start'}
                  style={StyleSheet.applyWidth(
                    {
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 16,
                    },
                    dimensions.width
                  )}
                />
              );
            }}
          </ExamplePropertiesApi.FetchListOfPropertiesGET>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
