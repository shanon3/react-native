import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AplikasiBMI from './AplikasiBMI';
import kekurangan from './status/kekurangan';
import ideal from './status/ideal';
import kelebihan from './status/kelebihan';
import obesitas from './status/obesitas';
import tips from './tips';

const RootStack = createStackNavigator(
  {
    //The Routes
    Home: {screen: AplikasiBMI},
    StatusKekurangan: {screen: kekurangan},
    StatusIdeal: {screen: ideal},
    StatusKelebihan: {screen: kelebihan},
    StatusObesitas: {screen: obesitas},
    Tips: {screen: tips},
  },
  {
    //Default Route
    initialRouteName: 'Home',
  },
);
//create app container
const Container = createAppContainer(RootStack);
export default Container;