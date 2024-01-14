//Object Constructors

// const myObject = {
//     property : 'Value',
//     otherProperty : 77,
//     "obnoxious property" : function() {
//         console.log('Obnoxious');
//     }
// };

// function Player(name,marker) {
//     this.name = name;
//     this.marker = marker;
//     this.sayBeegii = function() {
//         console.log(this.name)
//     }
// }

// const player = new Player('Beegii','L');

// console.log(player.name)
// console.log(player.marker)
// player.sayBeegii();

// function Book(title,author,pages,read = false) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         console.log(title + ' ' + 'by ' + author + ' ' + ' with ' + pages + ' and you have ' + read)
//     }
// }

// const exampleBook = new Book('Cringers','CringeLords',10000,true)


// exampleBook.info();
// const personPrototype = {
//     greet() {
//         console.log('Hello,Im a Person')
//     }
// }

// const john = Object.create(personPrototype)

// john.greet()

//Factory Functions

// function createUser (name) {
//     const discordName = "@" + name;
  
//     let reputation = 0;
//     const getReputation = () => reputation;
//     const giveReputation = () => reputation++;
  
//     return { name, discordName, getReputation, giveReputation };
//   }
  
//   const josh = createUser("josh");
//   josh.giveReputation();
//   josh.giveReputation();
  
//   console.log({
//     discordName: josh.discordName,
//     reputation: josh.getReputation()
//   });
//   // logs { discordName: "@josh", reputation: 2 }

//   function createPlayer (name, level) {
//     const user = createUser(name);
  
//     const increaseLevel = () => level++;
//     return Object.assign({}, user, { increaseLevel });
//   }

//   const joshPlayer = createPlayer("Beegii", 24);
//   joshPlayer.increaseLevel();
//   console.log({
//     discordName : joshPlayer.discordName,
//     level : joshPlayer.increaseLevel(),
//     name : joshPlayer.name
//   })

//Class getters and setters

// class bankAccount {
//     constructor(accountHolder,balance) {
//         this._accountHolder = accountHolder;
//         this._balance = balance;
//         this._interestRate = 0.02;
//     }

//     get accountHolder() {
//         return this._accountHolder;
//     }
//     get balance() {
//         return this._balance;
//     }

//     deposit(amount) {
//         if(amount > 0 ) {
//             this._balance += amount;
//             console.log(`Deposited ${amount}.New balance : $ ${this._balance}`)
//         } else {
//             console.log('Invalid deposit amount')
//         }
//     }
//     withdraw(amount) {
//         if(amount > 0 && amount < this._balance) {
//             this._balance -= amount;
//             console.log(`Withdrawn ${amount},New Balance : $ ${this._balance}`)
//         }
//     }
//     get interest() {
//         return this._balance * this._interestRate;
//     }
// }
// const myAccount = new bankAccount("John Doe",1000);
// console.log(myAccount._accountHolder)
// console.log(myAccount._balance)
// myAccount.deposit(500);
// console.log(myAccount)
// myAccount.withdraw(1400);
// console.log(myAccount)
// console.log(myAccount.interest)

//JS Classes Challenge 1 
// class Animal {
//     constructor(name,sound) {
//         this._name = name;
//         this._sound = sound;
//     }
//     makeSound() {
//         console.log(`${this._name} makes this sound : ${this._sound}`)
//     } 
// }

// let newAnimal = new Animal("Dog","Woof")

// newAnimal.makeSound();
//JS Classes Challenge 2 
// class Book {
//     constructor(title,author,publishedYear) {
//         this._title = title;
//         this._author = author;
//         this._year = publishedYear
//     }
//     displayInfo() {
//         console.log(`This book is named : ${this._title} by ${this._author} in : ${this._year},`)
//     }
// }

// let newBook = new Book("Beegii","CasinoLoser","2024");

// newBook.displayInfo();