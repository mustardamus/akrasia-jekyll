## Pictures

Full size pictures are located in `./pictures` and have two sub-levels:

    ./pictures
      /Country-Name
        /City-Name
          /img.jpg, img.jpg
        /City-Name
          /img.jpg, img.jpg
      /Country-Name
        ...

To resize the pictures and generate thumbnails run the Ruby script:

    ruby tasks/pictures.rb

The resized pictures and thumbnails will be saved in `./assets/pictures`. This
folder will be copied by Jekyll.

Also it will generate a `./_data/pictures.json` file which holds all Countries,
Cities and Filenames. This means all the pictures will be available to Jekyll
and can be iterated with the template system.

Furthermore the `./_data/pictures.json` file is symlinked to
`./assets/pictures.json` and copied on building the Jekyll site. That way you
can request all the pictures with a Ajax request, for example.

The thumbnails are in the same folder as the corresponding pictures, and named
like `picture_thumb.jpg`. You can use the Liquid filter `thumb_name` to
generate these names:

    {{ picture.jpg | thumb_name }}  ->  picture_thumb.jpg

## Credits

- Background Pattern: http://subtlepatterns.com/use-your-illusion/
- Icons: http://simpleicons.org/
