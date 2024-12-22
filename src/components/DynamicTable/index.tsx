import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DynamicTableProps } from './types';
import { Key, ReactNode } from 'react';

export function DynamicTable<Item>({ config, elements }: DynamicTableProps<Item>) {
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

          </TableRow>
        </TableHead>
        <TableBody>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
