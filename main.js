// assign 1 ------------
let a = 10;
a < 10 ? console.log(10): a >= 10 && a <= 40 ? console.log('10 to 40') : a > 40 ?  console.log('> 40') : 'unknown';
// assign 2 ------------
console.log('##########')
let st = 'Elzero web school';
if (`${st.indexOf('e')}${st.indexOf('r')}`=== '34') {
  console.log('good');
}
console.log('##########')
// assign 3 ------------
if(`${st.includes('w') == true ? 'w':''}` === 'w') {
  console.log('good');
}
console.log('##########')
// assign 4 ------------
if(typeof st.indexOf('E') !== 'string') {
  console.log('good');
}
console.log('##########')
// assign 5 ------------
if(typeof st.indexOf('E') === 'number') {
  console.log('good');
}
console.log('##########')
// assign 6 ------------
if (`${st.slice(0,6)}${st.slice(0,6)}` === 'ElzeroElzero') {
  console.log('good');
}
