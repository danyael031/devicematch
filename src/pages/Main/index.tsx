import Button from '@mui/material/Button'
import { createPhone, createTable, getPhones } from '../../db/phones'



export function MainPage() {

  async function handleGetPhones() {
    const response = await getPhones();
    console.log(response);
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
    </div>
  )
}
