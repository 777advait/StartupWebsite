import Navibar from "../components/Navibar";
import { Container } from "react-bootstrap";
import "../App.css";
function Homepage() {
  return (
    <Container id="Homepage">
      <Navibar />
      <h1>This is homepage</h1>
    </Container>
  );
}

export default Homepage;
