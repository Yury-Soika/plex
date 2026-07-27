import type { Lang } from './types';

type CaseCopy = {
  context: string;
  challenge: string;
  approach: string;
  evidence: string;
  workflow?: {
    title: string;
    intro: string;
    boundary: string;
    steps: { title: string; text: string }[];
  };
};

export type ExtendedCopy = {
  common: {
    backHome: string;
    discuss: string;
    viewWork: string;
    viewCase: string;
    openPreview: string;
    projectStatus: string;
    interactiveConcept: string;
    context: string;
    challenge: string;
    approach: string;
    evidence: string;
    capabilities: string;
    nextProject: string;
  };
  proof: {
    items: { title: string; text: string }[];
  };
  problems: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  hospitalityTeaser: {
    eyebrow: string;
    title: string;
    highlight: string;
    text: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    highlight: string;
    intro: string;
    items: { question: string; answer: string }[];
  };
  pages: {
    services: { eyebrow: string; title: string; highlight: string; intro: string; deliveryTitle: string; deliveryText: string };
    work: { eyebrow: string; title: string; highlight: string; intro: string };
    hospitality: {
      eyebrow: string;
      title: string;
      highlight: string;
      intro: string;
      expertiseTitle: string;
      expertiseText: string;
      transferableTitle: string;
      transferableText: string;
    };
    about: {
      eyebrow: string;
      title: string;
      highlight: string;
      intro: string;
      responsibilityTitle: string;
      responsibilityText: string;
      founderLabel: string;
      transparency: string;
    };
    contact: { company: string; projectType: string; timeline: string; budget: string; optional: string };
  };
  cases: Record<string, CaseCopy>;
};

export const extended: Record<Lang, ExtendedCopy> = {
  en: {
    common: {
      backHome: 'Back to Plex',
      discuss: 'Discuss your project',
      viewWork: 'View selected work',
      viewCase: 'Read case study',
      openPreview: 'Open interactive preview',
      projectStatus: 'Project status',
      interactiveConcept: 'Interactive concept',
      context: 'Context',
      challenge: 'Product challenge',
      approach: 'Approach',
      evidence: 'What is demonstrated',
      capabilities: 'Relevant capabilities',
      nextProject: 'Next project',
    },
    proof: {
      items: [
        { title: 'One accountable studio', text: 'Strategy, design and engineering stay connected from discovery to handoff.' },
        { title: 'Built around the business', text: 'The product and architecture follow the real workflow, not a fixed template.' },
        { title: 'Owned by the client', text: 'Agreed source code, data and deployment access remain under your control.' },
      ],
    },
    problems: {
      eyebrow: 'Business outcomes',
      title: 'Problems worth',
      highlight: 'solving',
      intro: 'Plex connects customer experience with the operational software behind it.',
      items: [
        { title: 'Explain and convert', text: 'Turn a complex offer into a clear website or landing journey.' },
        { title: 'Sell and reserve', text: 'Connect products, payments, availability and customer communication.' },
        { title: 'Operate with less friction', text: 'Replace spreadsheets and disconnected tools with focused workflows.' },
        { title: 'Extend the product', text: 'Add mobile access, integrations, automation or practical AI where it creates value.' },
      ],
    },
    hospitalityTeaser: {
      eyebrow: 'Featured expertise',
      title: 'Deep roots in',
      highlight: 'hospitality',
      text: 'Our hospitality concepts demonstrate conversion, reservations, customer self-service, operations and mobile staff workflows. That expertise remains a strength—not a boundary.',
      cta: 'Explore hospitality expertise',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before we',
      highlight: 'start',
      intro: 'Straight answers about scope, process and ownership.',
      items: [
        { question: 'What does Plex build?', answer: 'Custom websites, landing pages, e-commerce, booking systems, SaaS and web applications, internal tools, mobile products, integrations and practical automation.' },
        { question: 'Is Plex only for hospitality companies?', answer: 'No. Hospitality is our strongest demonstrated area, but we work from the business problem and can apply the same product patterns across industries.' },
        { question: 'Do you handle design and development?', answer: 'Yes. Plex can take a project from discovery and product direction through interface design, engineering, launch and handoff.' },
        { question: 'Can you improve an existing product?', answer: 'Yes. We can audit an existing website or application, clarify the highest-value changes and improve it without forcing a complete rebuild.' },
        { question: 'Who owns the finished product?', answer: 'The agreed source code, data, accounts and deployment access remain in the client’s control. Any third-party costs are identified before work begins.' },
        { question: 'How do we start?', answer: 'Send a short brief or book an introductory call. We will clarify the problem, useful scope, timing and the right next step before proposing the work.' },
      ],
    },
    pages: {
      services: { eyebrow: 'Services', title: 'Digital products with a', highlight: 'business purpose', intro: 'From a focused website to connected software, Plex combines product thinking, interface design and engineering in one delivery process.', deliveryTitle: 'One process, appropriate scope', deliveryText: 'Not every business needs a large platform. We define the smallest useful release, choose an architecture that can evolve and make the handoff clear.' },
      work: { eyebrow: 'Selected work', title: 'Product thinking made', highlight: 'visible', intro: 'These interactive concepts show how Plex approaches customer journeys, reservations, operational tools and mobile workflows. Each case is labelled honestly.' },
      hospitality: { eyebrow: 'Hospitality expertise', title: 'Digital products for', highlight: 'service businesses', intro: 'Hospitality remains the clearest demonstration of our domain knowledge: high-intent customer journeys connected to demanding real-world operations.', expertiseTitle: 'Where the experience runs deepest', expertiseText: 'Venues need discovery, availability, bookings, payments, guest communication, staff coordination and reporting to work as one system.', transferableTitle: 'Expertise that transfers', transferableText: 'The same patterns apply to appointments, memberships, marketplaces, field teams and other businesses where customer actions trigger operational work.' },
      about: { eyebrow: 'Studio', title: 'Small by design,', highlight: 'serious about delivery', intro: 'Plex is an independent digital product studio based in Tallinn and working with businesses internationally. We connect business context, product decisions and implementation without an agency handoff chain.', responsibilityTitle: 'Clear responsibility', responsibilityText: 'The person shaping the direction stays close to the implementation. When specialist collaborators are needed, their role should be explicit rather than hidden behind an agency façade.', founderLabel: 'Founder', transparency: 'Verified client references and outcomes will be added only from real source material—not invented for presentation.' },
      contact: { company: 'Company', projectType: 'Project type', timeline: 'Target timing', budget: 'Approximate budget', optional: 'Optional' },
    },
    cases: {
      aster: {
        context: 'A fictional direct-to-customer commerce concept for premium workspace goods, created to demonstrate product discovery, transactions, customer communication and the operational handoff behind an order.',
        challenge: 'Make a considered product range easy to explore and purchase without separating the polished customer journey from delivery rules, inventory context and fulfilment decisions.',
        approach: 'Connect catalogue filters, product choices, persistent cart state, delivery selection and checkout review as one clear journey, then expose the operational events a production integration would need.',
        evidence: 'A working browser concept with seeded products, cart quantity controls, delivery choices and a simulated confirmation. No payment, account, personal data or real order is created.',
        workflow: {
          title: 'One journey from discovery to fulfilment',
          intro: 'The customer experience stays simple because product, delivery and operational rules are treated as one connected system.',
          boundary: 'Concept boundary: all products, stock, prices and customer details are fictional. Checkout is simulated locally; no payment is requested and nothing is transmitted or fulfilled.',
          steps: [
            { title: 'Discover', text: 'Filter a focused catalogue and compare the information needed for a confident product decision.' },
            { title: 'Configure', text: 'Choose the relevant product option while price and availability remain explicit.' },
            { title: 'Review', text: 'Adjust cart quantities and see totals before entering the checkout decision.' },
            { title: 'Deliver', text: 'Select a seeded delivery method with its timing and cost visible before confirmation.' },
            { title: 'Fulfil', text: 'Translate the confirmed order into inventory, customer notification and fulfilment events with traceable status.' },
          ],
        },
      },
      velvet: { context: 'A premium hospitality website concept exploring how atmosphere, editorial content and a direct reservation journey can work together.', challenge: 'Express a distinctive venue identity without hiding essential information or making the booking path difficult to find.', approach: 'Use immersive art direction for discovery, then introduce clear content hierarchy and repeated reservation actions at decision points.', evidence: 'A rendered multi-page marketing concept with responsive presentation, editorial patterns and a demonstrational reservation experience.' },
      nightfall: { context: 'A customer-facing reservation and self-service concept paired with patterns for an operational administration view.', challenge: 'Keep a premium guest experience simple while exposing availability and capturing information the operating team can use.', approach: 'Connect discovery, availability and reservation steps as one journey, with the operational view treated as part of the same product.', evidence: 'An interactive public concept that demonstrates reservation flows, customer self-service and the relationship to back-office operations.' },
      venue: { context: 'A SaaS operations concept for businesses managing reservations, customer relationships, team workflows and reporting.', challenge: 'Replace fragmented operational views with a coherent system that gives each role the information required for the next decision.', approach: 'Organise the product around role-aware workflows, shared customer context and focused dashboards rather than a collection of unrelated screens.', evidence: 'A rendered dashboard concept demonstrating information architecture, CRM, booking, workflow and reporting patterns.' },
      'venue-mobile': { context: 'A mobile companion concept for the Venue platform, designed for staff who need operational context away from a desk.', challenge: 'Bring the most time-sensitive bookings, guest information and alerts to a small screen without reproducing the entire desktop product.', approach: 'Prioritise tonight’s work, quick actions and role-relevant context, with the mobile product connected conceptually to the wider platform.', evidence: 'A React Native Android concept build and a documented screen set. It demonstrates mobile product direction; it is not presented as deployed client software.' },
      relay: {
        context: 'A cross-industry internal-tool concept for service businesses receiving work through forms, email, customer portals and connected systems.',
        challenge: 'Turn inconsistent requests into reliable operational work without asking AI to make unreviewed business decisions or hiding exceptions from the team.',
        approach: 'Create one intake queue, use AI to extract and suggest structure, apply deterministic business rules, then require human approval where confidence or impact demands it.',
        evidence: 'A rendered workflow case study with seeded sample data, explicit decision boundaries and a system flow from intake to approved downstream updates. It is a product concept, not a deployed client system.',
        workflow: {
          title: 'A controlled automation loop',
          intro: 'Automation handles repetitive movement and formatting. People retain control over exceptions, commitments and consequential decisions.',
          boundary: 'Concept boundary: sample information is fictional; AI suggestions remain visible and reviewable, and consequential updates require explicit approval.',
          steps: [
            { title: 'Capture', text: 'Collect requests from forms, email and connected services into one traceable queue.' },
            { title: 'Structure', text: 'AI extracts fields, summarises context and proposes a category with visible confidence.' },
            { title: 'Route', text: 'Deterministic rules assign ownership, priority and the next required action.' },
            { title: 'Review', text: 'A person confirms low-confidence or high-impact recommendations before anything consequential happens.' },
            { title: 'Synchronise', text: 'Approved changes update the relevant CRM, task, notification or reporting system with an audit trail.' },
          ],
        },
      },
    },
  },
  et: {
    common: { backHome: 'Tagasi Plexi', discuss: 'Arutame teie projekti', viewWork: 'Vaata valitud töid', viewCase: 'Loe juhtumiuuringut', openPreview: 'Ava interaktiivne eelvaade', projectStatus: 'Projekti staatus', interactiveConcept: 'Interaktiivne kontseptsioon', context: 'Kontekst', challenge: 'Toote väljakutse', approach: 'Lähenemine', evidence: 'Mida projekt näitab', capabilities: 'Seotud võimekused', nextProject: 'Järgmine projekt' },
    proof: { items: [{ title: 'Üks vastutav stuudio', text: 'Strateegia, disain ja arendus püsivad ühendatud avastusest üleandmiseni.' }, { title: 'Loodud ettevõtte ümber', text: 'Toode ja arhitektuur lähtuvad tegelikust töövoost, mitte fikseeritud mallist.' }, { title: 'Kuulub kliendile', text: 'Kokkulepitud lähtekood, andmed ja juurutusjuurdepääs jäävad teie kontrolli alla.' }] },
    problems: { eyebrow: 'Äritulemused', title: 'Probleemid, mida tasub', highlight: 'lahendada', intro: 'Plex ühendab kliendikogemuse selle taga oleva operatiivtarkvaraga.', items: [{ title: 'Selgita ja konverteeri', text: 'Muuda keeruline pakkumine selgeks veebisaidiks või maandumisteekonnaks.' }, { title: 'Müü ja broneeri', text: 'Ühenda tooted, maksed, saadavus ja kliendisuhtlus.' }, { title: 'Tööta väiksema hõõrdumisega', text: 'Asenda tabelid ja eraldatud tööriistad keskendunud töövoogudega.' }, { title: 'Laienda toodet', text: 'Lisa mobiilne ligipääs, integratsioonid, automatiseerimine või praktiline AI seal, kus see loob väärtust.' }] },
    hospitalityTeaser: { eyebrow: 'Esiletõstetud pädevus', title: 'Sügavad juured', highlight: 'külalislahkuses', text: 'Meie külalislahkuse kontseptsioonid näitavad konversiooni, broneerimist, iseteenindust, tegevuste haldust ja mobiilseid töövooge. See pädevus on tugevus, mitte piir.', cta: 'Vaata külalislahkuse pädevust' },
    faq: { eyebrow: 'KKK', title: 'Enne kui', highlight: 'alustame', intro: 'Selged vastused mahu, protsessi ja omandi kohta.', items: [{ question: 'Mida Plex loob?', answer: 'Kohandatud veebisaite, maandumislehti, e-kaubandust, broneerimissüsteeme, SaaS- ja veebirakendusi, sisetööriistu, mobiilitooteid, integratsioone ning praktilist automatiseerimist.' }, { question: 'Kas Plex töötab ainult külalislahkusega?', answer: 'Ei. Külalislahkus on meie tugevaim näidatud valdkond, kuid lähtume äriprobleemist ja rakendame samu tootemustreid eri valdkondades.' }, { question: 'Kas pakute disaini ja arendust?', answer: 'Jah. Plex saab viia projekti avastusest ja tootesuunast kasutajaliidese disaini, arenduse, käivitamise ja üleandmiseni.' }, { question: 'Kas saate olemasolevat toodet parandada?', answer: 'Jah. Auditeerime olemasolevat veebisaiti või rakendust, määratleme väärtuslikumad muudatused ja parandame seda ilma kohustusliku täieliku ümberehituseta.' }, { question: 'Kellele valmistoode kuulub?', answer: 'Kokkulepitud lähtekood, andmed, kontod ja juurutusjuurdepääs jäävad kliendi kontrolli alla. Kolmandate osapoolte kulud tuuakse välja enne töö algust.' }, { question: 'Kuidas alustada?', answer: 'Saatke lühike kirjeldus või broneerige tutvumiskõne. Täpsustame probleemi, kasuliku mahu, ajakava ja õige järgmise sammu enne pakkumist.' }] },
    pages: {
      services: { eyebrow: 'Teenused', title: 'Digitaalsed tooted, millel on', highlight: 'äriline eesmärk', intro: 'Alates keskendunud veebisaidist kuni ühendatud tarkvarani seob Plex tootemõtlemise, kasutajaliidese disaini ja arenduse üheks protsessiks.', deliveryTitle: 'Üks protsess, sobiv maht', deliveryText: 'Iga ettevõte ei vaja suurt platvormi. Määratleme väikseima kasuliku väljalaske, valime areneva arhitektuuri ja teeme üleandmise selgeks.' },
      work: { eyebrow: 'Valitud tööd', title: 'Tootemõtlemine', highlight: 'nähtaval', intro: 'Need interaktiivsed kontseptsioonid näitavad Plexi lähenemist klienditeekondadele, broneerimisele, operatiivtööriistadele ja mobiilsetele töövoogudele. Iga juhtum on ausalt märgistatud.' },
      hospitality: { eyebrow: 'Külalislahkuse pädevus', title: 'Digitaalsed tooted', highlight: 'teenindusettevõtetele', intro: 'Külalislahkus näitab kõige selgemalt meie valdkonnateadmisi: suure kavatsusega klienditeekonnad, mis on ühendatud nõudlike päriselu tegevustega.', expertiseTitle: 'Kus kogemus on sügavaim', expertiseText: 'Asutused vajavad avastamist, saadavust, broneeringuid, makseid, kliendisuhtlust, meeskonna koordineerimist ja aruandlust ühe süsteemina.', transferableTitle: 'Ülekantav pädevus', transferableText: 'Samad mustrid sobivad kohtumistele, liikmelisustele, turuplatsidele, välimeeskondadele ja teistele ettevõtetele, kus kliendi tegevus käivitab operatiivtöö.' },
      about: { eyebrow: 'Stuudio', title: 'Teadlikult väike,', highlight: 'tarnimises tõsine', intro: 'Plex on Tallinnas asuv sõltumatu digitaaltoodete stuudio, mis töötab rahvusvaheliselt. Seome ärikonteksti, tooteotsused ja teostuse ilma agentuuride üleandmisahelata.', responsibilityTitle: 'Selge vastutus', responsibilityText: 'Suuna kujundaja püsib teostuse lähedal. Kui vajame spetsialiste, peab nende roll olema selge, mitte peidetud agentuurifassaadi taha.', founderLabel: 'Asutaja', transparency: 'Kontrollitud kliendiviited ja tulemused lisatakse ainult tegeliku lähtematerjali põhjal.' },
      contact: { company: 'Ettevõte', projectType: 'Projekti tüüp', timeline: 'Soovitud aeg', budget: 'Ligikaudne eelarve', optional: 'Valikuline' },
    },
    cases: {
      aster: {
        context: 'Fiktiivne kvaliteetsete tööruumitoodete e-kaubanduse kontseptsioon, mis näitab tooteleidmist, ostuteekonda, kliendisuhtlust ja tellimuse operatiivset üleandmist.',
        challenge: 'Muuta läbimõeldud tootevalik lihtsalt avastatavaks ja ostetavaks, ühendades klienditeekonna tarne-, lao- ja täitmisreeglitega.',
        approach: 'Ühenda kataloogifiltrid, tootevalikud, püsiv ostukorv, tarneviis ja tellimuse ülevaatus üheks selgeks teekonnaks.',
        evidence: 'Toimiv brauserikontseptsioon näidistoodete, koguste, tarnevalikute ja simuleeritud kinnitusega. Makset, kontot, isikuandmeid ega päris tellimust ei looda.',
        workflow: { title: 'Üks teekond avastamisest tellimuse täitmiseni', intro: 'Kliendikogemus püsib lihtne, sest toote-, tarne- ja tegevusreegleid käsitletakse ühe ühendatud süsteemina.', boundary: 'Kõik tooted, laoseisud, hinnad ja kliendiandmed on fiktiivsed. Kassa töötab ainult lokaalse simulatsioonina; makset ega andmeedastust ei toimu.', steps: [{ title: 'Avasta', text: 'Filtreeri kataloogi ja võrdle kindla tooteotsuse jaoks vajalikku infot.' }, { title: 'Seadista', text: 'Vali sobiv tootevariant, hoides hinna ja saadavuse nähtavana.' }, { title: 'Vaata üle', text: 'Muuda ostukorvi koguseid ja kontrolli summasid enne kassasse liikumist.' }, { title: 'Tarne', text: 'Vali näidistarneviis, mille aeg ja hind on enne kinnitamist selged.' }, { title: 'Täida', text: 'Muuda kinnitatud tellimus lao-, teavitus- ja täitmistoiminguteks jälgitava staatusega.' }] },
      },
      velvet: { context: 'Premium-klassi külalislahkuse veebisaidi kontseptsioon, kus õhustik, toimetuslik sisu ja otsene broneerimisteekond töötavad koos.', challenge: 'Väljendada eristuvat identiteeti ilma olulist infot peitmata või broneerimist raskeks muutmata.', approach: 'Kasuta avastamiseks kaasahaaravat visuaalset suunda ning otsustuskohtades selget sisuhierarhiat ja korduvaid broneerimiskutseid.', evidence: 'Renderdatud mitmeleheline turunduskontseptsioon kohanduva esituse, toimetuslike mustrite ja demonstratsioonilise broneerimiskogemusega.' },
      nightfall: { context: 'Kliendile suunatud broneerimise ja iseteeninduse kontseptsioon koos operatiivse haldusvaate mustritega.', challenge: 'Hoida premium-klassi kliendikogemus lihtne, näidates samal ajal saadavust ja kogudes meeskonnale kasulikku infot.', approach: 'Ühenda avastamine, saadavus ja broneerimine üheks teekonnaks ning käsitle operatiivvaadet sama toote osana.', evidence: 'Interaktiivne avalik kontseptsioon, mis näitab broneerimisvooge, kliendi iseteenindust ja seost tagaruumi tegevustega.' },
      venue: { context: 'SaaS-i tegevuskontseptsioon broneeringute, kliendisuhete, meeskonna töövoogude ja aruandluse haldamiseks.', challenge: 'Asendada killustatud operatiivvaated sidusa süsteemiga, mis annab igale rollile järgmise otsuse jaoks vajaliku info.', approach: 'Korralda toode rollipõhiste töövoogude, jagatud kliendikonteksti ja keskendunud töölaudade ümber.', evidence: 'Renderdatud töölauakontseptsioon, mis näitab infoarhitektuuri, CRM-i, broneerimise, töövoo ja aruandluse mustreid.' },
      'venue-mobile': { context: 'Venue platvormi mobiilse kaaslase kontseptsioon töötajatele, kes vajavad operatiivset konteksti töölauast eemal.', challenge: 'Tuua ajakriitilised broneeringud, külaliste info ja teavitused väikesele ekraanile ilma kogu töölauatoodet kopeerimata.', approach: 'Sea esikohale tänane töö, kiirtoimingud ja rollile sobiv kontekst, ühendades mobiilitoote laiema platvormiga.', evidence: 'React Native Androidi kontseptsioonirakendus ja dokumenteeritud ekraanikomplekt. See näitab mobiilset tootesuunda, mitte kasutusele võetud klienditarkvara.' },
      relay: {
        context: 'Valdkondadeülene sisetööriista kontseptsioon teenusettevõtetele, kuhu töö saabub vormide, e-posti, kliendiportaalide ja ühendatud süsteemide kaudu.',
        challenge: 'Muuta ebaühtlased päringud usaldusväärseks operatiivtööks ilma kontrollimata AI-otsusteta või erandite meeskonna eest peitmiseta.',
        approach: 'Loo üks sisendjärjekord, kasuta AI-d info eraldamiseks ja struktuuri soovitamiseks, rakenda kindlaid ärireegleid ning nõua vajadusel inimese kinnitust.',
        evidence: 'Renderdatud töövoo juhtumiuuring näidisandmete, selgete otsustuspiiride ja süsteemivooga sisendist kinnitatud uuendusteni. See on tootekontseptsioon, mitte kliendisüsteem.',
        workflow: {
          title: 'Kontrollitud automatiseerimistsükkel',
          intro: 'Automatiseerimine tegeleb korduva liikumise ja vormindamisega. Erandid, lubadused ja olulised otsused jäävad inimese kontrolli alla.',
          boundary: 'Kontseptsiooni piir: näidisinfo on väljamõeldud; AI soovitused jäävad nähtavaks ja kontrollitavaks ning olulised uuendused nõuavad selget kinnitust.',
          steps: [
            { title: 'Kogumine', text: 'Vormide, e-posti ja ühendatud teenuste päringud jõuavad ühte jälgitavasse järjekorda.' },
            { title: 'Struktureerimine', text: 'AI eraldab väljad, võtab konteksti kokku ja pakub nähtava kindlustasemega kategooria.' },
            { title: 'Suunamine', text: 'Kindlad reeglid määravad vastutaja, prioriteedi ja järgmise vajaliku tegevuse.' },
            { title: 'Kontroll', text: 'Inimene kinnitab madala kindluse või suure mõjuga soovitused.' },
            { title: 'Sünkroonimine', text: 'Kinnitatud muudatused uuendavad CRM-i, ülesandeid, teavitusi või aruandlust koos auditijäljega.' },
          ],
        },
      },
    },
  },
  pl: {
    common: { backHome: 'Wróć do Plex', discuss: 'Porozmawiajmy o projekcie', viewWork: 'Zobacz wybrane prace', viewCase: 'Czytaj case study', openPreview: 'Otwórz interaktywny podgląd', projectStatus: 'Status projektu', interactiveConcept: 'Interaktywna koncepcja', context: 'Kontekst', challenge: 'Wyzwanie produktowe', approach: 'Podejście', evidence: 'Co pokazuje projekt', capabilities: 'Powiązane kompetencje', nextProject: 'Następny projekt' },
    proof: { items: [{ title: 'Jedno odpowiedzialne studio', text: 'Strategia, design i development pozostają połączone od discovery do przekazania.' }, { title: 'Wokół biznesu', text: 'Produkt i architektura wynikają z realnego procesu, a nie sztywnego szablonu.' }, { title: 'Własność klienta', text: 'Uzgodniony kod, dane i dostęp do wdrożenia pozostają pod Twoją kontrolą.' }] },
    problems: { eyebrow: 'Rezultaty biznesowe', title: 'Problemy warte', highlight: 'rozwiązania', intro: 'Plex łączy doświadczenie klienta z oprogramowaniem operacyjnym, które działa w tle.', items: [{ title: 'Wyjaśniaj i konwertuj', text: 'Zmień złożoną ofertę w czytelną stronę lub ścieżkę landing page.' }, { title: 'Sprzedawaj i rezerwuj', text: 'Połącz produkty, płatności, dostępność i komunikację z klientem.' }, { title: 'Działaj sprawniej', text: 'Zastąp arkusze i rozproszone narzędzia skoncentrowanymi procesami.' }, { title: 'Rozwijaj produkt', text: 'Dodaj mobile, integracje, automatyzację lub praktyczne AI tam, gdzie tworzą wartość.' }] },
    hospitalityTeaser: { eyebrow: 'Wyróżniona specjalizacja', title: 'Głębokie korzenie w', highlight: 'hospitality', text: 'Nasze koncepcje hospitality pokazują konwersję, rezerwacje, samoobsługę, operacje i mobilne procesy zespołu. Ta wiedza jest mocną stroną, a nie ograniczeniem.', cta: 'Poznaj specjalizację hospitality' },
    faq: { eyebrow: 'FAQ', title: 'Zanim', highlight: 'zaczniemy', intro: 'Konkretne odpowiedzi o zakresie, procesie i własności.', items: [{ question: 'Co tworzy Plex?', answer: 'Dopasowane strony, landing page, e-commerce, systemy rezerwacji, SaaS i aplikacje webowe, narzędzia wewnętrzne, produkty mobilne, integracje i praktyczną automatyzację.' }, { question: 'Czy Plex pracuje tylko dla hospitality?', answer: 'Nie. Hospitality to nasza najmocniej pokazana dziedzina, ale zaczynamy od problemu biznesowego i stosujemy te same wzorce produktowe w różnych branżach.' }, { question: 'Czy zajmujecie się designem i developmentem?', answer: 'Tak. Plex może przeprowadzić projekt od discovery i kierunku produktu przez projekt interfejsu, development, uruchomienie i przekazanie.' }, { question: 'Czy możecie ulepszyć istniejący produkt?', answer: 'Tak. Możemy przeanalizować obecną stronę lub aplikację, ustalić najważniejsze zmiany i ulepszyć produkt bez narzucania pełnej przebudowy.' }, { question: 'Kto jest właścicielem gotowego produktu?', answer: 'Uzgodniony kod źródłowy, dane, konta i dostęp do wdrożenia pozostają pod kontrolą klienta. Koszty zewnętrzne wskazujemy przed rozpoczęciem prac.' }, { question: 'Jak zacząć?', answer: 'Wyślij krótki opis lub umów rozmowę. Przed ofertą doprecyzujemy problem, użyteczny zakres, termin i właściwy następny krok.' }] },
    pages: {
      services: { eyebrow: 'Usługi', title: 'Produkty cyfrowe z', highlight: 'celem biznesowym', intro: 'Od skoncentrowanej strony po połączone oprogramowanie — Plex łączy myślenie produktowe, projektowanie interfejsu i development w jednym procesie.', deliveryTitle: 'Jeden proces, właściwy zakres', deliveryText: 'Nie każda firma potrzebuje dużej platformy. Definiujemy najmniejsze użyteczne wydanie, wybieramy rozwijalną architekturę i jasno przekazujemy produkt.' },
      work: { eyebrow: 'Wybrane prace', title: 'Myślenie produktowe', highlight: 'w praktyce', intro: 'Interaktywne koncepcje pokazują podejście Plex do ścieżek klienta, rezerwacji, narzędzi operacyjnych i mobilnych procesów. Każdy projekt jest uczciwie oznaczony.' },
      hospitality: { eyebrow: 'Specjalizacja hospitality', title: 'Produkty cyfrowe dla', highlight: 'biznesów usługowych', intro: 'Hospitality najlepiej pokazuje naszą wiedzę domenową: ścieżki klientów o wysokiej intencji połączone z wymagającymi operacjami.', expertiseTitle: 'Gdzie doświadczenie jest najgłębsze', expertiseText: 'Lokale potrzebują odkrywania, dostępności, rezerwacji, płatności, komunikacji z gośćmi, koordynacji zespołu i raportowania jako jednego systemu.', transferableTitle: 'Wiedza, którą można przenieść', transferableText: 'Te same wzorce pasują do wizyt, członkostw, marketplace, zespołów terenowych i innych firm, gdzie działanie klienta uruchamia proces operacyjny.' },
      about: { eyebrow: 'Studio', title: 'Celowo małe,', highlight: 'poważne w realizacji', intro: 'Plex to niezależne studio produktów cyfrowych z Tallinna, pracujące międzynarodowo. Łączymy kontekst biznesowy, decyzje produktowe i realizację bez agencyjnego łańcucha przekazań.', responsibilityTitle: 'Jasna odpowiedzialność', responsibilityText: 'Osoba wyznaczająca kierunek pozostaje blisko wdrożenia. Jeśli potrzebni są specjaliści, ich rola powinna być jawna, a nie ukryta za fasadą agencji.', founderLabel: 'Założyciel', transparency: 'Zweryfikowane referencje i rezultaty zostaną dodane wyłącznie na podstawie prawdziwych materiałów.' },
      contact: { company: 'Firma', projectType: 'Typ projektu', timeline: 'Planowany termin', budget: 'Orientacyjny budżet', optional: 'Opcjonalnie' },
    },
    cases: {
      aster: {
        context: 'Fikcyjna koncepcja e-commerce premium dla produktów do pracy, pokazująca odkrywanie oferty, zakup, komunikację z klientem i operacyjne przekazanie zamówienia.',
        challenge: 'Ułatwić odkrywanie i zakup przemyślanej oferty, łącząc ścieżkę klienta z regułami dostawy, zapasu i realizacji.',
        approach: 'Połączyć filtry katalogu, wybór produktu, trwały koszyk, dostawę i przegląd zamówienia w jedną czytelną ścieżkę.',
        evidence: 'Działająca koncepcja przeglądarkowa z przykładowymi produktami, ilościami, dostawą i symulowanym potwierdzeniem. Nie tworzy płatności, konta, danych osobowych ani prawdziwego zamówienia.',
        workflow: { title: 'Jedna ścieżka od odkrycia do realizacji', intro: 'Doświadczenie klienta pozostaje proste, ponieważ produkt, dostawa i operacje tworzą jeden połączony system.', boundary: 'Wszystkie produkty, zapasy, ceny i dane są fikcyjne. Checkout jest lokalną symulacją; nie ma płatności ani transmisji danych.', steps: [{ title: 'Odkryj', text: 'Filtruj katalog i porównuj informacje potrzebne do pewnej decyzji.' }, { title: 'Skonfiguruj', text: 'Wybierz wariant produktu z widoczną ceną i dostępnością.' }, { title: 'Sprawdź', text: 'Zmień ilości i sprawdź sumę przed przejściem do checkoutu.' }, { title: 'Dostawa', text: 'Wybierz przykładową metodę z widocznym czasem i kosztem.' }, { title: 'Realizacja', text: 'Przełóż potwierdzenie na zdarzenia magazynowe, komunikacyjne i operacyjne.' }] },
      },
      velvet: { context: 'Koncepcja premium strony hospitality łącząca atmosferę, treści redakcyjne i bezpośrednią ścieżkę rezerwacji.', challenge: 'Wyrazić charakter miejsca bez ukrywania ważnych informacji i utrudniania rezerwacji.', approach: 'Wykorzystać immersyjny kierunek wizualny do odkrywania, a w punktach decyzji jasną hierarchię i powtarzalne wezwania do rezerwacji.', evidence: 'Renderowana, wielostronicowa koncepcja marketingowa z responsywną prezentacją, wzorcami redakcyjnymi i demonstracyjnym doświadczeniem rezerwacji.' },
      nightfall: { context: 'Koncepcja rezerwacji i samoobsługi klienta połączona ze wzorcami operacyjnego panelu administracyjnego.', challenge: 'Zachować prostotę doświadczenia premium, pokazując dostępność i zbierając informacje użyteczne dla zespołu.', approach: 'Połączyć odkrywanie, dostępność i rezerwację w jedną ścieżkę oraz potraktować panel operacyjny jako część tego samego produktu.', evidence: 'Interaktywna koncepcja publiczna pokazująca rezerwacje, samoobsługę i relację z operacjami zaplecza.' },
      venue: { context: 'Koncepcja operacyjnego SaaS do zarządzania rezerwacjami, relacjami z klientami, procesami zespołu i raportowaniem.', challenge: 'Zastąpić rozproszone widoki spójnym systemem dającym każdej roli informacje potrzebne do kolejnej decyzji.', approach: 'Zorganizować produkt wokół procesów zależnych od roli, wspólnego kontekstu klienta i skoncentrowanych pulpitów.', evidence: 'Renderowana koncepcja panelu pokazująca architekturę informacji, CRM, rezerwacje, procesy i raportowanie.' },
      'venue-mobile': { context: 'Mobilna koncepcja towarzysząca platformie Venue dla pracowników potrzebujących kontekstu operacyjnego poza biurkiem.', challenge: 'Przenieść pilne rezerwacje, informacje o gościach i alerty na mały ekran bez kopiowania całego produktu desktopowego.', approach: 'Nadać priorytet dzisiejszej pracy, szybkim akcjom i kontekstowi roli, łącząc produkt mobilny z szerszą platformą.', evidence: 'Koncepcyjna aplikacja React Native na Androida i udokumentowany zestaw ekranów. Pokazuje kierunek produktu mobilnego, nie wdrożone oprogramowanie klienta.' },
      relay: {
        context: 'Międzybranżowa koncepcja narzędzia wewnętrznego dla firm usługowych przyjmujących pracę przez formularze, e-mail, portale klienta i połączone systemy.',
        challenge: 'Zamieniać niespójne zgłoszenia w niezawodną pracę operacyjną bez powierzania AI niekontrolowanych decyzji i bez ukrywania wyjątków.',
        approach: 'Połączyć zgłoszenia w jednej kolejce, użyć AI do ekstrakcji i sugerowania struktury, zastosować jednoznaczne reguły biznesowe oraz wymagać akceptacji człowieka tam, gdzie jest potrzebna.',
        evidence: 'Renderowane case study procesu z przykładowymi danymi, jawnymi granicami decyzji i przepływem od zgłoszenia do zatwierdzonych aktualizacji. To koncepcja, nie wdrożony system klienta.',
        workflow: {
          title: 'Kontrolowana pętla automatyzacji',
          intro: 'Automatyzacja obsługuje powtarzalne przenoszenie i formatowanie. Ludzie kontrolują wyjątki, zobowiązania i decyzje o większym wpływie.',
          boundary: 'Granica koncepcji: przykładowe informacje są fikcyjne; sugestie AI pozostają widoczne i możliwe do weryfikacji, a istotne aktualizacje wymagają jawnej akceptacji.',
          steps: [
            { title: 'Przechwycenie', text: 'Zgłoszenia z formularzy, e-maila i usług trafiają do jednej śledzonej kolejki.' },
            { title: 'Strukturyzacja', text: 'AI wyodrębnia pola, podsumowuje kontekst i sugeruje kategorię z widocznym poziomem pewności.' },
            { title: 'Przekazanie', text: 'Jednoznaczne reguły wyznaczają właściciela, priorytet i kolejne działanie.' },
            { title: 'Weryfikacja', text: 'Człowiek zatwierdza rekomendacje o niskiej pewności lub dużym wpływie.' },
            { title: 'Synchronizacja', text: 'Zatwierdzone zmiany aktualizują CRM, zadania, powiadomienia lub raportowanie ze śladem audytowym.' },
          ],
        },
      },
    },
  },
  ru: {
    common: { backHome: 'Вернуться к Plex', discuss: 'Обсудить проект', viewWork: 'Смотреть избранные работы', viewCase: 'Читать кейс', openPreview: 'Открыть интерактивное превью', projectStatus: 'Статус проекта', interactiveConcept: 'Интерактивный концепт', context: 'Контекст', challenge: 'Продуктовая задача', approach: 'Подход', evidence: 'Что демонстрирует проект', capabilities: 'Связанные компетенции', nextProject: 'Следующий проект' },
    proof: { items: [{ title: 'Одна ответственная студия', text: 'Стратегия, дизайн и разработка связаны от исследования до передачи.' }, { title: 'Вокруг бизнеса', text: 'Продукт и архитектура следуют реальному процессу, а не фиксированному шаблону.' }, { title: 'Принадлежит клиенту', text: 'Согласованный код, данные и доступ к развёртыванию остаются под вашим контролем.' }] },
    problems: { eyebrow: 'Бизнес-результаты', title: 'Задачи, которые стоит', highlight: 'решать', intro: 'Plex связывает клиентский опыт с операционным ПО, которое стоит за ним.', items: [{ title: 'Объяснять и конвертировать', text: 'Превратить сложное предложение в понятный сайт или путь лендинга.' }, { title: 'Продавать и бронировать', text: 'Связать товары, платежи, доступность и коммуникацию с клиентом.' }, { title: 'Работать без лишнего трения', text: 'Заменить таблицы и разрозненные инструменты сфокусированными процессами.' }, { title: 'Развивать продукт', text: 'Добавить мобильный доступ, интеграции, автоматизацию или практичный AI там, где это создаёт ценность.' }] },
    hospitalityTeaser: { eyebrow: 'Ключевая экспертиза', title: 'Глубокие корни в', highlight: 'гостеприимстве', text: 'Наши концепты для гостеприимства показывают конверсию, бронирование, самообслуживание, операции и мобильные сценарии команды. Эта экспертиза — преимущество, а не ограничение.', cta: 'Изучить экспертизу в гостеприимстве' },
    faq: { eyebrow: 'Вопросы', title: 'Перед тем как', highlight: 'начать', intro: 'Прямые ответы о масштабе, процессе и владении.', items: [{ question: 'Что создаёт Plex?', answer: 'Индивидуальные сайты, лендинги, e-commerce, системы бронирования, SaaS и веб-приложения, внутренние инструменты, мобильные продукты, интеграции и практичную автоматизацию.' }, { question: 'Plex работает только с гостеприимством?', answer: 'Нет. Гостеприимство — наша наиболее наглядно представленная область, но мы начинаем с бизнес-задачи и применяем те же продуктовые паттерны в разных отраслях.' }, { question: 'Вы занимаетесь дизайном и разработкой?', answer: 'Да. Plex может провести проект от исследования и продуктового направления через дизайн интерфейса, разработку, запуск и передачу.' }, { question: 'Можно улучшить существующий продукт?', answer: 'Да. Мы можем провести аудит сайта или приложения, определить наиболее ценные изменения и улучшить продукт без обязательной полной перестройки.' }, { question: 'Кому принадлежит готовый продукт?', answer: 'Согласованный исходный код, данные, аккаунты и доступ к развёртыванию остаются под контролем клиента. Сторонние расходы обозначаются до начала работ.' }, { question: 'Как начать?', answer: 'Отправьте краткое описание или назначьте вводный звонок. До предложения мы уточним задачу, полезный объём, сроки и правильный следующий шаг.' }] },
    pages: {
      services: { eyebrow: 'Услуги', title: 'Цифровые продукты с', highlight: 'бизнес-целью', intro: 'От сфокусированного сайта до связанного ПО — Plex объединяет продуктовое мышление, дизайн интерфейса и разработку в одном процессе.', deliveryTitle: 'Один процесс, подходящий масштаб', deliveryText: 'Не каждому бизнесу нужна большая платформа. Мы определяем минимальный полезный релиз, выбираем развиваемую архитектуру и делаем передачу понятной.' },
      work: { eyebrow: 'Избранные работы', title: 'Продуктовое мышление', highlight: 'на практике', intro: 'Интерактивные концепты показывают подход Plex к клиентским путям, бронированию, операционным инструментам и мобильным сценариям. Каждый проект честно обозначен.' },
      hospitality: { eyebrow: 'Экспертиза в гостеприимстве', title: 'Цифровые продукты для', highlight: 'сервисного бизнеса', intro: 'Гостеприимство лучше всего демонстрирует нашу отраслевую экспертизу: клиентские пути с высоким намерением, связанные со сложными реальными операциями.', expertiseTitle: 'Где опыт наиболее глубокий', expertiseText: 'Заведениям нужны поиск, доступность, бронирование, платежи, коммуникация с гостями, координация команды и отчётность как одна система.', transferableTitle: 'Экспертиза, которая переносится', transferableText: 'Те же паттерны применимы к записям, членствам, маркетплейсам, выездным командам и другим бизнесам, где действие клиента запускает операционный процесс.' },
      about: { eyebrow: 'Студия', title: 'Небольшая осознанно,', highlight: 'серьёзная в реализации', intro: 'Plex — независимая студия цифровых продуктов из Таллинна, работающая международно. Мы связываем бизнес-контекст, продуктовые решения и реализацию без агентской цепочки передач.', responsibilityTitle: 'Понятная ответственность', responsibilityText: 'Человек, определяющий направление, остаётся рядом с реализацией. Если нужны специалисты, их роль должна быть ясной, а не скрытой за агентским фасадом.', founderLabel: 'Основатель', transparency: 'Проверенные отзывы и результаты будут добавлены только на основе реальных материалов.' },
      contact: { company: 'Компания', projectType: 'Тип проекта', timeline: 'Желаемые сроки', budget: 'Примерный бюджет', optional: 'Необязательно' },
    },
    cases: {
      aster: {
        context: 'Вымышленный e-commerce-концепт премиальных товаров для рабочего пространства, демонстрирующий выбор, покупку, коммуникацию и операционную передачу заказа.',
        challenge: 'Сделать продуманный ассортимент удобным для выбора и покупки, связав клиентский путь с правилами доставки, запасов и выполнения.',
        approach: 'Объединить фильтры каталога, выбор товара, устойчивую корзину, доставку и проверку заказа в один понятный сценарий.',
        evidence: 'Рабочий браузерный концепт с демонстрационными товарами, количеством, доставкой и симуляцией подтверждения. Платёж, аккаунт, персональные данные и реальный заказ не создаются.',
        workflow: { title: 'Единый путь от выбора до выполнения', intro: 'Клиентский опыт остаётся простым, потому что товар, доставка и операции рассматриваются как одна система.', boundary: 'Все товары, остатки, цены и данные вымышлены. Checkout работает локально; платёж и передача данных не выполняются.', steps: [{ title: 'Выбор', text: 'Фильтруйте каталог и сравнивайте информацию для уверенного решения.' }, { title: 'Настройка', text: 'Выберите вариант с понятной ценой и доступностью.' }, { title: 'Проверка', text: 'Измените количество и проверьте сумму перед оформлением.' }, { title: 'Доставка', text: 'Выберите демонстрационный способ с понятным сроком и стоимостью.' }, { title: 'Выполнение', text: 'Преобразуйте подтверждение в складские, коммуникационные и операционные события.' }] },
      },
      velvet: { context: 'Концепт премиального сайта для гостеприимства, объединяющий атмосферу, редакционный контент и прямой путь бронирования.', challenge: 'Передать характер заведения, не скрывая важную информацию и не усложняя бронирование.', approach: 'Использовать выразительное визуальное направление для знакомства, а в точках решения — ясную иерархию и повторяющиеся действия бронирования.', evidence: 'Отрисованный многостраничный маркетинговый концепт с адаптивной подачей, редакционными паттернами и демонстрационным опытом бронирования.' },
      nightfall: { context: 'Концепт бронирования и самообслуживания клиента, связанный с паттернами операционной административной панели.', challenge: 'Сохранить простой премиальный опыт, показывая доступность и собирая полезную для команды информацию.', approach: 'Связать знакомство, доступность и бронирование в единый путь, рассматривая операционный интерфейс как часть того же продукта.', evidence: 'Интерактивный публичный концепт, демонстрирующий бронирование, самообслуживание и связь с операциями бэк-офиса.' },
      venue: { context: 'Концепт операционного SaaS для управления бронированиями, отношениями с клиентами, процессами команды и отчётностью.', challenge: 'Заменить разрозненные операционные представления связной системой, которая даёт каждой роли информацию для следующего решения.', approach: 'Организовать продукт вокруг ролевых процессов, общего контекста клиента и сфокусированных панелей.', evidence: 'Отрисованный концепт панели, демонстрирующий информационную архитектуру, CRM, бронирование, процессы и отчётность.' },
      'venue-mobile': { context: 'Мобильный концепт-компаньон платформы Venue для сотрудников, которым нужен операционный контекст вдали от рабочего стола.', challenge: 'Перенести срочные бронирования, данные гостей и уведомления на маленький экран без копирования всего десктопного продукта.', approach: 'Отдать приоритет сегодняшней работе, быстрым действиям и ролевому контексту, связав мобильный продукт с общей платформой.', evidence: 'Концептуальная сборка React Native для Android и документированный набор экранов. Она показывает направление мобильного продукта, а не внедрённое клиентское ПО.' },
      relay: {
        context: 'Межотраслевой концепт внутреннего инструмента для сервисных компаний, получающих работу через формы, e-mail, клиентские порталы и связанные системы.',
        challenge: 'Превращать разнородные запросы в надёжную операционную работу, не поручая AI неконтролируемые бизнес-решения и не скрывая исключения от команды.',
        approach: 'Создать единую очередь, использовать AI для извлечения данных и предложения структуры, применять детерминированные правила и требовать подтверждение человека там, где это необходимо.',
        evidence: 'Рендер-кейс рабочего процесса с тестовыми данными, явными границами решений и потоком от запроса до подтверждённых обновлений. Это концепт, а не внедрённая клиентская система.',
        workflow: {
          title: 'Контролируемый цикл автоматизации',
          intro: 'Автоматизация выполняет повторяющееся перемещение и форматирование. Исключения, обязательства и значимые решения остаются под контролем людей.',
          boundary: 'Граница концепта: тестовая информация вымышлена; рекомендации AI остаются видимыми и проверяемыми, а значимые обновления требуют явного подтверждения.',
          steps: [
            { title: 'Сбор', text: 'Запросы из форм, e-mail и подключённых сервисов попадают в единую отслеживаемую очередь.' },
            { title: 'Структура', text: 'AI извлекает поля, резюмирует контекст и предлагает категорию с видимым уровнем уверенности.' },
            { title: 'Маршрутизация', text: 'Однозначные правила назначают ответственного, приоритет и следующее действие.' },
            { title: 'Проверка', text: 'Человек подтверждает рекомендации с низкой уверенностью или высоким влиянием.' },
            { title: 'Синхронизация', text: 'Подтверждённые изменения обновляют CRM, задачи, уведомления или отчётность с журналом действий.' },
          ],
        },
      },
    },
  },
};
