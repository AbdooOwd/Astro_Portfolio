document.addEventListener('DOMContentLoaded', () => {
    const pElement = document.querySelector('p.random-text');
    const randomChoices = [
      "Super Idol deja vu",
      "Treat me like White Tee",
      "Omegle moment",
      "Hold it, I just got a bruh moment",
      "BensariSMP was a cool Minecraft server of mine",
      "JavaScript? Never heard of it... I think"
    ];
    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    pElement.textContent = randomChoices[randomIndex];
  });