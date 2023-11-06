import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import AttractionsList from './screens/AttractionsList'
import Home from './screens/Home'
import Map from './screens/Map'


const Tab = createBottomTabNavigator()

export default function TabRountes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="home" component={Home} 
            options={{
                tabBarIcon: ({size}) => <FontAwesome5 name="home" size={24} />, tabBarLabel:'Inicio'
                }}/>

            <Tab.Screen name="mapa" component={Map} 
            options={{
                tabBarIcon: ({size}) => <FontAwesome5 name="map-marked-alt" size={24} />, tabBarLabel:'Mapa'
                }}/>
            <Tab.Screen name="attractionsList" component={AttractionsList} 
            options={{tabBarIcon: ({size}) => <MaterialIcons name="attractions" size={30} />, tabBarLabel:'Atrações'
            }}/>
        </Tab.Navigator>
    )
}