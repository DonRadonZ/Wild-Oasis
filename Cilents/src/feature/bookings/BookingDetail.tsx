import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row/Row";
import Heading from "../../ui/Heading/Heading";
import Tag from "../../ui/Tag/Tag";
import ButtonGroup from "../../ui/Button/ButtonGroup";
import Button from "../../ui/Button/Button";
import ButtonText from "../../ui/Button/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete/ConfirmDelete";
import { useDeleteBooking } from './useDeleteBooking';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading} = useBooking();
  const {checkout, isCheckingOut} = useCheckout();
  const {isDeleting, deleteBooking} = useDeleteBooking();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const { status,id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };



  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
      {/* {status==="unconfirmed" && (
          <Button
          onClick={navigate(`/checkin`)}
          >
            Delete Booking
          </Button>
      )} */}
      <Modal>
        <Modal.Open opens="delete">
          <Button variation="danger">Delete Booking</Button>
        </Modal.Open>

      <Modal.Window name="delete">
          <ConfirmDelete 
          resourceName="booking" 
          onConfirm={() => {deleteBooking(bookingId, {
            onSettled: () => navigate(-1)
          }
        )
      }
    }
          disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>

      {status === "unconfirmed" && (
          <Button 
          
          onClick={navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button 
          icon={<HiArrowUpOnSquare/>}
          onClick={() => {checkout(bookingId)}} 
          disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;