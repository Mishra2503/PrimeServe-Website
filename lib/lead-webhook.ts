// GoHighLevel (LeadConnector) inbound webhook.
// Every lead form on the site posts here so the lead lands in our CRM,
// where the configured automation creates the contact/opportunity.
export const LEAD_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/MG28SRM0GgCM4Hk44u3T/webhook-trigger/7495767f-676a-4c59-b4ac-45add61d9e3a";

export type LeadPayload = Record<string, string | undefined>;

/**
 * Fire the lead to GoHighLevel. Resolves to true on success, false on failure.
 * Never throws - callers can show the success state regardless so the user
 * is never blocked by a network/CORS hiccup.
 */
export async function submitLead(
  source: string,
  fields: LeadPayload
): Promise<boolean> {
  const payload = {
    ...fields,
    source,
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch (err) {
    console.error("Lead webhook submission failed:", err);
    return false;
  }
}
