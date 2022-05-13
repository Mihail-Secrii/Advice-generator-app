async function getAdvision() {
  let url = 'https://api.adviceslip.com/advice';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderAdvision() {
  let advision = await getAdvision();
  advision = advision.slip;

  document.querySelector('.advice-id').innerHTML = 'advice #' + advision.id;
  document.querySelector('.advice-text').innerHTML = advision.advice;
}

renderAdvision();