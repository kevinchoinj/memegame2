import { useDispatch, useSelector } from "react-redux";
import { values } from "ramda";
import { removeChar } from "actions/chars";

const LibraryList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.chars.data);
  return (
    <div>
      {values(characters).map((val) => {
        return (
          <div key={val.id}>
            char
            {val.id}
            <button type="button" onClick={() => dispatch(removeChar(val.id))}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default LibraryList;
