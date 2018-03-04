function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
<<<<<<< HEAD
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string == whisper(string)) {
    return "I can't hear you!"
  } else if (string == shout(string)) {
    return "YES INDEED!"
  } else {
    (string == "I love you, Grandma.")
    return "I love you, too."
  }
=======
  console.log(toUpperCase(string);
>>>>>>> b8402c8839dabcc58f5ce662b0380ad244e58ddc
}
