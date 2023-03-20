import { Controller } from "react-hook-form";
import {
  Checkbox,
  createStyles,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  TextField,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      backgroundColor: "transparent",
    },
    input: {
      width: "300px",
      maxWidth: "100%",
    },
    inputSpacingBottom: {
      marginBottom: "1rem",
    },
    textarea: {
      width: "700px",
      maxWidth: "100%",
    },
    autocomplete: {
      marginBottom: "2rem",
    },
    caption: {
      marginTop: "3px",
      width: "300px",
      maxWidth: "100%",
    },
  })
);

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
  const classes = useStyles();

  switch (type) {
    case "checkbox":
      return (
        <>
          <Controller
            name={keyValue}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => {
              return (
                <Tooltip title={tooltip ? tooltip : ""}>
                  <FormControlLabel
                    style={style}
                    label={label}
                    control={
                      <Checkbox
                        data-testid={`field-checkbox-${keyValue}`}
                        {...field}
                        checked={field.value}
                        aria-checked={field.value}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                          if (additionalOnChange) {
                            additionalOnChange(e);
                          }
                          field.onChange(e.target.checked);
                        }}
                        disabled={disabled}
                        inputProps={{
                          "aria-label": ariaLabel || label,
                        }}
                      />
                    }
                  />
                </Tooltip>
              );
            }}
          />
          {caption && <div className={classes.caption}>{caption}</div>}
        </>
      );
    case "switch":
      return (
        <Controller
          name={keyValue}
          control={control}
          render={({ field }) => {
            return (
              <FormControlLabel
                control={
                  <Switch
                    data-testid={`field-switch-${keyValue}`}
                    {...field}
                    checked={field.value}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => field.onChange(e.target.checked)}
                    disabled={disabled}
                  />
                }
                label={label}
              />
            );
          }}
        />
      );
    case "select":
      return (
        <>
          {label && (
            <div>
              <InputLabel required={required} className={classes.label} id={`${label} label`}>
                {label}
              </InputLabel>
            </div>
          )}
          <Controller
            name={keyValue}
            control={control}
            defaultValue={defaultValue}
            rules={{ required: required }}
            render={({ field }) => (
              <Tooltip title={tooltip ? tooltip : ""}>
                <Select
                  autoFocus={autoFocus}
                  labelId={`${label} label`}
                  aria-labelledby={`${label} label`}
                  aria-label={label}
                  required={required}
                  data-testid={`field-select-${keyValue}`}
                  disabled={disabled}
                  style={style}
                  className={classes.input}
                  {...field}
                  variant="outlined"
                  onChange={(e) => {
                    if (additionalOnChange) {
                      additionalOnChange(e);
                    }
                    field.onChange(e.target.value);
                  }}
                >
                  {options?.map((optionsVal) => (
                    <MenuItem
                      data-testid={`field-select-${keyValue}-option-${optionsVal.value}`}
                      value={optionsVal.value}
                      key={optionsVal.value}
                    >
                      {optionsVal.label}
                    </MenuItem>
                  ))}
                </Select>
              </Tooltip>
            )}
          />
          {caption && <div className={classes.caption}>{caption}</div>}
        </>
      );
    case "select-multi":
      return (
        <>
          <InputLabel required={required} className={classes.label} id={`${label} label`}>
            {label}
          </InputLabel>
          <Controller
            name={keyValue}
            control={control}
            multiple={true}
            defaultValue={defaultValue}
            type="text"
            render={({ field }) => (
              <Tooltip title={tooltip ? tooltip : ""}>
                <Select
                  labelId={`${label} label`}
                  aria-labelledby={`${label} label`}
                  aria-label={label}
                  data-testid={`field-select-${keyValue}`}
                  disabled={disabled}
                  multiple={true}
                  className={classes.input}
                  variant="outlined"
                  renderValue={(data) => <div>{data.join(", ")}</div>}
                  {...field}
                  value={field.value || []}
                >
                  {options.map((optionsVal) => (
                    <MenuItem
                      data-testid={`field-select-${keyValue}-option-${optionsVal.value}`}
                      value={optionsVal.value}
                      key={optionsVal.value}
                    >
                      <Checkbox
                        checked={field.value?.indexOf(optionsVal.value) > -1}
                        aria-checked={field.value?.indexOf(optionsVal.value) > -1}
                      />
                      {optionsVal.label}
                    </MenuItem>
                  ))}
                </Select>
              </Tooltip>
            )}
          />
          {caption && <div className={classes.caption}>{caption}</div>}
        </>
      );
    case "textarea":
      return (
        <Controller
          name={keyValue}
          control={control}
          defaultValue={defaultValue}
          rules={{ required: required }}
          render={({ field }) => (
            <TextField
              label={label}
              labelid={`field-textarea-${keyValue}`}
              id={keyValue}
              required={required}
              data-testid={`field-textarea-${keyValue}`}
              placeholder={placeholder}
              disabled={disabled}
              className={classes.textarea}
              multiline
              minRows={minRows || 3}
              maxRows={maxRows || 4}
              variant="outlined"
              {...field}
            />
          )}
        />
      );
    case "file":
      return <input type="file" {...register(keyValue)} />;
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
                <TextField
                  autoFocus={autoFocus}
                  id={keyValue}
                  required={required}
                  data-testid={`field-text-${keyValue}`}
                  placeholder={placeholder}
                  disabled={disabled}
                  label={label}
                  className={classes.input}
                  style={style}
                  variant="outlined"
                  type={isPassword ? "password" : isNumber ? "number" : "text"}
                  {...field}
                  InputProps={inputProps}
                  onChange={(e) => {
                    if (additionalOnChange) {
                      additionalOnChange(e);
                    }

                    field.onChange(isNumber ? parseInt(e.target.value) : e.target.value);
                  }}
                  onKeyDown={onKeyDown}
                />
              </Tooltip>
            )}
          />
          {caption && <div className={classes.caption}>{caption}</div>}
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
