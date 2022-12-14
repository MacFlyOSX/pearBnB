from app.models import db, User
import random

profile_pictures = ['https://i.imgur.com/WhWHh0n.png', 'https://i.imgur.com/fLHOV60.png',
                    'https://i.imgur.com/NXuXQXr.png', 'https://i.imgur.com/n22XD2U.png',
                    'https://i.imgur.com/oORAZBS.png', 'https://i.imgur.com/3ygq2Zk.png',
                    'https://i.imgur.com/BE1bV8K.png', 'https://i.imgur.com/zIACz8c.png',
                    'https://i.imgur.com/rgjDNRB.png', 'https://i.imgur.com/xrTfdN1.png']


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(email='demo@user.io', password="password", profile_pic=profile_pictures[random.randrange(len(profile_pictures))], first_name='Demo', last_name='User')
      # 2
    owner1 = User(email="davidrogers@user.io",
                  password="password",
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                  first_name="David",
                  last_name="Rogers"
                  )
      # 3
    owner6 = User(first_name='Brandon',
                  last_name='Tasaki',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                  email='brandontasaki@user.io',
                  password='password'
                  )
      # 4
    owner9 = User(first_name='Jae',
                  last_name='Hwang',
                  profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                  email='jaehwang@user.io',
                  password='password'
                  )
      # 5
    owner10 = User(first_name='Jake',
                   last_name='Matillano',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='jakematillano@user.io',
                   password='password'
                   )
      # 6
    owner14 = User(first_name='Jessie',
                   last_name='Baron',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='jessiebaron@user.io',
                    password='password'
                   )
      # 7
    owner15 = User(first_name='Joanna',
                   last_name='Gilbert',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='joannagilbert@user.io',
                      password='password'
                   )
      # 8
    owner16 = User(first_name='John',
                   last_name='Carrera',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='johncarrera@user.io',
                    password='password'
                   )
      # 9
    owner17 = User(first_name='Logan',
                   last_name='Seals',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='loganseals@user.io',
                   password='password'
                   )
      # 10
    owner18 = User(first_name='Noah',
                   last_name='Kerner',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='kernersanders@user.io',
                   password='password'
                   )
      # 11
    owner19 = User(first_name='Kyle',
                   last_name='Kassen',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='kylekassen@user.io',
                   password='password'
                   )
      # 12
    owner20 = User(first_name='Michael',
                   last_name='Jung',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='michaeljung@user.io',
                   password='password'
                   )
      # 13
    owner21 = User(first_name='Na',
                   last_name='Chen',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='nachen@user.io',
                password='password'
                   )
      # 14
    owner22 = User(first_name='Sam',
                   last_name='Suh',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='samsuh@user.io',
                  password='password'
                   )
      # 15
    owner23 = User(first_name='Schaeffer',
                   last_name='Ahn',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='schaefferahn@user.io',
                     password='password'
                   )
      # 16
    owner25 = User(first_name='Amanda',
                   last_name='Vien',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='vienbean@user.io',
                   password='password'
                   )
      # 17
    owner26 = User(first_name='Yasha',
                   last_name='Yang',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='yashayang@user.io',
                  password='password'
                   )
      # 18
    owner27 = User(first_name='Gary',
                   last_name='Song',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='garebear@user.io',
                password='password'
                   )
      # 19
    owner28 = User(first_name='Alex',
                   last_name='Dam',
                   profile_pic=profile_pictures[random.randrange(len(profile_pictures))],
                   email='damitsalex@user.io',
                   password='password'
                   )


    db.session.add(demo)
    db.session.add(owner1)
    db.session.add(owner6)
    db.session.add(owner9)
    db.session.add(owner10)
    db.session.add(owner14)
    db.session.add(owner15)
    db.session.add(owner16)
    db.session.add(owner17)
    db.session.add(owner18)
    db.session.add(owner19)
    db.session.add(owner20)
    db.session.add(owner21)
    db.session.add(owner22)
    db.session.add(owner23)
    db.session.add(owner25)
    db.session.add(owner26)
    db.session.add(owner27)
    db.session.add(owner28)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
