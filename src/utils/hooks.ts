import { useEffect, useState } from 'react'
import { Member } from './types'

export const useDisplayMembers = (members: Member[], searchPhrase: string) => {
  const [displayMembers, setDisplayMembers] = useState<Member[]>(members)
  useEffect(() => {
    setDisplayMembers(
      members.filter(
        (member) =>
          member.email.includes(searchPhrase) ||
          member.name.includes(searchPhrase) ||
          member.phone.includes(searchPhrase) ||
          member.website.includes(searchPhrase)
      )
    )
  }, [searchPhrase, members])
  return displayMembers
}
