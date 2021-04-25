import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { Member } from '../../utils/types'
import { SearchField } from '../SearchField'
import { Button } from '../Button'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    tableActions: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: theme.spacing(3),
    },
    addButton: {
      width: 150,
    },
  })
)

interface MembersTableProps {
  members: Member[]
}

export const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  const classes = useStyles()
  return (
    <>
      <Box className={classes.tableActions}>
        <SearchField />
        <Button onClick={() => {}} className={classes.addButton}>
          Add new
        </Button>
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Website</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.name}>
              <TableCell component="th" scope="row">
                {member.name}
              </TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.website}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
