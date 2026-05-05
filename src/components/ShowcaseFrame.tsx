import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface Props {
  themeClass: string;
  subdomain: string;
  title: string;
  children: React.ReactNode;
}

export const ShowcaseFrame = ({ themeClass, subdomain, title, children }: Props) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={themeClass}>
      <div className="bg-background text-foreground min-h-screen">
        <div className="bg-foreground/95 text-background text-xs">
          <div className="container flex items-center justify-between h-9">
            <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-3.5 w-3.5" /> Tillbaka till Tage's Hemsidor
            </Link>
            <span className="opacity-70 hidden sm:inline">Demo · {subdomain}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};