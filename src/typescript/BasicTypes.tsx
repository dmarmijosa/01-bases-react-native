const BasicTypes = () => {
  const name = "Danny";
  const age = new Date().getFullYear()-1992;
  const isActive = true;
  const power: string[] = ['React', 'React Native', 'NodeJS'];
  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "Inactivo"}
      <p>{power.join(' ')}</p>
    </>
  );
};

export default BasicTypes;
