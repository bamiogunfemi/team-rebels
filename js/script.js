<<<<<<< HEAD
<<<<<<< HEAD


$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = '../components/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});
=======
=======
>>>>>>> f5aa356cc6597da85c582a0a44904b3c543fb790
$(function(){
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = '../components/' + $(this).data('include') + '.html';
      $(this).load(file);
    });
<<<<<<< HEAD
  });
>>>>>>> work on service page two
=======
  });
>>>>>>> f5aa356cc6597da85c582a0a44904b3c543fb790
