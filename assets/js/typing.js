// typing.js

const textElement = document.querySelector(".card__name");
const texts = ["Khải Hoàn (NCK)", "I'm a Developer", "I'm a Designer"];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Tốc độ gõ là 100ms
    } else {
        setTimeout(eraseText, 2000); // Chờ 2 giây trước khi xóa nội dung
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Tốc độ xóa là 50ms
    } else {
        textIndex = (textIndex + 1) % texts.length; // Chuyển sang nội dung tiếp theo
        setTimeout(typeText, 1000); // Chờ 1 giây trước khi bắt đầu gõ nội dung mới
    }
}

typeText(); // Bắt đầu quá trình gõ
