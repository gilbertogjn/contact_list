import styled from 'styled-components'
import vars from '../../styles/vars'

export const ContainerNovoContato = styled.div`
  display: flex;
  justify-content: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 350px;
  width: 100%;
  border-radius: 12px;
  padding-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  padding: 24px;

  label {
    font-size: 14px;
  }
`

export const Titulo = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-left: 8px;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`

export const HeaderAddContato = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  button {
    background-color: transparent;
    border: none;
    font-weight: 900;
    font-size: 28px;
    cursor: pointer;
  }
`
