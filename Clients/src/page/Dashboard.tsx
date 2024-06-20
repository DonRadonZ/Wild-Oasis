
// Components
import DashboardFilter from "../feature/dashboard/DashboardFilter";
import DashboardLayout from "../feature/dashboard/DashboardLayout";

// UI
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";

function Dashboard() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <DashboardFilter />
    </Row>
    <DashboardLayout/>
    </>
  );
}

export default Dashboard;