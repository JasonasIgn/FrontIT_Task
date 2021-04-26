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
import { getMemberSelector } from '../../store/members/selectors'
import { useAppDispatch, useAppSelector } from '../../store/reducers'

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 500,
      margin: 'auto',
    },
  })
)

interface MemberFormProps {
  id?: number
}

export interface MemberFormData {
  name: string
  website: string
  phone: string
  email: string
}

export const MemberForm: React.FC<MemberFormProps> = ({ id }) => {
  const classes = useStyles()
  const history = useHistory()
  const state = useAppSelector((state) => state)
  const member = getMemberSelector(state, id)
  const dispatch = useAppDispatch()
  const { handleSubmit, control } = useForm<MemberFormData>({
    defaultValues: member,
  })

  const onSubmit = (data: MemberFormData) => {
    dispatch(addOrUpdateMemberAction(data, id))
    history.push(routes.members.path)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => <TextField label="Name" {...field} />}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => <TextField label="Email" {...field} />}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field }) => <TextField label="Phone" {...field} />}
      />
      <Controller
        name="website"
        control={control}
        render={({ field }) => <TextField label="Website" {...field} />}
      />
      <Button type="submit" color="primary" variant="contained">
        Save
      </Button>
    </form>
  )
}
