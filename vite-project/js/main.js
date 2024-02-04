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
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h1>Greek Salad</h1>
    <h4>Vegetables: Cucumber, green bell pepper, cherry tomatoes, red onion, olives</h4>
    <button class = "greeksaladstep1skipbutton">Skip</button>
    </div>`
  )
  DOMSelectors.greeksaladstep1skipbutton = document.querySelector('.greeksaladstep1skipbutton')
  DOMSelectors.greeksaladstep1skipbutton.addEventListener('click', greeksaladstep1questions)
}

function wronggreeksaladstep1choice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card"> 
    <h2>Try again...</h2>
    <button class = "backtogreeksaladstep1">Back to step 1 </button>
    </div>`
  )
  DOMSelectors.backtogreeksaladstep1 = document.querySelector('.backtogreeksaladstep1')
  DOMSelectors.backtogreeksaladstep1.addEventListener('click', greeksaladstep1)
}

function greeksaladstep1questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
    <h2>What long green vegetable do you add?</h2>
    <button class = "notcucumber">Asparagus</button>
    <button class = "notcucumber">Zucchini</button>
    <button class = "notcucumber">Green Beans</button>
    <button class = "cucumber">Cucumber</button>
    <button class = "notcucumber">Orka</button>
    </div>`
  )
  DOMSelectors.cucumber = document.querySelector('.cucumber')
  DOMSelectors.cucumber.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What color bell pepper?</h2>
      <button class = "greenbellpepper">Green Bell Pepper</button>
      <button class = "notgreenbellpepper">Orange Bell Pepper</button>
      <button class = "notgreenbellpepper">Red Bell Pepper</button>
      <button class = "notgreenbellpepper">Yellow Bell Pepper</button>
      </div>`
    )
    DOMSelectors.greenbellpepper = document.querySelector('.greenbellpepper')
    DOMSelectors.greenbellpepper.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>What type of tomato?</h2>
        <button class = "notcherrytomato">Tomato</button>
        <button class = "notcherrytomato">Grape Tomato</button>
        <button class = "cherrytomato">Cherry Tomato</button>
        </div>`
      )
      DOMSelectors.cherrytomato = document.querySelector('.cherrytomato')
      DOMSelectors.cherrytomato.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h2>What kind of onion?</h2>
          <button class = "notredonion">Leeks</button>
          <button class = "redonion">Red Onion</button>
          <button class = "notredonion">Green Onion</button>
          <button class = "notredonion">Yellow Onion</button>
          <button class = "notredonion">White Onion</button>
          </div>`
        )
        DOMSelectors.redonion = document.querySelector('.redonion')
        DOMSelectors.redonion.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class = question>
            <h2>What Greek-related ingredient do you add?</h2>
            <button class = "olives">Olives</button>
            <button class = "notolives">Olive Oil</button>
            <button class = "notolives">Greek Yogurt</button>
            <button class = "notolives">Feta Cheese</button>
            </div>`
          )
          DOMSelectors.olives = document.querySelector('.olives')
          DOMSelectors.olives.addEventListener('click', () => {
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<div class = "question">
              <h5><button class = "submitgreeksaladstep1">Next Step</button></h5>
              </div>`
            )
            DOMSelectors.submitgreeksaladstep1 = document.querySelector('.submitgreeksaladstep1')
            DOMSelectors.submitgreeksaladstep1.addEventListener('click', greeksaladstep2)
          })
          DOMSelectors.notolives = document.querySelectorAll('.notolives')
          DOMSelectors.notolives.forEach((button) => {
            button.addEventListener('click', () => {
              wronggreeksaladstep1choice()
            })
          })
        })
        DOMSelectors.notredonion = document.querySelectorAll('.notredonion')
        DOMSelectors.notredonion.forEach((button) => {
          button.addEventListener('click', () => {
            wronggreeksaladstep1choice()
          })
        })
      })
      DOMSelectors.notcherrytomato = document.querySelectorAll('.notcherrytomato')
      DOMSelectors.notcherrytomato.forEach((button) => {
        button.addEventListener('click', () => {
          wronggreeksaladstep1choice()
        })
      })
    })
    DOMSelectors.notgreenbellpepper = document.querySelectorAll('.notgreenbellpepper')
    DOMSelectors.notgreenbellpepper.forEach((button) => {
      button.addEventListener('click', () => {
        wronggreeksaladstep1choice()
      })
    })
  })
  DOMSelectors.notcucumber = document.querySelectorAll('.notcucumber')
  DOMSelectors.notcucumber.forEach((button) => {
    button.addEventListener('click', () => {
      wronggreeksaladstep1choice()
    });
  });
};

function greeksaladstep2() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="card">
      <h1>Greek Salad</h1>
      <h4>Dressing: Extra-Virgin Olive Oil, Red Wine Vinegar, dried oregano, Dijon Mustard, Sea Salt, Black Pepper</h4>
      <button class="greeksaladstep2skipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.greeksaladstep2skipbutton = document.querySelector('.greeksaladstep2skipbutton');
  DOMSelectors.greeksaladstep2skipbutton.addEventListener('click', greeksaladstep2questions);
}

function wronggreeksaladstep2choice() {
  clearHTML() 
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtogreeksaladstep2">Back to step 2</button>
    </div>`
  )
  DOMSelectors.backtogreeksaladstep2 = document.querySelector('.backtogreeksaladstep2')
  DOMSelectors.backtogreeksaladstep2.addEventListener('click', greeksaladstep2)
}

function greeksaladstep2questions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class="question">
      <h2>What kind of oil do you add?</h2>
      <button class = "notextravirginoliveoil">Canola Oil</button>
      <button class = "notextravirginoliveoil">Olive Oil</button>
      <button class = "extravirginoliveoil">Extra-Virgin Olive Oil</button>
      <button class = "notextravirginoliveoil">Sunflower Oil</button>
      <button class = "notextravirginoliveoil">Avocado Oil</button>
      <button class = "notextravirginoliveoil">Vegetable Oil</button>
    </div>`
  );
  DOMSelectors.extravirginoliveoil = document.querySelector('.extravirginoliveoil')
  DOMSelectors.extravirginoliveoil.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What type of vinegar?</h2>
      <button class = "notredwinevinegar">White rice vinegar</button>
      <button class = "notredwinevinegar">White wine vinegar</button>
      <button class = "redwinevinegar">Red wine vinegar</button>
      <button class = "notredwinevinegar">Apple cider vinegar</button>
      </div>`
    )
    DOMSelectors.redwinevinegar = document.querySelector('.redwinevinegar')
    DOMSelectors.redwinevinegar.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>What dried ingredient?</h2>
        <button class = "driedoregano">Dried Oregano</button>
        <button class = "notdriedoregano">Dried Rosemary</button>
        <button class = "notdriedoregano">Dried Sage</button>
        <button class = "notdriedoregano">Dried Thyme</button>
        </div>`
      )
      DOMSelectors.driedoregano = document.querySelector('.driedoregano')
      DOMSelectors.driedoregano.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h2>What condiment do you add?</h2>
          <button class = "notdijonmustard">Mayo</button>
          <button class = "dijonmustard">Dijon Mustard</button>
          <button class = "notdijonmustard">Ketchup</button>
          <button class = "notdijonmustard">Relish</button>
          </div>`
        )
        DOMSelectors.dijonmustard = document.querySelector('.dijonmustard')
        DOMSelectors.dijonmustard.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class = "question">
            <h2>What type of salt?</h2>
            <button class = "notseasalt">Smoked Salt</button>
            <button class = "notseasalt">Iodized Salt</button>
            <button class = "seasalt">Sea Salt</button>
            <button class = "notseasalt">Kosher Salt</button>
            </div>`
          )
          DOMSelectors.seasalt = document.querySelector('.seasalt')
          DOMSelectors.seasalt.addEventListener('click', () => {
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<div class = "question">
              <h2>What type of pepper?</h2>
              <button class = "notgreekblackpepper">Red Pepper</button>
              <button class = "notgreekblackpepper">White Pepper</button>
              <button class = "greekblackpepper">Black Pepper</button>
              </div>`
            )
            DOMSelectors.greekblackpepper = document.querySelector('.greekblackpepper')
            DOMSelectors.greekblackpepper.addEventListener('click', () => {
              DOMSelectors.cardcontainer.insertAdjacentHTML(
                'beforeend',
                `<div class = "question">
                <h5><button class = "submitgreeksaladstep2">Next Step</button></h5>
                </div>`
              )
              DOMSelectors.submitgreeksaladstep2 = document.querySelector('.submitgreeksaladstep2')
              DOMSelectors.submitgreeksaladstep2.addEventListener('click', greeksaladstep3)
            })
            DOMSelectors.notgreekblackpepper = document.querySelectorAll('.notgreekblackpepper')
            DOMSelectors.notgreekblackpepper.forEach((button) => {
              button.addEventListener('click', () => {
                wronggreeksaladstep2choice()
              })
            })
          })
          DOMSelectors.notseasalt = document.querySelectorAll('.notseasalt')
          DOMSelectors.notseasalt.forEach((button) => {
            button.addEventListener('click', () => {
              wronggreeksaladstep2choice()
            })
          })
        })
        DOMSelectors.notdijonmustard = document.querySelectorAll('.notdijonmustard')
        DOMSelectors.notdijonmustard.forEach((button) => {
          button.addEventListener('click', () => {
            wronggreeksaladstep2choice()
          })
        })
      })
      DOMSelectors.notdriedoregano = document.querySelectorAll('.notdriedoregano')
      DOMSelectors.notdriedoregano.forEach((button) => {
        button.addEventListener('click', () => {
          wronggreeksaladstep1choice()
        })
      })
    })
    DOMSelectors.notredwinevinegar = document.querySelectorAll('.notredwinevinegar')
    DOMSelectors.notredwinevinegar.forEach((button) => {
      button.addEventListener('click', () => {
        wronggreeksaladstep2choice()
      })
    })
  })
  DOMSelectors.notextravirginoliveoil = document.querySelectorAll('.notextravirginoliveoil')
  DOMSelectors.notextravirginoliveoil.forEach((button) => {
    button.addEventListener('click', () => {
      wronggreeksaladstep2choice()
    })
  })
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
  )
  DOMSelectors.greeksaladstep3skipbutton = document.querySelector('.greeksaladstep3skipbutton')
  DOMSelectors.greeksaladstep3skipbutton.addEventListener('click', greeksaladstep3questions)
}

function wronggreeksaladstep3choice() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
    <h2>Try again...</h2>
    <button class = "backtogreeksaladstep3">Back to step 3</button>
    </div>`
  )
  DOMSelectors.backtogreeksaladstep3 = document.querySelector('.backtogreeksaladstep3')
  DOMSelectors.backtogreeksaladstep3.addEventListener('click', greeksaladstep3)
}

function greeksaladstep3questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
    <h2>How do you bring all of the ingredients together?</h2>
    <button class = "nottoss">Mix</button>
    <button class = "toss">Toss</button>
    <button class = "nottoss">Blend</button>
    </div>`
  )
  DOMSelectors.toss = document.querySelector('.toss')
  DOMSelectors.toss.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What cheese do you garnish with?</h2>
      <button class = "feta">Feta</button>
      <button class = "notfeta">Cheddar</button>
      <button class = "notfeta">Swiss</button>
      <button class = "notfeta">Mozzerella</button>
      </div>`
    )
    DOMSelectors.feta = document.querySelector('.feta')
    DOMSelectors.feta.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>What herb do you garnish with?</h2>
        <button class = "notmint">Basil</button>
        <button class = "notmint">Thyme</button>
        <button class = "notmint">Oregano</button>
        <button class = "mint">Mint</button>
        <button class = "notmint">Dill</button>
        </div>`
      )
      DOMSelectors.mint = document.querySelector('.mint')
      DOMSelectors.mint.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h5><button class = "submitgreeksaladstep3">Submit Dish</button></h5>
          </div>`
        )
        DOMSelectors.submitgreeksaladstep3 = document.querySelector('.submitgreeksaladstep3')
        DOMSelectors.submitgreeksaladstep3.addEventListener('click', makeacard(fooditem))
      })
      DOMSelectors.notmint = document.querySelectorAll('.notmint')
      DOMSelectors.notmint.forEach((button) => {
        button.addEventListener('click', () => {
          wronggreeksaladstep3choice()
        })
      })
    })
    DOMSelectors.notfeta = document.querySelectorAll('.notfeta')
    DOMSelectors.notfeta.forEach((button) => {
      button.addEventListener('click', () => {
        wronggreeksaladstep3choice()
      })
    })
  })
  DOMSelectors.nottoss = document.querySelectorAll('.nottoss')
  DOMSelectors.nottoss.forEach((button) => {
    button.addEventListener('click', () => {
      wronggreeksaladstep3choice()
    })
  })
}

function shrimpcocktailstep1() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
      <h1>Shrimp Cocktail</h1>
      <h2>Step 1:</h2>
      <h4>Combine 6 cups of water with salt, sugar, onion, half a lemon, and 5 sprigs of parsley in a pot</h4>
      <button class = "shrimpcocktailstep1skipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.shrimpcocktailstep1skipbutton = document.querySelector('.shrimpcocktailstep1skipbutton');
  DOMSelectors.shrimpcocktailstep1skipbutton.addEventListener('click', shrimpcocktailstep1questions);
}

function wrongshrimpcocktailstep1choices() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
      <h2>Try again...</h2>
      <button class = "backtoshrimpcocktailstep1">Back to step 1</button>
    </div>`
  );
  DOMSelectors.backtoshrimpcocktailstep1 = document.querySelector('.backtoshrimpcocktailstep1');
  DOMSelectors.backtoshrimpcocktailstep1.addEventListener('click', shrimpcocktailstep1);
}

function shrimpcocktailstep1questions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
      <h2>How much water do you add?</h2>
      <button class = "notsixcups">2 cups</button>
      <button class = "notsixcups">3 cups</button>
      <button class = "notsixcups">4 cups</button>
      <button class = "notsixcups">5 cups</button>
      <button class = "sixcups">6 cups</button>
      <button class = "notsixcups">7 cups</button>
    </div>`
  );
  DOMSelectors.sixcups = document.querySelector('.sixcups');
  DOMSelectors.sixcups.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
        <h2>Do you add sugar, salt, none, or both?</h2>
        <button class = "notboth">Sugar</button>
        <button class = "notboth">Salt</button>
        <button class = "notboth">None</button>
        <button class = "both">Both</button>
      </div>`
    );
    DOMSelectors.both = document.querySelector('.both');
    DOMSelectors.both.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
          <h2>What do you add next?</h2>
          <button class = "notonion">Garlic</button>
          <button class = "onion">Onion</button>
          <button class = "notonion">Ginger</button>
        </div>`
      );
      DOMSelectors.onion = document.querySelector('.onion');
      DOMSelectors.onion.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
            <h2>How much lemon?</h2>
            <button class = "nothalflemon">No lemon</button>
            <button class = "halflemon">Half a lemon</button>
            <button class = "nothalflemon">1 lemon</button>
            <button class = "nothalflemon">2 lemons</button>
          </div>`
        );
        DOMSelectors.halflemon = document.querySelector('.halflemon');
        DOMSelectors.halflemon.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class = "question">
              <h2>What herb do you add?</h2>
              <button class = "notparsley">Basil</button>
              <button class = "notparsley">Mint</button>
              <button class = "notparsley">Oregano</button>
              <button class = "parsley">Parsley</button>
            </div>`
          );
          DOMSelectors.parsley = document.querySelector('.parsley');
          DOMSelectors.parsley.addEventListener('click', () => {
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<div class = "question">
                <h2>How many sprig(s) of parsley?</h2>
                <button class = "notfivesprigs">1 sprig</button>
                <button class = "notfivesprigs">2 sprigs</button>
                <button class = "notfivesprigs">3 sprigs</button>
                <button class = "notfivesprigs">4 sprigs</button>
                <button class = "fivesprigs">5 sprigs</button>
                <button class = "notfivesprigs">6 sprigs</button>
                <button class = "notfivesprigs">7 sprigs</button>
              </div>`
            );
            DOMSelectors.fivesprigs = document.querySelector('.fivesprigs');
            DOMSelectors.fivesprigs.addEventListener('click', () => {
              DOMSelectors.cardcontainer.insertAdjacentHTML(
                'beforeend',
                `<div class = "question">
                  <h5><button class = "submitshrimpcocktailstep1">Next step</button></h5>
                </div>`
              );
              DOMSelectors.submitshrimpcocktailstep1 = document.querySelector('.submitshrimpcocktailstep1');
              DOMSelectors.submitshrimpcocktailstep1.addEventListener('click', shrimpcocktailstep2);
            });
            DOMSelectors.notfivesprigs = document.querySelectorAll('.notfivesprigs');
            DOMSelectors.notfivesprigs.forEach((button) => {
              button.addEventListener('click', () => {
                wrongshrimpcocktailstep1choices();
              });
            });
          });
          DOMSelectors.notparsley = document.querySelectorAll('.notparsley');
          DOMSelectors.notparsley.forEach((button) => {
            button.addEventListener('click', () => {
              wrongshrimpcocktailstep1choices();
            });
          });
        });
        DOMSelectors.nothalflemon = document.querySelectorAll('.nothalflemon');
        DOMSelectors.nothalflemon.forEach((button) => {
          button.addEventListener('click', () => {
            wrongshrimpcocktailstep1choices();
          });
        });
      });
      DOMSelectors.notonion = document.querySelectorAll('.notonion');
      DOMSelectors.notonion.forEach((button) => {
        button.addEventListener('click', () => {
          wrongshrimpcocktailstep1choices();
        });
      });
    });
    DOMSelectors.notboth = document.querySelectorAll('.notboth');
    DOMSelectors.notboth.forEach((button) => {
      button.addEventListener('click', () => {
        wrongshrimpcocktailstep1choices();
      });
    });
  });
  DOMSelectors.notsixcups = document.querySelectorAll('.notsixcups');
  DOMSelectors.notsixcups.forEach((button) => {
    button.addEventListener('click', () => {
      wrongshrimpcocktailstep1choices();
    });
  });
}

function shrimpcocktailstep2() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
      <h1>Shrimp Cocktail:</h1>
      <h2>Step 2:</h2>
      <h4>Unpeel 2lbs of shrimp but leave the tails on</h4>
      <h4>Add the shrimp in the mixture and let it sit for 3 minutes, then remove the shrimp</h4>
      <button class = "shrimpcocktailstep2skipbutton">Skip</button>
    </div>`
  );
  DOMSelectors.shrimpcocktailstep2skipbutton = document.querySelector('.shrimpcocktailstep2skipbutton');
  DOMSelectors.shrimpcocktailstep2skipbutton.addEventListener('click', shrimpcocktailstep2questions);
}

function wrongshrimpcocktailstep2choices() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
      <h2>Try again...</h2>
      <button class = "backtoshrimpcocktailstep2">Back to step 2</button>
    </div>`
  );
  DOMSelectors.backtoshrimpcocktailstep2 = document.querySelector('.backtoshrimpcocktailstep2');
  DOMSelectors.backtoshrimpcocktailstep2.addEventListener('click', shrimpcocktailstep2);
}

function shrimpcocktailstep2questions() {
  clearHTML();
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
      <h2>How much shrimp do you get?</h2>
      <button class = "nottwopounds">1/2 lbs</button>
      <button class = "nottwopounds">1 lbs</button>
      <button class = "nottwopounds">1 1/2 lbs</button>
      <button class = "twopounds">2 lbs</button>
    </div>`
  );
  DOMSelectors.twopounds = document.querySelector('.twopounds');
  DOMSelectors.twopounds.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
        <h2>Do you leave the tails of the shrimp on or off?</h2>
        <button class = "on">On</button>
        <button class = "off">Off</button>
      </div>`
    );
    DOMSelectors.on = document.querySelector('.on');
    DOMSelectors.on.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
          <h2>How long do you leave the shrimp in the mixture?</h2>
          <button class = "notshrimpthreeminutes">3 seconds</button>
          <button class = "shrimpthreeminutes">3 minutes</button>
          <button class = "notshrimpthreeminutes">30 minutes</button>
          <button class = "notshrimpthreeminutes">3 hours</button>
        </div>`
      );
      DOMSelectors.shrimpthreeminutes = document.querySelector('.shrimpthreeminutes');
      DOMSelectors.shrimpthreeminutes.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
            <h5><button class = "submitshrimpcocktailstep2">Next step</button></h5>
          </div>`
        );
        DOMSelectors.submitshrimpcocktailstep2 = document.querySelector('.submitshrimpcocktailstep2');
        DOMSelectors.submitshrimpcocktailstep2.addEventListener('click', shrimpcocktailstep3);
      });
      DOMSelectors.notshrimpthreeminutes = document.querySelectorAll('.notshrimpthreeminutes');
      DOMSelectors.notshrimpthreeminutes.forEach((button) => {
        button.addEventListener('click', () => {
          wrongshrimpcocktailstep2choices();
        });
      });
    });
    DOMSelectors.off = document.querySelector('.off');
    DOMSelectors.off.addEventListener('click', () => {
      wrongshrimpcocktailstep2choices();
    });
  });
  DOMSelectors.nottwopounds = document.querySelectorAll('.nottwopounds');
  DOMSelectors.nottwopounds.forEach((button) => {
    button.addEventListener('click', () => {
      wrongshrimpcocktailstep2choices();
    });
  });
}


function shrimpcocktailstep3() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  <h2>Step 3:</h2>
  <h2>Sauce:</h2>
  <h4>Add ketchup, horseradish, Worcestershire sauce, Tabasco, and kosher salt</h4>
  <button class = "shrimpcocktailstep3skipbutton">Skip</button>
  </div>`
  )
  DOMSelectors.shrimpcocktailstep3skipbutton = document.querySelector('.shrimpcocktailstep3skipbutton')
  DOMSelectors.shrimpcocktailstep3skipbutton.addEventListener('click', shrimpcocktailstep3questions)
}

function wrongshrimpcocktailstep3choices() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtoshrimpcocktailstep3">Back to step 3</button>
    </div>`
  )
  DOMSelectors.backtoshrimpcocktailstep3 = document.querySelector('.backtoshrimpcocktailstep3')
  DOMSelectors.backtoshrimpcocktailstep3.addEventListener('click', shrimpcocktailstep3)
}

function shrimpcocktailstep3questions() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
    <h2>What condiment sauce do you add?</h2>
    <button class = "notketchup">Mayo</button>
    <button class = "notketchup">Dijon Mustard</button>
    <button class = "ketchup">Ketchup</button>
    <button class = "notketcup">Relish</button>
    </div>`
  )
  DOMSelectors.ketchup = document.querySelector('.ketchup')
  DOMSelectors.ketchup.addEventListener('click',() => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>What do you add next?</h2>
      <button class = "nothorseradish">Wasabi</button>
      <button class = "horseradish">Horseradish</button>
      <button class = "nothorseradish">Ginger</button>
      </div>`
    )
    DOMSelectors.horseradish = document.querySelector('.horseradish')
    DOMSelectors.horseradish.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h2>What sauce that has a British county name do you add?</h2>
        <button class = "notworshirshiresauce">Worcester Sauce</button>
        <button class = "worshirshiresauce">Worshirshire Sauce</button>
        <button class = "notworshirshiresauce">Essex Sauce</button>
        <button class = "notworshirshiresauce">Lancashire Sauce</button>
        </div>`
      )
      DOMSelectors.worshirshiresauce = document.querySelector('.worshirshiresauce')
      DOMSelectors.worshirshiresauce.addEventListener('click', () => {
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "question">
          <h2>What spicy sauce do you add next?</h2>
          <button class = "nottabasco">Siracha</button>
          <button class = "nottabasco">Spicy salsa</button>
          <button class = "tabasco">Tabasco</button>
          </div>`
        )
        DOMSelectors.tabasco = document.querySelector('.tabasco')
        DOMSelectors.tabasco.addEventListener('click', () => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            'beforeend',
            `<div class = "question">
            <h2>What salt do you add?</h2>
            <button class = "notkosher">Smoked Salt</button>
            <button class = "notkosher">Iodized Salt</button>
            <button class = "notkosher">Sea Salt</button>
            <button class = "kosher">Kosher Salt</button>
            </div>`
          )
          DOMSelectors.kosher = document.querySelector('.kosher')
          DOMSelectors.kosher.addEventListener('click', () => {
            DOMSelectors.cardcontainer.insertAdjacentHTML(
              'beforeend',
              `<div class = "question">
              <h5><button class = "submitshrimpcocktailstep3">Next step</button></h5>
              </div>`
            )
            DOMSelectors.submitshrimpcocktailstep3 = document.querySelector('.submitshrimpcocktailstep3')
            DOMSelectors.submitshrimpcocktailstep3.addEventListener('click', shrimpcocktailstep4)
          })
          DOMSelectors.notkosher = document.querySelectorAll('.notkosher')
          DOMSelectors.notkosher.forEach((button) => {
            button.addEventListener('click', () => {
              wrongshrimpcocktailstep3choices()
            })
          })
        })
        DOMSelectors.nottabasco = document.querySelectorAll('.nottabasco')
        DOMSelectors.nottabasco.forEach((button) => {
          button.addEventListener('click', () => {
            wrongshrimpcocktailstep3choices()
          })
        })
      })
      DOMSelectors.notworshirshiresauce = document.querySelectorAll('.notworshirshiresauce')
      DOMSelectors.notworshirshiresauce.forEach((button) => {
        button.addEventListener('click', () => {
          wrongshrimpcocktailstep3choices()
        })
      })
    })
    DOMSelectors.nothorseradish = document.querySelectorAll('.nothorseradish')
    DOMSelectors.nothorseradish.forEach((button) => {
      button.addEventListener('click', () => {
        wrongshrimpcocktailstep3choices()
      })
    })
  })
  DOMSelectors.notketchup = document.querySelectorAll('.notketchup')
  DOMSelectors.notketchup.forEach((button) => {
    button.addEventListener('click', () => {
      wrongshrimpcocktailstep3choices()
    })
  })
}

function shrimpcocktailstep4() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
  'beforeend',
  `<div class = "card">
  <h1>Shrimp Cocktail</h1>
  <h2>Step 4:</h2>
  <h4>Plate the shrimp in a semi-circle with the sauce in a small dish. Garnish wih lemon wedges/h4>
  <h5><button class = "shrimpcocktailstep4skipbutton">Skip</button></h5>
  </div>`
  )
  DOMSelectors.shrimpcocktailstep4skipbutton = document.querySelector('.shrimpcocktailstep4skipbutton')
  DOMSelectors.shrimpcocktailstep4skipbutton.addEventListener('click', shrimpcocktailstep4questions)
}

function wrongshrimpcocktailstep4choices() {
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "card">
    <h2>Try again...</h2>
    <button class = "backtoshrimpcocktailstep4">Back to step 4</button>
    </div>`
  )
  DOMSelectors.backtoshrimpcocktailstep4 = document.querySelector('.backtoshrimpcocktailstep4')
  DOMSelectors.backtoshrimpcocktailstep4.addEventListener('click', shrimpcocktailstep4)
}

function shrimpcocktailstep4questions(){
  clearHTML()
  DOMSelectors.cardcontainer.insertAdjacentHTML(
    'beforeend',
    `<div class = "question">
    <h2>How do you arrange the shrimp?</h2>
    <button class = "notsemicircle">In a circle shape</button>
    <button class = "notsemicircle">In a square shape</button>
    <button class = "notsemicircle">In a triangle shape</button>
    <button class = "notsemicircle">In a rectangle shape</button>
    <button class = "semicircle">In a semi circle shape</button>
    </div>`
  )
  DOMSelectors.semicircle = document.querySelector('.semicircle')
  DOMSelectors.semicircle.addEventListener('click', () => {
    DOMSelectors.cardcontainer.insertAdjacentHTML(
      'beforeend',
      `<div class = "question">
      <h2>How do you cut the lemon?</h2>
      <button class = "notwedges">In twists</button>
      <button class = "notwedges">In round slices</button>
      <button class = "wedges">In wedges</button>
      <button class = "notwedges">In quarters</button>
      <button class = "notwedges">In half</button>
      </div>`
    )
    DOMSelectors.wedges = document.querySelector('.wedges')
    DOMSelectors.wedges.addEventListener('click', () => {
      DOMSelectors.cardcontainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "question">
        <h5><button class = "submitshrimpcocktailstep4">Submit dish</button></h5>
        </div>`
      )
      DOMSelectors.submitshrimpcocktailstep4 = document.querySelector('.submitshrimpcocktailstep4')
      DOMSelectors.submitshrimpcocktailstep4.addEventListener('click', () => {
        clearHTML()
        DOMSelectors.cardcontainer.insertAdjacentHTML(
          'beforeend',
          `<div class = "congrats">
          <h2>Congratulations! You sucessfully made shrimp cocktail. The customer raves about how great the dish is!</h2>
          <button class = "backtomenu">Back to Menu</button>
          </div>`
        )
        DOMSelectors.backtomenu = document.querySelector('.backtomenu')
        DOMSelectors.backtomenu.addEventListener('click', () => {
          makeacard(fooditem)
        })
      })
    })
    DOMSelectors.notwedges = document.querySelectorAll('.notwedges')
    DOMSelectors.notwedges.forEach((button) => {
      button.addEventListener('click', () => {
        wrongshrimpcocktailstep4choices()
      })
    })
  })
  DOMSelectors.notsemicircle = document.querySelectorAll('.notsemicircle')
  DOMSelectors.notsemicircle.forEach((button) => {
    button.addEventListener('click', () => {
      wrongshrimpcocktailstep4choices()
    })
  })
}