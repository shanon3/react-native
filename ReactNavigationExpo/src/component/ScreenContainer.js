import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';
import ListTodo from './ListTodo';
import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-ionicons';

const RootStack = createMaterialBottomTabNavigator(
  {
    //The Routes
    Home: {
      screen: HomeActivity,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon size={25} name={'ios-home'} color={tintColor} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileActivity,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon size={25} name={'ios-person'} color={tintColor} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
    List: {
      screen: ListTodo
    }
  },
  {
    //Default Route
    initialRouteName: 'Home',
  },
);
//create app container
const Container = createAppContainer(RootStack);
export default Container;
