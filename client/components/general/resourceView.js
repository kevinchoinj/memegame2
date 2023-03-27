import {  useSelector } from "react-redux";
import { TextField } from "@material-ui/core";

function ResourceView() {
  const resources = useSelector(state => state.resources.data);

  return (
    <div>
      <TextField name="asdf" variant="outlined" color="primary" />
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
