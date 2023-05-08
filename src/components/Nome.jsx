import React, { useContext } from 'react'
import { UserContext } from '../contexts/user';

const Nome = () => {

    const { alunos, setAlunos, qtdeAlunos, setQtdeAlunos } = useContext(UserContext);

  return (
    <div>
        <span style={{color: '#ff0000'}}>Bem vindo: {alunos}</span> <br />
        <br />
        <button onClick={() => setAlunos(prompt('Mudar nome:'))}>Trocar Nome</button>
        <button onClick={() => setQtdeAlunos( qtdeAlunos + 1 )}>Add Aluno</button>
    </div>
  )
}

export default Nome;