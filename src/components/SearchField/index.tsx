import React from 'react'
import {
  Link,
  makeStyles,
  createStyles,
  Theme,
  TextField,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      borderRadius: '20px',
    },
    field: {
      width: 200,
    },
  })
)

export const SearchField = () => {
  const classes = useStyles()
  return (
    <TextField
      className={classes.field}
      size="small"
      placeholder="Search"
      variant="outlined"
      InputProps={{
        endAdornment: <SearchIcon />,
        classes: { root: classes.root },
      }}
    />
  )
}
