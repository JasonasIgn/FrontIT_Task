import React from 'react'
import {
  Container,
  Box,
  Link as MuiLink,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { routes } from '../../routes.config'
import { useAppSelector } from '../../store/reducers'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    link: {
      marginLeft: theme.spacing(2),
      textUnderlineOffset: `${theme.spacing(0.75)}px`
    },
    linkText: {
      fontWeight: 600,
    },
  })
)

interface HeaderLinkProps {
  children: React.ReactNode
  to: string
  underline: 'always' | 'hover' | 'none'
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  to,
  underline,
}) => {
  const classes = useStyles()
  return (
    <MuiLink
      underline={underline}
      className={classes.link}
      color="textPrimary"
      component={Link}
      to={to}>
      <Typography variant="subtitle2" className={classes.linkText}>
        {children}
      </Typography>
    </MuiLink>
  )
}
