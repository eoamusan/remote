import { peopleService } from '../services';
import { peopleConstants } from '../constants';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';

export const peopleActions = {
    fetch,
    fetchSinglePerson,
    setPersonToEdit,
    add,
    edit
};

function fetch() {
    return async dispatch => {
        dispatch(request());
        let people;

        try {
            people = await peopleService.fetch();
            dispatch(success(people));
        } catch (error) {
            dispatch(failure(error.message));
            toast.error(error.message);
        }
    };

    function request() { return { type: peopleConstants.FETCH_REQUEST }; }
    function success(people) { return { type: peopleConstants.FETCH_SUCCESS, people }; }
    function failure(error) { return { type: peopleConstants.FETCH_FAILURE, error }; }
}

function fetchSinglePerson(id) {
    return async dispatch => {
        dispatch(request());
        let person;

        try {
            person = await peopleService.fetchSinglePerson(id);
            dispatch(success(person));
        } catch (error) {
            dispatch(failure(error.message));
            toast.error(error.message);
        }
    };

    function request() { return { type: peopleConstants.FETCH_SINGLE_REQUEST }; }
    function success(person) { return { type: peopleConstants.FETCH_SINGLE_SUCCESS, person }; }
    function failure(error) { return { type: peopleConstants.FETCH_SINGLE_FAILURE, error }; }
}

function add(user) {
    return async dispatch => {
        dispatch(request());
        let person;

        try {
            person = await peopleService.add(user);

            dispatch(success(person.data));
            dispatch(push(`/`));

            toast.success(person.message);
        } catch (error) {
            dispatch(failure(error.message));
            toast.error(error.message);
        }
    };

    function request() { return { type: peopleConstants.ADD_REQUEST }; }
    function success(people) { return { type: peopleConstants.ADD_SUCCESS, people }; }
    function failure(error) { return { type: peopleConstants.ADD_FAILURE, error }; }
}

function edit(person) {
    return dispatch => {
        dispatch(request());

        peopleService.edit(person)
            .then(
                people => {
                    dispatch(success(people.data));
                    dispatch(push(`/`));

                    toast.success(people.message);
                },
                error => {
                    if (error.message) {
                        dispatch(failure(error.message));
                    }
                }
            );
    };

    function request() { return { type: peopleConstants.EDIT_REQUEST }; }
    function success(people) { return { type: peopleConstants.EDIT_SUCCESS, people }; }
    function failure(error) { return { type: peopleConstants.EDIT_FAILURE, error }; }
}

function setPersonToEdit(person) {
    return { type: peopleConstants.FETCH_SINGLE_SUCCESS, person };
}