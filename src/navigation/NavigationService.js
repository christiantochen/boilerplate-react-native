import { NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    let navigateOptions = {
        routeName,
        params
    };
    
    _navigator.dispatch(NavigationActions.navigate(navigateOptions));
}

function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator
};
