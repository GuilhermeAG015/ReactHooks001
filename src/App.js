import Forms from './components/Forms/Forms';
import './styles/App.css';

import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography 
        variant='h3' 
        component='h1' 
        align='center'
        >
          Formulario de Cadastro</Typography>
      <Forms />
    </Container>
  );
}

export default App;
