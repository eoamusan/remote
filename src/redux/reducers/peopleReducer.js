import { peopleConstants } from '../constants';

const initialState = {
    fetching: false,
    editing: false,
    creating: false
};

export default function people(state = initialState, action) {
    switch (action.type) {
        case peopleConstants.FETCH_REQUEST:
            return {
                ...state,
                fetching: true
            };
        case peopleConstants.FETCH_SUCCESS: {
            return {
                ...state,
                fetching: false,
                people: action.people
            };
        }
        case peopleConstants.FETCH_FAILURE:
            return {
                ...state,
                fetching: false
            };
        case peopleConstants.FETCH_SINGLE_REQUEST:
            return {
                ...state,
                fetchingSingle: true
            };
        case peopleConstants.FETCH_SINGLE_SUCCESS: {
            return {
                ...state,
                fetchingSingle: false,
                person: action.person
            };
        }
        case peopleConstants.FETCH_SINGLE_FAILURE:
            return {
                ...state,
                fetchingSingle: false
            };
        case peopleConstants.ADD_REQUEST:
            return {
                ...state,
                creating: true
            };
        case peopleConstants.ADD_SUCCESS: {
            return {
                ...state,
                creating: false,
                people: action.people
            };
        }
        case peopleConstants.ADD_FAILURE:
            return {
                ...state,
                creating: false
            };
        case peopleConstants.EDIT_REQUEST:
            return {
                ...state,
                editing: true
            };
        case peopleConstants.EDIT_SUCCESS: {
            return {
                ...state,
                editing: false,
                people: action.people
            };
        }
        case peopleConstants.EDIT_FAILURE:
            return {
                ...state,
                editing: false
            };
        default:
            return state;
    }
}