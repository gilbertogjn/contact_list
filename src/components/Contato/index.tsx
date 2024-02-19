import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({ nome, email, telefone, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [campoNome, setCampoNome] = useState('')
  const [campoEmail, setCampoEmail] = useState('')
  const [campoTelefone, setCampoTelefone] = useState('')

  useEffect(() => {
    if (nome.length > 0) {
      setCampoNome(nome)
    }
    if (email.length > 0) {
      setCampoEmail(email)
    }
    if (telefone.length > 0) {
      setCampoTelefone(telefone)
    }
  }, [nome, email, telefone])

  function cancelarEdicao() {
    setEditando(false)
    setCampoNome(nome)
    setCampoEmail(email)
    setCampoTelefone(telefone)
  }

  return (
    <S.Card>
      <S.TituloCampo>Nome</S.TituloCampo>
      <S.Campo
        disabled={!editando}
        type="name"
        value={campoNome}
        onChange={(e) => setCampoNome(e.target.value)}
      />
      <S.TituloCampo>E-mail</S.TituloCampo>
      <S.Campo
        disabled={!editando}
        type="email"
        value={campoEmail}
        onChange={(e) => setCampoEmail(e.target.value)}
      />
      <S.TituloCampo>Telefone</S.TituloCampo>
      <S.Campo
        disabled={!editando}
        type="tel"
        value={campoTelefone}
        onChange={(e) => setCampoTelefone(e.target.value)}
      />
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    telefone,
                    id
                  })
                )
                setEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
