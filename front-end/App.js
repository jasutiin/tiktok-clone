import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import Post from './screens/Post';
import Inbox from './screens/Inbox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeHeaderTitle() {
  return (
    <View style={styles.homeHeaderMid}>
      <Text style={styles.headerText}>Following</Text>
      <Text style={styles.headerText}>For You</Text>
    </View>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopColor: 'grey',
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerRight: () => (
                <Pressable>
                  <Text style={styles.headerText}>SEARCH</Text>
                </Pressable>
              ),
              headerLeft: () => (
                <Pressable>
                  <Text style={styles.headerText}>LIVE</Text>
                </Pressable>
              ),
              headerTitle: (props) => <HomeHeaderTitle {...props} />,
            }}
            backgroundColor="black"
          />
          <Tab.Screen
            name="Friends"
            component={Friends}
            options={{
              headerTransparent: false,
            }}
          />
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              headerTransparent: true,
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={Inbox}
            options={{
              headerTransparent: true,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTransparent: true,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  homeHeaderMid: {
    flexDirection: 'row',
    gap: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
