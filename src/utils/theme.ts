import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFA602' },
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontWeight: 600,
      },
    },
  },
})
