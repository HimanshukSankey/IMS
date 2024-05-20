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



  
//   const newData = categoryData.map((cat)=> {return cat.subcategories})
const  newData = categoryData[0].subcategories
console.log(newData[newData.length -1])


//   console.log(JSON.stringify(newData))
// console.log(categoryData.categoryName)
//   console.log(newData[0][1])

  const newArray = categoryData.filter(cat => {return cat.categoryName === "Fruits"})
  newArray.forEach((category)=>{
    console.log(category.categoryName)
  })


  const orange = newArray[0].subcategories.filter((cat)=> {return cat === "Orange"})
  console.log(orange)

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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2024-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
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
      e_date: "2025-12-31",
    },
  ];



  const newDataPId = data.reduce((acc,product)=> acc + product.product_id,0)

  console.log(newDataPId)