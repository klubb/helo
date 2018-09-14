

let initialState = {
    username: '',
    id: 0,
    profile_picture: ''
}

const UPDATE_AUTH = 'UPDATE_AUTH'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_AUTH:
            return Object.assign({}, state, {id: action.payload, username: action.payload, profile_picture: action.payload})
        default:
            return state
    }
}

export function auth(id, username, profile_picture) {
    return {
        type: UPDATE_AUTH,
        payload: {id, username, profile_picture}
    }
}