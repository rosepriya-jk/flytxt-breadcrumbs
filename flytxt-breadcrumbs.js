var instance;
var crumbs;

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
      instance = this;
    } else {
      crumbs = Polymer.dom(me).querySelectorAll('flytxt-breadcrumb');
    }
    if (instance) {
      instance.setCrumbs();
    }
  },
  
  setCrumbs: function() {
    var me = this;
    me.$.crumbs.innerHTML = '';
    _.forEach(crumbs, function(crumb) {
      Polymer.dom(me.$.crumbs).appendChild(crumb);
    });
  }
});
