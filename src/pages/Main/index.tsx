import Button from '@mui/material/Button'
import { PageContainer } from 'src/components/PageContainer'
import { mlang } from 'src/lang'

export function MainPage() {
  return (
    <PageContainer>
      <Button
        onClick={() => { }}
        variant='contained'
      >{mlang.lt("create_device")}</Button>
      <Button
        onClick={() => { }}
        variant='contained'
      >Create compatibility</Button>
    </PageContainer>
  )
}
