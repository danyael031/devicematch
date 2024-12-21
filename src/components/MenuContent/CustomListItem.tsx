import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { CustomListItemProps } from './types.ts'
import { useNavigate } from 'react-router';



export function CustomListItem({
  item
}: CustomListItemProps) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(item.to);
  }

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton onClick={handleOnClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  )
}
