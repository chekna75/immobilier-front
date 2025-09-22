import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const AppSettingsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexGrow: 1,
            flexShrink: 0,
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        {/* Settings */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'System',
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 24,
              marginBottom: 6,
            },
            dimensions.width
          )}
        >
          {'Settings'}
        </Text>
      </View>
      {/* Content Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0, marginLeft: 24, marginRight: 24 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chevron-right'}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.border.base}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chevron-right'}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.border.base}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chat-bubble'}
              />
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'System',
                    fontSize: 14,
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chevron-right'}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.border.base}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'AntDesign/questioncircle'}
              />
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>
            {/* Row Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chevron-right'}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.border.base}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>

        <Touchable>
          {/* Row Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                height: 60,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Left Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flex: 1, flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'System',
                    fontWeight: '600',
                    marginLeft: 12,
                  },
                  dimensions.width
                )}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>
            {/* Right Aligned */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors.text.strong}
                name={'MaterialIcons/chevron-right'}
              />
            </View>
          </View>
          <Divider
            color={theme.colors.border.base}
            height={1}
            style={StyleSheet.applyWidth({ height: 1 }, dimensions.width)}
          />
        </Touchable>
      </View>
      {/* Footer Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          { flexGrow: 1, flexShrink: 0 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* Button Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                justifyContent: 'center',
                minHeight: 54,
              },
              dimensions.width
            )}
          >
            {/* Sign Out Text */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                { color: theme.colors.branding.primary, textAlign: 'center' },
                dimensions.width
              )}
            >
              {'Sign Out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AppSettingsScreen);
