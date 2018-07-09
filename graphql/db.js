export const people = [
  {
    id: "0",
    name: "a",
    age: 26,
    gender: "male"
  },
  {
    id: "1",
    name: "b",
    age: 26,
    gender: "male"
  },
  {
    id: "2",
    name: "c",
    age: 26,
    gender: "male"
  },
  {
    id: "3",
    name: "d",
    age: 26,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => people.id === id);
  return filteredPeople[0];
};
