/*
Code wars challenge: https://www.codewars.com/kata/string-incrementer?utm_source=newsletter&utm_medium=email&utm_campaign=weekly_coding_challenges&utm_term=2019-03-12

after username is verified as taken, write function to suggest a new username with the requirements:

1. if there's no numbers at the end of username, add 1;
2. if there's numbers at the end, increment number by 1;
3. if there's trailing zeros at the beginning of the number keep them;
*/

const incrementNumberInUsername = (username) => {
    
    let num = 0, flag = true, i = 0; chainedZeros = 0;

    //itertate backwards from the end of the string until the last portion can't be converted to number
    while (flag && i < username.length) {
        //get new number or NaN    
        let newNum = parseInt(username.slice(-(i + 1))); 
        if (isNaN(newNum)) {
            //stop iterating
            flag = false;
        } else if(num==newNum){
            //count trailing zeros and continue iterating
            chainedZeros++;           
        }else{
            //set trailing zeros if it's not at the beggining of number and store the number
            num = newNum;
            chainedZeros = 0;            
        }
        i++;
    }   
    //get the username without the numbers except for trailing zeros
    let newUsername = username.slice(0,username.length-(--i-chainedZeros));
    //append the number incremented by 1    
    return newUsername + (num + 1);
}

//testing:
console.log(incrementNumberInUsername('Maria')); //Maria1
console.log(incrementNumberInUsername('Maria5')); //Maria6
console.log(incrementNumberInUsername('Maria100')); //Maria101
console.log(incrementNumberInUsername('Maria00100')); //Maria00101
