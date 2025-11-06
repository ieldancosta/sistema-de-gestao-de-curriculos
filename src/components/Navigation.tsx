import { NavLink } from "@/components/NavLink";
import { FileText, Home, Search, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">RH Manager</span>
            </div>
            
            <div className="flex gap-2">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 flex items-center gap-2"
                activeClassName="bg-secondary text-foreground shadow-soft"
              >
                <Home className="w-4 h-4" />
                Início
              </NavLink>
              <NavLink
                to="/curriculos"
                className="px-4 py-2 rounded-lg text-sm font-medium transition-base text-muted-foreground hover:text-foreground hover:bg-secondary/50 flex items-center gap-2"
                activeClassName="bg-secondary text-foreground shadow-soft"
              >
                <FileText className="w-4 h-4" />
                Currículos
              </NavLink>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-base">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-base">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
