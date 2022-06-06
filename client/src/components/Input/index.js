import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const Input = (props) => {
  const {
    placeholder,
    ariaLabel,
    symbol,
    onChangeHandler,
    type,
    value,
    rest,
    children,
    symbolClass,
    className,
    groupClasses
  } = props;
  const onChangeInputField = (e) => {
    onChangeHandler(e.target.value);
  };
  const classes = "py-2 " + className;
  const inputGroupClasses = "mb-3 " + groupClasses;
  return (
    <>
      <InputGroup className={inputGroupClasses}>
        <InputGroup.Text className={symbolClass} id="basic">{symbol}</InputGroup.Text>
        <FormControl
          className={classes}
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-describedby="basic"
          onChange={onChangeInputField}
          type={type}
          value={value}
          required
          {...rest}
        />
        {children}
      </InputGroup>
    </>
  );
};
