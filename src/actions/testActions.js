import { NavigationActions } from 'react-navigation';

export const goChat = () => dispatch => {
  const nav = NavigationActions.navigate({
    routeName: 'Chat',
    // My route params
    params: {},
    // in case you want to navigate into specific sub route
    action: NavigationActions.navigate({ routeName: 'Chat' })
  });
  dispatch(nav);
};
