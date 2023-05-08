import React, { useContext } from 'react'
import Nome from './Nome';
import { UserContext } from '../contexts/user';

const Alunos = () => {

    const {alunos, qtdeAlunos} = useContext(UserContext);

  return (
    <div>
        <h2>Nome do Aluno Online: {alunos}</h2>
        <p>Total de alunos: {qtdeAlunos}</p>
        <Nome/>
    </div>
  )
}

export default Alunos;