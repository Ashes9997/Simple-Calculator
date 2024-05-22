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
          const mresult = eval(exp);
          result.textContent = mresult;
      } catch (e) {
          result.textContent = "Error";
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

  window.makeExp = makeExp;
  window.makeResult = makeResult;
  window.clearAll = clearAll;
  window.deleteLast = deleteLast;
  window.calculateSQRT = calculateSQRT;
});
