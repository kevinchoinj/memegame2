import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeChar } from "actions/chars";
import Button from "components/general/button";
import Modal from "components/general/modal";

const StyledRow = styled.div`
  display: flex;
  justify-content: flex-end;
  > * {
    margin-left: 2px;
  }
`;

const CharacterDelete = ({ char }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <StyledRow>
        <Button onClick={() => setShowDeleteModal(char.id)}>Delete</Button>
      </StyledRow>
      <Modal
        description="Are you sure you want to delete this character?"
        displayed={showDeleteModal}
        handleSubmit={() => {
          dispatch(removeChar(char.id));
          setShowDeleteModal(false);
        }}
        hide={() => setShowDeleteModal(false)}
        title="Confirm"
      />
    </>
  );
};

export default CharacterDelete;
