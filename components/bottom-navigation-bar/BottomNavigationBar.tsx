import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../home/Home';
import Hydrate from '../hydrate/Hydrate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DAILY_BUDGET, HOME, HYDRATE, SETTINGS} from "../../constant/pages";
import {iconAssignments} from "../../constant/icon-assignments";
import DailyBudget from "../budget/DailyBudget";
import Settings from "../settings/Settings";

const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => getTabBarOptions(route)}>
            <Tab.Screen name={HOME} component={Home}/>
            <Tab.Screen name={HYDRATE} component={Hydrate}/>
            <Tab.Screen name={DAILY_BUDGET} component={DailyBudget}/>
            <Tab.Screen name={SETTINGS} component={Settings}/>
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
