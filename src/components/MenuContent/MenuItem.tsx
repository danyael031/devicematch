import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuItemProps } from './types.ts'
import { useNavigate } from 'react-router';



export function MenuItem({
  item
}: MenuItemProps) {
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
