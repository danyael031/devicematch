import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { PageContainer } from "src/components/PageContainer";
import { useMultiLang } from "src/lib/multilang/multilangProvider";

export function SettingsPage() {

  const { selectedLang, setLanguage, lt } = useMultiLang()

  return (
    <PageContainer>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{lt("lang_label")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLang}
          label={lt("lang_label")}
          onChange={(e) => { setLanguage(e.target.value) }}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Español</MenuItem>
        </Select>
      </FormControl>
    </PageContainer>
  )
}
