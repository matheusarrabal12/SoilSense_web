import React from 'react'
import FormLayout from '../../layouts/FormLayout'
import SignUpForm from '../../components/SignUpForm'
import '../../App.scss'

/**
 * SignUp - cadastro de usuário
 * Ajuste validação e integração com API conforme necessidade.
 */
export default function SignUp() {
  return (
    <FormLayout>
      <div className="form-card">
        <h2>Cadastro</h2>
        <p>Crie sua conta para acessar o painel SoilSense.</p>
        <SignUpForm />
      </div>
    </FormLayout>
  )
}
