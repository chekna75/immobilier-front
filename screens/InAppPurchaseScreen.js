import React from 'react';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const InAppPurchaseScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', paddingBottom: 16, paddingTop: 16 },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={imageSource(Images['Coin'])}
          style={StyleSheet.applyWidth(
            { height: 50, width: 50 },
            dimensions.width
          )}
        />
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(theme.typography.headline3, {
              color: theme.colors.text.strong,
              marginTop: 16,
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'800'}
        </Text>

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            { color: theme.colors.text.light, textAlign: 'center' },
            dimensions.width
          )}
        >
          {'Wallet Balance'}
        </Text>
      </View>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.border.brand,
              paddingBottom: 16,
              paddingLeft: 16,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              { color: theme.colors.text.medium },
              dimensions.width
            )}
          >
            {'Buy coins'}
          </Text>
        </View>
      </Touchable>

      <ScrollView
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['Coin'])}
              style={StyleSheet.applyWidth(
                { height: 25, marginRight: 16, width: 25 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.text.strong },
                dimensions.width
              )}
            >
              {'100 coins'}
            </Text>
          </View>

          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 8,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Strong Inverse'],
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'$0.99'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['Coin'])}
              style={StyleSheet.applyWidth(
                { height: 25, marginRight: 16, width: 25 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.text.strong },
                dimensions.width
              )}
            >
              {'500 coins'}
            </Text>
          </View>

          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 8,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Strong Inverse'],
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'$4.99'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['Coin'])}
              style={StyleSheet.applyWidth(
                { height: 25, marginRight: 16, width: 25 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.text.strong },
                dimensions.width
              )}
            >
              {'2000 coins'}
            </Text>
          </View>

          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 8,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Strong Inverse'],
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'$19.99'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['Coin'])}
              style={StyleSheet.applyWidth(
                { height: 25, marginRight: 16, width: 25 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.text.strong },
                dimensions.width
              )}
            >
              {'5000 coins'}
            </Text>
          </View>

          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 8,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Strong Inverse'],
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'$49.99'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                paddingBottom: 24,
                paddingTop: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['Coin'])}
              style={StyleSheet.applyWidth(
                { height: 25, marginRight: 16, width: 25 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.text.strong },
                dimensions.width
              )}
            >
              {'10000 coins'}
            </Text>
          </View>

          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.branding.primary,
                  borderRadius: 8,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                  width: 100,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.Brand['Strong Inverse'],
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'$99.99'}
              </Text>
            </View>
          </Touchable>
        </View>

        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            { color: theme.colors.text.light },
            dimensions.width
          )}
        >
          {
            'If you have any questions or concerns, please contact us at help@example.com. '
          }
        </Text>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(InAppPurchaseScreen);
