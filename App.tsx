import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Disciplines from './components/Disciplines';
import AICoach from './components/AICoach';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-sanctum-black min-h-screen w-full relative">
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.03] z-[100]" />
      
      <Header />
      <Hero />
      <Manifesto />
      <Disciplines />
      
      {/* Locations / Membership Section - Updated for Blaze Combat */}
      <section id="locations" className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-sanctum-orange font-bold tracking-widest text-sm uppercase mb-4 block">Headquarters</span>
            <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-none mb-8 italic">
              VISIT THE<br/>ARENA
            </h2>
            <div className="flex flex-col gap-6 mb-8">
                <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Address</h4>
                    <p className="text-lg font-medium text-black/70">
                    Back Side Of Mahalaxmi Oil Showroom,<br/>
                    Ashoknagar, Nanded, Maharashtra<br/>
                    (Opp. Damam Traders, Gokul Nagar)
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Hours</h4>
                    <p className="text-lg font-medium text-black/70">
                    Open until 8:00 PM<br/>
                    <span className="text-sm text-sanctum-orange">Contact for batch timings</span>
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold uppercase mb-2">Contact</h4>
                    <p className="text-lg font-medium text-black/70">
                    +91 79999 72159
                    </p>
                </div>
            </div>
            
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Blaze+Combat+Club+Nanded', '_blank')}
              className="border-2 border-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Get Directions
            </button>
          </div>
          <div className="order-1 md:order-2 h-[600px] bg-black w-full overflow-hidden relative group">
             {/* Combat Gym Image */}
             <img 
              src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 grayscale group-hover:grayscale-0"
              alt="Blaze Combat Arena"
             />
             <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
                 <span className="text-xs font-bold uppercase tracking-widest text-black">Ashoknagar, Nanded</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
      <AICoach />
    </main>
  );
}

export default App;