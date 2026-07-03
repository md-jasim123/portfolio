const MapSection = () => {
  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-white/50 mb-2">FIND ME</p>
        <h2 className="text-3xl font-bold text-white mb-6">Where I'm Based</h2>
        <div className="rounded-2xl overflow-hidden">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116935.6154702749!2d86.03672063954872!3d23.66744591427788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4230341010871%3A0xf89f21d9001d5036!2sBokaro%20Steel%20City%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1782989243203!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;