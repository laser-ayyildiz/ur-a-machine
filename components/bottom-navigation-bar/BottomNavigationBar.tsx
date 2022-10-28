import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Budget from '../budget/Budget';
import Home from '../home/Home';
import Hydrate from '../hydrate/Hydrate';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Hydrate') {
                    iconName = focused ? 'water' : 'water-outline';
                } else if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Budget') {
                    iconName = focused ? 'wallet' : 'wallet-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Hydrate" component={Hydrate}/>
            <Tab.Screen name="Budget" component={Budget}/>
        </Tab.Navigator>
    )
}

export default BottomNavigationBar
