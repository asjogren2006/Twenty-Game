points1 = 0

points2 = 0

var i = 1

var counter = []

var usercounter = []

var compcounter = []

var lcomputer = []

var luser = []

alert("We will be playing a game called 'Twenty'. To win this game, you have to draw numbers until you get close to 20 but not over twenty. If you and the computer are under 20, you need to be closer to win. If you need another number press, `Y`, if you want to stop playing press, 'N'")

do {
 
  do {
   
    var random1 = Math.floor(Math.random() * 10)
     
    var points1 = (points1 + random1);
   
    alert(`The computer drew ${random1}. Computers total is ${points1}`)
   
  } while (points1 <= 16);
 
  alert(`The computers total is ${points1}`)
   
  do {
    var random2 = Math.floor(Math.random() * 10)
   
    var points2 = (points2+random2)
   
    var useran = prompt(`You just drew ${random2} and your new total is ${points2}, press "N" to stop.`)
   
     
  } while (points2 <= 20 && useran != "N")
 
  if (points2 > 20)
 
  alert(`Computers final score is ${points1} and your score is ${points2}`)

  if (points1 > points2 && points1 < 20) {
    alert("Computer won, they were closer to 20.")  
    luser.push(i)
  }

  if (points2 > points1 && points2 < 20) {
    alert("You're closer to 20, user wins!")
    usercounter.push(i)
    lcomputer.push(i)
  }

  if (points2 == 20) {
    alert("User wins!")
    usercounter.push(i)
    lcomputer.push(i)
  }

  if (points1 == 20) {
    alert("Comuter wins!")
    compcounter.push(i)
    luser.push(i)
  }
 
  if (points1 > 20 && points2 < points1) {
   alert("Computer loses, you win!")
   usercounter.push(i)
   lcomputer.push(i)
  }
 
  if (points2 > 20 && points1 < points2) {
    alert("You lose, computer wins!")
    compcounter.push(i)
    luser.push(i)
  }

 
 
  if (points2 == points1) {
    alert("You tied!")
    usercounter.push(i)
    compcounter.push(i)
  }
 
  var main = prompt(`Would you like to play again? Press "Y" if yes, "N" if no.`)

  counter++

  console.log(counter)

  points2 = 0

  points1 = 0
 
} while (main != "N")

alert(`Thanks for playing, you played ${counter} times. You won ${usercounter.length} times and lost ${luser.length}. Computer won ${compcounter.length} times and lost ${lcomputer.length}`)


// comment