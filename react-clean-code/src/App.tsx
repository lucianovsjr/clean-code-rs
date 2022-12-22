import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import { Input as InputOld } from './components/Inputs.old';
import * as Input from './components/Input';

/**
 * Quando separamos em components menores?
 * 1. Quando eu tenho algo repetitivo
 * 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
 * 
 * Nem tudo que se repete mais de 1x precisa se tornar um component.
 * Quando seperamos em components menores podemos ter um ganho de performance por conta do algoritmo de reconceliation.
 * 
 * Quando temos um variável que é declarada e é usada por uma parte pequena, é aconselhado criar um component. Ex: Footer
 * 
 * O problema do component é a camada js, o return (html) não necessáriamente precisa ser pequeno. Se tiver muita regras no js, é um sinal para
 * quebrar em outros components.
 * 
 * Funções puras: funções que dependem apenas dos paramêtros recebidos e irão sempre retornar os mesmos valores com as mesmas entradas.
 * Components puros:
 *  - Desacoplar components: As vezes no component criado levamos a interface e a lógica, mas isso nem sempre é benefico.
 *  As vezes os components estão separados e não desacoplados por causa da dependencia que o filho tem do pai.
 *  Pq o filho só pode existir naquele pai.
 *  O filho deve manter apenas a lógica que mantém ele puro.
 *  Exemplo: onCreateNewTodo do Header
 *  Isso garante que ele pode ser utilizado em qualquer lugar, seu contexto está isolado.
 * 
 * Nomear eventos:
 * handle: função do component que é disparada apartir de um evento do usuário
 * on: Quando um component recebe uma função que é um evento do usuário. Exemplo: onClick, onMouseDown...
 * 
 * Configuração vs Composição. Ver arquivo components/Inputs.tsx
 * 
 * Evite colocar operações js no render, tente deixa-ló na camada js
 */

function App() {
  const [todos, setTodo] = useState<string[]>([])

  const isTodoListEmpty = todos.length === 0

  return (
    <div>
      <Header onCreateNewTodo={() => { }} />

      <InputOld
        label="Nome"
        errorMessage="Digite seu nome corretamente"
        icon={<div />}
      />

      <Input.Root>
        <Input.Label htmlFor="name" id="name" />
        <Input.FormField />
        <Input.Icon><div /></Input.Icon>
        <Input.ErrorMessage message="Digite seu nome corretamente" />
        <Input.Icon><div /></Input.Icon>
      </Input.Root>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>
        </section>

        <ul>
          {todos.map(todo => (
            <li key={todo}>todo</li>
          ))}
        </ul>

        {/* Evitar isso */}
        {todos.length === 0 && (
          <p>Nenhum todo cadastrado</p>
        )}
        {/* Fazer isso */}
        {isTodoListEmpty && (
          <p>Nenhum todo cadastrado</p>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
