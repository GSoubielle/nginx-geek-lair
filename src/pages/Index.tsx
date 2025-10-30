import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, TrendingUp, Code, Server, Gauge } from "lucide-react";
import heroImage from "@/assets/hero-nginx.jpg";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Blazing Fast",
      description: "Event-driven architecture delivers unmatched performance and low resource consumption"
    },
    {
      icon: Shield,
      title: "Battle-Tested Security",
      description: "Industry-standard SSL/TLS, rate limiting, and access control out of the box"
    },
    {
      icon: TrendingUp,
      title: "Infinite Scalability",
      description: "Handle millions of concurrent connections with minimal memory footprint"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Simple, readable config syntax that makes complex setups straightforward"
    },
    {
      icon: Server,
      title: "Versatile Architecture",
      description: "Web server, reverse proxy, load balancer, and HTTP cache in one package"
    },
    {
      icon: Gauge,
      title: "Production Ready",
      description: "Powers 30%+ of the world's busiest websites with proven reliability"
    }
  ];

  const configExample = `server {
    listen 443 ssl http2;
    server_name example.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    location /static {
        alias /var/www/static;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full text-primary text-sm font-mono">
              $ nginx -v
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              High Performance.<br />Low Overhead.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
              The web server that doesn't compromise. Built by engineers, for engineers who demand excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5 hover:border-primary">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono">400M+</div>
              <div className="text-muted-foreground">Websites Powered</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent font-mono">10K+</div>
              <div className="text-muted-foreground">Requests/Second</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary font-mono">99.99%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Nginx?</h2>
            <p className="text-muted-foreground text-lg">Built for the modern web infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Simple. Powerful. Elegant.</h2>
              <p className="text-muted-foreground text-lg">Configuration that makes sense</p>
            </div>
            
            <Card className="p-8 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-sm text-muted-foreground font-mono">nginx.conf</span>
              </div>
              
              <pre className="overflow-x-auto">
                <code className="text-sm font-mono text-foreground/90 leading-relaxed">
                  {configExample}
                </code>
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to level up your infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join millions of developers who trust nginx for their production workloads
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20">
              Install Nginx Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 nginx. Built for performance enthusiasts.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="hover:text-primary transition-colors">Community</a>
              <a href="#" className="hover:text-primary transition-colors">Blog</a>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
