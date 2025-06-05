import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { MainTemplate } from "../templates/MainTemplate";

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <Heading>A Técnica Pomodoro 🍅</Heading>
        <p className="mb-4">
          A Técnica Pomodoro é uma metodologia de produtividade criada por{" "}
          <span className="font-bold">Francesco Cirillo</span>, que consiste em
          dividir o trabalho em blocos de tempo (os famosos "Pomodoros")
          intercalados com pausas. O objetivo é manter o foco total por um
          período curto e garantir descansos para evitar o cansaço mental.
        </p>
        <img
          className="rounded-lg mb-6"
          src="https://placehold.co/1920x1080"
          alt=""
        />

        <h2 className="text-2xl mb-2 font-bold">
          Como funciona o Pomodoro tradicional?
        </h2>
        <ul className="pl-6 list-disc mb-6">
          <li className="mb-1">
            <span className="font-bold">1. Defina uma tarefa</span> que você
            deseja realizar.
          </li>
          <li className="mb-1">
            <span className="font-bold">2. Trabalhe nela por 25 minutos</span>{" "}
            sem interrupções.
          </li>
          <li className="mb-1">
            <span className="font-bold">
              3. Faça uma pausa curta de 5 minutos
            </span>
            .
          </li>
          <li className="mb-1">
            <span className="font-bold">
              4. A cada 4 ciclos, faça uma pausa longa
            </span>{" "}
            (geralmente 15 a 30 minutos).
          </li>
        </ul>

        <h2 className="text-2xl mb-2 font-bold">
          Mas no <span className="font-bold">Chronos Pomodoro</span> tem um
          diferencial 🚀
        </h2>
        <p className="leading-relaxed mb-4">
          Nosso app segue o conceito original, mas com algumas melhorias e
          personalizações pra deixar o processo ainda mais eficiente:
        </p>

        <h3 className="text-xl mb-2 font-semibold">
          ⚙️ Personalização do tempo
        </h3>
        <p className="leading-relaxed mb-4">
          Você pode configurar o tempo de foco, descanso curto e descanso longo
          do jeito que quiser! Basta acessar a{" "}
          <a className="text-red font-bold hover:underline" href="/settings">
            página de configurações
          </a>{" "}
          e ajustar os minutos como preferir.
        </p>

        <h3 className="text-xl mb-2 font-semibold">
          🔁 Ciclos organizados em sequência
        </h3>
        <p className="leading-relaxed mb-2">
          A cada ciclo completado, uma nova task é adicionada automaticamente ao
          seu histórico, e o app já sugere o próximo ciclo (foco ou descanso).
        </p>
        <p className="leading-relaxed mb-2 font-bold">Nosso padrão:</p>
        <ul className="pl-6 list-disc mb-4">
          <li className="mb-1">
            Ciclos <span className="font-bold">ímpares</span>: Trabalho (foco).
          </li>
          <li className="mb-1">
            Ciclos <span className="font-bold">pares</span>: Descanso curto.
          </li>
          <li className="mb-1">
            Ciclo <span className="font-bold">8</span>: Descanso longo especial,
            pra resetar o ciclo completo.
          </li>
        </ul>

        <h3 className="text-xl mb-2 font-semibold">
          🍅 Visualização dos ciclos
        </h3>
        <p className="leading-relaxed mb-2">
          Logo abaixo do cronômetro, você verá bolinhas coloridas representando
          os ciclos:
        </p>
        <ul className="pl-6 list-disc mb-2">
          <li className="mb-1">🟡 Amarelo: Ciclo de trabalho (foco).</li>
          <li className="mb-1">🟢 Verde: Descanso curto.</li>
          <li className="mb-1">
            🔵 Azul: Descanso longo (aparece a cada 8 ciclos).
          </li>
        </ul>
        <p className="leading-relaxed mb-4">
          Assim, você sempre sabe em que parte do processo está e o que vem a
          seguir. Não precisa mais anotar no papel ou ficar calculando de
          cabeça!
        </p>

        <h3 className="text-xl mb-2 font-semibold">📊 Histórico automático</h3>
        <p className="leading-relaxed mb-6">
          Todas as suas tarefas e ciclos concluídos ficam salvos no{" "}
          <a className="text-red font-bold hover:underline" href="/history">
            histórico
          </a>
          , com status de completas ou interrompidas. Assim, você consegue
          acompanhar sua evolução ao longo do tempo.
        </p>

        <h2 className="text-2xl mb-2 font-bold">
          Por que usar o Chronos Pomodoro?
        </h2>
        <ul className="pl-6 list-disc mb-2">
          <li className="mb-1">✅ Organize seu foco com clareza.</li>
          <li className="mb-1">✅ Trabalhe e descanse na medida certa.</li>
          <li className="mb-1">
            ✅ Personalize seus próprios ciclos e tempos.
          </li>
          <li className="mb-2">✅ Acompanhe seu histórico automaticamente.</li>
        </ul>
        <p className="leading-relaxed mb-4">
          <span className="font-bold">Pronto pra focar?</span> Bora lá{" "}
          <a className="text-red font-bold hover:underline" href="/">
            voltar para a página inicial
          </a>{" "}
          e iniciar seus Pomodoros! 🍅🚀
        </p>

        <p className="mb-6 italic">
          "Foco total, sem pressa, sem pausa, só vai!"💪🧘‍♂️
        </p>
      </Container>
    </MainTemplate>
  );
}
