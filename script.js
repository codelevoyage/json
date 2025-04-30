const userData = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    favoriteMeals: [
      "Sushi Roll",
      "Grilled Cheese Sandwich",
      "Beef Tacos"
    ],
    contact: {
      email: "alice@example.com",
      phone: "555-1234"
    }
};

  
  const jsonString = JSON.stringify(userData);
  const parsedData = JSON.parse(jsonString);

  console.log(jsonString);
  console.log(parsedData);
  
// Populate HTML elements
document.getElementById("fullName").textContent = `Full Name: ${parsedData.firstName} ${parsedData.lastName}`;
document.getElementById("age").textContent = `Age: ${parsedData.age}`;
document.getElementById("email").textContent = `Email: ${parsedData.contact.email}`;
document.getElementById("phone").textContent = `Phone: ${parsedData.contact.phone}`;
  
// Add favorite meals to the list 
const meals = document.getElementById("mealsList");
parsedData.favoriteMeals.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    meals.appendChild(li);    
});


  
;
  
  