import React from 'react'
import { UserInformationExtraForm } from "../../components";
import DefaultLayout from '../../layouts/DefaultLayout'
import '../../App.scss'

/**
 * Acessibilidade - recursos e boas práticas de inclusão do projeto
 */
const Disabilities = () => {
  return (
    <DefaultLayout>
      <section className="page accessibility-page">
        <h2>Acessibilidade</h2>
        <p>Nosso objetivo é tornar a plataforma utilizável por todos. Aqui estão os recursos:</p>

        <ul>
          <li>Navegação por teclado</li>
          <li>Contraste alto opcional</li>
          <li>Compatibilidade com leitores de tela</li>
        </ul>

        <p>Para necessidades específicas, contate a equipe do TCC.</p>
      </section>
    </DefaultLayout>
  )
} 

export { Disabilities };
