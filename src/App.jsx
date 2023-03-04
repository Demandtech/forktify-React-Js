import './app.css'
import { Header } from './components/Header'
import { Recipes } from './components/Recipes'
import SingleRecipe from './components/SingleRecipe'
import styled from 'styled-components'


function App() {
  return (
    <Container>
      <Header />
      <Recipes />
      <SingleRecipe />
    </Container>
  )
}

const Container = styled.main`
  max-width: 120rem;
  min-height: 117rem;
  margin: 4vw auto;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 2rem 6rem 0.5rem rgba(var(color-grey-dark-1), 0.2);
  display: grid;
  grid-template-rows: 10rem minmax(100rem, auto);
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'head head'
    'list recipe';

  @media only screen and (max-width: 1250px) {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
`

export default App
