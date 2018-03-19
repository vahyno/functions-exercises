// TODO: add your solutions here!

function power(num, exp) {
  let powered = 1;
    for (var i = 1; i <= exp; i++) {
      powered*=num;
    }
    return powered;
}

function areaOfCircle(radius) {
    return 3.14*radius*radius;
}

function pythagoreanTheorem(a,b){
  let c = power(a,2)+power(b,2)
  return c;
}

function printTriangle(num){
  let star = "";
  for (var i = 0; i < num; i++) {
    star += "*"
    console.log(star);
  }
}

// 12. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
// Example: printPyramid(10);
//
//            *
//           * *
//          * * *
//         * * * *
//        * * * * *
//       * * * * * *
//      * * * * * * *
//     * * * * * * * *
//    * * * * * * * * *
//   * * * * * * * * * *
// Warning: This is a surprisingly tricky interview-level exercise. Try at your own risk!

function printPyramid(length) {
	// TODO: Place your code here
}
