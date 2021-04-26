import React, { useEffect } from 'react'
import { routes } from '../../../routes.config'
import { useAppDispatchEffect, useAppSelector } from '../../../store/reducers'
import { MembersTable } from '../../MembersTable'
import { PageTitle } from '../../PageTitle'
import { fetchMembersEffect } from '../../../store/members/effects'
import {
  getMembersLoadingStateSelector,
  getMembersSelector,
} from '../../../store/members/selectors'
import { LoadingState } from '../../../utils/enums'

export const Members = () => {
  const state = useAppSelector((state) => state)
  const members = getMembersSelector(state)
  const loadingState = getMembersLoadingStateSelector(state)
  const dispatchEffect = useAppDispatchEffect()
  useEffect(() => {
    if ([LoadingState.PRISTINE, LoadingState.FAILED].includes(loadingState))
      dispatchEffect(fetchMembersEffect())
  }, [])
  return (
    <>
      <PageTitle title={routes.members.title} />
      <MembersTable members={members} />
    </>
  )
}
