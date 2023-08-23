const textElement = document.querySelector(".card__name");
const titleElement = document.querySelector("title");
const texts = ["Khải Hoàn (NCK)", "I'm a Developer", "I'm a Designer"];
const titleTexts = ["Khải Hoàn", "NCK"];
let textIndex = 0;
let charIndex = 0;
let titleIndex = 0;
let titleCharIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 1000);
    }
}

function typeTitle() {
    if (titleCharIndex < titleTexts[titleIndex].length) {
        titleElement.textContent += titleTexts[titleIndex].charAt(titleCharIndex);
        titleCharIndex++;
        setTimeout(typeTitle, 100);
    } else {
        setTimeout(eraseTitle, 2000);
    }
}

function eraseTitle() {
    if (titleCharIndex > 0) {
        titleElement.textContent = titleTexts[titleIndex].substring(0, titleCharIndex - 1);
        titleCharIndex--;
        setTimeout(eraseTitle, 50);
    } else {
        titleIndex = (titleIndex + 1) % titleTexts.length;
        setTimeout(typeTitle, 1000);
    }
}

typeText();
typeTitle();