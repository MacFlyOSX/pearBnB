from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(email='demo@user.io', password="password", first_name='Demo', last_name='User')

    owner1 = User(email="davidrogers@user.io",
                  password="password",
                  first_name="David",
                  last_name="Rogers"
                  )
      # 3
    owner6 = User(first_name='Brandon',
                  last_name='Tasaki',
                  email='brandontasaki@user.io',
                     password='password'
                  )

    owner9 = User(first_name='Jae',
                  last_name='Hwang',
                  email='jaehwang@user.io',
                password='password'
                  )
         # 5
    owner10 = User(first_name='Jake',
                   last_name='Matillano',
                   email='jakematillano@user.io',
                      password='password'
                   )

    owner14 = User(first_name='Jessie',
                   last_name='Baron',
                   email='jessiebaron@user.io',
                    password='password'
                   )

    owner15 = User(first_name='Joanna',
                   last_name='Gilbert',
                   email='joannagilbert@user.io',
                      password='password'
                   )
      # 8
    owner16 = User(first_name='John',
                   last_name='Carrera',
                   email='johncarrera@user.io',
                    password='password'
                   )
      # 9
    owner17 = User(first_name='Logan',
                   last_name='Seals',
                   email='loganseals@user.io',
                   password='password'
                   )

    owner18 = User(first_name='Noah',
                   last_name='Kerner',
                   email='kernersanders@user.io',
                   password='password'
                   )

    owner19 = User(first_name='Kyle',
                   last_name='Kassen',
                   email='kylekassen@user.io',
                   password='password'
                   )
      # 12
    owner20 = User(first_name='Michael',
                   last_name='Jung',
                   email='michaeljung@user.io',
                   password='password'
                   )

    owner21 = User(first_name='Na',
                   last_name='Chen',
                   email='nachen@user.io',
                password='password'
                   )
      # 13
    owner22 = User(first_name='Sam',
                   last_name='Suh',
                   email='samsuh@user.io',
                  password='password'
                   )

    owner23 = User(first_name='Schaeffer',
                   last_name='Ahn',
                   email='schaefferahn@user.io',
                     password='password'
                   )
      # 15
    owner25 = User(first_name='Amanda',
                   last_name='Vien',
                   email='vienbean@user.io',
                   password='password'
                   )

    owner26 = User(first_name='Yasha',
                   last_name='Yang',
                   email='yashayang@user.io',
                  password='password'
                   )
      # 17
    owner27 = User(first_name='Gary',
                   last_name='Song',
                   email='garebear@user.io',
                password='password'
                   )

    owner28 = User(first_name='Alex',
                   last_name='Dam',
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
