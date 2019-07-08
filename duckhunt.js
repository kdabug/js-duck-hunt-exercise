window.onload = function() {
  const body = document.body;

  console.log(body);

  // 1. Create a <div> with the class "duck" and add it to the body.  Do this step by step
  // ( 1. create the element
  //   2. add a class to the element
  //   3. append the element to the body )

  // const addDuck = () => {
  //   const duck = document.createElement("div");
  //   duck.classList.add("duck");

  //   const body = document.querySelector("body");
  //   body.appendChild(duck);
  // };

  // addDuck();

  // // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // // https://www.w3schools.com/jsref/met_win_setinterval.asp
  // // - create an arrow function called toggleFlap that take no arguments.
  // // - using the div element of 'duck', that was created in step 1, call toggle on a classList by adding a string called 'flap'
  // // - outside of your function call `setInterval` and pass in the name of the function created in this step with the milliseconds integer written above
  // // - in your Chrome devtools, you should see the class changing from `duck` to `duck flap`

  // const toggleFlap = () => {
  //   const duck = document.querySelector(".duck");
  //   duck.classList.toggle("flap");
  // };

  // setInterval(toggleFlap, 250);

  // // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left". Create
  // // a function `moveDuck` that takes a duck object as an argument and sets the
  // // "top" and "left" CSS properties.
  // // HINT: Use Math.random() * window.innerWidth    for "left"
  // //       And Math.random() * window.innerHeight   for "top"
  // // setting the CSS style of `top` and `left` equal to each of these respectively would be a way of achieving this.
  // // concatenate each with 'px'
  // // you may need to refresh your browser to see the duck change positions.

  // const moveDuck = obj => {
  //   let duck = document.querySelector(".duck");
  //   duck.style.left = Math.random() * window.innerWidth + "px";
  //   duck.style.top = Math.random() * window.innerHeight + "px";
  // };

  // //moveDuck(document.querySelector(".duck"));

  // // 4. Try making the duck move to a different location every second (what did we use to do this several lines up??)
  // setInterval(moveDuck, 1000);

  // 5. Congratulations! Move on to part 2!

  // ---------------------------- PART 2 ---------------------------------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  const createDuck = () => {
    const duck = document.createElement("div");
    duck.className = "duck";
    body.appendChild(duck);
    const randomPosition = () => {
      duck.style.left = Math.random() * window.innerWidth + "px";
      duck.style.top = Math.random() * window.innerHeight + "px";
    };
    const changeDirection = num => {
      if (num > duck.style.left) {
        duck.classList.add("right");
      } else {
        duck.classList.remove("right");
      }
    };
    duck.style.backgroundPosition = randomPosition();
    const toggleFlap = () => {
      //duck = document.querySelector(".duck");
      duck.classList.toggle("flap");
    };
    const moveDuck = () => {
      let currentPosition = duck.style.left;
      randomPosition();
      changeDirection(currentPosition);
    };
    setInterval(toggleFlap, 250);
    setInterval(moveDuck, 1000);
    console.log(duck);
    return duck;
  };

  //createDuck();

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  const allTheDucks = () => {
    for (i = 0; i < 5; i++) {
      createDuck();
    }
  };
  allTheDucks();

  // 8. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //     it creates a duck, it appears in a random location
  // HINT: You may want to create a `randomPosition()` function that you can use
  //       to set the ducks' initial locations and in your `moveDuck()` function;

  // 9. Keep going! Move onto part 3!

  // --------------------------- PART 3 ------------------------------------

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  const boomMachine = () => {
    let duck = document.querySelectorAll(".duck");
    for (i = 0; i < duck.length; i++) {
      duck[i].addEventListener("click", function() {
        //console.log("first: ", this);
        this.classList.add("shot");
        setTimeout(function() {
          //console.log("inside: ", duck[i].removeChild());
          document.querySelector(".shot").remove();
          checkForWinner();
        }, 1000);
      });
    }
  };
  boomMachine();

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second) Hint Hint...use setTimeout
  //     as for removing the element check out https://dzone.com/articles/removing-element-plain

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. (How can we check the DOM for more than one element?, and how can we see how many elements we get back) If not, alert "YOU WIN!"

  const checkForWinner = () => {
    let duck = document.querySelectorAll(".duck");
    if (duck.length === 0 || duck.length === null) {
      alert("YOU WIN!");
    }
  };

  //checkForWinner();

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  //The wording is confusing me. You could do what I tried to do in the below question (#15).
  // I tried to store one of the position properties in a temporary variable and use that variable in a function that compares the current position to the next position.
  // If the current position is close to the next position, the bird can move slowly. If the position is farther away, it could apply/toggle a class that increases the speed.

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying and change the way the duck is facing

  // Added in above code (although - it looks odd, they change directions...but it's odd.)
  // FIN. You win 1 trillion tokens.  Play the day away!
};
