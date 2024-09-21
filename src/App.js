import { Article } from "./Article/Article";

function App() {
  const articleContent = `
  <p>subtitle</p>
  <p>abc</p>
  <a href="https://google.com/">Google link</a>
  `;
  return (
    <main>
      <Article
        title="New article"
        author="John"
        content={articleContent}
        isSponsored
      />
    </main>
  );
}

export default App;
