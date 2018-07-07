const changyu = {
  name: "Changyu",
  age: 26,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => changyu
  }
};

export default resolvers;
