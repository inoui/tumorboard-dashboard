$(function() {

const seconds = 1;

const gridStep = 20;

/* TODO: fix to event based instead of time based */
setTimeout(function() {
  var body = document.getElementsByTagName('body')[0];
  console.log(body);

  $('.box').each(function() {
    // TODO: does not work yet.
    $(this).resizable({
      grid : 50, 
    });
    
    $(this).draggable({
      "grid" : [ gridStep, gridStep ],
      "containment" : "parent"
    });
  });

}, seconds * 1000);

});