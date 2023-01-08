const categories = document.querySelectorAll(".item");
const numbersCategories = categories.length;
console.log("Number of categories: " + numbersCategories);

for (const category of categories) {
    const categoryName = category.firstElementChild.innerHTML;
    console.log("Category: " + categoryName)
    const categoryItems = category.lastElementChild.children ;
    console.log("Elements: " + categoryItems.length)
}