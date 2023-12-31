const form = document.getElementsByTagName("form")[0] as HTMLFormElement;
form.addEventListener("submit", (e: any) => {
  e.preventDefault();
  const input1 = document.getElementById("stPlayer") as HTMLInputElement;
  const input2 = document.getElementById("ndPlayer") as HTMLInputElement;
  const responsePlayer1: number = parseInt(input1?.value);
  const responsePlayer2: number = parseInt(input2?.value);
  const randomNum: number = Math.ceil(Math.random() * 100);
  // const randomNum: number = 55;
  const randomNumEl = document.querySelector("h3>span") as HTMLSpanElement;
  const resultEl = document.querySelector("#result>span") as HTMLSpanElement;
  randomNumEl.innerText = randomNum.toString();
  console.log(typeof responsePlayer1);
  console.log(typeof randomNum);
  console.log(Math.abs(responsePlayer1 - randomNum));
  console.log(Math.abs(responsePlayer2 - randomNum));
  if (responsePlayer1 === randomNum || responsePlayer2 === randomNum) {
    if (responsePlayer1 === randomNum && responsePlayer2 !== randomNum) {
      resultEl.innerText = "Il giocatore 1 ha indovinato il numero!";
    } else if (responsePlayer2 === randomNum && responsePlayer1 !== randomNum) {
      resultEl.innerText = "Il giocatore 2 ha indovinato il numero!";
    } else {
      resultEl.innerText = "Entrambi i giocatori hanno indovinato il numero!";
    }
  } else {
    if (
      Math.abs(responsePlayer1 - randomNum) >
      Math.abs(responsePlayer2 - randomNum)
    ) {
      resultEl.innerText =
        "Nessuno ha indovinato, ma il giocatore 2 ci è andato più vicino!";
    } else if (
      Math.abs(responsePlayer1 - randomNum) <
      Math.abs(responsePlayer2 - randomNum)
    ) {
      resultEl.innerText =
        "Nessuno ha indovinato, ma il giocatore 1 ci è andato più vicino!";
    } else {
      resultEl.innerText =
        "Nessuno ha indovinato, e ci sono arrivati vicino allo stesso modo!";
    }
  }
});
