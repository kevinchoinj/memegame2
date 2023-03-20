export const FETCH_CHARS_STARTED = "FETCH_CHARS_STARTED";
export const FETCH_CHARS_SUCCEEDED = "FETCH_CHARS_SUCCEEDED";
export const FETCH_CHARS_FAILURE = "FETCH_CHARS_FAILURE";

export const ADD_CHAR_STARTED = "ADD_CHAR_STARTED";
export const ADD_CHAR_SUCCEEDED = "ADD_CHAR_SUCCEEDED";
export const ADD_CHAR_FAILURE = "ADD_CHAR_FAILURE";

export const EDIT_CHAR_STARTED = "EDIT_CHAR_STARTED";
export const EDIT_CHAR_SUCCEEDED = "EDIT_CHAR_SUCCEEDED";
export const EDIT_CHAR_FAILURE = "EDIT_CHAR_FAILURE";

export const REMOVE_CHAR_STARTED = "REMOVE_CHAR_STARTED";
export const REMOVE_CHAR_SUCCEEDED = "REMOVE_CHAR_SUCCEEDED";
export const REMOVE_CHAR_FAILURE = "REMOVE_CHAR_FAILURE";

export const FETCH_LAST_CHAR_STARTED = "FETCH_LAST_CHAR_STARTED";
export const FETCH_LAST_CHAR_SUCCEEDED = "FETCH_LAST_CHAR_SUCCEEDED";
export const FETCH_LAST_CHAR_FAILED = "FETCH_LAST_CHAR_FAILED";

const fetchCharsStarted = (request) => ({ type: FETCH_CHARS_STARTED, request });
const fetchCharsSucceeded = (data) => ({ type: FETCH_CHARS_SUCCEEDED, data });
const fetchCharsFailure = (data, error) => ({ type: FETCH_CHARS_FAILURE, data, error });

const addCharStarted = (request) => ({ type: ADD_CHAR_STARTED, request });
const addCharSucceeded = (data) => ({ type: ADD_CHAR_SUCCEEDED, data });
const addCharFailure = (data, error) => ({ type: ADD_CHAR_FAILURE, data, error });

const editCharStarted = (request) => ({ type: EDIT_CHAR_STARTED, request });
const editCharSucceeded = (data) => ({ type: EDIT_CHAR_SUCCEEDED, data });
const editCharFailure = (data, error) => ({ type: EDIT_CHAR_FAILURE, data, error });

const removeCharStarted = (request) => ({ type: REMOVE_CHAR_STARTED, request });
const removeCharSucceeded = (data) => ({ type: REMOVE_CHAR_SUCCEEDED, data });
const removeCharFailure = (data, error) => ({ type: REMOVE_CHAR_FAILURE, data, error });

const fetchLastCharStarted = (request) => ({ type: FETCH_LAST_CHAR_STARTED, request });
const fetchLastCharSucceeded = (data) => ({ type: FETCH_LAST_CHAR_SUCCEEDED, data });
const fetchLastCharFailure = (data, error) => ({ type: FETCH_LAST_CHAR_FAILED, data, error });

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/* -- GET -- */
function getLastChar() {
  return () => {
    return fetch("/api/v1/chars-last");
  };
}
export function fetchLastChar(onSuccess) {
  return (dispatch) => {
    dispatch(fetchLastCharStarted());
    return dispatch(getLastChar())
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchLastCharSucceeded(json));
        if (onSuccess) {
          onSuccess(json)
        }
      })
      .catch((error) => dispatch(fetchLastCharFailure(error)));
  };
}

/* -- GET -- */
function getChars() {
  return () => {
    return fetch("/api/v1/chars");
  };
}
export function fetchChars() {
  return (dispatch) => {
    dispatch(fetchCharsStarted());
    return dispatch(getChars())
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchCharsSucceeded(json));
      })
      .catch((error) => dispatch(fetchCharsFailure(error)));
  };
}

/* -- ADD -- */

function postCharWithImage(values) {
  return () => {
    return fetch("/api/v1/chars", {
      method: "POST",
      /*
        headers: {
          'Content-type': 'multipart/form-data'
        },
        */
      //body: JSON.stringify({id: values.id, values: values})
      body: values,
    });
  };
}
export function addCharWithImage(values, successCb) {
  return (dispatch) => {
    dispatch(addCharStarted());
    return dispatch(postCharWithImage(values))
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addCharSucceeded(json));
        if (successCb) {
          successCb();
        }
      })
      .catch((error) => dispatch(addCharFailure(error)));
  };
}

export function addChar(values) {
  return (dispatch) => {
    dispatch(addCharStarted());
    return dispatch(postChar(values))
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(addCharSucceeded(json));
      })
      .catch((error) => dispatch(addCharFailure(error)));
  };
}

/* -- EDIT -- */
function putChar(values) {
  return () => {
    return fetch("/api/v1/chars", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: values.id, values: values }),
    });
  };
}

export function editChar(values) {
  return (dispatch) => {
    dispatch(editCharStarted());
    return dispatch(putChar(values))
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(editCharSucceeded(json));
      })
      .catch((error) => dispatch(editCharFailure(error)));
  };
}

export function editCharThenUpdate(values) {
  return (dispatch) => {
    return dispatch(editChar(values)).then(function () {
      dispatch(fetchChars(values.id));
    });
  };
}

export function editCharThenEditChar(values, secondPayload) {
  return (dispatch) => {
    return dispatch(editChar(values)).then(function () {
      if (secondPayload) {
        dispatch(editChar(secondPayload));
      }
    });
  };
}

/* -- DELETE -- */
function deleteChar(id) {
  return () => {
    return fetch("/api/v1/chars", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  };
}
export function removeChar(id) {
  return (dispatch) => {
    dispatch(removeCharStarted());
    return dispatch(deleteChar(id))
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(removeCharSucceeded(json));
      })
      .catch((error) => dispatch(removeCharFailure(error)));
  };
}
