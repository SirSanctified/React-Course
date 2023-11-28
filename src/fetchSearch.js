export default async function fetchSearch({ queryKey }) {
  const { animal, breed, location } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=&${breed}&location=${location}`
  );

  if (!res.ok)
    throw new Error(`Pet search not ok ${animal}, ${location}, ${breed}`);

  return res.json();
}
