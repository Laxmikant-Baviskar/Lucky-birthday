// const dateOfBirth = document.querySelector("#bdate");
// const luckyNumber = document.querySelector("#luckynum");
// const checkButton = document.querySelector("#check-number");
// const displayMessage = document.querySelector("#output-box");

// const calculateSum = (date) => {
//   let sum = 0;
//   date = date.replaceAll("-", "");
//   for (let digit of date) {
//     sum = sum + Number(digit);
//   }
//   return sum;
// };

// const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
//   console.log(sumOfDate, numberToCheck);
//   if (sumOfDate % numberToCheck === 0) {
//     return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
//   }
//   
// );
// };

// const showMessage = (message) => {
//   displayMessage.innerText = message;
// };

// checkButton.addEventListener("click", () => {
//   const date = dateOfBirth.value;
//   const numberToCheck = luckyNumber.value;
//   if (date && numberToCheck) {
//     const sumOfDate = calculateSum(date);
//     checkIsNumberLucky(sumOfDate, numberToCheck);😎
//   } else {
//     showMessage("Please enter both the fields");
//   }
// });



const dateOfBirth = document.querySelector("#bdate");
const luckynum = document.querySelector("#luckynum");
const checkNumberbutton = document.querySelector("#check-number");
const outputbox = document.querySelector("#outputbox");

function comapreValues (sum, luckynum)
{
    if (sum % luckynum===0)
    {
        // showmessage
        // outputbox.value = "Your Birthday is Lucky ";
        // outputbox.innerHTML = `<div><img src='emojisky.com-12822245.png'></div><div style="margin:auto; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div>`; "margin-right=50%;margin-top=10%;
        //  outputbox.innerHTML = `<div>  </div><div style="margin:auto; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div>`;
        // outputbox.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='https://image.emojisky.com/245/12822245-middle.png'></div><div style="margin:auto; margin-right:40%; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div></div>`;
        outputbox.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./emojisky.com-12822245.png'></div><div style="margin:auto; margin-right:40%; font-size: 1.4rem;">Yayy! Your birthday is lucky :)</div></div>`;
        // lucky_Bday - Copy.svg
        
    }
    else
    {
        // outputbox.value = "Your Birthday is not Lucky ";
        outputbox.innerHTML = `<div class = "lucky"><div class = "lucky-img"><img src='./emojisky.com-6045.png'></div><div style="margin:auto; margin-right:40%; font-size: 1.4rem;">Oh O! Your Birthday is not Lucky :( </div></div>`;

    }
}

function checkBirthdateisLucky()
{
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum && dob)
    {
    comapreValues(sum,luckynum.value)
    }
    else
    {
        outputbox.value = "Please Enter both the fields ";
    }
}

function calculateSum(dob)
{
    dob = dob.replaceAll("-","");
    let sum = 0;
    for (let i=0; i<dob.length; i++)
    {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumberbutton.addEventListener("click",checkBirthdateisLucky
// {
    
//         const dob = dateOfBirth.value;
//         const sum = calculateSum(dob);
//         if(sum && dob)
//         {
//         comapreValues(sum,luckynum.value)
//         }
//         else
//         {
//             outputbox.innerText = "Please Enter both the fields ";
//         }
    
// }
);