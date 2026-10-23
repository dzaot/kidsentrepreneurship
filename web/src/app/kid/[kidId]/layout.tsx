import { KidTabBar } from "@/components/kid/KidTabBar";

// The kid world: squash-and-stretch buttons and the floating tab bar on every kid screen.
export default async function KidLayout({ children, params }: { children: React.ReactNode; params: Promise<{ kidId: string }> }) {
  const { kidId } = await params;
  return (
    <div className="kid-world min-h-dvh">
      {children}
      <KidTabBar kidId={kidId} />
    </div>
  );
}
