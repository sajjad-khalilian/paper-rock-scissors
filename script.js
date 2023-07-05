const Choices = ["paper" , "rock" , "scissors"]


const userChoices = prompt("Please Enter a Choice")

if(userChoices){
    console.log(`Your Choices is ${userChoices}`)
}
else{
    console.log("Please valid a choices!")
}

const randomChoices = (Math.floor(Math.random() * 3))
const computerChoices = Choices[randomChoices]
console.log(`Computer Choice is ${computerChoices}`)

if(userChoices === computerChoices){
    console.log("its a tie")
}
else if(userChoices === "rock"){
    if(computerChoices === "scissors"){
        console.log("You win!")
    }
else{
    console.log("You Lose!")
}
}
else if(userChoices === "paper"){
    if(computerChoices === "rock"){
        console.log("You win!")
    }
else{
    console.log("You Lose!")
}
}
else if(userChoices === "scissors"){
    if(computerChoices === "paper"){
        console.log("You win!")
    }
else{
    console.log("You Lose!")
}
}