import React from 'react'
import {
  makeStyles,
  createStyles,
  Theme,
  TextField,
  TextFieldProps,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      borderRadius: '20px',
    },
    field: {
      width: 200,
      marginRight: theme.spacing(2),
    },
  })
)

export const SearchField: React.FC<TextFieldProps> = (props) => {
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
      {...props}
    />
  )
}
