import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Wind, 
  Flame, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ThumbsUp,
  ChevronRight,
  MapPin,
  Mail,
  Send,
  Facebook,
  Instagram
} from 'lucide-react';
import { motion } from 'motion/react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col items-start ${className}`}>
    <div className="flex items-baseline leading-none">
      <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Ramos</span>
    </div>
    <div className="relative mt-[-2px] w-full">
      <div className="bg-slate-900 h-[18px] rounded-sm flex items-center px-2 relative overflow-hidden">
        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Instalações</span>
        {/* The "cable" effect - a simple line that could end in a plug if we had a custom icon, 
            but we'll use a stylized div for the plug end */}
      </div>
      <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 flex items-center">
        <div className="w-3 h-[2px] bg-slate-900"></div>
        <div className="w-2 h-4 bg-slate-900 rounded-sm flex flex-col justify-around py-0.5 px-[1px]">
          <div className="w-full h-[2px] bg-white/30"></div>
          <div className="w-full h-[2px] bg-white/30"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const trackConversion = () => {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-18030345442/801UCLbzgY4cEOL5xJVD'
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const servicoMap: Record<string, string> = {
      'eletrica': 'Instalações Elétricas',
      'ar-condicionado': 'Ar Condicionado',
      'aquecedor': 'Aquecedor a Gás',
      'outros': 'Outros Serviços'
    };

    const servicoNome = servicoMap[formData.servico] || formData.servico;
    
    const message = `Olá, meu nome é ${formData.nome}.
Telefone: ${formData.telefone}
Serviço de interesse: ${servicoNome}
Mensagem: ${formData.mensagem}`;

    const encodedMessage = encodeURIComponent(message);
    
    // Google Ads Conversion Event
    trackConversion();

    window.open(`${baseWhatsappUrl}?text=${encodedMessage}`, '_blank');
    
    setFormData({ nome: '', telefone: '', servico: '', mensagem: '' });
  };

  const services = [
    {
      title: "Instalações Elétricas",
      description: "Nossa principal especialidade. Manutenção e instalação elétrica residencial e comercial com 10 anos de experiência.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      tag: "Elétrica",
      whatsappMessage: "Olá, gostaria de solicitar um orçamento para serviços de instalações elétricas."
    },
    {
      title: "Ar Condicionado",
      description: "Instalação técnica, manutenção preventiva e corretiva, além de compra e venda de aparelhos.",
      icon: <Wind className="w-8 h-8 text-blue-600" />,
      tag: "Climatização",
      whatsappMessage: "Olá, gostaria de solicitar um orçamento para instalação ou manutenção de ar condicionado."
    },
    {
      title: "Aquecedor a Gás",
      description: "Instalação e manutenção especializada para garantir seu banho quente com total segurança.",
      icon: <Flame className="w-8 h-8 text-orange-600" />,
      tag: "Aquecimento",
      whatsappMessage: "Olá, gostaria de solicitar um orçamento para instalação ou manutenção de aquecedor a gás."
    }
  ];

  const testimonials = [
    {
      name: "Ricardo Santos",
      role: "Síndico de Condomínio",
      content: "A Ramos Instalações realizou toda a manutenção elétrica do nosso prédio. Profissionais extremamente competentes e pontuais.",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      role: "Proprietária de Residência",
      content: "Instalaram 3 aparelhos de ar condicionado na minha casa. Serviço limpo, rápido e com um acabamento impecável.",
      rating: 5
    },
    {
      name: "Marcos Oliveira",
      role: "Empresário",
      content: "Sempre chamo a Ramos para as manutenções dos aquecedores da minha pousada em Itapema. Confiança total no trabalho deles.",
      rating: 5
    }
  ];

  const differentiators = [
    {
      title: "10 Anos de Mercado",
      description: "Fundada em 2015, a Ramos Instalações é uma empresa sólida e ativa com histórico de excelência.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Especialistas Certificados",
      description: "Equipe técnica qualificada para serviços elétricos e de climatização complexos.",
      icon: <ThumbsUp className="w-6 h-6" />
    },
    {
      title: "Atendimento em Duas Sedes",
      description: "Presentes em Rio do Sul e Itapema para melhor atender toda a região.",
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const baseWhatsappUrl = "https://wa.me/5547988800747";
  const generalMessage = encodeURIComponent("Olá, gostaria de solicitar um orçamento para os serviços da Ramos Instalações.");
  const whatsappUrl = `${baseWhatsappUrl}?text=${generalMessage}`;
  const phoneDisplay = "(47) 98880-0747";
  const instagramUrl = "https://www.instagram.com/ramosinstalacoes/";
  const facebookUrl = "https://www.facebook.com/ramosinstalacoess/?locale=pt_BR";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Nav */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#sobre" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#contato" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contato</a>
          </nav>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-50 section-padding">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Empresa Ativa - Desde 2015
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Excelência em <span className="text-blue-600">Instalações Elétricas</span> e Climatização.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Mais de 10 anos de experiência atendendo Rio do Sul, Itapema e região com serviços técnicos de alta qualidade e segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
                >
                  Solicitar Orçamento
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href={`tel:+5547988800747`} 
                  className="flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {phoneDisplay}
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1hEWPhfeaiW18nCnooMh6hU2x9exR8Zos" 
                  alt="Manutenção de Ar Condicionado Ramos" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">CNPJ Ativo</p>
                    <p className="text-xs text-slate-500">23.468.266/0001-69</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossas Especialidades</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Especialistas em climatização e elétrica, oferecendo soluções completas para residências e comércios.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <span className="block text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">{service.tag}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a 
                    href={`${baseWhatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion()}
                    className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Solicitar Orçamento de {service.tag} <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="section-padding bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tradição e Qualidade desde 2015</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Com sede em Rio do Sul, SC, a Ramos Instalações atua há mais de 10 anos no mercado de instalações e manutenção elétrica. Nossa trajetória é marcada pelo compromisso com a segurança e a satisfação total de nossos clientes, expandindo agora nossa excelência também para a região de Itapema.
              </p>
              
              <div className="space-y-8">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://lh3.googleusercontent.com/d/1hEWPhfeaiW18nCnooMh6hU2x9exR8Zos" 
                  alt="Serviços Elétricos Profissionais" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
                <div className="inline-block p-8 rounded-full bg-blue-600/90 backdrop-blur-sm shadow-2xl">
                  <p className="text-4xl font-black">10+</p>
                  <p className="text-xs font-bold uppercase tracking-widest">Anos de História</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que dizem nossos clientes</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A satisfação de quem já contratou nossos serviços é a nossa maior garantia de qualidade.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <ThumbsUp key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Fale Conosco</h2>
              <p className="text-slate-600 mb-8">
                Estamos prontos para atender sua solicitação em Rio do Sul ou Itapema. Escolha o canal de sua preferência.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Matriz - Rio do Sul</p>
                    <p className="text-slate-600 text-sm">R. José Fronza - Taboão, Rio do Sul - SC, 89160-719</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Filial - Itapema</p>
                    <p className="text-slate-600 text-sm">Rua 420, Morretes - Itapema/SC</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-slate-600">{phoneDisplay}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-slate-600">contato@ramosinstalacoes.com.br</span>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Serviço Desejado</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    value={formData.servico}
                    onChange={(e) => setFormData({...formData, servico: e.target.value})}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="eletrica">Instalações Elétricas</option>
                    <option value="ar-condicionado">Ar Condicionado</option>
                    <option value="aquecedor">Aquecedor a Gás</option>
                    <option value="outros">Outros Serviços</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="section-padding bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Serviços Elétricos e Climatização em Rio do Sul e Itapema</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              A Ramos Instalações é especialista em <strong>manutenção elétrica</strong> e <strong>climatização</strong> com mais de uma década de atuação em Santa Catarina. Oferecemos serviços de <strong>instalação de ar condicionado em Rio do Sul</strong> e <strong>Itapema</strong>, além de soluções completas para <strong>aquecedores a gás</strong>. Nossa equipe técnica é altamente capacitada para garantir a segurança da sua rede elétrica, seguindo todas as normas vigentes. Se você busca por um eletricista de confiança ou assistência técnica para seu ar condicionado, a Ramos Instalações é a escolha certa.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Logo />
            <div className="flex gap-6">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">Facebook</a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">Instagram</a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Ramos Instalações. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              CNPJ: 23.468.266/0001-69 | Rio do Sul - SC
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Falar com Especialista
        </span>
      </a>
    </div>
  );
}
