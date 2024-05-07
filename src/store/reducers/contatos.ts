import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Gilberto Garcia',
      email: 'gilberto@gmail.com',
      telefone: '(69) 99950-4002'
    },
    {
      id: 2,
      nome: 'Felipe Lira',
      email: 'felipe@gmail.com',
      telefone: '(69) 99950-4003'
    },
    {
      id: 3,
      nome: 'Tanous Melo',
      email: 'tanouso@gmail.com',
      telefone: '(69) 99950-4004'
    },
    {
      id: 4,
      nome: 'Reinoldo Garcia',
      email: 'reinoldo@gmail.com',
      telefone: '(69) 99950-4005'
    },
    {
      id: 5,
      nome: 'Jhessica Alves',
      email: 'jhessica@gmail.com',
      telefone: '(69) 99950-4006'
    },
    {
      id: 6,
      nome: 'Neto Gurgel',
      email: 'neto@gmail.com',
      telefone: '(69) 99950-4008'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
