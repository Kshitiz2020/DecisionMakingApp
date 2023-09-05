function decision() {
  const userName = document.querySelector("#fname").value;
  const zodicSign = document.querySelector("#yzodic").value;
  const question = document.querySelector("#que").value;

  if (
    userName.length !== 0 &&
    zodicSign.length !== 0 &&
    question.length !== 0
  ) {
    const rnum = Math.floor(Math.random() * 10 + 1);
    const ans = answer(rnum);
    document.querySelector("#answer").innerHTML = ans;
  } else {
    document.querySelector("#answer").innerHTML =
      "please enter the valid input";
  }

  /* the above condition ask user name  and checks it is vaild or not */

  //generating random number
  /* the above queries ask user to ask the question  and generates the random number to chcek from below given conditions */

  /*declaring function and using switch note that we have not use break there beacuse when return is used we dont use break.*/
}
function answer(rnum) {
  switch (rnum) {
    case 1:
      return "The stars say yes, go for it!";

    case 2:
      return "Trust your instincts and take the leap";

    case 3:
      return "Hmm, better try again later";

    case 4:
      return "Consider all options before making a move";

    case 5:
      return "Outlook is bright, proceed with confidence";

    case 6:
      return "Seek advice from a trusted friend before deciding";

    case 7:
      return "Signs point to unexpected opportunities";

    case 8:
      return " Toss-up, make a choice and see what happens";

    case 9:
      return "Take a step back and reassess before moving forward";

    case 10:
      return "Not the right time, patience will bring better results.";

    default:
      return "invalid number";
  }
}
