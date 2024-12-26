import React from 'react';

const AwardsSection = () => {
  const certifications = [
    {
      name: 'ISO 9001',
      image: '/supersiesta/assets/images/Iso9001.png',
      description: 'Management de la Qualité'
    },
    {
      name: 'ISO 14001',
      image: '/supersiesta/assets/images/Iso14001.png',
      description: 'Management Environnemental'
    },
    {
      name: 'ISO 45001',
      image: '/supersiesta/assets/images/Iso45001.png',
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

        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert) => (
            <img
              key={cert.name}
              src={cert.image}
              alt={cert.name}
              className="h-24 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
