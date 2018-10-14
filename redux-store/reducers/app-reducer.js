import { SET_AUTH_TOKEN, SET_LIVE_DATA } from '../actions/app-actions';

const initialState = {
    roomID: '',
    myCards: [],
    topCard: {},
    authToken: '',
    players: [],
    playerTurn: '',
    playersWinningOrder: [],
    gameFinished: false,
    gameStarted: false,
    me: {},
    canStartedBy: '',
    chatMessages: [],
    sevenCounter: 0
}

export const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return {
                ...state,
                authToken: action.payload
            };
        case SET_LIVE_DATA:
            return {
                ...action.payload, authToken: state.authToken
            };
        default: {
            return state;
        }
    }
}