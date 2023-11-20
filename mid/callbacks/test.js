const frameworks = [];

function mostrarFrame() {
  setTimeout(() => {
    frameworks.map((frame) => {
      console.log(frame);
    });
  }, 2000);
}

function añadir(frame, callback) {
  setTimeout(() => {
    frameworks.push(frame);
    callback();
  }, 2000);
}

mostrarFrame();

añadir("Angular", mostrarFrame);
