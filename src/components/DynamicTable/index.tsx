import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DynamicTableProps } from './types';
import { Key, ReactNode } from 'react';
import { IconButton, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export function DynamicTable<Item>({
  config,
  elements,
  enableDelete = false,
  deleteHandler = () => { }
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
            {enableDelete && <TableCell key="column_delete" align="center" />}
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
                  return <TableCell component="th" scope="row">
                    {row[cell.keyValue] as ReactNode}
                  </TableCell>
                }

                return <TableCell align="right">{row[cell.keyValue] as ReactNode}</TableCell>;

              })}

              <TableCellDeleteIcon
                enabled={enableDelete}
                onClick={deleteHandler}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export function TableCellDeleteIcon({ enabled = false, onClick = () => { } }: { enabled?: boolean, onClick?: () => void }) {

  if (!enabled) {
    return <></>;
  }

  return (
    <TableCell align="right">
      <IconButton onClick={onClick} aria-label="delete">
        <DeleteForeverIcon />
      </IconButton>
    </TableCell>

  )


}
