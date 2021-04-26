import React, { useState } from 'react'
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
  TableSortLabel,
  IconButton,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'
import { Member } from '../../utils/types'
import { SearchField } from '../SearchField'
import { Button } from '../Button'
import { useDisplayMembers } from '../../utils/hooks'
import { useAppDispatch } from '../../store/reducers'
import { removeMemberAction } from '../../store/members/actions'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes.config'

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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

type OrderBy = 'name' | 'phone'

type Order = 'asc' | 'desc'

interface MembersTableProps {
  members: Member[]
}

export const MembersTable: React.FC<MembersTableProps> = ({ members }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [orderBy, setOrderBy] = useState<OrderBy>('name')
  const [order, setOrder] = useState<Order>('asc')
  const displayMembers = useDisplayMembers(members, search)

  const handleSort = (column: OrderBy) => {
    const isAsc = orderBy === column && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(column)
  }

  const handleRemove = (id: number) => {
    dispatch(removeMemberAction(id))
  }
  return (
    <>
      <Box className={classes.tableActions}>
        <SearchField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <NavLink to={`${routes.member.path.replace(':id', 'new')}`}>
          <Button onClick={() => {}} className={classes.addButton}>
            Add new
          </Button>
        </NavLink>
      </Box>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sortDirection={orderBy === 'name' ? order : false}>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleSort('name')}>
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell>Email</TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'phone'}
                direction={orderBy === 'phone' ? order : 'asc'}
                onClick={() => handleSort('phone')}>
                Phone
              </TableSortLabel>
            </TableCell>
            <TableCell>Website</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(displayMembers, getComparator(order, orderBy)).map(
            (member) => (
              <TableRow key={member.name}>
                <TableCell component="th" scope="row">
                  {member.name}
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.phone}</TableCell>
                <TableCell>{member.website}</TableCell>
                <TableCell align="right">
                  <NavLink
                    to={`${routes.member.path.replace(
                      ':id',
                      member.id.toString()
                    )}`}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </NavLink>
                  <IconButton onClick={() => handleRemove(member.id)}>
                    <CloseIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </>
  )
}
