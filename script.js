// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 3000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var counterRoot = new Vue({

	el: "#counter",

	data: {

		counter: 1

	}

})

var counterRoot = new Vue({

	el: "#counter1",

	data: {

		counter1: 3

	}

})

var counterRoot = new Vue({

	el: "#counter2",

	data: {

		counter2: 3

	}

})

var counterRoot = new Vue({

	el: "#counter3",

	data: {

		counter3: 3

	}

})

var counterRoot = new Vue({

	el: "#counter4",

	data: {

		counter4: 1

	}

})

var counterRoot = new Vue({

	el: "#counter5",

	data: {

		counter5: 1

	}

})

var counterRoot = new Vue({

	el: "#counter6",

	data: {

		counter6: 1

	}

})

var counterRoot = new Vue({

	el: "#counter7",

	data: {

		counter7: 4

	}

})

var counterRoot = new Vue({

	el: "#counter8",

	data: {

		counter8: 1

	}

})

var counterRoot = new Vue({

	el: "#counter9",

	data: {

		counter9: 3

	}

})

var counterRoot = new Vue({

	el: "#counter10",

	data: {

		counter10: 7

	}

})

var counterRoot = new Vue({

	el: "#counter11",

	data: {

		counter11: 1

	}

})

var counterRoot = new Vue({

	el: "#counter12",

	data: {

		counter12: 1

	}

})

var counterRoot = new Vue({

	el: "#counter13",

	data: {

		counter13: 1

	}

})

var counterRoot = new Vue({

	el: "#counter14",

	data: {

		counter14: 3

	}

})

var counterRoot = new Vue({

	el: "#counter15",

	data: {

		counter15: 3

	}

})

var counterRoot = new Vue({

	el: "#counter16",

	data: {

		counter16: 3

	}

})

var counterRoot = new Vue({

	el: "#counter17",

	data: {

		counter17: 1

	}

})

var counterRoot = new Vue({

	el: "#counter18",

	data: {

		counter18: 1

	}

})

var counterRoot = new Vue({

	el: "#counter19",

	data: {

		counter19: 10

	}

})

var counterRoot = new Vue({

	el: "#counter20",

	data: {

		counter20: 3

	}

})

var counterRoot = new Vue({

	el: "#counter21",

	data: {

		counter21: 3

	}

})

var counterRoot = new Vue({

	el: "#counter22",

	data: {

		counter22: 10

	}

})





















var counterRoot = new Vue({

	el: "#counter0",

	data: {

		counter0: 1

	}

})

var counterRoot = new Vue({

	el: "#counter1a",

	data: {

		counter1a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter2a",

	data: {

		counter2a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter3a",

	data: {

		counter3a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter4a",

	data: {

		counter4a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter5a",

	data: {

		counter5a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter6a",

	data: {

		counter6a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter7a",

	data: {

		counter7a: 4

	}

})

var counterRoot = new Vue({

	el: "#counter8a",

	data: {

		counter8a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter9a",

	data: {

		counter9a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter10a",

	data: {

		counter10a: 7

	}

})

var counterRoot = new Vue({

	el: "#counter11a",

	data: {

		counter11a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter12a",

	data: {

		counter12a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter13a",

	data: {

		counter13a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter14a",

	data: {

		counter14a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter15a",

	data: {

		counter15a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter16a",

	data: {

		counter16a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter17a",

	data: {

		counter17a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter18a",

	data: {

		counter18a: 1

	}

})

var counterRoot = new Vue({

	el: "#counter19a",

	data: {

		counter19a: 10

	}

})

var counterRoot = new Vue({

	el: "#counter20a",

	data: {

		counter20a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter21a",

	data: {

		counter21a: 3

	}

})

var counterRoot = new Vue({

	el: "#counter22a",

	data: {

		counter22a: 10

	}

})



