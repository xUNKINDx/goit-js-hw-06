const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");
const listItems = []
for (const ingredient of ingredients) {
  const lastItem = document.createElement("li")
  lastItem.textContent = ingredient;
  listItems.push(lastItem)
}
list.append(...listItems);