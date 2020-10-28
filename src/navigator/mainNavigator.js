import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings164309Navigator from '../features/Settings164309/navigator';
import UserProfile164302Navigator from '../features/UserProfile164302/navigator';
import Settings164301Navigator from '../features/Settings164301/navigator';
import Settings164299Navigator from '../features/Settings164299/navigator';
import SignIn2164297Navigator from '../features/SignIn2164297/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings164309: { screen: Settings164309Navigator },
UserProfile164302: { screen: UserProfile164302Navigator },
Settings164301: { screen: Settings164301Navigator },
Settings164299: { screen: Settings164299Navigator },
SignIn2164297: { screen: SignIn2164297Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
