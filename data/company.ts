export const company = {
  brand: 'ScrubXpert',
  legalName: 'E K Industry',
  tagline: 'Precision-made cleaning tools, manufactured for the trade.',
  domain: 'https://www.scrubxpert.co.in',
  phone: '+91 9625787681',
  phoneDisplay: '+91 96257 87681',
  whatsappLink: 'https://wa.me/919625787681',
  whatsappNumber: '919625787681',
  email: 'ekindustrydelhi@gmail.com',
  address: {
    line1: 'G.F. 63, Akbar Pur Majra',
    line2: 'Near Jaton Wali Choupal',
    city: 'North West Delhi',
    pin: '110036',
    country: 'India',
  },
  mapsQuery: 'E+K+Industry+Akbar+Pur+Majra+North+West+Delhi+110036',
  social: {
    // Reserved for future use — left empty intentionally, do not fabricate.
  },
  founded: 'E K Industry',
  gstRegistered: true,
} as const;

export const whatsappMessage = (context?: string) => {
  const base = context
    ? `Hello ScrubXpert, I'd like to enquire about ${context}.`
    : `Hello ScrubXpert, I'd like to enquire about wholesale pricing and dealership.`;
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(base)}`;
};
