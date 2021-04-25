import React from 'react'
import {
  Box,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    circle: {
      backgroundColor: theme.palette.primary.main,
      height: 80,
      width: 80,
      borderRadius: '50%',
      marginRight: theme.spacing(2),
    },
  })
)

interface PageTitleProps {
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Box className={classes.circle} />
      <Typography variant="h3">{title}</Typography>
    </Box>
  )
}
