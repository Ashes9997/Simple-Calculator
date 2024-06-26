document.addEventListener("DOMContentLoaded", () => {
  let exp = "";
  const expression = document.querySelector(".expression");
  const result = document.querySelector(".result");
  const errorText = document.querySelector(".errorText");

  function makeExp(char) {
    let temp = exp + char;
    if (
      !temp.includes("++") &&
      !temp.includes("--") &&
      !temp.includes("+-") &&
      !temp.includes("-+") &&
      !temp.includes("**") &&
      !temp.includes("//") &&
      !temp.includes("+*") &&
      !temp.includes("+/") &&
      !temp.includes("-*") &&
      !temp.includes("-/") &&
      !temp.includes("*+") &&
      !temp.includes("*-") &&
      !temp.includes("*/") &&
      !temp.includes("/+") &&
      !temp.includes("/-") &&
      !temp.includes("/*") &&
      !temp.includes("//") &&
      !temp.includes("%+") &&
      !temp.includes("%-") &&
      !temp.includes("%*") &&
      !temp.includes("%/") &&
      !temp.includes("+%") &&
      !temp.includes("-%") &&
      !temp.includes("*%") &&
      !temp.includes("/%")
    ) {
      // console.log("temp ", temp);
      exp += char;
      expression.textContent = exp;
  }

  function makeResult() {
    try {
      if (exp) {
        const mresult = eval(exp);
        result.textContent = mresult;
      } else {
        errorText.textContent = " Not a valid Expression";
      }
  }

  function clearAll() {
      exp = "";
      expression.textContent = "_";
      result.textContent = "0";
  }

  function deleteLast() { 
      exp = exp.slice(0, -1);
      expression.textContent = exp || "_";
  }

  const calculateSQRT = () => {
    // console.log("sqroot");
    const sqrt = Math.sqrt(exp);
    if (sqrt.toString() !== "NaN") {
      result.textContent = sqrt.toFixed(4);
      errorText.textContent = "";
    } else {
      errorText.textContent = "not a valid input";
    }

    // console.log("sqroot", sqrt);
  };

  window.makeExp = makeExp;
  window.makeResult = makeResult;
  window.clearAll = clearAll;
  window.deleteLast = deleteLast;
  window.calculateSQRT = calculateSQRT;
});
