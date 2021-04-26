import {
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { routes } from '../../routes.config'
import { addOrUpdateMemberAction } from '../../store/members/actions'
import { useAppDispatch } from '../../store/reducers'
import { Member } from '../../utils/types'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 500,
      margin: 'auto',
    },
    field: {
      marginBottom: theme.spacing(2),
    },
    submitButton: {
      width: 150,
      margin: 'auto',
    },
  })
)

interface MemberFormProps {
  member?: Member
}

export interface MemberFormData {
  name: string
  website: string
  phone: string
  email: string
}

export const MemberForm: React.FC<MemberFormProps> = ({ member }) => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useAppDispatch()
  const { handleSubmit, control } = useForm<MemberFormData>({
    defaultValues: member,
  })

  const onSubmit = (data: MemberFormData) => {
    dispatch(addOrUpdateMemberAction(data, member ? member.id : undefined))
    history.push(routes.members.path)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField label="Name" className={classes.field} {...field} />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField label="Email" className={classes.field} {...field} />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField label="Phone" className={classes.field} {...field} />
        )}
      />
      <Controller
        name="website"
        control={control}
        render={({ field }) => (
          <TextField label="Website" className={classes.field} {...field} />
        )}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.submitButton}>
        Save
      </Button>
    </form>
  )
}
