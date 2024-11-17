function filterItems() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const selectorList = document.getElementById("selectorsList");
  const propertyLists = document.querySelectorAll(".property-category ul");

  // Filter selectors
  const selectors = selectorList.getElementsByTagName("li");
  for (let i = 0; i < selectors.length; i++) {
    const text = selectors[i].textContent || selectors[i].innerText;
    selectors[i].style.display = text.toLowerCase().includes(filter)
      ? ""
      : "none";
  }

  // Filter properties
  propertyLists.forEach((propertyList) => {
    const properties = propertyList.getElementsByTagName("li");
    for (let i = 0; i < properties.length; i++) {
      const text = properties[i].textContent || properties[i].innerText;
      properties[i].style.display = text.toLowerCase().includes(filter)
        ? ""
        : "none";
    }
  });
}
