/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToApp(params, opts) {
    NavigationService.navigate('App', params, opts);
}

export function navigateToLogin(params, opts) {
    NavigationService.navigate('Login', params, opts);
}
