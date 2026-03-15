export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  photo: string;
  specializations: string[];
  experience: string[];
  education: string[];
  personal?: string;
  isCollaborator?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "michal-slawik",
    name: "dr Michał Slawik",
    role: "Psycholog, terapeuta, trener, konsultant",
    phone: "601 22 94 54",
    email: "michal.slawik@gmail.com",
    photo: "/images/team/michal-slawik.jpg",
    specializations: [
      "Poradnictwo w kryzysie",
      "Pomoc psychologiczna",
      "Poradnictwo chrześcijańskie",
      "Konsultacje małżeńskie i rodzinne",
      "Interwencja psychologiczna",
      "Wsparcie w rozwoju",
      "Psychoterapia krótkoterminowa (CBT, DBT, systemowa)",
      "Terapia uzależnień od pornografii",
    ],
    experience: [
      "Psychologia kliniczna (CM UJ) — depresja, schizofrenia, terapia rodzin, dzieci i młodzieży, zaburzenia pamięci",
      "Psychologia sądowa — profile sprawców, opinie sądowe, szkolenia",
      "Psychologia rozwojowa — techniki uczenia się",
      "Trener i coach biznesowy (Pathways Polska)",
      "Prywatna poradnia psychologiczna (również na Tajwanie)",
      "Pracownik naukowy UJ",
      "Dyrektor Misji Pokoleń",
    ],
    education: [
      "Magister psychologii (Uniwersytet Jagielloński)",
      "Doktor nauk chemicznych (Uniwersytet Jagielloński)",
      "Kurs Counselling Programme (UJ/CPCP)",
    ],
    personal:
      "Czworo dzieci, zainteresowania: psychologia ewolucyjna, muzyka, literatura, szachy, sporty ekstremalne, relacje.",
  },
  {
    slug: "justyna-pieta",
    name: "Justyna Pięta",
    role: "Psycholog, psychoterapeutka dorosłych i młodzieży, trener",
    phone: "601 961 793",
    email: "justyna.pieta@wp.pl",
    photo: "/images/team/justyna-pieta.jpg",
    specializations: [
      "Diagnoza psychologiczna",
      "Psychoterapia grupowa i indywidualna (psychozy, odwyk, nerwice)",
      "Diagnoza i terapia dzieci oraz rodzin",
      "Szkolenia z komunikacji",
      "Depresja",
      "Zaburzenia osobowości, lękowe i nerwicowe",
      "Sytuacje kryzysowe (rozstanie, żałoba)",
      "Trudności w relacjach",
      "Poradnictwo rodzinne",
      "DDA (Dorosłe Dzieci Alkoholików)",
    ],
    experience: [
      "Podejście systemowe, psychodynamiczne i CBT",
      "Możliwość pracy z Biblią",
      "Praca pod superwizją",
    ],
    education: [
      "Magister psychologii (Uniwersytet Jagielloński)",
      "4-letnie szkolenie systemowe (OSS Kraków)",
      "2-letnie szkolenie Gestalt",
      "Psychoterapia dzieci i młodzieży (CBT)",
      "Certyfikowany Trener Umiejętności Społecznych",
      "Tutor, Trener Zarządzania",
    ],
  },
  {
    slug: "agnieszka-madej",
    name: "Agnieszka Madej",
    role: "Coach, trener rozwoju osobistego, konsultant kryzysowy, chrześcijański doradca",
    phone: "692 214 299",
    email: "pracownia.orle.skrzydla@gmail.com",
    photo: "/images/team/agnieszka-madej.jpg",
    specializations: [
      "Wsparcie psychiczne w kryzysie (egzystencjalnym, rozwojowym, sytuacyjnym, utraty, związku, duchowym)",
      "Pomoc krótkoterminowa i doraźna",
      "Holistyczne spojrzenie na człowieka (duch, dusza, ciało)",
    ],
    experience: [
      "Procesy coachingowe",
      "Warsztaty rozwoju osobistego i duchowego",
      "Reintegracja społeczna (CIS)",
      "Rozwój zawodowy",
      "Grupy wsparcia dla kobiet",
      "Grupy biblijne \u201ETeofundamenty\u201D",
      "Grupy terapeutyczne \u201ESiloam\u201D",
    ],
    education: [
      "Erickson College (ICF)",
      "Centrum Counsellingu Gestalt",
      "Instytut Pozytywnej Terapii Kryzysu",
      "Magister filologii (Uniwersytet Jagielloński)",
    ],
  },
  {
    slug: "artur-moskala",
    name: "Artur Moskała",
    role: "Coach, mentor",
    phone: "601 22 94 54",
    email: "coachingwkrakowie@gmail.com",
    photo: "/images/team/artur-moskala.jpg",
    specializations: [
      "Coaching i Mentoring (CoachWise Coaching Essentials Program™)",
      "Odkrywanie i kształtowanie talentów",
      "Poszerzanie świadomości",
      "Przywództwo",
    ],
    experience: [
      "Prezes Zarządu Fundacji \u201EUcze\u0144\u201D (prowadzącej 3 szkoły i Poradnię \u201EDroga\u201D)",
      "Marketing (Coca-Cola, OknoPlus)",
      "Własna działalność gospodarcza",
    ],
    education: ["CoachWise Coaching Essentials Program™"],
    personal:
      "Mąż i tata, organizator projektu \u201EMęski Weekend\u201D, Warsztaty Gospel w Skawinie, grafik i projektant.",
  },
  {
    slug: "magdalena-kostrz-jaje",
    name: "Magdalena Kostrz-Jaje",
    role: "Pedagog, psychoterapeuta w trakcie szkolenia",
    phone: "+48 503 690 025",
    email: "magdalena.jaje@gmail.com",
    photo: "/images/team/magdalena-kostrz-jaje.jpg",
    specializations: [
      "Poradnictwo rodzinne",
      "Interwencja kryzysowa",
      "Wsparcie emocjonalne",
      "Trudności interpersonalne",
      "Praca z rodzinami adolescentów i dzieci z autyzmem/Aspergerem",
      "Mediacje i tutoring",
    ],
    experience: [
      "Szkoły podstawowe i ponadpodstawowe",
      "Stowarzyszenie U Siemachy",
      "Poradnia Psychologiczno-Pedagogiczna nr 4 w Krakowie",
    ],
    education: [
      "Magister pedagogiki resocjalizacyjnej",
      "Certyfikowany mediator i tutor",
      "W trakcie szkolenia systemowego (OSS)",
      "Studia podyplomowe z autyzmu i zespołu Aspergera",
    ],
  },
  {
    slug: "angelika-dyba",
    name: "Angelika Dyba",
    role: "Psycholog, terapeuta, dogoterapeuta",
    phone: "601 22 94 54",
    email: "dyba.angelika@gmail.com",
    photo: "/images/team/angelika-dyba.jpg",
    isCollaborator: true,
    specializations: [
      "Dogoterapia (z psem Gają)",
      "Terapia pedagogiczna",
      "Terapia psychologiczna",
    ],
    experience: [
      "Dogoterapia: oswajanie z psem, leczenie kynofobii, poznanie potrzeb psa, nauka sygnałów, odstresowanie",
      "Oferta pedagogiczna: funkcje percepcyjno-motoryczne, motoryka, pamięć i koncentracja, nauka pisania i czytania, motywacja do nauki",
      "Oferta psychologiczna: praca z lękiem, kompetencje społeczne, poczucie własnej wartości, mindfulness, samoregulacja emocji",
      "Współpraca z żłobkami, przedszkolami i szkołami",
    ],
    education: ["Psychologia", "Certyfikowany dogoterapeuta"],
  },
];

export const coreTeam = teamMembers.filter((m) => !m.isCollaborator);
export const collaborators = teamMembers.filter((m) => m.isCollaborator);
