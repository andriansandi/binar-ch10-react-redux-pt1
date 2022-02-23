// src/redux/reducers/person.js
import { ADD, INIT } from '../types'

// initialState
const initialState = [{
    id: 1,
    name: 'Spiderman',
    address: 'Jakarta',
    phoneNumber: '+12345678',
    photo: 'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png'
}]

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD: 
            return [
                ...state, 
                action.payload
            ]
        case INIT:
            return action.payload
        default: 
            return state
    }
}