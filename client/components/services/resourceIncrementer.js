import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResources as updateResourcesAction } from "reducers/resources";

function ResourceIncrementer() {
  const [incrementRates, setIncrementRates] = useState({
    lumber: 1,
    ore: 2,
    fish: 3,
  });

  const dispatch = useDispatch();
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const resources = useSelector((state) => state.resources.data);

  useEffect(() => {
    const storedResources = localStorage.getItem("resources");
    const storedLastUpdate = localStorage.getItem("lastUpdate");

    if (storedResources && storedLastUpdate) {
      dispatch(updateResourcesAction(JSON.parse(storedResources)));
      setLastUpdate(+storedLastUpdate);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      updateResources();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [resources]);

  useEffect(() => {
    localStorage.setItem("resources", JSON.stringify(resources));
    localStorage.setItem("lastUpdate", lastUpdate);
  }, [resources, lastUpdate]);

  const updateResources = () => {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - lastUpdate) / 1000;

    const updatedResources = Object.keys(resources).reduce((acc, key) => {
      acc[key] = resources[key] + incrementRates[key] * elapsedTime;
      return acc;
    }, {});

    dispatch(updateResourcesAction(updatedResources));
    setLastUpdate(currentTime);
  };

  return null;
}

export default ResourceIncrementer;
