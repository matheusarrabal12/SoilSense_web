import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ButtonBack, ButtonLogOut, GraphsComponent, NavUsersHome, ProfessionalsComponent, ProfilePicture, LastWorkout, ButtonNewWorkout, NewWorkout, Loading } from "../../components";
import { UseAppContext } from "../../hooks";
import Logo from '../../assets/logo.svg'
import '../../App.scss'

const Home = () => {
  const {
    usuarioLog,
    handleWorkoutTypeSelect,
    exerciciosSelecionados,
    showNewWorkout,
  } = UseAppContext();

    const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (usuarioLog !== null) {
      setLoading(false);
    }
  }, [usuarioLog]);

if (loading) return <Loading />;
if (!usuarioLog) return <h2 className="title text-center mt-2">Usuário não encontrado. Faça login novamente.</h2>;

  return (
    <DefaultLayout>
      <section className="page home-page">
        <header className="home-hero">
          <img src={Logo} alt="Logo do projeto" className="home-logo" />
          <h1>SoilSense — Monitoramento Inteligente do Solo</h1>
          <p>
            Plataforma do TCC para coleta, visualização e análise de dados de sensores de solo.
            Arquitetura: React (frontend) + Node.js (backend).
          </p>
          <div className="home-cta">
            <Link to="/LogIn" className="btn primary">Entrar</Link>
            <Link to="/SignUp" className="btn outline">Criar Conta</Link>
          </div>
        </header>

        <main className="home-main">
          <section className="features grid">
            <article className="card">
              <h3>Leituras em tempo real</h3>
              <p>Humidade, temperatura e condutividade direto dos sensores.</p>
            </article>
            <article className="card">
              <h3>Dashboards intuitivos</h3>
              <p>Gráficos e relatórios para tomada de decisão agronômica.</p>
            </article>
            <article className="card">
              <h3>Recomendações</h3>
              <p>Sugestões práticas com base em histórico e modelos simples.</p>
            </article>
          </section>

          <section className="how-to">
            <h2>Como começar</h2>
            <ol>
              <li>Crie uma conta e cadastre seu dispositivo.</li>
              <li>Conecte sensores e envie leituras para o servidor.</li>
              <li>Visualize dados e aplique recomendações.</li>
            </ol>
          </section>
        </main>
      </section>
    </DefaultLayout>
  )
}

export { Home };