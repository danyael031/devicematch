import Stack from '@mui/material/Stack';
import { NavbarBreadcrumbs } from 'src/components/NavbarBreadcrumbs';
import { BreadcrumbsPath } from 'src/components/NavbarBreadcrumbs/types';

export default function Header({ breadcrumbsPath }: { breadcrumbsPath: BreadcrumbsPath }) {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'sticky',
        display: { md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs path={breadcrumbsPath} />
    </Stack>
  );
}
