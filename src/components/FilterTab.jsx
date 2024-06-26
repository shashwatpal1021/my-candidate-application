/* eslint-disable react/prop-types */
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function FilterTab({ list, onChange, title }) {
  return (
    <Stack  direction="row" m={1} >
      <Autocomplete
        onChange={(event, newValue) => {
          onChange?.(newValue);
        }}
        multiple
        id="tags-outlined"
        options={list}
        getOptionLabel={(option) => option.value}
        placeholder={title}
        style={{ minWidth: 100 }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={title} placeholder="Favorites" />
        )}
      />
    </Stack>
  );
}
