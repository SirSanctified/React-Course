import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const result = useQuery(["details", id], fetchPet);
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🚀</h2>
      </div>
    );
  }
  const pet = result.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet?.name}</h1>
        <h2>
          {pet?.animal} - {pet?.breed} - {pet?.city}, {pet?.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet?.name}</button>
        <p>{pet?.description}</p>
        {showModal ? (
          <Modal>
            <h2>Would you like to adopt {pet.name}?</h2>
            <div className="buttons">
              <button onClick={() => {
                setAdoptedPet(pet);
                navigate("/");
              }}>Yes</button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;