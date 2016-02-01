$(function() {
  var catsArr   = [];
  var catsCount = {};
  var postsEl   = $('#posts');
  var navEl     = $('#blog-nav');

  for(var i = 0; i < $('li', postsEl).length; i++) {
    var cat = $('li:eq(' + i + ') .category', postsEl).text();

    if($.inArray(cat, catsArr) === -1) {
      catsArr.push(cat);
      catsCount[cat] = 1;
    } else {
      catsCount[cat] += 1;
    }
  }

  catsArr = catsArr.sort();

  for(var i = 0; i < catsArr.length; i++) {
    navEl.append('<li>' +
      '<a href="#' + catsArr[i] + '">' +
        '<span class="title">' + catsArr[i] + '</span>' +
        '<span class="count">' + catsCount[catsArr[i]] + ' Posts</span>' +
        '<span class="close">&times;</span>' +
      '</a>' +
    '</li>');
  }

  $('li', navEl).click(function() {
    var el       = $(this);
    var catTitle = $('.title', el).text().toLowerCase();
    var catsEl   = $('.category-' + catTitle);

    $('.active', navEl).not(el).removeClass('active');

    if(el.hasClass('active')) {
      el.removeClass('active');
      $('li', postsEl).show();
    } else {
      el.addClass('active');
      $('li', postsEl).not(catsEl).hide();
      catsEl.show();
    }

    return false;
  });
});
