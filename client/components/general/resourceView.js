import {  useSelector } from "react-redux";

function ResourceView() {
  const resources = useSelector(state => state.resources.data);

  return (
    <div>
      <ul>
        {Object.entries(resources).map(([key, value]) => (
          <li key={key}>
            {key[0].toUpperCase() + key.slice(1)}: {value.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceView;
