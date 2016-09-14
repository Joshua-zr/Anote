import axios from 'axios';
export const ADD_NOTE = "ADD_NOTE";

// actions createors

export function fetchNote() {
  return function(dispatch) {
    axios.get("http://localhost/api/notes")
      .then((response) => {
        dispatch({type: "FETCH_NOTE_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: 'FETCH_NOTE_REJECTED', payload:err})
      })
  }
}

export function addNote() {
  return {
    type: ADD_NOTE,
    payload: {
      id,
      content,
    },
  }
}
