import { deleteAccount } from "@/app/actions";
import { ParentHeader } from "@/components/ParentHeader";
import { requireFamily } from "@/lib/auth";

export const metadata = { title: "Settings" };

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const family = await requireFamily();
  const { error } = await searchParams;
  return (
    <>
      <ParentHeader />
      <main id="main" className="parent-zone mx-auto max-w-2xl px-4 py-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="card mt-6 p-5">
          <p><b>Email:</b> {family.email}</p>
          <p><b>Currency:</b> {family.currency} (from your country)</p>
          <p className="text-sm text-ink-soft">Consent given {new Date(family.consent.at).toLocaleDateString()}</p>
        </div>
        <form action={deleteAccount} className="card mt-6 space-y-3 border-coral/40 p-5">
          <h2 className="text-xl font-bold text-coral-dark">Delete everything</h2>
          <p className="text-sm text-ink-soft">
            Permanently deletes your account, every kid profile, shop, file and sale record. Live shops go offline right away. This can&apos;t be undone.
          </p>
          <input name="confirm" className="input" placeholder='Type DELETE to confirm' aria-label='Type DELETE to confirm' />
          {error && <p className="text-sm font-bold text-coral-dark">Type DELETE in capitals to confirm.</p>}
          <button className="btn btn-coral">Delete my account and data</button>
        </form>
      </main>
    </>
  );
}
