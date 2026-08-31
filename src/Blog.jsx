import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Terminal, ArrowLeft, FileText } from 'lucide-react';
import { blogPosts } from './blogPosts';

const escapeHtml = (text) =>
  text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatInlineMarkdown = (text) => {
  let html = escapeHtml(text);
  const linkTokens = [];

  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, (match, label, url) => {
    if (url.includes('localhost:4173/Portfolio_Website') || url.includes('%3Ca%20href%3D')) {
      return label;
    }

    const token = `__MD_LINK_${linkTokens.length}__`;
    linkTokens.push(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-emerald-300 underline underline-offset-2 decoration-emerald-400/80 hover:text-emerald-200">${label}</a>`);
    return token;
  });

  html = html.replace(/(^|[^"'])((https?:\/\/[^\s<>"']+))/g, (match, prefix, url) => {
    if (url.includes('localhost:4173/Portfolio_Website') || url.includes('%3Ca%20href%3D')) {
      return match;
    }

    const token = `__MD_URL_${linkTokens.length}__`;
    linkTokens.push(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-emerald-300 underline underline-offset-2 decoration-emerald-400/80 hover:text-emerald-200">${url}</a>`);
    return `${prefix}${token}`;
  });

  html = html.replace(/`([^`]+)`/g,
    '<code class="bg-black/50 text-emerald-400 px-1.5 py-0.5 rounded text-sm font-mono border border-white/10">$1</code>');

  html = html.replace(/\*\*(.*?)\*\*/g,
    '<strong class="text-white font-bold">$1</strong>');

  html = html.replace(/\*(.*?)\*/g,
    '<em class="text-emerald-300/90">$1</em>');

  html = html.replace(/__MD_LINK_(\d+)__/g, (_, index) => linkTokens[Number(index)] || '');
  html = html.replace(/__MD_URL_(\d+)__/g, (_, index) => linkTokens[Number(index)] || '');

  return html;
};

const renderMarkdownBlock = (block, idx) => {
  const trimmed = block.trim();

  if (!trimmed) return null;

  if (trimmed.startsWith('```')) {
    const languageMatch = trimmed.match(/^```(\w+)?/);
    const language = languageMatch && languageMatch[1] ? languageMatch[1] : 'bash';
    const codeMatch = trimmed.match(/^```(?:\w+)?\n([\s\S]*?)\n```$/);
    const code = codeMatch ? codeMatch[1].trim() : trimmed.replace(/^```[\s\S]*?\n/, '').replace(/\n```$/, '').trim();

    return (
      <div key={idx} className="mb-6 overflow-hidden rounded-xl border border-emerald-500/20 bg-[#0b1120] shadow-[0_0_0_1px_rgba(16,185,129,0.08)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#111827] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-slate-400 font-mono">{language}</span>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-6 text-emerald-300 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  if (trimmed.startsWith('## ')) {
    return <h2 key={idx} className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{trimmed.replace('## ', '')}</h2>;
  }

  if (trimmed.startsWith('### ')) {
    return <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-4 tracking-tight">{trimmed.replace('### ', '')}</h3>;
  }

  if (trimmed.startsWith('---')) {
    return <hr key={idx} className="border-white/10 my-12" />;
  }

  if (/^(?:\*|-)\s+/.test(trimmed)) {
    const items = trimmed.split(/\n/).filter(Boolean).map((line) => line.replace(/^(?:\*|- )\s*/, '').trim());
    return (
      <ul key={idx} className="mb-6 list-disc space-y-3 pl-6 text-slate-300">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
        ))}
      </ul>
    );
  }

  if (/^\d+\.\s+/.test(trimmed)) {
    const items = trimmed.split(/\n/).filter(Boolean).map((line) => line.replace(/^\d+\.\s*/, '').trim());
    return (
      <ol key={idx} className="mb-6 list-decimal space-y-3 pl-6 text-slate-300">
        {items.map((item, itemIdx) => (
          <li key={itemIdx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
        ))}
      </ol>
    );
  }

  return <p key={idx} className="mb-6" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }} />;
};

const Blog = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  // Render specific article
  if (postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
      return (
        <div className="w-full max-w-4xl mx-auto">
          <button onClick={() => navigate('/blog')} className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-10 font-mono text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK_TO_LOGS
          </button>

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">{post.title}</h1>

          {/* Image is now below the title */}
          {post.image && (
            <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )}

          {/* Tags and Date are now below the image */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-mono mb-10 pb-10 border-b border-white/10">
            <span className="flex items-center gap-1.5">{post.date}</span>
            <div className="flex gap-2 ml-auto">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 leading-loose text-lg font-sans">
            {post.content.split(/\n\n+/).map((block, idx) => renderMarkdownBlock(block, idx))}
          </div>
        </div>
      );
    }
  }

  // Render list of blogs
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="text-emerald-400" size={32} />
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight">
          Terminal_Log
          <span className="text-emerald-500 animate-pulse ml-1 inline-block">_</span>
        </h1>
      </div>

      <p className="text-slate-400 text-lg mb-10 max-w-2xl">
        Thoughts, insights, and technical write-ups on cybersecurity, distributed systems, and AI engineering.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.id}`} className="block group text-left w-full no-underline">
            <div className="h-full rounded-xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden backdrop-blur-sm flex flex-col shadow-lg">
              
              {/* Subtle Glow inside card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-500"></div>

              {/* Title First */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors relative z-10">{post.title}</h3>
              
              {/* Image Second */}
              {post.image && (
                <div className="mb-6 rounded-lg overflow-hidden border border-white/10 relative z-10">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}

              {/* Tags Third */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow relative z-10">{post.snippet}</p>

              <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono relative z-10">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">{post.date}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-500 group-hover:translate-x-1 transition-transform">
                  Read Log <ChevronRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;