//Task 1: Quasi-Tagged Templates
const translations = {
  en: {
      greet: "Hello",
      intro: "Welcome to our website"
  },
  fr: {
      greet: "Bonjour",
      intro: "Bienvenue sur notre site web"
  }
};

const language = "fr"; // Change this to change the language
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}`;
const localizedIntroduction = localize`${introduction}`;

function localize(strings, value) {
  const languageTranslations = translations[language];
  const result = languageTranslations[value];
  return result;
}

console.log(localizedGreeting); // Expected: "Bonjour"
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web"