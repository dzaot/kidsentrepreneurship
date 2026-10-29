import "server-only";

// There is no email provider during the pilot. Anything that wants to email a parent calls this,
// and falls back to a manual step when it returns false. Plug a real sender in here later.
export async function sendEmail(message: { to: string; subject: string; text: string }): Promise<boolean> {
  console.info(`[email] no provider configured, not sent: "${message.subject}"`);
  return false;
}
