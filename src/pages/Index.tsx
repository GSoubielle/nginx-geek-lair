import { Card } from "@/components/ui/card";
import { CheckCircle2, Server, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-nginx.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <Card className="relative max-w-2xl w-full p-12 bg-card/95 backdrop-blur-sm border-primary/30 shadow-2xl shadow-primary/10">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <CheckCircle2 className="w-24 h-24 text-primary relative animate-in zoom-in duration-500" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
              Connection Successful
            </h1>
            <p className="text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              You have successfully reached
            </p>
          </div>

          {/* Instance Badge */}
          <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border-2 border-primary rounded-lg">
              <Server className="w-8 h-8 text-primary" />
              <span className="text-4xl font-bold font-mono text-primary">Instance 1</span>
            </div>
          </div>

          {/* Status Info */}
          <div className="pt-8 border-t border-border animate-in fade-in duration-700 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Wifi className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm">Status: <span className="text-primary">Active</span></span>
              </div>
              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Server className="w-5 h-5 text-accent" />
                <span className="font-mono text-sm">Server: <span className="text-foreground">nginx</span></span>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="pt-6">
            <p className="text-sm text-muted-foreground font-mono">
              Load balancing is working correctly
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
