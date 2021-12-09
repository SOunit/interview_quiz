// Master the Coding Interview: Data Structures + Algorithms
// section 67
// https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12302774#overview

// run in browser
console.log(this);

console.log(this === window);

this.alert();

window.alert();

function a() {
  console.log(this);
}

window.a;

const object4 = {
  name: "object 4",
  a: function () {
    console.log(this);
  },
};

object4.a();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// this = (context)
// 1. this = this points object wrapping this keywrod
// 2. left side of dot, same idea of no 1.
