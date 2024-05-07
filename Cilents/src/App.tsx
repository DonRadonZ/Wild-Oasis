import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button/Button";
import Input from "./ui/Input/Input";
import  Heading  from './ui/Heading/Heading';
import Row from "./ui/Row/Row";



const StyledApp = styled.main`
/* background-color: orangered; */
padding: 20px;
`;

export default function App() {
  return (
    <>
    <GlobalStyles/>
    <StyledApp>
      <Row type="vertical">

      <Row type="horizontal">
        <Heading as="h1">The Wild Oasis</Heading>
        <div>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        </div>
      </Row>
  
      <Row type="vertical">
        <Heading as='h3'>Form</Heading>
        <form>
          <Input type="number" placeholder="Number of guests" />
          <Input type="number" placeholder="Number of guests" />
        </form>
      </Row>
    </Row>
    </StyledApp>
    </>
  )
}
