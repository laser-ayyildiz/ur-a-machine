import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './components/bottom-navigation-bar/BottomNavigationBar';


export default function App() {
    return (
        <NavigationContainer>
           <BottomNavigationBar />
        </NavigationContainer>
    );
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acf',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
*/
