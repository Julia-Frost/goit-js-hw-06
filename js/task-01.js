const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

categories.forEach((category) => {
  const categoryTitle = category.firstElementChild;
  console.log("Category:", categoryTitle.textContent);

  const categoryList = category.lastElementChild.children;
  console.log("Elements:", categoryList.length);
});
