# Landing page Statica per CloudStore
Progetto di una Landing Page su pagina singola, con testo linea, senza CMS, in template php.

## Note di sviluppo
Per la stabilità del compiler con webpack è necessario lavorare sulla **versione 8** di node.
per installare le dipendenze del progetto (sia compilazione che frontend): ```npm install```.
Per attivare il compilatore live va eseguito il comando ```npm run build```.
Quando si lavora in locale i js e css vengono chiamati live da webpack sulla porta 8080.
Per compilare gli asset (solo js e css, le immagini e i font sono presi direttamente dalle rispettive cartelle)
eseguire il comando ```npm run build:prod```
