import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  MapPin, 
  MessageCircle, 
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Droplets,
  BarChart3,
  Monitor
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass section-rounded px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
            animate={{ 
              scale: [1, 1.02, 1],
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
            }}
            transition={{ 
              scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              filter: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              rotate: { duration: 0.4 }
            }}
            className="shine-effect rounded-lg cursor-pointer"
          >
            <img 
              src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539611/Captura_de_tela_2026-03-07_180049_x6gki3.png" 
              alt="Smart Wash Logo" 
              className="h-10 md:h-12 w-auto relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#mercado" className="font-medium hover:text-vibrant-blue transition-colors">Mercado</a>
          <a href="#diferenciais" className="font-medium hover:text-vibrant-blue transition-colors">Diferenciais</a>
          <a href="#modelos" className="font-medium hover:text-vibrant-blue transition-colors">Modelos</a>
          <a href="#suporte" className="font-medium hover:text-vibrant-blue transition-colors">Suporte</a>
        </div>

        <div className="hidden md:block">
          <a 
            href="#formulario" 
            className="bg-vibrant-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-vibrant-blue/90 transition-all shadow-vibrant"
          >
            Seja um Franqueado
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 glass section-rounded p-6 flex flex-col gap-4 shadow-xl"
          >
            <a href="#mercado" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-medium-gray">Mercado</a>
            <a href="#diferenciais" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-medium-gray">Diferenciais</a>
            <a href="#modelos" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-medium-gray">Modelos</a>
            <a href="#suporte" onClick={() => setIsOpen(false)} className="font-bold py-2 border-b border-medium-gray">Suporte</a>
            <a 
              href="#formulario" 
              onClick={() => setIsOpen(false)}
              className="bg-vibrant-blue text-white text-center py-3 rounded-full font-bold mt-2"
            >
              Quero Investir
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5571999115133" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
  >
    <MessageCircle size={32} fill="currentColor" />
  </a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-medium-gray last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold group-hover:text-vibrant-blue transition-colors">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-deep-navy/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-vibrant-blue selection:text-white">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-soft-ice">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block bg-lavender/10 text-lavender px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                Oportunidade de Franquia de Sucesso
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-deep-navy leading-[1.1] mb-6">
                Invista em uma lavanderia <span className="text-vibrant-blue">self-service automatizada</span>
              </h1>
              <p className="text-lg md:text-xl text-deep-navy/70 mb-6 font-medium leading-relaxed">
                Franquia a partir de R$75 mil, operação compacta e retorno estimado entre 18 e 24 meses.
              </p>
              <div className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-3 text-deep-navy font-bold text-lg">
                  <div className="w-2 h-2 bg-vibrant-blue rounded-full"></div>
                  Margem estimada de 60%
                </div>
                <div className="flex items-center gap-3 text-deep-navy font-bold text-lg">
                  <div className="w-2 h-2 bg-vibrant-blue rounded-full"></div>
                  Espaço a partir de 15 m²
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="#formulario" 
                  className="w-full sm:w-auto bg-vibrant-blue text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-vibrant flex items-center justify-center gap-2"
                >
                  QUERO CONHECER A FRANQUIA <ArrowRight size={20} />
                </a>
                <a 
                  href="https://wa.me/5571999115133" 
                  className="w-full sm:w-auto bg-white text-deep-navy px-10 py-5 rounded-full font-black text-lg hover:bg-medium-gray/50 transition-all border border-medium-gray flex items-center justify-center gap-2"
                >
                  Falar com Consultor
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="section-rounded overflow-hidden shadow-2xl border-8 border-white shine-effect reflection-effect"
              >
                <img 
                  src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539769/WhatsApp_Image_2026-03-06_at_3.05.32_PM_myui5f.jpg" 
                  alt="SmartWash Experience" 
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 section-rounded shadow-xl hidden md:block z-10">
                <div className="flex items-center gap-3">
                  <div className="bg-vibrant-blue/10 p-2 rounded-lg">
                    <TrendingUp className="text-vibrant-blue" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-deep-navy/40 uppercase">Faturamento</p>
                    <p className="font-black text-vibrant-blue">Recorrente 24h</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Números da Franquia Section */}
      <section className="py-16 bg-vibrant-blue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Números da Franquia SmartWash</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-white/70 font-bold uppercase tracking-wider mb-2 text-sm">Investimento inicial</p>
              <p className="text-3xl md:text-4xl font-black">A partir de R$75 mil</p>
            </div>
            <div>
              <p className="text-white/70 font-bold uppercase tracking-wider mb-2 text-sm">Payback médio</p>
              <p className="text-3xl md:text-4xl font-black">18 a 24 meses</p>
            </div>
            <div>
              <p className="text-white/70 font-bold uppercase tracking-wider mb-2 text-sm">Margem estimada</p>
              <p className="text-3xl md:text-4xl font-black">Cerca de 60%</p>
            </div>
            <div>
              <p className="text-white/70 font-bold uppercase tracking-wider mb-2 text-sm">Espaço necessário</p>
              <p className="text-3xl md:text-4xl font-black">A partir de 15 m²</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mercado Section (Proposta de Valor) */}
      <section id="mercado" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Junte-se à SmartWash e faça parte de um modelo de negócio comprovado!
              </h2>
              <p className="text-lg text-deep-navy/70 mb-6 leading-relaxed">
                Com uma loja matriz consolidada e duas franquias em funcionamento, a SmartWash oferece um modelo de negócio com alta taxa de sucesso. 
              </p>
              <p className="text-lg text-deep-navy/70 mb-8 leading-relaxed">
                Nossos franqueados desfrutam de um suporte completo, treinamento especializado e um mercado em expansão, garantindo um retorno atrativo sobre o investimento. Venha crescer com a gente e transformar seu futuro!
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-soft-ice section-rounded">
                  <TrendingUp className="text-vibrant-blue mb-4" size={32} />
                  <h4 className="text-2xl font-black mb-1">+25%</h4>
                  <p className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Crescimento Anual</p>
                </div>
                <div className="p-6 bg-soft-ice section-rounded">
                  <Users className="text-vibrant-blue mb-4" size={32} />
                  <h4 className="text-2xl font-black mb-1">80%</h4>
                  <p className="text-sm font-bold text-deep-navy/60 uppercase tracking-wider">Recorrência</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="section-rounded overflow-hidden shadow-2xl">
                <img 
                  src="https://skzfezsseuyqgzbdapng.supabase.co/storage/v1/object/public/meeeeee/WhatsApp%20Image%202026-03-07%20at%207.23.42%20PM.jpeg" 
                  alt="Fachada SmartWash" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 section-rounded shadow-xl hidden lg:block max-w-xs">
                <p className="font-bold text-vibrant-blue mb-2 italic">"O futuro do serviço é o autoatendimento."</p>
                <p className="text-sm text-deep-navy/60">— Tendência Global de Varejo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rentabilidade Section */}
      <section id="diferenciais" className="py-20 bg-soft-ice">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Por que investir na SmartWash</h2>
              <p className="text-lg text-deep-navy/70 font-medium leading-relaxed">
                Investir na SmartWash é investir em um negócio com alto potencial de retorno. Nossos franqueados têm experimentado um crescimento consistente, com um retorno sobre o investimento em média de 18 a 24 meses. No curto prazo, os franqueados podem esperar uma margem de lucro de 50% a 60%, e no longo prazo, a estabilidade e o crescimento são garantidos.
              </p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="section-rounded overflow-hidden shadow-2xl border-8 border-white shine-effect"
              >
                <img 
                  src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539767/IMG_8092_hs9jl5.jpg" 
                  alt="Investimento SmartWash"
                  className="w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-vibrant-blue" />,
                title: "Modelo de negócio validado",
                desc: "Unidades operando com sucesso, provando a rentabilidade e a aceitação do público."
              },
              {
                icon: <Smartphone className="text-vibrant-blue" />,
                title: "Operação automatizada",
                desc: "Gestão 100% digital. Controle faturamento, máquinas e câmeras em tempo real pelo celular."
              },
              {
                icon: <Users className="text-vibrant-blue" />,
                title: "Baixa necessidade de equipe",
                desc: "Modelo self-service que dispensa funcionários na maior parte do tempo. Folha de pagamento reduzida."
              },
              {
                icon: <TrendingUp className="text-vibrant-blue" />,
                title: "Alta demanda recorrente",
                desc: "Serviço essencial com clientes que retornam semanalmente, garantindo receita previsível."
              },
              {
                icon: <MapPin className="text-vibrant-blue" />,
                title: "Estrutura compacta",
                desc: "Operação otimizada que exige espaços a partir de apenas 15 m², reduzindo custos de aluguel."
              },
              {
                icon: <BarChart3 className="text-vibrant-blue" />,
                title: "Alta Margem",
                desc: "Baixo custo fixo e alta demanda garantem margens de lucro entre 50% e 60%."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 section-rounded shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-soft-ice rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.title}</h3>
                <p className="text-deep-navy/70 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-deep-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative inline-block">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="rounded-[40px] border-8 border-white/10 shadow-2xl max-w-[300px] mx-auto overflow-hidden bg-black shine-effect"
                >
                  <img 
                    src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539771/WhatsApp_Image_2026-03-07_at_7.16.27_PM_rx5buv.jpg" 
                    alt="Dashboard SmartWash" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute top-1/4 -right-20 glass p-6 section-rounded text-deep-navy hidden lg:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold">Loja Online</span>
                  </div>
                  <p className="text-sm font-medium">Faturamento Hoje: <span className="font-black">R$ 1.240,00</span></p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                Gerencie sua loja de <br /> qualquer lugar do mundo.
              </h2>
              <ul className="space-y-6">
                {[
                  "Abertura de portas remota via aplicativo.",
                  "Monitoramento por câmeras 24h em HD.",
                  "Relatórios financeiros e de uso em tempo real.",
                  "Ativação de máquinas à distância para suporte."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-vibrant-blue p-1 rounded-full">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg font-medium text-white/80">{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 p-8 bg-white/5 border border-white/10 section-rounded">
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-4">Liberdade Real</p>
                <p className="text-xl font-medium">"Menos de 5 horas por semana para supervisão e manutenção básica."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelos de Negócio */}
      <section id="modelos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Modelos de Negócio</h2>
            <p className="text-lg text-deep-navy/70 max-w-2xl mx-auto">
              Adaptamos a SmartWash para diferentes perfis de investimento e localizações.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Loja de Rua",
                desc: "Ideal para bairros residenciais de alta densidade.",
                img: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539772/WhatsApp_Image_2026-03-07_at_7.23.42_PM_rldhft.jpg"
              },
              {
                title: "Condomínios e Hotéis",
                desc: "Aproveite os baixos custos operacionais em áreas privadas.",
                img: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539611/Captura_de_tela_2026-03-11_222547_gkm4ue.png"
              },
              {
                title: "Postos 24h",
                desc: "Conveniência total em localizações estratégicas.",
                img: "https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539772/WhatsApp_Image_2026-03-07_at_7.23.42_PM_1_eu8t0z.jpg"
              }
            ].map((modelo, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden section-rounded mb-6">
                  <img 
                    src={modelo.img} 
                    alt={modelo.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-black mb-2">{modelo.title}</h3>
                <p className="text-deep-navy/70 font-medium">{modelo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-soft-ice">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Nossas Unidades</h2>
            <p className="text-lg text-deep-navy/70">Conheça o sucesso real da SmartWash em Salvador.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Brotas", loc: "Shopping Florestal", rating: "5.0 ⭐", badge: "Franquia em Operação" },
              { name: "Santa Teresa", loc: "Posto de Combustível 24h", rating: "4.9 ⭐", badge: "Franquia em Operação" },
              { name: "Pituba (Matriz)", loc: "Edifício Comercial Premium", rating: "5.0 ⭐", badge: "Matriz Consolidada" }
            ].map((unidade, i) => (
              <div key={i} className="bg-white p-8 section-rounded shadow-sm border border-medium-gray relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-vibrant-blue text-white text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  {unidade.badge}
                </div>
                <MapPin className="text-vibrant-blue mb-4" />
                <h3 className="text-xl font-black mb-1">{unidade.name}</h3>
                <p className="text-deep-navy/60 font-bold mb-4">{unidade.loc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-medium-gray">
                  <span className="text-sm font-black text-vibrant-blue">Avaliação Google</span>
                  <span className="font-black">{unidade.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="1. E se vandalizarem a loja?" 
              answer="Nossas lojas são equipadas com sistemas de câmeras HD 24h, travas eletrônicas reforçadas e alarmes. Além disso, o modelo de negócio prevê seguro empresarial completo contra danos e furtos, garantindo sua tranquilidade."
            />
            <FAQItem 
              question="2. O mercado já está saturado?" 
              answer="Pelo contrário. A penetração de lavanderias self-service no Brasil ainda é mínima (menos de 5%) comparada aos EUA e Europa (onde chega a 40%). Estamos no início de uma mudança cultural gigante."
            />
            <FAQItem 
              question="3. Quanto tempo eu preciso dedicar?" 
              answer="O modelo foi feito para investidores que buscam liberdade. Você precisará de menos de 5 horas por semana para tarefas básicas de supervisão de limpeza e coleta, se optar por aceitar dinheiro físico."
            />
            <FAQItem 
              question="4. Preciso ter experiência em lavanderia?" 
              answer="Absolutamente não. Nós entregamos o 'Business in a Box'. Oferecemos treinamento completo, manuais de operação e suporte contínuo para que você foque apenas na gestão do seu investimento."
            />
            <FAQItem 
              question="5. Qual é o valor do investimento inicial?" 
              answer="O investimento inicial varia de acordo com o modelo de negócio escolhido e o tamanho do ponto comercial. Em média, a partir de R$ 75 mil você já pode ter sua unidade SmartWash operando."
            />
            <FAQItem 
              question="6. Qual é a margem de lucro e o tempo de retorno?" 
              answer="Nossos franqueados têm experimentado uma margem de lucro de 50% a 60% no curto prazo, com um retorno sobre o investimento (Payback) estimado entre 18 a 24 meses."
            />
            <FAQItem 
              question="7. Como funciona a manutenção das máquinas?" 
              answer="Utilizamos maquinário industrial de altíssima durabilidade. Além disso, oferecemos suporte técnico especializado e manutenção preventiva programada para garantir que sua operação nunca pare."
            />
            <FAQItem 
              question="8. A franquia ajuda na escolha do ponto comercial?" 
              answer="Sim! Realizamos um estudo de viabilidade e análise de ponto comercial utilizando ferramentas de geomarketing para garantir que sua loja seja instalada em um local com alto potencial de faturamento."
            />
            <FAQItem 
              question="9. Como é feito o pagamento pelos clientes?" 
              answer="O sistema é 100% automatizado. Os clientes podem pagar via cartão de crédito, débito, PIX ou aplicativo próprio da SmartWash, facilitando a gestão financeira e evitando a necessidade de troco."
            />
            <FAQItem 
              question="10. Posso ter mais de uma unidade?" 
              answer="Com certeza! Muitos de nossos franqueados começam com uma unidade e, devido à facilidade de gestão remota e alta rentabilidade, rapidamente expandem para múltiplas lojas (modelo multifranqueado)."
            />
          </div>
        </div>
      </section>

      {/* Formulário Section */}
      <section id="formulario" className="py-20 bg-vibrant-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-lavender/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-deep-navy/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Pronto para transformar seu futuro com a SmartWash?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Preencha o formulário abaixo e nossa equipe entrará em contato para te guiar em cada passo do processo. Estamos aqui para responder todas as suas dúvidas e ajudar você a dar o próximo passo rumo ao sucesso!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black">1</div>
                  <p className="font-bold">Análise de Perfil e Viabilidade</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black">2</div>
                  <p className="font-bold">Reunião de Apresentação Financeira</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-black">3</div>
                  <p className="font-bold">Assinatura e Início do Projeto</p>
                </div>
              </div>
            </div>

            <div className="bg-white text-deep-navy p-8 md:p-12 section-rounded shadow-2xl flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-black mb-4">Diagnóstico de Perfil</h3>
              <p className="text-deep-navy/70 mb-8 font-medium text-lg">
                Preencha nosso formulário rápido e receba nossa apresentação comercial exclusiva. Descubra se você tem o perfil ideal para ser um franqueado SmartWash.
              </p>
              
              <a 
                href="https://forms.gle/xQRf5heFFcQDkvgF8" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-vibrant-blue text-white py-5 rounded-full font-black text-xl shadow-vibrant hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                PREENCHER FORMULÁRIO <ArrowRight size={24} />
              </a>
              <p className="text-xs text-deep-navy/40 mt-6 leading-tight">
                Você será redirecionado para um ambiente seguro do Google Forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link para Site Oficial */}
      <section className="py-24 bg-deep-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6">Quer conhecer a experiência do cliente?</h2>
              <p className="text-xl text-white/70 mb-10 font-medium leading-relaxed">
                Visite nosso site oficial e veja como a SmartWash está revolucionando o dia a dia de milhares de pessoas em Salvador.
              </p>
              <a 
                href="https://smartwash-eight.vercel.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-vibrant-blue px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl"
              >
                VISITAR SITE OFICIAL <ArrowRight size={20} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="section-rounded overflow-hidden shadow-2xl border-8 border-white/10 shine-effect reflection-effect"
              >
                <img 
                  src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539769/WhatsApp_Image_2026-03-06_at_3.05.32_PM_myui5f.jpg" 
                  alt="Experiência SmartWash"
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-soft-ice border-t border-medium-gray">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            animate={{ 
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="shine-effect rounded-lg"
          >
            <img 
              src="https://res.cloudinary.com/dqfnkztbe/image/upload/q_auto/f_auto/v1778539611/Captura_de_tela_2026-03-07_180049_x6gki3.png" 
              alt="Smart Wash" 
              className="h-10 opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <p className="text-deep-navy/50 font-medium text-sm text-center">
            © 2026 Smart Wash Lavanderia. Todos os direitos reservados. <br className="md:hidden" />
            Salvador - Bahia.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-deep-navy/50 hover:text-vibrant-blue transition-colors font-bold text-sm">Privacidade</a>
            <a href="#" className="text-deep-navy/50 hover:text-vibrant-blue transition-colors font-bold text-sm">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
