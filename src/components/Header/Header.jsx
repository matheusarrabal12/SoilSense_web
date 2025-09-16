import React, { useState, useEffect } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import { logo } from '../../assets';
import { UseAppContext } from '../../hooks';

const Header = () => {
  const { usuarioLog, setUsuarioLog } = UseAppContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let usuarioSalvo = localStorage.getItem('usuarioLogado');
    if (usuarioSalvo && usuarioSalvo !== "undefined") {
      try {
        usuarioSalvo = JSON.parse(usuarioSalvo);
      } catch (e) {
        usuarioSalvo = null;
        localStorage.removeItem('usuarioLogado');
        console.error("erro:", e);
      }
    } else {
      usuarioSalvo = null;
    }
  
  setUsuarioLog(usuarioSalvo);
  }, [setUsuarioLog]);

  return (
    <Container>
      <header className='site-header'>
        <div className='container header-inner'>
          <Link to='/' className='brand' aria-label='Ir para a página inicial'>
            <img className='me-3 ms-md-3' height={70} src={logo} alt='Logo do IncluMove' />
            <span className='title fw-medium fs-1'>IncluMove</span>
          </Link>

          <nav
            className={`main-nav ${open ? 'open' : ''}`}
            aria-label='Navegação principal'
          >
            <NavLink to='/Home' className='nav-link' activeClassName='active' onClick={() => setOpen(false)}>Início</NavLink>
            <NavLink to='/TelaGraficos' className='nav-link' activeClassName='active' onClick={() => setOpen(false)}>Gráficos</NavLink>
            <NavLink to='/TelaDispositivo' className='nav-link' activeClassName='active' onClick={() => setOpen(false)}>Dispositivos</NavLink>
            <NavLink to='/About' className='nav-link' activeClassName='active' onClick={() => setOpen(false)}>Sobre</NavLink>
            <NavLink to='/Experts' className='nav-link' activeClassName='active' onClick={() => setOpen(false)}>Equipe</NavLink>
          </nav>

          <div className='header-actions'>
            <Link to='/LogIn' className='btn link'>Entrar</Link>
            <Link to='/SignUp' className='btn primary'>Criar conta</Link>

            <button
              className='menu-toggle'
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls='main-navigation'
              onClick={() => setOpen(!open)}
            >
              <span className='sr-only'>Menu</span>
              <svg width='24' height='24' viewBox='0 0 24 24' aria-hidden>
                <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </Container>
  )
}

export { Header };

