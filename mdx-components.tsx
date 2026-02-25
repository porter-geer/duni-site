import type { MDXComponents } from "mdx/types";

/**
 * Root MDX components file.
 * Next.js resolves this before falling back to @mdx-js/react,
 * preventing the React 19 / Turbopack createContext incompatibility.
 * Our MDX files are pure data-export modules so no custom components are needed.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
