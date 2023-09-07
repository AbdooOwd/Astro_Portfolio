document.addEventListener('DOMContentLoaded', () => {
    const pElement = document.querySelector('p.random-text');
    const randomChoices = [
      "Super Idol deja vu",
      "Treat me like White Tee",
      "Omegle moment",
      "Hold it, I just got a bruh moment",
      "BensariSMP was a cool Minecraft server of mine",
      "JavaScript? Never heard of it... I think",
      "Python is cool",
      "Godot is awesome",
      "Pssss... My Github Username: \"AbdooOwd\"",
      "I'm a smart student, but a dumb person",
      "Algeria, the knock-offs counrty",
      "Algeria is cool, but LAW isn't applied",
      "More random text!"
    ];
    const randomIndex = Math.floor(Math.random() * randomChoices.length);
    pElement.textContent = randomChoices[randomIndex];
  });