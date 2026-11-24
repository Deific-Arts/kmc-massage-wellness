const site = 'https://kmcmassagewellness.com';

export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: `${site}/`,
      name: 'KMC Massage and Wellness',
      inLanguage: 'en-US',
      publisher: { '@id': `${site}/#business` },
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': `${site}/#business`,
      name: 'KMC Massage and Wellness',
      legalName: 'KMC Massage and Wellness P.C.',
      url: `${site}/`,
      telephone: '+1-586-241-3461',
      email: 'kmcmassagewellness@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '43800 Garfield Rd, Suite 101',
        addressLocality: 'Clinton Township',
        addressRegion: 'MI',
        postalCode: '48038',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 42.619144,
        longitude: -82.955047,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '12:00',
          closes: '18:00',
        },
      ],
      potentialAction: {
        '@type': 'ReserveAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://kimberlylaughtoncoleman.glossgenius.com/book',
          actionPlatform: [
            'https://schema.org/DesktopWebPlatform',
            'https://schema.org/MobileWebPlatform',
          ],
        },
        result: { '@type': 'Reservation', name: 'Massage appointment' },
      },
    },
  ],
};
