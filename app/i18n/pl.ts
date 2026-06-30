import type { Content } from './types';

export const pl: Content = {
  site: {
    name: 'Plex',
    tagline: 'Studio cyfrowe dla branży nocnej i gastronomii',
    description:
      'Strony internetowe, systemy rezerwacji i aplikacje mobilne dla klubów nocnych, restauracji i lokali gastronomicznych. Tworzone w Next.js, NestJS i React Native.',
  },
  nav: {
    links: [
      { name: 'Usługi', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Proces', href: '#process' },
      { name: 'Pakiety', href: '#pricing' },
      { name: 'O nas', href: '#about' },
    ],
    contact: 'Kontakt',
  },
  hero: {
    badge: 'Studio cyfrowe · Branża nocna i gastronomia',
    headline: 'Strony, systemy rezerwacji i aplikacje',
    highlight: 'dla lokali, które traktują doświadczenie gości poważnie.',
    subheadline:
      'Tworzymy cyfrowe narzędzia dla sali i zaplecza, z których kluby nocne, restauracje i lokale gastronomiczne naprawdę korzystają — projektowane i kodowane od zera specjalnie dla Twojego lokalu.',
    cta: { primary: 'Rozpocznij projekt', secondary: 'Zobacz nasze prace' },
    stats: {
      live: '4 projekty koncepcyjne online',
      stack: 'Next.js · NestJS · React Native',
      focus: 'Tylko gastronomia',
    },
    demoLabel: 'Demo',
    explore: 'Odkryj',
  },
  services: {
    eyebrow: 'Usługi',
    title: 'Co',
    highlight: 'tworzymy',
    subtitle: 'Cztery rodzaje produktów, wszystkie tworzone na zamówienie dla lokali gastronomicznych.',
    items: [
      {
        title: 'Strony dla lokali',
        description: 'Landing page’e i pełne strony, które zamieniają odwiedzających w rezerwacje',
        features: [
          'Kalendarz wydarzeń i line-up',
          'Galeria zdjęć i wideo',
          'Ścieżki rezerwacji (CTA)',
          'Strony prasowe / media kit',
        ],
        icon: 'code',
      },
      {
        title: 'Systemy rezerwacji stolików',
        description: 'Ścieżki rezerwacji, które naprawdę cieszą zarówno obsługę, jak i gości',
        features: [
          'Wizualne plany stolików',
          'Przedziały czasowe i blokady',
          'Zadatki i opłaty wejściowe',
          'Obsługa poziomów gości (VIP / standard)',
        ],
        icon: 'calendar',
      },
      {
        title: 'Panele operacyjne',
        description: 'Narzędzia zaplecza do zarządzania lokalem od początku do końca',
        features: [
          'Rezerwacje, wydarzenia i CRM gości',
          'Grafiki i role personelu',
          'Analityka przychodów i obłożenia',
          'Dostęp oparty na rolach (CASL)',
        ],
        icon: 'zap',
      },
      {
        title: 'Aplikacje mobilne dla personelu',
        description: 'Natywne aplikacje iOS i Android dla zespołów pracujących na sali',
        features: [
          'React Native (iOS + Android)',
          'Potwierdzenia rezerwacji na żywo',
          'Powiadomienia push o nowych rezerwacjach',
          'Logowanie biometryczne i tryb offline',
        ],
        icon: 'smartphone',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Wybrane prace',
    title: 'Wybrane',
    highlight: 'prace',
    subtitle:
      'Rosnący zbiór projektów koncepcyjnych jakości produkcyjnej — stworzonych, by pokazać dokładnie to, co dostarczamy klientom. Każda linia kodu, każdy piksel, każda interakcja jest prawdziwa i działa.',
    note: 'Twój projekt otrzymuje ten sam standard. Dziś praca koncepcyjna, jutro Twój lokal.',
    actions: {
      viewGallery: 'Zobacz galerię',
      visitSite: 'Odwiedź stronę',
      downloadApk: 'Pobierz APK',
      iosComingSoon: 'iOS — wkrótce',
      viewDetails: 'Zobacz pełne szczegóły',
      demo: 'Demo',
    },
    projects: [
      {
        id: 'velvet',
        category: 'Strona klubu nocnego',
        tag: 'Koncepcja · Demo na żywo',
        description:
          'Koncepcja luksusowej strony klubu nocnego z rezerwacją VIP, kalendarzem wydarzeń, wciągającą galerią zdjęć i bogatym designem ruchu. Zbudowana w całości w Next.js i Tailwind.',
      },
      {
        id: 'nightfall',
        category: 'Platforma rezerwacji',
        tag: 'Koncepcja · Demo na żywo',
        description:
          'Kompletny system rezerwacji stolików: dostępność w czasie rzeczywistym, wieloetapowa ścieżka rezerwacji, daty blokad i pełny panel administracyjny. Front-end Next.js, API NestJS, PostgreSQL.',
      },
      {
        id: 'venue',
        category: 'Platforma zarządzania SaaS',
        tag: 'Koncepcja · Demo na żywo',
        description:
          'Pełna platforma operacyjna dla lokali nocnych — rezerwacje, wydarzenia, CRM gości z poziomami VIP, plan sali, personel i analityka. Uprawnienia oparte na rolach (CASL), uwierzytelnianie JWT, tryb demo do dostępu tylko do odczytu.',
      },
      {
        id: 'venue-mobile',
        category: 'React Native · Android',
        tag: 'Koncepcja · APK dostępne',
        description:
          'Aplikacja towarzysząca dla personelu platformy Venue. Metryki pulpitu na żywo, zarządzanie rezerwacjami, CRM gości z poziomami VIP, dostęp oparty na rolach — wszystko zoptymalizowane do pracy na sali na telefonie.',
      },
    ],
  },
  tech: {
    eyebrow: 'Technologie',
    title: 'Nasze',
    highlight: 'technologie',
    subtitle:
      'Narzędzia, po które sięgamy w każdym projekcie. Sprawdzone w boju, wydajne i przyjemne w pracy.',
    technologies: [
      { name: 'Next.js', category: 'Frontend' },
      { name: 'React', category: 'Frontend' },
      { name: 'TypeScript', category: 'Język' },
      { name: 'NestJS', category: 'Backend' },
      { name: 'PostgreSQL', category: 'Baza danych' },
      { name: 'Tailwind CSS', category: 'Stylizacja' },
      { name: 'React Native', category: 'Mobile' },
    ],
    benefits: [
      {
        icon: '⚡',
        title: 'Szybkie od pierwszego dnia',
        description:
          'Renderowany po stronie serwera Next.js, zoptymalizowane obrazy i PostgreSQL od ręki. Twoja strona ładuje się na telefonie w mniej niż sekundę — zmierzone, nie obiecane.',
      },
      {
        icon: '🔑',
        title: 'Wszystko należy do Ciebie',
        description:
          'Kod źródłowy na Twoim GitHubie. Baza danych na Twoim hostingu. Klucze wdrożeniowe w Twoich rękach. Bez uzależnienia od dostawcy, bez miesięcznych opłat SaaS.',
      },
      {
        icon: '🧩',
        title: 'Stworzone do rozbudowy',
        description:
          'Modularna architektura, więc kolejna funkcja to nie przepisywanie od nowa. Dodaj operatora płatności, nową rolę lub aplikację mobilną bez ruszania fundamentów.',
      },
    ],
  },
  process: {
    eyebrow: 'Jak pracujemy',
    title: 'Jak',
    highlight: 'pracujemy',
    subtitle:
      'Cztery kroki od pierwszej rozmowy do startu. Stała cena, stały harmonogram, bez niespodzianek z rozrostem zakresu.',
    stepLabel: 'Krok',
    steps: [
      {
        step: '01',
        title: 'Rozmowa wstępna',
        description:
          'Bezpłatna 30-minutowa rozmowa, by zrozumieć Twój lokal, Twoje cele i dokładny problem, który chcesz rozwiązać. Wychodzisz z jasnym zakresem i wyceną o stałej cenie.',
      },
      {
        step: '02',
        title: 'Projekt i prototyp',
        description:
          'Projektujemy kluczowe ekrany w Figmie, omawiamy je z Tobą i poprawiamy, aż będziesz pewien. Zatwierdzasz, zanim powstanie choć linijka kodu produkcyjnego.',
      },
      {
        step: '03',
        title: 'Budowa i przegląd',
        description:
          'Budujemy w tygodniowych sprintach z adresem staging, który możesz sprawdzić w każdej chwili. Widzisz postęp w każdy piątek, a nie wielki wybuch na końcu.',
      },
      {
        step: '04',
        title: 'Start i przekazanie',
        description:
          'Wdrażamy na produkcję, przekazujemy kod źródłowy i dane dostępowe, szkolimy Twój zespół we wszystkim, czego potrzebuje. Tu zaczyna się okno wsparcia.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pakiety',
    title: 'Nasze',
    highlight: 'pakiety',
    subtitle: 'Trzy jasne punkty startowe, plus dodatki, gdy ich potrzebujesz.',
    recommended: 'Polecany',
    getStarted: 'Zaczynamy',
    packages: [
      {
        name: 'Landing Page',
        timeline: '2–3 tygodnie',
        description: 'Szybka, dopracowana jednostronicowa witryna, dzięki której Twój lokal jest widoczny i wygląda jak należy.',
        features: [
          'Tworzone na zamówienie — bez szablonów',
          'Do 5 sekcji',
          'Wygląda idealnie na każdym telefonie',
          'Skonfigurowane pod Google (SEO)',
          'Formularz kontaktowy z mailem do Ciebie',
          'Analityka odwiedzających',
          'Domena i hosting w cenie',
        ],
        highlighted: false,
      },
      {
        name: 'Pełna strona',
        timeline: '5–8 tygodni',
        description: 'Pełna strona, która przyjmuje rezerwacje online i daje Ci jeden panel do ich obsługi.',
        features: [
          'Tworzone na zamówienie — bez szablonów',
          'Do 5 sekcji',
          'Wygląda idealnie na każdym telefonie',
          'Skonfigurowane pod Google (SEO)',
          'Formularz kontaktowy z mailem do Ciebie',
          'Analityka odwiedzających',
          'Domena i hosting w cenie',
        ],
        extrasLabel: 'Dodatkowo ponad Landing Page',
        extras: [
          'Rezerwacje online',
          'Zadatki i płatności (Stripe)',
          'Panel administracyjny do zarządzania rezerwacjami',
          'Logowania personelu z rolami',
          'Twoja strona i dane należą do Ciebie',
          '2 miesiące wsparcia po starcie',
        ],
        highlighted: true,
      },
      {
        name: 'Pełna platforma',
        timeline: '12–20 tygodni',
        description:
          'Nie strona plus aplikacja — jeden spójny system: web, backend i aplikacja dla personelu, wszystkie współdzielące te same dane na żywo.',
        features: [
          'Tworzone na zamówienie — bez szablonów',
          'Do 5 sekcji',
          'Wygląda idealnie na każdym telefonie',
          'Skonfigurowane pod Google (SEO)',
          'Formularz kontaktowy z mailem do Ciebie',
          'Analityka odwiedzających',
          'Domena i hosting w cenie',
          'Rezerwacje online',
          'Zadatki i płatności (Stripe)',
          'Panel administracyjny do zarządzania rezerwacjami',
          'Logowania personelu z rolami',
          'Twoja strona i dane należą do Ciebie',
          '2 miesiące wsparcia po starcie',
        ],
        extrasLabel: 'Dodatkowo ponad Pełną stronę',
        extras: [
          'Aplikacja mobilna dla personelu — w cenie (iOS i Android)',
          'Aktualizacje na żywo w web i aplikacji',
          'Panele analityki i obłożenia',
          'Szczegółowe uprawnienia personelu',
          'Stworzone, by rosnąć razem z Tobą',
          '6 miesięcy wsparcia po starcie',
        ],
        highlighted: false,
      },
    ],
    addOns: {
      title: 'Dodaj aplikację mobilną',
      subtitle:
        'Drugi produkt — natywna aplikacja na bazie Twojej Pełnej strony. (Pełna platforma już ją zawiera.)',
      items: [
        {
          name: 'Aplikacja mobilna dla personelu',
          timeline: '8–12 tygodni',
          description:
            'Rezerwacje na żywo, lista gości i natychmiastowe alerty o nowych rezerwacjach w kieszeni Twojego zespołu na sali — natywna aplikacja iOS i Android dodana do Twojej Pełnej strony.',
          features: [
            'Natywny iOS i Android',
            'Alerty push o nowych rezerwacjach',
            'Bezpieczne logowania personelu',
            'Działa offline',
            'Opublikowane w App Store i Play Store',
            '3 miesiące wsparcia po starcie',
          ],
        },
      ],
    },
    note: 'Pełna strona plus aplikacja dla personelu daje Ci stronę i aplikację, które współdzielą Twoje rezerwacje. Pełna platforma buduje te same elementy jako jeden system na żywo — aktualizacje w czasie rzeczywistym w web i aplikacji, panele analityki, przestrzeń do skalowania i 6 miesięcy wsparcia. Nie wiesz, co pasuje? Każdy projekt zaczyna się od bezpłatnej rozmowy wstępnej i konkretnej wyceny o stałej cenie.',
    customQuote: 'Potrzebujesz czegoś innego?',
  },
  about: {
    eyebrow: 'Kim jesteśmy',
    title: 'O',
    highlight: 'Plex',
    mission:
      'Plex to małe studio cyfrowe skupione wyłącznie na branży nocnej i gastronomii. Tworzymy strony, systemy rezerwacji i aplikacje mobilne, których lokale naprawdę potrzebują — bez szablonów, bez marketingowego pustosłowia. Nasze projekty koncepcyjne pokazują dokładnie, co potrafimy dostarczyć; Twój projekt otrzymuje tę samą staranność.',
    values: [
      {
        title: 'Tylko gastronomia',
        description:
          'Nie bierzemy klinik dentystycznych ani landing page’y o kryptowalutach. Każdy projekt, który dostarczamy, jest dla klubów, barów, restauracji lub lokali gastronomicznych.',
      },
      {
        title: 'Tworzone na zamówienie',
        description:
          'Bez motywów, bez kreatorów stron. Każdy produkt to ręcznie pisany Next.js, NestJS i React Native — projektowany i kodowany specjalnie dla Twojego lokalu.',
      },
      {
        title: 'Należy do Ciebie',
        description:
          'Otrzymujesz pełny kod źródłowy, bazę danych, klucze wdrożeniowe. Bez uzależnienia od dostawcy, bez miesięcznych opłat SaaS, bez niespodzianek.',
      },
    ],
    stats: [
      { icon: 'users', label: 'Specjalizacja', value: 'Branża nocna i gastronomia' },
      { icon: 'clock', label: 'Główny stack', value: 'Next.js · NestJS · React Native' },
      { icon: 'award', label: 'Projekty koncepcyjne', value: '4 zbudowane' },
      { icon: 'trending-up', label: 'Współpraca', value: 'Stała cena · Bez abonamentu' },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Rozpocznij',
    highlight: 'projekt',
    subtitle:
      'Opowiedz nam o swoim lokalu i o tym, co chcesz zbudować. Odpowiadamy w ciągu 24 godzin bezpłatną rozmową wstępną.',
    bookCall: {
      title: 'Umów bezpłatną rozmowę wstępną',
      text: 'Wybierz dogodny dla Ciebie termin — omówimy, czego potrzebuje Twój lokal.',
      cta: 'Otwórz kalendarz →',
    },
    emailLabel: 'E-mail',
    responseLabel: 'Czas odpowiedzi',
    responseValue: 'W ciągu 24 godzin, w dni robocze',
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      message: 'Opowiedz nam o swoim projekcie',
      submit: 'Wyślij wiadomość',
      placeholders: {
        name: 'Jan Kowalski',
        email: 'jan@przyklad.pl',
        message: 'Opowiedz nam o swoim projekcie...',
      },
    },
    expectations: {
      title: 'Czego się spodziewać:',
      items: [
        'Odpowiedź w ciągu 24 godzin',
        'Bezpłatna rozmowa konsultacyjna',
        'Indywidualna propozycja projektu',
        'Bez zobowiązań',
      ],
    },
    success: 'Wiadomość wysłana. Wkrótce się odezwiemy.',
    error: 'Coś poszło nie tak. Spróbuj ponownie lub napisz do nas bezpośrednio.',
  },
  footer: {
    description:
      'Wyspecjalizowane studio cyfrowe tworzące strony, systemy rezerwacji i aplikacje mobilne dla lokali z branży nocnej i gastronomii.',
    badge: 'Studio zarejestrowane w UE · Obsługujemy lokale na całym świecie',
    address: 'Plex · Vesivärava tn 50-201, Tallinn, Estonia',
    quickLinksTitle: 'Szybkie linki',
    contactTitle: 'Skontaktuj się',
    email: 'contact@plex.ee',
    builtWith: 'Zbudowane w Next.js, TypeScript i Tailwind CSS',
    quickLinks: [
      { name: 'Usługi', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Proces', href: '#process' },
      { name: 'Kontakt', href: '#contact' },
    ],
    legalLinks: [
      { name: 'Polityka prywatności', href: '/privacy' },
      { name: 'Regulamin', href: '/terms' },
    ],
    copyright: 'Wszelkie prawa zastrzeżone.',
  },
  cookie: {
    title: 'Pliki cookie i podobne technologie',
    body: 'Używamy niezbędnych plików cookie, aby Plex działał zgodnie z założeniami, a za Twoją zgodą dodatkowych plików cookie, aby zrozumieć, jak korzystasz z naszej strony.',
    seeOur: 'Zobacz naszą',
    policyLink: 'Politykę prywatności i plików cookie',
    allowAll: 'Zezwól na wszystkie',
    onlyEssential: 'Tylko niezbędne',
  },
  legal: { backHome: '← Powrót do strony głównej', lastUpdated: 'Ostatnia aktualizacja:' },
  terms: {
    title: 'Regulamin',
    highlight: 'usług',
    updated: 'Maj 2026',
    sections: [
      {
        heading: '1. Wprowadzenie',
        paragraphs: [
          'Niniejszy regulamin ("Regulamin") reguluje korzystanie ze strony Plex pod adresem https://plex.ee oraz z wszelkich świadczonych przez nas usług projektowych, deweloperskich lub powiązanych ("Usługi"). Korzystając z naszej strony lub zamawiając nasze Usługi, akceptujesz niniejszy Regulamin. Jeśli się nie zgadzasz, nie korzystaj ze strony ani z naszych Usług.',
        ],
      },
      {
        heading: '2. Nasze usługi',
        paragraphs: [
          'Plex to studio cyfrowe, które projektuje i buduje strony, systemy rezerwacji i aplikacje mobilne dla lokali z branży nocnej i gastronomii. Zakres, rezultaty, harmonogram i cena każdego projektu są ustalane na piśmie przed rozpoczęciem prac, po rozmowie wstępnej. Projekty koncepcyjne pokazane na tej stronie są demonstracją naszych możliwości i nie stanowią ofert sprzedaży.',
        ],
      },
      {
        heading: '3. Wyceny, opłaty i płatności',
        paragraphs: [
          'Konkretna wycena o stałej cenie jest przedstawiana w pisemnej ofercie po określeniu zakresu Twojego projektu. Warunki płatności, w tym ewentualny zadatek i harmonogram etapów, są zawarte w tej ofercie. Opłaty nie obejmują kosztów stron trzecich (takich jak hosting, domeny, opłaty sklepów z aplikacjami czy płatne integracje), o ile nie zaznaczono inaczej.',
        ],
      },
      {
        heading: '4. Obowiązki klienta',
        paragraphs: [
          'Aby dostarczyć na czas, polegamy na tym, że terminowo dostarczysz treści, opinie, akceptacje oraz dostęp do wymaganych kont. Opóźnienia w ich dostarczeniu mogą wpłynąć na harmonogram projektu. Odpowiadasz za to, by dostarczone przez Ciebie materiały nie naruszały praw osób trzecich.',
        ],
      },
      {
        heading: '5. Własność intelektualna i prawa własności',
        paragraphs: [
          'Po pełnej zapłacie własność końcowego kodu źródłowego i rezultatów stworzonych specjalnie dla Twojego projektu przechodzi na Ciebie, zgodnie z opisem w Twojej ofercie. Zachowujemy prawo do ponownego wykorzystania ogólnej wiedzy, technik i komponentów niezwiązanych z klientem. Komponenty stron trzecich i open source pozostają objęte odpowiednimi licencjami. O ile nie zrezygnujesz z tego na piśmie, możemy odwoływać się do ukończonej pracy w naszym portfolio.',
        ],
      },
      {
        heading: '6. Gwarancje i wsparcie',
        paragraphs: [
          'Dbamy o dostarczanie pracy na profesjonalnym poziomie. Każde okno wsparcia po starcie jest określone w Twojej ofercie. Poza tym oknem Usługi są świadczone "w stanie, w jakim są", bez żadnych gwarancji, w zakresie dozwolonym przez prawo. Nie gwarantujemy, że Usługi będą nieprzerwane ani wolne od błędów.',
        ],
      },
      {
        heading: '7. Ograniczenie odpowiedzialności',
        paragraphs: [
          'W maksymalnym zakresie dozwolonym przez prawo Plex nie ponosi odpowiedzialności za jakiekolwiek szkody pośrednie, przypadkowe lub wtórne ani za utratę zysków, przychodów czy danych wynikającą z Usług lub z nimi związaną. Nasza całkowita odpowiedzialność z tytułu jakiegokolwiek roszczenia nie przekroczy kwoty zapłaconej za Usługi będące podstawą roszczenia.',
        ],
      },
      {
        heading: '8. Usługi stron trzecich',
        paragraphs: [
          'Nasze Usługi mogą opierać się na platformach stron trzecich lub się z nimi integrować (np. dostawcy hostingu, operatorzy płatności i narzędzia analityczne). Nie odpowiadamy za dostępność, wydajność ani polityki tych stron trzecich, a korzystanie z nich może podlegać ich własnym warunkom.',
        ],
      },
      {
        heading: '9. Zmiany w Regulaminie',
        paragraphs: [
          'Możemy od czasu do czasu aktualizować niniejszy Regulamin. Opublikujemy zmieniony Regulamin na tej stronie i zaktualizujemy datę "Ostatnia aktualizacja". Dalsze korzystanie ze strony lub naszych Usług po wejściu zmian w życie oznacza akceptację zmienionego Regulaminu.',
        ],
      },
      {
        heading: '10. Kontakt',
        paragraphs: ['Jeśli masz pytania dotyczące niniejszego Regulaminu, skontaktuj się z nami pod adresem'],
        contact: true,
      },
    ],
  },
  privacy: {
    title: 'Polityka',
    highlight: 'prywatności',
    updated: 'Marzec 2025',
    sections: [
      {
        heading: '1. Wprowadzenie',
        paragraphs: [
          'Plex ("my", "nasz" lub "nas") zobowiązuje się do ochrony Twojej prywatności. Niniejsza Polityka prywatności wyjaśnia, jak zbieramy, wykorzystujemy, ujawniamy i chronimy Twoje informacje, gdy odwiedzasz naszą stronę https://plex.ee lub korzystasz z naszych usług. Prosimy o uważne zapoznanie się z tą polityką.',
        ],
      },
      {
        heading: '2. Informacje, które zbieramy',
        paragraphs: ['Możemy zbierać informacje, które przekazujesz nam bezpośrednio, w tym:'],
        list: [
          'Imię i dane kontaktowe (np. adres e-mail), gdy korzystasz z naszego formularza kontaktowego',
          'Szczegóły firmy lub projektu, którymi dzielisz się, prosząc o wycenę lub ofertę',
          'Komunikację i korespondencję z nami',
        ],
        paragraphsAfter: [
          'Automatycznie zbieramy również pewne informacje techniczne, gdy odwiedzasz naszą stronę, takie jak adres IP, typ przeglądarki, informacje o urządzeniu i odwiedzane strony. Możemy w tym celu używać plików cookie i podobnych technologii.',
        ],
      },
      {
        heading: '3. Jak wykorzystujemy Twoje informacje',
        paragraphs: [
          'Wykorzystujemy zebrane informacje, aby odpowiadać na Twoje zapytania, świadczyć i ulepszać nasze usługi, wysyłać istotne aktualizacje (za Twoją zgodą), analizować korzystanie ze strony i spełniać obowiązki prawne. Nie sprzedajemy Twoich danych osobowych stronom trzecim.',
        ],
      },
      {
        heading: '4. Pliki cookie i podobne technologie',
        paragraphs: [
          'Nasza strona może używać plików cookie i podobnych technologii, aby zapamiętywać Twoje preferencje, rozumieć, jak korzystasz ze strony, i poprawiać Twoje doświadczenie. Możesz zarządzać plikami cookie lub je wyłączyć w ustawieniach przeglądarki. Niezbędne pliki cookie są konieczne do działania strony; inne służą do analityki i przechowywania preferencji.',
        ],
      },
      {
        heading: '5. Udostępnianie i ujawnianie danych',
        paragraphs: [
          'Możemy udostępniać Twoje informacje dostawcom usług, którzy pomagają nam prowadzić stronę i działalność (np. hosting, analityka), z zastrzeżeniem obowiązków poufności. Możemy również ujawnić informacje, gdy wymaga tego prawo lub w celu ochrony naszych praw i bezpieczeństwa.',
        ],
      },
      {
        heading: '6. Przechowywanie i bezpieczeństwo danych',
        paragraphs: [
          'Przechowujemy Twoje informacje tylko tak długo, jak to konieczne do realizacji celów opisanych w tej polityce lub wymaganych prawem. Wdrażamy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane przed nieautoryzowanym dostępem, zmianą lub utratą.',
        ],
      },
      {
        heading: '7. Twoje prawa',
        paragraphs: [
          'W zależności od Twojej lokalizacji możesz mieć prawo do dostępu do swoich danych osobowych, ich poprawiania lub usuwania, sprzeciwu lub ograniczenia niektórych przetwarzań oraz przenoszenia danych. Aby skorzystać z tych praw lub zadać pytania o nasze praktyki, skontaktuj się z nami, korzystając z danych poniżej.',
        ],
      },
      {
        heading: '8. Zmiany w Polityce',
        paragraphs: [
          'Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. Opublikujemy zmienioną politykę na tej stronie i zaktualizujemy datę "Ostatnia aktualizacja". Zachęcamy do okresowego przeglądania tej polityki.',
        ],
      },
      {
        heading: '9. Kontakt',
        paragraphs: ['Jeśli masz pytania dotyczące niniejszej Polityki prywatności lub naszych praktyk dotyczących danych, skontaktuj się z nami pod adresem'],
        contact: true,
      },
    ],
  },
};
