import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

import Product from './pages/product'

export default createStackNavigator({
    Main,
    Product,
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor:"transparent",
            margin: 1,
            borderWidth:5,
            borderRadius: 5,
            borderColor:"#DA522F",
            
        },
        headerTintColor:"#DA522F",
        headerTitleStyle: {
            flex:1,
            textAlign:"center",
            fontWeight:"bold",
          },
        
    },
})