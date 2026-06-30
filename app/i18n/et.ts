import type { Content } from './types';

export const et: Content = {
  site: {
    name: 'Plex',
    tagline: 'Digitaalstuudio ööelule ja külalislahkusele',
    description:
      'Veebisaidid, broneerimissüsteemid ja mobiilirakendused ööklubidele, restoranidele ja külalislahkuse asutustele. Loodud Next.js, NestJS ja React Native baasil.',
  },
  nav: {
    links: [
      { name: 'Teenused', href: '#services' },
      { name: 'Portfoolio', href: '#portfolio' },
      { name: 'Protsess', href: '#process' },
      { name: 'Paketid', href: '#pricing' },
      { name: 'Meist', href: '#about' },
    ],
    contact: 'Kontakt',
  },
  hero: {
    badge: 'Digitaalstuudio · Ööelu ja külalislahkus',
    headline: 'Veebisaidid, broneerimissüsteemid ja rakendused',
    highlight: 'asutustele, kes võtavad külaliskogemust tõsiselt.',
    subheadline:
      'Ehitame nii saali- kui ka tagaruumi digitaalsed tööriistad, mida ööklubid, restoranid ja külalislahkuse asutused tegelikult kasutavad — kujundatud ja kodeeritud nullist just teie asutuse jaoks.',
    cta: { primary: 'Alusta projekti', secondary: 'Vaata meie töid' },
    stats: {
      live: '4 kontseptsiooniprojekti veebis',
      stack: 'Next.js · NestJS · React Native',
      focus: 'Ainult külalislahkus',
    },
    demoLabel: 'Demo',
    explore: 'Avasta',
  },
  services: {
    eyebrow: 'Teenused',
    title: 'Mida me',
    highlight: 'ehitame',
    subtitle: 'Neli tooteliiki, kõik kohandatud külalislahkuse asutustele.',
    items: [
      {
        title: 'Asutuse veebisaidid',
        description: 'Maandumislehed ja täisveebisaidid, mis muudavad külastajad broneeringuteks',
        features: [
          'Ürituste kalender ja esinejad',
          'Foto- ja videogalerii',
          'Broneerimise kutsete vood',
          'Pressi- / meediakomplekti lehed',
        ],
        icon: 'code',
      },
      {
        title: 'Laua- ja broneerimissüsteemid',
        description: 'Broneerimisvood, mis meeldivad nii teie töötajatele kui ka külalistele',
        features: [
          'Visuaalsed lauaplaanid',
          'Ajaaknad ja sulgemised',
          'Ettemaksud ja sisenemistasud',
          'Külaliste tasemed (VIP / tavaline)',
        ],
        icon: 'calendar',
      },
      {
        title: 'Halduspaneelid',
        description: 'Tagaruumi tööriistad asutuse algusest lõpuni juhtimiseks',
        features: [
          'Broneeringud, üritused ja külaliste CRM',
          'Töötajate graafikud ja rollid',
          'Tulu ja täituvuse analüütika',
          'Rollipõhine juurdepääs (CASL)',
        ],
        icon: 'zap',
      },
      {
        title: 'Töötajate mobiilirakendused',
        description: 'Natiivsed iOS- ja Android-rakendused saalimeeskondadele',
        features: [
          'React Native (iOS + Android)',
          'Reaalajas broneeringukinnitused',
          'Push-teavitused uutest broneeringutest',
          'Biomeetriline sisselogimine ja võrguühenduseta tugi',
        ],
        icon: 'smartphone',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Valitud tööd',
    title: 'Valitud',
    highlight: 'tööd',
    subtitle:
      'Kasvav kogu tootmiskvaliteediga kontseptsiooniprojekte — loodud näitamaks täpselt, mida me klientidele pakume. Iga koodirida, iga piksel, iga interaktsioon on päris ja töötab.',
    note: 'Teie projekt saab sama taseme. Täna kontseptsioonitöö, homme teie asutus.',
    actions: {
      viewGallery: 'Vaata galeriid',
      visitSite: 'Külasta veebisaiti',
      downloadApk: 'Laadi alla APK',
      iosComingSoon: 'iOS — tulekul',
      viewDetails: 'Vaata täisinfot',
      demo: 'Demo',
    },
    projects: [
      {
        id: 'velvet',
        category: 'Ööklubi veebisait',
        tag: 'Kontseptsioon · Live demo',
        description:
          'Luksusliku ööklubi veebisaidi kontseptsioon VIP-broneeringu, ürituste kalendri, kaasahaarava fotogalerii ja rikkaliku liikumisdisainiga. Algusest lõpuni ehitatud Next.js ja Tailwindiga.',
      },
      {
        id: 'nightfall',
        category: 'Broneerimisplatvorm',
        tag: 'Kontseptsioon · Live demo',
        description:
          'Täielik lauabroneeringute süsteem: reaalajas saadavus, mitmeastmeline broneerimisvoog, suletud kuupäevad ja täielik halduspaneel. Next.js esiotsa, NestJS API, PostgreSQL.',
      },
      {
        id: 'venue',
        category: 'SaaS-haldusplatvorm',
        tag: 'Kontseptsioon · Live demo',
        description:
          'Täielik haldusplatvorm ööelu asutustele — broneeringud, üritused, külaliste CRM VIP-tasemetega, põrandaplaan, töötajad ja analüütika. CASL-põhised rolliõigused, JWT-autentimine, demorežiim kirjutuskaitstud juurdepääsuks.',
      },
      {
        id: 'venue-mobile',
        category: 'React Native · Android',
        tag: 'Kontseptsioon · APK saadaval',
        description:
          'Töötajate kaaslasrakendus Venue platvormile. Reaalajas töölaua mõõdikud, broneeringute haldus, külaliste CRM VIP-tasemetega, rollipõhine juurdepääs — kõik optimeeritud saalitööks mobiilis.',
      },
    ],
  },
  tech: {
    eyebrow: 'Tehnoloogia',
    title: 'Meie',
    highlight: 'tehnoloogia',
    subtitle:
      'Tööriistad, mille poole me igas projektis pöördume. Läbiproovitud, jõudlusele orienteeritud ja nauditavad kasutada.',
    technologies: [
      { name: 'Next.js', category: 'Esiots' },
      { name: 'React', category: 'Esiots' },
      { name: 'TypeScript', category: 'Keel' },
      { name: 'NestJS', category: 'Tagaots' },
      { name: 'PostgreSQL', category: 'Andmebaas' },
      { name: 'Tailwind CSS', category: 'Stiilid' },
      { name: 'React Native', category: 'Mobiil' },
    ],
    benefits: [
      {
        icon: '⚡',
        title: 'Kiire juba esimesest päevast',
        description:
          'Serveris renderdatud Next.js, optimeeritud pildid ja PostgreSQL kohe karbist. Teie sait laeb telefonis alla sekundi — mõõdetud, mitte lubatud.',
      },
      {
        icon: '🔑',
        title: 'Kõik kuulub teile',
        description:
          'Lähtekood teie GitHubis. Andmebaas teie serveris. Juurutusvõtmed teie käes. Ei mingit tarnijalukku ega igakuiseid SaaS-tasusid pealekauba.',
      },
      {
        icon: '🧩',
        title: 'Loodud laienema',
        description:
          'Modulaarne arhitektuur, nii et järgmine funktsioon pole ümberkirjutamine. Lisa makselahendus, uus roll või mobiilirakendus vundamenti puutumata.',
      },
    ],
  },
  process: {
    eyebrow: 'Kuidas me töötame',
    title: 'Kuidas me',
    highlight: 'töötame',
    subtitle:
      'Neli sammu esimesest kõnest käivitamiseni. Fikseeritud hind, fikseeritud ajakava, ilma mahu paisumise üllatusteta.',
    stepLabel: 'Samm',
    steps: [
      {
        step: '01',
        title: 'Tutvumiskõne',
        description:
          'Tasuta 30-minutiline kõne, et mõista teie asutust, teie eesmärke ja täpset probleemi, mida soovite lahendada. Lahkute selge mahu ja fikseeritud hinnapakkumisega.',
      },
      {
        step: '02',
        title: 'Disain ja prototüüp',
        description:
          'Kujundame Figmas põhivaated, tutvustame neid teile ja täiustame, kuni olete kindel. Te kinnitate enne, kui kirjutatakse ühtegi tootmiskoodi rida.',
      },
      {
        step: '03',
        title: 'Ehitus ja ülevaatus',
        description:
          'Ehitame nädalaste sprintidena, lavastus-URL-iga, mida saate igal ajal vaadata. Näete edu igal reedel, mitte suure pauguna lõpus.',
      },
      {
        step: '04',
        title: 'Käivitamine ja üleandmine',
        description:
          'Juurutame tootmisse, anname üle lähtekoodi ja juurdepääsuandmed, juhendame teie meeskonda kõiges vajalikus. Tugiperiood algab siit.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Paketid',
    title: 'Meie',
    highlight: 'paketid',
    subtitle: 'Kolm selget lähtepunkti, pluss lisad, kui neid vajate.',
    recommended: 'Soovitatud',
    getStarted: 'Alustame',
    packages: [
      {
        name: 'Maandumisleht',
        timeline: '2–3 nädalat',
        description: 'Kiire ja terav üheleheline sait, mis teeb teie asutuse leitavaks ja heas valguses.',
        features: [
          'Kohandatud — ei mingeid malle',
          'Kuni 5 sektsiooni',
          'Näeb suurepärane välja igas telefonis',
          'Seadistatud Google’is näitamiseks (SEO)',
          'Kontaktivorm, mis saadab teile e-kirja',
          'Külastajate analüütika',
          'Domeen ja majutus korraldatud',
        ],
        highlighted: false,
      },
      {
        name: 'Täisveebisait',
        timeline: '5–8 nädalat',
        description: 'Täisveebisait, mis võtab broneeringuid vastu veebis ja annab ühe töölaua nende haldamiseks.',
        features: [
          'Kohandatud — ei mingeid malle',
          'Kuni 5 sektsiooni',
          'Näeb suurepärane välja igas telefonis',
          'Seadistatud Google’is näitamiseks (SEO)',
          'Kontaktivorm, mis saadab teile e-kirja',
          'Külastajate analüütika',
          'Domeen ja majutus korraldatud',
        ],
        extrasLabel: 'Lisatud Maandumislehe peale',
        extras: [
          'Veebibroneeringud ja reserveeringud',
          'Ettemaksud ja maksed (Stripe)',
          'Halduspaneel broneeringute haldamiseks',
          'Töötajate sisselogimised rollidega',
          'Teie sait ja andmed kuuluvad teile',
          '2 kuud tuge pärast käivitamist',
        ],
        highlighted: true,
      },
      {
        name: 'Täisplatvorm',
        timeline: '12–20 nädalat',
        description:
          'Mitte sait pluss rakendus — üks ühtne süsteem: veeb, taustsüsteem ja töötajate rakendus, mis kõik jagavad sama reaalajas andmeid.',
        features: [
          'Kohandatud — ei mingeid malle',
          'Kuni 5 sektsiooni',
          'Näeb suurepärane välja igas telefonis',
          'Seadistatud Google’is näitamiseks (SEO)',
          'Kontaktivorm, mis saadab teile e-kirja',
          'Külastajate analüütika',
          'Domeen ja majutus korraldatud',
          'Veebibroneeringud ja reserveeringud',
          'Ettemaksud ja maksed (Stripe)',
          'Halduspaneel broneeringute haldamiseks',
          'Töötajate sisselogimised rollidega',
          'Teie sait ja andmed kuuluvad teile',
          '2 kuud tuge pärast käivitamist',
        ],
        extrasLabel: 'Lisatud Täisveebisaidi peale',
        extras: [
          'Töötajate mobiilirakendus — kaasas (iOS ja Android)',
          'Reaalajas uuendused veebis ja rakenduses',
          'Analüütika ja täituvuse töölauad',
          'Üksikasjalikud töötajate õigused',
          'Loodud kasvama koos teiega',
          '6 kuud tuge pärast käivitamist',
        ],
        highlighted: false,
      },
    ],
    addOns: {
      title: 'Lisa mobiilirakendus',
      subtitle:
        'Teine toode — natiivne rakendus teie Täisveebisaidi peale. (Täisplatvorm sisaldab seda juba.)',
      items: [
        {
          name: 'Töötajate mobiilirakendus',
          timeline: '8–12 nädalat',
          description:
            'Reaalajas broneeringud, külaliste nimekiri ja kohesed teavitused uutest broneeringutest teie saalimeeskonna taskus — natiivne iOS- ja Android-rakendus, lisatud teie Täisveebisaidile.',
          features: [
            'Natiivne iOS ja Android',
            'Push-teavitused uutest broneeringutest',
            'Turvalised töötajate sisselogimised',
            'Töötab võrguühenduseta',
            'Avaldatud App Store’is ja Play Store’is',
            '3 kuud tuge pärast käivitamist',
          ],
        },
      ],
    },
    note: 'Täisveebisait pluss töötajate rakendus annab teile saidi ja rakenduse, mis jagavad teie broneeringuid. Täisplatvorm ehitab needsamad osad ühe reaalajas süsteemina — reaalajas uuendused veebis ja rakenduses, analüütika töölauad, ruum kasvada ja 6 kuud tuge. Pole kindel, milline sobib? Iga projekt algab tasuta tutvumiskõne ja kindla fikseeritud hinnapakkumisega.',
    customQuote: 'Vajate midagi muud?',
  },
  about: {
    eyebrow: 'Kes me oleme',
    title: 'Kes on',
    highlight: 'Plex',
    mission:
      'Plex on väike digitaalstuudio, mis keskendub eranditult ööelule ja külalislahkusele. Ehitame veebisaite, broneerimissüsteeme ja mobiilirakendusi, mida asutused tegelikult vajavad — mitte malle ega turundusmüra. Meie kontseptsiooniprojektid näitavad täpselt, mida suudame pakkuda; teie projekt saab sama hoolikuse.',
    values: [
      {
        title: 'Ainult külalislahkus',
        description:
          'Me ei võta hambakliinikuid ega krüpto-maandumislehti. Iga projekt, mille ehitame, on klubidele, baaridele, restoranidele või külalislahkuse asutustele.',
      },
      {
        title: 'Kohandatud',
        description:
          'Ei mingeid teemasid ega lehekonstruktoreid. Iga toode on käsitsi kirjutatud Next.js, NestJS ja React Native — kujundatud ja kodeeritud just teie asutuse jaoks.',
      },
      {
        title: 'Kuulub teile',
        description:
          'Saate täieliku lähtekoodi, andmebaasi, juurutusvõtmed. Ei mingit tarnijalukku, igakuiseid SaaS-tasusid ega üllatusi.',
      },
    ],
    stats: [
      { icon: 'users', label: 'Spetsialiseerumine', value: 'Ööelu ja külalislahkus' },
      { icon: 'clock', label: 'Põhitehnoloogia', value: 'Next.js · NestJS · React Native' },
      { icon: 'award', label: 'Kontseptsiooniprojektid', value: '4 ehitatud' },
      { icon: 'trending-up', label: 'Koostöö', value: 'Fikseeritud hind · Ilma püsitasuta' },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Alusta',
    highlight: 'projekti',
    subtitle:
      'Rääkige meile oma asutusest ja sellest, mida üritate ehitada. Vastame 24 tunni jooksul tasuta tutvumiskõnega.',
    bookCall: {
      title: 'Broneeri tasuta tutvumiskõne',
      text: 'Vali endale sobiv aeg — räägime läbi, mida teie asutus vajab.',
      cta: 'Ava kalender →',
    },
    emailLabel: 'E-post',
    responseLabel: 'Vastamisaeg',
    responseValue: '24 tunni jooksul, tööpäeviti',
    form: {
      name: 'Täisnimi',
      email: 'E-posti aadress',
      message: 'Rääkige meile oma projektist',
      submit: 'Saada sõnum',
      placeholders: {
        name: 'Mari Maasikas',
        email: 'mari@näide.ee',
        message: 'Rääkige meile oma projektist...',
      },
    },
    expectations: {
      title: 'Mida oodata:',
      items: [
        'Vastus 24 tunni jooksul',
        'Tasuta konsultatsioonikõne',
        'Kohandatud projektipakkumine',
        'Kohustusi pole vaja',
      ],
    },
    success: 'Sõnum saadetud. Võtame teiega varsti ühendust.',
    error: 'Midagi läks valesti. Palun proovige uuesti või kirjutage meile otse.',
  },
  footer: {
    description:
      'Keskendunud digitaalstuudio, mis ehitab veebisaite, broneerimissüsteeme ja mobiilirakendusi ööelu ja külalislahkuse asutustele.',
    badge: 'ELis registreeritud stuudio · Teenindame asutusi üle maailma',
    address: 'Plex · Vesivärava tn 50-201, Tallinn, Eesti',
    quickLinksTitle: 'Kiirlingid',
    contactTitle: 'Võta ühendust',
    email: 'contact@plex.ee',
    builtWith: 'Loodud Next.js, TypeScript ja Tailwind CSS abil',
    quickLinks: [
      { name: 'Teenused', href: '#services' },
      { name: 'Portfoolio', href: '#portfolio' },
      { name: 'Protsess', href: '#process' },
      { name: 'Kontakt', href: '#contact' },
    ],
    legalLinks: [
      { name: 'Privaatsuspoliitika', href: '/privacy' },
      { name: 'Kasutustingimused', href: '/terms' },
    ],
    copyright: 'Kõik õigused kaitstud.',
  },
  cookie: {
    title: 'Küpsised ja sarnased tehnoloogiad',
    body: 'Kasutame hädavajalikke küpsiseid, et Plex toimiks ettenähtult, ja teie nõusolekul lisaküpsiseid, et mõista, kuidas meie saiti kasutatakse.',
    seeOur: 'Vaata meie',
    policyLink: 'privaatsus- ja küpsisepoliitikat',
    allowAll: 'Luba kõik',
    onlyEssential: 'Ainult hädavajalikud',
  },
  legal: { backHome: '← Tagasi avalehele', lastUpdated: 'Viimati uuendatud:' },
  terms: {
    title: 'Teenuse',
    highlight: 'tingimused',
    updated: 'Mai 2026',
    sections: [
      {
        heading: '1. Sissejuhatus',
        paragraphs: [
          'Käesolevad kasutustingimused ("Tingimused") reguleerivad Plexi veebisaidi https://plex.ee ja kõigi meie pakutavate disaini-, arendus- või seotud teenuste ("Teenused") kasutamist. Meie veebisaiti kasutades või Teenuseid tellides nõustute nende Tingimustega. Kui te ei nõustu, ärge kasutage saiti ega meie Teenuseid.',
        ],
      },
      {
        heading: '2. Meie teenused',
        paragraphs: [
          'Plex on digitaalstuudio, mis kujundab ja ehitab veebisaite, broneerimissüsteeme ja mobiilirakendusi ööelu ja külalislahkuse asutustele. Iga projekti maht, väljundid, ajakava ja hind lepitakse kirjalikult kokku enne töö algust, pärast tutvumiskõnet. Sellel saidil näidatud kontseptsiooniprojektid on meie võimekuse demonstratsioonid ega ole müügipakkumised.',
        ],
      },
      {
        heading: '3. Hinnapakkumised, tasud ja maksmine',
        paragraphs: [
          'Kindel fikseeritud hinnapakkumine esitatakse kirjalikus ettepanekus pärast teie projekti mahu määramist. Maksetingimused, sealhulgas võimalik ettemaks ja etappide ajakava, on selles ettepanekus sätestatud. Tasud ei sisalda kolmandate osapoolte kulusid (nagu majutus, domeenid, rakendustepoodide tasud või tasulised integratsioonid), kui pole märgitud teisiti.',
        ],
      },
      {
        heading: '4. Kliendi kohustused',
        paragraphs: [
          'Õigeaegseks tarnimiseks loodame, et esitate sisu, tagasiside, kinnitused ja juurdepääsu vajalikele kontodele õigeaegselt. Nende esitamise viivitused võivad mõjutada projekti ajakava. Vastutate selle eest, et teie esitatud materjalid ei riku kolmandate osapoolte õigusi.',
        ],
      },
      {
        heading: '5. Intellektuaalomand ja omandiõigus',
        paragraphs: [
          'Pärast täielikku tasumist läheb teie projekti jaoks spetsiaalselt loodud lõpliku lähtekoodi ja kohandatud väljundite omandiõigus teile üle, nagu teie ettepanekus kirjeldatud. Säilitame õiguse korduvkasutada üldist oskusteavet, tehnikaid ja mitte-kliendispetsiifilisi komponente. Kolmandate osapoolte ja avatud lähtekoodiga komponendid jäävad nende vastavate litsentside alla. Kui te ei loobu sellest kirjalikult, võime viidata valminud tööle oma portfoolios.',
        ],
      },
      {
        heading: '6. Garantiid ja tugi',
        paragraphs: [
          'Hoolitseme töö professionaalsel tasemel tarnimise eest. Iga käivitamisjärgne tugiperiood on määratud teie ettepanekus. Pärast seda perioodi pakutakse Teenuseid "nagu on" ilma igasuguste garantiideta, seaduse lubatud ulatuses. Me ei garanteeri, et Teenused on katkematud või veatud.',
        ],
      },
      {
        heading: '7. Vastutuse piiramine',
        paragraphs: [
          'Seaduse maksimaalselt lubatud ulatuses ei vastuta Plex kaudsete, juhuslike ega kaasnevate kahjude eest ega kasumi, tulu või andmete kaotuse eest, mis tulenevad Teenustest või on nendega seotud. Meie koguvastutus mis tahes nõude eest ei ületa summat, mille maksite nõude aluseks olevate Teenuste eest.',
        ],
      },
      {
        heading: '8. Kolmandate osapoolte teenused',
        paragraphs: [
          'Meie Teenused võivad tugineda kolmandate osapoolte platvormidele või nendega integreeruda (nagu majutusteenuse pakkujad, makseteenuse pakkujad ja analüütikatööriistad). Me ei vastuta nende kolmandate osapoolte saadavuse, jõudluse ega poliitikate eest ning nende kasutamine võib alluda nende endi tingimustele.',
        ],
      },
      {
        heading: '9. Tingimuste muutmine',
        paragraphs: [
          'Võime neid Tingimusi aeg-ajalt uuendada. Avaldame muudetud Tingimused sellel lehel ja uuendame kuupäeva "Viimati uuendatud". Saidi või meie Teenuste jätkuv kasutamine pärast muudatuste jõustumist tähendab muudetud Tingimustega nõustumist.',
        ],
      },
      {
        heading: '10. Võta meiega ühendust',
        paragraphs: ['Kui teil on küsimusi nende Tingimuste kohta, võtke meiega ühendust aadressil'],
        contact: true,
      },
    ],
  },
  privacy: {
    title: 'Privaatsus',
    highlight: 'poliitika',
    updated: 'Märts 2025',
    sections: [
      {
        heading: '1. Sissejuhatus',
        paragraphs: [
          'Plex ("meie" või "meid") on pühendunud teie privaatsuse kaitsmisele. Käesolev privaatsuspoliitika selgitab, kuidas me kogume, kasutame, avaldame ja kaitseme teie teavet, kui külastate meie veebisaiti https://plex.ee või kasutate meie teenuseid. Palun lugege seda poliitikat hoolikalt.',
        ],
      },
      {
        heading: '2. Teave, mida kogume',
        paragraphs: ['Võime koguda teavet, mille esitate meile otse, sealhulgas:'],
        list: [
          'Nimi ja kontaktandmed (nt e-posti aadress), kui kasutate meie kontaktivormi',
          'Ettevõtte või projekti üksikasjad, mida jagate hinnapakkumist või ettepanekut küsides',
          'Suhtlus ja kirjavahetus meiega',
        ],
        paragraphsAfter: [
          'Kogume automaatselt ka teatud tehnilist teavet, kui külastate meie saiti, näiteks IP-aadress, brauseri tüüp, seadme teave ja külastatud lehed. Selleks võime kasutada küpsiseid ja sarnaseid tehnoloogiaid.',
        ],
      },
      {
        heading: '3. Kuidas me teie teavet kasutame',
        paragraphs: [
          'Kasutame kogutud teavet, et vastata teie päringutele, pakkuda ja parandada oma teenuseid, saata asjakohaseid uuendusi (teie nõusolekul), analüüsida saidi kasutust ja täita juriidilisi kohustusi. Me ei müü teie isikuandmeid kolmandatele osapooltele.',
        ],
      },
      {
        heading: '4. Küpsised ja sarnased tehnoloogiad',
        paragraphs: [
          'Meie veebisait võib kasutada küpsiseid ja sarnaseid tehnoloogiaid, et meeles pidada teie eelistusi, mõista, kuidas te meie saiti kasutate, ja parandada teie kogemust. Saate küpsiseid hallata või keelata oma brauseri seadetes. Hädavajalikud küpsised on saidi toimimiseks vajalikud; teisi küpsiseid kasutatakse analüütika ja eelistuste salvestamiseks.',
        ],
      },
      {
        heading: '5. Andmete jagamine ja avaldamine',
        paragraphs: [
          'Võime jagada teie teavet teenusepakkujatega, kes aitavad meil oma veebisaiti ja äri hallata (nt majutus, analüütika), konfidentsiaalsuskohustuste alusel. Võime teavet avaldada ka seadusega nõutud juhtudel või oma õiguste ja turvalisuse kaitsmiseks.',
        ],
      },
      {
        heading: '6. Andmete säilitamine ja turvalisus',
        paragraphs: [
          'Säilitame teie teavet ainult nii kaua, kui on vajalik selles poliitikas kirjeldatud eesmärkide täitmiseks või seadusega nõutud. Rakendame teie andmete kaitsmiseks volitamata juurdepääsu, muutmise või kadumise eest sobivaid tehnilisi ja organisatsioonilisi meetmeid.',
        ],
      },
      {
        heading: '7. Teie õigused',
        paragraphs: [
          'Sõltuvalt teie asukohast võib teil olla õigus oma isikuandmetele juurde pääseda, neid parandada või kustutada, vaidlustada või piirata teatud töötlemist ja andmete ülekantavus. Nende õiguste kasutamiseks või meie tavade kohta küsimuste esitamiseks võtke meiega ühendust alltoodud andmete kaudu.',
        ],
      },
      {
        heading: '8. Poliitika muudatused',
        paragraphs: [
          'Võime seda privaatsuspoliitikat aeg-ajalt uuendada. Avaldame muudetud poliitika sellel lehel ja uuendame kuupäeva "Viimati uuendatud". Soovitame seda poliitikat perioodiliselt üle vaadata.',
        ],
      },
      {
        heading: '9. Võta meiega ühendust',
        paragraphs: ['Kui teil on küsimusi selle privaatsuspoliitika või meie andmetavade kohta, võtke meiega ühendust aadressil'],
        contact: true,
      },
    ],
  },
};
