import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Container } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ul>
      {itens.map((c) => (
        <li key={c.telefone}>
          <Contato
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          />
        </li>
      ))}
    </ul>
  )
}

export default ListaDeContatos
