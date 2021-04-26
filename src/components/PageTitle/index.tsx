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
      marginBottom: theme.spacing(9),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(5),
      },
    },
    circle: {
      backgroundColor: theme.palette.primary.main,
      height: 70,
      width: 70,
      borderRadius: '50%',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        height: 50,
        width: 50,
      },
    },
    title: {
      fontWeight: 600,
      [theme.breakpoints.down('xs')]: {
        fontSize: theme.typography.h5.fontSize,
        lineHeight: theme.typography.h5.lineHeight,
      },
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
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
    </Box>
  )
}
