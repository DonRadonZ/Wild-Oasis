import BookingTable from "../feature/bookings/BookingTable";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";

function Bookings() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All bookings</Heading>
      <p>TEST</p>
    </Row>
    
    <BookingTable/>
    </>
  );
}

export default Bookings;