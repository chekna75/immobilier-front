import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const NotificationPermissionsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-around', paddingLeft: 16, paddingRight: 16 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between', marginBottom: 20 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={imageSource(Images['PermissionsNotification'])}
            style={StyleSheet.applyWidth(
              { height: 128, width: 128 },
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'System',
                fontSize: 24,
                fontWeight: '700',
                lineHeight: 32,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Enable Notifications'}
          </Text>

          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.medium,
                fontSize: 16,
                lineHeight: 24,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Stay up to date with the latest updates and alerts. '}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-evenly' },
            dimensions.width
          )}
        >
          {/* Button Solid */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.background.brand,
                borderRadius: 64,
                color: theme.colors.text.light,
                flexDirection: 'row',
                fontFamily: 'System',
                fontWeight: '700',
                justifyContent: 'center',
                marginTop: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'SKIP'}
          >
            {'Sign Up'}
          </Button>
          {/* Button Solid */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors.branding.primary,
                borderRadius: 64,
                flexDirection: 'row',
                fontFamily: 'System',
                fontWeight: '700',
                justifyContent: 'center',
                marginTop: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'ENABLE NOTIFICATIONS'}
          >
            {'Sign Up'}
          </Button>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationPermissionsScreen);
