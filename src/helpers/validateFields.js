
export function ValidateString(input, regex) {
  if (regex.test(input) && input.length > 1) {
    return true
  } else {
    return false
  }
}

export function ValidateEmail(input, regex) {
  if (regex.test(input) && input.length > 5) {
    return true
  }
  else {
    return false
  }
}

export function ValidatePhoneNumber(input, regex) {
  if (regex.test(input) && input.length > 5) {
    return true
  }
  else {
    return false
  }
}