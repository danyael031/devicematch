import { Button, FormControl, Stack, TextField } from "@mui/material";
import { FormEvent } from "react";
import { useFormState } from "src/hooks/useFormState";
import { BrandFormProps } from "./types";

export function BrandForm({
  brand,
  onSubmit = () => { },
  onCancel = () => { }
}: BrandFormProps) {

  const [brandData, setBrandData] = useFormState<Brand>(brand || {});

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit(brandData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          name="inputName"
          value={brandData.name}
          onChange={(e) => { setBrandData({ name: e.target.value }) }}
          label="Name"
        />

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "flex-end", mt: "1rem" }}
        >
          <Button
            type='submit'
            variant="contained"
          >Submit</Button>
          <Button
            variant="outlined"
            onClick={onCancel}
          >Cancel</Button>
        </Stack>
      </FormControl >
    </form >

  )

}
