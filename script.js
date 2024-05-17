//===========================================================================================================
//Constant Data and Category Data
// const data = [];
const data = [
  {
    product_id: 101,
    product_name: "Product 1",
    category: "Food",
    sub_category: "Curry",
    price: 100,
    stock_quantity: 50,
    stock_info: "In Stock",
    m_date: "2024-01-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 102,
    product_name: "Product 2",
    category: "AC",
    sub_category: "Daikin",
    price: 150,
    stock_quantity: 60,
    stock_info: "In Stock",
    m_date: "2024-02-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 103,
    product_name: "Product 3",
    category: "Vegetables",
    sub_category: "Spinach",
    price: 120,
    stock_quantity: 70,
    stock_info: "In Stock",
    m_date: "2024-03-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 104,
    product_name: "Product 4",
    category: "Fruits",
    sub_category: "Mango",
    price: 80,
    stock_quantity: 80,
    stock_info: "In Stock",
    m_date: "2024-04-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 105,
    product_name: "Product 5",
    category: "Bike",
    sub_category: "Suzuki",
    price: 200,
    stock_quantity: 90,
    stock_info: "In Stock",
    m_date: "2024-05-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 106,
    product_name: "Product 6",
    category: "Mobile",
    sub_category: "Google",
    price: 130,
    stock_quantity: 100,
    stock_info: "In Stock",
    m_date: "2024-06-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 107,
    product_name: "Product 7",
    category: "Vegetables",
    sub_category: "Onion",
    price: 90,
    stock_quantity: 110,
    stock_info: "In Stock",
    m_date: "2024-07-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 108,
    product_name: "Product 8",
    category: "Mobile",
    sub_category: "Xiaomi",
    price: 140,
    stock_quantity: 120,
    stock_info: "In Stock",
    m_date: "2024-08-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 109,
    product_name: "Product 9",
    category: "Vegetables",
    sub_category: "Tomato",
    price: 180,
    stock_quantity: 130,
    stock_info: "In Stock",
    m_date: "2024-09-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 110,
    product_name: "Product 10",
    category: "Bike",
    sub_category: "Ducati",
    price: 100,
    stock_quantity: 140,
    stock_info: "In Stock",
    m_date: "2024-10-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 111,
    product_name: "Product 11",
    category: "Car",
    sub_category: "Chevrolet",
    price: 170,
    stock_quantity: 150,
    stock_info: "In Stock",
    m_date: "2024-11-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 112,
    product_name: "Product 12",
    category: "Fruits",
    sub_category: "Grapes",
    price: 160,
    stock_quantity: 160,
    stock_info: "In Stock",
    m_date: "2024-12-01",
    e_date: "2024-12-31"
  },
  {
    product_id: 113,
    product_name: "Product 13",
    category: "TV",
    sub_category: "Samsung",
    price: 110,
    stock_quantity: 170,
    stock_info: "In Stock",
    m_date: "2025-01-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 114,
    product_name: "Product 14",
    category: "Mobile",
    sub_category: "Google",
    price: 190,
    stock_quantity: 180,
    stock_info: "In Stock",
    m_date: "2025-02-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 115,
    product_name: "Product 15",
    category: "Car",
    sub_category: "Toyota",
    price: 220,
    stock_quantity: 190,
    stock_info: "In Stock",
    m_date: "2025-03-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 116,
    product_name: "Product 16",
    category: "AC",
    sub_category: "Mitsubishi Electric",
    price: 120,
    stock_quantity: 200,
    stock_info: "In Stock",
    m_date: "2025-04-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 117,
    product_name: "Product 17",
    category: "Fruits",
    sub_category: "Orange",
    price: 200,
    stock_quantity: 210,
    stock_info: "In Stock",
    m_date: "2025-05-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 118,
    product_name: "Product 18",
    category: "Mobile",
    sub_category: "Huawei",
    price: 240,
    stock_quantity: 220,
    stock_info: "In Stock",
    m_date: "2025-06-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 119,
    product_name: "Product 19",
    category: "AC",
    sub_category: "Carrier",
    price: 130,
    stock_quantity: 230,
    stock_info: "In Stock",
    m_date: "2025-07-01",
    e_date: "2025-12-31"
  },
  {
    product_id: 120,
    product_name: "Product 20",
    category: "Fruits",
    sub_category: "Grapes",
    price: 210,
    stock_quantity: 240,
    stock_info: "In Stock",
    m_date: "2025-08-01",
    e_date: "2025-12-31"
  }
]
  ;

const categoryData = [
  {
    categoryName: "Mobile",
    subcategories: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "OnePlus",
      "Huawei",
      "Google",
      "Sony",
    ],
  },
  {
    categoryName: "TV",
    subcategories: [
      "Samsung",
      "LG",
      "Sony",
      "Panasonic",
      "TCL",
      "Hisense",
      "Philips",
    ],
  },
  {
    categoryName: "AC",
    subcategories: [
      "Daikin",
      "Mitsubishi Electric",
      "LG",
      "Samsung",
      "Voltas",
      "Carrier",
      "Blue Star",
    ],
  },
  {
    categoryName: "Car",
    subcategories: [
      "Toyota",
      "Honda",
      "Ford",
      "Chevrolet",
      "BMW",
      "Mercedes-Benz",
      "Audi",
    ],
  },
  {
    categoryName: "Bike",

    subcategories: [
      "Honda",
      "Yamaha",
      "Suzuki",
      "Kawasaki",
      "BMW",
      "Ducati",
      "Harley-Davidson",
    ],
  },
  {
    categoryName: "Fruits",

    subcategories: [
      "Apple",
      "Banana",
      "Orange",
      "Grapes",
      "Mango",
      "Strawberry",
      "Watermelon",
    ],
  },
  {
    categoryName: "Vegetables",
    subcategories: [
      "Tomato",
      "Potato",
      "Carrot",
      "Spinach",
      "Broccoli",
      "Onion",
      "Cucumber",
    ],
  },
  {
    categoryName: "Food",
    subcategories: [
      "Burger",
      "Pizza",
      "Sandwich",
      "Pasta",
      "Sushi",
      "Taco",
      "Curry",
    ],
  },
];
const deletedTaskId = [];
const transactionHistory = [];
generateHTML(data);
//Form  Id Validation div
const validationMessage = document.getElementById("productValidation");
const validationMessageEdit = document.getElementById("productEditValidation");
const stockValidation = document.getElementById("stockValidation");
const viewHistoryData = document.getElementById("viewHistoryData");
//===========================================================================================================

//Form Validation of Add Product Form -- Starting

const categorySelect = document.getElementById("category");
const subcategorySelect = document.getElementById("sub_category");
const stockQuantityInput = document.getElementById("stock_quantity");
const stockInfoSelect = document.getElementById("stock_info");

/// Category Dropdown Populate
categoryData.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.categoryName;
  option.textContent = category.categoryName;
  categorySelect.appendChild(option);
});

// SubCategory Population
categorySelect.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  const subcategories = categoryData.find(
    (category) => category.categoryName === selectedCategory
  ).subcategories;

  // Clear previous subcategories
  subcategorySelect.innerHTML =
    '<option value="" disabled selected>Select a subcategory</option>';

  // Populate the subcategory dropdown
  subcategories.forEach((subcategory) => {
    const option = document.createElement("option");
    option.value = subcategory;
    option.textContent = subcategory;
    subcategorySelect.appendChild(option);
  });

  // Enable the subcategory dropdown
  subcategorySelect.disabled = false;
});

// Event listener for stock quantity change
stockQuantityInput.addEventListener("input", () => {
  const stockQuantity = parseInt(stockQuantityInput.value, 10);
  if (stockQuantity > 0) {
    stockInfoSelect.value = "Available";
  } else {
    stockInfoSelect.value = "Out of Stock";
  }
});

const mDateInput = document.getElementById("mDate");
const eDateInput = document.getElementById("endDate");

// Function to update min and max attributes of date inputs
function updateDateAttributes() {
  // Get selected dates
  const mDateValue = mDateInput.value;
  const eDateValue = eDateInput.value;

  // Update min and max attributes based on selected dates
  if (mDateValue && !eDateValue) {
    // If only manufacturing date is selected
    eDateInput.min = mDateValue;
    eDateInput.max = "";
  } else if (!mDateValue && eDateValue) {
    // If only expiry date is selected
    mDateInput.min = "";
    mDateInput.max = eDateValue;
  } else if (mDateValue && eDateValue) {
    // If both manufacturing and expiry dates are selected
    eDateInput.min = mDateValue;
    mDateInput.max = eDateValue;
  } else {
    // If no dates are selected
    eDateInput.min = "";
    mDateInput.max = "";
  }
}

// Add event listeners to track changes in date inputs
mDateInput.addEventListener("change", updateDateAttributes);
eDateInput.addEventListener("change", updateDateAttributes);

//Form Validation of Add Product Form -- Ending
//===========================================================================================================

const editCategory = document.getElementById("editCategory");
const editsubcategory = document.getElementById("edit_sub_category");
const editStockQuantity = document.getElementById("edit_stock_quantity");
const editStockInfo = document.getElementById("edit_stock_info");

//Form Validation of Edit Product Form -- Starting
categoryData.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.categoryName;
  option.textContent = category.categoryName;
  editCategory.appendChild(option);
});

// Event listener for category change in edited
editCategory.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  const subcategories = categoryData.find(
    (category) => {category.categoryName === selectedCategory}
  ).subcategories;

  // Clear previous subcategories
  editsubcategory.innerHTML = ""; // Clear previous options

  // Populate the subcategory dropdown
  subcategories.forEach((subcategory) => {
    const option = document.createElement("option");
    option.value = subcategory;
    option.textContent = subcategory;
    editsubcategory.appendChild(option);
  });

  // Enable the subcategory dropdown
  editsubcategory.disabled = false;
});

// Event listener for stock quantity change
editStockQuantity.addEventListener("input", () => {
  const stockQuantity = parseInt(editStockQuantity.value, 10);
  if (stockQuantity > 0) {
    editStockInfo.value = "Available";
  } else {
    editStockInfo.value = "Out of Stock";
  }
});

const mDateInput_edit = document.getElementById("edit_mDate");
const eDateInput_edit = document.getElementById("edit_endDate");

//Fucntion to Update min and max attributes of edit form date inputs
function updateEditedFormDateAttributes() {
  // Get selected dates
  const mDateEditFormValue = mDateInput_edit.value;
  const eDateEditFormValue = eDateInput_edit.value;

  // Update min and max attributes based on selected dates
  if (mDateEditFormValue && !eDateEditFormValue) {
    // If only manufacturing date is selected
    eDateInput_edit.min = mDateEditFormValue;
    eDateInput_edit.max = "";
  } else if (!mDateEditFormValue && eDateEditFormValue) {
    // If only expiry date is selected
    mDateInput_edit.min = "";
    mDateInput_edit.max = eDateEditFormValue;
  } else if (mDateEditFormValue && eDateEditFormValue) {
    // If both manufacturing and expiry dates are selected
    eDateInput_edit.min = mDateEditFormValue;
    mDateInput_edit.max = eDateEditFormValue;
  } else {
    // If no dates are selected
    eDateInput_edit.min = "";
    mDateInput_edit.max = "";
  }
}

// Add event listeners to track changes in date inputs
mDateInput_edit.addEventListener("change", updateEditedFormDateAttributes);
eDateInput_edit.addEventListener("change", updateEditedFormDateAttributes);

//Form Validation of Edit Product Form -- Ending
//===========================================================================================================

//Add your new Product - Starting
const productForm = document.getElementById("productForm");

//Does product_id exist
function isTaskIdExist(productId) {
  const converted_productId = parseInt(productId);
  return data.some((p) => {
    return p.product_id === converted_productId;
  });
}
function isTaskIdExistWhileEditing(oldDataId,productId) {
  const convertedProductId = parseInt(productId);
  
  // Filter out the product with the specified ID
  const filteredData = data.filter(p => p.product_id !== oldDataId);
  
  // Check if any remaining product has the same ID as the converted product ID
  return filteredData.find(p =>  {return p.product_id === convertedProductId});
}

const add_product = productForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(productForm);
  const productData = {};
  formData.forEach((value, key) => {
    if (key === "product_id") {
      // Check if the key is 'product_id'
      productData[key] = parseInt(value); // Convert the value to a number
    } else {
      productData[key] = value;
    }
  });

  if (deletedTaskId.includes(productData.product_id)) {
    validationMessage.innerText = "Product Id Expired";
  } else if (isTaskIdExist(productData.product_id)) {
    validationMessage.innerText = "Product Id Already Exist";
  } else {
    data.push(productData);
    generateHTML(data);
    productForm.reset();
    validationMessage.innerText = "";
    handleAddFormHide();
    displayData()
    
  }
  return productData;
});
//Add your new Product - Ending
//===========================================================================================================

// Edit / Upadate Product Details -- Starting
let fetch_product_details = document.getElementById("editProductForm");
let currentDataId; //To Store the Product Id
let oldDataId;
fetch_product_details.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(fetch_product_details);
  const editedProductData = {};
  formData.forEach((value, key) => {
    if (key === "editProduct_id") {
      editedProductData[key] = parseInt(value); // Convert the value to a numb
    } else {
      editedProductData[key] = value;
    }
  });
  if (deletedTaskId.includes(editedProductData.editProduct_id)) {
    validationMessageEdit.innerText = "Product Id Expired";
  } else if (isTaskIdExistWhileEditing(oldDataId,editedProductData.editProduct_id)) {
    validationMessageEdit.innerText = "Product Id Already Exist";
  } else {
    editTask(currentDataId, editedProductData);
    fetch_product_details.reset();
    validationMessageEdit.innerText = "";
    handleEditFormHide();
    displayData()
  }
});

const populateTaskForm = (productData) => {
  document.getElementById("editProductId").value = productData.product_id;
  document.getElementById("editProductName").value = productData.product_name;
  document.getElementById("edit_price").value = productData.price;
  document.getElementById("edit_stock_info").value = productData.stock_info;
  document.getElementById("edit_stock_quantity").value = productData.stock_quantity;
  document.getElementById("edit_mDate").value = productData.m_date;
  document.getElementById("edit_endDate").value = productData.e_date;
  // Populate the category dropdown
  editCategory.value = productData.category;
  editsubcategory.value = productData.sub_category;
  // Trigger the change event on category dropdown to populate subcategory
  editCategory.dispatchEvent(new Event("change"));
  editsubcategory.dispatchEvent(new Event("change"));
  currentDataId = productData.product_id;
};

// Function to edit the Product
function editTask(taskId, updatedProductData) {
  const taskIndex = data.findIndex((p) => p.product_id === taskId);
  console.log(updatedProductData);
  if (taskIndex !== -1) {
    // Update p properties without touching subtasks
    data[taskIndex].product_id = updatedProductData.editProduct_id;
    data[taskIndex].product_name = updatedProductData.editProduct_name;
    data[taskIndex].category = updatedProductData.editCategory;
    data[taskIndex].sub_category = updatedProductData.edit_sub_category;
    data[taskIndex].price = updatedProductData.edit_price;
    data[taskIndex].stock_quantity = updatedProductData.edit_stock_quantity;
    data[taskIndex].stock_info = updatedProductData.edit_stock_info;
    data[taskIndex].m_date = updatedProductData.edit_m_date;
    data[taskIndex].e_date = updatedProductData.edit_e_date;
    // Update product ID in transaction history
    updateProductIdInTransactionHistory(
      taskId,
      updatedProductData.editProduct_id
    );
    generateHTML(data);
  } else {
    console.log("Product not found");
  }
}

// Edit / Upadate Product Details -- Ending
//===========================================================================================================
// Function to delete a p by p ID
function deleteTask(taskId) {
  const taskIndex = data.findIndex((p) => p.product_id === taskId);
  if (taskIndex !== -1) {
    // Add the task ID to the deletedTaskId array
    deletedTaskId.push(taskId);

    // Remove the task from the data array
    data.splice(taskIndex, 1);
    console.log("Product deleted successfully.");
    generateHTML(data);
    displayData()
  } else {
    console.log("Product not found.");
  }
}

//Fetch Product Id
const fetchProductById = (productId) => {
  oldDataId = parseInt(productId)
  const result = data.find((product) => {
    return parseInt(product.product_id) === productId;
  });
  populateTaskForm(result);
  handleEditForm();
};
//===========================================================================================================

//Order products
const productDetailsFormOrder = document.getElementById("productDetailsForm");
const productIdDropdownOrder = document.getElementById("order_product_id");
const productNameInputOrder = document.getElementById("order_product_name");
const categoryInputOrder = document.getElementById("order_category");
const priceInputOrder = document.getElementById("order_price");
const stockQuantityInputOrder = document.getElementById("order_stock_quantity");
const stockInfoInputOrder = document.getElementById("order_stock_info");
const mDateInputOrder = document.getElementById("order_m_date");
const eDateInputOrder = document.getElementById("order_e_date");

// Sample product data

// Function to populate product dropdown options
function populateProductDropdownForOrder() {
  // Remove existing options except the first one
  while (productIdDropdownOrder.options.length > 1) {
    productIdDropdownOrder.remove(1);
  }

  data.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.product_id;
    option.textContent = product.product_id;
    productIdDropdownOrder.appendChild(option);
  });
  handleOrderForm();
}

// Function to update product details when product is selected
function updateProductDetails(productId) {
  const selectedProduct = data.find(
    (product) => product.product_id === parseInt(productId)
  );
  if (selectedProduct) {
    productNameInputOrder.value = selectedProduct.product_name;
    categoryInputOrder.value = selectedProduct.category;
    priceInputOrder.value = selectedProduct.price;
    // stockQuantityInputOrder.value = selectedProduct.stock_quantity;
    stockInfoInputOrder.value = selectedProduct.stock_info;
    mDateInputOrder.value = selectedProduct.m_date;
    eDateInputOrder.value = selectedProduct.e_date;
  }
}

// Event listener for product dropdown change
productIdDropdownOrder.addEventListener("change", (event) => {
  updateProductDetails(event.target.value);
});

function handleOrderExec(event) {
  event.preventDefault();
  const productId = parseInt(productIdDropdownOrder.value);
  const stockQuantity = parseInt(stockQuantityInputOrder.value);
  const selectedProduct = data.find(
    (product) => product.product_id === productId
  );

  if (selectedProduct) {
    if (stockQuantity <= selectedProduct.stock_quantity) {
      // Sufficient stock
      selectedProduct.stock_quantity -= stockQuantity;
      if (selectedProduct.stock_quantity === 0) {
        selectedProduct.stock_info = "Out of Stock";
      } else {
        selectedProduct.stock_info = "Available";
      }
      if (selectedProduct.stock_quantity === 0) {
        stockQuantityInputOrder.disabled = true;
      }
      stockInfoInputOrder.value = "Available";
      // Store transaction history
      const transaction = {
        product_id: productId,
        product_name: selectedProduct.product_name,
        category: selectedProduct.category,
        price: selectedProduct.price,
        quantity: stockQuantity,
        transaction_date: new Date().toISOString(),
      };
      transactionHistory.push(transaction);
      productDetailsFormOrder.reset();
      stockValidation.innerText = "";
      stockQuantityInputOrder.disabled = false;
      handleOrderFormHide();
      displayData()
    } else {
      // Insufficient stock
      stockInfoInputOrder.value = "Out of Stock";
      stockValidation.innerText = "Insufficient Stock Quantity";
    }
  }
  generateHTML(data);
  displayData()
}
// Event listener for view history button click
const historyContainer = document.getElementById("viewHistoryDataMain");
const viewHistoryButton = (selectedProductId) => {
  if (transactionHistory.length === 0) {
    viewHistoryData.style.display = "none";
  } else {
    if (selectedProductId !== null) {
      const history = transactionHistory.filter(
        (transaction) => transaction.product_id === selectedProductId
      );
      viewHistoryData.style.display = "block";
      displayHistory(history);
      displayData()
    }
  }
};


// Function to display transaction history
function displayHistory(history) {
  // Clear previous history
  historyContainer.innerHTML = "";
  // If history is empty, display "No data found" message
  if (history.length === 0) {
    const noDataMessage = document.createElement("p");
    noDataMessage.textContent = "No data found";
    historyContainer.appendChild(noDataMessage);
    return;
  }

  // Create table element
  const table = document.createElement("table");

  // Create table header row
  const headerRow = document.createElement("tr");
  const headers = ["Product Name", "Quantity", "Date"];
  headers.forEach((headerText) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // Iterate over each transaction and add to table
  history.forEach((transaction) => {
    const row = document.createElement("tr");

    // Add product name cell
    const productNameCell = document.createElement("td");
    productNameCell.textContent = transaction.product_name;
    row.appendChild(productNameCell);

    // Add quantity cell
    const quantityCell = document.createElement("td");
    quantityCell.textContent = transaction.quantity;
    row.appendChild(quantityCell);

    // Add date cell
    const dateCell = document.createElement("td");
    dateCell.textContent = new Date(transaction.transaction_date).toLocaleString();
    row.appendChild(dateCell);

    // Add row to the table
    table.appendChild(row);
  });

  // Append table to history container
  historyContainer.appendChild(table);
}


// Event listener for form submission
productDetailsFormOrder.addEventListener("submit", handleOrderExec);

// Function to update product ID in transaction history
function updateProductIdInTransactionHistory(oldProductId, newProductId) {
  transactionHistory.forEach((transaction) => {
    if (transaction.product_id === oldProductId) {
      transaction.product_id = newProductId;
    }
  });
}
//===========================================================================================================

function generateHTML(data) {
  let dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = ""; // Clear previous data
  if (data.length === 0) {
    // Show 'No Data' image if the array is empty
    dataContainer.innerHTML = `<img id="img" src="NoData.jpg" alt="No Data Available">`;
  } else {
    const renderData = data
      .map((p) => {
        // Create HTML for each product
        return `<tr id="trBody">
                <td>${p.product_id}</td>
                <td>${p.product_name}</td>
                <td>${p.category}</td>
                <td>${p.sub_category}</td>
                <td>${p.price}</td>
                <td>${p.stock_quantity}</td>
                <td>${p.stock_info}</td>
                <td>${p.m_date}</td>
                <td>${p.e_date}</td>
                <td id="action" ><div onclick = "fetchProductById(${p.product_id})"  class="actionContainer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                </svg></div><div id="deleteContainer" onclick="deleteTask(${p.product_id})"  class="actionContainer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
            </svg></div><div id="viewHistory" onclick = "viewHistoryButton(${p.product_id})" class="actionContainer"><img src="View History.png" ></div></td>
            </tr>`;
      })
      .join(""); // Join the array of strings into a single string

    dataContainer.innerHTML = renderData; // Insert the generated HTML into the table body
  }
}
//===========================================================================================================

//DOM Activitites
const toggleAddForm = document.getElementById("addProduct");
const toggleOrderForm = document.getElementById("orderContainer");
const toggleEditForm = document.getElementById("editProduct");
const handleAddForm = () => {
  toggleAddForm.style.display = "block";
  toggleEditForm.style.display = "none";
  toggleOrderForm.style.display = "none";
};
const handleOrderForm = () => {
  toggleOrderForm.style.display = "block";
  toggleAddForm.style.display = "none";
  toggleEditForm.style.display = "none";
};

const handleEditFormHide = () => {
  toggleEditForm.style.display = "none";
};
const handleOrderFormHide = () => {
  toggleOrderForm.style.display = "none";
};

const handleEditForm = () => {
  toggleEditForm.style.display = "block";
  toggleAddForm.style.display = "none";
  toggleOrderForm.style.display = "none";
};
const handleAddFormHide = () => {
  toggleAddForm.style.display = "none";
};
const handleHistoryData = () => {
  viewHistoryData.style.display = "none";
};
//=====================================================================================================

//Pagination
const itemsPerPage = 5;
let currentPage = 1;
generateHTML(data)
let totalPages = Math.ceil(data.length / itemsPerPage);
const dataContainer = document.getElementById('dataContainer');
const paginationContainer = document.getElementById('paginationContainer');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const currentPageSpan = document.getElementById('currentPage');  // Calculate total pages based on data length


// Function to display data for the current page
function displayData() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // Clear previous data
  dataContainer.innerHTML = '';

  // Display current page data
  paginatedData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.product_id}</td>
      <td>${item.product_name}</td>
      <td>${item.category}</td>
      <td>${item.sub_category}</td>
      <td>${item.price}</td>
      <td>${item.stock_quantity}</td>
      <td>${item.stock_info}</td>
      <td>${item.m_date}</td>
      <td>${item.e_date}</td>
      <td id="action" ><div onclick = "fetchProductById(${item.product_id})"  class="actionContainer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"></path>
                </svg></div><div id="deleteContainer" onclick="deleteTask(${item.product_id})"  class="actionContainer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
            </svg></div><div id="viewHistory" onclick = "viewHistoryButton(${item.product_id})" class="actionContainer"><img src="View History.png" ></div></td>
    `;
    dataContainer.appendChild(row);
  });

  // Update current page indicator
  currentPageSpan.textContent = `Page ${currentPage}`;
}

// Function to handle previous page button click
function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayData();
  }
}

// Function to handle next page button click
function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    displayData();
  }
}

// Event listeners for pagination buttons
prevPageBtn.addEventListener('click', goToPrevPage);
nextPageBtn.addEventListener('click', goToNextPage);

// Initial display
displayData();

//======================================================================================

//Search functionality
const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('dataContainer'); // Replace 'tableBody' with the ID of your table body

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  // Clear previous search results
  tableBody.innerHTML = '';
  if (searchTerm === '') {
    // If search input is empty, do nothing
    generateHTML(data)
    displayData()
    return;
  }
  // Filter data array based on search term
  const searchResults = data.filter(item => {
    // Modify this condition as per your data structure
    console.log(item)
    return (
      String(item.product_id).includes(searchTerm) ||
      item.product_name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      item.sub_category.toLowerCase().includes(searchTerm) ||
      String(item.price).includes(searchTerm) ||
      item.stock_info.includes(searchTerm) ||
      String(item.stock_quantity).toLowerCase().includes(searchTerm) ||
      item.m_date.includes(searchTerm) ||
      item.e_date.includes(searchTerm)
    );
  });

  // Display search results in table body
  searchResults.forEach(result => {
    const row = document.createElement('tr');
    Object.values(result).forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
});
//=====================================================================

//Sorting
const sortingDataDropdown = document.getElementById('sortingDataDropdown');

sortingDataDropdown.addEventListener('change', () => {
  const selectedAttribute = sortingDataDropdown.value;

  // Sort the data array based on the selected attribute
  data.sort((a, b) => {
    // Extract the attribute values from objects a and b
    const valueA = a[selectedAttribute];
    const valueB = b[selectedAttribute];

    // Compare the attribute values and return the result
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  }); 

  // Regenerate HTML with sorted data
  generateHTML(data);
  displayData()
});
//===========================================================================================================
//Stock Info handling


