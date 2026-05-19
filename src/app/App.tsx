import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  Sparkles,
  BookOpen,
  MapPin,
  Instagram,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const galleryImages = [
    'https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=800',
    'https://images.unsplash.com/photo-1760704892974-60b5ddb59825?w=800',
    'https://images.unsplash.com/photo-1774885370242-1c9c77093513?w=800',
    'https://images.unsplash.com/photo-1768054193070-ec10b5583bc4?w=800',
    'https://images.unsplash.com/photo-1774885370230-ad8bf961ae03?w=800',
    'https://images.unsplash.com/photo-1561400502-8a4c8e0c956c?w=800',
    'https://images.unsplash.com/photo-1721521909309-a7bafb49dcf1?w=800',
    'https://images.unsplash.com/photo-1648737851201-bfecf92b7b06?w=800'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl md:text-3xl font-bold text-blue-600">
                Brinque Aki 🎈
              </span>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('espaco')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Espaço
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contato
              </button>
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20na%20Brinque%20Aki"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Agendar Visita
              </a>
            </div>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection('espaco')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Espaço
                </button>
                <button
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Galeria
                </button>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
                >
                  Contato
                </button>
                <a
                  href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20na%20Brinque%20Aki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all text-center font-semibold"
                >
                  Agendar Visita
                </a>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A brinquedoteca mais divertida da cidade 🎈
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Ambiente seguro, moderno e cheio de diversão para as crianças.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('espaco')}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold text-lg"
                >
                  <span>Conhecer Espaço</span>
                  <ArrowRight size={20} />
                </button>
                <a
                  href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Brinque%20Aki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold text-lg"
                >
                  <span>Conversar no WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1759330203240-b89ccee8840f?w=1200"
                  alt="Crianças brincando na brinquedoteca"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decoração */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="espaco" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a Brinque Aki?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos o melhor ambiente para o desenvolvimento e diversão das crianças
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Segurança */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ambiente Seguro</h3>
              <p className="text-gray-700 leading-relaxed">
                Espaço monitorado e preparado com todo cuidado para receber as crianças
                com máxima segurança. Brinquedos certificados e equipe treinada.
              </p>
            </motion.div>

            {/* Card 2 - Atividades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Atividades Criativas</h3>
              <p className="text-gray-700 leading-relaxed">
                Brincadeiras educativas, recreação supervisionada e diversão garantida
                todos os dias. Estimulamos a criatividade e o desenvolvimento infantil.
              </p>
            </motion.div>

            {/* Card 3 - Dever de Casa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Auxílio com Dever de Casa</h3>
              <p className="text-gray-700 leading-relaxed">
                Ajudamos as crianças com suas atividades escolares de forma leve,
                divertida e pedagógica. Aprendizado com diversão!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Conheça Nosso Espaço 📸
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Um ambiente colorido, moderno e preparado para a diversão das crianças
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="contato" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Onde Estamos 📍
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Venha nos fazer uma visita! Estamos esperando você e sua família
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.8326890975895!2d-46.87764232406238!3d-23.179686879132394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26e0d8f8e86d%3A0x5c8e8c8e8c8e8c8e!2sRua%20do%20Retiro%2C%20455%20-%20Jundiai%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1621234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-4 rounded-2xl">
              <MapPin className="text-blue-600" size={24} />
              <span className="text-gray-800 font-medium">
                Rua do Retiro, 455 - Jundiaí, SP
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Instagram className="mx-auto mb-6 text-pink-600" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Acompanhe Nossa Rotina no Instagram
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Veja mais fotos, vídeos e novidades da nossa brinquedoteca
            </p>
            <a
              href="https://instagram.com/brinqueaki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-lg"
            >
              <Instagram size={24} />
              <span>Seguir @brinqueaki</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Venha conhecer a Brinque Aki 🎈
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Agende uma visita e descubra por que somos a melhor opção para seu filho
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20na%20Brinque%20Aki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl font-bold text-lg"
            >
              Agendar Agora
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Brinque Aki 🎈</h3>
              <p className="text-gray-400">
                A brinquedoteca mais divertida e segura da cidade.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <p className="mb-2">📞 (11) 99999-9999</p>
              <p className="mb-2">📧 contato@brinqueaki.com.br</p>
              <p>📍 Rua do Retiro, 455 - Jundiaí, SP</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Horário</h4>
              <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 9h às 13h</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2026 Brinque Aki Brinquedoteca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão WhatsApp Flutuante */}
      <motion.a
        href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Brinque%20Aki"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </div>
  );
}
