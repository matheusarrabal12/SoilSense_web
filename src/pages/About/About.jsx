import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import '../../App.scss'

/**
 * About - informações do TCC: objetivo, metodologia e equipe
 */
export default function About() {
  return (
    <DefaultLayout>
      <section className="page about-page">
        <h2>Sobre o Projeto</h2>
        <p>
          SoilSense é um sistema para monitoramento de solo desenvolvido como projeto de conclusão de curso.
          Integração entre dispositivos IoT, backend em Node.js e interface em React para visualização e análise.
        </p>

        <h3>Objetivos</h3>
        <ul>
          <li>Registrar e visualizar leituras de sensores de solo.</li>
          <li>Fornecer dashboards e relatórios para apoio a decisões agronômicas.</li>
          <li>Validar uma arquitetura escalável para aplicações similares.</li>
        </ul>

        <h3>Equipe</h3>
        <p>Aluno Autor: Nome do Aluno — Orientador: Nome do Orientador</p>
      </section>
    </DefaultLayout>
  )
}
