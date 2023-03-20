import {
  FETCH_CHARS_SUCCEEDED,
  ADD_CHAR_SUCCEEDED,
  EDIT_CHAR_SUCCEEDED,
  REMOVE_CHAR_SUCCEEDED,
} from "actions/chars";
import produce from "immer";

const DEFAULT_STATE={
  data: [],
};
const charReducer = (state = DEFAULT_STATE, action) =>
  produce(state, draft => {
    switch(action.type){
      case FETCH_CHARS_SUCCEEDED:
        draft.data = action.data;
        break;
      case ADD_CHAR_SUCCEEDED:
      case EDIT_CHAR_SUCCEEDED:
        draft.data[action.data.id] = action.data;
        break;
      case REMOVE_CHAR_SUCCEEDED:
        delete draft.data[action.data.id];
            break;
      default:
        break;
    }
  }
);

export default charReducer;
