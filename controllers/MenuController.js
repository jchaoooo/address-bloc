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
          "Get current time",
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
        case "Get current time":
          this.getDate();
          break;
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

  getDate() {
    let date = new Date();
    let todaysDate = date.toDateString();
    let todaysTime = date.toTimeString()
    console.log(todaysDate + ' ' + todaysTime);
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }

  remindMe() {
    this.clear();
    return "Learning is a life-long pursuit";
    this.main();
  }
}
