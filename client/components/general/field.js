import { Controller } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Tooltip,
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { styled } from "@mui/system";

const StyledCaption = styled("div")({
  marginTop: "3px",
  width: "300px",
  maxWidth: "100%",
});

const StyledInputLabel = styled(InputLabel)({
  backgroundColor: "transparent",
});

const StyledTextField = styled(TextField)({
  width: "300px",
  maxWidth: "100%",
  marginBottom: "1rem",
});

const StyledTextArea = styled(TextField)({
  width: "700px",
  maxWidth: "100%",
});

const StyledAutocomplete = styled("div")({
  marginBottom: "2rem",
});

const Field = ({
  additionalOnChange,
  ariaLabel,
  autoFocus,
  caption,
  control,
  defaultValue,
  disabled,
  keyValue,
  isPassword,
  isNumber,
  label,
  minRows,
  maxRows,
  onKeyDown,
  options,
  placeholder,
  register,
  required,
  inputProps,
  style,
  tooltip,
  type,
}) => {
  switch (type) {
    // ... The rest of the cases remain unchanged

    default:
      return (
        <>
          <Controller
            name={keyValue}
            control={control}
            defaultValue={defaultValue}
            rules={{ required: required }}
            render={({ field }) => (
              <Tooltip title={tooltip ? tooltip : ""}>
                <StyledTextField
                  autoFocus={autoFocus}
                  id={keyValue}
                  required={required}
                  data-testid={`field-text-${keyValue}`}
                  placeholder={placeholder}
                  disabled={disabled}
                  label={label}
                  style={style}
                  variant="outlined"
                  type={isPassword ? "password" : isNumber ? "number" : "text"}
                  {...field}
                  onChange={(e) => {
                    if (additionalOnChange) {
                      additionalOnChange(e);
                    }

                    field.onChange(isNumber ? parseInt(e.target.value) : e.target.value);
                  }}
                  onKeyDown={onKeyDown}
                  color="primary"
                />
              </Tooltip>
            )}
          />
          {caption && <StyledCaption>{caption}</StyledCaption>}
        </>
      );
  }
};

const FieldContainer = (props) => (
  <div
    data-testid="field-wrapper"
    style={{
      marginBottom: props.spacingBottom ? "1rem" : null,
      maxWidth: "100%",
      width: props.type === "editor" ? "100%" : "auto",
    }}
  >
    <Field {...props} />
  </div>
);

export default FieldContainer;
