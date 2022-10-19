import { MenuItem, TextField } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface Props {
  inputValue: string;
  selectValue: string;
  onChangeInput: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  selectOptions: Option[];
}

export const CurrencyInput: React.FC<Props> = ({
  inputValue,
  selectValue,
  onChangeInput,
  onChangeSelect,
  selectOptions = [],
}) => {
  return (
    <TextField
      value={inputValue}
      helperText="I want to spend"
      onChange={onChangeInput}
      fullWidth
      InputProps={{
        sx: { paddingRight: 0 },
        endAdornment: (
          <TextField
            value={selectValue}
            onChange={onChangeSelect}
            select
            sx={{ minWidth: 80, "& fieldset": { border: "none" } }}
          >
            {selectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ),
      }}
    />
  );
};
