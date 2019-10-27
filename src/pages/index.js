import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Francisco Bento" />
    <p>
      Me chamo Francisco Bento, sou desenvolvedor de software apaixonado
      pelo que faço, curioso e estou sempre buscando aprender algo.
      Amo ouvir música (sempre aceito recomendações), jogar <strike>PES</strike> FIFA
      e resolver problemas com código.
    </p>

    <p> Sou do Rio Grande do Norte e atualmente moro em Porto Alegre-RS onde faço
      Mestrado em Computação na UFRGS. Tenho interesse principalmente na área de
      Aprendizado por Reforço, mas tudo que é relacionado com desenvolvimento me desperta a curiosidade.
      </p>

    <p>
      Mais abaixo falo um pouco sobre minhas experiências acadêmicas e profissionais.
      Deixo também meu email e minhas redes sociais, fique à vontade para entrar em contato!

    </p>
    <p>
      <a target="_blank" href="mailto:franciscobdsjunior@gmail.com">email</a>, <a target="_blank" href="https://github.com/chicobentojr">Github</a>
      , <a target="_blank" href="https://www.linkedin.com/in/chicobentojr/">LinkedIn</a>, <a target="_blank" href="http://lattes.cnpq.br/5951530578146263">Lattes</a>
      , <a target="_blank" href="https://telegram.me/chicobentojr">Telegram</a>, <a target="_blank" href="https://www.facebook.com/chicobentojr">Facebook</a>
      , <a target="_blank" href="https://twitter.com/chicobentojr">Twitter</a>, <a target="_blank" href="https://filmow.com/usuario/chicobentojr">Filmow</a>
      , <a target="_blank" href="https://www.skoob.com.br/usuario/871928-chico">Skoob</a>
      , <a target="_blank" href="https://open.spotify.com/user/12151071373?si=VRtPJ-zoTeSvc6jJ_JDCng">Spotify</a> e <a target="_blank" href="https://last.fm/user/chicobentojr">Last.fm</a>.
    </p>

    <h2>Educação</h2>

    <h4>2020 (Previsto) Mestre em Computação, Universidade Federal do Rio Grande do Sul (UFRGS)</h4>
    <ul>
      <li>Participação num projeto da Petrobras para desenvolvimento de uma plataforma e busca de dados heterogêneos da área de Geologia.</li>
      <li>Pesquisa na área de Aprendizado por Reforço com foco em políticas compostas.</li>
    </ul>

    <h4>2018 Tecnólogo em Análise e Desenvolvimento de Sistemas, Instituto Federal do Rio Grande do Norte.</h4>
    <ul>
      <li>Participação num projeto para análise e visualização de grandes montantes de dados espaço-temporal e coautor de 1 artigo internacional (DOI: 10.1109/iThings-GreenCom-CPSCom-SmartData.2017.170) na área.</li>
      <li>Participação num projeto para construção de uma assistente pessoal de baixo custo utilizando tecnologias open-source.</li>
    </ul>


    <h4>2015 Técnico em Informática para Internet, Instituto Federal do Rio Grande do Norte</h4>
    <ul>
      <li>Participação num projeto para permitir que alunos façam uma autoavaliação em qualquer lugar pela web, utilizando ASP.NET, SignalR e Microsoft SQL Server.</li>
    </ul>




    <h2>Experiência de Trabalho</h2>
    <h4>Desenvolvedor Full Stack, Mais Data - Jul/2018 - Fev/2019 - Natal, Brasil</h4>
    <ul>
      <li>Desenvolvimento de uma plataforma para criação e gerenciamento de chatbots.</li>
      <li>Desenvolvimento Full Stack utilizando Golang, ReactJS, GraphQL e MongoDB.</li>
    </ul>

    <h4>Pesquisador e Desenvolvedor Web, LAIS-HUOL - Mar/2017  - Jun/2018 - Natal, Brasil</h4>
    <ul>
      <li>Desenvolvimento de microsserviços para um programa nacional de telessaúde.</li>
      <li>Desenvolvimento Full Stack utilizando Laravel e PostgreSQL.</li>
    </ul>

    <h4>Desenvolvedor Freelancer - Ago/2016 - Fev/2017 - Natal, Brasil</h4>
    <ul>
      <li>Desenvolvimento de firmwares para placas PIC e Arduino conectado com a internet.</li>
      <li>Desenvolvimento de dashboard para acompanhamento de placas Arduino.</li>
    </ul>


    <h4>Estagiário de Desenvolvimento Web, Techvirtual - Ago/2015 - Ago/2016 - Natal, Brasil</h4>
    <ul>
      <li>Desenvolvimento de um novo módulo do produto utilizando ASP.NET e Microsoft SQL Server.</li>
      <li>Colaboração na modelagem de um novo banco de dados.</li>
    </ul>


    <h2>Habilidades</h2>
    <p>
      Python, Golang, Flask, React, Redux, React Native, GraphQL, Vue.js, Vuex, ES6, Laravel, Docker, Git, Django Rest Framework
    </p>


    <h2>Outros projetos</h2>
    <p>
      <b>GeoGuide</b>: ambiente web para análise e visualização de grandes montantes de dados espaço-temporal.
    </p>
    <p>
      <b>SIAC</b>: plataforma web para gerenciamento de questões e criação de autoavaliações para instituições de ensino.
    </p>
    <p>
      <b>Nísia</b>: projeto web e mobile para combate à violência doméstica junto com as autoridades locais.
    </p>
    <p>
      <b>Luna</b>: projeto web e mobile para assistência pessoal de deficientes motores com aparelhos de baixo custo.
    </p>


  </Layout>
)

export default IndexPage
