import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchChars } from "actions/chars";

const FetchChars = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChars());
  }, [dispatch]);
  return null;
};

export default FetchChars;
