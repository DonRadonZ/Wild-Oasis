import UpdatePasswordForm from "../feature/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../feature/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading/Heading";
import Row from "../ui/Row/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm/>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm/>
      </Row>
    </>
  );
}

export default Account;