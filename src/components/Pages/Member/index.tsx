import React, { useEffect } from 'react'
import { useAppDispatchEffect, useAppSelector } from '../../../store/reducers'
import { PageTitle } from '../../PageTitle'
import { fetchMembersEffect } from '../../../store/members/effects'
import { MemberForm } from '../../MemberForm'
import { RouteComponentProps } from 'react-router'

export const Member: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const state = useAppSelector((state) => state)
  const memberId = match.params.id
  const dispatchEffect = useAppDispatchEffect()
  useEffect(() => {
    dispatchEffect(fetchMembersEffect())
  }, [])
  return (
    <>
      <PageTitle title={`${memberId === 'new' ? 'Add' : 'Edit'} Member`} />
      <MemberForm id={memberId === 'new' ? undefined : parseInt(memberId)} />
    </>
  )
}
