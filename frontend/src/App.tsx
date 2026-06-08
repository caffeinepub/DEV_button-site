import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'button-site'
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Button Site
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Welcome to the
              <span className="block text-primary mt-2">Button Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              A simple, elegant demonstration of interactive design. Click the button below to see it in action.
            </p>
          </div>

          {/* Button Section */}
          <div className="space-y-6 pt-4">
            <Button
              onClick={handleClick}
              size="lg"
              className="text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Click Me
            </Button>

            {/* Feedback Section */}
            <div className="min-h-[80px] flex flex-col items-center justify-center space-y-2">
              {showMessage && (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="text-2xl font-semibold text-primary">
                    Great job! 🎉
                  </p>
                </div>
              )}
              <p className="text-lg text-muted-foreground">
                {clickCount === 0 ? (
                  'The button is waiting for you...'
                ) : (
                  <>
                    You've clicked the button{' '}
                    <span className="font-bold text-foreground">{clickCount}</span>{' '}
                    {clickCount === 1 ? 'time' : 'times'}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Stats Card */}
          {clickCount > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Clicks</p>
                    <p className="text-3xl font-bold text-primary">{clickCount}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p className="text-3xl font-bold text-foreground">Active</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Engagement</p>
                    <p className="text-3xl font-bold text-accent-foreground">
                      {clickCount > 10 ? 'High' : clickCount > 5 ? 'Medium' : 'Low'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Button Site. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              Built with{' '}
              <Heart className="w-4 h-4 text-primary fill-primary" />
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
