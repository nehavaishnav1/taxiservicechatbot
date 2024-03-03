function getBotResponse(input) {

    if (input == "What services you offer") {
        return "We currently offer Uber-Moto,Uber Cab and Uver Auto ";
    } else if (input == "What is the customer service number?") {
        return "Here is the number :- 99979778xx";

    }

    
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}