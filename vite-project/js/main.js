import '../styles/style.css'

const DOMSelectors = {
  startbutton: document.querySelector('.startbutton'),
  cardcontainer: document.querySelector('.cardcontainer'),
  nextbutton: null,
  skipbutton: null,
  vanillaicecreambutton: null,
  matchaicecreambutton: null,
  chocolateicecreambutton: null,
  tryagain: null,
  nextscoopsbutton: null,
  onescoopbutton: null,
  twoscoopbutton: null,
  threescoopbutton: null,
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
    <button class="vanillaicecreambutton">Vanilla Bean</button>
    <button class="chocolateicecreambutton">Chocolate</button>
    <button class="matchaicecreambutton">Matcha</button>
    </div>`
  )
  DOMSelectors.chocolateicecreambutton = document.querySelector('.chocolateicecreambutton');
  DOMSelectors.chocolateicecreambutton.addEventListener('click', errormessage);
  DOMSelectors.vanillaicecreambutton = document.querySelector('.vanillaicecreambutton');
  DOMSelectors.vanillaicecreambutton.addEventListener('click',errormessage)
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
    <button class="onescoopbutton">One scoop</button>
    <button class="twoscoopbutton">Two scoops</button>
    <button class="threescoopbutton">Three scoops</button>
    </div>`
  )
  DOMSelectors.onescoopbutton = document.querySelector('.onescoopbutton');
  DOMSelectors.onescoopbutton.addEventListener('click', errormessage);
  DOMSelectors.twoscoopbutton = document.querySelector('.twoscoopbutton')
  DOMSelectors.twoscoopbutton.addEventListener('click', congratsmessage1)
  DOMSelectors.threescoopbutton = document.querySelector('.threescoopbutton')
  DOMSelectors.threescoopbutton.addEventListener('click',errormessage)
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
  DOMSelectors.greeksaladrecipe = document.querySelector('.tomatosouprecipe');
  DOMSelectors.greeksaladrecipe.addEventListener('click', tomatosoupstep1);
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
    <button>Oil</button>
    <button>Margarine</button>
    <button>Butter</button>
    <button>Vegetable Shortining</button>
    </div>`
  ) 
}