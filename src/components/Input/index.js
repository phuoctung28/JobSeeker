import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const Input = (props) => {
  const { placeholder, ariaLabel, symbol, onChangeHandler, type, value, rest } = props;
  const onChangeInputField = (e) => {
    onChangeHandler(e.target.value)
  };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic">{symbol}</InputGroup.Text>
        <FormControl
          className="py-2"
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-describedby="basic"
          onChange={onChangeInputField}
          type={type}
          value={value}
          required
          {...rest}
        />
      </InputGroup>
    </>
  );
};
