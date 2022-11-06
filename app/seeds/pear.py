from app.models import db, Listing, Image, Review, Type
from app.models.pear import Amenity

types = [
    { 'type': 'OMG!', 'alias': 'omg' },
    { 'type': 'Luxe', 'alias': 'luxe' },
    { 'type': 'Beachfront', 'alias': 'beach' },
    { 'type': 'Mansions', 'alias': 'mansions' },
    { 'type': 'Cabins', 'alias': 'cabins' },
    { 'type': 'Countryside', 'alias': 'countryside' },
    { 'type': 'Desert', 'alias': 'desert' },
    { 'type': 'Lakefront', 'alias': 'lakefront' },
    { 'type': 'Tiny homes', 'alias': 'tinyhomes' },
    { 'type': 'Castles', 'alias': 'castles' },
    { 'type': 'Containers', 'alias': 'containers' },
    { 'type': 'Camping', 'alias': 'camping' },
    { 'type': 'Skiing', 'alias': 'skiing' },
    { 'type': 'Islands', 'alias': 'islands' }
]

amenities = [
    { 'alias': 'ac', 'name': 'Air conditioning'},
    { 'alias': 'bbq', 'name': 'BBQ grill'},
    { 'alias': 'coffee', 'name': 'Coffee maker'},
    { 'alias': 'firepit', 'name': 'Fire pit'},
    { 'alias': 'fireplace', 'name': 'Indoor fireplace'},
    { 'alias': 'heat', 'name': 'Heating'},
    { 'alias': 'hottub', 'name': 'Private hot tub'},
    { 'alias': 'kitchen', 'name': 'Kitchen'},
    { 'alias': 'outdoor', 'name': 'Outdoor furniture'},
    { 'alias': 'pets', 'name': 'Pets welcome'},
    { 'alias': 'pool', 'name': 'Private pool'},
    { 'alias': 'tv', 'name': 'TV'},
    { 'alias': 'wifi', 'name': 'Wifi'},
    { 'alias': 'workspace', 'name': 'Dedicated workspace'}
]

listings = [
        {
            "name": "EAGLE'S WATCH MALIBU- Architectural w/ Ocean View",
            "owner_id": 2,
            "address": '123 Fake Street',
            "city": 'Malibu',
            "state": 'CA',
            "description": "Eagle's Watch is one of Malibu's most famous houses, impossible to miss while driving the Pacific Coast Highway and designed by legendary architect Harry Gesner. Perched above the Pacific Ocean, Eagle’s Watch has the best unobstructed panoramic view in Malibu. Perfect for entertaining with dramatic outdoor and indoor spaces, the views from every location are simply stunning.",
            "price": 1175,
            "max_guests": 8,
            "bed": 3,
            "bath": 4,
            "type": 'omg',
            "amenity": ['kitchen', 'wifi', 'ac', 'fireplace', 'heat', 'workspace', 'coffee', 'outdoor', 'pets', 'hottub', 'tv']
        },
        {
            "name": "Spaceship Destination!",
            "owner_id": 2,
            "address": '123 Fake Street',
            "city": 'Brush Prairie',
            "state": 'WA',
            "description": "726 square feet of one of a kind 1960's futuristic lodging, set down on 5 acres in the rural Hockinson hills. Next to a year around creek, among trees, with hills and meadows to explore. Spaceship amenities include a wet bar(Lunar Lounge) with fridge, gamma ray microwave, and Mr. Fusion coffee maker.",
            "price": 125,
            "max_guests": 4,
            "bed": 2,
            "bath": 1,
            "type": 'omg',
            "amenity": ['wifi', 'ac', 'heat', 'workspace', 'coffee', 'bbq', 'outdoor', 'tv']
        },
        {
            "name": "The Bloomhouse by Lodgewell>>Fairy Tale Escape",
            "owner_id": 2,
            "address": '123 Fake Street',
            "city": 'Austin',
            "state": 'TX',
            "description": "Ever stay in a giant seashell unicorn? No, you haven’t, but now you can cross it off your bucket list. This magical work of art is part Willy Wonka, part Big Lebowski, and totally unlike anywhere else. Do it for the ‘gram, but also for your soul.",
            "price": 638,
            "max_guests": 4,
            "bed": 2,
            "bath": 1,
            "type": 'omg',
            "amenity": ['kitchen', 'wifi', 'ac', 'fireplace', 'heat', 'workspace', 'coffee', 'outdoor', 'tv']
        },
        {
    "name": 'Conestoga Wagon on Dude Ranch NEAR LAS VEGAS',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Sandy Valley',
    "state": 'NV',
    "description": 'Experience this awesome, authentic covered wagon located at Sandy Valley Ranch. We are located only 45 minutes away from Las Vegas. If you are looking for a fun little family get away, this is the perfect place. Enjoy the activities offered at our ranch including cowboy for a day, horse rides, cattle drives, rodeos and lots more!',
    "price": 125,
    "max_guests": 4,
    "bed": 3,
    "bath": 1,
    "type": 'omg',
    "amenity": [
      'bbq',
      'heat',
      'fireplace',
      'kitchen',
      'coffee',
      'outdoor',
      'pets'
    ]
  },
  {
    "name": 'Architectural wonder in the woods',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Rhinebeck',
    "state": 'NY',
    "description": 'Enjoy a weekend or a few days eco-friendly retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer. The house is an open plan, and though it has zero bedrooms, it can sleep 3!',
    "price": 475,
    "max_guests": 4,
    "bed": 3,
    "bath": 2,
    "type": 'omg',
    "amenity": [
      'ac',
      'coffee',
      'fireplace',
      'kitchen',
      'wifi',
      'workspace',
      'outdoor'
    ]
  },
  {
    "name": 'Forest Garden Yurts',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Galena',
    "state": 'MO',
    "description": 'Glamping at its finest! Forest Garden Yurts are wooden yurts designed and built by Bill Coperthwaite in the 1970s for Tom Hess and Lory Brown as home and pottery studio. Tucked away in 4 acres of Ozark forest, the yurts are simple in nature yet abound with artistic details. The home yurt has a kitchen, bedroom, and a nook living room. The bathroom yurt is separate but has a covered walk.',
    "price": 128,
    "max_guests": 6,
    "bed": 5,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'kitchen', 'ac', 'fireplace', 'firepit', 'outdoor' ]
  },
  {
    "name": 'The Kellogg Doolittle House',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Joshua Tree',
    "state": 'CA',
    "description": 'Glamping at its finest! Forest Garden Yurts are wooden yurts designed and built by Bill Coperthwaite in the 1970s for Tom Hess and Lory Brown as home and pottery studio. Tucked away in 4 acres of Ozark forest, the yurts are simple in nature yet abound with artistic details. The home yurt has a kitchen, bedroom, and a nook living room. The bathroom yurt is separate but has a covered walk.',
    "price": 6500,
    "max_guests": 6,
    "bed": 3,
    "bath": 3,
    "type": 'omg',
    "amenity": [
      'ac',        'coffee',
      'fireplace', 'heat',
      'hottub',    'kitchen',
      'bbq',       'outdoor',
      'tv',        'wifi',
      'workspace'
    ]
  },
  {
    "name": 'Hobbit Cottage',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Cedar City',
    "state": 'UT',
    "description": "Tucked away in our peaceful garden, this modern Hobbit Cottage will delight you! Although it's not the Shire of Middle Earth from LOTR, it's our little piece of paradise. We are located near Bryce Canyon, Brian Head and Zion National Park, Kannarraville Falls.",
    "price": 62,
    "max_guests": 2,
    "bed": 1,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'wifi', 'workspace', 'ac', 'outdoor' ]
  },
  {
    "name": 'East Side Beehive',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Austin',
    "state": 'TX',
    "description": 'Clean, Zen modern backyard cottage, easy access to SXSW, convention center, great dining, and public transportation. Gorgeous, peaceful space, close to the action but perfect for rest and recharging. Easy access to SXSW, ACL, F1 and all festivals.',
    "price": 254,
    "max_guests": 2,
    "bed": 1,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'kitchen', 'wifi', 'workspace', 'ac', 'outdoor' ]
  },
  {
    "name": 'Charming Wood-roof Simple Survival Earthship',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'El Prado',
    "state": 'NM',
    "description": 'A small and humble Earthship nestled in the high desert of Taos, New Mexico. Earthships offer the opportunity to experience off-grid living with the amenities of modern-life but without the strong dependency on a fossil fuel-based grid infrastructure.',
    "price": 117,
    "max_guests": 4,
    "bed": 1,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'kitchen', 'workspace', 'wifi', 'pets', 'ac', 'outdoor' ]
  },
  {
    "name": 'The Round House',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Delta',
    "state": 'CO',
    "description": 'Welcome to the Round House! This one-of-a-kind, converted grain silo has everything you need to feel right at home. The bedroom is upstairs. Delta is a gateway to the Western Slope of Colorado. Grand Mesa, Black Canyon National Monument and innumerable outdoor destinations are within a short distance.',
    "price": 100,
    "max_guests": 2,
    "bed": 1,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'wifi', 'kitchen', 'workspace', 'pets', 'tv', 'ac' ]
  },
  {
    "name": 'The Kyo͞ob at Shash Dine',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Coconino County',
    "state": 'AZ',
    "description": "The Kyo͞ob. A modern off grid cabin here at Shash Dine'. Your basecamp for adventure!",
    "price": 263,
    "max_guests": 2,
    "bed": 1,
    "bath": 0,
    "type": 'omg',
    "amenity": [ 'fireplace', 'coffee', 'heat' ]
  },
  {
    "name": 'Crystal Peak Lookout',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Fernwood',
    "state": 'ID',
    "description": "The lookout is open year round with a wood fired stove to keep warm at night or heat your morning coffee. A wood fired sauna sits below to relax and rejuvenate your body after a big hike or snowshoeing adventure. What's that other little wooden building? No fire lookout is complete without an outhouse!",
    "price": 200,
    "max_guests": 2,
    "bed": 1,
    "bath": 0,
    "type": 'omg',
    "amenity": [ 'kitchen', 'pets', 'firepit', 'fireplace', 'outdoor' ]
  },
  {
    "name": "Honey's Silo Retreat",
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Kalispell',
    "state": 'MT',
    "description": "Honey's Silo is in the very NW corner of my 20 acre property in the country surrounded by Alfalfa & Wheat fields, The property borders Blaine creek- a natural wet land & an abundance of wild life.",
    "price": 125,
    "max_guests": 2,
    "bed": 1,
    "bath": 1,
    "type": 'omg',
    "amenity": [ 'wifi', 'tv', 'outdoor', 'ac', 'kitchen' ]
  },
  {
    "name": 'Beverly Hills Maison',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Beverly Hills',
    "state": 'CA',
    "description": 'Inspired by the French countryside, this Beverly Hills residence exudes the ideal mix of modernity and charm. Canyon landscapes undulate beyond the soaring windows; inside, the home is drenched in natural light. Slip into the zero-edge pool whenever you need an instant refresh. Trees cast dappled shadows on the lavish yard.',
    "price": 4341,
    "max_guests": 12,
    "bed": 6,
    "bath": 5,
    "type": 'luxe',
    "amenity": [
      'ac',        'bbq',
      'coffee',    'fireplace',
      'heat',      'kitchen',
      'outdoor',   'pool',
      'tv',        'wifi',
      'workspace'
    ]
  },
  {
    "name": 'Deer Creek Ridge',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Malibu',
    "state": 'CA',
    "description": 'Rise above it all at this Mediterranean-style villa perched on the backbone of Santa Monica canyons. You get 39 acres of epic indoor/outdoor living with sea views, pavilions, and loads of archways atop honeycomb tile floors and antiques. Kick back in the pool or hot tub, hike past mature agave on private trails, and watch the sunset over cocktails.',
    "price": 4800,
    "max_guests": 8,
    "bed": 4,
    "bath": 5,
    "type": 'luxe',
    "amenity": [
      'ac',      'bbq',
      'coffee',  'fireplace',
      'heat',    'hottub',
      'kitchen', 'outdoor',
      'pool',    'tv',
      'wifi',    'workspace'
    ]
  },
  {
    "name": 'Jackrabbit Luxury Villa',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Paradise Valley',
    "state": 'AZ',
    "description": 'This expansive, mountain view villa offers a dream combination of warm climate, lush grounds and pool, and rapid access to Paradise Valley. Swaddled by woodland and a rich, setting sun, guests can relax among the rosé-pink pillars and arches of the sun terrace, before retiring to the grand fireplace sitting room.',
    "price": 1481,
    "max_guests": 16,
    "bed": 11,
    "bath": 7,
    "type": 'luxe',
    "amenity": [
      'ac',      'bbq',
      'coffee',  'fireplace',
      'heat',    'hottub',
      'kitchen', 'outdoor',
      'pool',    'tv',
      'wifi'
    ]
  },
  {
    "name": 'Three Sisters Lookout',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Breckenridge',
    "state": 'CO',
    "description": 'Enjoy the majestic Rockies and the classic Breckenridge ambience in a brand-new way at Three Sisters Lookout. Perched on Baldy Mountain, this recently built luxury villa is a private retreat that looks down on the town and across to the slopes of the Ten Mile Range—a stunning vista any time of year. Four bedrooms and cozy modern lodge-inspired interiors make this Colorado vacation rental a spacious setting for a family holiday or the perfect backdrop for a secluded, away-from-it-all honeymoon.',
    "price": 511,
    "max_guests": 16,
    "bed": 4,
    "bath": 5,
    "type": 'luxe',
    "amenity": [
      'ac',      'bbq',
      'coffee',  'fireplace',
      'heat',    'hottub',
      'kitchen', 'outdoor',
      'pool',    'tv',
      'wifi'
    ]
  },
  {
    "name": 'White Oak Haven',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Park City',
    "state": 'UT',
    "description": 'Pristine and expertly designed, this home comes with luxury amenities, services, and a dedicated trip designer.',
    "price": 1395,
    "max_guests": 16,
    "bed": 10,
    "bath": 6,
    "type": 'luxe',
    "amenity": [
      'ac',      'bbq',
      'coffee',  'fireplace',
      'heat',    'hottub',
      'kitchen', 'outdoor',
      'pool',    'tv',
      'wifi',    'workspace'
    ]
  },
  {
    "name": 'Vista Estate On Lake Austin',
    "owner_id": 2,
    "address": '123 Fake Street',
    "city": 'Austin',
    "state": 'TX',
    "description": 'Lake Austin bends around the hillside in the bird’s-eye views from this modern stone home. A freeform pool and hot tub wind across a terrace, a firepit crackles, and a funicular leads down to a covered sitting area at the lake’s shore. The open-concept great room looks out over the water on 2 sides, and its wall of sliding doors leads to the pool deck.',
    "price": 3437,
    "max_guests": 10,
    "bed": 3,
    "bath": 5,
    "type": 'luxe',
    "amenity": [
      'ac',        'bbq',
      'coffee',    'firepit',
      'fireplace', 'heat',
      'hottub',    'kitchen',
      'outdoor',   'pool',
      'tv',        'wifi',
      'workspace'
    ]
  }
]

images = [
    { 'listing_id': 1, 'url': 'https://a0.muscache.com/im/pictures/2e5ce6c9-4935-49ce-891e-e6f7251a8590.jpg' },
    { 'listing_id': 1, 'url': 'https://a0.muscache.com/im/pictures/76284c68-18ad-4a97-a572-77d6c5839798.jpg' },
    { 'listing_id': 1, 'url': 'https://a0.muscache.com/im/pictures/da9ac63d-24e4-470a-b06f-6c1092d64feb.jpg' },
    { 'listing_id': 1, 'url': 'https://a0.muscache.com/im/pictures/2271a564-f8d2-4b1e-b618-a7e0cedc9d7c.jpg' },
    { 'listing_id': 1, 'url': 'https://a0.muscache.com/im/pictures/6406fb06-1b0d-450c-9e5b-6d38703c84bb.jpg' },
    { 'listing_id': 2, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/3a6e9b62-da6b-4a76-af0b-003eafc7b8ec.jpeg' },
    { 'listing_id': 2, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/9b3dcfc6-da57-4c07-a1bd-11edc37ad57f.jpeg' },
    { 'listing_id': 2, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/4ade0a57-af7a-43e5-99e9-276e70181819.jpeg' },
    { 'listing_id': 2, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/8fd7a848-2bef-4a24-9ce4-393e4887ca8e.jpeg' },
    { 'listing_id': 2, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51165983/original/31d9b78c-5910-48f5-b0e6-7c4e845d0c0f.jpeg' },
    { 'listing_id': 3, 'url': 'https://a0.muscache.com/im/pictures/bdf208ac-1bb3-4b76-be52-04fe220863f1.jpg' },
    { 'listing_id': 3, 'url': 'https://a0.muscache.com/im/pictures/d1469e5f-7ad1-4f47-8a92-aed6c5fa5fb1.jpg' },
    { 'listing_id': 3, 'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-28254684/original/de6454fd-7701-4e6c-ab9e-cc5ff9ad1adf.jpeg' },
    { 'listing_id': 3, 'url': 'https://a0.muscache.com/im/pictures/a196e429-5c44-46ab-829e-238186175d3f.jpg' },
    { 'listing_id': 3, 'url': 'https://a0.muscache.com/im/pictures/01314756-65e2-43ee-be57-8a3b86875a06.jpg' },
    {
    'listing_id': 4,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/eb1bb383-4b70-45ae-b3ce-596f83436e6f.jpeg'
 },
{
    'listing_id': 4,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/2e48c3d0-bd54-440c-a53e-acbd03c47cc3.jpeg'
 },
{
    'listing_id': 4,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/1cd58cdf-cf3e-4cd8-9571-d32338e4d699.jpeg'
 },
{
    'listing_id': 4,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/72c22d67-b651-4e2d-be8c-f3bb96e6511f.jpeg'
 },
{
    'listing_id': 4,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/295bfbc6-e68f-4522-9e86-ceb949dc478e.jpeg'
 },
{
    'listing_id': 5,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/a8fa243d-dac8-4238-93e5-f7aa33072ff8.jpeg'
 },
{
    'listing_id': 5,
    'url': 'https://a0.muscache.com/im/pictures/9b04b01e-3244-4f1a-b2ae-934590a87fd2.jpg'
 },
{
    'listing_id': 5,
    'url': 'https://a0.muscache.com/im/pictures/9b714aea-140a-4e6e-9de5-1a40861acf41.jpg'
 },
{
    'listing_id': 5,
    'url': 'https://a0.muscache.com/im/pictures/53324c59-7a5f-43d2-b00e-6eb32352e4fa.jpg'
 },
{
    'listing_id': 5,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-21409981/original/b040e61a-97da-4815-8b6c-11d7be7db1f9.jpeg'
 },
{
    'listing_id': 6,
    'url': 'https://a0.muscache.com/im/pictures/00adf705-3791-40e9-8512-ca5a7d619c11.jpg'
 },
{
    'listing_id': 6,
    'url': 'https://a0.muscache.com/im/pictures/46ded2b4-9ce1-4a3f-a71a-b6746fdcd452.jpg'
 },
{
    'listing_id': 6,
    'url': 'https://a0.muscache.com/im/pictures/7896a749-8547-4564-9801-63d0b10fe9d4.jpg'
 },
{
    'listing_id': 6,
    'url': 'https://a0.muscache.com/im/pictures/ec4415c1-2c87-4077-8920-a17eb1bac2e3.jpg'
 },
{
    'listing_id': 6,
    'url': 'https://a0.muscache.com/im/pictures/00a8d3a2-e072-4c6f-b076-189af0d2ed86.jpg'
 },
{
    'listing_id': 7,
    'url': 'https://i.imgur.com/0uVsV2H.png'
 },
{
    'listing_id': 7,
    'url': 'https://i.imgur.com/2RvNXnm.png'
 },
{
    'listing_id': 7,
    'url': 'https://i.imgur.com/jy3PuGf.png'
 },
{
    'listing_id': 8,
    'url': 'https://a0.muscache.com/im/pictures/56467892-0d23-4ab1-8302-9c3d0d5e52cd.jpg'
 },
{
    'listing_id': 8,
    'url': 'https://a0.muscache.com/im/pictures/a7f86e41-3cf5-4994-bc84-ce9036138149.jpg'
 },
{
    'listing_id': 8,
    'url': 'https://a0.muscache.com/im/pictures/c3cb8dbb-17d8-4bbf-b00e-4471d3e62a24.jpg'
 },
{
    'listing_id': 8,
    'url': 'https://a0.muscache.com/im/pictures/6f072cb6-0458-4325-acea-eeb8875db36a.jpg'
 },
{
    'listing_id': 8,
    'url': 'https://a0.muscache.com/im/pictures/587ddaf1-e1a9-4894-88c5-2564b4888d7a.jpg'
 },
{
    'listing_id': 9,
    'url': 'https://a0.muscache.com/im/pictures/82c577ee-3422-4fda-ae09-6716d76e8bef.jpg'
 },
{
    'listing_id': 9,
    'url': 'https://a0.muscache.com/im/pictures/69347092/f4d57c4d_original.jpg'
 },
{
    'listing_id': 9,
    'url': 'https://a0.muscache.com/im/pictures/69346909/2b5dcad5_original.jpg'
 },
{
    'listing_id': 9,
    'url': 'https://a0.muscache.com/im/pictures/69346905/c5d534fc_original.jpg'
 },
{
    'listing_id': 9,
    'url': 'https://a0.muscache.com/im/pictures/69347222/f92328be_original.jpg'
 },
{
    'listing_id': 10,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51752525/original/74a26c69-847c-4006-8d82-baee115fda1c.jpeg'
 },
{
    'listing_id': 10,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51752525/original/f05c9030-42e8-43ff-92c9-bb128981e020.jpeg'
 },
{
    'listing_id': 10,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51752525/original/8238f306-076f-4500-9a38-035d93ec84f0.jpeg'
 },
{
    'listing_id': 10,
    'url': 'https://a0.muscache.com/im/pictures/f3bac635-16ed-49ca-bc54-ba4c576656e5.jpg'
 },
 {
     'listing_id': 10,
     'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-51752525/original/012a7998-ebf5-4a69-9efe-f1619c1de09e.jpeg'
},
{
    'listing_id': 11,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-17670138/original/f28ff260-2b32-4b45-867d-4f099b4931fd.jpeg'
},
{
    'listing_id': 11,
    'url': 'https://a0.muscache.com/im/pictures/12ba96f3-b341-4b75-ad8f-edb4f48e77d7.jpg'
},
{
    'listing_id': 11,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-17670138/original/6b503b6f-dc3a-446b-8559-8cde03cdd06d.jpeg'
},
{
    'listing_id': 11,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-17670138/original/881471b9-8937-49cd-ad9f-12503c102d7b.jpeg'
},
{
    'listing_id': 11,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-17670138/original/cd14f46c-86fe-4e7a-97f6-224935dbd8b7.jpeg'
},
{
    'listing_id': 12,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-39663644/original/a80e270f-e366-49c4-8fff-ea5da49de54f.jpeg'
},
{
    'listing_id': 12,
    'url': 'https://a0.muscache.com/im/pictures/miso/Hosting-39663644/original/0608f099-4f2b-4803-9cd7-bcd48a0bdc06.jpeg'
},
{
    'listing_id': 13,
    'url': 'https://a0.muscache.com/im/pictures/c88d4356-9e33-4277-83fd-3053e5695333.jpg'
},
{
    'listing_id': 13,
    'url': 'https://a0.muscache.com/im/pictures/68582ab1-66e6-4bf7-a2e4-901f4af480ef.jpg'
},
{
    'listing_id': 13,
    'url': 'https://a0.muscache.com/im/pictures/ae57a6df-67a2-4175-80d6-aacd587a4d60.jpg'
},
{
    'listing_id': 13,
    'url': 'https://a0.muscache.com/im/pictures/b5c0a83e-9d4f-4dbf-9a53-430a4bea9ca4.jpg'
},
{
    'listing_id': 13,
    'url': 'https://a0.muscache.com/im/pictures/e5c55e08-14f1-4549-9e26-765321aed1d4.jpg'
},
{
    'listing_id': 14,
    'url': 'https://a0.muscache.com/im/pictures/4270f394-8caf-4e97-a9d5-102c681b3145.jpg'
},
{
    'listing_id': 14,
    'url': 'https://a0.muscache.com/im/pictures/94811b02-35be-4a9b-bdea-1193100547da.jpg'
},
{
    'listing_id': 14,
    'url': 'https://a0.muscache.com/im/pictures/7d4cd3a6-b4dc-4862-af05-c0c19fbc4b78.jpg'
},
{
    'listing_id': 14,
    'url': 'https://a0.muscache.com/im/pictures/63567b8f-b126-4064-9da1-acee72885a47.jpg'
},
{
    'listing_id': 14,
    'url': 'https://a0.muscache.com/im/pictures/7aef96dd-91bb-4709-b22a-2e53154237f1.jpg'
},
{
    'listing_id': 15,
    'url': 'https://a0.muscache.com/im/pictures/05adbc9a-9df9-4df6-9012-f69a442791e9.jpg'
},
{
    'listing_id': 15,
    'url': 'https://a0.muscache.com/im/pictures/6a5656d2-59c0-46d9-a9fd-4867ba53651d.jpg'
},
{
    'listing_id': 16,
    'url': 'https://a0.muscache.com/im/pictures/eae18718-58af-43d5-b309-f1b065fbb7fd.jpg'
},
{
    'listing_id': 17,
    'url': 'https://a0.muscache.com/im/pictures/43065b15-dfd7-44a8-9bf1-7e566d2fe123.jpg'
},
{
    'listing_id': 17,
    'url': 'https://a0.muscache.com/im/pictures/cc5f04f7-2323-4ea8-8228-e05767162e20.jpg'
},
{
    'listing_id': 17,
    'url': 'https://a0.muscache.com/im/pictures/873fdd16-b757-49c7-aab5-b0ff4fe190ea.jpg'
},
{
    'listing_id': 17,
    'url': 'https://a0.muscache.com/im/pictures/c6bba899-99c6-4918-82dc-1695a4176012.jpg'
},
{
    'listing_id': 17,
    'url': 'https://a0.muscache.com/im/pictures/75a54be9-1751-4c75-973f-b66ab53d753b.jpg'
},
{
    'listing_id': 18,
    'url': 'https://a0.muscache.com/im/pictures/ef3327a9-7d08-423f-93fc-a04a9369b8a3.jpg'
},
{
    'listing_id': 18,
    'url': 'https://a0.muscache.com/im/pictures/ad89377a-5c22-4b49-b365-1898c1da23b0.jpg'
},
{
    'listing_id': 19,
    'url': 'https://a0.muscache.com/im/pictures/b5053b80-1bf0-4f85-a832-f09408a996ce.jpg'
},
{
    'listing_id': 19,
    'url': 'https://a0.muscache.com/im/pictures/2d70a45b-eb0f-4069-a3b7-34e61741db4a.jpg'
},
{
    'listing_id': 19,
    'url': 'https://a0.muscache.com/im/pictures/66a7b24e-223b-4f33-a4da-671e8899d043.jpg'
},
{
    'listing_id': 20,
    'url': 'https://i.imgur.com/2skNlaN.png'
},
]

reviews = [
    {
        "user_id": 5,
        "listing_id": 1,
        "review_body": 'Beautiful, iconic house. Amazing views!!! Would stay here a million more times!',
        "rating": 4.67,
        "clean": 5,
        "comm": 4,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 4
        },
    {
        "user_id": 8,
        "listing_id": 1,
        "review_body": "Amazing location and incredible views. It’s a special place. For parents with young kids just note that there are many stairs inside and they are very steep. However, we had an amazing time and spent every night outside stargazing and enjoying the hot tub. The outdoor spaces are fantastic and the view is gorgeous. It was a special trip for our family.",
        "rating": 4.83,
        "clean": 5,
        "comm": 5,
        "check": 4,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 9,
        "listing_id": 1,
        "review_body": "Beautiful piece of Malibu history with amazing views. Great place to getaway and relax. Just amazing. Thank you for your hospitality and being such wonderful hosts.",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 12,
        "listing_id": 1,
        "review_body": "What a beautiful home! And such a kind host!",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 13,
        "listing_id": 1,
        "review_body": "The Eagle’s Watch home is a Malibu treasure and Katherine was a lovely host. Staying in this home is a gift and an experience all on its own. You won’t find better views in Malibu. We really loved our stay and we were sad to leave. Book this if you want a once of a lifetime experience.",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 15,
        "listing_id": 2,
        "review_body": "Very unique and clean and comfortable stay for a very reasonable rate. The host is very good with follow-ups and we got a warm welcome.",
        "rating": 4.5,
        "clean": 4,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 4,
        "val": 4
        },
    {
        "user_id": 17,
        "listing_id": 2,
        "review_body": "The Spaceship is awesome and we loved all of the little details that were included. The hosts are terrific and the setting for the ship is great. Altogether a wonderful place for an out-of-this-world adventure!",
        "rating": 4.5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 4,
        "loc": 4,
        "val": 4
        },
    {
        "user_id": 18,
        "listing_id": 2,
        "review_body": "This place is amazing and I loved the location. Close to things we needed but far enough away to feel like we were away from it all. The place had everything we needed. I definitely recommend grabbing some pizza and drinks from the Hockinson Market. It was just my son and I, and we definitely had fun exploring the spaceship and making memories. :)",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 3,
        "listing_id": 2,
        "review_body": "Every single detail was perfect. The grounds were beautiful. Very clean. Soft fluffy towels and blankets. Frogs outside. Watching the October mist come over the hill in the evening with the lit up spaceship was beautiful. So many amazing details inside and out!",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 4,
        "listing_id": 2,
        "review_body": "We loved the spaceship! What an amazing place to share with others. Thank you so much for everything and we shot some amazing photos- One of the best places I’ve gotten to create. I hope to return soon and bring my niece and nephew - they would absolutely love this.",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 5,
        "listing_id": 2,
        "review_body": "For a lot less than what NASA charges, no astronaut training required for an out-of-this world experience. Great, clean, friendly place for adults and families!!",
        "rating": 4.83,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 4,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 8,
        "listing_id": 3,
        "review_body": "What a fun place to experience. Beyond the noteworthy architecture, the woodsy setting and interior design touches made our stay comfortable and memorable. We cooked in the well-equipped kitchen, enjoyed the ample patio, spent hours playing the acoustic guitar and slept great in the comfy bed. Two deer greeted us as we checked in. It was pretty magical. Great communication from the host, too. Definitely recommend for an able-bodied group of 3 or fewer.",
        "rating": 4.83,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 4,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 9,
        "listing_id": 3,
        "review_body": "Easily the most unique place that I have ever had the pleasure of staying in. Truly one-of-a-kind and endlessly charming, the entire home lives and breathes together like a great friendly beast, which the visitor has the singular joy of getting to spend day and night out of time inside. My stay there was nothing short of magical, and I could not recommend it higher.",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id": 10,
        "listing_id": 3,
        "review_body": "I'm an architecture geek, and seek out unique places to stay/visit. We've stayed at some of Frank Lloyd Wright's homes, and we can honestly say (albeit different), the Bloomhouse was at LEAST as impressive! Thank you so much for allowing us to share your space :)",
        "rating": 4.33,
        "clean": 5,
        "comm": 5,
        "check": 4,
        "acc": 4,
        "loc": 4,
        "val": 4
        },
    {
        "user_id": 11,
        "listing_id": 3,
        "review_body": "I was in town for work and decided to have my wife and kids in for the weekend. We had a great stay with all the local activities and restaurants, especially with the uniqueness of the house, the kids loved it!",
        "rating": 4.67,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 4,
        "val": 4
        },
    {
        "user_id": 12,
        "listing_id": 3,
        "review_body": "This is an AMAZING house and really an experience! When we first arrived, we literally walked around and just kept saying WOW! And how cool that two UT students designed this beauty. Stay here - you will be glad you did :)",
        "rating": 5,
        "clean": 5,
        "comm": 5,
        "check": 5,
        "acc": 5,
        "loc": 5,
        "val": 5
        },
    {
        "user_id":5,
        "listing_id":4,
        "review_body":"An incredible way to start our USA adventure. Thoroughly recommend it!! See you again Dudes!!",
        "rating":3.8333333333333335,"clean":3,"comm":4,"check":4,"acc":4,"loc":5,"val":3},
{
    "user_id":15,
    "listing_id":4,
    "review_body":"Such a great experience! A little tricky to find, but what a payoff! Cleanest and most charming wagon. AC/heat worked great. Kids loved the bunk beds. Lovely setting, with your own outdoor shower and little kitchen. (Mini fridge in wagon too!) Easy walk to immaculate outhouse (with a real toilet.) We wish we’d booked our stay for longer. Will be back!",
    "rating":3.5,"clean":3,"comm":3,"check":4,"acc":4,"loc":3,"val":4},
{
    "user_id":7,
    "listing_id":4,
    "review_body":"My family had such a wonderful time!!! Who can say that they’ve spent the night in a covered wagon?! My kids just loved the whole experience. The wagon and the ranch completely exceeded my expectations. Everyone at Sandy Valley were kind and friendly.",
    "rating":3.3333333333333335,"clean":3,"comm":5,"check":3,"acc":3,"loc":3,"val":3},
{
    "user_id":13,
    "listing_id":4,
    "review_body":"We stayed here on our way down to California from Utah. We were very excited for our stay and the anticipation was worth it. We immediately loved the wagon the moment we pulled up and our kids wouldn’t stop talking about how cool it was. Starting our morning with coffee while watching the sunrise with a fire going was magical. Our only regret was booking for just one night. We will definitely be back for a longer stay!",
    "rating":3.6666666666666665,"clean":5,"comm":3,"check":3,"acc":4,"loc":3,"val":4},
{
    "user_id":17,
    "listing_id":4,
    "review_body":"Beautiful property with tons of animals & activities! The sunsets & sunrises are stunning & surreal. Between our covered wagon, campfire & animals, our daughters had an absolute blast!",
    "rating":4,"clean":4,"comm":3,"check":5,"acc":3,"loc":4,"val":5},
{
    "user_id":13,
    "listing_id":4,
    "review_body":"Made memories that will last! We loved everything about it. We enjoyed walking around and looking at the animals. Especially the pig! I will definitely be back in the future and telling everyone I know!",
    "rating":4,"clean":5,"comm":3,"check":3,"acc":5,"loc":4,"val":4},
{
    "user_id":12,
    "listing_id":5,
    "review_body":"We stayed here for my birthday as the fall foliage changed colors. It is as wonderful as it looks and a light filled space that changes with the sun overhead. Truly wonderful time and the host was great communicator as well. Would recommend. There were no doors on the bedrooms if coming with many people. This didn’t bother us at all. Very refreshing.",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":5,"loc":4,"val":3},
{
    "user_id":5,
    "listing_id":5,
    "review_body":"Beautiful and unique house in a secluded location - perfect for relaxing but close enough to all the amenities you need. The hosts were super helpful, with clear communication! Will definitely be back!",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":3,"acc":5,"loc":5,"val":3},
{
    "user_id":11,
    "listing_id":5,
    "review_body":"I stayed here with 2 other guests. It was so relaxing and wonderful to feel so connected to nature through the design of this house! We loved our stay so much and definitely recommend to anyone wanting a relaxing and restorative getaway!",
    "rating":4,"clean":3,"comm":3,"check":4,"acc":5,"loc":5,"val":4},
{
    "user_id":16,
    "listing_id":5,
    "review_body":"The house was lovely. Just the right size and location for a relaxing retreat from city life. It was private but the town was a short drive away so we could shop for essentials. The architecture was unique and in harmony with nature. We appreciated the attention to detail in the furnishings, decor, kitchen appliances, the bottle of wine and many other small touches.",
    "rating":4.333333333333333,"clean":4,"comm":5,"check":5,"acc":3,"loc":4,"val":5},
{
    "user_id":14,
    "listing_id":5,
    "review_body":"This home is amazing. We felt that we were immersed in nature, both inside and outside. Sarah was a great communicator, and our experience was one-of-a-kind. We hope to be back again to experience this extraordinary home.",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":4,"loc":4,"val":4},
{
    "user_id":3,
    "listing_id":6,
    "review_body":"such a unique space! it was a beautiful place to stay both surrounded by nature outside and the amazing craftsmanship inside!",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":14,
    "listing_id":6,
    "review_body":"Clean, fun and memories made!",
    "rating":4,"clean":5,"comm":4,"check":4,"acc":4,"loc":4,"val":3},
{
    "user_id":10,
    "listing_id":6,
    "review_body":"Such a special stay—felt like a private time capsule. We enjoyed cooking, resting, and discovering all the little details in these yurts!! ♥️ we’d love to stay again.",
    "rating":3.8333333333333335,"clean":5,"comm":3,"check":3,"acc":5,"loc":4,"val":3},
{
    "user_id":12,
    "listing_id":6,
    "review_body":"beautiful place!! relaxing peaceful surroundings! very comfortable and fun.",
    "rating":3.8333333333333335,"clean":5,"comm":4,"check":3,"acc":4,"loc":3,"val":4},
{
    "user_id":1,
    "listing_id":7,
    "review_body":"This is the most amazing place in the world! Every detail of this house can be called a work of art!",
    "rating":3.6666666666666665,"clean":4,"comm":4,"check":3,"acc":3,"loc":3,"val":5},
{
    "user_id":17,
    "listing_id":7,
    "review_body":"The most amazing place in the world! Especially when you get to know the history of how it was built, truly amazing work.",
    "rating":3.5,"clean":3,"comm":3,"check":4,"acc":4,"loc":4,"val":3},
{
    "user_id":10,
    "listing_id":8,
    "review_body":"What a cute place to stay in! This Hobbit house is a dream stay and I would recommend it to anyone whose staying in Cedar City.",
    "rating":4.166666666666667,"clean":5,"comm":4,"check":3,"acc":3,"loc":5,"val":5},
{
    "user_id":10,
    "listing_id":8,
    "review_body":"Thanks so much for a beautiful and comfortable place to stay!",
    "rating":4.5,"clean":5,"comm":5,"check":5,"acc":3,"loc":4,"val":5},
{
    "user_id":14,
    "listing_id":8,
    "review_body":"This hobbit house is just as described, and perfect for my husband and me as we passed through town!",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":5,"loc":3,"val":4},
{
    "user_id":1,
    "listing_id":8,
    "review_body":"I had an amazing experience here. The stay has a variety of amenities and is very clean. Definitely worth booking.",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":5,"acc":4,"loc":4,"val":3},
{
    "user_id":14,
    "listing_id":9,
    "review_body":"This is an incredible space in an incredible town! I wish we could have stayed longer.",
    "rating":4.166666666666667,"clean":4,"comm":3,"check":5,"acc":5,"loc":5,"val":3},
{
    "user_id":5,
    "listing_id":9,
    "review_body":"This place is amazing. If you are going to stay in Austin this is the perfect place!",
    "rating":3.8333333333333335,"clean":3,"comm":3,"check":4,"acc":4,"loc":4,"val":5},
{
    "user_id":16,
    "listing_id":9,
    "review_body":"Everything is custom-built in this stunning house. The communication was top notch as well!",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":4,"acc":5,"loc":3,"val":4},
{
    "user_id":16,
    "listing_id":10,
    "review_body":"Amazing. Better than the pictures! One of my favorite airbnbs.",
    "rating":4.166666666666667,"clean":5,"comm":5,"check":3,"acc":4,"loc":4,"val":4},
{
    "user_id":1,
    "listing_id":10,
    "review_body":"What a perfect stay for my wife and I for her birthday. We loved everything about the earthship lifestyle. It was comfortable, had everything we needed, and the sleep was some of the best we had in the dark solitude. Great host, great location, we can't wait to return.",
    "rating":3.8333333333333335,"clean":4,"comm":3,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":6,
    "listing_id":10,
    "review_body":"This is my second stay at El Prado and it keeps getting better. The Earthships are definitely getting more popular, but the Tiny is nice and private, which I enjoy when in Taos. The Murphy bed makes great use of the space and will be back!",
    "rating":3.6666666666666665,"clean":4,"comm":4,"check":4,"acc":3,"loc":3,"val":4},
{
    "user_id":8,
    "listing_id":10,
    "review_body":"Beautiful, unique space with breathtaking scenery! Will definitely be booking again in the future",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":9,
    "listing_id":10,
    "review_body":"We had a great stay at Tiny! Highly recommend staying in an Earthship if you haven’t before! Unfortunately we had to cut our stay a little short because it ended up being too tiny for my husband and our 1 year old son. This is a perfect place for 2 adults !",
    "rating":4,"clean":3,"comm":5,"check":3,"acc":5,"loc":3,"val":5},
{
    "user_id":3,
    "listing_id":11,
    "review_body":"Great stay in a beautiful location. The Round House is beautiful and Nancy is a wonderful host.",
    "rating":4.5,"clean":5,"comm":5,"check":4,"acc":5,"loc":3,"val":5},
{
    "user_id":3,
    "listing_id":11,
    "review_body":"Beautiful place. Something different and fun.",
    "rating":3.5,"clean":4,"comm":4,"check":4,"acc":3,"loc":3,"val":3},
{
    "user_id":5,
    "listing_id":11,
    "review_body":"The round house! We stayed 4 nights under the stars exploring so many beautiful parks and sights. Nancy rules, down to earth and has great recommendations based on your interests.",
    "rating":3.5,"clean":4,"comm":5,"check":3,"acc":3,"loc":3,"val":3},
{
    "user_id":14,
    "listing_id":11,
    "review_body":"Check in was easy. Nancy met us and went over things with us. Exactly as described on the website. Super comply bed. Amazing value. Super clean with beautiful touches.",
    "rating":4.166666666666667,"clean":3,"comm":5,"check":5,"acc":5,"loc":3,"val":4},
{
    "user_id":4,
    "listing_id":12,
    "review_body":"The place was amazing, it’s very relaxing and we were able to rest and start early in the morning to go to our morning hike. Very clean and safe, already plan to comeback next spring.",
    "rating":4.333333333333333,"clean":5,"comm":3,"check":3,"acc":5,"loc":5,"val":5},
{
    "user_id":17,
    "listing_id":12,
    "review_body":"You’re going to love it here! From the sheep grazing and amazing views to the beautifully outfitted accommodations, everything is unique and charming.",
    "rating":3.6666666666666665,"clean":3,"comm":5,"check":5,"acc":3,"loc":3,"val":3},
{
    "user_id":17,
    "listing_id":12,
    "review_body":"The Kyoob was beautiful and Baya/Paul are amazing hosts! Definitely order from their vendor for dinner, it was delicious!",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":15,
    "listing_id":12,
    "review_body":"This airbnb had everything we needed and had nice touches to it. Baya was a great and welcoming host.",
    "rating":3.5,"clean":3,"comm":3,"check":3,"acc":5,"loc":3,"val":4},
{
    "user_id":16,
    "listing_id":13,
    "review_body":"This has been an experience in the books. Absolutely picture perfect and not a bad thing to say about it. Kristie has outdone herself. There isn’t a thing that she hasn’t thought of. I hope to come back time and time again.",
    "rating":4.166666666666667,"clean":5,"comm":4,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":8,
    "listing_id":13,
    "review_body":"Truly breathtaking! We ended up walking up the last 1/4-1/2 mile with all our things in our backpacks because my truck was having a hard time in the new snow. Completely worth it, it was an unforgettable experience!",
    "rating":3.6666666666666665,"clean":5,"comm":3,"check":4,"acc":3,"loc":4,"val":3},
{
    "user_id":4,
    "listing_id":13,
    "review_body":"What an amazing experience, unique in the fact of “roughin it” in the most luxurious way! The lookout is a wonderful place to find peace and nature.",
    "rating":4.166666666666667,"clean":3,"comm":5,"check":4,"acc":5,"loc":5,"val":3},
{
    "user_id":5,
    "listing_id":13,
    "review_body":"Everything was great. We rarely do this sort of thing, so being able to go out into the woods for a night in a comfortable place was an awesome experience. Will definitely do this again.",
    "rating":4,"clean":3,"comm":5,"check":4,"acc":3,"loc":5,"val":4},
{
    "user_id":16,
    "listing_id":14,
    "review_body":"This Silo was incredible. It was more of an experience and added to our trip immensely. 360 view was beautiful with the open wheat fields and snow capped mountains behind.",
    "rating":3.8333333333333335,"clean":5,"comm":4,"check":3,"acc":5,"loc":3,"val":3},
{
    "user_id":9,
    "listing_id":14,
    "review_body":"Delightful! It rained one night and the sounds were magical. Highly recommended.",
    "rating":3.3333333333333335,"clean":3,"comm":4,"check":3,"acc":4,"loc":3,"val":3},
{
    "user_id":1,
    "listing_id":14,
    "review_body":"Second time staying at this location. Surely won’t be the last. Beautiful views all around.",
    "rating":3.5,"clean":3,"comm":5,"check":3,"acc":4,"loc":3,"val":3},
{
    "user_id":14,
    "listing_id":14,
    "review_body":"Honey's Place is truly a hidden gem. After a long day exploring Glacier National Park it was the perfect one night stop before my drive home.",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":3,"acc":5,"loc":5,"val":3},
{
    "user_id":7,
    "listing_id":14,
    "review_body":"Absolutely LOVED this spot. Beautiful views and such a cozy and comforting little spot to stay in. Had a perfect stay here, and highly recommend it to anyone passing through.",
    "rating":3.8333333333333335,"clean":3,"comm":4,"check":4,"acc":5,"loc":4,"val":3},
{
    "user_id":3,
    "listing_id":14,
    "review_body":"We loved the little silo! It was the perfect place to begin our honeymoon in Montana. You can’t beat the privacy, views and hospitality!",
    "rating":3.6666666666666665,"clean":3,"comm":3,"check":4,"acc":5,"loc":4,"val":3},
{
    "user_id":6,
    "listing_id":15,
    "review_body":"We had a really nice stay , the home was amazing ! A shame that the services and time of response weren’t that effective.",
    "rating":4,"clean":5,"comm":3,"check":3,"acc":5,"loc":5,"val":3},
{
    "user_id":18,
    "listing_id":15,
    "review_body":"Another great stay in Beverly Hills. Thank you for sharing your space. We loved our stay. Looking forward to returning again soon.",
    "rating":4.333333333333333,"clean":5,"comm":5,"check":3,"acc":5,"loc":4,"val":4},
{
    "user_id":14,
    "listing_id":16,
    "review_body":"The house was INCREDIBLE with insane views and the most peaceful energy. Highly recommend this beautiful home with wonderful hosts.",
    "rating":3.6666666666666665,"clean":3,"comm":4,"check":4,"acc":5,"loc":3,"val":3},
{
    "user_id":10,
    "listing_id":17,
    "review_body":"Amazing place to stay! If you are looking to book for a large group I would highly recommend this place. Close to all amenities and luxurious and spacious interior.",
    "rating":3.8333333333333335,"clean":3,"comm":5,"check":5,"acc":3,"loc":3,"val":4},
{
    "user_id":18,
    "listing_id":17,
    "review_body":"Phenomenal experience all around. House was more impressive than described and the staff was incredible. Highly recommend.",
    "rating":4,"clean":5,"comm":5,"check":3,"acc":3,"loc":4,"val":4},
{
    "user_id":14,
    "listing_id":17,
    "review_body":"Great house and great location!",
    "rating":3.8333333333333335,"clean":5,"comm":4,"check":3,"acc":3,"loc":5,"val":3},
{
    "user_id":4,
    "listing_id":17,
    "review_body":"Place was amazing, more than enough space for our group. Only a few issues we had with some functions in the house but the host was pretty helpful to resolve them. Overall nice house, needs a few things fixed but we made it work and had a good time.",
    "rating":4,"clean":4,"comm":4,"check":5,"acc":3,"loc":3,"val":5},
{
    "user_id":16,
    "listing_id":18,
    "review_body":"Once of the coolest houses I’ve ever stayed at. Beautiful views and spacious for our group - Could not have asked for a better experience start to finish!",
    "rating":4.5,"clean":5,"comm":5,"check":4,"acc":5,"loc":3,"val":5},
{
    "user_id":8,
    "listing_id":18,
    "review_body":"Thank you for a fantastic stay at the lovely Three Sisters Lookout! You can tell the home was excellently crafted and is very well maintained.",
    "rating":4.333333333333333,"clean":5,"comm":4,"check":4,"acc":5,"loc":5,"val":3},
{
    "user_id":11,
    "listing_id":18,
    "review_body":"Amazing property, great views, easy check in and out process. Awesome vacation spot!",
    "rating":4,"clean":4,"comm":3,"check":5,"acc":4,"loc":4,"val":4},
{
    "user_id":16,
    "listing_id":18,
    "review_body":"Beautiful house. Incredible view / location. Hope to be back soon.",
    "rating":4.666666666666667,"clean":4,"comm":5,"check":4,"acc":5,"loc":5,"val":5},
{
    "user_id":6,
    "listing_id":18,
    "review_body":"Great house with great amenities.",
    "rating":4.666666666666667,"clean":5,"comm":5,"check":5,"acc":3,"loc":5,"val":5},
{
    "user_id":17,
    "listing_id":19,
    "review_body":"Great stay at an amazing house!",
    "rating":3.8333333333333335,"clean":4,"comm":4,"check":4,"acc":3,"loc":4,"val":4},
]

def seed_test():
    type_dict = {}
    for typey in types:
        typey_type = Type(type=typey['type'], alias=typey['alias'])
        db.session.add(typey_type)
        type_dict[typey['alias']] = typey_type
    amenity_dict = {}
    for amenity in amenities:
        amen = Amenity(name=amenity['name'], alias=amenity['alias'])
        db.session.add(amen)
        amenity_dict[amenity['alias']] = amen
    db.session.commit()
    for listing in listings:
        db.session.add(Listing(name=listing['name'],
                               owner_id=listing['owner_id'],
                               address=listing['address'],
                               city=listing['city'],
                               state=listing['state'],
                               description=listing['description'],
                               price=listing['price'],
                               max_guests=listing['max_guests'],
                               bed=listing['bed'],
                               bath=listing['bath'],
                               types=[type_dict[listing['type']]],
                               amenities=[amenity_dict[amenity] for amenity in listing['amenity']]
                    ))
    for img in images:
        db.session.add(Image(listing_id=img['listing_id'], url=img['url']))
    for rev in reviews:
        db.session.add(Review(user_id=rev['user_id'],
                              listing_id=rev['listing_id'],
                              review_body=rev['review_body'],
                              rating=rev['rating'],
                              clean=rev['clean'],
                              comm=rev['comm'],
                              check=rev['check'],
                              acc=rev['acc'],
                              loc=rev['loc'],
                              val=rev['val']))

    db.session.commit()

def undo_test():
    db.session.execute('TRUNCATE types RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
