import React, { useEffect } from 'react'
import { useAppSelector } from '../../../store/reducers'
import { PageTitle } from '../../PageTitle'
import { MemberForm } from '../../MemberForm'
import { RouteComponentProps, useHistory } from 'react-router'
import { getMemberSelector } from '../../../store/members/selectors'
import { routes } from '../../../routes.config'

export const Member: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const history = useHistory()
  const state = useAppSelector((state) => state)
  const memberId =
    match.params.id === 'new' ? undefined : parseInt(match.params.id)
  const member = getMemberSelector(state, memberId)
  useEffect(() => {
    if (memberId && !member) {
      history.push(routes.member.path.replace(':id', 'new'))
    }
  }, [])
  return (
    <>
      <PageTitle title={`${memberId ? 'Edit' : 'Add'} Member`} />
      <MemberForm member={member} />
    </>
  )
}
