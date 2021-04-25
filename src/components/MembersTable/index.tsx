import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { Member } from '../../utils/types'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
  })
)

interface MembersTableProps {
  members: Member[]
}

export const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  const classes = useStyles()
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Website</TableCell>
          <TableCell align="right" />
        </TableRow>
      </TableHead>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.name}>
            <TableCell component="th" scope="row">
              {member.name}
            </TableCell>
            <TableCell align="right">{member.email}</TableCell>
            <TableCell align="right">{member.phone}</TableCell>
            <TableCell align="right">{member.website}</TableCell>
            {/* <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
