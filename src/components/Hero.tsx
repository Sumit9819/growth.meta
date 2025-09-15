import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Unlock Your Business&apos;s Full Potential</h1>
        <p className="text-lg md:text-2xl mb-8">We are a full-service digital marketing agency that helps businesses grow and succeed online.</p>
        <Link href="/get-started" className="px-8 py-4 bg-primary text-white font-semibold rounded-full text-lg glow-effect lifted-shadow">
          Get Started
        </Link>
      </div>
    </section>
  );
}
