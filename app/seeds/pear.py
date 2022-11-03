from app.models import db, Listing, Image, Review, Type

types = [
    { 'type': 'OMG!', 'alias': 'omg' },
    { 'type': 'Luxe', 'alias': 'luxe' },
    { 'type': 'Beachfront', 'alias': 'beach' },
    { 'type': 'Mansions', 'alias': 'mansions' },
    { 'type': 'Cabins', 'alias': 'cabins' },
    { 'type': 'Ryokans', 'alias': 'ryokans' },
    { 'type': 'Desert', 'alias': 'desert' },
    { 'type': 'Lakefront', 'alias': 'lakefront' },
    { 'type': 'Tiny homes', 'alias': 'tinyhomes' },
    { 'type': 'Castles', 'alias': 'castles' },
    { 'type': 'Containers', 'alias': 'containers' },
    { 'type': 'Camping', 'alias': 'camping' }
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
            "state": 'California',
            "description": "Eagle's Watch is one of Malibu's most famous houses, impossible to miss while driving the Pacific Coast Highway and designed by legendary architect Harry Gesner. Perched above the Pacific Ocean, Eagle’s Watch has the best unobstructed panoramic view in Malibu. Perfect for entertaining with dramatic outdoor and indoor spaces, the views from every location are simply stunning.",
            "price": 1175,
            "max_guests": 8,
            "bed": 3,
            "bath": 4,
            "type": 'omg'
        },
        {
            "name": "Spaceship Destination!",
            "owner_id": 2,
            "address": '123 Fake Street',
            "city": 'Brush Prairie',
            "state": 'Washington',
            "description": "726 square feet of one of a kind 1960's futuristic lodging, set down on 5 acres in the rural Hockinson hills. Next to a year around creek, among trees, with hills and meadows to explore. Spaceship amenities include a wet bar(Lunar Lounge) with fridge, gamma ray microwave, and Mr. Fusion coffee maker.",
            "price": 125,
            "max_guests": 4,
            "bed": 2,
            "bath": 1,
            "type": 'omg'
        },
        {
            "name": "The Bloomhouse by Lodgewell>>Fairy Tale Escape",
            "owner_id": 2,
            "address": '123 Fake Street',
            "city": 'Austin',
            "state": 'Texas',
            "description": "Ever stay in a giant seashell unicorn? No, you haven’t, but now you can cross it off your bucket list. This magical work of art is part Willy Wonka, part Big Lebowski, and totally unlike anywhere else. Do it for the ‘gram, but also for your soul.",
            "price": 638,
            "max_guests": 4,
            "bed": 2,
            "bath": 1,
            "type": 'omg'
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
        }
]

def seed_test():
    type_dict = {}
    for typey in types:
        typey_type = Type(type=typey['type'], alias=typey['alias'])
        db.session.add(typey_type)
        type_dict[typey['alias']] = typey_type
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
                               types=[type_dict[listing['type']]]
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
