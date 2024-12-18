import Button from '@mui/material/Button'
import { createPhone, createTable, } from 'src/db/phones'

export function MainPage() {

  return (
    <div>
      <Button
        onClick={() => { }}
        variant='contained'
      >Create Device</Button>
      <Button
        onClick={() => { }}
        variant='contained'
      >Create compatibility</Button>
    </div>
  )
}
