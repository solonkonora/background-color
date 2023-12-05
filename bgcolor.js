//a js program that changes the background color of the  page randomly after 30seconds
    function changeBackgroundColor() {
      const randomColor = getColor();
      document.body.style.backgroundColor = randomColor;
    }

    function getColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    setInterval(changeBackgroundColor, 1000);