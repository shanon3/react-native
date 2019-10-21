import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AplikasiBMI from './AplikasiBMI';
import kekurangan from './status/kekurangan';
import kelebihan from './status/kelebihan';
import ideal from './status/ideal';
import obesitas from './status/obesitas';

const RootStack = createStackNavigator(
  {
    //The Routes
    Home: {screen: AplikasiBMI},
    StatusKekurangan: {screen: kekurangan},
    StatusKelebihan: {screen: kelebihan},
    StatusIdeal: {screen: ideal},
    StatusObesitas: {screen: obesitas},
  },
  {
    //Default Route
    initialRouteName: 'Home',
  },
);
//create app container
const Container = createAppContainer(RootStack);
export default Container;
