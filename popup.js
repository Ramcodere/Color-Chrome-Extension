document.getElementById('pickColor').addEventListener('click', async () => {
  const eyeDropper = new EyeDropper();
  try {
    const result = await eyeDropper.open();
    document.getElementById('result').textContent = result.sRGBHex;
    document.getElementById('result').style.backgroundColor = result.sRGBHex;
  } catch (error) {
    console.error(error);
  }
});
