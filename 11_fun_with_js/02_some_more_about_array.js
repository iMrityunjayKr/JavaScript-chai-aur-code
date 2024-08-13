const myArr = [] 
// %DebugPrint(myArr)

/*
Array is of two types 
* Continuous (packed), Holey
//SMI (small integer)
//Packed elements
// Double(float, string, function)
 */
const arrTwo = [1,2,3,4,5] //PACKED_SMI_ELEMENTS -- elements are very restrictive only numbers are allowed in packed_smi_elements

arrTwo.push(6.0) //PACKED_DOUBLE_ELEMENTS -- as there is a double value in the array so it is packed_double_element.

arrTwo.push('7') //PACKED_ELEMENTS

//note: default array type is packed_smi_element, but once it is downgraded to other array type then it can never come back to it's default type even if the element is deleted.

arrTwo[10] =11 //HOLEY_ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);//output is undefined, and it is very costly operation

/* 
Note:
Q: How array finds an index- value.
console.log(arrTwo[9]); // let's how we check this.
//bound_check - easy it check it array is out of bound. Ans: no
second check - hasOwnProperty(arrTwo, 9)
second check - hasOwnProperty(arrTwo.prototype, 9)
third check - hasOwnProperty(object.prototype, 9)
* hasOwnProperty is very expensive operation
hence, holes are very expensive in js

OPTIMISATION_LEVEL 
//SMI > DOUBLE > PACKED -- Packed element
// H_SMI > H_DOUBLE > H_PACKED
*/

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

//SMI > DOUBLE > PACKED -- Packed element
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
//just 3 holes, HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS

//other way to declare arrFour

const arrFive = [] 
arrFive.push('1')//PACKED_ELEMENTS
arrFive.push('2')//PACKED_ELEMENTS
arrFive.push('3')//PACKED_ELEMENTS

const arrSix = [1,2,3,4,5] //smi

arrSix.push(Infinity)//Double -- downgraded.

//note: Recommended to use methods[for, for-of, forEach] of javascript(internal)



