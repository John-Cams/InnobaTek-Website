function getGreeting() {
  const hour = new Date().getHours();
  
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function updateGreeting() {
  const aboutParagraph = document.getElementById("abtPara");
  const greeting = getGreeting();
  aboutParagraph.innerHTML = `${greeting}, I am John Louie Maniego. As of 2025 I am a rising junior at the California Academy of Math and Science. I have a great interest in computer science such as web development and software development. I have used Python and Java before in different projects as well as HTML, CSS, and JavaScript.`

  const now = new Date();
  let nextChange = new Date();

  if (now.getHours() < 12) {
    nextChange.setHours(12, 0, 0, 0);
  } else if (now.getHours() < 18) {
    nextChange.setHours(18, 0, 0, 0);
  } else {
    nextChange.setHours(24, 0, 0, 0);
  }

  const timeUntilNext = nextChange - now;
  setTimeout(updateGreeting, timeUntilNext);
}


updateGreeting();
