/* eslint-disable no-unused-vars */
const objects = [
  {
    name: "Tarik",
    age: 40,
  },
  { name: "George", age: 2 },
];

objects.map((item) => {
  Object.keys(item).map((key) => {
    console.log(key);
  });
});
