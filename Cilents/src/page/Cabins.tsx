import { useState } from "react";
import CabinTable from "../feature/cabins/CabinTable";
import Button from "../ui/Button/Button";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";
import CreateCabinForm from "../feature/cabins/CreateCabinForm";

import CabinTableOperations from "../feature/cabins/CabinTableOperations";

function Cabins() {
  const [showForm, setShowForm] = useState(false);


  return (
    <>
     <Row type="horizontal">
       <Heading as="h1">All cabins</Heading>
       <CabinTableOperations/>
     </Row>

     <Row>
       <CabinTable />

       <Button onClick={() => setShowForm((show) => !show)}>Add new cabin</Button>
       {showForm && <CreateCabinForm/>}
     </Row>
    </>
  );
}

export default Cabins;