var Flytxt = window.Flytxt = window.Flytxt || {};
Polymer({
  is: 'flytxt-breadcrumbs',
  
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    
    crumbs: Array
  },
  
  attached: function() {
    var me = this;
    if (me.show) {
      Flytxt.breadcrumbInstance = this;
    } else {
      Flytxt.crumbs = Polymer.dom(me).querySelectorAll('flytxt-breadcrumb');
    }
    if (Flytxt.breadcrumbInstance) {
      Flytxt.breadcrumbInstance.setCrumbs();
    }
  },
  
  setCrumbs: function() {
    var me = this;
    me.$.crumbs.innerHTML = '';
    Flytxt.crumbs.forEach(function(crumb) {
      Polymer.dom(me.$.crumbs).appendChild(crumb);
    });
  }
});
