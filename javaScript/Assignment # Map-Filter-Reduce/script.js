var products = [
    {
      id: 101,
      title: "Sony LED 40 inch",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 102,
      title: "Mobile",
      variations: [
        { id: 1, color: "black", price: 50000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
        { id: 3, color: "silver", price: 55000, quantity: 8 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 4.5,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
        {
          id: 3,
          user: "Ali",
          rating: 5.0,
          title: "bad Product",
          comments: "ali It is a very good product ....",
          date: "04-02-2021",
          status: true,
        },
      ],
    },
    {
      id: 103,
      title: "Bike",
      variations: [
        { id: 1, color: "black", price: 55000, quantity: 5 },
        { id: 2, color: "red", price: 50000, quantity: 1 },
      ],
      reviews: [
        {
          id: 1,
          user: "Ahmad",
          rating: 4.0,
          title: "Good Product",
          comments: "It is a very good product ....",
          date: "06-02-2021",
          status: true,
        },
        {
          id: 2,
          user: "Zubair",
          rating: 3.0,
          title: "Very Good Product",
          comments: "zubair It is a very good product ....",
          date: "05-02-2021",
          status: false,
        },
      ],
    },
  ];




//   Question no: 01
// Use map to get an array of product titles

let getTittle = products.map((m) => m.title);
console.log(getTittle);






// Question no: 02
// Use filter to get all products that have variations in black color

let ans2 = products.filter((f) => f.variations.filter((n) => n.color === 'black').length);
console.log(ans2);





// Question no: 03
// Use reduce to calculate the total stock of all products
let totalStock = products.map((m)=> m.variations.reduce((acc,curr)=> acc + curr.quantity,0)).reduce((acc,curr)=> acc + curr)
console.log(totalStock);







// Question no: 04
// Use map and reduce to get the average rating of each product
let averageRating = products.map((m) => {
    let trueStatus = m.reviews.filter((f) => f.status === true )
    let totalRating = trueStatus.reduce((acc,curr)=> acc + curr.rating,0)
    return{
        title : m.title,
        avrgRating : totalRating / trueStatus.length
    }
})
console.log(averageRating);







// Question no: 05
// Use filter to get products that have at least one review with a rating of 5.0
let rating = products.filter((f) => f.reviews.filter((g) => g.rating === 5.0).length);
console.log(rating);






// Question no: 06
// Use map to format variations with product name

let ans6 = products.map((m) => {
    return{
        title : m.title,
        variations : m.variations
    }
})
console.log(ans6);     