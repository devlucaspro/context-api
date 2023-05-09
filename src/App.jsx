import React from 'react'
import Alunos from './components/Alunos';

import UserProvider from './contexts/user';

const App = () => {

  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        <Titulo>
          <strong>Bem vindo a escola!</strong>
        </Titulo>
        <hr />

        <Alunos/>
      </div>
    </UserProvider>
  )
}

export default App;

function Titulo({ children }) {
  return (
    <>
      {children}
    </>
  )
}