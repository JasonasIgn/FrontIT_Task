import React from 'react'
import {
  Link as MuiLink,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    link: {
      textUnderlineOffset: `${theme.spacing(0.75)}px`,
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
  className?: string
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  to,
  underline,
  className,
}) => {
  const classes = useStyles()
  return (
    <MuiLink
      underline={underline}
      className={clsx(classes.link, className)}
      color="textPrimary"
      component={Link}
      to={to}>
      <Typography variant="subtitle2" className={classes.linkText}>
        {children}
      </Typography>
    </MuiLink>
  )
}
