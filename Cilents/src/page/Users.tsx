import SignupForm from "../feature/authentication/SignupForm";
import Heading from "../ui/Heading/Heading";


function NewUsers() {
  return (
    <>
    <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;