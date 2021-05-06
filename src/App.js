import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form ,Button,Row,Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">

      <h1> If you have any questions contact us </h1>
      
        <Form>
            <Form.Group controlId="formBasicEmail">

             <Row>
                <Col>
                <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="First name" />
                </Col>

                <Col>
                <Form.Label>Last Name </Form.Label>
                  <Form.Control placeholder="Last name" />
                </Col>
            </Row>

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" id="btn">
              Submit
            </Button>

      </Form>
      
    </div>
  );
}

export default App;
