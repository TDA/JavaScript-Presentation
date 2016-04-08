/**
 * Created by schandramouli on 4/7/16.
 */

var a={},
  b={'key':'b'},
  c={'key2':'c'};
a[b]=123;
a[c]=456;
a['d'] = 666;

for(var obj in b)
{
  console.log(obj, b[obj]);
}

for(var obj in c)
{
  console.log(obj, c[obj]);
}
console.log(typeof b);
console.log(typeof c);
console.log(a);
console.log(a[[]]);
console.log(a[{}]);
console.log(a['d']);