import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DefaultTheme,
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import AppSettingsScreen from './screens/AppSettingsScreen';
import HomeScreen from './screens/HomeScreen';
import InAppPurchaseScreen from './screens/InAppPurchaseScreen';
import LocationPermissionsScreen from './screens/LocationPermissionsScreen';
import NotificationPermissionsScreen from './screens/NotificationPermissionsScreen';
import ProfileScreen from './screens/ProfileScreen';
import PropertyDetailsScreen from './screens/PropertyDetailsScreen';
import SavedScreen from './screens/SavedScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useNavigation from './utils/useNavigation';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor }) {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
      navigationInChildEnabled={true}
    >
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        presentation="card"
        screenOptions={{
          cardStyle: { flex: 1 },
          gestureVelocityImpact: 0.7,
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerShown: false,
          tabBarShowLabel: true,
        }}
      >
        <Stack.Screen
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{
            title: 'App Settings',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="InAppPurchaseScreen"
          component={InAppPurchaseScreen}
          options={{
            title: 'In-App Purchase',
          }}
        />
        <Stack.Screen
          name="LocationPermissionsScreen"
          component={LocationPermissionsScreen}
          options={{
            title: 'Location Permissions',
          }}
        />
        <Stack.Screen
          name="NotificationPermissionsScreen"
          component={NotificationPermissionsScreen}
          options={{
            title: 'Notification Permissions',
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
        <Stack.Screen
          name="PropertyDetailsScreen"
          component={PropertyDetailsScreen}
          options={{
            title: 'Property Details',
          }}
        />
        <Stack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{
            title: 'Saved',
          }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
          options={{
            title: 'Update Profile',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            title: 'Welcome',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
