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
    var results = [];
    _.forEach(crumbs, function(crumb) {
      results.push(Polymer.dom(me.$.crumbs).appendChild(crumb));
    });
  }
});
