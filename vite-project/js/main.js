import '../styles/style.css'

const DOMSelectors = {
  startbutton: document.querySelector('.startbutton'),
  cardcontainer: document.querySelector('.cardcontainer'),
  nextbutton: null,
  skipbutton: null,
  matchaicecreambutton: null,
  notmatchaicecream: null,
  tryagain: null,
  nextscoopsbutton: null,
  nottwoscoopbutton: null,
  twoscoopbutton: null,
  nextsprinklebutton: null,
  yessprinkles: null,
  nosprinkles: null,
  nextwhippedcreambutton: null,
  yeswhippedcream: null,
  nowhippedcream: null,
  nextcherrybutton: null,
  yescherries: null, 
  nocherries: null,
  tomatosouprecipe: null,
  skipbutton1: null,
  nobutter: null,
  butterbutton: null,
  tryagain1: null,
  nextbutterquantity: null,
  nothalfbutter: null,
  halfbutter: null, 
  nextonion: null,
  onionsoup: null, 
  noonionsoup: null,
  nextonionchopped: null,  
  notdicedonions: null,
  dicedonions: null,
  //intentional blank; properties will be added on later 
}

function clearHTML(){
  DOMSelectors.cardcontainer.innerHTML='';
}

function gatheringredients() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>First Gather Your Ingredients!</h1>
    <h2>Prepare to Memorize!</h2>
    <button class="nextbutton">Next</button>
    </div>`
  )
  DOMSelectors.nextbutton = document.querySelector('.nextbutton');
  DOMSelectors.nextbutton.addEventListener('click',icecreamingredients);
}

DOMSelectors.startbutton.addEventListener('click', gatheringredients);

function icecreamingredients() {
 clearHTML()
 DOMSelectors.cardcontainer.insertAdjacentHTML(
  "beforeend",
  `<div class="card">
  <h3>Time Limit: 10 seconds</h3>
  <h1 class="header">Ice Cream</h1>
  <h2>Ingredients:</h2>
  <h2>2 Scoops of Matcha Ice Cream</h2>
  <h2>Whipped Cream</h2>
  <h2>Maraschino Cherries</h2>
  <button class="skipbutton">Skip</button>
  </div>`
 )
  DOMSelectors.skipbutton = document.querySelector('.skipbutton');
  DOMSelectors.skipbutton.addEventListener('click', icecreamflavor);
}; 

function icecreamflavor() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>What flavor of ice cream do you get?</h1>
    <button class="notmatchaicecream">Vanilla Bean</button>
    <button class="notmatchaicecream">Chocolate</button>
    <button class="matchaicecreambutton">Matcha</button>
    </div>`
  )
  DOMSelectors.notmatchaicecream = document.querySelectorAll('.notmatchaicecream')
  DOMSelectors.notmatchaicecream.forEach(button => {
    button.addEventListener('click', errormessage)
  });
  DOMSelectors.matchaicecreambutton = document.querySelector('.matchaicecreambutton');
  DOMSelectors.matchaicecreambutton.addEventListener('click',congratsmessage)
}

function errormessage() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h1>Try again...</h1>
      <button class="tryagain">Try Again</button>
    </div>`
  );
  DOMSelectors.tryagain = document.querySelector('.tryagain');
  DOMSelectors.tryagain.addEventListener('click', icecreamingredients);
}

function congratsmessage() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>Correct! Onto the next step</h1>
      <button class="nextscoopsbutton">Next</button>
      </div>`
  )
  DOMSelectors.nextscoopsbutton = document.querySelector('.nextscoopsbutton');
  DOMSelectors.nextscoopsbutton.addEventListener('click', numberofscoops);
}

function numberofscoops(){
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>How many scoops of ice cream?</h1>
    <button class="nottwoscoopbutton">One scoop</button>
    <button class="twoscoopbutton">Two scoops</button>
    <button class="nottwoscoopbutton">Three scoops</button>
    </div>`
  )
  DOMSelectors.nottwoscoopbutton = document.querySelectorAll('.nottwoscoopbutton')
  DOMSelectors.nottwoscoopbutton.forEach(button =>{
    button.addEventListener('click',errormessage)
  })
  DOMSelectors.twoscoopbutton = document.querySelector('.twoscoopbutton')
  DOMSelectors.twoscoopbutton.addEventListener('click', congratsmessage1)
}

function congratsmessage1() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>Correct! Onto the next step</h1>
      <button class="nextsprinklebutton">Next</button>
      </div>`
  )
  DOMSelectors.nextscoopsbutton = document.querySelector('.nextsprinklebutton');
  DOMSelectors.nextscoopsbutton.addEventListener('click', sprinkles);
}

function sprinkles(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>Do you put sprinkles?</h1>
    <button class="yessprinkles">Yes</button>
    <button class="nosprinkles">No</button>
    </div>`
  )
  DOMSelectors.yessprinkles = document.querySelector('.yessprinkles')
  DOMSelectors.yessprinkles.addEventListener('click',errormessage)
  DOMSelectors.nosprinkles = document.querySelector('.nosprinkles')
  DOMSelectors.nosprinkles.addEventListener('click', congratsmessage2)
}

function congratsmessage2() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>Correct! Onto the next step</h1>
      <button class="nextwhippedcreambutton">Next</button>
      </div>`
  )
  DOMSelectors.nextwhippedcreambutton = document.querySelector('.nextwhippedcreambutton');
  DOMSelectors.nextwhippedcreambutton.addEventListener('click', whippedcream);
}

function whippedcream(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>Do you put whipped cream?</h1>
    <button class="yeswhippedcream">Yes</button>
    <button class ="nowhippedcream">No</button>
    </div>`
  )
  DOMSelectors.yeswhippedcream = document.querySelector('.yeswhippedcream');
  DOMSelectors.yeswhippedcream.addEventListener('click',congratsmessage3);
  DOMSelectors.nowhippedcream = document.querySelector('.nowhippedcream');
  DOMSelectors.nowhippedcream.addEventListener('click', errormessage);
}

function congratsmessage3() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>Correct! Onto the next step</h1>
      <button class="nextcherrybutton">Next</button>
      </div>`
  )
  DOMSelectors.nextcherrybutton = document.querySelector('.nextcherrybutton');
  DOMSelectors.nextcherrybutton.addEventListener('click', cherry);
}

function cherry(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>Do you add Maraschino Cherries?</h1>
    <button class="yescherries">Yes</button>
    <button class="nocherries">No</button>
    </div>`
  )
 DOMSelectors.yescherries = document.querySelector('.yescherries');
 DOMSelectors.yescherries.addEventListener('click',congratsmessage4);
 DOMSelectors.nocherries = document.querySelector('.nocherries');
 DOMSelectors.nocherries.addEventListener('click',errormessage);
}

function congratsmessage4() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
      <h1>Congratulations! You finished your first order. Time to pick up the next one! The waiter broke up the order into parts because he knows you're a beginner.</h1>
      <button class="tomatosouprecipe">Next order</button>
      </div>`
  )
  DOMSelectors.tomatosouprecipe = document.querySelector('.tomatosouprecipe');
  DOMSelectors.tomatosouprecipe.addEventListener('click', tomatosoupstep1);
}

function tomatosoupstep1(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
   "beforeend",
   `<div class="card">
   <h3>Time Limit: 10 seconds</h3>
   <h1 class="header">Tomato Soup</h1>
   <h2>Step 1:</h2>
   <h2>Melt in half a stick of butter </h2>
   <h2>Saute medium diced onions until soft and golden</h2>
   <h2>Add 3 minced garlic cloves</h2>
   <button class="skipbutton1">Skip</button>
   </div>`
  )
  DOMSelectors.skipbutton = document.querySelector('.skipbutton1')
  DOMSelectors.skipbutton.addEventListener('click',buttersoup)
}

function buttersoup(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h1>What do you grab first?</h1>
    <button class = "nobutter">Oil</button>
    <button class = "nobutter">Margarine</button>
    <button class = "butterbutton"h>Butter</button>
    <button class = "nobutter">Vegetable Shortining</button>
    </div>`
  ) 
  DOMSelectors.nobutter = document.querySelectorAll('.nobutter')
  DOMSelectors.nobutter.forEach(button => {
    button.addEventListener('click',errormessage1)
  })
  DOMSelectors.butterbutton = document.querySelector('.butterbutton')
  DOMSelectors.butterbutton.addEventListener('click',yepmessage)
}

function errormessage1() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h1>Try again...</h1>
      <button class="tryagain1">Try Again</button>
    </div>`
  );
  DOMSelectors.tryagain1 = document.querySelector('.tryagain1');
  DOMSelectors.tryagain1.addEventListener('click', tomatosoupstep1);
}

function yepmessage(){
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
      <h1>Correct!</h1>
      <button class="nextbutterquantity">Next</button>
    </div>`
  )
  DOMSelectors.nextbutterquantity = document.querySelector('.nextbutterquantity')
  DOMSelectors.nextbutterquantity.addEventListener('click',butterquantitysoup)
}

function butterquantitysoup() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h1>How much butter do you add?</h1>
    <button class= "nothalfbutter">1 tablespoon</button>
    <button class= "nothalfbutter">2 tablespoons</button>
    <button class= "nothalfbutter">1 stick</button>
    <button class= "halfbutter">1/2 stick</button>
    </div>`
  )
  DOMSelectors.nothalfbutter = document.querySelectorAll('.nothalfbutter')
  DOMSelectors.nothalfbutter.forEach(button => {
    button.addEventListener('click',errormessage1)
  });
  DOMSelectors.halfbutter = document.querySelector('.halfbutter')
  DOMSelectors.halfbutter.addEventListener('click',yepmessage1)
}

function yepmessage1(){
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
      <h1>Correct!</h1>
      <button class="nextonion">Next</button>
    </div>`
  )
  DOMSelectors.nextonion = document.querySelector('.nextonion')
  DOMSelectors.nextonion.addEventListener('click', onionsoup)
}

function onionsoup(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = card>
    <h1>What do you get next?</h1>
    <button class = "onionsoup">Onions</button>
    <button class = "noonionsoup">Tomatoes</button>
    <button class = "noonionsoup">Cheese</button>
    <button class = "noonionsoup">Tomato Paste</button>
    <button class = "noonionsoup">Tomato Sauce</button>
    </div>`
  )
  DOMSelectors.onionsoup = document.querySelector('.onionsoup')
  DOMSelectors.onionsoup.addEventListener('click',yepmessage2)
  DOMSelectors.noonionsoup = document.querySelectorAll('.noonionsoup')
  DOMSelectors.noonionsoup.forEach(button => {
    button.addEventListener('click',errormessage1)
  });
}

function yepmessage2(){
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
      <h1>Correct!</h1>
      <button class="nextonionchopped">Next</button>
    </div>`
  )
  DOMSelectors.nextonionchopped = document.querySelector('.nextonionchopped')
  DOMSelectors.nextonionchopped.addEventListener('click', onionchopped)
}

function onionchopped(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
    <h1>How do you chop the onions?</h1>
    <button class = "notdicedonions">Minced</button>
    <button class = "notdicedonions">Thin rings</button>
    <button class = "notdicedonions">Rings</button>
    <button clsss = "dicedonions">Diced</button>
    </div>`
  )
  DOMSelectors.notdicedonions = document.querySelectorAll('.notdicedonions')
  DOMSelectors.nothalfbutter.forEach(button =>{
    button.addEventListener('click',errormessage1)
  })
  DOMSelectors.dicedonions = document.querySelector('.dicedonions')
  DOMSelectors.dicedonions.addEventListener('click',yepmessage3)
}

function yepmessage3(){
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
      <h1>Correct!</h1>
      <button class="nextonionchopped">Next</button>
    </div>`
  )
  DOMSelectors.nextonionchopped = document.querySelector('.nextonionchopped')
  DOMSelectors.nextonionchopped.addEventListener('click', onionchopped)
}