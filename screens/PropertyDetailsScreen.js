import React from 'react';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
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

const PropertyDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
          dimensions.width
        )}
      >
        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          <ExamplePropertiesApi.FetchIndividualPropertyGET
            id={1}
            method={'GET'}
          >
            {({ loading, error, data, refetchIndividualProperty }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <>
                  {/* Image Section */}
                  <View
                    style={StyleSheet.applyWidth(
                      { height: 420, width: '100%' },
                      dimensions.width
                    )}
                  >
                    <ImageBackground
                      resizeMode={'cover'}
                      source={imageSource(`${fetchData?.image_url}`)}
                      style={StyleSheet.applyWidth(
                        {
                          height: '100%',
                          justifyContent: 'flex-end',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Image Section Container */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            paddingBottom: 24,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 24,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Floating Button */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.branding.primary,
                              borderRadius: 8,
                              flexDirection: 'row',
                              paddingBottom: 6,
                              paddingLeft: 12,
                              paddingRight: 8,
                              paddingTop: 6,
                            },
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
                                  color: theme.colors.background.base,
                                  fontFamily: 'Poppins_500Medium',
                                  fontSize: 16,
                                },
                                dimensions.width
                              )}
                            >
                              {'Only $'}
                              {fetchData?.nightly_price}
                              {' per night'}
                            </Text>
                          </View>
                          {/* Book Button */}
                          <View>
                            {/* Button Outline */}
                            <Button
                              accessible={true}
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  navigation.navigate('SavedScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: 'transparent',
                                  borderBottomWidth: 2,
                                  borderColor: palettes.Brand.Surface,
                                  borderLeftWidth: 2,
                                  borderRadius: 8,
                                  borderRightWidth: 2,
                                  borderTopWidth: 2,
                                  borderWidth: 1,
                                  color: theme.colors.background.base,
                                  fontFamily: 'Poppins_700Bold',
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'BOOK'}
                            />
                          </View>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                  {/* Main */}
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          paddingBottom: 24,
                          paddingLeft: 24,
                          paddingRight: 24,
                          paddingTop: 24,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        selectable={false}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {fetchData?.city}
                      </Text>

                      <Text
                        accessible={true}
                        selectable={false}
                        ellipsizeMode={'tail'}
                        numberOfLines={2}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.text.strong,
                            fontFamily: 'Poppins_600SemiBold',
                            fontSize: 22,
                          },
                          dimensions.width
                        )}
                        textBreakStrategy={'highQuality'}
                      >
                        {fetchData?.name}
                      </Text>
                      <Spacer bottom={8} left={8} right={8} top={8} />
                      <View>
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                alignSelf: 'stretch',
                                backgroundColor: palettes.Brand.Surface,
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 8,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingBottom: 8,
                                paddingLeft: 8,
                                paddingRight: 8,
                                paddingTop: 8,
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
                                  color: palettes.Brand.Medium,
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 12,
                                },
                                dimensions.width
                              )}
                            >
                              {fetchData?.beds}
                              {' beds'}
                            </Text>
                          </View>
                          <Spacer bottom={8} top={8} left={6} right={6} />
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                alignSelf: 'stretch',
                                backgroundColor: palettes.Brand.Surface,
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 8,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingBottom: 8,
                                paddingLeft: 8,
                                paddingRight: 8,
                                paddingTop: 8,
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
                                  color: palettes.Brand.Medium,
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 12,
                                },
                                dimensions.width
                              )}
                            >
                              {fetchData?.bathrooms}
                              {' baths'}
                            </Text>
                          </View>
                          <Spacer bottom={8} top={8} left={6} right={6} />
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: palettes.Brand.Surface,
                                borderBottomWidth: 1,
                                borderColor: theme.colors.border.brand,
                                borderLeftWidth: 1,
                                borderRadius: 8,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingBottom: 8,
                                paddingLeft: 8,
                                paddingRight: 8,
                                paddingTop: 8,
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
                                  color: palettes.Brand.Medium,
                                  fontFamily: 'Poppins_400Regular',
                                  fontSize: 12,
                                },
                                dimensions.width
                              )}
                            >
                              {fetchData?.maxGuests}
                              {' max'}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Spacer left={8} right={8} bottom={12} top={12} />
                      <View>
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Rates'}
                        </Text>
                        <Spacer left={8} right={8} bottom={6} top={6} />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Nightly'}
                            </Text>
                          </View>

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
                              {'$'}
                              {fetchData?.nightly_price}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          color={palettes.Rentbit.Lightest}
                          style={StyleSheet.applyWidth(
                            { height: 1, marginBottom: 12, marginTop: 12 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Weekly'}
                            </Text>
                          </View>

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
                              {'$'}
                              {fetchData?.weekly_price}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          color={palettes.Rentbit.Lightest}
                          style={StyleSheet.applyWidth(
                            { height: 1, marginBottom: 12, marginTop: 12 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Monthly'}
                            </Text>
                          </View>

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
                              {'$'}
                              {fetchData?.monthly_rental_price}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Spacer left={8} right={8} bottom={12} top={12} />
                      <View>
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'Description'}
                        </Text>
                        <Spacer left={8} right={8} bottom={6} top={6} />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.medium,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 14,
                              lineHeight: 26,
                              textAlign: 'left',
                            },
                            dimensions.width
                          )}
                        >
                          {fetchData?.description}
                        </Text>
                      </View>
                      <Spacer left={8} right={8} bottom={12} top={12} />
                      <View>
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Poppins_600SemiBold',
                              fontSize: 16,
                            },
                            dimensions.width
                          )}
                        >
                          {'More'}
                        </Text>
                        <Spacer left={8} right={8} bottom={6} top={6} />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Cancellation'}
                            </Text>
                          </View>

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
                              {fetchData?.cancellation_policy}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          color={palettes.Rentbit.Lightest}
                          style={StyleSheet.applyWidth(
                            { height: 1, marginBottom: 12, marginTop: 12 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Minimum stay'}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <>
                              {!fetchData?.min_stay ? null : (
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
                                  {fetchData?.min_stay}
                                </Text>
                              )}
                            </>
                            <>
                              {fetchData?.min_stay ? null : (
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
                                  {'No minimum'}
                                </Text>
                              )}
                            </>
                          </View>
                        </View>
                        <Divider
                          color={palettes.Rentbit.Lightest}
                          style={StyleSheet.applyWidth(
                            { height: 1, marginBottom: 12, marginTop: 12 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flexDirection: 'row' },
                            dimensions.width
                          )}
                        >
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
                                  fontFamily: 'Poppins_400Regular',
                                },
                                dimensions.width
                              )}
                            >
                              {'Cleaning fee'}
                            </Text>
                          </View>

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
                              {fetchData?.cleaning_fee}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Spacer left={8} right={8} bottom={16} top={16} />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: palettes.Brand.Surface,
                            borderRadius: 16,
                            paddingBottom: 8,
                            paddingLeft: 8,
                            paddingRight: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              borderRadius: 10,
                              height: 240,
                              overflow: 'hidden',
                            },
                            dimensions.width
                          )}
                        >
                          <MapView
                            autoClusterMarkers={false}
                            autoClusterMarkersDistanceMeters={10000}
                            loadingEnabled={true}
                            moveOnMarkerPress={true}
                            rotateEnabled={true}
                            scrollEnabled={true}
                            showsCompass={false}
                            showsPointsOfInterest={true}
                            showsUserLocation={false}
                            zoomEnabled={true}
                            apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
                            latitude={fetchData?.latitude}
                            longitude={fetchData?.longitude}
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                            zoom={16}
                          >
                            <MapMarker
                              androidUseDefaultIconImplementation={false}
                              flat={false}
                              pinImageSize={50}
                              tracksViewChanges={true}
                              latitude={fetchData?.latitude}
                              longitude={fetchData?.longitude}
                              pinColor={theme.colors.branding.primary}
                              title={fetchData?.name}
                            />
                          </MapView>
                        </View>
                        {/* View 2 */}
                        <View>
                          {/* Book Button 2 */}
                          <View>
                            {/* Button Outline */}
                            <Button
                              accessible={true}
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  navigation.navigate('SavedScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: 'transparent',
                                  borderBottomWidth: 2,
                                  borderColor: palettes.Brand.Surface,
                                  borderLeftWidth: 2,
                                  borderRadius: 8,
                                  borderRightWidth: 2,
                                  borderTopWidth: 2,
                                  borderWidth: 1,
                                  color: theme.colors.background.base,
                                  fontFamily: 'Poppins_700Bold',
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'BOOK'}
                            />
                          </View>
                        </View>
                        {/* Floating Button 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              backgroundColor: theme.colors.branding.primary,
                              borderRadius: 8,
                              flexDirection: 'row',
                              paddingBottom: 6,
                              paddingLeft: 12,
                              paddingRight: 8,
                              paddingTop: 6,
                            },
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
                                  color: theme.colors.background.base,
                                  fontFamily: 'Poppins_500Medium',
                                  fontSize: 16,
                                },
                                dimensions.width
                              )}
                            >
                              {'Only $'}
                              {fetchData?.nightly_price}
                              {' per night'}
                            </Text>
                          </View>
                          {/* Book Button */}
                          <View>
                            {/* Button Outline */}
                            <Button
                              accessible={true}
                              iconPosition={'left'}
                              onPress={() => {
                                try {
                                  navigation.navigate('SavedScreen');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: 'transparent',
                                  borderBottomWidth: 2,
                                  borderColor: palettes.Brand.Surface,
                                  borderLeftWidth: 2,
                                  borderRadius: 8,
                                  borderRightWidth: 2,
                                  borderTopWidth: 2,
                                  borderWidth: 1,
                                  color: theme.colors.background.base,
                                  fontFamily: 'Poppins_700Bold',
                                  textAlign: 'center',
                                },
                                dimensions.width
                              )}
                              title={'BOOK'}
                            />
                          </View>
                        </View>
                      </View>
                      <Spacer left={8} right={8} bottom={12} top={12} />
                    </View>
                  </View>
                </>
              );
            }}
          </ExamplePropertiesApi.FetchIndividualPropertyGET>
        </SimpleStyleScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PropertyDetailsScreen);
