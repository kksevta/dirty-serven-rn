export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const SET_LIVE_DATA = 'SET_LIVE_DATA';

export function setAuthTokenAction(payload) {
    return { type: SET_AUTH_TOKEN, payload }
}

export function setLiveDataAction(payload) {
    return { type: SET_LIVE_DATA, payload }
}
