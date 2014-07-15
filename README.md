I see there're not many jplayer skins on the web, so I created this one simply using bootstrap css.


Usage
-----
It depends on BootStrap, make sure it is already included, then include the js and css file in your page.
```html
    <link href="jplayer-bootstrap.css" rel="stylesheet">
    <script type="text/javascript" src="jplayer-buffer.js"></script>
```

In your javascript code, first construct an object with the jplayer id, then run the buffer method which will return a function object, bind this object to timeupdate event. See example.html for the details.
```javascript
    var jBuffer = new JPlayerBuffer('jquery_jplayer_1');
    ...
    timeupdate: jBuffer.buffer()
    ...
```
