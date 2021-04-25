import React, { useEffect } from 'react'
import { routes } from '../../../routes.config'
import { useAppDispatchEffect, useAppSelector } from '../../../store/reducers'
import { MembersTable } from '../../MembersTable'
import { PageTitle } from '../../PageTitle'
import { fetchMembersEffect } from '../../../store/members/effects'
import { getMembersSelector } from '../../../store/members/selectors'

export const Members = () => {
  const state = useAppSelector(state => state);
  const members = getMembersSelector(state)
  console.log(members)
  const dispatchEffect = useAppDispatchEffect()
  useEffect(() => {
    dispatchEffect(fetchMembersEffect())
  }, [])
  return (
    <>
      <PageTitle title={routes.members.title} />
      <MembersTable members={members} />
    </>
  )
}
