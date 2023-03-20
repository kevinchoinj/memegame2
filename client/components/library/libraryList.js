import { useDispatch, useSelector } from "react-redux";
import { values } from "ramda";
import Card from "components/library/card";

const LibraryList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.chars.data);
  return (
    <div>
      {values(characters).map((value) => {
        return (
          <Card key={value.id} char={value} />
        );
      })}
    </div>
  );
};

export default LibraryList;
