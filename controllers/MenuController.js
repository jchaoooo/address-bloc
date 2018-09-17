const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an options below: ",
        choices: [
          "Add new contact",
<<<<<<< HEAD
          "Get current time",
=======
>>>>>>> 338f9fbae6bd2f0a0913f6451d0fae4fde1bd607
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  };

  main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
<<<<<<< HEAD
        case "Get current time":
          this.getDate();
          break;
=======
>>>>>>> 338f9fbae6bd2f0a0913f6451d0fae4fde1bd607
        case "Exit":
          this.exit();
        default:
          console.log("Invalid Input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err)
    });
  }

  clear() {
    console.log("\x1Bc")
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }

<<<<<<< HEAD
  getDate() {
    let date = new Date();
    let todaysDate = date.toDateString();
    let todaysTime = date.toTimeString()
    console.log(todaysDate + ' ' + todaysTime);
  }

=======
>>>>>>> 338f9fbae6bd2f0a0913f6451d0fae4fde1bd607
  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }
}
