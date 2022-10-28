import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Budget from '../budget/Budget';
import Home from '../home/Home';
import Hydrate from '../hydrate/Hydrate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BUDGET, HOME, HYDRATE} from "../../constant/pages";
import {iconAssignments} from "../../constant/icon-assignments";

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => getTabBarOptions(route)}>
            <Tab.Screen name={HOME} component={Home}/>
            <Tab.Screen name={HYDRATE} component={Hydrate}/>
            <Tab.Screen name={BUDGET} component={Budget}/>
        </Tab.Navigator>
    )
}

const getTabBarOptions = (route: any) => {
    return {
        tabBarIcon: ({focused, color, size}: any) => {
            const iconName = focused ? iconAssignments[route.name].focused : iconAssignments[route.name].default;
            return <Ionicons name={iconName} color={color} size={size}/>;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray'
    }
}


export default BottomNavigationBar;
