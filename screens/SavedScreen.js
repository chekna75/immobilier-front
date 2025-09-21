import React from 'react';
import {
  Button,
  ScreenContainer,
  SimpleStyleFlatList,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ExampleSavedPropertiesApi from '../apis/ExampleSavedPropertiesApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const SavedScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [showList, setShowList] = React.useState(false);

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
        {/* Headings */}
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
          {'Saved Rentals'}
        </Text>
        {/* View Options */}
        <View
          style={StyleSheet.applyWidth(
            { paddingBottom: 4, paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          {/* Options Container */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.background.brand,
                borderBottomWidth: 1,
                borderColor: palettes.Rentbit.Lightest,
                borderLeftWidth: 1,
                borderRadius: 14,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                paddingBottom: 2,
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 2,
              },
              dimensions.width
            )}
          >
            {/* Grid Button Container */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* GridButtonActive */}
              <>
                {showList ? null : (
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.branding.primary,
                        borderRadius: 12,
                        fontFamily: 'System',
                        fontWeight: '700',
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                    title={'Grid'}
                  />
                )}
              </>
              {/* GridButtonInactive */}
              <>
                {!showList ? null : (
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setShowList(false);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.background.brand,
                        borderRadius: 12,
                        color: theme.colors.text.light,
                        fontFamily: 'System',
                        fontWeight: '700',
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                    title={'Grid'}
                  />
                )}
              </>
            </View>
            {/* List Button Container */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* ListButtonActive */}
              <>
                {!showList ? null : (
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.branding.primary,
                        borderRadius: 12,
                        fontFamily: 'System',
                        fontWeight: '700',
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                    title={'List'}
                  />
                )}
              </>
              {/* ListButtonInactive */}
              <>
                {showList ? null : (
                  <Button
                    accessible={true}
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setShowList(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.background.brand,
                        borderRadius: 12,
                        color: theme.colors.text.light,
                        fontFamily: 'System',
                        fontWeight: '700',
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                    title={'List'}
                  />
                )}
              </>
            </View>
          </View>
        </View>

        <ExampleSavedPropertiesApi.FetchSavedPropertiesGET
          limit={16}
          method={'GET'}
        >
          {({ loading, error, data, refetchSavedProperties }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* Grid */}
                <>
                  {showList ? null : (
                    <SimpleStyleFlatList
                      data={fetchData}
                      decelerationRate={'normal'}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(gridData, index) =>
                        gridData?.id ??
                        gridData?.uuid ??
                        index?.toString() ??
                        JSON.stringify(gridData)
                      }
                      keyboardShouldPersistTaps={'never'}
                      listKey={'Container->Fetch->Grid'}
                      nestedScrollEnabled={false}
                      onEndReachedThreshold={0.5}
                      pagingEnabled={false}
                      renderItem={({ item, index }) => {
                        const gridData = item;
                        return (
                          <>
                            {/* Grid Card */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flex: 1,
                                  paddingBottom: 8,
                                  paddingLeft: 8,
                                  paddingRight: 8,
                                  paddingTop: 8,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate(
                                      'PropertyDetailsScreen'
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Card Container */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor:
                                        theme.colors.background.brand,
                                      borderBottomWidth: 1,
                                      borderColor: theme.colors.border.brand,
                                      borderLeftWidth: 1,
                                      borderRadius: 12,
                                      borderRightWidth: 1,
                                      borderTopWidth: 1,
                                      overflow: 'hidden',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Image Section */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { height: 140 },
                                      dimensions.width
                                    )}
                                  >
                                    <ImageBackground
                                      resizeMode={'cover'}
                                      source={imageSource(
                                        `${gridData?.image_url}`
                                      )}
                                      style={StyleSheet.applyWidth(
                                        { height: '100%', width: '100%' },
                                        dimensions.width
                                      )}
                                    />
                                  </View>
                                  {/* Description Section */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flex: 1,
                                        justifyContent: 'space-between',
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Property Name */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.strong,
                                          fontFamily: 'Poppins_600SemiBold',
                                          fontSize: 12,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {gridData?.name}{' '}
                                    </Text>
                                    {/* Property Pricing */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Pricing */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors.branding.primary,
                                            fontFamily: 'Poppins_600SemiBold',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'$'}
                                        {gridData?.nightly_price}
                                      </Text>
                                      {/* Period */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors.branding.primary,
                                            fontFamily: 'Poppins_500Medium',
                                            fontSize: 10,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'/night'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      snapToAlignment={'start'}
                      numColumns={2}
                      showsVerticalScrollIndicator={false}
                      style={StyleSheet.applyWidth(
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                    />
                  )}
                </>
                <>
                  {!showList ? null : (
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
                      listKey={'Container->Fetch->List'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      pagingEnabled={false}
                      renderItem={({ item, index }) => {
                        const listData = item;
                        return (
                          <>
                            {/* List Card */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate(
                                      'PropertyDetailsScreen'
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Card Container */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor:
                                        theme.colors.background.brand,
                                      borderBottomWidth: 1,
                                      borderColor: theme.colors.border.brand,
                                      borderLeftWidth: 1,
                                      borderRadius: 12,
                                      borderRightWidth: 1,
                                      borderTopWidth: 1,
                                      flexDirection: 'row',
                                      overflow: 'hidden',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Image Section */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { flex: 1 },
                                      dimensions.width
                                    )}
                                  >
                                    <ImageBackground
                                      resizeMode={'cover'}
                                      source={imageSource(
                                        `${listData?.image_url}`
                                      )}
                                      style={StyleSheet.applyWidth(
                                        { height: '100%', width: '100%' },
                                        dimensions.width
                                      )}
                                    />
                                  </View>
                                  {/* Description Section */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flex: 3,
                                        justifyContent: 'center',
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* City */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.light,
                                          fontFamily: 'Poppins_400Regular',
                                          fontSize: 10,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.city}
                                    </Text>
                                    {/* Property Name */}
                                    <Text
                                      accessible={true}
                                      selectable={false}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.text.strong,
                                          fontFamily: 'Poppins_500Medium',
                                          fontSize: 14,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.name}{' '}
                                    </Text>
                                    {/* Property Pricing */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          flexDirection: 'row',
                                          marginTop: 4,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Pricing */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors.branding.primary,
                                            fontFamily: 'Poppins_600SemiBold',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'$'}
                                        {listData?.nightly_price}
                                      </Text>
                                      {/* Period */}
                                      <Text
                                        accessible={true}
                                        selectable={false}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors.branding.primary,
                                            fontFamily: 'Poppins_500Medium',
                                            fontSize: 10,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'/night'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                            <Spacer bottom={8} left={8} right={8} top={8} />
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      snapToAlignment={'start'}
                      showsVerticalScrollIndicator={false}
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
                  )}
                </>
              </>
            );
          }}
        </ExampleSavedPropertiesApi.FetchSavedPropertiesGET>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SavedScreen);
