import React, { FC } from 'react'
import styled from 'styled-components'
import icon from './assets/codeStat/icone.png'
import GlobalStyles from './global/styles/GlobalStyles'

const App: FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Icon src={icon} alt="CodeStat Icon" />
      <Title>CodeStat - Setup!</Title>
      <Description>Projeto está rodando! Bora lá.</Description>
      <Description>
        Entre em nosso GitHub apenas clicando
        <Link
          href="https://github.com/CodeStat-Creations"
          target="_blank"
          rel="noopener noreferrer"
        >
          aqui
        </Link>
        .
      </Description>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #f8f8f8;
`

const Icon = styled.img`
  width: 100px;
  height: 100px;
`

const Title = styled.h1`
  font-size: 24px;
  margin-top: 16px;
  color: #333;
`

const Description = styled.p`
  font-size: 18px;
  color: #777;
  margin-top: 8px;
`

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  margin-left: 4px;
`
