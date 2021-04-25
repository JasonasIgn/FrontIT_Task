import React from 'react'
import {
  Container,
  Box,
  Link as MuiLink,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { routes } from '../../routes.config'
import { useAppSelector } from '../../store/reducers'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      height: 80,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    link: {
      marginLeft: theme.spacing(2),
    },
  })
)

const headerLinks = [
  routes.services,
  routes.clients,
  routes.about,
  routes.members,
  routes.contacts,
]

export const Header = () => {
  const classes = useStyles()
  const pathname = useAppSelector((state) => state.router.location.pathname)
  return (
    <Container>
      <Box className={classes.container}>
        {headerLinks.map((link) => (
          <MuiLink
            underline={link.path.includes(pathname) ? 'always' : 'hover'}
            className={classes.link}
            color="textPrimary"
            key={link.path}
            component={Link}
            to={link.path}>
            {link.title}
          </MuiLink>
        ))}
      </Box>
    </Container>
  )
}
