import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-mosaic-navy flex flex-col items-center justify-center p-6 text-center z-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#071d3a] via-[#020b16] to-[#01060d] -z-10" />
          
          <h1 className="font-serif text-5xl md:text-6xl text-mosaic-gold mb-6 tracking-widest" style={{ textShadow: '0 0 20px rgba(217,164,65,0.3)' }}>
            SYSTEM ERROR
          </h1>
          <p className="font-sans text-gray-400 mb-10 max-w-md leading-relaxed tracking-wider">
            We apologize, but an unexpected error has occurred in the application. Please return to the homepage to continue.
          </p>
          <button 
            onClick={() => {
              window.location.hash = '#/';
              window.location.reload();
            }}
            className="px-8 py-3 border border-mosaic-gold/50 text-mosaic-gold hover:bg-mosaic-gold hover:text-mosaic-navy transition-all duration-300 rounded-full tracking-[0.2em] text-sm uppercase"
          >
            Return Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
