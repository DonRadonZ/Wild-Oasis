
import CabinTable from "../feature/cabins/CabinTable";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";


import CabinTableOperations from "../feature/cabins/CabinTableOperations";
import AddCabin from "../feature/cabins/AddCabin";

function Cabins() {
 


  return (
    <>
     <Row type="horizontal">
       <Heading as="h1">All cabins</Heading>
       <CabinTableOperations/>
     </Row>

     <Row>
       <CabinTable />

       <AddCabin/>
     </Row>
    </>
  );
}

export default Cabins;