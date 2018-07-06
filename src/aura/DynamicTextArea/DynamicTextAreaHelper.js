({
  setHeight: function(component) {
    var el = document.getElementById(component.getGlobalId() + '-textarea');
    // compute the height difference which is caused by border and outline
    var outerHeight = parseInt(window.getComputedStyle(el).height, 10);
    //3 pix is just a tiny static extra buffer. Adjust if necessary
    var diff = (outerHeight - el.clientHeight) + 3;

    // set the height to 0 incase it needs to be set smaller
    el.style.height = 0;

    // set the correct height
    // el.scrollHeight is the full height of the content, not just the visible part
    el.style.height = Math.max(60, el.scrollHeight + diff) + 'px';
  }
})