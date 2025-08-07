-- Insert sample properties
INSERT INTO properties (title, description, price, location, property_type, status, bedrooms, bathrooms, area, features, images) VALUES
(
  'Modern Family Villa',
  'This stunning modern family villa offers the perfect blend of luxury and comfort. Located in the prestigious Lekki area, this property features contemporary design, spacious rooms, and premium finishes throughout.',
  45000000,
  'Lekki, Lagos',
  'Villa',
  'For Sale',
  4,
  3,
  '350 sqm',
  ARRAY['Modern kitchen with island', 'Spacious living areas', 'Master bedroom with walk-in closet', 'Private garden', 'Parking for 3 cars', '24/7 security', 'Swimming pool'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
),
(
  'Luxury Apartment',
  'Experience luxury living in this beautifully designed apartment located in the heart of Victoria Island. Features premium finishes and stunning city views.',
  25000000,
  'Victoria Island, Lagos',
  'Apartment',
  'For Sale',
  3,
  2,
  '180 sqm',
  ARRAY['City views', 'Modern kitchen', 'Gym access', 'Swimming pool', 'Concierge service', 'Parking space'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
),
(
  'Executive Duplex',
  'Spacious executive duplex in the serene environment of Ikeja GRA. Perfect for families looking for comfort and elegance.',
  35000000,
  'Ikeja GRA, Lagos',
  'Duplex',
  'For Sale',
  5,
  4,
  '280 sqm',
  ARRAY['Two living rooms', 'Modern kitchen', 'Master suite', 'Guest rooms', 'Garden', 'Parking for 2 cars', 'Generator backup'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
),
(
  'Waterfront Penthouse',
  'Stunning penthouse with lake views in the prestigious Munyonyo area.',
  320000000,
  'Munyonyo, Kampala',
  'Penthouse',
  'For Sale',
  4,
  5,
  '450 sqm',
  ARRAY['Lake views', 'Private terrace', 'Jacuzzi', 'Modern kitchen', 'Master suite', 'Parking for 3 cars', '24/7 security'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
),
(
  'Family Bungalow',
  'Comfortable family bungalow in a quiet neighborhood perfect for growing families.',
  75000000,
  'Ntinda, Kampala',
  'Bungalow',
  'For Sale',
  3,
  2,
  '200 sqm',
  ARRAY['Garden', 'Modern kitchen', 'Living room', 'Dining area', 'Parking for 2 cars', 'Security'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
),
(
  'Contemporary Townhouse',
  'Modern townhouse in a gated community with excellent amenities.',
  125000000,
  'Bugolobi, Kampala',
  'Townhouse',
  'For Sale',
  4,
  3,
  '250 sqm',
  ARRAY['Gated community', 'Swimming pool', 'Gym', 'Modern kitchen', 'Garden', 'Parking space'],
  ARRAY['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600']
);

-- Insert admin user (password: admin123)
INSERT INTO admin_users (email, password_hash, full_name) VALUES
('admin@delighthomes.com', '$2b$10$rQZ8kHWfQxwjKV.nVXJ0/.vKJ0pQZ8kHWfQxwjKV.nVXJ0/.vKJ0pQ', 'Admin User');
