import { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { AuthDialog } from "../../../shared/auth/AuthDialog";
import { auth } from "../../../shared/auth/auth-client";

/** Shows a shared sign-in action when the current visitor is signed out. */
export function LoginButton({ label = "登录" }: { label?: string }) {
  const [email, setEmail] = useState<string | null>();
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    void auth.currentUser()
      .then((user) => setEmail(user?.email ?? null))
      .catch(() => setEmail(null));
    return auth.onChange((_event, session) => setEmail(session?.user.email ?? null));
  }, []);

  if (email === undefined || email) return null;

  return (
    <>
      <button className="secondary-command sign-in-button" onClick={() => setDialogOpen(true)}>
        <LogIn size={16} /> {label}
      </button>
      <AuthDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSignedIn={() => void auth.currentUser().then((user) => setEmail(user?.email ?? null))}
      />
    </>
  );
}