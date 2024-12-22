import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { NavbarBreadcrumbsProps } from './types';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export function NavbarBreadcrumbs({ path = [] }: NavbarBreadcrumbsProps) {
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {path.map((st, index) => {

        if (index === 0) {
          return <Typography
            sx={{ color: 'text.primary', fontWeight: 600 }}
            variant="body1"
          >
            {st}
          </Typography>
        }

        return <Typography
          variant="body1"
        >
          {st}
        </Typography>

      })}
    </StyledBreadcrumbs>
  );
}
