# competitiemanager

## Eindopdracht voor Software in de Praktijk 3
De requirements voor deze opdracht staan beschreven in SD3_Requirements.pdf
Op deze requirements is de realisatie van de applicatie gebaseerd

# vereiste software
Java versie 8 (JDK: Eclipse Adoptium jdk-8.0.312.7-hotspot)<br />
Maven versie 3.8.6<br />
Node.js versie 16.13.2<br />
PostgreSQL v.14^<br />

## software/frameworks e.d. waarmee de applicatie mee is gerealiseerd
Intellij IDEA v.2021.3.2 <br />
Angular v14.2.0<br />
Spring Boot v.2.6.5<br />

# het starten van de applicatie
De instructies om de applicatie in zijn volledigheid te laten draaien

### database (PostgreSQL v14 is hiervoor vereist)
Voordat de applicatie opgestart wordt moet er een database aangemaakt worden<br />
Open cmd.exe (of een andere gewenste command line tool)<br />
log in op de psql shell met de volgende commando<br />
psql -U < username > (je eigen username hè)<br />
voer ook je eigen wachtwoord in<br />
Eenmaal in de psql shell moet je de volgende commando uitvoeren<br />
\i 'C:/jouw/folder/structuur/data.sql'; (data.sql wordt aangeleverd, de commando wijst alleen naar waar die staat)<br />
Hiermee wordt de database en alle tabellen aangemaakt, evenals wat data die nodig is om de applicatie te laten runnen<br />

### back-end (Maven v.3.8.6 is hiervoor vereist)
Open cmd.exe (of een andere gewenste command line tool)<br />
Ga naar de folder waar alle back-end spul staat<br />
bijv: C:/jouw/folder/structuur/competitiemanager-cleanup/comp-mng-server<br />
Voer de volgende commando in: mvn spring-boot:run<br />

### front-end (Node.js v.16.13.2 is hiervoor vereist)
Open cmd.exe (of een andere gewenste command line tool)<br />
Ga naar de folder waar alle front-end spul staat<br />
bijv C:/jouw/folder/structuur/competitiemanager-cleanup/comp-mng-server<br />
Er zijn 2 commando's dit keer<br />
Als eerste de volgende: npm install, dit kan even duren voordat het klaar is ~5 minuten, tijd voor een bakkie ;)<br />
Dan de commando om de angular applicatie op te starten: npm start<br />
Van daaruit kan je naar http://localhost:4200 gaan in een webbrowser om de applicatie te zien (Chrome is aangeraden)
