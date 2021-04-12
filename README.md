# Gundalascroll
I've tired to find best method to make sure prevent scroll without change width() cause scrollbar lost.

So I decide to make my own and first library called gundalascroll.js.

Lets try and create issue if you find! This extremely lightweight library for preventscroll.

## How to use GundalaScroll.js
```javascript
GScroll.preventScroll();    // To Prevent Scroll
GScroll.activeScroll();     // To Active Scroll
GScroll.toggleScroll();     // To Toggle Scroll
```

There is two parameter for preventscroll and togglescroll, class & init.
```javascript
GScroll.preventScroll({
  class: "Extra Class",
  init: function() {
    console.log("fire after prevent scroll");
  }
});
```

### Event GundalaScroll.js
```javascript
window.addEventListener("gscroll-prevent", function(event) {
  console.log("Scroll Deactive");
  console.log("widthWrapper: " + event.detail.widthWrapper);
  console.log("spaceScroll: " + event.detail.spaceScroll);
});

window.addEventListener("gscroll-active", function() {
  console.log("Scroll Active");
});
```

### Compatibility
* Make sure html { scroll-behaviour: unset; }, if you find jumping scroll after GScroll.activeScroll().
