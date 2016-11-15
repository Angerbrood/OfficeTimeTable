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

![Alt text](/resources/pictures/components.png?raw=true "Komponensdiagram")

2.1.2. Oldaltérkép

![Alt text](/resources/pictures/user-story.png?raw=true "Adatmodel")

2.2. Felhasználói-felület modell

2.2.1.Oldalvázlatok


![Alt text](/resources/pictures/Login.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Admin.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Admin_Add_Worker.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Admin_Worker_Dates.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Public.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Public_Add_Date.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Public_Modify_Data.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/Public_Salary.png?raw=true "Felhasználói-felület modell")

![Alt text](/resources/pictures/HTML/addDate.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/HTML/deleteWorker.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures//HTML/getDates.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures//HTML/modifyAccount.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/HTML/modifyDate.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/HTML/modifyWorker.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures//HTML/newPosition.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/HTML/newWorker.png?raw=true "Felhasználói-felület modell")
![Alt text](/resources/pictures/HTML/viewSalary.png?raw=true "Felhasználói-felület modell")





2.2.2.Designtervek (végső megvalósítás kinézete)


2.2.3. Osztálymodell

![Alt text](/resources/pictures/uml.png?raw=true "Adatmodel")

2.2.4. Dinamikus működés

## 3. Implementáció

3.1.1. Fejlesztőkörnyezet

* Használt IDE: Webstorm

* Használt verziókövető: GitHub

3.1.2. Könyvtárstruktúra, funkciók

* ~/resources/
  * pictures - Képek helye a dokumentációhoz
  * database - SQLite3 adatbázis fájl helye
  * umlet - UMLet nyers fájlok helye
  * pencil - Pencil Projekt nyers fájlok helye
* ~/webapp/
  * views - Nézetek
  * models - Modellek
  * controllers - Kontrollerek
  * util - Egyéb forrásfáljok
  * css - CSS fájlok
  * js - JavaScript fájlok
  * fonts - Betűtípusok
 
## 4. Tesztelés

4.1. Tesztelési környezetek

4.2. Egységteszt

4.3. Funkciónális teszetelés

4.4.Tesztesetek

## 5. Felhasználói dokumentáció

* Futtatáshoz szükséges operációs rendszer: Tetszőleges operációs rendszer
* A futtatáshoz szükséges hardver: Operációs rendszerek szerint megadva
* Egyéb követelmények: Internet böngésző telepítése, JavaScript ajánlott

Program használata:
* Böngészőben nyissuk meg a főoldalt
* Főoldalon jelentkezzünk be
* Az account típusától függően a program bejelentkeztet minket az admin vagy a public oldalra
* Public
    * Időpont hozzáadása: Új időbeosztást lehet megadni (a meglévőt felülírja!)
    * Időpont módosítsa: A meglévő időbeosztást lehet módosítani
    * Bejelentkezési adatok módosítása: A felhasználónév és jelszó módosítása
    * Fizetés megtekintése: Az órabér, heti óraszám és az ehavi fizetés megtekintése
* Admin
    * Alkalmazott hozzáadása: Új alkamazottat rögzíthetünk
    * Alkalmazott módosítása: Kiválasztott alkamazott adatainak módosítása
    * Alkalmazott törlése: Kiválasztott alkalmazott törlése
    * Időpontok megtekintése: A kiválaszott alkalmazott időpontjának megtekintése
    * Fizetések kiutalása: Az összes alkalmazott fiztésének kiutalása
   
    
    
    
## 6. Irodalomjegyzék
