/**
 * Created by schandramouli on 4/5/16.
 */

var fullname = 'John Doe';
var obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    },
    test: this.getFullname
}
};

console.log(obj.prop.getFullname);

//var test = obj.prop.getFullname;
console.log(obj.prop.test);

//console.log(test());