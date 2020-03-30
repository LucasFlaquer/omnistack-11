import React from 'react';
import './styles.css'
import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
  return(
    <div className="new-incident-container">
       <div className="content">
        <section>
          <img src={LogoImg} alt=""/>
          <h1>Cadastar novo caso</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para a home
          </Link>
        </section>
        <form action="">
        <input placeholder="Titulo do caso" type="text"/>
        <textarea name="descricao" id="" cols="30" rows="10" placeholder="Descricao"></textarea>
        <input placeholder="Valor em reais" type="text"/>
        <div className="input-group">
        <input placeholder="Cidade" type="text"/>
        <input placeholder="UF" type="text" style={{width:80}} />
        </div>
        <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}