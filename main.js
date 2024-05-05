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

//Task 2: Advanced Tagged Template
function highlightKeywords(strings, keywords) {
  let result = ''; 
  const templateElements = strings.split(/\${\d+}/);
  templateElements.forEach((element, index) => {
      result += element; 
      result += `<span class='highlight'>${keywords[index]}</span>`;
  });
  return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);