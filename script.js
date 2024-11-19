// const checkbox=document.querySelectorAll('.delete-checkbox');

let tableElement = document.getElementById("table");
let tbody = document.createElement("tbody");
tableElement.setAttribute("border", "1px");
tableElement.appendChild(tbody);

let thead = document.createElement("thead");
tableElement.appendChild(thead);
thead.innerHTML = "<tr><th>Title</th><th>Price</th><th>Description</th></tr>";

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) =>{
    data.forEach((item) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="checkbox" class="delete-checkbox" /></td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.description}</td>
      `;
      tbody.appendChild(row);
    })
    attachCheckboxListeners();
  });
  

  function attachCheckboxListeners() {
    document.querySelectorAll('.delete-checkbox').forEach((checkbox) => {
      checkbox.addEventListener('change', function () {
        if (this.checked) {
          const row = this.closest('tr');
          row.parentNode.removeChild(row);
        }
      });
    });
  }