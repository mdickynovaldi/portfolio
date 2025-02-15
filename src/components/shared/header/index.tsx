import { ModeToggle } from "../mode-toogle";
import { FloatingDockHeader } from "./FloatingDock";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  return (
    <header>
      <div className="fixed top-0 right-0 p-4 z-50">
        <ModeToggle />
        <LanguageSwitcher />
      </div>
      <FloatingDockHeader />
    </header>
  );
}
