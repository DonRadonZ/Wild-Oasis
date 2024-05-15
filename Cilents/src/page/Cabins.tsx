import CabinTable from "../feature/cabins/CabinTable";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";

function Cabins() {
  return (
    <>
     <Row type="horizontal">
       <Heading as="h1">All cabins</Heading>
       <p>Filter / Sort</p>
     </Row>

     <Row>
       <CabinTable />
     </Row>
    </>
  );
}

export default Cabins;