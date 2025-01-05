import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { CustomListItem } from './CustomListItem';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useMultiLang } from 'src/lib/multilang/multilangProvider';
import { Box, Divider, ListSubheader } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


export function MenuContent() {

  const { lt } = useMultiLang();

  const mainListItems = [
    { to: '/', text: lt('search_compatibility'), icon: <SearchIcon /> },
  ];

  const manageListItems = [
    { to: '/devices/1', text: lt('devices'), icon: <PhoneAndroidIcon /> },
    { to: '/compatibilities', text: lt('compatibilities'), icon: <CompareArrowsIcon /> },
    { to: '/categories', text: lt('categories'), icon: <CategoryIcon /> },
    { to: '/brands', text: lt('brands'), icon: <LocalOfferIcon /> },
  ]

  const secondaryListItems = [
    { to: '/settings', text: lt('settings'), icon: <SettingsRoundedIcon /> },
    { to: '/about', text: lt('about'), icon: <InfoRoundedIcon /> },
  ];
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <Box>
        <List >
          {mainListItems.map((item, index) => (
            <CustomListItem key={index} item={item} />
          ))}
        </List>
        <Divider />
        <List dense>
          <ListSubheader>{lt('menu_manage')}</ListSubheader>
          {manageListItems.map((item, index) => (
            <CustomListItem key={index} item={item} />
          ))}
        </List>
      </Box>
      <List dense>
        {secondaryListItems.map((item, index) => (
          <CustomListItem key={index} item={item} />
        ))}
      </List>
    </Stack>
  );
}

