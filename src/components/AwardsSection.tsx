import React from 'react';

const AwardsSection = () => {
  const certifications = [
    {
      name: 'ISO 9001',
      image: '/src/Iso9001.png',
      description: 'Management de la Qualité'
    },
    {
      name: 'ISO 14001',
      image: '/src/Iso14001.png',
      description: 'Management Environnemental'
    },
    {
      name: 'ISO 45001',
      image: '/src/Iso45001.png',
      description: 'Santé et Sécurité au Travail'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Certifications et Garanties de Qualité
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos certifications internationales témoignent de notre engagement envers la qualité, 
            l'environnement et la sécurité dans tous nos processus de fabrication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={`Certification ${cert.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
