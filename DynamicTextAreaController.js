({

  onRender: function(component, event, helper) {
    if (component.get("v.rendered")) {
      return;
    }
    component.set("v.rendered", true);
    helper.setHeight(component);
  },

  recalculateHeight: function(component, event, helper) {
    helper.setHeight(component);
  },

  focus: function(component, event, helper) {
    var el = document.getElementById(component.getGlobalId() + '-textarea');
    el.focus();
  },
  getValue: function(component, event, helper) {
    var el = document.getElementById(component.getGlobalId() + '-textarea');
    return el.value;
  },
  handleOnChange: function(component, event, helper) {
    var el = document.getElementById(component.getGlobalId() + '-textarea');
    component.set("v.value", el.value);

    var timer = component.get("v.storedTimer");
    var timeout = 20;
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = window.setTimeout(
      $A.getCallback(function() {
        helper.setHeight(component);
      }), timeout
    );
    component.set("v.storedTimer", timer);

  },
  handleOnFocus: function(component, event, helper) {
    component.getEvent("onfocus").fire();
  },
  handleOnClick: function(component, event, helper) {
    component.getEvent("onclick").fire();
    event.preventDefault();
    event.stopPropagation();
  }
})