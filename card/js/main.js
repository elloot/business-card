const logo = document.querySelectorAll('#name-svg path');

for (let i = 0; i < logo.length; i++) {
  console.log(`Path ${i + 1} has length ${logo[i].getTotalLength()}`);
}
