import { Button, FormControl, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useFormState } from "src/hooks/useFormState";
import { DeviceFormProps } from "./types";
import { BrandSelect } from "../BrandSelect";

export function DeviceForm({
  device,
  brand,
  onSubmit = () => { },
  onCancel = () => { }
}: DeviceFormProps) {

  const [deviceData, setDeviceData] = useFormState<Device>(device || {});
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(brand || null);

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit(deviceData)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <FormControl fullWidth>
        <TextField
          required
          name="inputName"
          margin="normal"
          value={deviceData.name}
          onChange={(e) => { setDeviceData({ name: e.target.value }) }}
          label="Name"
        />
        <BrandSelect
          value={selectedBrand}
          required={true}
          onChange={(newBrand) => {
            setSelectedBrand(newBrand)
            if (newBrand) {
              setDeviceData({ brand_id: newBrand.id })
            }
          }}
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
