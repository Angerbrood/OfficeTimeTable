# OfficeTimeTable
Alkalmazások Fejlesztése beadandó feladat

Készítette: Petz Dávid

## 1. Követelményanalízis
1.1. Célkitűzés, projektindító dokumentum


A program legfőbb célja jól átláthatóan, és érthetően megjeleníteni a részmunkaidős alkalmazottak adataikat és az időbeosztásukat egy webes vastagkliens, azaz egyoldali alkalmazás felhasználásával Az adatok védelme érdekében legyen lehetőség regisztrációra, majd bejelentkezésre. A bejelentkezett felhasználó, ha alkalmazott akkor beírhatja, hogy a hét melyik napján mikor tud menni dolgozni és mennyit, ha munkaadó akkor az alkalmazottak adatait tudja kezelni.


Funkcionális követelmények:

* Bejelentkezés
* Regisztráció
* Munkáltató
  * Alkalmazottak adatainak megtekintése
  * Alkalmazottak adatainak törlése
  * Alkalmazottak adatainak módosítása
  * Alkalmazottak adatainak hozzáadása
  * Fizetések kiutalása
* Beosztott
  * Bejárás hozzáadása
  * Bejárás törlése
  * Bejárás módosítása
  * Adatok megtekintése
  
Nem funkcionális követelmények:
  * Könnyű áttekinthetőség: Színekkel típus szerint csoportosítás
  * Használhatóság: Könnyű áttekinthetőség, ésszerű elrendezés, könnyen kezelhetőség
  * Megbízhatóság: jelszóval védett funkciók, és a jelszavak védelme a háttérben. Hibásan bevitt adatok esetén a program jól láthatóan  jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket. A jól bevitt adatok maradjanak az űrlapban.
  * Karbantarthatóság: könnyen lehessen bővíteni, a különböző típusú fájlok külön csoportosítva, ésszerűen legyenek felbontva, a könnyebb fejleszthetőség miatt
  
1.2. Használatieset-modell, funkcionális követelmények

* A beosztottaknak és a munkáltatónak külön felülete lesz az adatok kezelésére, ami közös lesz mindkét félnek az a bejelentkezés.
* Bejelentkezés nélkül elért oldalak
 * Bejelentkezés
* Bejelentkezéssel elért oldalak
 * Munkáltató
 * Beosztott


## 2. Tervezés


2.1. Architektúra terv


2.1.1. Komponensdiagram

![Alt text](/resources/components.png?raw=true "Komponensdiagram")

2.1.2. Oldaltérkép

![Alt text](/resources/user-story.png?raw=true "Adatmodel")

2.2. Felhasználói-felület modell

2.2.1.Oldalvázlatok


![Alt text](/resources/Login.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Admin.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Admin_Add_Worker.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Admin_Worker_Dates.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Public.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Public_Add_Date.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Public_Modify_Data.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/Public_Salary.png?raw=true "Felhasználói-felület modell")




2.2.2.Designtervek (végső megvalósítás kinézete)


2.2.3. Osztálymodell

![Alt text](/resources/uml.png?raw=true "Adatmodel")

2.2.4. Dinamikus működés

## 3. Implementáció

3.1.1. Fejlesztőkörnyezet

* Használt IDE: Webstorm

* Használt verziókövető: GitHub

3.1.2. Könyvtárstruktúra, funkciók

* ~/resources/
  * pictures - Képek a dokumentációhoz
  * database - SQLite3 adatbázis fájl helye
* ~/webapp/
  * views - Nézetek
  * models - Modellek
  * controllers - Kontrollerek
  * css - CSS fájlok
  * js - JavaScript fájlok
  * fonts - Betűtípusok
 
## 4. Tesztelés

4.1. Tesztelési környezetek

4.2. Egységteszt

4.3. Funkciónális teszetelés

4.4.Tesztesetek

## 5. Felhasználói dokumentáció

## 6. Irodalomjegyzék
