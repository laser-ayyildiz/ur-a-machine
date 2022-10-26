import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Budget from '../budget/Budget';
import Home from '../home/Home';
import Hydrate from '../hydrate/Hydrate';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Hydrate" component={Hydrate} />
      <Tab.Screen name="Budget" component={Budget} />
    </Tab.Navigator>
  )
}

export default BottomNavigationBar