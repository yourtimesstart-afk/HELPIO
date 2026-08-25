import type { Lang } from "../i18n/translations";

export type HelplineCat =
  | "emergency" | "crisis" | "domestic" | "children" | "addiction" | "health" | "general"
  | "mental" | "women" | "child" | "cyber" | "railway" | "disaster" | "police" | "ambulance" | "fire";

export interface CountryHelpline {
  id: string;
  cat: HelplineCat;
  name: string;
  org?: string;
  description: string;
  phone?: string;
  text?: string;
  email?: string;
  website?: string;
  hours: string;
  isFree?: boolean;
  isUrgent?: boolean;
  languages?: string[];
}

export interface CountryEmergency {
  label: string;
  number: string;
  href: string;
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  lang: Lang;
  emergency: CountryEmergency[];
  helplines: CountryHelpline[];
  note?: string;
}

export const COUNTRIES: Country[] = [
  // ============ UNITED STATES (full directory) ============
  {
    id: "us",
    name: "United States",
    flag: "🇺🇸",
    lang: "en",
    emergency: [
      { label: "Police / Fire / Medical", number: "911", href: "tel:911" },
      { label: "Poison Control", number: "1-800-222-1222", href: "tel:18002221222" },
    ],
    helplines: [
      { id: "us-988", cat: "crisis", name: "988 Suicide & Crisis Lifeline", org: "SAMHSA", description: "Free, confidential 24/7 crisis support — call or text 988 for yourself or a loved one.", phone: "988", text: "Text 988", website: "https://988lifeline.org", hours: "24/7", isFree: true, isUrgent: true, languages: ["English", "Spanish", "240+ languages"] },
      { id: "us-dv", cat: "domestic", name: "National Domestic Violence Hotline", org: "The Hotline", description: "Crisis intervention, safety planning and shelter referrals for survivors of abuse.", phone: "1-800-799-7233", text: "Text START to 88788", website: "https://www.thehotline.org", hours: "24/7", isFree: true, isUrgent: true, languages: ["English", "Spanish", "200+ languages"] },
      { id: "us-rainn", cat: "domestic", name: "RAINN National Sexual Assault Hotline", org: "RAINN", description: "Confidential crisis support and healing resources for survivors of sexual assault.", phone: "1-800-656-4673", website: "https://www.rainn.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-samhsa", cat: "addiction", name: "SAMHSA National Helpline", org: "SAMHSA", description: "Free, confidential treatment referral for mental and substance use disorders.", phone: "1-800-662-4357", text: "Text 435748", email: "samhsainfo@samhsa.hhs.gov", website: "https://www.samhsa.gov", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-vet", cat: "crisis", name: "Veterans Crisis Line", org: "VA", description: "Free, confidential 24/7 crisis support for veterans and service members.", phone: "1-800-273-8255", text: "Text 838255", website: "https://www.veteranscrisisline.net", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-trevor", cat: "crisis", name: "The Trevor Project", org: "Trevor Project", description: "24/7 crisis intervention and suicide prevention for LGBTQ+ young people under 25.", phone: "1-866-488-7386", text: "Text START to 678678", website: "https://www.thetrevorproject.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-nhtrc", cat: "general", name: "National Human Trafficking Hotline", org: "Polaris", description: "Report trafficking and connect with services for victims of exploitation.", phone: "1-888-373-7888", text: "Text 233733", email: "nhtrc@polarisproject.org", website: "https://humantraffickinghotline.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-runaway", cat: "children", name: "National Runaway Safeline", org: "Runaway Safeline", description: "Free, confidential crisis support for runaway and homeless youth and their families.", phone: "1-800-786-2929", text: "Text 66008", website: "https://www.1800runaway.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-ic3", cat: "cyber", name: "FBI Internet Crime Complaint Center (IC3)", org: "FBI", description: "Report cybercrime — online scams, ransomware, phishing, business email compromise and cyber-enabled fraud.", website: "https://www.ic3.gov", hours: "24/7 (online)", isFree: true },
      { id: "us-fbi-tips", cat: "cyber", name: "FBI Tips Line", org: "FBI", description: "Report federal crimes, cyber threats, terrorism and suspicious activity to the FBI.", phone: "1-800-225-5324", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-amtrak", cat: "railway", name: "Amtrak Police Department", org: "Amtrak", description: "Report safety hazards, trespassing, suspicious activity or emergencies on Amtrak trains and stations.", phone: "1-800-331-0008", website: "https://www.amtrakpolice.com", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-fema", cat: "disaster", name: "FEMA Disaster Assistance", org: "FEMA", description: "Apply for disaster assistance and get help after hurricanes, floods, wildfires, earthquakes and other disasters.", phone: "1-800-621-3362", website: "https://www.fema.gov", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-ncmec", cat: "child", name: "Missing & Exploited Children", org: "NCMEC", description: "Report missing children, sighting tips and child sexual exploitation — 24/7.", phone: "1-800-843-5678", text: "Text 1-800-843-5678", website: "https://www.missingkids.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "us-women", cat: "women", name: "National Women's Health Helpline", org: "HHS Office on Women's Health", description: "Free health information and support for women — pregnancy, breastfeeding and wellness.", phone: "1-800-994-9662", website: "https://www.womenshealth.gov", hours: "Mon–Fri 9am–6pm ET", isFree: true },
    ],
  },

  // ============ EUROPE ============
  {
    id: "gb",
    name: "United Kingdom",
    flag: "🇬🇧",
    lang: "en",
    emergency: [
      { label: "Police / Ambulance / Fire", number: "999", href: "tel:999" },
      { label: "NHS Non-Emergency", number: "111", href: "tel:111" },
    ],
    helplines: [
      { id: "gb-samaritans", cat: "crisis", name: "Samaritans", org: "Samaritans", description: "Free, confidential emotional support for anyone in distress, 24/7.", phone: "116 123", email: "jo@samaritans.org", website: "https://www.samaritans.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-childline", cat: "children", name: "Childline", org: "NSPCC", description: "Private and confidential support for children and young people under 19.", phone: "0800 1111", website: "https://www.childline.org.uk", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-ndah", cat: "domestic", name: "National Domestic Abuse Helpline", org: "Refuge", description: "Free, confidential support and safety planning for victims of domestic abuse.", phone: "0808 2000 247", website: "https://www.nationaldahelpline.org.uk", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-drinkline", cat: "addiction", name: "Drinkline", org: "NHS", description: "Confidential advice and support for anyone worried about their own or someone else's drinking.", phone: "0300 123 1110", hours: "Mon–Fri 9am–8pm, weekends 11am–4pm", isFree: true },
      { id: "gb-shout", cat: "crisis", name: "Shout 85258", org: "Mental Health Innovations", description: "Free, confidential 24/7 text support for anyone in crisis.", text: "Text SHOUT to 85258", website: "https://giveusashout.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-hopeline", cat: "crisis", name: "Papyrus HOPELINE247", org: "Papyrus", description: "Confidential support for young people under 35 who are having thoughts of suicide.", phone: "0800 068 4141", text: "Text 07860 039967", email: "pat@papyrus-uk.org", website: "https://www.papyrus-uk.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-btp", cat: "railway", name: "British Transport Police", org: "BTP", description: "Report crime, safety concerns or suspicious activity on trains and at stations — call or text 61016.", phone: "0800 40 50 40", text: "Text 61016", website: "https://www.btp.police.uk", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-actionfraud", cat: "cyber", name: "Action Fraud", org: "City of London Police", description: "Report fraud, scams and cybercrime — the UK's national reporting centre.", phone: "0300 123 2040", website: "https://www.actionfraud.police.uk", hours: "24/7", isFree: true },
      { id: "gb-floodline", cat: "disaster", name: "Floodline", org: "Environment Agency", description: "24/7 flood warning and advice service for England, Wales and Scotland.", phone: "0345 988 1188", website: "https://www.gov.uk/check-flood-risk", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gb-mind", cat: "mental", name: "Mind Infoline", org: "Mind", description: "Information and advice on mental health problems, treatments and where to get help.", phone: "0300 123 3393", email: "info@mind.org.uk", website: "https://www.mind.org.uk", hours: "Mon–Fri 9am–6pm", isFree: true },
    ],
  },
  {
    id: "de",
    name: "Germany",
    flag: "🇩🇪",
    lang: "de",
    emergency: [
      { label: "Fire / Ambulance", number: "112", href: "tel:112" },
      { label: "Police", number: "110", href: "tel:110" },
    ],
    helplines: [
      { id: "de-telefonseelsorge", cat: "crisis", name: "TelefonSeelsorge", description: "Free, anonymous 24/7 crisis counseling by phone and online chat.", phone: "0800 111 0 111", website: "https://www.telefonseelsorge.de", hours: "24/7", isFree: true, isUrgent: true },
      { id: "de-nummer-gegen-kummer", cat: "children", name: "Nummer gegen Kummer", description: "Support line for children and teens — free and anonymous.", phone: "116 111", website: "https://www.nummergegenkummer.de", hours: "Mon–Sat 14:00–20:00", isFree: true },
      { id: "de-hilfetelefon", cat: "domestic", name: "Hilfetelefon Gewalt gegen Frauen", description: "Free, anonymous 24/7 support for women affected by violence.", phone: "08000 116 016", website: "https://www.hilfetelefon.de", hours: "24/7", isFree: true, isUrgent: true },
      { id: "de-giftnotruf", cat: "health", name: "Giftnotruf Berlin", description: "Poison control emergency advice, 24/7.", phone: "030 19240", hours: "24/7", isFree: true, isUrgent: true },
      { id: "de-bzga", cat: "addiction", name: "BZgA Suchtberatung", description: "Confidential telephone counseling on addiction and substance use.", phone: "01806 313031", website: "https://www.bzga.de", hours: "Mon–Thu 10:00–22:00, Fri–Sun 10:00–18:00", isFree: true },
      { id: "de-db", cat: "railway", name: "DB Sicherheit Notruf", org: "Deutsche Bahn", description: "Railway safety emergencies — report hazards, accidents or suspicious activity on trains and at stations.", phone: "0800 141 41 41", hours: "24/7", isFree: true, isUrgent: true },
      { id: "de-cyber", cat: "cyber", name: "Polizei Cybercrime Hotline", org: "Polizei", description: "Report online fraud, phishing, ransomware and cybercrime to the German police.", phone: "110", website: "https://www.polizei-beratung.de", hours: "24/7", isFree: true, isUrgent: true },
      { id: "de-bbk", cat: "disaster", name: "BBK Warnung & Notfall", org: "Bundesamt für Bevölkerungsschutz", description: "Disaster warnings and civil protection information from the Federal Office of Civil Protection.", phone: "0800 666 7890", website: "https://www.bbk.bund.de", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "fr",
    name: "France",
    flag: "🇫🇷",
    lang: "fr",
    emergency: [
      { label: "Police / Ambulance / Fire", number: "112", href: "tel:112" },
      { label: "SAMU (Medical)", number: "15", href: "tel:15" },
    ],
    helplines: [
      { id: "fr-3114", cat: "crisis", name: "3114 — Prévention du Suicide", description: "Free, confidential 24/7 suicide prevention line staffed by trained professionals.", phone: "3114", website: "https://3114.fr", hours: "24/7", isFree: true, isUrgent: true },
      { id: "fr-sos-amitie", cat: "crisis", name: "SOS Amitié", description: "Listening and emotional support by volunteers, 24/7, free and anonymous.", phone: "09 72 39 40 50", website: "https://www.sos-amitie.org", hours: "24/7", isFree: true },
      { id: "fr-3919", cat: "domestic", name: "3919 Violences Femmes Info", description: "Free, anonymous support and guidance for women victims of violence.", phone: "3919", website: "https://arretonslesviolences.gouv.fr", hours: "24/7", isFree: true, isUrgent: true },
      { id: "fr-119", cat: "children", name: "Allô Enfance en Danger 119", description: "National hotline for reporting endangered children — free and confidential.", phone: "119", website: "https://www.allo119.gouv.fr", hours: "24/7", isFree: true, isUrgent: true },
      { id: "fr-filsante", cat: "health", name: "Fil Santé Jeunes", description: "Health and well-being support line for young people aged 12–25.", phone: "0 800 235 236", website: "https://www.filsantejeunes.com", hours: "Daily 9:00–23:00", isFree: true },
      { id: "fr-cyber", cat: "cyber", name: "Cybermalveillance", org: "Cybermalveillance.gouv.fr", description: "Free help for victims of online scams, hacking, phishing and cybercrime.", phone: "0 805 805 817", website: "https://www.cybermalveillance.gouv.fr", hours: "24/7", isFree: true },
      { id: "fr-sncf", cat: "railway", name: "SNCF Sécurité", org: "SNCF", description: "Report safety concerns, suspicious activity or emergencies on trains and at stations.", phone: "3117", website: "https://www.sncf.com", hours: "24/7", isFree: true, isUrgent: true },
      { id: "fr-116006", cat: "disaster", name: "Numéro vert Secours", org: "Gouvernement", description: "Government emergency information line during major disasters and crises.", phone: "0800 130 000", hours: "24/7 (during crises)", isFree: true, isUrgent: true },
      { id: "fr-solidarite-femmes", cat: "women", name: "Solidarité Femmes", org: "FNSF", description: "National federation supporting women victims of violence — counseling and shelter referral.", phone: "3919", website: "https://www.solidaritefemmes.org", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "nl",
    name: "Netherlands",
    flag: "🇳🇱",
    lang: "nl",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police (Non-Emergency)", number: "0900-8844", href: "tel:09008844" },
    ],
    helplines: [
      { id: "nl-113", cat: "crisis", name: "113 Zelfmoordpreventie", description: "Free, confidential suicide prevention support by phone and online chat.", phone: "0800-0113", website: "https://www.113.nl", hours: "24/7", isFree: true, isUrgent: true },
      { id: "nl-luisterlijn", cat: "crisis", name: "De Luisterlijn", description: "Anonymous listening ear for anyone who needs to talk, 24/7.", phone: "088-0767 000", website: "https://www.deluisterlijn.nl", hours: "24/7", isFree: true },
      { id: "nl-veiligthuis", cat: "domestic", name: "Veilig Thuis", description: "Free, confidential advice on domestic violence and child abuse.", phone: "0800-2000", website: "https://www.veiligthuis.nl", hours: "24/7", isFree: true, isUrgent: true },
      { id: "nl-kindertelefoon", cat: "children", name: "Kindertelefoon", description: "Support line for children and young people — free and anonymous.", phone: "0800-0432", website: "https://www.kindertelefoon.nl", hours: "Daily 11:00–21:00", isFree: true },
    ],
  },
  {
    id: "be",
    name: "Belgium",
    flag: "🇧🇪",
    lang: "nl",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "101", href: "tel:101" },
    ],
    helplines: [
      { id: "be-1813", cat: "crisis", name: "Zelfmoordlijn 1813", description: "Free, confidential suicide prevention line (Flanders).", phone: "1813", website: "https://www.zelfmoord1813.be", hours: "24/7", isFree: true, isUrgent: true },
      { id: "be-teleonthaal", cat: "crisis", name: "Tele-Onthaal", description: "Anonymous listening and emotional support in Dutch, 24/7.", phone: "106", website: "https://www.tele-onthaal.be", hours: "24/7", isFree: true },
      { id: "be-awel", cat: "children", name: "Awel", description: "Free, anonymous support line for children and young people.", phone: "102", website: "https://www.awel.be", hours: "Daily 16:00–22:00", isFree: true },
      { id: "be-1712", cat: "domestic", name: "1712", description: "Support and advice on violence, abuse and child maltreatment.", phone: "1712", website: "https://www.1712.be", hours: "Mon–Fri 9:00–17:00", isFree: true },
    ],
  },
  {
    id: "ch",
    name: "Switzerland",
    flag: "🇨🇭",
    lang: "de",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "117", href: "tel:117" },
      { label: "Medical", number: "144", href: "tel:144" },
    ],
    helplines: [
      { id: "ch-143", cat: "crisis", name: "Die Dargebotene Hand 143", description: "Free, anonymous 24/7 crisis and suicide prevention support.", phone: "143", website: "https://www.143.ch", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ch-147", cat: "children", name: "Pro Juventute 147", description: "Support and advice for children and young people, 24/7.", phone: "147", website: "https://www.147.ch", hours: "24/7", isFree: true },
      { id: "ch-145", cat: "health", name: "Tox Info Suisse 145", description: "Swiss poison control — 24/7 expert advice.", phone: "145", website: "https://www.toxinfo.ch", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "at",
    name: "Austria",
    flag: "🇦🇹",
    lang: "de",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "133", href: "tel:133" },
      { label: "Medical", number: "144", href: "tel:144" },
    ],
    helplines: [
      { id: "at-142", cat: "crisis", name: "Telefonseelsorge 142", description: "Free, anonymous crisis support around the clock.", phone: "142", website: "https://www.telefonseelsorge.at", hours: "24/7", isFree: true, isUrgent: true },
      { id: "at-147", cat: "children", name: "Rat auf Draht 147", description: "Emergency and support line for children and young people, 24/7.", phone: "147", website: "https://www.rataufdraht.at", hours: "24/7", isFree: true },
      { id: "at-frauenhelpline", cat: "domestic", name: "Frauenhelpline gegen Gewalt", description: "Free, anonymous 24/7 support for women affected by violence.", phone: "0800 222 555", website: "https://www.frauenhelpline.at", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "es",
    name: "Spain",
    flag: "🇪🇸",
    lang: "es",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Medical", number: "061", href: "tel:061" },
    ],
    helplines: [
      { id: "es-024", cat: "crisis", name: "024 — Línea de Prevención del Suicidio", description: "Free, confidential 24/7 suicide prevention line.", phone: "024", website: "https://www.sanidad.gob.es", hours: "24/7", isFree: true, isUrgent: true },
      { id: "es-016", cat: "domestic", name: "016 — Violencia de Género", description: "Free, confidential 24/7 support for victims of gender-based violence.", phone: "016", website: "https://violenciagenero.igualdad.gob.es", hours: "24/7", isFree: true, isUrgent: true },
      { id: "es-anar", cat: "children", name: "ANAR — Línea Infancia", description: "Free, confidential support for children and teens in danger.", phone: "116 111", website: "https://www.anar.org", hours: "24/7", isFree: true },
      { id: "es-esperanza", cat: "crisis", name: "Teléfono de la Esperanza", description: "Emotional support and suicide prevention counseling.", phone: "717 003 717", website: "https://www.telefonodelaesperanza.org", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "it",
    name: "Italy",
    flag: "🇮🇹",
    lang: "it",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "113", href: "tel:113" },
    ],
    helplines: [
      { id: "it-telefono-amico", cat: "crisis", name: "Telefono Amico", description: "Free, anonymous emotional support and crisis listening.", phone: "199 284 284", website: "https://www.telefonoamico.it", hours: "Daily 10:00–24:00", isFree: true },
      { id: "it-1522", cat: "domestic", name: "1522 — Violenza e Stalking", description: "Free, confidential national anti-violence and stalking helpline for women.", phone: "1522", website: "https://www.1522.eu", hours: "24/7", isFree: true, isUrgent: true },
      { id: "it-azzurro", cat: "children", name: "Telefono Azzurro", description: "Support for children and young people in difficulty or danger.", phone: "1.96.96", website: "https://www.azzurro.it", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "ie",
    name: "Ireland",
    flag: "🇮🇪",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Emergency (Alt)", number: "999", href: "tel:999" },
    ],
    helplines: [
      { id: "ie-samaritans", cat: "crisis", name: "Samaritans Ireland", description: "Free, confidential 24/7 emotional support.", phone: "116 123", email: "jo@samaritans.ie", website: "https://www.samaritans.ie", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ie-pieta", cat: "crisis", name: "Pieta", description: "Free therapy and support for suicide and self-harm, and those bereaved by suicide.", phone: "1800 247 247", website: "https://www.pieta.ie", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ie-50808", cat: "crisis", name: "Text 50808", description: "Free, anonymous 24/7 text support from trained volunteers.", text: "Text HELLO to 50808", website: "https://text50808.ie", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ie-womensaid", cat: "domestic", name: "Women's Aid", description: "Free, confidential support for women experiencing domestic abuse.", phone: "1800 341 900", website: "https://www.womensaid.ie", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "se",
    name: "Sweden",
    flag: "🇸🇪",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Healthcare", number: "1177", href: "tel:1177" },
    ],
    helplines: [
      { id: "se-mind", cat: "crisis", name: "Mind Självmordslinjen", description: "Free, anonymous suicide prevention line — 24/7.", phone: "90101", website: "https://mind.se", hours: "24/7", isFree: true, isUrgent: true },
      { id: "se-bris", cat: "children", name: "BRIS", description: "Support line for children and young people — free and anonymous.", phone: "116 111", website: "https://www.bris.se", hours: "Daily 14:00–21:00", isFree: true },
      { id: "se-kvinnofridslinjen", cat: "domestic", name: "Kvinnofridslinjen", description: "Free, confidential national helpline for women exposed to violence.", phone: "020-50 50 50", website: "https://kvinnofridslinjen.se", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "no",
    name: "Norway",
    flag: "🇳🇴",
    lang: "en",
    emergency: [
      { label: "Police", number: "112", href: "tel:112" },
      { label: "Medical", number: "113", href: "tel:113" },
      { label: "Fire", number: "110", href: "tel:110" },
    ],
    helplines: [
      { id: "no-kirkens-sos", cat: "crisis", name: "Kirkens SOS", description: "Free, anonymous 24/7 crisis and suicide prevention support.", phone: "116 123", website: "https://www.kirkens-sos.no", hours: "24/7", isFree: true, isUrgent: true },
      { id: "no-116111", cat: "children", name: "Alarmtelefonen 116 111", description: "24/7 emergency line for children and young people.", phone: "116 111", hours: "24/7", isFree: true },
      { id: "no-ruste", cat: "addiction", name: "Rustelefonen", description: "Confidential support on substance use and addiction.", phone: "08588", website: "https://www.rustelefonen.no", hours: "Mon–Fri 09:00–15:00", isFree: true },
    ],
  },
  {
    id: "dk",
    name: "Denmark",
    flag: "🇩🇰",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Medical Advice", number: "1813", href: "tel:1813" },
    ],
    helplines: [
      { id: "dk-livslinien", cat: "crisis", name: "Livslinien", description: "Free, anonymous suicide prevention and crisis support.", phone: "70 201 201", website: "https://www.livslinien.dk", hours: "Daily 11:00–05:00", isFree: true, isUrgent: true },
      { id: "dk-boernetelefonen", cat: "children", name: "BørneTelefonen", description: "Support line for children and young people.", phone: "116 111", website: "https://www.boerntelefonen.dk", hours: "Daily 11:00–23:00", isFree: true },
      { id: "dk-lev-uden-vold", cat: "domestic", name: "Lev Uden Vold", description: "Free, confidential support for victims of domestic violence.", phone: "1888", website: "https://www.levudenvold.dk", hours: "Mon–Fri 9:00–15:00", isFree: true },
    ],
  },
  {
    id: "fi",
    name: "Finland",
    flag: "🇫🇮",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Health Advice", number: "116 117", href: "tel:116117" },
    ],
    helplines: [
      { id: "fi-mieli", cat: "crisis", name: "MIELI Kriisipuhelin", description: "Free, confidential crisis and suicide prevention support.", phone: "09 2525 0111", website: "https://mieli.fi", hours: "24/7", isFree: true, isUrgent: true },
      { id: "fi-lasten", cat: "children", name: "Lasten ja nuorten puhelin", description: "Support line for children and young people, 24/7.", phone: "116 111", website: "https://www.nuortennetti.fi", hours: "24/7", isFree: true },
      { id: "fi-nollalinja", cat: "domestic", name: "Nollalinja", description: "Support for victims of domestic violence — free and confidential.", phone: "080 005 005", website: "https://www.nollalinja.fi", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "lu",
    name: "Luxembourg",
    flag: "🇱🇺",
    lang: "fr",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "113", href: "tel:113" },
    ],
    helplines: [
      { id: "lu-sos-detresse", cat: "crisis", name: "SOS Détresse", description: "Free, anonymous emotional support and crisis listening.", phone: "45 45 45", website: "https://www.sos-detresse.lu", hours: "Daily 11:00–23:00", isFree: true },
      { id: "lu-kanner", cat: "children", name: "Kanner-Jugendtelefon", description: "Support line for children and young people.", phone: "116 111", website: "https://www.kjt.lu", hours: "Daily 11:00–20:00", isFree: true },
    ],
  },

  // ============ AMERICAS (non-US) ============
  {
    id: "ca",
    name: "Canada",
    flag: "🇨🇦",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "911", href: "tel:911" },
      { label: "Poison Control", number: "1-844-764-7669", href: "tel:18447647669" },
    ],
    helplines: [
      { id: "ca-988", cat: "crisis", name: "988 Suicide Crisis Helpline", description: "Free, confidential 24/7 suicide prevention — call or text.", phone: "988", text: "Text 988", website: "https://988.ca", hours: "24/7", isFree: true, isUrgent: true, languages: ["English", "French"] },
      { id: "ca-talk", cat: "crisis", name: "Talk Suicide Canada", description: "Free, confidential crisis support by phone and text.", phone: "1-833-456-4566", text: "Text 45645", website: "https://talksuicide.ca", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ca-kidshelp", cat: "children", name: "Kids Help Phone", description: "24/7 counseling and support for young people.", phone: "1-800-668-6868", text: "Text CONNECT to 686868", website: "https://kidshelpphone.ca", hours: "24/7", isFree: true, isUrgent: true, languages: ["English", "French"] },
      { id: "ca-awhl", cat: "domestic", name: "Assaulted Women's Helpline", description: "24/7 crisis support and safety planning for women in Ontario.", phone: "1-866-863-0511", website: "https://www.awhl.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ca-cafc", cat: "cyber", name: "Canadian Anti-Fraud Centre", org: "RCMP", description: "Report fraud, scams, identity theft and cybercrime to Canada's national anti-fraud centre.", phone: "1-888-495-8501", website: "https://www.antifraudcentre-centreantifraude.ca", hours: "Mon–Fri 7am–8pm ET", isFree: true },
      { id: "ca-cn", cat: "railway", name: "CN Police", org: "Canadian National Railway", description: "Report railway safety hazards, trespassing, derailments or suspicious activity on CN rail property.", phone: "1-800-465-9239", website: "https://www.cn.ca/police", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ca-cp", cat: "railway", name: "CPKC Police", org: "Canadian Pacific Kansas City", description: "Report railway safety and security concerns on CPKC lines.", phone: "1-800-716-9132", website: "https://www.cpkcr.com", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ca-disaster", cat: "disaster", name: "Emergency Management (Provincial)", org: "Provincial EM agencies", description: "For disaster preparedness and assistance, contact your province's emergency management organization.", phone: "911", website: "https://www.getprepared.gc.ca", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "mx",
    name: "Mexico",
    flag: "🇲🇽",
    lang: "es",
    emergency: [
      { label: "Emergency", number: "911", href: "tel:911" },
      { label: "Anonymous Tips", number: "089", href: "tel:089" },
    ],
    helplines: [
      { id: "mx-vida", cat: "addiction", name: "Línea de la Vida", description: "Free, confidential support for mental health and addictions.", phone: "800 911 2000", website: "https://www.gob.mx/salud", hours: "24/7", isFree: true, isUrgent: true },
      { id: "mx-suicidio", cat: "crisis", name: "Línea de Prevención del Suicidio", description: "Crisis counseling for people in emotional distress.", phone: "55 5259 8121", hours: "24/7", isFree: true, isUrgent: true },
      { id: "mx-vida-mujer", cat: "domestic", name: "Línea Mujer", description: "Support and guidance for women facing violence.", phone: "800 108 4053", hours: "24/7", isFree: true, isUrgent: true },
      { id: "mx-cyber", cat: "cyber", name: "Policía Cibernética", org: "Guardia Nacional", description: "Report cybercrime, online scams, identity theft and digital fraud.", phone: "088", website: "https://www.gob.mx/guardianacional", hours: "24/7", isFree: true, isUrgent: true },
      { id: "mx-rail", cat: "railway", name: "Ferrocarril Seguridad", org: "Ferromex / Ferrosur", description: "Report railway safety hazards and emergencies on Mexican rail networks.", phone: "800 507 3742", hours: "24/7", isFree: true },
      { id: "mx-pc", cat: "disaster", name: "Protección Civil", org: "Protección Civil", description: "Disaster prevention, response and emergency management — floods, earthquakes, hurricanes.", phone: "911", website: "https://www.gob.mx/proteccioncivil", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "br",
    name: "Brazil",
    flag: "🇧🇷",
    lang: "pt",
    emergency: [
      { label: "Police", number: "190", href: "tel:190" },
      { label: "Medical", number: "192", href: "tel:192" },
      { label: "Fire", number: "193", href: "tel:193" },
    ],
    helplines: [
      { id: "br-cvv", cat: "crisis", name: "CVV — Centro de Valorização da Vida", description: "Free, confidential 24/7 emotional support and suicide prevention.", phone: "188", website: "https://www.cvv.org.br", hours: "24/7", isFree: true, isUrgent: true },
      { id: "br-180", cat: "domestic", name: "Ligue 180", description: "National hotline for women's rights and reporting violence.", phone: "180", hours: "24/7", isFree: true, isUrgent: true },
      { id: "br-181", cat: "general", name: "Disque 181", description: "Anonymous reporting line for crimes.", phone: "181", hours: "24/7", isFree: true },
      { id: "br-cyber", cat: "cyber", name: "Polícia Federal — Crimes Cibernéticos", org: "Polícia Federal", description: "Report cybercrime, online fraud and digital crimes to the Federal Police.", phone: "194", website: "https://www.gov.br/pf", hours: "24/7", isFree: true, isUrgent: true },
      { id: "br-defesa", cat: "disaster", name: "Defesa Civil 199", org: "Defesa Civil", description: "Civil defense — floods, landslides, storms and disaster emergencies.", phone: "199", hours: "24/7", isFree: true, isUrgent: true },
      { id: "br-rail", cat: "railway", name: "VLI Ferrovia Safety", org: "VLI Logística", description: "Report railway safety concerns and emergencies on Brazilian rail networks.", phone: "0800 725 0110", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "co",
    name: "Colombia",
    flag: "🇨🇴",
    lang: "es",
    emergency: [
      { label: "Emergency", number: "123", href: "tel:123" },
      { label: "Health", number: "125", href: "tel:125" },
    ],
    helplines: [
      { id: "co-106", cat: "crisis", name: "Línea 106", description: "Free, confidential mental health and suicide prevention line.", phone: "106", hours: "24/7", isFree: true, isUrgent: true },
      { id: "co-155", cat: "domestic", name: "Línea 155", description: "National helpline for women victims of violence.", phone: "155", hours: "24/7", isFree: true, isUrgent: true },
      { id: "co-141", cat: "children", name: "Línea 141", description: "National child protection hotline.", phone: "141", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "cl",
    name: "Chile",
    flag: "🇨🇱",
    lang: "es",
    emergency: [
      { label: "Police", number: "133", href: "tel:133" },
      { label: "Medical", number: "131", href: "tel:131" },
    ],
    helplines: [
      { id: "cl-salud", cat: "health", name: "Salud Responde", description: "Free health information and guidance, 24/7.", phone: "600 360 7777", hours: "24/7", isFree: true },
      { id: "cl-4141", cat: "crisis", name: "Línea 4141", description: "Mental health support and suicide prevention line.", phone: "4141", hours: "24/7", isFree: true, isUrgent: true },
      { id: "cl-drogas", cat: "addiction", name: "Fono Drogas", description: "Confidential support for substance use issues.", phone: "1412", website: "https://www.senda.gob.cl", hours: "Daily 09:00–24:00", isFree: true },
    ],
  },

  // ============ ASIA-PACIFIC ============
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    lang: "en",
    emergency: [
      { label: "Police / Fire / Medical", number: "000", href: "tel:000" },
      { label: "Mobile Emergency", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "au-lifeline", cat: "crisis", name: "Lifeline", description: "Free, confidential 24/7 crisis support and suicide prevention.", phone: "13 11 14", website: "https://www.lifeline.org.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-kids", cat: "children", name: "Kids Helpline", description: "Free, private counseling for young people aged 5–25.", phone: "1800 55 1800", website: "https://kidshelpline.com.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-respect", cat: "domestic", name: "1800RESPECT", description: "Free, confidential national sexual assault and domestic violence line.", phone: "1800 737 732", website: "https://www.1800respect.org.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-beyondblue", cat: "crisis", name: "Beyond Blue", description: "Mental health support for anxiety, depression and suicide prevention.", phone: "1300 22 4636", website: "https://www.beyondblue.org.au", hours: "24/7", isFree: true },
      { id: "au-poisons", cat: "health", name: "Poisons Information Centre", description: "24/7 expert advice on poison and overdose emergencies.", phone: "13 11 26", website: "https://www.poisonsinfo.nsw.gov.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-acsc", cat: "cyber", name: "Australian Cyber Security Centre (ACSC)", org: "ACSC", description: "Report cybercrime and online security incidents — scams, phishing, malware and data breaches.", phone: "1300 292 371", website: "https://www.cyber.gov.au", hours: "24/7", isFree: true },
      { id: "au-ses", cat: "disaster", name: "State Emergency Service (SES)", org: "SES", description: "Flood, storm and tsunami emergency assistance — call for storm and flood damage help.", phone: "132 500", website: "https://www.ses.nsw.gov.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-rail", cat: "railway", name: "Rail Safety — Report to Triple Zero", org: "State Rail Authorities", description: "For life-threatening incidents on rail property always call 000; for non-emergency concerns contact your local rail operator.", phone: "000", website: "https://www.ontrackinsurance.com.au", hours: "24/7", isFree: true, isUrgent: true },
      { id: "au-1800respect", cat: "women", name: "1800RESPECT", org: "Department of Social Services", description: "Free, confidential national sexual assault, domestic and family violence counseling.", phone: "1800 737 732", website: "https://www.1800respect.org.au", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "nz",
    name: "New Zealand",
    flag: "🇳🇿",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "111", href: "tel:111" },
      { label: "Police Non-Emergency", number: "105", href: "tel:105" },
    ],
    helplines: [
      { id: "nz-1737", cat: "crisis", name: "Need to Talk? 1737", description: "Free, confidential 24/7 call or text support for anyone feeling down or distressed.", phone: "1737", text: "Text 1737", website: "https://1737.org.nz", hours: "24/7", isFree: true, isUrgent: true },
      { id: "nz-lifeline", cat: "crisis", name: "Lifeline NZ", description: "Free, confidential 24/7 crisis support.", phone: "0800 543 354", website: "https://www.lifeline.org.nz", hours: "24/7", isFree: true, isUrgent: true },
      { id: "nz-youthline", cat: "children", name: "Youthline", description: "Support for young people — call, text or online chat.", phone: "0800 376 633", text: "Text 234", website: "https://www.youthline.co.nz", hours: "24/7", isFree: true },
      { id: "nz-shine", cat: "domestic", name: "Shine", description: "Free, confidential domestic violence support and safety planning.", phone: "0508 744 633", website: "https://www.2shine.org.nz", hours: "Daily 9:00–23:00", isFree: true, isUrgent: true },
      { id: "nz-cert", cat: "cyber", name: "CERT NZ", org: "CERT NZ", description: "Report cyber security incidents — phishing, scams, malware, ransomware and data breaches.", phone: "0800 2378 69", website: "https://www.cert.govt.nz", hours: "Mon–Fri 8am–5pm", isFree: true },
      { id: "nz-rail", cat: "railway", name: "KiwiRail Safety", org: "KiwiRail", description: "Report rail safety concerns, trespassing or hazards on rail corridors.", phone: "0800 475 400", hours: "24/7", isFree: true },
      { id: "nz-cd", cat: "disaster", name: "Civil Defence Emergency", org: "National Emergency Management Agency", description: "Emergency management, evacuation information and disaster preparedness.", phone: "111", website: "https://www.civildefence.govt.nz", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "sg",
    name: "Singapore",
    flag: "🇸🇬",
    lang: "en",
    emergency: [
      { label: "Police", number: "999", href: "tel:999" },
      { label: "Ambulance / Fire", number: "995", href: "tel:995" },
    ],
    helplines: [
      { id: "sg-sos", cat: "crisis", name: "Samaritans of Singapore (SOS)", description: "Free, confidential 24/7 crisis support and suicide prevention.", phone: "1767", website: "https://www.sos.org.sg", hours: "24/7", isFree: true, isUrgent: true },
      { id: "sg-imh", cat: "crisis", name: "IMH Crisis Line", description: "24/7 mental health crisis support from the Institute of Mental Health.", phone: "6389 2222", website: "https://www.imh.com.sg", hours: "24/7", isFree: true, isUrgent: true },
      { id: "sg-aware", cat: "domestic", name: "AWARE Helpline", description: "Support for women facing violence and discrimination.", phone: "1800 777 5555", website: "https://www.aware.org.sg", hours: "Mon–Fri 10:00–18:00", isFree: true },
      { id: "sg-tinkle", cat: "children", name: "Tinkle Friend", description: "Support and advice for primary school children.", phone: "1800 274 4788", website: "https://www.tinklefriend.sg", hours: "Mon–Fri 14:30–20:00", isFree: true },
      { id: "sg-scam", cat: "cyber", name: "ScamShield Helpline", org: "SPF / NCPC", description: "Report scams and get help if you've been scammed — online, phone or messaging scams.", phone: "1800 722 6688", website: "https://www.scamshield.gov.sg", hours: "Daily 8am–8pm", isFree: true },
      { id: "sg-mrt", cat: "railway", name: "SMRT Customer & Safety", org: "SMRT / LTA", description: "Report safety concerns or emergencies on MRT trains and at stations.", phone: "1800 336 8900", website: "https://www.smrt.com.sg", hours: "24/7", isFree: true },
      { id: "sg-scdf", cat: "disaster", name: "SCDF Civil Defence", org: "Singapore Civil Defence Force", description: "Fire, rescue and disaster response — emergency ambulance and fire services.", phone: "995", website: "https://www.scdf.gov.sg", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "my",
    name: "Malaysia",
    flag: "🇲🇾",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "999", href: "tel:999" },
      { label: "Mobile Emergency", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "my-befrienders", cat: "crisis", name: "Befrienders KL", description: "Free, confidential emotional support and suicide prevention.", phone: "03-7956 8145", email: "sam@befrienders.org.my", website: "https://www.befrienders.org.my", hours: "24/7", isFree: true, isUrgent: true },
      { id: "my-kasih", cat: "domestic", name: "Talian Kasih 15999", description: "24/7 helpline for women and children in crisis.", phone: "15999", hours: "24/7", isFree: true, isUrgent: true },
      { id: "my-116111", cat: "children", name: "Talian Kanak-Kanak", description: "Child helpline — free and confidential.", phone: "116 111", hours: "Daily 08:00–20:00", isFree: true },
    ],
  },
  {
    id: "id",
    name: "Indonesia",
    flag: "🇮🇩",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "110", href: "tel:110" },
    ],
    helplines: [
      { id: "id-119", cat: "crisis", name: "Kemenkes 119 (Extension 8)", description: "Free 24/7 mental health crisis support from the Ministry of Health.", phone: "119", hours: "24/7", isFree: true, isUrgent: true },
      { id: "id-sapa129", cat: "domestic", name: "SAPA 129", description: "National hotline for women and children victims of violence.", phone: "129", hours: "24/7", isFree: true, isUrgent: true },
      { id: "id-1500454", cat: "children", name: "TePSA 1500-454", description: "Children's helpline — free and confidential.", phone: "1500-454", hours: "Daily 09:00–21:00", isFree: true },
      { id: "id-bnpb", cat: "disaster", name: "BNPB 129", org: "Badan Nasional Penanggulangan Bencana", description: "National disaster management authority — floods, earthquakes, volcanic eruptions and relief.", phone: "129", website: "https://bnpb.go.id", hours: "24/7", isFree: true, isUrgent: true },
      { id: "id-cyber", cat: "cyber", name: "Patroli Siber Polri", org: "Kepolisian RI", description: "Report cybercrime, online fraud and digital crimes to the Indonesian police.", phone: "110", website: "https://patrolisiber.id", hours: "24/7", isFree: true, isUrgent: true },
      { id: "id-rail", cat: "railway", name: "KAI Safety Line", org: "Kereta Api Indonesia", description: "Report safety concerns or emergencies on KAI trains and stations.", phone: "121", website: "https://www.kai.id", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "ph",
    name: "Philippines",
    flag: "🇵🇭",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "911", href: "tel:911" },
      { label: "Mobile Text", number: "117", href: "sms:117" },
    ],
    helplines: [
      { id: "ph-ncmh", cat: "crisis", name: "NCMH Crisis Hotline", description: "Free, confidential mental health crisis support from the National Center for Mental Health.", phone: "1553", website: "https://ncmh.gov.ph", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ph-hopeline", cat: "crisis", name: "HOPELINE PH", description: "Suicide prevention and crisis support — free and confidential.", phone: "0917-558-4673", website: "https://www.hopeline.com.ph", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ph-bantaybata", cat: "children", name: "Bantay Bata 163", description: "Child protection and family support hotline.", phone: "163", hours: "24/7", isFree: true },
      { id: "ph-cyber", cat: "cyber", name: "PNP Anti-Cybercrime Group", org: "Philippine National Police", description: "Report cybercrime, online scams, harassment and digital fraud.", phone: "02-8414-1560", website: "https://acg.pnp.gov.ph", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ph-ndrrmc", cat: "disaster", name: "NDRRMC Operations Center", org: "National Disaster Risk Reduction & Management Council", description: "Disaster response, relief coordination and emergency information during typhoons and earthquakes.", phone: "02-8911-5061", website: "https://ndrrmc.gov.ph", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ph-rail", cat: "railway", name: "PNR Safety Line", org: "Philippine National Railways", description: "Report safety concerns on PNR trains and stations.", phone: "02-8319-0041", hours: "Daily 6am–9pm", isFree: true },
    ],
  },
  {
    id: "jp",
    name: "Japan",
    flag: "🇯🇵",
    lang: "ja",
    emergency: [
      { label: "Police", number: "110", href: "tel:110" },
      { label: "Fire / Ambulance", number: "119", href: "tel:119" },
    ],
    helplines: [
      { id: "jp-inochi", cat: "crisis", name: "いのちの電話 (Inochi no Denwa)", description: "Suicide prevention and crisis counseling — free and confidential.", phone: "0120-783-556", website: "https://www.inochinodenwa.org", hours: "Daily 10:00–22:00", isFree: true, isUrgent: true },
      { id: "jp-tell", cat: "crisis", name: "TELL Lifeline (English)", description: "English-language crisis support and counseling in Japan.", phone: "03-5774-0992", website: "https://telljp.com", hours: "Daily 21:00–02:30 (plus Fri–Sat daytime)", isFree: true },
      { id: "jp-yorisoi", cat: "general", name: "よりそいホットライン (Yorisoi Hotline)", description: "24/7 general support line covering suicide, abuse, loneliness and more.", phone: "0120-279-338", website: "https://www.since2011.net", hours: "24/7", isFree: true, isUrgent: true },
      { id: "jp-7119", cat: "health", name: "#7119 Medical Consultation", description: "Medical guidance when you're unsure whether to call an ambulance.", phone: "#7119", hours: "24/7", isFree: true },
      { id: "jp-cyber", cat: "cyber", name: "警察サイバー相談窓口 #9110 (Police Cyber Consultation)", org: "警察庁 / National Police Agency", description: "Police consultation for cybercrime — online fraud, harassment and hacking.", phone: "#9110", hours: "Daily 8:30–17:15", isFree: true },
      { id: "jp-jr", cat: "railway", name: "JR Safety & Security Line", org: "JR Group", description: "Report safety concerns, unattended items or suspicious activity at stations and on trains.", phone: "050-2016-0000", hours: "Daily 8:00–20:00", isFree: true },
      { id: "jp-bousai", cat: "disaster", name: "防災行政無線 / Disaster Info", org: "各自治体 / Local authorities", description: "Official disaster warnings and evacuation information via local authorities.", phone: "119", website: "https://www.bousai.go.jp", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "kr",
    name: "South Korea",
    flag: "🇰🇷",
    lang: "ko",
    emergency: [
      { label: "Police", number: "112", href: "tel:112" },
      { label: "Fire / Medical", number: "119", href: "tel:119" },
    ],
    helplines: [
      { id: "kr-1393", cat: "crisis", name: "자살예방상담전화 1393", description: "Free, confidential 24/7 suicide prevention hotline.", phone: "1393", hours: "24/7", isFree: true, isUrgent: true },
      { id: "kr-129", cat: "health", name: "보건복지상담센터 129", description: "Government health and welfare counseling hotline.", phone: "129", hours: "24/7", isFree: true },
      { id: "kr-1366", cat: "domestic", name: "여성긴급전화 1366", description: "24/7 emergency hotline for women facing violence.", phone: "1366", hours: "24/7", isFree: true, isUrgent: true },
      { id: "kr-1388", cat: "children", name: "청소년전화 1388", description: "Youth counseling and protection hotline.", phone: "1388", hours: "24/7", isFree: true },
      { id: "kr-118", cat: "cyber", name: "사이버범죄 신고 118", org: "KISA / 경찰청", description: "Report cybercrime, online fraud and digital crimes to Korea's cyber safety center.", phone: "118", website: "https://www.krcert.or.kr", hours: "24/7", isFree: true, isUrgent: true },
      { id: "kr-rail", cat: "railway", name: "코레일 안전신고 (Korail Safety)", org: "Korail", description: "Report safety concerns or emergencies on Korail trains and stations.", phone: "1588 7788", website: "https://www.letskorail.com", hours: "24/7", isFree: true },
      { id: "kr-disaster", cat: "disaster", name: "재난안전 신고 (Disaster Safety)", org: "행정안전부 / MOIS", description: "Report disasters and safety hazards to the Ministry of the Interior and Safety.", phone: "119", website: "https://www.mois.go.kr", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "cn",
    name: "China",
    flag: "🇨🇳",
    lang: "zh",
    emergency: [
      { label: "Police", number: "110", href: "tel:110" },
      { label: "Medical", number: "120", href: "tel:120" },
      { label: "Fire", number: "119", href: "tel:119" },
    ],
    helplines: [
      { id: "cn-beijing-crisis", cat: "crisis", name: "北京心理危机干预中心 (Beijing Crisis Hotline)", description: "Free 24/7 suicide prevention and psychological crisis support.", phone: "010-8295-1332", hours: "24/7", isFree: true, isUrgent: true },
      { id: "cn-lifeline", cat: "crisis", name: "Lifeline China (English)", description: "Free English-language crisis support in China.", phone: "400-821-1215", website: "https://www.lifelinechina.org", hours: "Daily 10:00–22:00", isFree: true },
      { id: "cn-12355", cat: "children", name: "12355 青少年服务台", description: "National youth service and counseling hotline.", phone: "12355", hours: "24/7", isFree: true },
      { id: "cn-12321", cat: "cyber", name: "12321 网络不良信息举报", org: "12321 Network", description: "Report online scams, phishing, spam and harmful internet content.", phone: "12321", website: "https://www.12321.cn", hours: "24/7", isFree: true },
      { id: "cn-119", cat: "disaster", name: "应急管理 119/110", org: "应急管理部 / MEM", description: "Ministry of Emergency Management — disaster response, fire and rescue coordination.", phone: "119", website: "https://www.mem.gov.cn", hours: "24/7", isFree: true, isUrgent: true },
      { id: "cn-rail", cat: "railway", name: "铁路客服 12306", org: "China Railway", description: "Railway customer service, complaints and safety concerns on China's rail network.", phone: "12306", website: "https://www.12306.cn", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "hk",
    name: "Hong Kong",
    flag: "🇭🇰",
    lang: "zh",
    emergency: [
      { label: "Emergency", number: "999", href: "tel:999" },
      { label: "SMS Emergency", number: "992", href: "sms:992" },
    ],
    helplines: [
      { id: "hk-samaritans", cat: "crisis", name: "The Samaritans 撒瑪利亞會", description: "Free, confidential 24/7 multilingual crisis support.", phone: "2896 0000", website: "https://samaritans.org.hk", hours: "24/7", isFree: true, isUrgent: true, languages: ["English", "Cantonese", "Mandarin"] },
      { id: "hk-openup", cat: "children", name: "Open Up 開放Up", description: "Free, confidential online text and chat support for young people.", text: "Text 9101 0923", website: "https://www.openup.hk", hours: "Daily 18:00–02:00", isFree: true },
      { id: "hk-sps", cat: "crisis", name: "Suicide Prevention Services", description: "24/7 suicide prevention hotline in Cantonese.", phone: "2382 0000", website: "https://www.sps.org.hk", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "vn",
    name: "Vietnam",
    flag: "🇻🇳",
    lang: "en",
    emergency: [
      { label: "Police", number: "113", href: "tel:113" },
      { label: "Medical", number: "115", href: "tel:115" },
    ],
    helplines: [
      { id: "vn-111", cat: "children", name: "Tổng đài 111", description: "National child protection hotline — free 24/7.", phone: "111", hours: "24/7", isFree: true, isUrgent: true },
      { id: "vn-tphn", cat: "crisis", name: "Tâm Lý Việt", description: "Psychological support and counseling hotline.", phone: "1900 636 908", website: "https://tamlyviet.vn", hours: "Daily 09:00–21:00", isFree: true },
      { id: "vn-113", cat: "cyber", name: "Cảnh sát Công nghệ cao", org: "Cục Cảnh sát Hình sự", description: "Report cybercrime, online scams and high-tech crime to Vietnam's cyber police.", phone: "113", hours: "24/7", isFree: true, isUrgent: true },
      { id: "vn-rail", cat: "railway", name: "Đường sắt Việt Nam", org: "VNR", description: "Railway safety and customer service for Vietnam Railways.", phone: "1900 0109", website: "https://dsvn.vn", hours: "Daily 7am–10pm", isFree: true },
      { id: "vn-disaster", cat: "disaster", name: "Phòng chống thiên tai", org: "Cục Quản lý đê điều", description: "Disaster prevention and response — typhoons, floods and storms.", phone: "115", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "in",
    name: "India",
    flag: "🇮🇳",
    lang: "hi",
    emergency: [
      { label: "National Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "100", href: "tel:100" },
      { label: "Ambulance", number: "108", href: "tel:108" },
    ],
    helplines: [
      { id: "in-telemanas", cat: "crisis", name: "Tele-MANAS", description: "Free, confidential 24/7 mental health support from the Government of India.", phone: "14416", website: "https://telemanas.mohfw.gov.in", hours: "24/7", isFree: true, isUrgent: true, languages: ["Hindi", "English", "20+ regional languages"] },
      { id: "in-kiran", cat: "crisis", name: "KIRAN Helpline", description: "24/7 suicide prevention and mental health crisis support.", phone: "1800-599-0019", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-childline", cat: "children", name: "Childline 1098", description: "Free 24/7 helpline for children in need of care and protection.", phone: "1098", website: "https://www.childlineindia.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-women", cat: "domestic", name: "Women Helpline 181", description: "24/7 emergency support for women facing violence or distress.", phone: "181", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-icall", cat: "crisis", name: "iCall (TISS)", description: "Free, confidential psychosocial counseling by phone and email.", phone: "9152-987821", email: "icall@tiss.edu", website: "https://icallhelpline.org", hours: "Mon–Sat 08:00–22:00", isFree: true },
      { id: "in-139", cat: "railway", name: "Railway Helpline 139", org: "Indian Railways", description: "Railway enquiry, complaints, security and emergency assistance — 24/7 across the Indian Railways network.", phone: "139", website: "https://www.railmitra.com", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-182", cat: "railway", name: "RPF Helpline 182", org: "Railway Protection Force", description: "Report security issues, theft or harassment on trains and stations to the Railway Protection Force.", phone: "182", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-cyber", cat: "cyber", name: "National Cyber Crime Helpline 1930", org: "Ministry of Home Affairs", description: "Report cyber fraud, online financial scams, sextortion and other cyber crimes — 24/7.", phone: "1930", website: "https://cybercrime.gov.in", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-ndma", cat: "disaster", name: "NDMA Disaster Helpline 1078", org: "National Disaster Management Authority", description: "National emergency helpline for disaster management, relief and rescue coordination.", phone: "1078", hours: "24/7", isFree: true, isUrgent: true },
      { id: "in-women-cyber", cat: "women", name: "Women Cyber Café Helpline", org: "Government of India", description: "Dedicated support for women facing online harassment or cyber abuse.", phone: "155260", hours: "Mon–Fri 9am–6pm", isFree: true },
    ],
  },
  {
    id: "th",
    name: "Thailand",
    flag: "🇹🇭",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "191", href: "tel:191" },
      { label: "Medical", number: "1669", href: "tel:1669" },
    ],
    helplines: [
      { id: "th-samaritans", cat: "crisis", name: "Samaritans of Thailand", description: "Free, confidential crisis and suicide prevention support.", phone: "02-713-6793", email: "samaritans_thailand@yahoo.com", website: "https://www.samaritansthai.com", hours: "24/7", isFree: true, isUrgent: true },
      { id: "th-1323", cat: "health", name: "Sor Tor 1323 (DMH)", description: "Mental health hotline from the Department of Mental Health.", phone: "1323", hours: "24/7", isFree: true },
      { id: "th-191", cat: "cyber", name: "ตำรวจไซเบอร์ 191", org: "ตำรวจไซเบอร์ / Cyber Police", description: "Report cybercrime, online scams and digital fraud to Thai cyber police.", phone: "191", hours: "24/7", isFree: true, isUrgent: true },
      { id: "th-srt", cat: "railway", name: "SRT Safety Line", org: "State Railway of Thailand", description: "Report safety concerns on SRT trains and stations.", phone: "1690", website: "https://www.railway.co.th", hours: "Daily 6am–10pm", isFree: true },
      { id: "th-disaster", cat: "disaster", name: "DDPM Disaster Line", org: "Department of Disaster Prevention & Mitigation", description: "Disaster prevention and response — floods, storms and emergencies.", phone: "1784", website: "https://www.disaster.go.th", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  // ============ MIDDLE EAST & AFRICA ============
  {
    id: "ae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    lang: "ar",
    emergency: [
      { label: "Police / Emergency", number: "999", href: "tel:999" },
      { label: "Ambulance", number: "998", href: "tel:998" },
      { label: "Fire", number: "997", href: "tel:997" },
    ],
    helplines: [
      { id: "ae-hope", cat: "domestic", name: "HOPE Line 800 4444", description: "Free, confidential support for family and domestic violence.", phone: "800 4444", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ae-estijaba", cat: "crisis", name: "Estijaba 800 8877", description: "Mental health crisis support and counseling.", phone: "800 8877", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ae-800728", cat: "children", name: "Child Protection 116111", description: "Hotline for reporting child abuse and neglect.", phone: "116111", hours: "24/7", isFree: true },
      { id: "ae-cyber", cat: "cyber", name: "Dubai Police Cybercrime 901", org: "Dubai Police", description: "Report cybercrime, online fraud, hacking and digital harassment.", phone: "901", website: "https://www.dubaipolice.gov.ae", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ae-aman", cat: "railway", name: "Etihad Rail Safety", org: "Etihad Rail", description: "Report safety concerns or emergencies related to the UAE national railway.", phone: "800 7245", hours: "24/7", isFree: true },
      { id: "ae-ncema", cat: "disaster", name: "NCEMA Emergency", org: "National Emergency Crisis & Disasters Management Authority", description: "National emergency management and disaster response coordination.", phone: "800 623 62", website: "https://www.ncema.gov.ae", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "sa",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    lang: "ar",
    emergency: [
      { label: "Emergency", number: "911", href: "tel:911" },
      { label: "Ambulance (Red Crescent)", number: "997", href: "tel:997" },
    ],
    helplines: [
      { id: "sa-937", cat: "health", name: "937 Health & Mental Health", description: "24/7 health consultation line — includes mental health support.", phone: "937", website: "https://www.moh.gov.sa", hours: "24/7", isFree: true, isUrgent: true },
      { id: "sa-madad", cat: "crisis", name: "Madad 1919", description: "Psychological and social support hotline.", phone: "1919", hours: "24/7", isFree: true },
      { id: "sa-family", cat: "domestic", name: "Family Safety 1919", description: "Reporting and support for domestic violence and child abuse.", phone: "1919", hours: "24/7", isFree: true, isUrgent: true },
      { id: "sa-cyber", cat: "cyber", name: "Cybercrime Reporting", org: "Ministry of Interior", description: "Report cybercrime, online fraud and hacking to Saudi authorities.", phone: "911", website: "https://www.moi.gov.sa", hours: "24/7", isFree: true, isUrgent: true },
      { id: "sa-rail", cat: "railway", name: "SAR Safety Line", org: "Saudi Arabia Railways", description: "Report safety concerns on Saudi rail services (SAR / Haramain).", phone: "920 009 777", website: "https://www.sar.com.sa", hours: "24/7", isFree: true },
      { id: "sa-defense", cat: "disaster", name: "Civil Defense 998", org: "General Directorate of Civil Defense", description: "Disaster response, fire and rescue services.", phone: "998", website: "https://www.998.gov.sa", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "qa",
    name: "Qatar",
    flag: "🇶🇦",
    lang: "ar",
    emergency: [
      { label: "Emergency", number: "999", href: "tel:999" },
      { label: "Ambulance", number: "998", href: "tel:998" },
    ],
    helplines: [
      { id: "qa-16000", cat: "crisis", name: "Mental Health Helpline 16000", description: "Free, confidential mental health support.", phone: "16000", hours: "24/7", isFree: true, isUrgent: true },
      { id: "qa-919", cat: "children", name: "Child Helpline 919", description: "Free support for children and families.", phone: "919", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "kw",
    name: "Kuwait",
    flag: "🇰🇼",
    lang: "ar",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "kw-mental", cat: "crisis", name: "Mental Health Hotline", description: "Free, confidential mental health and crisis support.", phone: "180 8333", hours: "24/7", isFree: true, isUrgent: true },
      { id: "kw-child", cat: "children", name: "Child Helpline", description: "Support and reporting line for children.", phone: "147", hours: "Daily 08:00–20:00", isFree: true },
    ],
  },
  {
    id: "bh",
    name: "Bahrain",
    flag: "🇧🇭",
    lang: "ar",
    emergency: [
      { label: "Emergency", number: "999", href: "tel:999" },
      { label: "Ambulance", number: "998", href: "tel:998" },
    ],
    helplines: [
      { id: "bh-mental", cat: "crisis", name: "Mental Health Helpline", description: "Free, confidential psychological support.", phone: "800 01767", hours: "24/7", isFree: true, isUrgent: true },
      { id: "bh-child", cat: "children", name: "Child Helpline 998", description: "Child protection support line.", phone: "998", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "ye",
    name: "Yemen",
    flag: "🇾🇪",
    lang: "ar",
    emergency: [
      { label: "Police", number: "199", href: "tel:199" },
      { label: "Ambulance", number: "191", href: "tel:191" },
    ],
    helplines: [
      { id: "ye-mental", cat: "crisis", name: "Mental Health Support", description: "Psychological first aid and counseling support.", phone: "800 2000", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "om",
    name: "Oman",
    flag: "🇴🇲",
    lang: "ar",
    emergency: [
      { label: "Police / Emergency", number: "9999", href: "tel:9999" },
      { label: "Ambulance", number: "999", href: "tel:999" },
    ],
    helplines: [
      { id: "om-mental", cat: "crisis", name: "Mental Health Helpline", description: "Free, confidential mental health consultation.", phone: "2444 4444", hours: "24/7", isFree: true, isUrgent: true },
      { id: "om-child", cat: "children", name: "Child Protection", description: "Reporting line for child protection concerns.", phone: "1100", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "il",
    name: "Israel",
    flag: "🇮🇱",
    lang: "en",
    emergency: [
      { label: "Police", number: "100", href: "tel:100" },
      { label: "Ambulance", number: "101", href: "tel:101" },
      { label: "Fire", number: "102", href: "tel:102" },
    ],
    helplines: [
      { id: "il-eran", cat: "crisis", name: "ERAN", description: "Free, confidential 24/7 emotional first aid and suicide prevention.", phone: "1201", website: "https://www.eran.org.il", hours: "24/7", isFree: true, isUrgent: true, languages: ["Hebrew", "English", "Russian", "Arabic"] },
      { id: "il-1202", cat: "domestic", name: "Domestic Violence Hotline 1202", description: "24/7 support for victims of domestic violence.", phone: "1202", hours: "24/7", isFree: true, isUrgent: true },
      { id: "il-sahar", cat: "children", name: "Sahar 1203", description: "Support line for children and youth at risk.", phone: "1203", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "tr",
    name: "Türkiye",
    flag: "🇹🇷",
    lang: "tr",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "155", href: "tel:155" },
    ],
    helplines: [
      { id: "tr-183", cat: "domestic", name: "AÇEM 183", description: "Free, confidential social support for women, children and families.", phone: "183", hours: "24/7", isFree: true, isUrgent: true },
      { id: "tr-yesilay", cat: "addiction", name: "Yeşilay Danışma Hattı", description: "Free, confidential addiction counseling (YEDAM).", phone: "115", website: "https://www.yesilay.org.tr", hours: "24/7", isFree: true },
      { id: "tr-182", cat: "health", name: "Health Line 182", description: "Health information and appointment line.", phone: "182", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "eg",
    name: "Egypt",
    flag: "🇪🇬",
    lang: "ar",
    emergency: [
      { label: "Police", number: "122", href: "tel:122" },
      { label: "Ambulance", number: "123", href: "tel:123" },
      { label: "Fire", number: "180", href: "tel:180" },
    ],
    helplines: [
      { id: "eg-befrienders", cat: "crisis", name: "Befrienders Cairo", description: "Free, confidential emotional support and suicide prevention.", phone: "02 762 1602", email: "cairo@befrienderscairo.com", hours: "Daily 18:00–22:00", isFree: true },
      { id: "eg-16021", cat: "health", name: "Mental Health Hotline", description: "Psychological support from Egypt's General Secretariat of Mental Health.", phone: "16021", hours: "Daily 09:00–18:00", isFree: true },
    ],
  },
  {
    id: "za",
    name: "South Africa",
    flag: "🇿🇦",
    lang: "en",
    emergency: [
      { label: "Police", number: "10111", href: "tel:10111" },
      { label: "Ambulance", number: "10177", href: "tel:10177" },
      { label: "Mobile Emergency", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "za-sadag", cat: "crisis", name: "SADAG Mental Health Line", description: "Free, confidential 24/7 mental health and suicide prevention support.", phone: "0800 456 789", website: "https://www.sadag.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "za-suicide", cat: "crisis", name: "Suicide Crisis Line", description: "Free 24/7 suicide crisis counseling.", phone: "0800 12 13 14", website: "https://www.sadag.org", hours: "24/7", isFree: true, isUrgent: true },
      { id: "za-childline", cat: "children", name: "Childline South Africa", description: "Free, confidential support for children and teens.", phone: "116", website: "https://www.childlinesa.org.za", hours: "24/7", isFree: true, isUrgent: true },
      { id: "za-gbv", cat: "domestic", name: "GBV Command Centre", description: "24/7 national gender-based violence helpline.", phone: "0800 428 428", hours: "24/7", isFree: true, isUrgent: true },
      { id: "za-cyber", cat: "cyber", name: "SAPS Cybercrime", org: "South African Police Service", description: "Report cybercrime, online fraud and digital crimes to the SAPS Crime Stop line.", phone: "08600 10111", website: "https://www.saps.gov.za", hours: "24/7", isFree: true, isUrgent: true },
      { id: "za-prasa", cat: "railway", name: "PRASA Safety Line", org: "Passenger Rail Agency of SA", description: "Report safety concerns, vandalism or incidents on the PRASA rail network.", phone: "0800 444 111", hours: "24/7", isFree: true },
      { id: "za-ndmc", cat: "disaster", name: "NDMC Disaster Helpline", org: "National Disaster Management Centre", description: "Disaster management, relief coordination and emergency information.", phone: "012 848 4615", website: "https://www.ndmc.gov.za", hours: "Mon–Fri 8am–4:30pm", isFree: true },
    ],
  },

  // ============ MORE EUROPE & ASIA ============
  {
    id: "ru",
    name: "Russia",
    flag: "🇷🇺",
    lang: "ru",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "102", href: "tel:102" },
      { label: "Medical", number: "103", href: "tel:103" },
    ],
    helplines: [
      { id: "ru-children", cat: "children", name: "Детский телефон доверия (Children's Helpline)", description: "Free, anonymous 24/7 psychological support for children and parents.", phone: "8-800-2000-122", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ru-mental", cat: "crisis", name: "Психологическая помощь (Psychological Helpline)", description: "Free crisis psychological support line.", phone: "8-800-333-44-34", hours: "24/7", isFree: true },
      { id: "ru-cyber", cat: "cyber", name: "МВД Киберполиция (Cybercrime)", org: "МВД России", description: "Report cybercrime, online fraud and digital crimes to the Russian Ministry of Internal Affairs.", phone: "8-800-222-74-47", website: "https://мвд.рф", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ru-emercom", cat: "disaster", name: "МЧС России (EMERCOM)", org: "МЧС", description: "Ministry of Emergency Situations — disaster response, fire and rescue services.", phone: "112", website: "https://www.mchs.gov.ru", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ru-rail", cat: "railway", name: "РЖД Безопасность (RZD Safety)", org: "РЖД", description: "Report safety concerns on Russian Railways trains and stations.", phone: "8-800-775-00-00", website: "https://www.rzd.ru", hours: "24/7", isFree: true },
    ],
  },
  {
    id: "ua",
    name: "Ukraine",
    flag: "🇺🇦",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "102", href: "tel:102" },
      { label: "Medical", number: "103", href: "tel:103" },
    ],
    helplines: [
      { id: "ua-1547", cat: "domestic", name: "La Strada 1547", description: "Free, confidential support for women and children facing violence or trafficking.", phone: "1547", website: "https://la-strada.org.ua", hours: "24/7", isFree: true, isUrgent: true },
      { id: "ua-116123", cat: "crisis", name: "Emotional Support 116 123", description: "Free psychological support line.", phone: "116 123", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "by",
    name: "Belarus",
    flag: "🇧🇾",
    lang: "ru",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "102", href: "tel:102" },
    ],
    helplines: [
      { id: "by-children", cat: "children", name: "Детская телефонная линия 8-801-100-1611", description: "Free, anonymous support for children and teens.", phone: "8-801-100-1611", hours: "Daily 08:00–20:00", isFree: true },
    ],
  },
  {
    id: "pl",
    name: "Poland",
    flag: "🇵🇱",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "997", href: "tel:997" },
      { label: "Medical", number: "999", href: "tel:999" },
    ],
    helplines: [
      { id: "pl-116123", cat: "crisis", name: "Telefon Zaufania 116 123", description: "Free, confidential crisis support for adults.", phone: "116 123", hours: "Daily 14:00–22:00", isFree: true, isUrgent: true },
      { id: "pl-116111", cat: "children", name: "Telefon Zaufania dla Dzieci 116 111", description: "Free, anonymous support for children and young people.", phone: "116 111", website: "https://116111.pl", hours: "Daily 12:00–02:00", isFree: true },
      { id: "pl-80070", cat: "crisis", name: "Centrum Wsparcia 800 70 2222", description: "Free 24/7 psychological support for adults in crisis.", phone: "800 70 2222", hours: "24/7", isFree: true, isUrgent: true },
      { id: "pl-blue", cat: "domestic", name: "Niebieska Linia 800 120 002", description: "Support for victims of domestic violence.", phone: "800 120 002", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "ro",
    name: "Romania",
    flag: "🇷🇴",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "ro-116111", cat: "children", name: "Telefonul Copilului 116 111", description: "Free, confidential support for children.", phone: "116 111", hours: "24/7", isFree: true },
      { id: "ro-116123", cat: "crisis", name: "Linia de Ajutor Emoțional 116 123", description: "Free emotional support and suicide prevention line.", phone: "116 123", hours: "24/7", isFree: true, isUrgent: true },
    ],
  },
  {
    id: "md",
    name: "Moldova",
    flag: "🇲🇩",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
      { label: "Police", number: "902", href: "tel:902" },
      { label: "Medical", number: "903", href: "tel:903" },
    ],
    helplines: [
      { id: "md-children", cat: "children", name: "Child Helpline 116 111", description: "Free, confidential support for children.", phone: "116 111", hours: "24/7", isFree: true },
      { id: "md-mental", cat: "crisis", name: "Psychological Support 0800 111 122", description: "Free psychological support and counseling.", phone: "0800 111 122", hours: "Daily 09:00–21:00", isFree: true },
    ],
  },
  {
    id: "fj",
    name: "Fiji",
    flag: "🇫🇯",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "911", href: "tel:911" },
      { label: "Police", number: "917", href: "tel:917" },
    ],
    helplines: [
      { id: "fj-lifeline", cat: "crisis", name: "Lifeline Fiji", description: "Free, confidential crisis and suicide prevention support.", phone: "1532", website: "https://www.lifelinefiji.com", hours: "Daily 09:00–23:00", isFree: true, isUrgent: true },
      { id: "fj-child", cat: "children", name: "Child Helpline 132454", description: "Free, confidential support for children.", phone: "132454", hours: "Daily 08:00–20:00", isFree: true },
    ],
  },
  {
    id: "gl",
    name: "Greenland",
    flag: "🇬🇱",
    lang: "en",
    emergency: [
      { label: "Emergency", number: "112", href: "tel:112" },
    ],
    helplines: [
      { id: "gl-suicide", cat: "crisis", name: "Suicide Prevention 116 123", description: "Free, confidential crisis support.", phone: "116 123", hours: "24/7", isFree: true, isUrgent: true },
      { id: "gl-children", cat: "children", name: "Children's Helpline", description: "Support line for children and young people.", phone: "38 12 12", hours: "Daily 16:00–22:00", isFree: true },
    ],
  },
];

export const getCountry = (id: string): Country =>
  COUNTRIES.find((c) => c.id === id) ?? COUNTRIES[0];

export const COUNTRY_COUNT = COUNTRIES.length;

export const COUNTRY_HELPLINE_COUNT = COUNTRIES.reduce((s, c) => s + c.helplines.length, 0);
