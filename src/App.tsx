import { useEffect } from "react";
import { Widget } from "./components/Widget";
import { api } from "./lib/api";

export function App() {
  // Acorda a API (plano gratuito hiberna após inatividade) antes do primeiro envio
  useEffect(() => {
    api.get('health').catch(() => {});
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Feed<span className="text-brand-300">get</span>
        </h1>
        <p className="max-w-md text-zinc-400 leading-relaxed">
          Widget de feedback com captura de tela. Clique no botão
          <span className="text-brand-300"> Feedback</span> no canto inferior direito para testar.
        </p>
        <div className="flex gap-4 text-sm">
          <a className="underline underline-offset-4 text-zinc-300 hover:text-zinc-100" href="https://github.com/DaviDeAlmeida/nlw-return-impulse-web">
            Código do front-end
          </a>
          <a className="underline underline-offset-4 text-zinc-300 hover:text-zinc-100" href="https://github.com/DaviDeAlmeida/nlw-return-impulse-server">
            Código da API
          </a>
        </div>
      </main>

      <Widget />
    </>
  )
}
