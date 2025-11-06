import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, Star, Grid3x3, List, Search, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface Resume {
  id: number;
  name: string;
  age: number;
  city: string;
  state: string;
  position: string;
  experience: string;
  favorite: boolean;
}

const mockResumes: Resume[] = [
  { id: 1, name: "Muriel Costa", age: 19, city: "São Paulo", state: "SP", position: "CAIXA", experience: "2 anos", favorite: false },
  { id: 2, name: "Matheus de Assis", age: 21, city: "Rio de Janeiro", state: "RJ", position: "CAIXA", experience: "1 ano", favorite: false },
  { id: 3, name: "Ana Silva", age: 25, city: "Belo Horizonte", state: "MG", position: "FISCAL", experience: "3 anos", favorite: true },
  { id: 4, name: "João Santos", age: 28, city: "Curitiba", state: "PR", position: "GERENTE", experience: "5 anos", favorite: false },
  { id: 5, name: "Maria Oliveira", age: 23, city: "Porto Alegre", state: "RS", position: "CAIXA", experience: "1.5 anos", favorite: true },
  { id: 6, name: "Pedro Lima", age: 30, city: "Salvador", state: "BA", position: "SUPERVISOR", experience: "4 anos", favorite: false },
];

const Curriculos = () => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [filter, setFilter] = useState<"all" | "favorites">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [resumes, setResumes] = useState(mockResumes);

  const filteredResumes = resumes.filter(resume => {
    const matchesFilter = filter === "all" || (filter === "favorites" && resume.favorite);
    const matchesSearch = resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resume.position.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setResumes(resumes.map(r => r.id === id ? { ...r, favorite: !r.favorite } : r));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">Currículos</h1>
          <p className="text-muted-foreground">Gerencie e visualize todos os currículos recebidos</p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center animate-slide-up">
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="transition-base"
            >
              Todos
            </Button>
            <Button
              variant={filter === "favorites" ? "default" : "outline"}
              onClick={() => setFilter("favorites")}
              className="transition-base"
            >
              Favoritos
            </Button>
          </div>

          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full md:w-64"
              />
            </div>
            
            <div className="flex gap-1 bg-secondary/50 rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "transition-base",
                  viewMode === "grid" && "bg-card shadow-soft"
                )}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("table")}
                className={cn(
                  "transition-base",
                  viewMode === "table" && "bg-card shadow-soft"
                )}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredResumes.map((resume, index) => (
              <div
                key={resume.id}
                className="gradient-card rounded-xl p-5 shadow-soft hover:shadow-medium transition-base cursor-pointer animate-fade-in-scale border border-border/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{resume.name}</h3>
                    <p className="text-xs text-muted-foreground">{resume.age} anos</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(resume.id)}
                    className="transition-base hover:scale-110"
                  >
                    <Star
                      className={cn(
                        "w-5 h-5 transition-base",
                        resume.favorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      )}
                    />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">📍</span>
                    <span className="text-foreground">{resume.city}, {resume.state}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">💼</span>
                    <span className="text-foreground font-medium">{resume.position}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">⏱️</span>
                    <span className="text-foreground">{resume.experience}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full transition-base hover:bg-primary hover:text-primary-foreground"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Currículo
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === "table" && (
          <div className="bg-card rounded-xl shadow-soft border border-border overflow-hidden animate-fade-in">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/30">
                  <TableHead className="font-semibold">Nome</TableHead>
                  <TableHead className="font-semibold">Idade</TableHead>
                  <TableHead className="font-semibold">Cidade</TableHead>
                  <TableHead className="font-semibold">Cargo</TableHead>
                  <TableHead className="font-semibold">Experiência</TableHead>
                  <TableHead className="font-semibold text-center">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredResumes.map((resume) => (
                  <TableRow key={resume.id} className="hover:bg-secondary/20 transition-base">
                    <TableCell className="font-medium">{resume.name}</TableCell>
                    <TableCell>{resume.age} anos</TableCell>
                    <TableCell>{resume.city}, {resume.state}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                        {resume.position}
                      </span>
                    </TableCell>
                    <TableCell>{resume.experience}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(resume.id)}
                          className="hover:bg-yellow-400/10"
                        >
                          <Star
                            className={cn(
                              "w-4 h-4 transition-base",
                              resume.favorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            )}
                          />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        {filteredResumes.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">Nenhum currículo encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Curriculos;
