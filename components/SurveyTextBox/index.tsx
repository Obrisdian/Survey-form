import type { NextPage } from "next";
import styled from "@emotion/styled";
import { TextField, FormGroup, Autocomplete } from "@mui/material";
import { useFormContext, FormProvider, useForm } from "react-hook-form";
import React from "react";
import { type } from "os";
import { Root } from "../Root";
import { FC } from "react";
import theme from "../../theme";
import * as S from "./styled";
import { borderColor, style } from "@mui/system";

const ConnectForm = ({ children }: any) => {
  const methods = useFormContext();
  return children({ ...methods });
};
const options = ["Role1", "Role2", "Role3"];
export const TextBox = ({ label, required, type, multiline }: any) => {
  return (
    <ConnectForm>
      {({ register }: any) => (
        <TextField
          {...register(label)}
          label={label}
          required={required}
          type={type}
          multiline={multiline}
          variant="filled"
          style={{ left: "200px", top: "300px" }}
          inputProps={{
            style: {
              color: theme.palette.info.main,
              width: "1000px",
              borderBottomColor: theme.palette.info.main,
            },
          }}
          InputLabelProps={{
            style: { color: theme.palette.info.main },
          }}
        />
      )}
    </ConnectForm>
  );
};

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <ConnectForm>
      {({ register }: any) => (
        <div style={{ marginTop: "150px", marginLeft: "200px" }}>
          <div></div>
          <br />
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...register("Role")}
                variant="filled"
                style={{
                  color: theme.palette.info.main,
                  width: "1000px",
                  borderBottomColor: theme.palette.info.main,
                }}
                {...params }
                label="Select a option:"
              />
            )}
          />
        </div>
      )}
    </ConnectForm>
  );
}
