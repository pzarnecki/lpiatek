# 🌿 mgr Łukasz Piątek — Gabinet Psychoterapeutyczny

> Autorski, ultra-premium serwis internetowy stworzony dla gabinetu psychologiczno-psychoterapeutycznego we Wrocławiu. Oparty o nowoczesną technologię Single Page Application (SPA), zoptymalizowany pod kątem pozycjonowania (Local SEO) oraz bezkonkurencyjnej płynności i wygody użytkowania.

[![Vite](https://img.shields.io/badge/Vite-8.0.3-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38.0-FF00C1?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-222c26?logo=github&logoColor=white&style=flat-square)](https://pages.github.com/)
[![RODO Compliant](https://img.shields.io/badge/RODO_GDPR-Compliant-7e9582?style=flat-square)](#)

---

## 🎨 System Design & Estetyka Premium

Wizualna tożsamość witryny została całkowicie przeprojektowana i opiera się na unikalnym koncepcie **"Twilight Eucalyptus & Warm Linen"** („w pół drogi” między surowym jasnym minimalizmem a ciężkim leśnym mrokiem). Projekt unika chłodnych, „szpitalnych” bieli i błękitów na rzecz organicznych tonacji budujących poczucie zaufania, ciepła i dyskrecji.

*   **Tło (`--bg-primary`):** Miękki, głęboki grafit o zabarwieniu eukaliptusa (`#1a221e`), eliminujący męczące naświetlenie oczu na urządzeniach mobilnych.
*   **Akcenty piaskowe (`--accent-sand`):** Ciepły piasek i matowe złoto (`#dfc29f`) stosowane dla najważniejszych interakcji i wezwań do działania (CTA).
*   **Szklany len (`--glass-bg`):** Subtelne panele w technologii glassmorphismu z ciepłym, lnianym odcieniem i delikatnymi, naturalnymi ramkami.
*   **Typografia literacka:** Luksusowy, szeryfowy krój pisma **Cormorant Garamond** nadaje nagłówkom ludzki, pełen szacunku i wysublimowany ton. Został on zestawiony z nowoczesnym i czytelnym krojem **Outfit** dla tekstu głównego.

---

## ✨ Nowoczesne Naleciałości & Ożywienie Strony

Strona reaguje na obecność użytkownika w sposób niezwykle elegancki, płynny i naturalny:

*   🍃 **Dryfujące Świetliki (Fireflies):** Trzy mikro-cząsteczki światła w kolorze ciepłego piasku dryfujące po nieskończonych, fizycznych trajektoriach w tle. Nadają one stronie "życie", a jednocześnie działają kojąco i relaksująco.
*   🖱️ **Luksusowy Hover na Kartach:** Najechanie na karty usług powoduje ich uniesienie o `10px`, płynne przejście obramowania w ciepły piaskowy blask oraz zmianę tła na ciepły len.
*   🧭 **Inteligentna Nawigacja (Scrollspy):** Menu górne dynamicznie śledzi pozycję użytkownika przy przewijaniu za pomocą natywnego API `IntersectionObserver`. Linki w menu podświetlają się automatycznie z płynnym rozsuwaniem dolnej krawędzi.
*   🍪 **Szklany Baner RODO:** W pełni animowany baner ciasteczek z opóźnionym, eleganckim wejściem. Posiada wbudowaną pamięć podręczną (`localStorage`), zapamiętującą zgodę pacjenta.

---

## 🚀 Optymalizacje Techniczne & SEO

Strona została zoptymalizowana zgodnie z rygorystycznymi standardami technicznymi na rok 2026:

1.  **Local SEO & Rich Snippets:** 
    W nagłówku zaimplementowano pełne **dane strukturalne JSON-LD (`@type: Therapist`)** łączące gabinet we Wrocławiu z danymi kontaktowymi, współrzędnymi geograficznymi, godzinami otwarcia oraz profilem ZnanyLekarz. Zapewnia to maksymalną widoczność w wynikach wyszukiwania Google Maps oraz Local Pack.
2.  **Pełne Mobile-First:**
    Wszystkie elementy są w 100% responsywne. Zrezygnowano z uciążliwych stylów inline na rzecz elastycznego pozycjonowania CSS, dzięki czemu strona ładuje się bezbłędnie na każdym typie smartfona bez marginesów bocznych (horizontal overflow).
3.  **Wydajność 60 FPS:**
    Skrypty Framer Motion zostały zoptymalizowane pod kątem płynnego renderowania bez obciążania układu graficznego na starszych telefonach komórkowych.

---

## 💻 Zarządzanie Treścią (Decoupled Content)

Treść witryny jest całkowicie odseparowana od kodu źródłowego. Znajduje się w pliku `src/content.json`. 

### Jak edytować teksty:
1.  **Lokalnie:** Zmień odpowiednie wartości w pliku `src/content.json`.
2.  **Przez Panel Admina:** Wejdź na stronę pod adres `/#admin` – otworzy się zintegrowany edytor tekstowy, który pozwoli Ci edytować dane graficznie i skopiować gotowy plik JSON jednym kliknięciem!

---

## 🛠️ Uruchomienie & Wdrożenie

Projekt wykorzystuje środowisko **Node.js** oraz menedżer pakietów **npm**.

### Uruchomienie wersji deweloperskiej:
```bash
npm run dev
```

### Budowa wersji produkcyjnej (Build):
```bash
npm run build
```

### Publikacja na serwerze GitHub Pages:
Wdrożyliśmy zaawansowany tunel SSH fallback (przez port 443), co gwarantuje natychmiastową wysyłkę na GitHub Pages w dowolnej sieci (nawet przy zablokowanym porcie 22). Aby opublikować stronę, uruchom:
```bash
npm run deploy
```

---
*Projekt zrealizowany z dbałością o najmniejszy detal estetyczny i techniczny.*
