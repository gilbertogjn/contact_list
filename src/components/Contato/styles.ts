import styled from 'styled-components'
import vars from '../../styles/vars'

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  padding: 28px;
  width: 250px;
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export const NomeContato = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const TituloCampo = styled.label`
  font-size: 14px;
  font-weight: bold;
`

export const Campo = styled.input`
  margin-bottom: 8px;
  color: #8b8b8b;
  font-size: 14px;
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  max-width: 47%;
  width: 100%;
  transition: all ease 0.1s;
  background-color: transparent;
`

export const BotaoEditar = styled(Botao)`
  border: 1px solid ${vars.black};
  color: ${vars.black};

  &:hover {
    background-color: ${vars.black};
    color: #fff;
  }
`

export const BotaoSalvar = styled(Botao)`
  border: 1px solid ${vars.green};
  color: ${vars.green};

  &:hover {
    background-color: ${vars.green};
    color: #fff;
  }
`

export const BotaoCancelarRemover = styled(Botao)`
  border: 1px solid ${vars.red};
  color: ${vars.red};

  &:hover {
    background-color: ${vars.red};
    color: #fff;
  }
`
