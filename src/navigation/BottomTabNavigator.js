import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack'

import { ExploreTab as ExploreScreen } from '../screens'

const Explore = { screen: ExploreScreen }
// const ExploreStack = createStackNavigator({ Explore })

export default createBottomTabNavigator({ Explore })

// export default (
//   <Tab.Navigator initialRouteName="Explore">
//     <Tab.Screen
//       name="Explore"
//       component={ExploreScreen}
//       options={{
//         tabBarLabel: 'Explore',
//       }}
//     />
//   </Tab.Navigator>
// )
