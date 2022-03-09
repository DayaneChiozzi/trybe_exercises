const newEmployees = (generalEmployees) => {
  const employees = {
    id1: generalEmployees('Pedro Guerra'),
    id2: generalEmployees('Luiza Drumond'),
    id3: generalEmployees('Carla Paiva'),
  };
  return employees;
};

const generalEmployees = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

console.log(newEmployees(generalEmployees));
