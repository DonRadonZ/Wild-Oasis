import styled from "styled-components";

import { formatCurrency } from '../../utils/helper';

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete/ConfirmDelete";
import Table from "../../ui/Table/Table";
import Menus from "../../ui/Menus/Menus";
import React from "react";



const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

type cabinProps = {
  cabin:{
    id: number,
    name: string ,
    maxCapacity: number, 
    regularPrice: number, 
    discount: number, 
    image: string,
    description: string
  }
}


export default function CabinRow({cabin}: cabinProps) {
  
  const {isDeleting, deleteCabin} = useDeleteCabin();
  const { 
    // isCreating,
     createCabin } = useCreateCabin();

  const {
    id: cabinId,
    name,
    maxCapacity, 
    regularPrice, 
    discount, 
    image,
    description
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,regularPrice,discount,image,description
    })
  }



  return (
    <>
      <Table.Row>
        <React.Fragment>
          <Img src={image} />
            <Cabin>{name}</Cabin>
            <div>Fits up to {maxCapacity} guests</div>
            <Price>{formatCurrency(regularPrice)}</Price>
            {discount ? (
              <Discount>{formatCurrency(discount)}</Discount>
            ) : (
              <span>&mdash;</span>
            )}
            <div>
              <Modal>
                <Menus.Menu>
                  <Menus.Toggle id={cabinId} />

                  <Menus.List id={cabinId} >
                    <Menus.Button 
                    icon={<HiSquare2Stack />}
                    onClick={() => handleDuplicate()}
                    >Duplicate</Menus.Button>
                    
                    
                  <Modal.Open opens="edit">
                    <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                  </Modal.Open>
                  <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                  </Modal.Open>

                  </Menus.List>
                  <Modal.Window name="edit">
                    <CreateCabinForm cabinToEdit={cabin} />
                  </Modal.Window>
                  <Modal.Window name="delete">
                    <ConfirmDelete resourceName="cabin" disabled={isDeleting} onConfirm={() => deleteCabin(cabinId)} />
                  </Modal.Window>
                </Menus.Menu>
              </Modal>
              
              
            </div>
        </React.Fragment>
      </Table.Row>
    </>
  )
}
