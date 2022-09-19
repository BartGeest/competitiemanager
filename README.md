# competitiemanager

Eindopdracht voor Software in de Praktijk 3

# vereiste software
Java versie 8 (JDK: Eclipse Adoptium jdk-8.0.312.7-hotspot)
Maven versie 3.8.6
Node.js versie 16.13.2
PostgreSQL v.14^

## software/frameworks e.d. waarmee de applicatie mee is gerealiseerd
Intellij IDEA v.2021.3.2
Angular v14.2.0
Spring Boot v.2.6.5

# het starten van de applicatie
De instructies om de applicatie in zijn volledigheid te laten draaien

### database (PostgreSQL v14 is hiervoor vereist)
Voordat de applicatie opgestart wordt moet er een database aangemaakt worden.
Open cmd.exe (of een andere gewenste command line tool)
log in op de psql shell met de volgende commando
psql -U <username>
voer ook je eigen wachtwoord in
Eenmaal in de psql shell moet je de volgende commando uitvoeren
\i 'C:/jouw/folder/structuur/data.sql'; (data.sql wordt aangeleverd, de commando wijst alleen naar waar die staat)
Hiermee wordt de database en alle tabellen aangemaakt, evenals wat data die nodig is om de applicatie te laten runnen

### back-end (Maven v.3.8.6 is hiervoor vereist)
Open cmd.exe (of een andere gewenste command line tool)
Ga naar de folder waar alle back-end spul staat
bijv: C:/jouw/folder/structuur/competitiemanager-cleanup/comp-mng-server
Voer de volgende commando in: mvn spring-boot:run

### front-end (Node.js v.16.13.2 is hiervoor vereist)
Open cmd.exe (of een andere gewenste command line tool)
Ga naar de folder waar alle front-end spul staat
bijv C:/jouw/folder/structuur/competitiemanager-cleanup/comp-mng-server
Er zijn 2 commando's dit keer
Als eerste de volgende: npm install, dit kan even duren voordat het klaar is ~5 minuten, tijd voor een bakkie ;)
Dan de commando om de angular applicatie op te starten: npm start
Van daaruit kan je naar http://localhost:4200 gaan in een webbrowser om de applicatie te zien (Chrome is aangeraden)
