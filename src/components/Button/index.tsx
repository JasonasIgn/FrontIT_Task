import React from 'react'
import {
  makeStyles,
  createStyles,
  Theme,
  ButtonProps,
  Button as MuiButton,
} from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      borderRadius: '20px',
      textTransform: 'none',
      fontWeight: 600,
    },
  })
)

export const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  const classes = useStyles()
  return (
    <MuiButton
      disableElevation
      color="primary"
      variant="contained"
      className={clsx(classes.root, className)}
      {...rest}
    />
  )
}
