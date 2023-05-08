# Material de estudo sobre ContextAPI ☕🧑‍💻
Conteúdo do curso de React.JS (SPA's, Router-DOM, Firebase, Redux entre outras coisas) do Matheus Fraga (Sujeito Programador).

## Por que usar o ContextAPI? 🧑‍💻
- Para não ficar dependendo de Props toda hora na aplicação, isso pode gerar confusão e dificultar na leitura do código.
- O ContextAPI te oferece uma facilidade ao usar e a entender ele, use e abuse dessa ferramenta.

## Demonstração usando o ContextAPI 🔥
- Cria uma pasta em src chamada contexts e depois um arquivo user.jsx, não precisa ser com a primeira letra maiúscula, poís não é um Componente.

```js
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
```

- Aqui eu estou criando um context(contexto) para a minha aplicação, no caso como você pode ver, um sistema de Escola onde mostra o Nome do Aluno e a quantidade de Alunos.

- Sem depender de Props, eu consigo usar os States de forma fácil usando o ContextAPI, criando um state com cada informação necessária, ex: Nome do Aluno e qtdeAlunos.

- Export default para usar em outros componentes.

## Chamando o contextAPI e states dele em um Componente 📖

```js
import React, { useContext } from 'react'
import { UserContext } from '../contexts/user';

const Nome = () => {

    const { alunos, setAlunos, qtdeAlunos, setQtdeAlunos } = useContext(UserContext);

  return (
    <div>
        <span>Bem vindo: {alunos}</span> <br />
        <br />
        <button onClick={() => setAlunos(prompt('Mudar nome:'))}>Trocar Nome</button>
        <button onClick={() => setQtdeAlunos( qtdeAlunos + 1 )}>Add Aluno</button>
    </div>
  )
}

export default Nome;
// Só um exemplo, use sua lógica necessária!
```

## Ultimo passo: Componente Alvo ☕🧑‍💻

```js
import React, { useState } from 'react'
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
```

- Englobe por fora o UserProvider criado lá na pasta contexts -> user.jsx.

- Englobe onde você quer usar para ter acesso a states e valores a partir de um contexto necessário.

- Nesse caso como eu só tinha o Componente APP para usar, englobei nele e depois a div principal.

👋 Tá vendo como é fácil? se ficou com dúvidas, consulte esse link da documentação oficial sobre ContextAPI: [Ver Documentação Oficial](https://react.dev/reference/react/useContext).