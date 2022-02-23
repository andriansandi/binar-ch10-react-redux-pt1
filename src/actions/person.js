import * as action from '../redux/types'
import person from '../assets/persons'

function mockCreatePerson(person) {
    return Promise.resolve(person)
}

export const getAllPerson = () => dispatch => {
    person.all()
          .then(persons => {
            dispatch({ 
                type: action.INIT,
                payload: persons
            })
          })
}

export const addPerson = person => dispatch => {
    mockCreatePerson(person).then(person => {
        dispatch({
            type: action.ADD, 
            payload: person
        })
    })
}

