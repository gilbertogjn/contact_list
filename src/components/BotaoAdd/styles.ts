import { Link } from 'react-router-dom'

import styled from 'styled-components'
import vars from '../../styles/vars'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 44px;
  background-color: ${vars.green};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 36px;
  color: #fff;
  text-decoration: none;
  line-height: 1;
`
