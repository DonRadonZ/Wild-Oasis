import BookingTable from "../feature/bookings/BookingTable";
import BookingTableOperations from "../feature/bookings/BookingTableOperations";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";

function Bookings() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <BookingTableOperations/>
    </Row>
    
    <BookingTable/>
    </>
  );
}

export default Bookings;