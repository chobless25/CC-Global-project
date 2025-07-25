
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    const response = await fetch('https://formspree.io/f/xxxzvrakd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message.');
    }
  });
