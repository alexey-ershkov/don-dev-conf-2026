import { messages } from "./messages.js";

function t(key: string): string {
  return key;
}

export function App() {
  const label = "Привет";

  return (
    <main>
      <h1>{t(messages.submit)}</h1>
      <button>Отправить</button>
      <p>{label}</p>
    </main>
  );
}
