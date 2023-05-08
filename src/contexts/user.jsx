import React, { createContext, useState } from 'react'

export const UserContext = createContext({});

function UserProvider({children}) {

  const [alunos, setAlunos] = useState('Lucas Ribeiro')
  const [qtdeAlunos, setQtdeAlunos] = useState(85)

  return (
    <UserContext.Provider value={{ alunos, setAlunos, qtdeAlunos, setQtdeAlunos }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;