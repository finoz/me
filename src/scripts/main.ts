import "../style/main.scss";

const initLp = () => {
  const mailtrigger = document.querySelector(".mailtrigger") as HTMLElement;
  const mailsubject = "Richiesta di collaborazione";
  const mailbody = "Ciao, sono [XXX] e sto cercando un partner per un progetto di [YYY]. Cosa ne pensi? Se sei interessato, contattami al più presto. Grazie!";
  
  const clickToSend = function() {
    mailtrigger?.addEventListener("click", () => {
      //open email
      window.open(`mailto:hello@finoz.it?subject=${encodeURI(mailsubject)}&body=${encodeURI(mailbody)}`, "_blank", );
    });
  }

  const getMousePositionScale = (): (e: MouseEvent) => number => {
    return (e: MouseEvent): number => {
      // Altezza totale della finestra
      const windowHeight = window.innerHeight;
      
      // Posizione del mouse dall'alto
      const mouseY = e.clientY;
      
      // Limiti definiti
      const TOP_THRESHOLD = 250; // px dal top
      const BOTTOM_THRESHOLD = 150; // px dal basso
      
      // Se il mouse è sopra la soglia superiore, restituisci 1
      if (mouseY <= TOP_THRESHOLD) {
        return 1;
      }
      
      // Se il mouse è sotto la soglia inferiore, restituisci 0.3
      if (mouseY >= (windowHeight - BOTTOM_THRESHOLD)) {
        return 0.3;
      }
      
      // Calcola l'intervallo effettivo per l'interpolazione
      const totalRange = windowHeight - TOP_THRESHOLD - BOTTOM_THRESHOLD;
      const currentPosition = windowHeight - BOTTOM_THRESHOLD - mouseY;
      
      // Interpola il valore tra 0.3 e 1
      const scale = 0.3 + (currentPosition / totalRange) * 0.7;
      
      // Assicurati che il valore sia sempre nel range corretto
      let scaleValue = Math.max(0.3, Math.min(1, scale));
      return parseFloat(scaleValue.toFixed(2));
    };
  };
  
  // Esempio di utilizzo:
  const mouseScaleListener = getMousePositionScale();
  
  const changeMoving = function() {
    window.addEventListener('mousemove', (e) => {
      const scale = mouseScaleListener(e);
      if (mailtrigger && mailtrigger as HTMLElement) {
        mailtrigger.style.opacity = `${scale}`;
      }
    });
  }
  
  clickToSend();
  changeMoving();

  
};

document.addEventListener("DOMContentLoaded", initLp);