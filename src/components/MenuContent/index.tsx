import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { CustomListItem } from './CustomListItem';

const mainListItems = [
  { to: '/', text: 'Home', icon: <HomeRoundedIcon /> },
  { to: '/', text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
  { to: '/', text: 'Clients', icon: <PeopleRoundedIcon /> },
  { to: '/', text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
  { to: '/settings', text: 'Settings', icon: <SettingsRoundedIcon /> },
  { to: '/about', text: 'About', icon: <InfoRoundedIcon /> },
];

export function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <CustomListItem key={index} item={item} />
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <CustomListItem key={index} item={item} />
        ))}
      </List>
    </Stack>
  );
}

