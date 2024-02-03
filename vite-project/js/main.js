import { fooditem } from './array';
import '../styles/style.css';

const DOMSelectors = {
  startbutton: document.querySelector('.startbutton'),
  cardcontainer: document.querySelector('.cardcontainer'),
  sparklingwaterrecipe: document.querySelector('.sparklingwaterrecipe'),
  icecreamrecipe: document.querySelector('.icecreamrecipe'),
  tomatosouprecipe: document.querySelector('.tomatosouprecipe'),
  greeksaladrecipe: document.querySelector('.greeksaladrecipe'),
  shrimpcocktailrecipe: document.querySelector('.shrimpcocktailrecipe'),
  sushiplatterrecipe: document.querySelector('.sushiplatterrecipe'),
  salmonfilletrecipe: document.querySelector('.salmonfilletrecipe'),
  crepesrecipe: document.querySelector('.crepesrecipe'),
  butteredlobsterrecipe: document.querySelector('.butteredlobsterrecipe'),
  rackoflambrecipe: document.querySelector('.rackoflambrecipe'),
  mangocheesecakerecipe: document.querySelector('.mangocheesecakerecipe'),
  macaroonsrecipe: document.querySelector('.macaroonsrecipe'),
  pastarecipe: document.querySelector('.pastarecipe'),
  wagyurecipe: document.querySelector('.wagyurecipe'),
  checkbutton: document.querySelector('.checkbutton'),
};

function clearHTML() {
  DOMSelectors.cardcontainer.innerHTML = '';
}

DOMSelectors.startbutton.addEventListener('click', () => makeacard(fooditem));

function makeacard(arr) {
  clearHTML();
  arr.forEach((fooditem) => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class="recipe">
        <h4>${fooditem.name}</h4>
        <h5>Difficulty Level:${fooditem.difficulty}</h5>
        ${fooditem.button}
      </div>`
    );
  });
  sparklingwatereventlistener();
  icecreameventlistener();
  tomatosoupeventlistener();
  greeksaladeventlistener();
  shrimpcocktaileventlistener();
  sushiplattereventlistener();
  salmonfilleteventlistener();
  crepeseventlistener();
  butteredlobstereventlistener();
  rackoflambeventlistener();
  macaroonseventlistener();
  mangocheesecakeeventlistener();
  pastaeventlistener();
  wagyueventlistener();
}

function sparklingwatereventlistener() {
  DOMSelectors.sparklingwaterrecipe = document.querySelector('.sparklingwaterrecipe');
  DOMSelectors.sparklingwaterrecipe.addEventListener('click', sparklingwateringredients);
}

function icecreameventlistener() {
  DOMSelectors.icecreamrecipe = document.querySelector('.icecreamrecipe');
  DOMSelectors.icecreamrecipe.addEventListener('click', icecreamingredients);
}

function tomatosoupeventlistener() {
  DOMSelectors.tomatosouprecipe = document.querySelector('.tomatosouprecipe');
  DOMSelectors.tomatosouprecipe.addEventListener('click', tomatosoupstep1);
}

function greeksaladeventlistener() {
  DOMSelectors.greeksaladrecipe = document.querySelector('.greeksaladrecipe');
  DOMSelectors.greeksaladrecipe.addEventListener('click', greeksaladstep1);
}

function shrimpcocktaileventlistener() {
  DOMSelectors.shrimpcocktailrecipe = document.querySelector('.shrimpcocktailrecipe');
  DOMSelectors.shrimpcocktailrecipe.addEventListener('click', shrimpcocktailstep1);
}

function sushiplattereventlistener() {
  DOMSelectors.sushiplatterrecipe = document.querySelector('.sushiplatterrecipe');
  DOMSelectors.sushiplatterrecipe.addEventListener('click', sushiplatterstep1);
}

function salmonfilleteventlistener() {
  DOMSelectors.salmonfilletrecipe = document.querySelector('.salmonfilletrecipe');
  DOMSelectors.salmonfilletrecipe.addEventListener('click', salmonfilletstep1);
}

function crepeseventlistener() {
  DOMSelectors.crepesrecipe = document.querySelector('.crepesrecipe');
  DOMSelectors.crepesrecipe.addEventListener('click', crepestep1);
}

function butteredlobstereventlistener() {
  DOMSelectors.butteredlobsterrecipe = document.querySelector('.butteredlobsterrecipe');
  DOMSelectors.butteredlobsterrecipe.addEventListener('click', butteredlobsterstep1);
}

function rackoflambeventlistener() {
  DOMSelectors.rackoflambrecipe = document.querySelector('.rackoflambrecipe');
  DOMSelectors.rackoflambrecipe.addEventListener('click', rackoflambstep1);
}

function macaroonseventlistener() {
  DOMSelectors.macaroonsrecipe = document.querySelector('.macaroonsrecipe');
  DOMSelectors.macaroonsrecipe.addEventListener('click', macaroonstep1);
}

function mangocheesecakeeventlistener() {
  DOMSelectors.mangocheesecakerecipe = document.querySelector('.mangocheesecakerecipe');
  DOMSelectors.mangocheesecakerecipe.addEventListener('click', mangocheesecakestep1);
}

function pastaeventlistener() {
  DOMSelectors.pastarecipe = document.querySelector('.pastarecipe');
  DOMSelectors.pastarecipe.addEventListener('click', pastastep1);
}

function wagyueventlistener() {
  DOMSelectors.wagyurecipe = document.querySelector('.wagyurecipe');
  DOMSelectors.wagyurecipe.addEventListener('click', wagyustep1);
}

function wrongsparklingwaterchoice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtosparklingwateringredients">Back to recipe</button>
    </div>`
  )
  DOMSelectors.backtosparklingwateringredients = document.querySelector('.backtosparklingwateringredients')
  DOMSelectors.backtosparklingwateringredients.addEventListener('click', sparklingwateringredients)
}

function sparklingwateringredients() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="card">
      <h1>Sparkling Water</h1>
      <h2>Ingredients:</h2>
      <h4>Sparkling Water</h4>
      <h4>Crushed Ice</h4>
      <button class="sparklingwaterskipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.sparklingwaterskipbutton = document.querySelector('.sparklingwaterskipbutton');
  DOMSelectors.sparklingwaterskipbutton.addEventListener('click', sparklingwaterquestions);
}

function sparklingwaterquestions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="question">
      <h4>What drink do you get?</h4>
      <button class="sparklingwater">Sparkling Water</button>
      <button class="notsparklingwater">Water</button>
      <button class="notsparklingwater">Tea</button>
    </div>`
  );

  DOMSelectors.sparklingwater = document.querySelector('.sparklingwater');
  DOMSelectors.sparklingwater.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class="question">
        <h4>What kind of ice?</h4>
        <button class="crushedice">Crushed Ice</button>
        <button class="notcrushedice">Cubed Ice</button>
        <button class="notcrushedice">Ice Pellets</button>
      </div>`
    );
    DOMSelectors.crushedice = document.querySelector('.crushedice');
    DOMSelectors.crushedice.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class="question">
          <h5><button class="submitsparklingwater">Submit Dish</button></h5>
        </div>`
      );
      DOMSelectors.submitsparklingwater = document.querySelector('.submitsparklingwater');
      DOMSelectors.submitsparklingwater.addEventListener('click', () => {
        makeacard(fooditem);
      });
    });
    DOMSelectors.notcrushedice = document.querySelectorAll('.notcrushedice');
    DOMSelectors.notcrushedice.forEach((button) => {
      button.addEventListener('click', () => {
        wrongsparklingwaterchoice()
      });
    });
  });
  DOMSelectors.notsparklingwater = document.querySelectorAll('.notsparklingwater');
  DOMSelectors.notsparklingwater.forEach((button) => {
    button.addEventListener('click', () => {
      wrongsparklingwaterchoice()
    });
  });
}

function icecreamingredients() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="card">
      <h1>Ice Cream</h1>
      <h2>Ingredients:</h2>
      <h4>2 Scoops of Matcha Ice Cream</h4>
      <h4>Whipped Cream</h4>
      <h4>Maraschino Cherries</h4>
      <button class="icecreamskipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.icecreamskipbutton = document.querySelector('.icecreamskipbutton');
  DOMSelectors.icecreamskipbutton.addEventListener('click', icecreamquestions);
}

function icecreamquestions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="question">
      <h4>What flavor of ice cream do you get?</h4>
      <button class="wrongicecreamflavor">Vanilla Bean</button>
      <button class="wrongicecreamflavor">Chocolate</button>
      <button class="righticecreamflavor">Matcha</button>
    </div>`
  );
  DOMSelectors.righticecreamflavor = document.querySelector('.righticecreamflavor');
  DOMSelectors.righticecreamflavor.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class="question">
        <h4>How many scoops of ice cream?</h4>
        <button class="wrongicecreamscoops">One scoop</button>
        <button class="righticecreamscoops">Two scoops</button>
        <button class="wrongicecreamscoops">Three scoops</button>
      </div>`
    );
    DOMSelectors.righticecreamscoops = document.querySelector('.righticecreamscoops');
    DOMSelectors.righticecreamscoops.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class="question">
          <h4>Do you put sprinkles?</h4>
          <button class="wrongicecreamsprinkles">Yes</button>
          <button class="righticecreamsprinkles">No</button>
        </div>`
      );
      DOMSelectors.righticecreamsprinkles = document.querySelector('.righticecreamsprinkles');
      DOMSelectors.righticecreamsprinkles.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class="question">
            <h4>Do you put whipped cream?</h4>
            <button class="righticecreamwhippedcream">Yes</button>
            <button class="wrongicecreamwhippedcream">No</button>
          </div>`
        );
        DOMSelectors.righticecreamwhippedcream = document.querySelector('.righticecreamwhippedcream');
        DOMSelectors.righticecreamwhippedcream.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class="question">
              <h4>Do you add Maraschino Cherries?</h4>
              <button class="righticecreammaraschinocherries">Yes</button>
              <button class="wrongicecreammaraschinocherries">No</button>
            </div>`
          );
          DOMSelectors.righticecreammaraschinocherries = document.querySelector('.righticecreammaraschinocherries');
          DOMSelectors.righticecreammaraschinocherries.addEventListener('click', () => {
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<button class = submiticecream>Submit Dish</button>`
            );
            DOMSelectors.submiticecream = document.querySelector('.submiticecream');
            DOMSelectors.submiticecream.addEventListener('click', () => {
              makeacard(fooditem);
            });
          });
          DOMSelectors.wrongicecreammaraschinocherries = document.querySelectorAll('.wrongicecreammaraschinocherries');
          DOMSelectors.wrongicecreammaraschinocherries.forEach((button) => {
            button.addEventListener('click', () => {
              clearHTML();
              DOMSelectors.cardcontainer.insertAdjacentHTML(
                'beforeend',
                `<div class="card">
                  <h2>Try again...</h2>
                  <button class="backtoicecreamrecipe">Back to recipe</button>
                </div>`
              );
              DOMSelectors.backtoicecreamrecipe = document.querySelector('.backtoicecreamrecipe');
              DOMSelectors.backtoicecreamrecipe.addEventListener('click', () => {
                icecreamingredients();
              });
            });
          });
        });
        DOMSelectors.wrongicecreamwhippedcream = document.querySelectorAll('.wrongicecreamwhippedcream');
        DOMSelectors.wrongicecreamwhippedcream.forEach((button) => {
          button.addEventListener('click', () => {
            clearHTML();
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<div class="card">
                <h2>Try again...</h2>
                <button class="backtoicecreamrecipe">Back to recipe</button>
              </div>`
            );
            DOMSelectors.backtoicecreamrecipe = document.querySelector('.backtoicecreamrecipe');
            DOMSelectors.backtoicecreamrecipe.addEventListener('click', () => {
              icecreamingredients();
            });
          });
        });
      });
      DOMSelectors.wrongicecreamsprinkles = document.querySelectorAll('.wrongicecreamsprinkles');
      DOMSelectors.wrongicecreamsprinkles.forEach((button) => {
        button.addEventListener('click', () => {
          clearHTML();
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class="card">
              <h2>Try again...</h2>
              <button class="backtoicecreamrecipe">Back to recipe</button>
            </div>`
          );
          DOMSelectors.backtoicecreamrecipe = document.querySelector('.backtoicecreamrecipe');
          DOMSelectors.backtoicecreamrecipe.addEventListener('click', () => {
            icecreamingredients();
          });
        });
      });
    });
    DOMSelectors.wrongicecreamscoops = document.querySelectorAll('.wrongicecreamscoops');
    DOMSelectors.wrongicecreamscoops.forEach((button) => {
      button.addEventListener('click', () => {
        clearHTML();
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class="card">
            <h2>Try again...</h2>
            <button class="backtoicecreamrecipe">Back to recipe</button>
          </div>`
        );
        DOMSelectors.backtoicecreamrecipe = document.querySelector('.backtoicecreamrecipe');
        DOMSelectors.backtoicecreamrecipe.addEventListener('click', () => {
          icecreamingredients();
        });
      });
    });
  });
  DOMSelectors.wrongicecreamflavor = document.querySelectorAll('.wrongicecreamflavor');
  DOMSelectors.wrongicecreamflavor.forEach((button) => {
    button.addEventListener('click', () => {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class="card">
          <h2>Try again...</h2>
          <button class="backtoicecreamrecipe">Back to recipe</button>
        </div>`
      );
      DOMSelectors.backtoicecreamrecipe = document.querySelector('.backtoicecreamrecipe');
      DOMSelectors.backtoicecreamrecipe.addEventListener('click', () => {
        icecreamingredients();
      });
    });
  });
}

function tomatosoupstep1(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
   'beforeend',
   `<div class = "card">
   <h1>Tomato Soup</h1>
   <h4>Step 1:</h4>
   <h4>Melt in half a stick of butter </h4>
   <h4>Saute diced onions until soft and golden</h4>
   <h4>Add 3 minced garlic cloves</h4>
   <button class = "tomatosoupstep1skipbutton">Skip</button>
   </div>`
  )
  DOMSelectors.tomatosoupstep1skipbutton = document.querySelector('.tomatosoupstep1skipbutton')
  DOMSelectors.tomatosoupstep1skipbutton.addEventListener('click',tomatosoupstep1questions)
}

function tomatosoupstep1questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>How much butter do you add?</h2>
    <button class = "butterquantity">1/4 stick</button>
    <button class = "butterquantity">1/2 stick</button>
    <button class = "butterquantity">3/4 stick</button>
    <button class = "butterquantity">1 stick</button>
    <h4>How do you cut the onion?</h4>
    <button class = "tomatosouponioncut">Minced</button>
    <button class = "tomatosouponioncut">Rings</button>
    <button class = "tomatosouponioncut">Uncut</button>
    <button class = "tomatosouponioncut">Diced</button>
    <h4>How many garlic cloves do you add?</h4>
    <button class = "tomatosoupgarlicquantity">1/2 Clove</button>
    <button class = "tomatosoupgarlicquantity">1 Clove</button>
    <button class = "tomatosoupgarlicquantity">2 Cloves</button>
    <button class = "tomatosoupgarlicquantity">3 Cloves</button>
    <h5><button class = "submittomatosoupstep1">Next Step</button></h5>
    </div>`
  )
  DOMSelectors.submittomatosoupstep1 = document.querySelector('.submittomatosoupstep1')
  DOMSelectors.submittomatosoupstep1.addEventListener('click', () => {
    if (righttomatosoupstep1choices()) {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Correct!</h1>
          <button class = "donetomatosoupstep1">Next step</button>
        </div>`
      );
      DOMSelectors.donetomatosoupstep1 = document.querySelector('.donetomatosoupstep1');
      DOMSelectors.donetomatosoupstep1.addEventListener('click', () => tomatosoupstep2);
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongtomatosoupstep1">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongtomatosoupstep1 = document.querySelector('.wrongtomatosoupstep1');
      DOMSelectors.wrongtomatosoupstep1.addEventListener('click', tomatosoupstep2);
      //put this back to tomatosoupstep1 when the error/correct card thing is fixed 
    }
  });
}
function tomatosoupstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 2:</h2>
    <h4>Add 56 ounces of crushed tomatoes, chicken stock, chopped basil, sugar, and black pepper</h4>
    <h4>Blend with an imersion blender</h4>
    <button class = "tomatosoupstep2skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.tomatosoupstep2skipbutton = document.querySelector('.tomatosoupstep2skipbutton')
  DOMSelectors.tomatosoupstep2skipbutton.addEventListener('click', tomatosoupstep2questions)
}

function tomatosoupstep2questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>What tomato-related ingredient do you add?</h2>
    <button class = "tomatosouptomatoingredient">Whole Tomatoes</button>
    <button class = "tomatosouptomatoingredient">Tomato Sauce</button>
    <button class = "tomatosouptomatoingredient">Tomato Paste</button>
    <button class = "tomatosouptomatoingredient">Crushed Tomatoes</button>
    <h2>What seasonings do you add? Select all that apply:</h2>
    <button class = "submittomatosoupstep2"> Next step</button>
    </div>`
    //add check boxes for the seasonings 
  )
  DOMSelectors.submittomatosoupstep2 = document.querySelector('.submittomatosoupstep2')
  DOMSelectors.submittomatosoupstep2.addEventListener('click', () => {
    if (righttomatosoupstep2choices()) {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Correct!</h1>
          <button class = "donetomatosoupstep2">Next step</button>
        </div>`
      );
      DOMSelectors.donetomatosoupstep2 = document.querySelector('.donetomatosoupstep2');
      DOMSelectors.donetomatosoupstep2.addEventListener('click', () => tomatosoupstep3);
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongtomatosoupstep2">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongtomatosoupstep2 = document.querySelector('.wrongtomatosoupstep2');
      DOMSelectors.wrongtomatosoupstep2.addEventListener('click', tomatosoupstep3);
      //put this back to tomatosoupstep2 when the error/correct card thing is fixed 
    }
  });
}

function tomatosoupstep3(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 3:</h2>
    <h4>Add heavy cream and shredded parmesan cheese and simmer for 3 minutes</h4>
    <button class = "tomatosoupstep3skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.tomatosoupstep3skipbutton = document.querySelector('.tomatosoupstep3skipbutton')
  DOMSelectors.tomatosoupstep3skipbutton.addEventListener('click', tomatosoupstep3questions)
}

function tomatosoupstep3questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card"> 
    <h2>What liquid dairy product do you add?</h2>
    <button class = "tomatosoupdairyproduct">Heavy Cream</button>
    <button class = "tomatosoupdairyproduct">Half & Half</button>
    <button class = "tomatosoupdairyproduct">Cream </button>
    <button class = "tomatosoupdairyproduct">Milk</button>
    <h2>What cheese do you add?</h2>
    <button class = "tomatosoupcheese">Cheddar</button>
    <button class = "tomatosoupcheese">Mozzerella</button>
    <button class = "tomatosoupcheese">Swiss</button>
    <button class = "tomatosoupcheese">Parmesan</button>
    <button class = "tomatosoupcheese">Gouda</button>
    <h2>How long do you let the soup simmer?</h2>
    <button class = "tomatosoupsimmertime">1 minute</button>
    <button class = "tomatosoupsimmertime">2 minutes</button>
    <button class = "tomatosoupsimmertime">3 minutes</button>
    <button class = "tomatosoupsimmertime">4 minutes</button>
    <h5> <button class = "submittomatosoupstep3"> Next step</button></h5>
    </div>`
  )
  DOMSelectors.submittomatosoupstep3 = document.querySelector('.submittomatosoupstep3')
  DOMSelectors.submittomatosoupstep3.addEventListener('click', () => {
    if (righttomatosoupstep3choices()) {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Correct!</h1>
          <button class = "donetomatosoupstep3">Next step</button>
        </div>`
      );
      DOMSelectors.donetomatosoupstep3 = document.querySelector('.donetomatosoupstep3');
      DOMSelectors.donetomatosoupstep3.addEventListener('click', () => tomatosoupstep4);
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongtomatosoupstep3">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongtomatosoupstep3 = document.querySelector('.wrongtomatosoupstep3');
      DOMSelectors.wrongtomatosoupstep3.addEventListener('click', tomatosoupstep4);
      //put this back to tomatosoupstep3 when the error/correct card thing is fixed 
    }
  });
}

function tomatosoupstep4(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Tomato Soup</h1>
    <h2>Step 4:</h2>
    <h4>Serve with basil leaves and more parmesan cheese</h4>
    <button class = "tomatosoupstep4skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.tomatosoupstep4skipbutton = document.querySelector('.tomatosoupstep4skipbutton')
  DOMSelectors.tomatosoupstep4skipbutton.addEventListener('click', tomatosoupstep4questions)
}

function tomatosoupstep4questions(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>What final things do you put on the soup?</h2>
    <button class = "submittomatosoupstep4">Submit dish</button>
    </div>`
  )
  DOMSelectors.submittomatosoupstep4 = document.querySelector('.submittomatosoupstep4')
  DOMSelectors.submittomatosoupstep4.addEventListener('click', () => {
    if (righttomatosoupstep4choices()) {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Correct!</h1>
          <button class = "donetomatosoupstep4">Choose your next order</button>
        </div>`
      );
      DOMSelectors.donetomatosoupstep4 = document.querySelector('.donetomatosoupstep4');
      DOMSelectors.donetomatosoupstep4.addEventListener('click', () => makeacard(fooditem));
    } else {
      clearHTML();
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "card">
          <h1>Try again...</h1>
          <button class = "wrongtomatosoupstep4">Back to the recipe</button>
        </div>`
      );
      DOMSelectors.wrongtomatosoupstep4 = document.querySelector('.wrongtomatosoupstep4');
      DOMSelectors.wrongtomatosoupstep4.addEventListener('click', () => makeacard(fooditem));
      //put this back to tomatosoupstep4 when the error/correct card thing is fixed 
    }
  });
}

function greeksaladstep1(){
  clearHTML()
  DOMSelectors.cardcontainerr.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Greek Salad</h1>
    <h4>Vegetables: Cucumber, green bell pepper, cherry tomatoes, red onion, olives</h4>
    <button class = "greeksaladstep1skipbutton">Skip</button>
    </div>`
    //make this a little better 
  )
  DOMSelectors.greeksaladstep1skipbutton = document.querySelector('.greeksaladstep1skipbutton')
  DOMSelectors.greeksaladstep1skipbutton.addEventListener('click', greeksaladstep1questions)
}

function greeksaladstep1questions() {
  clearHTML
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function greeksaladstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card>
    <h1>Greek Salad</h1>
    <h4>Dressing: Extra-Virgin Olive Oil, Red Wine Vinegar, 1 garlic clove, dried oregano, Dijon Mustard, Sea Salt, Black Pepper</h4>
    <button class = "greeksaladstep2skipbutton">Skip</button>
    </div>`
    //make this a little better 
  )
  DOMSelectors.greeksaladstep2skipbutton = document.querySelector('.greeksaladstep2skipbutton')
  DOMSelectors.greeksaladstep2skipbutton.addEventListener('click', greeksaladstep2questions)
}

function greeksaladstep2questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend'
    `<div class = "card">
    </div>`
  )
}

function greeksaladstep3() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Greek Salad</h1>
    <h4>Toss everything together</h4>
    <h4>Garnish with feta cheese and mint leaves</h4>
    <button class = "greeksaladstep3skipbutton">Skip</button>
    </div>`
    //make this a little better 
  )
  DOMSelectors.greeksaladstep3skipbutton = document.querySelector('.greeksaladstep3skipbutton')
  DOMSelectors.greeksaladstep3skipbutton.addEventListener('click', greeksaladstep3questions)
}

function greeksaladstep3questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function shrimpcocktailstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  </div>`
}

function sushiplatterstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function salmonfilletstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function crepestep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function butteredlobsterstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function rackoflambstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function macaroonstep1() {
  clearHTML()
  'beforeend',
  `<div class = "card">
  </div>`
}

function mangocheesecakestep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Mango Cheesecake</h1>
    <h2>Step 1:</h2>
    <h4>Crumble 8 ounces of graham crackers in a food processor</h4>
    <h4>Mix 3tsp of dark brown sugar and 1 stick of softened butter with the crushed graham crackers</h4>
    <h4>Put the mixture in a pan</h4>
    <button class = "mangocheesecakestep1skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.mangocheesecakestep1skipbutton = document.querySelector('.mangocheesecakestep1skipbutton')
  DOMSelectors.mangocheesecakestep1skipbutton.addEventListener('click', mangocheesecakestep1questions)
}

function mangocheesecakestep1questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function mangocheesecakestep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <button class = "mangocheesecakestep2skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.mangocheesecakestep2skipbutton = document.querySelector('.mangocheesecakestep2skipbutton')
  DOMSelectors.mangocheesecakestep2skipbutton.addEventListener('click', mangocheesecakestep2questions)
}

function mangocheesecakestep2questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function mangocheesecakestep3() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <button class = "mangocheesecakestep3skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.mangocheesecakestep3skipbutton = document.querySelector('.mangocheesecakestep3skipbutton')
  DOMSelectors.mangocheesecakestep3skipbutton.addEventListener('click', mangocheesecakestep3questions)
}

function mangocheesecakestep3questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function mangocheesecakestep4() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <button class = "mangocheesecakestep4skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.mangocheesecakestep4skipbutton = document.querySelector('.mangocheesecakestep4skipbutton')
  DOMSelectors.mangocheesecakestep4skipbutton.addEventListener('click', mangocheesecakestep4questions)
}

function mangocheesecakestep4questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    </div>`
  )
}

function pastastep1() {
  clearHTML()
}

function wagyustep1() {
  clearHTML()
}