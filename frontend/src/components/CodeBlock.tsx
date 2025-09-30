"use client";

import { useState } from "react";

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
  filename?: string;
}

export default function CodeBlock({ language, code, title, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="my-6 rounded-xl border-2 border-warm-gray/30 overflow-hidden bg-dark-navy shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-dark-navy/80 border-b border-warm-gray/20">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-innovation-orange"></div>
            <div className="w-3 h-3 rounded-full bg-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-green"></div>
          </div>
          {(title || filename) && (
            <span className="text-sm font-semibold text-true-white">
              {title || filename}
            </span>
          )}
          <span className="text-xs text-warm-gray uppercase tracking-wider font-mono bg-warm-gray/10 px-2 py-1 rounded">
            {language}
          </span>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-warm-gray hover:text-true-white hover:bg-warm-gray/10 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="relative">
        <pre className="p-6 text-sm overflow-x-auto leading-relaxed">
          <code className="text-true-white font-mono">{code}</code>
        </pre>
      </div>
    </div>
  );
}