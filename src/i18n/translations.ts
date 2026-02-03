// src/i18n/translations.ts
// -----------------------------------------------------------------------------
// BILINGUAL (EN/EL) DICTIONARY
// - Centralizes strings (Requirement: bilingual website).
// - We'll keep texts "assignment-ready" with explicit 5-year plan + interview highlight.
// -----------------------------------------------------------------------------

export const translations = {
  en: {
    brand: "Periklis Tsaousis",
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    lang_switch: "ΕΛ",

    hero_title: "Hi, I'm Periklis Tsaousis",
    hero_tagline: "I build modern, fast, SEO-friendly web experiences.",
    hero_cta: "View projects",

    about_title: "About me",
    // Elegant bio with explicit requirements covered:
    // - 5 years plan
    // - what you liked most from the interview discussion
    about_body:
      "I'm a developer focused on building clean, accessible interfaces with a strong emphasis on performance and maintainability. " +
      "In the next 5 years, I aim to grow into a product-minded front-end engineer who takes ownership end-to-end: from UI architecture and design systems to measurable UX improvements. " +
      "What I enjoyed most from our interview discussion was the collaborative, problem-solving mindset—turning real requirements into a simple, user-friendly solution.",

    about_card_title: "Quick facts",
    fact_1_label: "Location",
    fact_1_value: "Athens, Greece",
    fact_2_label: "Focus",
    fact_2_value: "Frontend / UI Engineering",
    fact_3_label: "Interests",
    fact_3_value: "Performance, SEO, Clean UX",

    projects_title: "Projects",
    projects_body: "Interactive project cards (click to view details).",

    contact_title: "Contact",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    contact_send: "Send",
    contact_note: "UI only (no backend submission).",

    footer_rights: "All rights reserved.",
  },

  el: {
    brand: "Περικλής Τσαούσης",
    nav_home: "Αρχική",
    nav_about: "Σχετικά",
    nav_projects: "Projects",
    nav_contact: "Επικοινωνία",
    lang_switch: "EN",

    hero_title: "Γεια, είμαι ο Περικλής Τσαούσης",
    hero_tagline: "Φτιάχνω σύγχρονες, γρήγορες και SEO-friendly web εμπειρίες.",
    hero_cta: "Δες projects",

    about_title: "Λίγα λόγια για μένα",
    about_body:
      "Είμαι developer με έμφαση σε καθαρό, προσβάσιμο UI, υψηλή απόδοση και κώδικα που συντηρείται εύκολα. " +
      "Στα επόμενα 5 χρόνια στόχος μου είναι να εξελιχθώ σε front-end engineer με product νοοτροπία, αναλαμβάνοντας end-to-end ευθύνη: από UI αρχιτεκτονική και design systems μέχρι μετρήσιμες βελτιώσεις στο UX. " +
      "Αυτό που μου άρεσε περισσότερο από τη συζήτηση στη συνέντευξη ήταν το συνεργατικό, problem-solving κλίμα—να μετατρέπουμε πραγματικές ανάγκες σε μια απλή και φιλική λύση για τον χρήστη.",

    about_card_title: "Σύνοψη",
    fact_1_label: "Τοποθεσία",
    fact_1_value: "Αθήνα, Ελλάδα",
    fact_2_label: "Εστίαση",
    fact_2_value: "Frontend / UI Engineering",
    fact_3_label: "Ενδιαφέροντα",
    fact_3_value: "Performance, SEO, Καθαρό UX",

    projects_title: "Projects",
    projects_body: "Διαδραστικές κάρτες (κλικ για λεπτομέρειες).",

    contact_title: "Επικοινωνία",
    contact_name: "Ονοματεπώνυμο",
    contact_email: "Email",
    contact_message: "Μήνυμα",
    contact_send: "Αποστολή",
    contact_note: "Μόνο UI (χωρίς backend υποβολή).",

    footer_rights: "Με επιφύλαξη παντός δικαιώματος.",
  },
} as const;

export type Lang = keyof typeof translations;

export function createT(lang: Lang) {
  return (key: keyof typeof translations.en) => translations[lang][key];
}
