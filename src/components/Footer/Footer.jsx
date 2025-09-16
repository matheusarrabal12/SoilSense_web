import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';

import { logo } from '../../assets';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='bg-white'>
      <Container>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-4 mt-3 border-top'>
          <div className='col-md-4 d-flex align-items-center'>
            <a className='me-2 text-body-secondary text-decoration-none lh-1' href="/">
              <img height={32} src={logo} alt='Logo do IncluMove' />
            </a>
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
            <span className='text-body-secondary'>Copyright © {year} - IncluMove</span>
          </div>
          <div className='col-md-4' />
        </footer>
      </Container>
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-credits">
            <strong>SoilSense</strong>
            <small> — Trabalho de Conclusão de Curso • {new Date().getFullYear()}</small>
          </div>

          <nav className="footer-nav" aria-label="Rodapé">
            <Link to="/About" className="footer-link">Sobre</Link>
            <Link to="/Disabilities" className="footer-link">Acessibilidade</Link>
            <a href="mailto:contato@exemplo.com" className="footer-link">Contato</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export { Footer };

