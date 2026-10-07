import { useEffect } from 'react';

export default function StructuredData() {
  useEffect(() => {
    // Generate and inject JSON-LD structured data script
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Restaurant',
          '@id': 'https://coffeeheavenstafford.co.uk/#restaurant',
          'name': 'Coffee Heaven',
          'image': '/images/hero_coffee_pour_1791376059674.jpg',
          'priceRange': '££',
          'servesCuisine': 'Artisan Coffee, Breakfast, Brunch, Homemade Lunch, Pastries, Cakes',
          'telephone': '+441785123456',
          'url': 'https://coffeeheavenstafford.co.uk',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '125 Market Street',
            'addressLocality': 'Stafford',
            'postalCode': 'ST16 2AB',
            'addressCountry': 'GB',
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 52.8066,
            'longitude': -2.1165,
          },
          'hasMap': 'https://google.com/maps?q=Coffee+Heaven+125+Market+Street+Stafford+ST16+2AB',
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              'opens': '07:30',
              'closes': '17:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': 'Saturday',
              'opens': '08:00',
              'closes': '18:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': 'Sunday',
              'opens': '09:00',
              'closes': '16:00',
            },
          ],
          'amenityFeature': [
            {
              '@type': 'LocationFeatureSpecification',
              'name': 'Dog Friendly',
              'value': true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              'name': 'Wheelchair Accessible',
              'value': true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              'name': 'Parking Available',
              'value': true,
            },
            {
              '@type': 'LocationFeatureSpecification',
              'name': 'Secure Bike Racks',
              'value': true,
            },
          ],
        },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data-json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('structured-data-json');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // Side-effect only component
}
