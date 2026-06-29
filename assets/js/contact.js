/* Contact form → FormSubmit.co (no backend, no signup).
   First submission emails a one-time activation link to the inbox; after it's
   confirmed every message arrives straight to Gmail. On any network failure we
   fall back to opening the visitor's own mail app.
   (Kept in its own file so the site can run a strict Content-Security-Policy with
    no inline scripts.) */
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;
  const ENDPOINT = "https://formsubmit.co/ajax/zaoursus2003@gmail.com";
  const val = (n) => { const el = form.elements[n]; return el ? el.value : ""; };
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const T = window.URSUS ? window.URSUS.t : (k) => k;
    const btn = form.querySelector("button[type=submit]");
    status.textContent = "…"; status.className = "form-status"; btn.disabled = true;
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form)))
      });
      const json = await res.json();
      if (json.success === true || json.success === "true") {
        status.textContent = T("cont.fOk"); status.className = "form-status ok"; form.reset();
      } else throw new Error(json.message || "failed");
    } catch (err) {
      const body = encodeURIComponent(`${val("name")} (${val("contact")}):\n\n${val("message")}`);
      window.location.href = `mailto:zaoursus2003@gmail.com?subject=Заявка с сайта&body=${body}`;
      status.textContent = T("cont.fErr"); status.className = "form-status err";
    } finally { btn.disabled = false; }
  });
})();
