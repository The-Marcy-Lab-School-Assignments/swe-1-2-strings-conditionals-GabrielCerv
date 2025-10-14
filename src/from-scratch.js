const measureRain = (inches) => {
  if (inches === 0) {
    return 'drought'
  }
  if (inches < 2) {
    return 'dry'
  }
  if (inches < 4) {
    return 'average'
  }
  if (inches < 6) {
    return 'rainy'
  }
  return 'flood'
};

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    return 'Hiss hiss!'
  }
  if (breed === 'cat' && age < 5) {
    return 'Mew mew!'
  }
  if (breed === 'cat' && age >= 5) {
    return 'Meow meow!'
  }
  if (breed === 'dog' && age < 5) {
    return 'Arf arf!'
  }
  if (breed === 'dog' && age >= 5 && age < 10) {
    return 'Woof woof!'
  }
  if (breed === 'dog' && age >= 10) {
    return 'Boof!'
  }
  return "Happy birthday!"
};

const funTypes = () => {
  if (jsType === null) {
    return 'Nothing, and I did set that'
  } else if (Number.isNaN(jsType)) {
    return "Well, now you're just showing off."
  } else if (typeof (jsType) === 'boolean') {
    return "To bool, or not to bool?"
  } else if (typeof (jsType) === 'undefined') {
    return "Nothing, and I did set that."
  } else if (typeof (jsType) === 'string') {
    return "That's just some text."
  } else if (Array.isArray(jsType)) {
    return "I order you to be indexed."
  } else if (typeof (jsType) === 'object') {
    return "Anybody got the key?"
  } else if (typeof (jsType) === 'number') {
    return "That's a good number."
  }
};

const rounder = (float, roundingSetting) => {
  if (roundingSetting === "up") {
    return Math.ceil(float)
  } else if (roundingSetting === "down") {
    return Math.floor(float)
  } else if (roundingSetting === "honest") {
    return Math.round(float)
  }
};

const formatName = (first, last) => {
  const firstName = first[0]
  const lastName = last[0]
  let fullName = `${firstName.toUpperCase()}${first.slice(1).toLowerCase()} ${lastName.toUpperCase()}${last.slice(1).toLowerCase()}`
  return fullName
};

const extractDomain = (email) => {
  return email.split("@")[1];
};

const startsWithVowel = (str) => {
  const vowel = ["a", "e", "i", "o", "u"]
  let lowercase = str[0].toLowerCase();
  if (vowel.includes(lowercase)) {
    return true
  } else {
    return false
  }
};

const rotate = (str, num) => {
  num = num % str.length;
  return str.slice(-num) + str.slice(0, -num)
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  formatName,
  extractDomain,
  startsWithVowel,
  rotate,
};
