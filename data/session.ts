import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type SessionMetadata = {
  title: string;
  sessionNumber: number;
  emoji: string;
  description: string;
  date?: string;
  duration?: string;
  difficulty?: string;
  tags?: string[];
  isLive?: boolean;
  resourcesUnlocked?: boolean;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getSession(sessionId: string) {
  const filePath = path.join("content", "sessions", `${sessionId}.mdx`);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as SessionMetadata,
    sessionId,
  };
}

async function getAllSessions(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let sessionId = path.basename(file, path.extname(file));
      let sessionData = await getSession(sessionId);
      return sessionData;
    })
  ).then(sessions => sessions.filter(Boolean)); // Filter out null values
}

export async function getSessionPosts() {
  return getAllSessions(path.join(process.cwd(), "content", "sessions"));
}

export async function getSessionByNumber(sessionNumber: string | number) {
  const sessionId = `session${sessionNumber}`;
  return getSession(sessionId);
}
