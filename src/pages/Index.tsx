import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Upload, Link2, FileText, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [automationLink, setAutomationLink] = useState("");
  const { toast } = useToast();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      toast({
        title: "Currículos recebidos!",
        description: `${files.length} arquivo(s) carregado(s) com sucesso.`,
      });
    }
  };

  const handleAutomationLink = () => {
    if (automationLink.trim()) {
      toast({
        title: "Link de automação salvo!",
        description: "A integração foi configurada com sucesso.",
      });
      setAutomationLink("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Sistema de Gestão de Currículos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gerencie todos os currículos da sua empresa de forma simples e eficiente
          </p>
        </div>

        {/* Upload Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Manual Upload Card */}
          <Card className="p-8 gradient-card border border-border/50 shadow-medium hover:shadow-strong transition-base animate-slide-up">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-bounce-soft">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Inserir Currículos
              </h2>
              <p className="text-muted-foreground">
                Faça upload manual de arquivos PDF ou DOCX
              </p>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-base cursor-pointer bg-card/50">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Clique para selecionar arquivos
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ou arraste e solte aqui
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    PDF, DOC, DOCX até 10MB
                  </p>
                </label>
              </div>

              <Button className="w-full" size="lg">
                <Upload className="w-4 h-4 mr-2" />
                Carregar Currículos
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Currículos são processados automaticamente e organizados por categoria</p>
              </div>
            </div>
          </Card>

          {/* Automation Link Card */}
          <Card className="p-8 gradient-card border border-border/50 shadow-medium hover:shadow-strong transition-base animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
                <Link2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Automação
              </h2>
              <p className="text-muted-foreground">
                Conecte uma fonte externa para receber currículos automaticamente
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Link da Fonte de Automação
                </label>
                <Input
                  placeholder="https://exemplo.com/api/curriculos"
                  value={automationLink}
                  onChange={(e) => setAutomationLink(e.target.value)}
                  className="bg-card/50"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Cole o webhook ou API endpoint
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Descrição (opcional)
                </label>
                <Textarea
                  placeholder="Ex: LinkedIn Jobs, Site de Carreiras..."
                  className="bg-card/50 min-h-[80px]"
                />
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={handleAutomationLink}
              >
                <Link2 className="w-4 h-4 mr-2" />
                Conectar Fonte
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Integre com plataformas como LinkedIn, Indeed ou seu próprio sistema de RH</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card className="p-6 gradient-card border border-border/50 text-center shadow-soft hover:shadow-medium transition-base">
            <div className="text-4xl font-bold text-primary mb-2">127</div>
            <div className="text-sm text-muted-foreground">Currículos Totais</div>
          </Card>
          <Card className="p-6 gradient-card border border-border/50 text-center shadow-soft hover:shadow-medium transition-base">
            <div className="text-4xl font-bold text-primary mb-2">23</div>
            <div className="text-sm text-muted-foreground">Novos Esta Semana</div>
          </Card>
          <Card className="p-6 gradient-card border border-border/50 text-center shadow-soft hover:shadow-medium transition-base">
            <div className="text-4xl font-bold text-primary mb-2">8</div>
            <div className="text-sm text-muted-foreground">Favoritos</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
