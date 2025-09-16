import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'
import ProfessionalsComponent from '../../components/ProfessionalsComponent'
import '../../App.scss'

/**
 * Experts - listagem de orientadores e colaboradores do TCC
 */
export default function Experts() {
  return (
    <DefaultLayout>
      <section className="page experts-page">
        <h2>Consultores e Colaboradores</h2>
        <p>Profissionais que contribuíram com o desenvolvimento e validação do projeto.</p>

        <div className="experts-list">
          <ProfessionalsComponent
            name="Dr. Orientador"
            role="Orientador"
            bio="Especialista em agronomia e sensoriamento."
          />
          <ProfessionalsComponent
            name="Professor Coorientador"
            role="Coorientador"
            bio="Contribuição em modelagem de dados."
          />
        </div>
      </section>
    </DefaultLayout>
  )
}