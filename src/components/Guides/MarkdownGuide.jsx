import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import GuideLayout from './GuideLayout';
import { getGuideContent } from '../../utils/markdownContent';

const MarkdownGuide = ({ fileName, interactiveComponents = {} }) => {
  const guideData = getGuideContent(fileName);

  // Custom renderers for interactive components
  const components = {
    // Custom blockquote renderer for callouts
    blockquote: ({ children }) => (
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 my-4">
        <div className="text-orange-300">
          {children}
        </div>
      </div>
    ),
    
    // Custom table renderer
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    ),
    
    th: ({ children }) => (
      <th className="border border-gray-600 bg-gray-800 px-4 py-2 text-left text-white font-bold">
        {children}
      </th>
    ),
    
    td: ({ children }) => (
      <td className="border border-gray-600 px-4 py-2 text-gray-300">
        {children}
      </td>
    ),

    // Custom checkbox renderer
    input: ({ type, checked, ...props }) => {
      if (type === 'checkbox') {
        return (
          <input
            type="checkbox"
            className="w-4 h-4 text-orange-500 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2 mr-3"
            defaultChecked={checked}
            {...props}
          />
        );
      }
      return <input type={type} {...props} />;
    },

    // Custom list item renderer for checklists
    li: ({ children, ...props }) => {
      // Check if this is a checkbox list item
      if (typeof children === 'object' && children.length && children[0]?.props?.type === 'checkbox') {
        return (
          <li className="flex items-start text-gray-300 py-1" {...props}>
            {children}
          </li>
        );
      }
      return (
        <li className="text-gray-300 mb-2" {...props}>
          {children}
        </li>
      );
    },

    // Custom heading renderers
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {children}
      </h1>
    ),
    
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-white mb-4 mt-8">
        {children}
      </h2>
    ),
    
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mb-3 mt-6">
        {children}
      </h3>
    ),

    // Custom paragraph renderer
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed">
        {children}
      </p>
    ),

    // Custom code block renderer
    code: ({ inline, children, ...props }) => {
      if (inline) {
        return (
          <code className="bg-gray-800 text-orange-400 px-2 py-1 rounded text-sm" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className="block bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto my-4" {...props}>
          {children}
        </code>
      );
    },

    // Custom link renderer
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-orange-400 hover:text-orange-300 underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    ),

    // Custom strong/bold renderer
    strong: ({ children }) => (
      <strong className="text-white font-bold">
        {children}
      </strong>
    ),

    // Custom emphasis/italic renderer
    em: ({ children }) => (
      <em className="text-orange-400 italic">
        {children}
      </em>
    ),

    // Custom image renderer with styling
    img: ({ src, alt, title, ...props }) => (
      <div className="my-6">
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg border border-gray-600"
          loading="lazy"
          {...props}
        />
        {alt && (
          <p className="text-center text-gray-400 text-sm mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),

    // Allow custom interactive components to be injected
    ...interactiveComponents
  };


  const { frontmatter, content } = guideData;

  return (
    <GuideLayout
      title={frontmatter.title}
      description={frontmatter.description}
      readTime={frontmatter.readTime}
    >
      <div className="space-y-6">
        <ReactMarkdown
          components={components}
          remarkPlugins={[remarkGfm]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </GuideLayout>
  );
};

export default MarkdownGuide;