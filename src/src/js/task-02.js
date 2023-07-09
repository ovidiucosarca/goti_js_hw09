const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list =document.querySelector(`#ingredients`);
// console.log(list);

const items = ingredients.map(ingredient => {
  const element=document.createElement("li");
  element.textContent=ingredient;
  element.classList.add("item");
  return element;}
  );

  list.append (...items);

  console.log(list);