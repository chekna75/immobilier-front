import React from 'react';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const LocationPermissionsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0, maxHeight: 33, minHeight: '33%' },
          dimensions.width
        )}
      />
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexGrow: 1,
            flexShrink: 0,
            maxHeight: '34%',
            minHeight: '33%',
          },
          dimensions.width
        )}
      >
        {/* Location Image */}
        <Image
          resizeMode={'contain'}
          source={imageSource(Images['PermissionsLocation'])}
          style={StyleSheet.applyWidth(
            { height: 150, marginBottom: 12, width: 150 },
            dimensions.width
          )}
        />
        {/* Permissions Name */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'System',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 32,
            },
            dimensions.width
          )}
        >
          {'Enable Location'}
        </Text>
        {/* Permissions Description */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            { color: theme.colors.text.medium, fontSize: 16, lineHeight: 24 },
            dimensions.width
          )}
        >
          {'To view a list of places or friends nearby. '}
        </Text>
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'flex-end',
            maxHeight: '33%',
            minHeight: '33%',
            paddingBottom: 30,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Skip Touchable */}
        <Touchable>
          {/* Skip Location Button */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.light,
                fontFamily: 'System',
                fontWeight: '600',
                lineHeight: 24,
                textAlign: 'center',
                textTransform: 'uppercase',
              },
              dimensions.width
            )}
          >
            {'Skip'}
          </Text>
        </Touchable>
        {/* Enable Location Button */}
        <Button
          accessible={true}
          iconPosition={'left'}
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.branding.primary,
              borderRadius: 60,
              flexDirection: 'row',
              fontFamily: 'System',
              fontWeight: '700',
              justifyContent: 'center',
              marginTop: 16,
            },
            dimensions.width
          )}
          title={'ENABLE LOCATION'}
        >
          {'Sign Up'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LocationPermissionsScreen);
