import React from 'react';
import FormLayout from '../../layouts/FormLayout';
import LoginForm from '../../components/LoginForm';
import '../../App.scss';

/**
 * LogIn - página de autenticação
 * Integre LoginForm com services/api.js para autenticação (JWT).
 */
export default function LogIn() {
  return (
    <FormLayout>
      <div className="form-card">
        <h2>Entrar</h2>
        <p>Faça login com seu e-mail e senha.</p>
        <LoginForm />
      </div>
    </FormLayout>
  );
}