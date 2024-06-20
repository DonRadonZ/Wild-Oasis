import UpdateSettingsForm from "../feature/settings/UpdateSettingsForm";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";


function Settings() {
  return(
    <Row>
     <Heading as="h1">Update hotel settings</Heading>
     <UpdateSettingsForm />
     </Row>
    );
}

export default Settings;