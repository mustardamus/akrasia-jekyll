// yummy late night hacking :)

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {
  $.getJSON('/assets/pictures.json', function(cities) {
    var picsArr = [];
    var picsEl  = $('#random-pics');

    for(var i = 0; i < cities.length; i++) {
      for(var x = 0; x < cities[i].pictures.length; x++) {
        picsArr.push({
          city   : cities[i].city,
          country: cities[i].country,
          picture: cities[i].pictures[x]
        });
      }
    }

    for(var z = 0; z < 3; z++) {
      var rand = getRandomInt(0, picsArr.length - 1);
      var pic  = picsArr[rand];
      var path = pic.country + '/' + pic.city + '/' + pic.picture.replace('.', '_thumb.');

      picsEl.append('<li><a href="/pictures"><img src="/assets/pictures/' + path + '"></a></li>')
    }
  });
});
