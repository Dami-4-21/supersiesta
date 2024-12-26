import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quelle est la durée de la garantie?',
      answer: 'Tous nos matelas sont garantis pendant 5 ans contre tout défaut de fabrication.'
    },
    {
      question: 'Comment choisir la bonne fermeté de matelas?',
      answer: 'Le choix dépend de votre position de sommeil et de votre poids. Nous vous conseillons de nous contacter pour un conseil personnalisé.'
    },
    {
      question: 'Quels sont les délais de livraison?',
      answer: 'La livraison est gratuite partout en Tunisie et s\'effectue généralement sous 2-3 jours ouvrables.'
    },
    {
      question: 'Comment entretenir mon matelas?',
      answer: 'Nous recommandons de retourner votre matelas tous les 6 mois et d\'utiliser un protège-matelas pour prolonger sa durée de vie.'
    },
    {
      question: 'Proposez-vous un service d\'installation?',
      answer: 'Oui, nos livreurs peuvent installer votre nouveau matelas gratuitement lors de la livraison.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Questions Fréquentes
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-indigo-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-indigo-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">
            Vous ne trouvez pas la réponse que vous cherchez?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Notre équipe est là pour répondre à toutes vos questions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white 
                     font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}