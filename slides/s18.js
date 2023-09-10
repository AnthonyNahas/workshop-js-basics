// S18 var is function scoped - ELEVATION

var example = 1;

// scope start
if (true) {
  var example = 2;
  console.log('Inside:  ' + example);
}
// scope end

console.log('Outside: ' + example);
// => Inside:  2
// => Outside: 2
