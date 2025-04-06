interface Person {
  age: number;
  firstName: string;
  lastName: string;
  addres: Address;
}
interface Address {
  country: string;
  houseNo: number;
}
const ObjectLiterals = () => {
  const person: Person = {
    age: 30,
    firstName: "Danny",
    lastName: "Armijos",
    addres: {
      country: "Spain",
      houseNo: 10,
    },
  };
  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};

export default ObjectLiterals;
