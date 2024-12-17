import Button from '@mui/material/Button'
import { createPhone, createTable, getPhones } from '../../db/phones'
import { appDataDir } from '@tauri-apps/api/path';
import { appConfigDir } from '@tauri-apps/api/path';



export function MainPage() {

  async function handleGetPhones() {
    const response = await getPhones();
    console.log(response);
  }
  async function printAppPath() {
    const appDataDirPath = await appDataDir();
    const appConfigDirPath = await appConfigDir();
    console.log("appDataDir: ", appDataDirPath)
    console.log("appConfigDir: ", appConfigDirPath)
  }

  return (
    <div>
      <Button
        onClick={() => { createTable() }}
        variant='contained'
      >Create Phone Table</Button>
      <Button
        onClick={() => { createPhone() }}
        variant='contained'
      >Create Phone</Button>
      <Button
        onClick={handleGetPhones}
        variant='contained'
      >Get Phones</Button>
      <Button
        onClick={printAppPath}
        variant='contained'
      >Print app data dir</Button>
    </div>
  )
}
