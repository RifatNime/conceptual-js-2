//3. Write a function for a food delivery service that sells 'pizza' only. Each pizza costs 10$. This function takes the 'food name & quantity' as parameter and then return a custom message with order info. This function should be smart enough to handle wrong parameter inputs.

function pizzaPanda(foodName, quantity){
    if(foodName.toLowerCase() != 'pizza'){
        return 'Sorry, We sell pizza only.';
    }

    var price = 10 * quantity;
    var message = "Order Is successfull!!, \nOrder Info: \nFood Name: " + foodName + ",\nPrice: "+ price + '$'; 
    return message;
}
console.log(pizzaPanda("milk", 3));