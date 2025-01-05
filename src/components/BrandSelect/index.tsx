import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { getBrands } from 'src/db/brands';
import { BrandSelectProps } from './types';

export function BrandSelect({
  value,
  onChange = () => { },
  required,
}: BrandSelectProps) {
  const [brands, setBrands] = useState<Array<Brand>>([]);
  const [input, setInput] = useState<string>(value?.name || "");

  async function handleGetBrands() {
    const brands = await getBrands();
    setBrands(brands);
  }

  useEffect(() => {
    handleGetBrands();
  }, [])

  return (
    <Autocomplete
      value={value}
      isOptionEqualToValue={(option: Brand, value: Brand) => (option.id === value.id)}
      onChange={(_: any, newValue) => {
        onChange(newValue);
      }}
      inputValue={input}
      onInputChange={(_, newInputValue) => {
        setInput(newInputValue);
      }}
      getOptionLabel={(opt) => opt.name}
      options={brands}
      renderInput={(params) => <TextField {...params}
        required={required}
        label="Brand"
      />}
    />
  )

}
