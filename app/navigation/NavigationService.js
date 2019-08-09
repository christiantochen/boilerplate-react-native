import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;
let _drawerNavigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;

    console.log(_navigator);
}

function navigate(routeName, params, opts = {}) {
    let navigateOptions = {
        routeName,
        params
    };

    if (opts.replaceStack) {
        _navigator.dispatch(StackActions.replace({ routeName, params }));
    }
    else {
        _navigator.dispatch(NavigationActions.navigate(navigateOptions));
    }
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
