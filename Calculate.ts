import inquirer from "inquirer";
// import prompt from "inquirer/lib/ui/prompt";

const answers : {
    First_Number : number,
    Second_Number : number,
    Opreator : string

} = await inquirer.prompt([
    {
        type : "number",
        name : "First_Number",
        message : "put your first intiger"
    },

    {
        type : "number",
        name : "Second_Number",
        message : "put your first intiger"
    },

    {
        type : "String",
        name : "Opreator",
        message : "Select your Opreator"
    }
])

if(answers.First_Number && answers.Second_Number && answers.Opreator){
    if(answers.Opreator === "+"){
        console.log("Addition\t",answers.First_Number + answers.Second_Number )
    }
    if(answers.Opreator === "-"){
        console.log("Subtraction\t",answers.First_Number - answers.Second_Number )
    }
    if(answers.Opreator === "/"){
        console.log("Division\t",answers.First_Number / answers.Second_Number )
    }
    if(answers.Opreator === "*"){
        console.log("Multiplication\t",answers.First_Number * answers.Second_Number )
    }
}else{
  console.log("enter Valid number")
}