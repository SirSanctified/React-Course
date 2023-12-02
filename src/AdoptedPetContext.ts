import { createContext } from "react";
import { Pet } from "./APIResponses";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 12355,
    name: "Fido",
    animal: "dog",
    breed: "chihwauhwau",
    city: "Harare",
    state: "Harare",
    images: [],
    description: "good dog",
  },
  () => {},
]);

export default AdoptedPetContext;
