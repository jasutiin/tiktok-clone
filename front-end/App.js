import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Home from './screens/Home';
import Friends from './screens/Friends';
import Profile from './screens/Profile';
import Post from './screens/Post';
import Inbox from './screens/Inbox';

const Tab = createBottomTabNavigator();

function HomeHeaderTitle() {
  return (
    <View style={styles.homeHeaderMid}>
      <Pressable>
        <Text style={styles.headerText}>For You</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.headerText}>Following</Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'white',
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
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={30} />
              ),
              headerRight: () => (
                <Pressable>
                  <Fontisto name="search" size={26} color={'#ffffff'} />
                  {/* <Text style={styles.headerText}>SEARCH</Text> */}
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
              headerTransparent: true,
              headerTitleAlign: 'center',
              headerTitle: ' ',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user-group" color={color} size={22} />
              ),
              headerRight: () => (
                <Pressable>
                  <Fontisto name="search" size={26} color={'#ffffff'} />
                  {/* <Text style={styles.headerText}>SEARCH</Text> */}
                </Pressable>
              ),
            }}
          />
          <Tab.Screen
            name="Post"
            component={Post}
            options={{
              headerTransparent: true,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="plus-square" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Inbox"
            component={Inbox}
            options={{
              headerTransparent: false,
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="inbox" color={color} size={24} />
              ),
              headerRight: () => (
                <Pressable>
                  <Fontisto name="search" size={26} color={'#ffffff'} />
                  {/* <Text style={styles.headerText}>SEARCH</Text> */}
                </Pressable>
              ),
              headerStyle: {
                backgroundColor: 'black',
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTransparent: true,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user-large" color={color} size={22} />
              ),
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
