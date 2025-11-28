"use client";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.log("Error detected:", error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log error to service like Sentry, LogRocket, etc.
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
          <div className="max-w-md text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">😓</div>
              <h1 className="text-2xl font-bold mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-4">
                I apologize for the inconvenience. This error has been logged and I'll work on fixing it.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Go Back
              </button>
              <a
                href="/"
                className="w-full inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Home Page
              </a>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 p-4 bg-gray-800 rounded text-xs overflow-auto text-red-400">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}

            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-500 mb-2">
                If this problem persists, please contact me:
              </p>
              <div className="space-x-4 text-sm">
                <a
                  href="mailto:vikyarthya@gmail.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Email
                </a>
                <a
                  href="https://wa.me/6285326003004"
                  className="text-blue-400 hover:text-blue-300"
                >
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/viky-arthya-saputra-23a16b247"
                  className="text-blue-400 hover:text-blue-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;