
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCustomType from './types/customTypes';
import Main from './components/main';


const Tab = createBottomTabNavigator();
const App :React.FC<MyCustomType> =({body,address,smsList,date})=> {

  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Mesajlar" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;
