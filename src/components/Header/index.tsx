import React from 'react'
import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import { routes } from '../../routes.config'
import { useAppSelector } from '../../store/reducers'
import { HeaderLink } from '../HeaderLink'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    container: {
      height: 80,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    link: {
      marginLeft: theme.spacing(5),
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
          <HeaderLink
            underline={link.path.includes(pathname) ? 'always' : 'hover'}
            key={link.path}
            className={classes.link}
            to={link.path}>
            {link.title}
          </HeaderLink>
        ))}
      </Box>
    </Container>
  )
}
