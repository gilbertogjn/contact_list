import styled, { createGlobalStyle } from 'styled-components'
import vars from './vars'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Mulish', sans-serif;
  }

  body {
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); 
  }
`

export const HeaderTitulo = styled.header`
  width: 821px;
  padding: 14px 24px;
  margin: 18px auto 0;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px 12px 0 0;
`

export const Container = styled.main`
  width: 821px;
  margin: 0 auto 18px;
  padding: 18px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 12px 12px;

  ul {
    display: grid;
    gap: 18px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default EstiloGlobal
