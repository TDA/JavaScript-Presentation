/**
 * Created by schandramouli on 4/7/16.
 */

var names = ['zero', 'one', 'two'],
  i;

// function
introductions = [];
for (i = 0; i < 3; i++) {
  introductions[i] = function(number) {
    return names[i];
  };
}
console.log(introductions[0].toString()); // ?
console.log(introductions[1].toString());
console.log(introductions[2].toString());
console.log(introductions[0]()); // ?