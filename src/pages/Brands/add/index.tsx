import { Button, FormControl, Stack, TextField } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import Header from "src/components/Header";
import { PageContainer } from "src/components/PageContainer";
import { createBrand } from "src/db/brands";
import { useMultiLang } from "src/lib/multilang/multilangProvider";


export function AddBrandPage() {

  const { lt } = useMultiLang();

  const navigate = useNavigate();

  const handleOnSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e?.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      inputName: { value: string }
    }

    try {
      await createBrand({ name: formElements.inputName.value });
      enqueueSnackbar("Brand created", { variant: "success" });
    } catch (e) {
      enqueueSnackbar("Error creating Brand", { variant: "error" });
    }

    navigate(-1);
  }

  const handleCancel = () => {
    navigate(-1);
  }

  return (
    <>
      <Header breadcrumbsPath={[lt('brands'), "Add Brand"]} />
      <PageContainer>
        <form onSubmit={handleOnSubmit}>
          <FormControl
            fullWidth={true}
          >

            <TextField
              required
              name="inputName"
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
              >Add Brand</Button>
              <Button
                variant="outlined"
                onClick={handleCancel}
              >Cancel</Button>
            </Stack>
          </FormControl>
        </form >
      </PageContainer>
    </>
  )
}
