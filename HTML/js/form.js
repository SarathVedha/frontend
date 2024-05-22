// const children = document.getElementsByTagName("input");
// console.log(children)
// children.forEach((child) => {
//   console.log(child);
//   child.autocomplete = "off";
// });
function isNumber(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function omitSpecialChar(event) {
  const charCode = event.which ? event.which : event.keyCode;
  return (
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123) ||
    charCode == 8 ||
    charCode == 32 || //32 is space
    (charCode >= 48 && charCode <= 57)
  );
}

function numberValidationOmitChar(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function integerOnly(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

function alphabetsAndSpaceOly(event) {
  var charCode = event.which ? event.which : event.keyCode;
  if (
    (charCode < 65 || charCode > 90) &&
    (charCode < 97 || charCode > 122) &&
    charCode != 32
  ) {
    return false;
  } else {
    return true;
  }
}

function allowOnlyArabicAndAlphaNumericSpace(event) {
  const regExp = /^([a-zA-Z0-9\s\u0600-\u06FF])/;
  return regExp.test(event.key);
}
