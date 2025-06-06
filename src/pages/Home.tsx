import Present1Png from "../assets/presente-1.png";
import Present2Png from "../assets/presente-2.png";
import Present3Png from "../assets/presente-3.png";
import PreteritoPerfeitoIndicativo1Png from "../assets/preterito-perfeito-indicativo-1.png";
import PreteritoImperfeitoIndicativo1Png from "../assets/preterito-imperfeito-indicativo-1.png";
import PreteritoImperfeitoIndicativo2Png from "../assets/preterito-imperfeito-indicativo-2.png";
import PreteritoPerfeitoCompostoIndicativo1Png from "../assets/preterito-perfeito-composto-indicativo-1.png";
import FuturoIndicativo1Png from "../assets/futuro-do-indicativo-1.png";
import ImperfeitoConjuntivo1Png from "../assets/imperfeito-conjuntivo-1.png";
import PresenteConjuntivo1Png from "../assets/presente-conjuntivo-1.png";
import FuturoConjuntivo1Png from "../assets/futuro-conjuntivo-1.png";
import Card from "../components/Card";
import SampleSentence from "../components/SampleSentence";
import Tab from "../components/Tab";
import VerbTable from "../components/VerbTable";
import Tabs from "../components/Tabs";
import Tag from "../components/Tag";

function Home() {
  return (
    <div>
      <div className="bg-gray-800 text-white">
        <div className="container mx-auto my-8">
          <div className="mb-4">
            <h1 className="text-2xl md:text-4l font-bold text-white px-2 md:px-0">
              Guide to <span>Portuguese</span> tenses
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto my-8">
          <div className="bg-gray-100 rounded-lg p-2 md:p-8">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col gap-4">
                <Card title="Presente do Indicativo" tag="Fact / Truth">
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Truth or fact</div>
                      <div className="flex self-center justify-end">
                        <img src={Present3Png} className="w-4/5" />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Future actions</div>
                      <div className="flex self-center justify-end">
                        <img src={Present2Png} className="w-4/5" />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Repeated actions</div>
                      <div className="flex self-center justify-end">
                        <img src={Present1Png} className="w-4/5" />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The presente do indicativo tense in Portuguese is used
                          to describe actions or states happening in the
                          present, habitual actions, general truths, or facts.
                        </p>
                        <p>
                          It can also be used to express future events in
                          certain contexts, especially when referring to
                          scheduled or planned activities.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>Expressing general truths or facts</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "A água " },
                            { type: "highlight", text: "ferve" },
                            { type: "normal", text: " a 100 graus Celsius" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "Water boils at 100 degrees Celsius",
                            },
                          ]}
                        />
                        <li>Expressing future actions in informal contexts</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Amanhã " },
                            { type: "highlight", text: "vou" },
                            { type: "normal", text: " ao médico" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "Tomorrow, I am going to the doctor",
                            },
                          ]}
                        />
                        <li>Describing repeated or habitual actions</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Ele " },
                            { type: "highlight", text: "corre" },
                            { type: "normal", text: " todas as manhãs" },
                          ]}
                          english={[
                            { type: "normal", text: "He runs every morning" },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "o" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "as" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "a" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "amos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "am" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "o" },
                                      ],
                                      two: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "e" },
                                      ],
                                      four: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "o" },
                                      ],
                                      two: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "e" },
                                      ],
                                      four: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "imos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    <span className="font-bold">eu</span> always
                                    ends in{" "}
                                    <span className="font-bold">-o</span>
                                  </li>
                                  <li>
                                    <span className="font-bold">-ar verbs</span>{" "}
                                    use{" "}
                                    <span className="font-bold">
                                      -a based endings
                                    </span>{" "}
                                    except for the{" "}
                                    <span className="font-bold">eu</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col gap-8">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "sou" }],
                                      two: [{ type: "highlight", text: "és" }],
                                      three: [{ type: "highlight", text: "é" }],
                                      four: [
                                        { type: "highlight", text: "somos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "são" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "estar" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "estou" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "estás" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "está" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "estamos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "estão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ter" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "tenho" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "tens" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "tem" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "temos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "têm" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "dar" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "dou" }],
                                      two: [{ type: "highlight", text: "dás" }],
                                      three: [
                                        { type: "highlight", text: "dá" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "damos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "dão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ver" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "vejo" },
                                      ],
                                      two: [{ type: "highlight", text: "vês" }],
                                      three: [
                                        { type: "highlight", text: "vê" },
                                      ],
                                      four: [{ type: "normal", text: "vemos" }],
                                      five: [
                                        { type: "highlight", text: "veem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ler" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "leio" },
                                      ],
                                      two: [{ type: "highlight", text: "lês" }],
                                      three: [
                                        { type: "highlight", text: "lê" },
                                      ],
                                      four: [{ type: "normal", text: "lemos" }],
                                      five: [
                                        { type: "highlight", text: "leem" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "fazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "faço" },
                                      ],
                                      two: [{ type: "normal", text: "fazes" }],
                                      three: [
                                        { type: "highlight", text: "faz" },
                                      ],
                                      four: [
                                        { type: "normal", text: "fazemos" },
                                      ],
                                      five: [{ type: "normal", text: "fazem" }],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "dizer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "digo" },
                                      ],
                                      two: [{ type: "normal", text: "dizes" }],
                                      three: [
                                        { type: "highlight", text: "diz" },
                                      ],
                                      four: [
                                        { type: "normal", text: "dizemos" },
                                      ],
                                      five: [{ type: "normal", text: "dizem" }],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "trazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "trago" },
                                      ],
                                      two: [{ type: "normal", text: "tazes" }],
                                      three: [
                                        { type: "highlight", text: "traz" },
                                      ],
                                      four: [
                                        { type: "normal", text: "trazemos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "trazem" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "saber" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "sei" }],
                                      two: [{ type: "normal", text: "sabes" }],
                                      three: [{ type: "normal", text: "sabe" }],
                                      four: [
                                        { type: "normal", text: "sabemos" },
                                      ],
                                      five: [{ type: "normal", text: "sabem" }],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "poder" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "posso" },
                                      ],
                                      two: [{ type: "normal", text: "podes" }],
                                      three: [{ type: "normal", text: "pode" }],
                                      four: [
                                        { type: "normal", text: "podemos" },
                                      ],
                                      five: [{ type: "normal", text: "podem" }],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "querer" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "normal", text: "quero" }],
                                      two: [{ type: "normal", text: "queres" }],
                                      three: [
                                        { type: "highlight", text: "quer" },
                                      ],
                                      four: [
                                        { type: "normal", text: "queremos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "querem" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "pôr" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "ponho" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "pões" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "põe" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "pomos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "põem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "pedir" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "peço" },
                                      ],
                                      two: [{ type: "normal", text: "pedes" }],
                                      three: [{ type: "normal", text: "pede" }],
                                      four: [
                                        { type: "normal", text: "pedimos" },
                                      ],
                                      five: [{ type: "normal", text: "pedem" }],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "ouvir" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "ouço" },
                                      ],
                                      two: [{ type: "normal", text: "ouves" }],
                                      three: [{ type: "normal", text: "ouve" }],
                                      four: [
                                        { type: "normal", text: "ouvimos" },
                                      ],
                                      five: [{ type: "normal", text: "ouvem" }],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "sair" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "saio" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "sais" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "sai" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "saímos" },
                                      ],
                                      five: [{ type: "normal", text: "saem" }],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ir" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "vou" }],
                                      two: [
                                        { type: "highlight", text: "vais" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "vai" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "vamos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "vão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "vir" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "venho" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "vens" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "vem" },
                                      ],
                                      four: [{ type: "normal", text: "vimos" }],
                                      five: [
                                        { type: "highlight", text: "vêm" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card
                  title="Pretérito Perfeito do Indicativo"
                  tag="Fact / Truth"
                >
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Completed action</div>
                      <div className="flex self-center justify-end">
                        <img
                          src={PreteritoPerfeitoIndicativo1Png}
                          className="w-4/5"
                        />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The pretérito perfeito do indicativo tense in
                          Portuguese is used to describe actions that have
                          occurred in the past.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>
                          Describing an action that happened and completed
                        </li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Eu " },
                            { type: "highlight", text: "bebi" },
                            { type: "normal", text: " água" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I drank water",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ei" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "aste" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ou" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ámos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "aram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "i" },
                                      ],
                                      two: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "este" },
                                      ],
                                      three: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "eu" },
                                      ],
                                      four: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "eram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "i" },
                                      ],
                                      two: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "iste" },
                                      ],
                                      three: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "iu" },
                                      ],
                                      four: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "imos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "iram" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    <span className="font-bold">eu</span> have
                                    different endings to the other pronouns
                                  </li>
                                  <li>
                                    <span className="font-bold">
                                      other pronouns
                                    </span>{" "}
                                    follow the letter of their ending (a, e, i)
                                    with the rest of the patterns shown above
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col gap-8">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "fui" }],
                                      two: [
                                        { type: "highlight", text: "foste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "foi" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "fomos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "foram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ir" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "fui" }],
                                      two: [
                                        { type: "highlight", text: "foste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "foi" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "fomos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "foram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ter" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "tive" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "tiveste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "teve" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "tivemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "tiveram" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estar" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "estive" },
                                      ],
                                      two: [
                                        {
                                          type: "highlight",
                                          text: "estiveste",
                                        },
                                      ],
                                      three: [
                                        { type: "highlight", text: "estive" },
                                      ],
                                      four: [
                                        {
                                          type: "highlight",
                                          text: "estivemos",
                                        },
                                      ],
                                      five: [
                                        {
                                          type: "highlight",
                                          text: "estiveram",
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "dizer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "disse" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "disseste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "disse" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "dissemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "disseram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "trazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "trouxe" },
                                      ],
                                      two: [
                                        {
                                          type: "highlight",
                                          text: "trouxeste",
                                        },
                                      ],
                                      three: [
                                        { type: "highlight", text: "trouxe" },
                                      ],
                                      four: [
                                        {
                                          type: "highlight",
                                          text: "trouxemos",
                                        },
                                      ],
                                      five: [
                                        {
                                          type: "highlight",
                                          text: "trouxeram",
                                        },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "fazer" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "fiz" }],
                                      two: [
                                        { type: "highlight", text: "fizeste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "fez" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "fizemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "fizeram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "querer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "quis" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "quiseste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "quis" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "quisemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "quiseram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ver" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "vi" }],
                                      two: [
                                        { type: "highlight", text: "viste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "viu" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "vimos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "viram" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "vir" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "vim" }],
                                      two: [
                                        { type: "highlight", text: "vieste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "veio" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "viemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "vieram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "saber" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "soube" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "soubeste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "soube" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "soubemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "souberam" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "pôr" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "pus" }],
                                      two: [
                                        { type: "highlight", text: "puseste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "pôs" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "pusemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "puseram" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "puder" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "pude" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "pudeste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "pôde" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "podemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "puderam" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "dar" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "dei" }],
                                      two: [
                                        { type: "highlight", text: "deste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "deu" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "demos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "deram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "sair" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "saí" }],
                                      two: [
                                        { type: "highlight", text: "saíste" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "saiu" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "saístes" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "saíram" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card
                  title="Pretérito Imperfeito do Indicativo"
                  tag="Fact / Truth"
                >
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Ongoing past actions</div>
                      <div className="flex self-center justify-end">
                        <img
                          src={PreteritoImperfeitoIndicativo1Png}
                          className="w-4/5"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">
                        Habitual past actions
                      </div>
                      <div className="flex self-center justify-end">
                        <img
                          src={PreteritoImperfeitoIndicativo2Png}
                          className="w-4/5"
                        />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The pretérito imperfeito do indicativo tense in
                          Portuguese is used to describe actions that started in
                          the past and finished in the past.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>Actions that were ongoing in the past</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Ela " },
                            { type: "highlight", text: "jogava" },
                            {
                              type: "normal",
                              text: " tênis quando começou a chover.",
                            },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "She played tenis when it started to rain.",
                            },
                          ]}
                        />
                        <li>Habitual actions in the past</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Eu " },
                            { type: "highlight", text: "comia" },
                            {
                              type: "normal",
                              text: " chocolate todos os dias.",
                            },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I used to eat chocolate every day.",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ava" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "avas" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ava" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ávamos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "avam" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "ia" },
                                      ],
                                      two: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "ias" },
                                      ],
                                      three: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "ia" },
                                      ],
                                      four: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "íamos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "iam" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "ia" },
                                      ],
                                      two: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "ias" },
                                      ],
                                      three: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "ia" },
                                      ],
                                      four: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "íamos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "iam" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    <span className="font-bold">-ar verbs</span>{" "}
                                    use{" "}
                                    <span className="font-bold">
                                      -ava based endings
                                    </span>
                                  </li>
                                  <li>
                                    <span className="font-bold">
                                      -er/-ir verbs
                                    </span>{" "}
                                    use{" "}
                                    <span className="font-bold">
                                      -ia based endings
                                    </span>
                                  </li>
                                  <li>
                                    <span className="font-bold">all verbs</span>{" "}
                                    use{" "}
                                    <span className="font-bold">
                                      same ending for eu and ele
                                    </span>
                                  </li>
                                  <li>
                                    <span className="font-bold">nós verbs</span>{" "}
                                    use{" "}
                                    <span className="font-bold">
                                      accent over a / i
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "era" }],
                                      two: [
                                        { type: "highlight", text: "eras" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "era" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "éramos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "eram" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ter" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "tinha" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "tinhas" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "tinha" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "tínhamos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "tinham" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "vir" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "vinha" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "vinhas" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "vinha" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "vínhamos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "vinham" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "pôr" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "punha" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "punhas" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "punha" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "púnhamos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "punham" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    There are only 4 irregular verbs in this
                                    tense
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card
                  title="Pretérito Perfeito Composto do Indicativo"
                  tag="Fact / Truth"
                >
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">
                        Past to present action
                      </div>
                      <div className="flex self-center justify-end">
                        <img
                          src={PreteritoPerfeitoCompostoIndicativo1Png}
                          className="w-4/5"
                        />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The pretérito perfeito composto do indicativo tense in
                          Portuguese is used to describe actions that started in
                          the past and are still happening now.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>
                          Describing an action that started in the past and is
                          still happening
                        </li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Eu " },
                            { type: "highlight", text: "tenho estudado" },
                            { type: "normal", text: " muito para as provas." },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I have been studying a lot for the exams.",
                            },
                          ]}
                        />
                      </ul>
                      <div className="pt-4 pb-2 font-bold">How to use</div>
                      <VerbTable
                        verbs={[
                          {
                            infinite: [
                              {
                                type: "normal",
                                text: "ter + participio passado",
                              },
                            ],
                            conjugations: {
                              one: [
                                { type: "normal", text: "tenho " },
                                { type: "highlight", text: "estudado" },
                              ],
                              two: [
                                { type: "normal", text: "tens " },
                                { type: "highlight", text: "comido" },
                              ],
                              three: [
                                { type: "normal", text: "tem " },
                                { type: "highlight", text: "partido" },
                              ],
                              four: [
                                { type: "normal", text: "temos " },
                                { type: "highlight", text: "feito" },
                              ],
                              five: [
                                { type: "normal", text: "têm " },
                                { type: "highlight", text: "vindo" },
                              ],
                            },
                          },
                        ]}
                      />
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <VerbTable
                          verbs={[
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "",
                                },
                              ],
                              conjugations: {
                                one: [{ type: "normal", text: "tenho" }],
                                two: [{ type: "normal", text: "tens" }],
                                three: [{ type: "normal", text: "tem" }],
                                four: [{ type: "normal", text: "temos" }],
                                five: [{ type: "normal", text: "têm" }],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "estudar",
                                },
                              ],
                              conjugations: {
                                one: [
                                  { type: "normal", text: "estud" },
                                  { type: "highlight", text: "ado" },
                                ],
                                two: [
                                  { type: "normal", text: "estud" },
                                  { type: "highlight", text: "ado" },
                                ],
                                three: [
                                  { type: "normal", text: "estud" },
                                  { type: "highlight", text: "ado" },
                                ],
                                four: [
                                  { type: "normal", text: "estud" },
                                  { type: "highlight", text: "ado" },
                                ],
                                five: [
                                  { type: "normal", text: "estud" },
                                  { type: "highlight", text: "ado" },
                                ],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "comer",
                                },
                              ],
                              conjugations: {
                                one: [
                                  { type: "normal", text: "com" },
                                  { type: "highlight", text: "ido" },
                                ],
                                two: [
                                  { type: "normal", text: "com" },
                                  { type: "highlight", text: "ido" },
                                ],
                                three: [
                                  { type: "normal", text: "com" },
                                  { type: "highlight", text: "ido" },
                                ],
                                four: [
                                  { type: "normal", text: "com" },
                                  { type: "highlight", text: "ido" },
                                ],
                                five: [
                                  { type: "normal", text: "com" },
                                  { type: "highlight", text: "ido" },
                                ],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "partir",
                                },
                              ],
                              conjugations: {
                                one: [
                                  { type: "normal", text: "part" },
                                  { type: "highlight", text: "ido" },
                                ],
                                two: [
                                  { type: "normal", text: "part" },
                                  { type: "highlight", text: "ido" },
                                ],
                                three: [
                                  { type: "normal", text: "part" },
                                  { type: "highlight", text: "ido" },
                                ],
                                four: [
                                  { type: "normal", text: "part" },
                                  { type: "highlight", text: "ido" },
                                ],
                                five: [
                                  { type: "normal", text: "part" },
                                  { type: "highlight", text: "ido" },
                                ],
                              },
                            },
                          ]}
                        />
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <VerbTable
                          verbs={[
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "",
                                },
                              ],
                              conjugations: {
                                one: [{ type: "normal", text: "tenho" }],
                                two: [{ type: "normal", text: "tens" }],
                                three: [{ type: "normal", text: "tem" }],
                                four: [{ type: "normal", text: "temos" }],
                                five: [{ type: "normal", text: "têm" }],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "fazer",
                                },
                              ],
                              conjugations: {
                                one: [{ type: "highlight", text: "feito" }],
                                two: [{ type: "highlight", text: "feito" }],
                                three: [{ type: "highlight", text: "feito" }],
                                four: [{ type: "highlight", text: "feito" }],
                                five: [{ type: "highlight", text: "feito" }],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "ir",
                                },
                              ],
                              conjugations: {
                                one: [{ type: "highlight", text: "ido" }],
                                two: [{ type: "highlight", text: "ido" }],
                                three: [{ type: "highlight", text: "ido" }],
                                four: [{ type: "highlight", text: "ido" }],
                                five: [{ type: "highlight", text: "ido" }],
                              },
                            },
                            {
                              infinite: [
                                {
                                  type: "normal",
                                  text: "abrir",
                                },
                              ],
                              conjugations: {
                                one: [{ type: "highlight", text: "aberto" }],
                                two: [{ type: "highlight", text: "aberto" }],
                                three: [{ type: "highlight", text: "aberto" }],
                                four: [{ type: "highlight", text: "aberto" }],
                                five: [{ type: "highlight", text: "aberto" }],
                              },
                            },
                          ]}
                        />
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card title="Futuro do Indicativo" tag="Fact / Truth">
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Future action</div>
                      <div className="flex self-center justify-end">
                        <img src={FuturoIndicativo1Png} className="w-4/5" />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The futuro do indicativo tense in Portuguese is used
                          to describe actions that will occur in the future.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>Describing an action that will happen.</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Eu " },
                            { type: "highlight", text: "viajarei" },
                            {
                              type: "normal",
                              text: " para Lisboa no próximo mês.",
                            },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I will travel to Lisbon next month.",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "ei" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "ás" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "á" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "ão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "ei" },
                                      ],
                                      two: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "ás" },
                                      ],
                                      three: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "á" },
                                      ],
                                      four: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "ão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "ei" },
                                      ],
                                      two: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "ás" },
                                      ],
                                      three: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "á" },
                                      ],
                                      four: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "ão" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    All regular verbs are a combination of the
                                    infinitive and the endings (ei, ás, á, emos,
                                    ão)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "dizer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "dir" },
                                        { type: "normal", text: "ei" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "dir" },
                                        { type: "normal", text: "ás" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "dir" },
                                        { type: "normal", text: "á" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "dir" },
                                        { type: "normal", text: "emos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "dir" },
                                        { type: "normal", text: "ão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "fazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "far" },
                                        { type: "normal", text: "ei" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "far" },
                                        { type: "normal", text: "ás" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "far" },
                                        { type: "normal", text: "á" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "far" },
                                        { type: "normal", text: "emos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "far" },
                                        { type: "normal", text: "ão" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "trazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "trar" },
                                        { type: "normal", text: "ei" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "trar" },
                                        { type: "normal", text: "ás" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "trar" },
                                        { type: "normal", text: "á" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "trar" },
                                        { type: "normal", text: "emos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "trar" },
                                        { type: "normal", text: "ão" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    Verbs that end in{" "}
                                    <span className="font-bold">zer</span> have
                                    have regular conjugations except the{" "}
                                    <span className="font-bold">zer</span> is
                                    replaced with{" "}
                                    <span className="font-bold">r</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
              </div>
              <div className="flex flex-col gap-4">
                <Card title="Imperfeito do Conjuntivo" tag="Possibility">
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">
                        Hypothetical past action
                      </div>
                      <div className="flex self-center justify-end">
                        <img src={ImperfeitoConjuntivo1Png} className="w-4/5" />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The imperfeito do conjuntivo is a verb tense in
                          Portuguese that is used to express hypothetical or
                          uncertain situations in the past.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>
                          Hypothetical Situations / Conditions (If Clauses)
                        </li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Se eu " },
                            { type: "highlight", text: "soubesse" },
                            { type: "normal", text: ", teria ajudado" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "If I had known, I would have helped",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "asse" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "asses" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "asse" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "ássemos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "assem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "esse" },
                                      ],
                                      two: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "esses" },
                                      ],
                                      three: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "esse" },
                                      ],
                                      four: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "êssemos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "essem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "isse" },
                                      ],
                                      two: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "isses" },
                                      ],
                                      three: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "isse" },
                                      ],
                                      four: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "íssemos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "issem" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    Take the{" "}
                                    <span className="font-bold">eles</span>{" "}
                                    conjugation of the preterito perfeito tense.
                                  </li>
                                  <li>
                                    Remove the{" "}
                                    <span className="font-bold">ram</span> from
                                    the end and replace with{" "}
                                    <span className="font-bold">sse</span> (eg.
                                    estudar = estudaram = estudasse), to get the
                                    base
                                  </li>
                                  <li>
                                    Add the endings (none, s, none, mos, m)
                                  </li>
                                  <li>
                                    The <span className="font-bold">nós</span>{" "}
                                    conjugation has an accent applied before the{" "}
                                    <span className="font-bold">sse</span>.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "fo" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "fo" },
                                        { type: "normal", text: "sses" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "fo" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "fo" },
                                        { type: "normal", text: "ssemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "fo" },
                                        { type: "normal", text: "ssem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "estar" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "estive" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "estive" },
                                        { type: "normal", text: "sses" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "estive" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "estive" },
                                        { type: "normal", text: "ssemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "estive" },
                                        { type: "normal", text: "ssem" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "dar" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "de" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "de" },
                                        { type: "normal", text: "sses" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "de" },
                                        { type: "normal", text: "sse" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "de" },
                                        { type: "normal", text: "ssemos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "de" },
                                        { type: "normal", text: "ssem" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    Regular and irregular verbs follow the same
                                    rule.
                                  </li>
                                  <li>
                                    Take the{" "}
                                    <span className="font-bold">eles</span>{" "}
                                    conjugation of the preterito perfeito tense.
                                  </li>
                                  <li>
                                    Remove the{" "}
                                    <span className="font-bold">ram</span> from
                                    the end and replace with{" "}
                                    <span className="font-bold">sse</span> (eg.
                                    ser = foram = fosse), to get the base
                                  </li>
                                  <li>
                                    Add the endings (none, s, none, mos, m)
                                  </li>
                                  <li>
                                    The <span className="font-bold">nós</span>{" "}
                                    conjugation has an accent applied before the{" "}
                                    <span className="font-bold">sse</span>.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card title="Presente do Conjuntivo" tag="Possibility">
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Desires / wishes</div>
                      <div className="flex self-center justify-end">
                        <img src={PresenteConjuntivo1Png} className="w-4/5" />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The presente do conjuntivo is an important verb tense
                          in Portuguese that expresses actions or states that
                          are uncertain, hypothetical, or influenced by
                          emotions, desires, or doubts.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>Desires and wishes</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Espero que você " },
                            { type: "highlight", text: "tenha" },
                            { type: "normal", text: " um bom dia" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I hope you have a good day",
                            },
                          ]}
                        />
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Quero que você me " },
                            { type: "highlight", text: "ajude" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "I want you to help me",
                            },
                          ]}
                        />
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "É importante que todos " },
                            { type: "highlight", text: "participem" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "It's important that everyone participates",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "e" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "e" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "emos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estud" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "a" },
                                      ],
                                      two: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "as" },
                                      ],
                                      three: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "a" },
                                      ],
                                      four: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "amos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "com" },
                                        { type: "highlight", text: "am" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "a" },
                                      ],
                                      two: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "as" },
                                      ],
                                      three: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "a" },
                                      ],
                                      four: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "amos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "part" },
                                        { type: "highlight", text: "am" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    <span className="font-bold">-ar verbs</span>{" "}
                                    are reversed to use{" "}
                                    <span className="font-bold">
                                      -e based endings
                                    </span>
                                  </li>
                                  <li>
                                    <span className="font-bold">
                                      -er/-ir verbs
                                    </span>{" "}
                                    are reversed to use{" "}
                                    <span className="font-bold">
                                      -a based endings
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "sej" },
                                        { type: "normal", text: "a" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "sej" },
                                        { type: "normal", text: "as" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "sej" },
                                        { type: "normal", text: "a" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "sej" },
                                        { type: "normal", text: "amos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "sej" },
                                        { type: "normal", text: "am" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ter" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "tenh" },
                                        { type: "normal", text: "a" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "tenh" },
                                        { type: "normal", text: "as" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "tenh" },
                                        { type: "normal", text: "a" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "tenh" },
                                        { type: "normal", text: "amos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "tenh" },
                                        { type: "normal", text: "am" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "trazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "trag" },
                                        { type: "normal", text: "a" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "trag" },
                                        { type: "normal", text: "as" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "trag" },
                                        { type: "normal", text: "a" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "trag" },
                                        { type: "normal", text: "amos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "trag" },
                                        { type: "normal", text: "am" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    <span>
                                      In most cases the base of the irregular
                                      verb comes from the present tense "eu"
                                      conjugation. Then change the endings based
                                      on the regular conjugations (-ar vs
                                      -er/-ir)
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      Example: trazer = trago = trag + endings
                                      (follow -er rules)
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
                <Card title="Futuro do Conjuntivo" tag="Possibility">
                  <div className="flex flex-col gap-6 py-8 px-4 text-sm">
                    <div className="flex flex-row">
                      <div className="w-1/4 self-end">Future Possibilities</div>
                      <div className="flex self-center justify-end">
                        <img src={FuturoConjuntivo1Png} className="w-4/5" />
                      </div>
                    </div>
                  </div>
                  <Tabs>
                    <Tab title="Overview">
                      <div className="flex flex-col gap-2 text-sm">
                        <p>
                          The futuro do conjuntivo is a tense in Portuguese that
                          is used to express actions or events that are
                          uncertain, hypothetical, or dependent on a condition
                          in the future.
                        </p>
                      </div>
                      <div className="pt-4 pb-2 font-bold">Use Cases</div>
                      <ul className="pb-4 list-disc ml-4 text-sm">
                        <li>Conditional Sentences</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Se ele " },
                            { type: "highlight", text: "estudar" },
                            { type: "normal", text: " mais, passará no exame" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "If he studies more, he will pass the exam",
                            },
                          ]}
                        />
                        <li>Future Events Dependent on Certain Conditions</li>
                        <SampleSentence
                          portuguese={[
                            { type: "normal", text: "Quando você " },
                            { type: "highlight", text: "terminar" },
                            { type: "normal", text: " o trabalho, me avise" },
                          ]}
                          english={[
                            {
                              type: "normal",
                              text: "When you finish the work, let me know",
                            },
                          ]}
                        />
                      </ul>
                    </Tab>
                    <Tab title="Regular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "estud(ar)" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "normal", text: "estudar" },
                                      ],
                                      two: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "estudar" },
                                      ],
                                      four: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "mos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "estudar" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "com(er)" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "normal", text: "comer" }],
                                      two: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "comer" },
                                      ],
                                      four: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "mos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "comer" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [
                                      { type: "normal", text: "part(ir)" },
                                    ],
                                    conjugations: {
                                      one: [{ type: "normal", text: "partir" }],
                                      two: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "es" },
                                      ],
                                      three: [
                                        { type: "normal", text: "partir" },
                                      ],
                                      four: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "mos" },
                                      ],
                                      five: [
                                        { type: "normal", text: "partir" },
                                        { type: "highlight", text: "em" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    All regular verbs are the infinitive +
                                    endings (none, es, none, mos, em)
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Irregular Verbs">
                      <div className="flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                          <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                              <VerbTable
                                verbs={[
                                  {
                                    infinite: [
                                      { type: "normal", text: "fazer" },
                                    ],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "fizer" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "fizer" },
                                        { type: "normal", text: "es" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "fizer" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "fizer" },
                                        { type: "normal", text: "mos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "fizer" },
                                        { type: "normal", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ser" }],
                                    conjugations: {
                                      one: [{ type: "highlight", text: "for" }],
                                      two: [
                                        { type: "highlight", text: "for" },
                                        { type: "normal", text: "es" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "for" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "for" },
                                        { type: "normal", text: "mos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "for" },
                                        { type: "normal", text: "em" },
                                      ],
                                    },
                                  },
                                  {
                                    infinite: [{ type: "normal", text: "ter" }],
                                    conjugations: {
                                      one: [
                                        { type: "highlight", text: "tiver" },
                                      ],
                                      two: [
                                        { type: "highlight", text: "tiver" },
                                        { type: "normal", text: "es" },
                                      ],
                                      three: [
                                        { type: "highlight", text: "tiver" },
                                      ],
                                      four: [
                                        { type: "highlight", text: "tiver" },
                                        { type: "normal", text: "mos" },
                                      ],
                                      five: [
                                        { type: "highlight", text: "tiver" },
                                        { type: "normal", text: "em" },
                                      ],
                                    },
                                  },
                                ]}
                              />
                              <div className="p-4">
                                <div className="text-sm font-bold">
                                  Tips to remember
                                </div>
                                <ul className="pb-4 list-disc ml-4 text-sm">
                                  <li>
                                    Take the{" "}
                                    <span className="font-bold">eles</span>{" "}
                                    conjugation of the preterito perfeito tense.
                                  </li>
                                  <li>
                                    Remove the{" "}
                                    <span className="font-bold">am</span> from
                                    the end (eg. fazer = fizeram = fizer), to
                                    get the base
                                  </li>
                                  <li>
                                    Apply the regular verb rules with the base.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab>
                    <Tab title="Resources (4)">
                      <ul className="flex flex-col gap-2 pb-4">
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=uFEfUXu2WHg"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.youtube.com/watch?v=D6GOSqC_M7k"
                            target="_blank"
                          >
                            <Tag type="video" text="Video" />
                            <span className="ml-2">
                              Os Verbos Regulares no Presente do Indicativo
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://www.conjugacao.com.br/presente-do-indicativo/"
                            target="_blank"
                          >
                            <Tag type="article" text="Article" />
                            <span className="ml-2">Presente do Indicativo</span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="underline"
                            href="https://learn-portuguese.org/wp-content/uploads/2017/07/Exerc%C3%ADcios-%E2%80%93-Presente-do-Indicativo.pdf"
                            target="_blank"
                          >
                            <Tag type="exercises" text="Exercises" />
                            <span className="ml-2">
                              Presente do Indicativo Exercises
                            </span>
                          </a>
                        </li>
                      </ul>
                    </Tab>
                  </Tabs>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
