import { Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import calculator from './calculator';

/*  #####################################################################
  * ------------------------- Main application -------------------------- *
  * - Description: This function using for draw the user interface(UI) of *
  *   calculator. After user click on the button, call the function of    *
  *   calculator and calculate the value and math.                        *
  * ===================================================================== *
  * = Create by: Mr.Supakij Buasod                                        *
  * = Create date: 21/08/2022                                             *
  * = Last update: 21/08/2022                                             *
  * #####################################################################
*/
function App() {
  return (
    <Container fluid className="mt-3">
      <hr></hr>
      <Row align={"right"} mt={3} mb={3}>
        <Col><h1 id='answer'>0</h1></Col>
      </Row>
      <hr></hr>
      <Row align={"center"}>
        <Col className="d-grid gap-1" onClick={() => {calculator("AC")}}><Button size="lg">AC</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("±")}}><Button size="lg">±</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("%")}}><Button size="lg">%</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("÷")}}><Button size="lg">÷</Button></Col>
      </Row>
      <hr></hr>
      <Row align={"center"}>
        <Col className="d-grid gap-1" onClick={() => {calculator("7")}}><Button variant="outline-success" size="lg">7</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("8")}}><Button variant="outline-success" size="lg">8</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("9")}}><Button variant="outline-success" size="lg">9</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("x")}}><Button size="lg">x</Button></Col>
      </Row>
      <hr></hr>
      <Row align={"center"}>
        <Col className="d-grid gap-1" onClick={() => {calculator("4")}}><Button variant="outline-success" size="lg">4</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("5")}}><Button variant="outline-success" size="lg">5</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("6")}}><Button variant="outline-success" size="lg">6</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("-")}}><Button size="lg">-</Button></Col>
      </Row>
      <hr></hr>
      <Row align={"center"}>
        <Col className="d-grid gap-1" onClick={() => {calculator("1")}}><Button variant="outline-success" size="lg">1</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("2")}}><Button variant="outline-success" size="lg">2</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("3")}}><Button variant="outline-success" size="lg">3</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("+")}}><Button size="lg">+</Button></Col>
      </Row>
      <hr></hr>
      <Row align={"center"}>
        <Col className="d-grid gap-1" xs={6} onClick={() => {calculator("0")}} ><Button variant="outline-success" size="lg">0</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator(".")}}><Button variant="outline-success" size="lg">●</Button></Col>
        <Col className="d-grid gap-1" onClick={() => {calculator("=")}}><Button size="lg">=</Button></Col>
      </Row>
      <hr></hr>
    </Container>
  );
}

export default App;
