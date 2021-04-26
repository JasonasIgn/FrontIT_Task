import React, { useState } from 'react'
import {
  Container,
  Box,
  makeStyles,
  createStyles,
  Theme,
  Drawer,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
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
      display: 'flex',
      justifyContent: 'center',
      marginLeft: theme.spacing(5),
    },
    desktopView: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    mobileButton: {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
    mobileLink: {
      margin: theme.spacing(1.5, 0),
    },
    drawer: {
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(2),
      top: theme.spacing(2),
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
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = useAppSelector((state) => state.router.location.pathname)
  return (
    <Container>
      <Box className={classes.container}>
        <Box className={classes.desktopView}>
          {headerLinks.map((link) => (
            <HeaderLink
              underline={link.path === pathname ? 'always' : 'hover'}
              key={link.path}
              className={classes.link}
              to={link.path}>
              {link.title}
            </HeaderLink>
          ))}
        </Box>
        <Box className={classes.mobileButton}>
          <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            classes={{ paperAnchorRight: classes.drawer }}
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}>
            <>
              <IconButton
                onClick={() => setDrawerOpen(false)}
                className={classes.closeButton}>
                <CloseIcon />
              </IconButton>
              {headerLinks.map((link) => (
                <HeaderLink
                  underline={link.path === pathname ? 'always' : 'hover'}
                  key={link.path}
                  className={classes.mobileLink}
                  to={link.path}>
                  {link.title}
                </HeaderLink>
              ))}
            </>
          </Drawer>
        </Box>
      </Box>
    </Container>
  )
}
