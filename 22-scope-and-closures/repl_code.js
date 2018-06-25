const fiveDollarRide = {
  cost:5,
  canRide:function(amountInWallet) {return amountInWallet >= this.cost}
}

fiveDollarRide.canRide(6)
fiveDollarRide.cost = 1
fiveDollarRide.canRide(2)

// function generateRideValidator(rideCost) {
//   return function(amoutInWallet) {
//     return amoutInWallet >= rideCost
//   }
// }

// const tenDollarRide = generateRideValidator(10)
// const fiveDollarRide = generateRideValidator(5)

// tenDollarRide

// function one() {
//   var oneValue = 1
//   return function two() {
//     oneValue
//     debugger
//     var twoValue = 2
//     return function three() {
//       oneValue
//       twoValue
//     debugger
//     var threeValue = 3
//   }
//   }

// }

// one()()()



// function outer() {
//   var secret = 'outer secret'
//   return function() {
//     secret
//     debugger
//     console.log(secret)
//   }
// }

// var outerSecret = outer()
// debugger
// outerSecret()

// function a() {
//   var secret = 'secret of A'
//   function c() {
//     secret
//     debugger
//   }
//   b(c)
// }

// function b(cb) {
//   var secret = 'secret of B'
//   cb()
// }

// a()


// function outer() {
//   var secret = 'outer secret'
//   function inner() {
//     secret
//     debugger
//   }
//   inner()
// }
// outer()


// function generateAFn() {
//   var secret
//   return function() {
//     console.log(secret)
//   }
// }

// const printSecret = generateAFn()


// function fnThatRetrunsAFn() {
//   return function() {console.log('Ciao from myFn')}
// }

// let myFn = fnThatRetrunsAFn()
// let fnThatCallsACallBack = function(cb) {cb()}

// fnThatCallsACallBack(myFn)



// function letsBreakHoisting() {
//   function some() {console.log('Buongiorno')}
//   var someFn = function myVeryOwnName() {myVeryOwnName()}
//   someFn()
// }
// letsBreakHoisting()

// const jsIceCream = ['pistacchio']

// jsIceCream.push('tomato')
// jsIceCream

// var x = {letter:'a'}

// const test = x

// console.log(test)

// x = 8
// console.log(test)


// function tdzDemo() {
//   console.log(letter)
//   let letter = 'l'
// }
// tdzDemo()


// function showBlockScope() {
// let letter = 'z'
//   console.log(letter)
// {
//   let letter = 'a'
//   console.log(letter)
//   {
//     let letter = 'b'
//     console.log(letter)
//   }
//   console.log(letter)
// }
// console.log(letter)
// }

// showBlockScope()



// var where = 'outside'

// function outer() {
//   where = 'insider outer'
//   console.log(where)
//   function inner() {
//     console.log(where)
//   }
//   inner()
// }


// outer()
// console.log(where)