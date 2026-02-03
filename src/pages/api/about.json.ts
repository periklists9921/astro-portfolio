/**
 * BONUS API
 * -----------------------------------------------------------------------------
 * Requirement (bonus): serve the info of section 2 via an API endpoint.
 * We'll return bilingual content and pick based on query param `lang`.
 */
export async function GET({ url }: { url: URL }) {
  const lang = url.searchParams.get("lang") === "el" ? "el" : "en";

  const payload =
    lang === "el"
      ? {
          bio: "Είμαι developer με έμφαση σε καθαρό, προσβάσιμο UI, υψηλή απόδοση και κώδικα που συντηρείται εύκολα.",
          inFiveYears:
            "Στα επόμενα 5 χρόνια στόχος μου είναι να εξελιχθώ σε front-end engineer με product νοοτροπία, με end-to-end ευθύνη (UI architecture, design systems, μετρήσιμες βελτιώσεις UX).",
          interviewHighlight:
            "Μου άρεσε περισσότερο το συνεργατικό problem-solving κλίμα και το πώς μετατρέπουμε πραγματικές ανάγκες σε απλή, φιλική λύση για τον χρήστη.",
        }
      : {
          bio: "I'm a developer focused on building clean, accessible interfaces with an emphasis on performance and maintainability.",
          inFiveYears:
            "In the next 5 years, I aim to grow into a product-minded front-end engineer who owns UI architecture, design systems, and measurable UX improvements end-to-end.",
          interviewHighlight:
            "What I enjoyed most from the interview discussion was the collaborative, problem-solving mindset—turning real requirements into a simple, user-friendly solution.",
        };

  return new Response(JSON.stringify(payload), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
