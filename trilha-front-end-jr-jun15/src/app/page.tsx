import Image from 'next/image';
import fotoPerfil from '../../public/assets/fotoPerfil.png';

export default function Home() {
  return (
    <>
      <header className="py-4 px-24 flex justify-between items-center bg-[#e53939]">
        <p className="text-lg">Luciano Oliveira da Costa</p>
        <nav>
          <ul className="flex gap-12">
            <li className="text-lg py-2 px-5 bg-[#000] border-2 cursor-pointer rounded-xl hover:bg-[#fff] hover:border-2 hover:border-[#000] hover:text-[#000]">
              <a href="#about-container">Sobre Mim</a>
            </li>
            <li className="text-lg py-2 px-5 bg-[#000] border-2 cursor-pointer rounded-xl hover:bg-[#fff] hover:border-2 hover:border-[#000] hover:text-[#000]">
              <a href="#skills-container">Skills</a>
            </li>
            <li className="text-lg py-2 px-5 bg-[#000] border-2 cursor-pointer rounded-xl hover:bg-[#fff] hover:border-2 hover:border-[#000] hover:text-[#000]">
              <a href="#experience-container">Projetos</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="flex">
          <div>
            <h1>
              Olá, meu nome é Luciano Oliveira da Costa e construo páginas web.
            </h1>
          </div>
          <div>
            <Image
              src={fotoPerfil}
              className="rounded-full"
              alt="Foto de perfil"
            />
          </div>
        </section>
        <section>
          <h2>Sobre Mim</h2>
          <p>
            Me chamo Luciano Oliveira da Costa, tenho 29 anos e sou formado em
            arquitetura e urbanismo. Estou em um momento de transição de
            carreira e decidi me aventurar na programação. Meu foco é me tornar
            um programador Front End e para isso estou dedicando meu tempo aos
            estudos. Recentemente, concluí a Residência em TIC - Software no
            Serratec, onde adquiri conhecimentos sólidos em desenvolvimento de
            software com foco em tecnologias modernas e práticas ágeis. Estou
            animado para aplicar minha criatividade e habilidades de design em
            projetos digitais, buscando criar interfaces incríveis e funcionais.
            Esta jornada é desafiadora, mas estou determinado a alcançar meus
            objetivos e me destacar no mundo da tecnologia.
          </p>
        </section>
        <section>
          <h2>Gosto Pessoais</h2>
          <ul>
            <li>Masculação</li>
            <li>Fazer Trilhas</li>
            <li>Jogar</li>
            <li>Viajar</li>
            <li>Música</li>
          </ul>
        </section>
        <section>
          <h2>Motivação</h2>
          <p>
            Minha motivação para participar da comunidade Código Certo Coders é
            alimentada pelo desejo de obter experiência profissional relevante e
            aplicada. Acredito que fazer parte de uma comunidade ativa e
            engajada me proporcionará uma oportunidade valiosa de aprender com
            outros profissionais, compartilhar conhecimentos e aprimorar minhas
            habilidades de maneira prática. Além disso, vejo nessa participação
            uma excelente chance de me aproximar do mercado de trabalho,
            aumentando minhas chances de conseguir uma oportunidade de emprego
            que esteja alinhada com meus objetivos. A flexibilidade de tempo
            oferecida por comunidades como essa é fundamental para mim,
            permitindo que eu concilie minhas atividades de estudo e
            desenvolvimento com novos projetos e colaborações. Acredito que, ao
            me envolver com a comunidade Código Certo Coders, estarei mais
            preparado para enfrentar os desafios do mercado e contribuir de
            forma significativa para a área de tecnologia.
          </p>
        </section>
        <section>
          <h2>Skills</h2>

          <ul>
            <li>HTML</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>React-Native</li>
            <li>Java</li>
            <li>.NET</li>
          </ul>
        </section>
      </main>
      <footer>
        <div>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/luciano-oliveira-da-costa-121b8b170/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/LucianoCosta21">Github</a>
            </li>
            <li>
              <a href="mailto:lucianocosta21@hotmail.com">E-mail</a>
            </li>
          </ul>
        </div>
        <h2>Desenvolvido por Luciano Oliveira - 2024</h2>
      </footer>
    </>
  );
}
