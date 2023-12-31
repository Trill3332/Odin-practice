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

function createUser (name) {
    const discordName = "@" + name;
  
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, discordName, getReputation, giveReputation };
  }
  
  const josh = createUser("josh");
  josh.giveReputation();
  josh.giveReputation();
  
  console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
  });
  // logs { discordName: "@josh", reputation: 2 }

  function createPlayer (name, level) {
    const user = createUser(name);
  
    const increaseLevel = () => level++;
    return Object.assign({}, user, { increaseLevel });
  }

  const joshPlayer = createPlayer("Beegii", 24);
  joshPlayer.increaseLevel();
  console.log({
    discordName : joshPlayer.discordName,
    level : joshPlayer.increaseLevel(),
    name : joshPlayer.name
  })