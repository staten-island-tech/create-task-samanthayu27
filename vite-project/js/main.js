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

function wrongicecreamchoice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtoicecreamingreidients">Back to recipe</button>
    </div>`
  )
  DOMSelectors.backtoicecreamingreidients = document.querySelector('.backtoicecreamingreidients')
  DOMSelectors.backtoicecreamingreidients.addEventListener('click', icecreamingredients)
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
              `<div class = "question">
              <h5><button class = submiticecream>Submit Dish</button></h5>
              </div>`
            );
            DOMSelectors.submiticecream = document.querySelector('.submiticecream');
            DOMSelectors.submiticecream.addEventListener('click', () => {
              makeacard(fooditem);
            });
          });
          DOMSelectors.wrongicecreammaraschinocherries = document.querySelectorAll('.wrongicecreammaraschinocherries');
          DOMSelectors.wrongicecreammaraschinocherries.forEach((button) => {
            button.addEventListener('click', () => {
              wrongicecreamchoice()
            });
          });
        });
        DOMSelectors.wrongicecreamwhippedcream = document.querySelectorAll('.wrongicecreamwhippedcream');
        DOMSelectors.wrongicecreamwhippedcream.forEach((button) => {
          button.addEventListener('click', () => {
            wrongicecreamchoice()
          });
        });
      });
      DOMSelectors.wrongicecreamsprinkles = document.querySelectorAll('.wrongicecreamsprinkles');
      DOMSelectors.wrongicecreamsprinkles.forEach((button) => {
        button.addEventListener('click', () => {
          wrongicecreamchoice()
        });
      });
    });
    DOMSelectors.wrongicecreamscoops = document.querySelectorAll('.wrongicecreamscoops');
    DOMSelectors.wrongicecreamscoops.forEach((button) => {
      button.addEventListener('click', () => {
        wrongicecreamchoice()
      });
    });
  });
  DOMSelectors.wrongicecreamflavor = document.querySelectorAll('.wrongicecreamflavor');
  DOMSelectors.wrongicecreamflavor.forEach((button) => {
    button.addEventListener('click', () => {
      wrongicecreamchoice()
    });
  });
}

function wrongtomatosoupstep1choice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtotomatosoupstep1">Back to step 1</button>
    </div>`
  )
  DOMSelectors.backtotomatosoupstep1 = document.querySelector('.backtotomatosoupstep1')
  DOMSelectors.backtotomatosoupstep1.addEventListener('click', tomatosoupstep1)
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
    `<div class = "question">
    <h2>How much butter do you add?</h2>
    <button class = "nothalfbutterstick">1/4 stick</button>
    <button class = "halfbutterstick">1/2 stick</button>
    <button class = "nothalfbutterstick">3/4 stick</button>
    <button class = "nothalfbutterstick">1 stick</button>
    </div>`
  )
  DOMSelectors.halfbutterstick = document.querySelector('.halfbutterstick')
  DOMSelectors.halfbutterstick.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h4>How do you cut the onion?</h4>
      <button class = "notdicedonions">Minced</button>
      <button class = "notdicedonions">Rings</button>
      <button class = "notdicedonions">Uncut</button>
      <button class = "dicedonions">Diced</button>   
      </div>`
    )
    DOMSelectors.dicedonions = document.querySelector('.dicedonions')
    DOMSelectors.dicedonions.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h4>How many garlic cloves do you add?</h4>
        <button class = "notthreegarliccloves">1/2 Clove</button>
        <button class = "notthreegarliccloves">1 Clove</button>
        <button class = "notthreegarliccloves">2 Cloves</button>
        <button class = "threegarliccloves">3 Cloves</button>
        </div>`
      )
      DOMSelectors.threegarliccloves = document.querySelector('.threegarliccloves')
      DOMSelectors.threegarliccloves.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h5><button class = "submittomatosoupstep1">Next Step</button></h5>
          </div>`
        )
        DOMSelectors.submittomatosoupstep1 = document.querySelector('.submittomatosoupstep1')
        DOMSelectors.submittomatosoupstep1.addEventListener('click', tomatosoupstep2())
      })
      DOMSelectors.notthreegarliccloves = document.querySelectorAll('.notthreegarliccloves')
      DOMSelectors.notthreegarliccloves.forEach((button) => {
        button.addEventListener('click', () => {
          wrongtomatosoupstep1choice()
        })
      })
    })
    DOMSelectors.notdicedonions = document.querySelectorAll('.notdicedonions');
    DOMSelectors.notdicedonions.forEach((button) => {
        button.addEventListener('click', () => {
            wrongtomatosoupstep1choice();
        });
    });
  })
  DOMSelectors.nothalfbutterstick = document.querySelectorAll('.nothalfbutterstick')
  DOMSelectors.nothalfbutterstick.forEach((button) => {
    button.addEventListener('click', () => {
      wrongtomatosoupstep1choice()
    })
  })
}

function wrongtomatosoupstep2choice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtotomatosoupstep2">Back to step 2</button>
    </div>`
  )
  DOMSelectors.backtotomatosoupstep2 = document.querySelector('.backtotomatosoupstep2')
  DOMSelectors.backtotomatosoupstep2.addEventListener('click', tomatosoupstep2)
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
    `<div class = "question">
    <h2>What tomato-related ingredient do you add?</h2>
    <button class = "notcrushedtomatoes">Whole Tomatoes</button>
    <button class = "notcrushedtomatoes">Tomato Sauce</button>
    <button class = "notcrushedtomatoes">Tomato Paste</button>
    <button class = "crushedtomatoes">Crushed Tomatoes</button>
    </div>`
  )
  DOMSelectors.crushedtomatoes = document.querySelector('.crushedtomatoes')
  DOMSelectors.crushedtomatoes.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What chicken-related ingredient do you add?</h2>
      <button class = "notchickentstock">Raw Chicken</button>
      <button class = "notchickentstock">Chicken soup</button>
      <button class = "chickenstock">Chicken stock</button>
      <button class = "notchickentstock">Chicken Boullon Cubes</button>
      <button class = "notchickentstock">Shredded Chicken</button>
      </div>`
    )
    DOMSelectors.chickenstock = document.querySelector('.chickenstock')
    DOMSelectors.chickenstock.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>What herb do you add?</h2>
        <button class = "notbasil">Dill</button>
        <button class = "basil">Basil</button>
        <button class = "notbasil">Oregano</button>
        <button class = "notbasil">Rosemary</button>
        </div>`
      )
      DOMSelectors.basil = document.querySelector('.basil')
      DOMSelectors.basil.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h2>Salt or sugar?</h2>
          <button class = "notsugar">Salt</button>
          <button class = "sugar">Sugar</button>
          </div>`
        )
        DOMSelectors.sugar = document.querySelector('.sugar')
        DOMSelectors.sugar.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class = "question">
            <h2>What kind of pepper?</h2>
            <button class = "notblackpepper">Red Pepper</button>
            <button class = "notblackpepper">White Pepper</button>
            <button class = "blackpepper">Black Pepper</button>
            </div>`
          )
          DOMSelectors.blackpepper = document.querySelector('.blackpepper')
          DOMSelectors.blackpepper.addEventListener('click', () => tomatosoupstep3())
          DOMSelectors.notblackpepper = document.querySelectorAll('.notblackpepper')
          DOMSelectors.notblackpepper.forEach((button) => {
            button.addEventListener('click', () => {
              wrongtomatosoupstep2choice()
            })
          })
        })
        DOMSelectors.notsugar = document.querySelector('.notsugar')
        DOMSelectors.notsugar.addEventListener('click', () => wrongtomatosoupstep2choice())
      })
      DOMSelectors.notbasil = document.querySelectorAll('.notbasil')
      DOMSelectors.notbasil.forEach((button) => {
        button.addEventListener('click', () => {
          wrongtomatosoupstep2choice()
        })
      })
    DOMSelectors.notchickenstock = document.querySelectorAll('.notchickenstock')
    DOMSelectors.notchickenstock.forEach((button) => {
      button.addEventListener('click', () => {
        wrongtomatosoupstep2choice()
        })
      })
    })
  })
  DOMSelectors.notcrushedtomatoes = document.querySelectorAll('.notcrushedtomatoes')
  DOMSelectors.notcrushedtomatoes.forEach((button) => {
    button.addEventListener('click', () => {
      wrongtomatosoupstep2choice()
    })
  })
}

function wrongtomatosoupstep3choices() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend', 
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtotomatosoupstep3">Back to step 3</button>
    </div>`
  )
  DOMSelectors.backtotomatosoupstep3 = document.querySelector('.backtotomatosoupstep3')
  DOMSelectors.backtotomatosoupstep3.addEventListener('click', tomatosoupstep3)
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
    `<div class = "question"> 
    <h2>What liquid dairy product do you add?</h2>
    <button class = "heavycream">Heavy Cream</button>
    <button class = "notheavycream">Half & Half</button>
    <button class = "notheavycream">Cream </button>
    <button class = "notheavycream">Milk</button>`
  )
  DOMSelectors.heavycream = document.querySelector('.heavycream')
  DOMSelectors.heavycream.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What cheese do you add?</h2>
      <button class = "notparmesan">Cheddar</button>
      <button class = "notparmesan">Mozzerella</button>
      <button class = "notparmesan">Swiss</button>
      <button class = "parmesan">Parmesan</button>
      <button class = "notparmesan">Gouda</button>   
      </div>`
    )
    DOMSelectors.parmesan = document.querySelector('.parmesan')
    DOMSelectors.parmesan.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>How long do you let the soup simmer?</h2>
        <button class = "notthreeminutes">1 minute</button>
        <button class = "notthreeminutes">2 minutes</button>
        <button class = "threeminutes">3 minutes</button>
        <button class = "notthreeminutes">4 minutes</button>
        </div>`
      )
      DOMSelectors.threeminutes = document.querySelector('.threeminutes')
      DOMSelectors.threeminutes.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<h5> <button class = "submittomatosoupstep3"> Next step</button></h5>`
        )
        DOMSelectors.submittomatosoupstep3 = document.querySelector('.submittomatosoupstep3')
        DOMSelectors.submittomatosoupstep3.addEventListener('click', makeacard(fooditem))
      })
      DOMSelectors.notthreeminutes = document.querySelectorAll('.notthreeminutes')
      DOMSelectors.notthreeminutes.forEach((button) => {
        button.addEventListener('click', () => {
          wrongtomatosoupstep3choices()
        })
      })
    })
    DOMSelectors.notparmesan = document.querySelectorAll('.notparmesan')
    DOMSelectors.notparmesan.forEach((button) => {
      button.addEventListener('click', () => {
        wrongtomatosoupstep3choices()
      })
    })
  })
  DOMSelectors.notheavycream = document.querySelectorAll('.notheavycream')
  DOMSelectors.notheavycream.forEach((button) => {
    button.addEventListener('click', () => {
      wrongtomatosoupstep3choices()
    })
  })
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
    <h4>Dressing: Extra-Virgin Olive Oil, Red Wine Vinegar, dried oregano, Dijon Mustard, Sea Salt, Black Pepper</h4>
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
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  <h2>Step 1:</h2>
  <h4>Combine 6 cups of water with salt, sugar, onion, half a lemon, and 5 sprigs of parsley in a pot</h4>
  </div>`
  )
}

function shrimpcocktailstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend', 
  `<div class = "card">
  <h1>Shrimp Cocktail:</h1>
  <h2>Step 2:</h2>
  <h4>Unpeel 2lbs of shrimp but leave the tails intact</h4>
  <h4>Add the shrimp in the mixture and let it sit for 3 minutes</h4>
  <h4>Remove the shrimp</h4>
  </div>`
  )
}

function shrimpcocktailstep3() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  <h2>Step 3:</h2>
  <h2>Sauce:</h2>
  <h4>Zest a lemon and juice the rest of the lemon</h4>
  <h4>Add ketchup, horseradish, Worcestershire sauce, Tabasco, chili sauce, and salt</h4>
  </div>`
  )
}

function shrimpcocktialstep4() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  <h2>Step 4:</h2>
  <h4>Plate the shrimp in a semi-circle with the sauce in a small dish. Garnish wih lemon wedges and parsley</h4>
  </div>`
  )
}

function sushiplatterstep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 1:</h2>
  <h2>Eel Avocado Roll</h2>
  </div>`
  )
}

function sushiplatterstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 2:</h2>
  <h2>California Roll</h2>
  </div>`
  )
}

function sushiplatterstep3() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 3:</h2>
  <h2>Dragon Roll</h2>
  </div>`
  )
}

function sushiplatterstep4() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 4:</h2>
  <h2>Spicy Tuna Roll</h2>
  </div>`
  )
}

function sushiplatterstep5() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 5:</h2>
  <h2>Cucumber Roll</h2>
  </div>`
  )
}

function sushiplatterstep6() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 6:</h2>
  <h2>Temaki</h2>
  </div>`
  )
}

function sushiplatterstep7() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 7:</h2>
  <h2>Nigiri</h2>
  </div>`
  )
}

function sushiplatterstep8() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Sushi Platter</h1>
  <h2>Step 8:</h2>
  <h4>Serve with soy sauce and wasabi</h4>
  </div>`
  )
}

function salmonfilletstep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Salmon Fillet</h1>
  <h2>Step 1:</h2>
  <h4>Season salmon fillet with salt and pepper</h4>
  <h4>Cook the fillet on one side for 3 minutes, then flip and cook on that side for 1 minute</h4>
  </div>`
  )
}

function salmonfilletstep2() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Salmon Fillet</h1>
  <h2>Step 2:</h2>
  <h4>Add 3 tablespoons of unsalted butter and baste the fillet for 90 seconds</h4>
  <h4>Flip and baste the other side for 90 seconds</h4>
  </div>`
  )
}

function salmonfilletstep3() {  
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Salmon Fillet</h1>
  <h2>Step 1:</h2>
  <h4>Plate with lemon wedges and rosemary sprigs</h4>
  </div>`
  )
}

function crepestep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
}

function butteredlobsterstep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
}

function rackoflambstep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
}

function macaroonstep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
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
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
}

function wagyustep1() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  </div>`
  )
}