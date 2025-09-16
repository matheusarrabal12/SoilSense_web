import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { woman_confused } from "../../assets";
import { Col, Container, Row } from "react-bootstrap";
import '../../App.scss'

/**
 * Página 404 - rota não encontrada
 */
const Error = () => {
  const location = useLocation();
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  const textoRota = location.state?.textoRota || "Página não encontrada.";

  return (
    <div className="bg-primary d-flex flex-column justify-content-center align-items-center h-100" style={{ minHeight: "80vh" }}>  
      <Container>
          <Row className='mx-xxl-2'>
            <Col lg={12} className="d-flex flex-column justify-content-center align-items-center">

                <h1 className="title fw-bold text-center mt-4">Erro 404</h1>
                {!usuarioLogado && (
                  <p className="text-center">
                    {textoRota}
                    <br />
                    <a href="/form/login" className="text-tertiary fw-semibold">
                      Clique aqui para fazer login.
                    </a>
                  </p>
                )}
                <p className="text-center mb-n2">
                  Página não encontrada.
                </p>
            </Col>
            <Col lg={12} className="d-flex flex-column justify-content-center align-items-center">
              <img className='w-50' src={woman_confused} alt="Mulher confusa" />
            </Col>
          </Row>
        </Container>
        <div className="error-page center">
      <div className="card">
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você procura não existe.</p>
        <Link to="/" className="btn primary">Voltar ao início</Link>
      </div>
    </div>
    </div>
  );
}

export { Error };