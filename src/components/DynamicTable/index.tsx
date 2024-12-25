import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ActionIconProps, DynamicTableProps } from './types';
import { Key, ReactNode } from 'react';
import { IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export function DynamicTable<Item>({
  config,
  elements,
  enableDelete = false,
  enableEdit = false,
  deleteHandler = () => { },
  editHandler = () => { }
}: DynamicTableProps<Item>) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            {config.columnsConfig.map((element, index) => {
              if (index === 0) {
                return <TableCell key={index}>{element.columnName}</TableCell>
              }

              return <TableCell key={index} align="right">Calories</TableCell>
            })}
            {(enableDelete || enableEdit) &&
              <TableCell key="action_cell" align="right" />
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {elements.length === 0 && <Typography >No elmeents</Typography>}
          {elements.map((row) => (
            <TableRow
              key={row[config.elementKey] as Key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {config.columnsConfig.map((cell, index) => {
                if (index === 0) {
                  return <TableCell key={index}>
                    {row[cell.keyValue] as ReactNode}
                  </TableCell>
                }

                return <TableCell
                  key={index}
                  align="right"
                >{row[cell.keyValue] as ReactNode}</TableCell>;

              })}

              <TableCellActions
                key="actions"
                enableDelete={enableDelete}
                enableEdit={enableEdit}
                onDelete={() => { deleteHandler(row) }}
                onEdit={() => { editHandler(row) }}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export function TableCellActions({
  enableEdit = false,
  enableDelete = false,
  onDelete = () => { },
  onEdit = () => { }
}: ActionIconProps) {

  return (
    <TableCell align="right">
      {enableEdit &&
        <IconButton onClick={onDelete} aria-label="edit">
          <DeleteForeverIcon />
        </IconButton>
      }
      {enableDelete &&
        <IconButton onClick={onEdit} aria-label="delete">
          <EditIcon />
        </IconButton>
      }
    </TableCell>
  )
}

