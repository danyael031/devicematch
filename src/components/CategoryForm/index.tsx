import { Button, FormControl, Stack, TextField } from "@mui/material";
import { FormEvent } from "react";
import { useFormState } from "src/hooks/useFormState";
import { CategoryFormProps } from "./types";

export function CategoryForm({
  category,
  onSubmit = () => { },
  onCancel = () => { }
}: CategoryFormProps) {

  const [categoryData, setCategoryData] = useFormState<Category>(category || {});

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit(categoryData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          name="inputName"
          value={categoryData.name}
          onChange={(e) => { setCategoryData({ name: e.target.value }) }}
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
