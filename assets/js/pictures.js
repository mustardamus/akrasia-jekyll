$(function() {
  $('#content .pictures a').fancybox({
    padding : 0,
    closeBtn: false,
    helpers : { overlay: { locked: false }}
  });

  var citiesNavEl = $('#cities-nav');
  var citiesNum   = $('.first-row li', citiesNavEl).length;
  var halfNum     = Math.floor(citiesNum / 2);

  for(var i = 0; i < citiesNum - halfNum; i++) {
    var el = $('.first-row li:last-child', citiesNavEl);
    console.log(el);
    $('.second-row', citiesNavEl).append(el);
  }
});
