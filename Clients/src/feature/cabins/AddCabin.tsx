
import Button from '../../ui/Button/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal/Modal';


export default function AddCabin() {
  return (
    <div>
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    </div>
  );
}

