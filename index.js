// Q. No. 1 - Add two Numbers.
const AddTwoNumbers = (a,b) => {

    return (a+b);
    };

// Q. No. 2 - Find if the conditions are obeyed or not?
const Is_Valid = (a,b) => {
    if (a<10 && a>b)
      return true;
    else {
      return false;
    }
  };

// Q. No. 3 - Check the conditons.
const Check = (A, B) => {
    if (A%10==0 && B%10==0){
    return true;}
    if (A%10!==0 && B%10!==0){
    return false;}
    if (A%10==0 || B%10==0){
    return true;}
};

// Q. No. 4 - Find the first digit of a 4 digit number
const First_Digit = (n) => {
    return String(n)[0]
  };

// Q. No. 5 - Find the last digit of a 4 digit number
const Last_Digit = (n) => {
    return String(n)[3]
 };

// Q. No. 6 - Find the remainder
const Find_the_remainder = (a,b) => {
    return (b%a);
};

// Q. No. 7 - Multipy two Numbers
const Multiply_two_number = (a,b) => {
    return (a*b);
};

// Q. No. 8 - Marks Calculator
const Sum = (A, B, C) => 
{
  return (A+B+C);
};

const Average = (A, B, C) => 
{
  return ((A+B+C)/3);
};
