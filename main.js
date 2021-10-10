// ------------------ 1
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Learn JavaScript</title>
    <script>
      // --------------- this code will not run because needs to read the document first. and didn't see the element ----------
      document.getElementById("el").style.color = "red";
    </script>
    <script>
      // ----------------- this code will run because the function of onload make the document render first then run the js code ----------
      window.onload = function () {
        document.getElementById("el").style.color = "red";
      };
    </script>
  </head>
  <body>
    <h1 id="el">Page Title</h1>
    <script>
      // ------------- this code will run because it read the document already and saw the element------------------
      document.getElementById("el").style.color = "red";
    </script>
  </body>
</html>`

// ------------------ 2
document.write('<h1>Elzero</h1>')
document.querySelector('h1').style.cssText= `color: blue;
font-size: 80px;
font-weight: bold;
text-align: center;
font-family: Arial`;

// ------------------ 3
console.log('%cElzero %cWeb %cSchool', 'color:red; font-size: 40px;', 'color: green; font-weight: bold; font-size: 40px', 'color: blue; font-size: 40px')

// ------------------4
console.group('group 1');
console.log("message one");
console.log("message two");
console.group('child group');
console.log("message one");
console.log("message two");
console.group('grand child group')
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('group 2')

