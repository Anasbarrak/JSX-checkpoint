import './App.css';
/* Importing components in the main component 'App.js' */
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    {/* Making a card in the component */}
      <Card style={{ width: '20rem', display: 'center' }}>
      <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/1451/1.jpg?3328" />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          {/* Calling other components from their path */}
        <Price/>
        <Description/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <h1 style={{fontFamily:'revert', color: 'MenuText' }}>Hello there</h1>
    </div>
  );
}

export default App;
