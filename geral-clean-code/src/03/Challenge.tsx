// Causa vs Efeito
import { useEffect, useState } from "react"

interface User {
  name: string;
  github: string;
}

function fetchUser() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isLoadingUserData, setIsLoadingUserData] = useState(false)
  const [userData, setUserData] = useState<User>()

  useEffect(() => {
    function loadingUser() {
      setIsLoadingUserData(true)

      const fetchedUserResponse = fetchUser()

      setUserData(fetchedUserResponse.data.user)
      
      setIsLoadingUserData(false)
    }

    loadingUser()
  })

  if (isLoadingUserData) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${userData?.github}.png`} alt="" />
      <a href={userData?.github}>{userData?.name}</a>
    </div>
  )
}

