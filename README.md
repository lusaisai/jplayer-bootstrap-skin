I see there're not many jplayer skins on the web, so I created this one simply using bootstrap css and adding a little javascript. It looks like follows,

![screenshot](https://raw.githubusercontent.com/lusaisai/jplayer-bootstrap-skin/master/screenshot.png)

Usage
-----
It depends on BootStrap, make sure it is already included, then include the js and css file in your page.
```html
    <link href="jplayer-bootstrap.css" rel="stylesheet">
```

JPlayer does not have buffer status showing, you can include the following javascript to show it.
```html
    <script type="text/javascript" src="jplayer-buffer.js"></script>
```

In your javascript code, construct an object with the jplayer id, then run the buffer method which will return a function object, bind this object to both timeupdate and progress event. See example.html for details.
```javascript
	var buffer = new JPlayerBuffer('jquery_jplayer_1').buffer();
    ...
    timeupdate: buffer,
    progress: buffer
    ...
```
