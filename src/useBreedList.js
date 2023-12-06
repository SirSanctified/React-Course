import { useGetBreedsQuery } from "./petAPIService";

export default function useBreedList(animal) {
  const { isLoading, data: breeds } = useGetBreedsQuery(animal, {
    skip: !animal,
  });
  if (!animal) {
    return [[], "loaded"];
  }
  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
