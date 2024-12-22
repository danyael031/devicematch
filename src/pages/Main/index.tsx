import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import Header from 'src/components/Header'
import { PageContainer } from 'src/components/PageContainer'
import { useMultiLang } from 'src/lib/multilang/multilangProvider';

const topMovies = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
]

export function MainPage() {

  const { lt } = useMultiLang();

  return (
    <>
      <Header breadcrumbsPath={[lt('search_compatibility')]} />
      <PageContainer>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Buscar Compatibilidad
          </Typography>
          <Typography>Brand</Typography>
          <Autocomplete
            disablePortal={true}
            options={topMovies}
            renderInput={(param) => <TextField {...param} />}
            value={topMovies[4]}
            onChange={(e) => { console.log(e) }}

          />
          <Typography sx={{ marginTop: "1em" }} gutterBottom>Model</Typography>
          <Autocomplete
            disablePortal={true}
            disabled={true}
            options={topMovies}
            renderInput={(param) => <TextField {...param} />}
            value={topMovies[4]}
            onChange={(e) => { console.log(e) }}

          />
          <Typography sx={{ marginTop: "1em" }}>Category</Typography>
          <Autocomplete
            disablePortal={true}
            options={topMovies}
            renderInput={(param) => <TextField {...param} />}
            value={topMovies[4]}
            onChange={(e) => { console.log(e) }}
          />
        </Box>
      </PageContainer>
    </>
  )
}
