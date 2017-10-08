import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigation/appNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
// console.log(AppNavigator.router.getActionForPathAndParams('Chat'));
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export default (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      // nextState = AppNavigator.router.getStateForAction(
      //   NavigationActions.navigate({ routeName: 'Chat' }),
      //   state
      // );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
