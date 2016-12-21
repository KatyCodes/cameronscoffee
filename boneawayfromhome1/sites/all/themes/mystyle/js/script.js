/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {
// start


      $(document).ready(function () {
        setTimeout(function(){
          $("#logo").fadeIn();
           setTimeout(function(){
            $("#logo > img").css({
              'position': 'relative',
              'margin-left': '500px',
              'right': '0px',
              'max-width': '100px'
          });
          setTimeout(function(){
            $("body1")
          }, body)
          }, 1000);
        }, 1000);
      });


// finish
    }
  };

})(jQuery, Drupal, this, this.document);
