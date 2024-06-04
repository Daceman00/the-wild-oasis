import React, { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";

/* function AddCabin() {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setisOpenModal((isOpen) => !isOpen)}>
        Add new Cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setisOpenModal(false)}>
          <CreateCabinForm onClose={() => setisOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
} */

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
