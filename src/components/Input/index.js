import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export const Input = (props) => {
  const { placeholder, ariaLabel, symbol, onChangeHandler, type, value } = props;
  const onChangeInputField = (e) => {
    onChangeHandler(e.target.value)
  };
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">{symbol}</InputGroup.Text>
        <FormControl
          className="py-2"
          placeholder={placeholder}
          aria-label={ariaLabel}
          aria-describedby="basic-addon1"
          onChange={onChangeInputField}
          type={type}
          value={value}
        />
      </InputGroup>
    </>
  );
};
