import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Campo,
  ContainerBotoes,
  ContainerNovoContato,
  FormContainer,
  HeaderAddContato,
  Titulo
} from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import {
  BotaoCancelarRemover,
  BotaoSalvar
} from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <ContainerNovoContato>
      <FormContainer onSubmit={cadastrarContato}>
        <HeaderAddContato>
          <button onClick={() => navigate('/')}>←</button>
          <Titulo>Novo Contato</Titulo>
        </HeaderAddContato>
        <label htmlFor="nome">Nome</label>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          id="nome"
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="text"
        />
        <label htmlFor="telefone">Telefone</label>
        <Campo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          id="telefone"
          type="text"
        />
        <ContainerBotoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
          <BotaoCancelarRemover onClick={() => navigate('/')}>
            Cancelar
          </BotaoCancelarRemover>
        </ContainerBotoes>
      </FormContainer>
    </ContainerNovoContato>
  )
}

export default Formulario
