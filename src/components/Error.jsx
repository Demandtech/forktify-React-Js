import React from 'react'
import styled from 'styled-components'
import { FaDiagnoses} from 'react-icons/fa'
import { useGlobalContext } from '../context'


const Error = ({error}) => {
  const { isError } = useGlobalContext()
  return (
    <Wrapper>
      <div className='error'>
        <p>{error.msg}</p>
        <FaDiagnoses />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 4rem;
  .error{
   font-size: 1.7rem;
   text-align:center;
   color: var(--color-primary)
  }
`

export default Error
