select * from pokemon
drop table pokemon

create table pokemon (
  id serial primary key,
  name varchar(100) not null,
  type varchar(100) not null,
  sprite text unique not null,
  image text unique not null
)

insert into pokemon
    (name, type, sprite, image)
    values
    ('Bulbasaur', 'grass', 'https://i.ibb.co/Bz6xxHS/bulbasaur.png', 'https://i.ibb.co/DQghxQn/Bulbasaur.png'),
    ('Ivysaur', 'grass', 'https://i.ibb.co/RbBF9XZ/ivysaur.png', 'https://i.ibb.co/P9gCsy7/Ivysaur.png'),
    ('Venusaur', 'grass', 'https://i.ibb.co/CzzSWQx/venusaur.png', 'https://i.ibb.co/SNFN3RK/Venusaur.png'),
    ('Charmander', 'fire', 'https://i.ibb.co/LPqJ0V5/charmander.png', 'https://i.ibb.co/DpsP815/Charmander.png'),
    ('Charmeleon', 'fire', 'https://i.ibb.co/cXCJkSc/charmeleon.png', 'https://i.ibb.co/NnYvMRG/Charmeleon.png'),
    ('Charizard', 'fire', 'https://i.ibb.co/CtHSnKB/charizard.png', 'https://i.ibb.co/ZW78ZBq/Charizard.png'),
    ('Squirtle', 'water', 'https://i.ibb.co/rdPGrfC/squirtle.png', 'https://i.ibb.co/YkmbTjB/Squirtle.png'),
    ('Wartortle', 'water', 'https://i.ibb.co/xhPv9Hq/wartortle.png', 'https://i.ibb.co/3hXk3XF/Wartortle.png'),
    ('Blastoise', 'water', 'https://i.ibb.co/d0c1tyq/blastoise.png', 'https://i.ibb.co/sHDzdDn/Blastoise.png'),
    ('Caterpie', 'bug', 'https://i.ibb.co/JjBLXGh/caterpie.png', 'https://i.ibb.co/hsZLMBw/Caterpie.png'),
    ('Metapod', 'bug', 'https://i.ibb.co/PwLnYcQ/metapod.png', 'https://i.ibb.co/kMDS4hq/Metapod.png'),
    ('Butterfree', 'bug', 'https://i.ibb.co/3yKRXv7/butterfree.png', 'https://i.ibb.co/SKyxT0w/Butterfree.png'),
    ('Weedle', 'bug', 'https://i.ibb.co/4SMnG8b/weedle.png', 'https://i.ibb.co/CnpG9b3/Weedle.png'),
    ('Kakuna', 'bug', 'https://i.ibb.co/K2sbvvW/kakuna.png', 'https://i.ibb.co/6Yytjw6/Kakuna.png'),
    ('Beedrill', 'bug', 'https://i.ibb.co/KXn6JBg/beedrill.png', 'https://i.ibb.co/sy3f6Qw/Beedrill.png'),
    ('Pidgey', 'flying', 'https://i.ibb.co/M9Qh4Dv/pidgey.png', 'https://i.ibb.co/wWbVnRf/Pidgey.png'),
    ('Pidgeotto', 'flying', 'https://i.ibb.co/b7QyCKy/pidgeotto.png', 'https://i.ibb.co/q71DStJ/Pidgeotto.png'),
    ('Pidgeot', 'flying', 'https://i.ibb.co/gFFfhM6/pidgeot.png', 'https://i.ibb.co/xGWhd0J/Pidgeot.png'),
    ('Rattata', 'normal', 'https://i.ibb.co/HPGyjZr/rattata.png', 'https://i.ibb.co/pKTwWNd/Rattata.png'),
    ('Raticate', 'normal', 'https://i.ibb.co/mCkCr1H/raticate.png', 'https://i.ibb.co/tpBkX2D/Raticate.png'),
    ('Spearow', 'flying', 'https://i.ibb.co/fvqtHpJ/spearow.png', 'https://i.ibb.co/GpW82hf/Spearow.png'),
    ('Fearow', 'flying', 'https://i.ibb.co/KWBG93y/fearow.png', 'https://i.ibb.co/cJj1FZb/Fearow.png'),
    ('Ekans', 'poison', 'https://i.ibb.co/7tS3TpB/ekans.png', 'https://i.ibb.co/qmtm08J/Ekans.png'),
    ('Arbok', 'poison', 'https://i.ibb.co/71WKrmV/arbok.png', 'https://i.ibb.co/MRbwRjd/Arbok.png'),
    ('Pikachu', 'electric', 'https://i.ibb.co/64Z3TRt/pikachu.png', 'https://i.ibb.co/L0hWbxV/Pikachu.png'),
    ('Raichu', 'electric', 'https://i.ibb.co/N9406DV/raichu.png', 'https://i.ibb.co/8KK8j5M/Raichu.png'),
    ('Sandshrew', 'ground', 'https://i.ibb.co/9HLwyz6/sandshrew.png', 'https://i.ibb.co/Ry8Cjhx/Sandshrew.png'),
    ('Sandslash', 'ground', 'https://i.ibb.co/0G3C8fv/sandslash.png', 'https://i.ibb.co/DQtfzSr/Sandslash.png'),
    ('Nidoran ♀', 'poison', 'https://i.ibb.co/7pcxp4q/nidoran-f.png', 'https://i.ibb.co/sQPnZ7Q/Nidoran.png'),
    ('Nidornia', 'poison', 'https://i.ibb.co/ZmhYthK/nidorina.png', 'https://i.ibb.co/TrTsncG/Nidorina.png'),
    ('Nidoqueen', 'poison', 'https://i.ibb.co/5hKYzTP/nidoqueen.png', 'https://i.ibb.co/Hh7GQ9j/Nidoqueen.png'),
    ('Nidoran ♂', 'poison', 'https://i.ibb.co/cLxsj0g/nidoran-m.png', 'https://i.ibb.co/9rZ5JVv/Nidoran-m.png'),
    ('Nidorino', 'poison', 'https://i.ibb.co/s2kd90N/nidorino.png', 'https://i.ibb.co/CmVPXyz/Nidorino.png'),
    ('Nidoking', 'poison', 'https://i.ibb.co/s5nd4wr/nidoking.png', 'https://i.ibb.co/vQQ9XN6/Nidoking.png'),
    ('Clefairy', 'fairy', 'https://i.ibb.co/VgKsBgS/clefairy.png', 'https://i.ibb.co/6wBGK3V/Clefairy.png'),
    ('Clefable', 'fairy', 'https://i.ibb.co/CWTggm8/clefable.png', 'https://i.ibb.co/SnmcjSX/Clefable.png'),
    ('Vulpix', 'fire', 'https://i.ibb.co/hWjLP7K/vulpix.png', 'https://i.ibb.co/h1FfCTw/Vulpix.png'),
    ('Ninetails', 'fire', 'https://i.ibb.co/QnyqQB6/ninetales.png', 'https://i.ibb.co/2hY3QYk/Ninetails.png'),
    ('Jigglypuff', 'normal', 'https://i.ibb.co/wdyKZ3w/jigglypuff.png', 'https://i.ibb.co/Bzpx4LY/Jigglypuff.png'),
    ('Wigglytuff', 'normal', 'https://i.ibb.co/Krh7CnH/wigglytuff.png', 'https://i.ibb.co/nDZGDcM/Wigglytuff.png'),
    ('Zubat', 'poison', 'https://i.ibb.co/GkYJSp6/zubat.png', 'https://i.ibb.co/9y8NG56/Zubat.png'),
    ('Golbat', 'poison', 'https://i.ibb.co/nbbQVJY/golbat.png', 'https://i.ibb.co/zNf8fxh/Golbat.png'),
    ('Oddish', 'grass', 'https://i.ibb.co/hKd7nM6/oddish.png', 'https://i.ibb.co/hBzS3LG/Oddish.png'),
    ('Gloom', 'grass', 'https://i.ibb.co/80YvJMv/gloom.png', 'https://i.ibb.co/GTKCN5T/Gloom.png'),
    ('Vileplume', 'grass', 'https://i.ibb.co/jMbGmnJ/vileplume.png', 'https://i.ibb.co/qYNYPn2/Vileplume.png'),
    ('Paras', 'grass', 'https://i.ibb.co/YRCTzhV/paras.png', 'https://i.ibb.co/cwQ0JK3/Paras.png'),
    ('Parasect', 'grass', 'https://i.ibb.co/GQpTgkP/parasect.png', 'https://i.ibb.co/pLX1Z1q/Parasect.png'),
    ('Venonat', 'bug', 'https://i.ibb.co/pQs5DXD/venonat.png', 'https://i.ibb.co/fqBkrng/Venonat.png'),
    ('Venomoth', 'bug', 'https://i.ibb.co/LPS5YGT/venomoth.png', 'https://i.ibb.co/S53SsMQ/Venomoth.png'),
    ('Diglett', 'ground', 'https://i.ibb.co/RHCnLqc/diglett.png', 'https://i.ibb.co/MkGZLJX/Diglett.png'),
    ('Dugtrio', 'ground', 'https://i.ibb.co/F06mYrM/dugtrio.png', 'https://i.ibb.co/FxJNnYL/Dugtrio.png'),
    ('Meowth', 'normal', 'https://i.ibb.co/vH695zN/meowth.png', 'https://i.ibb.co/8cb15s8/Meowth.png'),
    ('Persian', 'normal', 'https://i.ibb.co/3v7Vztv/persian.png', 'https://i.ibb.co/WFPfbpm/Persian.png'),
    ('Psyduck', 'water', 'https://i.ibb.co/37XH2gf/psyduck.png', 'https://i.ibb.co/p3ZMTVK/Psyduck.png'),
    ('Golduck', 'water', 'https://i.ibb.co/mbTqnhy/golduck.png', 'https://i.ibb.co/hXDBTQs/Golduck.png'),
    ('Mankey', 'fighting', 'https://i.ibb.co/f0NkmtC/mankey.png', 'https://i.ibb.co/LkwGT98/Mankey.png'),
    ('Primeape', 'fighting', 'https://i.ibb.co/M9CkVty/primeape.png', 'https://i.ibb.co/vPdQLQW/Primeape.png'),
    ('Growlithe', 'fire', 'https://i.ibb.co/1s5Nr9T/growlithe.png', 'https://i.ibb.co/bP5bcC3/Growlithe.png'),
    ('Arcanine', 'fire', 'https://i.ibb.co/TLP5kJm/arcanine.png', 'https://i.ibb.co/pKQCnKM/Arcanine.png'),
    ('Poliwag', 'water', 'https://i.ibb.co/T0rpRh6/poliwag.png', 'https://i.ibb.co/dWR3RP5/Poliwag.png'),
    ('Poliwhirl', 'water', 'https://i.ibb.co/3SvyQCT/poliwhirl.png', 'https://i.ibb.co/XWB77F9/Poliwhirl.png'),
    ('Poliwrath', 'water', 'https://i.ibb.co/LNDMp8F/poliwrath.png', 'https://i.ibb.co/3hqvN4P/Poliwrath.png'),
    ('Abra', 'psychic', 'https://i.ibb.co/zngd8Yz/abra.png', 'https://i.ibb.co/KqD409P/Abra.png'),
    ('Kadabra', 'psychic', 'https://i.ibb.co/R4Nmw4W/kadabra.png', 'https://i.ibb.co/0ZSP9tb/Kadabra.png'),
    ('Alakazam', 'psychic', 'https://i.ibb.co/F01sFn3/alakazam.png', 'https://i.ibb.co/C7Ts398/Alakazam.png'),
    ('Machop', 'fighting', 'https://i.ibb.co/ZmspkwM/machop.png', 'https://i.ibb.co/NCJC7k1/Machop.png'),
    ('Machoke', 'fighting', 'https://i.ibb.co/QnYRwwp/machoke.png', 'https://i.ibb.co/w4FBjzK/Machoke.png'),
    ('Machamp', 'fighting', 'https://i.ibb.co/XkKM3rg/machamp.png', 'https://i.ibb.co/mtcmVYZ/Machamp.png'),
    ('Bellsprout', 'grass', 'https://i.ibb.co/BwMtF50/bellsprout.png', 'https://i.ibb.co/TRcbg3J/Bellsprout.png'),
    ('Weepinbell', 'grass', 'https://i.ibb.co/TmvR8f6/weepinbell.png', 'https://i.ibb.co/34yGH3T/Weepinbell.png'),
    ('Victreebel', 'grass', 'https://i.ibb.co/Qf4C3jX/victreebel.png', 'https://i.ibb.co/qR2RMKX/Victreebel.png'),
    ('Tentacool', 'water', 'https://i.ibb.co/27wCGCk/tentacool.png', 'https://i.ibb.co/Qf7R044/Tentacool.png'),
    ('Tentacruel', 'water', 'https://i.ibb.co/YyZnpHt/tentacruel.png', 'https://i.ibb.co/Mp2PGD2/Tentacruel.png'),
    ('Geodude', 'rock', 'https://i.ibb.co/P6c1tqk/geodude.png', 'https://i.ibb.co/kxVR1SL/Geodude.png'),
    ('Graveler', 'rock', 'https://i.ibb.co/L1w3k8S/graveler.png', 'https://i.ibb.co/MGCyK2g/Graveler.png'),
    ('Golem', 'rock', 'https://i.ibb.co/VSPK6jF/golem.png', 'https://i.ibb.co/yYcp3gT/Golem.png'),
    ('Ponyta', 'fire', 'https://i.ibb.co/MhytnmW/ponyta.png', 'https://i.ibb.co/mtSr0Vn/Ponyta.png'),
    ('Rapidash', 'fire', 'https://i.ibb.co/pWhTd7R/rapidash.png', 'https://i.ibb.co/j64rrgR/Rapidash.png'),
    ('Slowpoke', 'water', 'https://i.ibb.co/f426PdJ/slowpoke.png', 'https://i.ibb.co/n8NQc69/Slowpoke.png'),
    ('Slowbro', 'water', 'https://i.ibb.co/986Jkff/slowbro.png', 'https://i.ibb.co/MCCzqQz/Slowbro.png'),
    ('Magnemite', 'electric', 'https://i.ibb.co/sFGLQ3x/magnemite.png', 'https://i.ibb.co/gW4KTfz/Magnemite.png'),
    ('Magneton', 'electric', 'https://i.ibb.co/K5VNBH3/magneton.png', 'https://i.ibb.co/VQSMfxP/Magneton.png'),
    ('Farfetch`D', 'flying', 'https://i.ibb.co/JC08rSd/farfetchd.png', 'https://i.ibb.co/CnTRhDt/Farfetch-039-d.png'),
    ('Dodou', 'flying', 'https://i.ibb.co/9Gmdvqr/doduo.png', 'https://i.ibb.co/wLTVSKs/Doduo.png'),
    ('Dodrio', 'flying', 'https://i.ibb.co/RyvFBNr/dodrio.png', 'https://i.ibb.co/KGVPsd6/Dodrio.png'),
    ('Seel', 'water', 'https://i.ibb.co/Vj2wqpy/seel.png', 'https://i.ibb.co/60NYj72/Seel.png'),
    ('Dewgong', 'water', 'https://i.ibb.co/M2wM5P7/dewgong.png', 'https://i.ibb.co/bvyDkrH/Dewgong.png'),
    ('Grimer', 'poison', 'https://i.ibb.co/gr7C95r/grimer.png', 'https://i.ibb.co/C9dfrbf/Grimer.png'),
    ('Muk', 'poison', 'https://i.ibb.co/WcX2rkn/muk.png', 'https://i.ibb.co/NCv4CTh/Muk.png'),
    ('Shellder', 'water', 'https://i.ibb.co/s6j64wn/shellder.png', 'https://i.ibb.co/9Z8YQM4/Shellder.png'),
    ('Cloyster', 'water', 'https://i.ibb.co/Ss7GxSb/cloyster.png', 'https://i.ibb.co/P5q3ckq/Cloyster.png'),
    ('Gastly', 'ghost', 'https://i.ibb.co/ZdtvPRw/gastly.png', 'https://i.ibb.co/ssstn8V/Gastly.png'),
    ('Haunter', 'ghost', 'https://i.ibb.co/Scm5yV7/haunter.png', 'https://i.ibb.co/jGG1hPg/Haunter.png'),
    ('Gengar', 'ghost', 'https://i.ibb.co/G94LKNp/gengar.png', 'https://i.ibb.co/wp1njj2/Gengar.png'),
    ('Onix', 'rock', 'https://i.ibb.co/2794g0r/onix.png', 'https://i.ibb.co/m5CZd2h/Onix.png'),
    ('Drowzee', 'psychic', 'https://i.ibb.co/0MHc2BZ/drowzee.png', 'https://i.ibb.co/8xD0jR3/Drowzee.png'),
    ('Hypno', 'psychic', 'https://i.ibb.co/sRyykWq/hypno.png', 'https://i.ibb.co/SQKVC78/Hypno.png'),
    ('Krabby', 'water', 'https://i.ibb.co/tZkp8wr/krabby.png', 'https://i.ibb.co/tpzrVzk/Krabby.png'),
    ('Kingler', 'water', 'https://i.ibb.co/qsXztPZ/kingler.png', 'https://i.ibb.co/Jn412wr/Kingler.png'),
    ('Voltorb', 'electric', 'https://i.ibb.co/wWjRXRM/voltorb.png', 'https://i.ibb.co/jkT2LhC/Voltorb.png'),
    ('Electrode', 'electric', 'https://i.ibb.co/d5kSHvn/electrode.png', 'https://i.ibb.co/PwLwQgP/Electrode.png'),
    ('Exeggcute', 'grass', 'https://i.ibb.co/jGwppmm/exeggcute.png', 'https://i.ibb.co/BP147Lx/Exeggcute.png'),
    ('Exeggutor', 'grass', 'https://i.ibb.co/CmW8qyQ/exeggutor.png', 'https://i.ibb.co/KhKCkWK/Exeggutor.png'),
    ('Cubone', 'ground', 'https://i.ibb.co/9wNYBZ5/cubone.png', 'https://i.ibb.co/w6F080B/Cubone.png'),
    ('Marowak', 'ground', 'https://i.ibb.co/txyhcQ4/marowak.png', 'https://i.ibb.co/3smpKvm/Marowak.png'),
    ('Hitmonlee', 'fighting', 'https://i.ibb.co/3WM31hM/hitmonlee.png', 'https://i.ibb.co/6H235YZ/Hitmonlee.png'),
    ('Hitmonchan', 'fighting', 'https://i.ibb.co/0ZhhKxV/hitmonchan.png', 'https://i.ibb.co/DLksJGt/Hitmonchan.png'),
    ('Lickitung', 'normal', 'https://i.ibb.co/wLcXsD0/lickitung.png', 'https://i.ibb.co/xY5bX29/Lickitung.png'),
    ('Koffing', 'poison', 'https://i.ibb.co/PZ4JxFr/koffing.png', 'https://i.ibb.co/K9ZcmWZ/Koffing.png'),
    ('Weezing', 'poison', 'https://i.ibb.co/H27k3W3/weezing.png', 'https://i.ibb.co/x1yTXR1/Weezing.png'),
    ('Rhyhorn', 'ground', 'https://i.ibb.co/yRngPgF/rhyhorn.png', 'https://i.ibb.co/Jq6QP56/Rhyhorn.png'),
    ('Rhydon', 'ground', 'https://i.ibb.co/0JYhMKB/rhydon.png', 'https://i.ibb.co/0GnYfL2/Rhydon.png'),
    ('Chansey', 'normal', 'https://i.ibb.co/LdpMjMS/chansey.png', 'https://i.ibb.co/C9wHv32/Chansey.png'),
    ('Tangela', 'grass', 'https://i.ibb.co/sqc3NvP/tangela.png', 'https://i.ibb.co/fXb5F77/Tangela.png'),
    ('Kangaskhan', 'normal', 'https://i.ibb.co/BcF6b0y/kangaskhan.png', 'https://i.ibb.co/3cLt4gm/Kangaskhan.png'),
    ('Horsea', 'water', 'https://i.ibb.co/cxC5BfP/horsea.png', 'https://i.ibb.co/3cqBHZK/Horsea.png'),
    ('Seadra', 'water', 'https://i.ibb.co/1JD2YNh/seadra.png', 'https://i.ibb.co/tH3VxFj/Seadra.png'),
    ('Goldeen', 'water', 'https://i.ibb.co/cX1tLK8/goldeen.png', 'https://i.ibb.co/vvNMXQf/Goldeen.png'),
    ('Seaking', 'water', 'https://i.ibb.co/VTr0hNF/seaking.png', 'https://i.ibb.co/2FjLWdC/Seaking.png'),
    ('Staryu', 'water', 'https://i.ibb.co/hHG8RQX/staryu.png', 'https://i.ibb.co/jV0LTKH/Staryu.png'),
    ('Starmie', 'water', 'https://i.ibb.co/482B6Gw/starmie.png', 'https://i.ibb.co/Rh0tZ3L/Starmie.png'),
    ('Mr.Mime', 'psychic', 'https://i.ibb.co/KhhsRnt/mr-mime.png', 'https://i.ibb.co/qjX3XRh/Mr-Mime.png'),
    ('Scyther', 'bug', 'https://i.ibb.co/Ns8LVzF/scyther.png', 'https://i.ibb.co/X7B7BC2/Scyther.png'),
    ('Jynx', 'ice', 'https://i.ibb.co/vLPJHyJ/jynx.png', 'https://i.ibb.co/2yYVZRb/Jynx.png'),
    ('Electabuzz', 'electric', 'https://i.ibb.co/9hpwZzT/electabuzz.png', 'https://i.ibb.co/0ygZ6jZ/Electabuzz.png'),
    ('Magmar', 'fire', 'https://i.ibb.co/0CNwXgH/magmar.png', 'https://i.ibb.co/JzVf6mF/Magmar.png'),
    ('Pinsir', 'bug', 'https://i.ibb.co/znVnf1s/pinsir.png', 'https://i.ibb.co/LJNYBcJ/Pinsir.png'),
    ('Tauros', 'normal', 'https://i.ibb.co/MDPcdft/tauros.png', 'https://i.ibb.co/wMLc2t3/Tauros.png'),
    ('Magikarp', 'water', 'https://i.ibb.co/NKsQDJM/magikarp.png', 'https://i.ibb.co/8jdy1sH/Magikarp.png'),
    ('Gyarados', 'water', 'https://i.ibb.co/4P2G7vt/gyarados.png', 'https://i.ibb.co/tPpQ137/Gyarados.png'),
    ('Lapras', 'water', 'https://i.ibb.co/8dhwXRD/lapras.png', 'https://i.ibb.co/1GKByPc/Lapras.png'),
    ('Ditto', 'normal', 'https://i.ibb.co/WBSCg45/ditto.png', 'https://i.ibb.co/6sCfnmH/Ditto.png'),
    ('Eevee', 'normal', 'https://i.ibb.co/Bf7NVdJ/eevee.png', 'https://i.ibb.co/Fhtxjf8/Eevee.png'),
    ('Vaporeon', 'water', 'https://i.ibb.co/JyfrGgN/vaporeon.png', 'https://i.ibb.co/5R0DQdS/Vaporeon.png'),
    ('Jolteon', 'electric', 'https://i.ibb.co/8zRSVBj/jolteon.png', 'https://i.ibb.co/7r9DKfX/Jolteon.png'),
    ('Flareon', 'fire', 'https://i.ibb.co/0njrgHT/flareon.png', 'https://i.ibb.co/n1Mphwn/Flareon.png'),
    ('Porygon', 'normal', 'https://i.ibb.co/g6Lrgj5/porygon.png', 'https://i.ibb.co/zXZprSw/Porygon.png'),
    ('Omanyte', 'rock', 'https://i.ibb.co/h7xkCFQ/omanyte.png', 'https://i.ibb.co/H4R13kc/Omanyte.png'),
    ('Omastar', 'rock', 'https://i.ibb.co/5MLvSqS/omastar.png', 'https://i.ibb.co/QQ0ddHk/Omastar.png'),
    ('Kabuto', 'rock', 'https://i.ibb.co/VYSBLXK/kabuto.png', 'https://i.ibb.co/9G1SC4p/Kabuto.png'),
    ('Kabutops', 'rock', 'https://i.ibb.co/2kWHcmR/kabutops.png', 'https://i.ibb.co/3pRf98H/Kabutops.png'),
    ('Aerodactyl', 'rock', 'https://i.ibb.co/dKBtPC7/aerodactyl.png', 'https://i.ibb.co/vJX181k/Aerodactyl.png'),
    ('Snorlax', 'normal', 'https://i.ibb.co/1dyVpNT/snorlax.png', 'https://i.ibb.co/pfrFRv1/Snorlax.png'),
    ('Articuno', 'ice', 'https://i.ibb.co/WGvvdJN/articuno.png', 'https://i.ibb.co/t2ysty1/Articuno.png'),
    ('Zapdos', 'electric', 'https://i.ibb.co/Gk214X1/zapdos.png', 'https://i.ibb.co/LQCsJHm/Zapdos.png'),
    ('Moltres', 'fire', 'https://i.ibb.co/sK024kT/moltres.png', 'https://i.ibb.co/gJHnM60/Moltres.png'),
    ('Dratini', 'dragon', 'https://i.ibb.co/gTgNHVj/dratini.png', 'https://i.ibb.co/p2W3bY2/Dratini.png'),
    ('Dragonair', 'dragon', 'https://i.ibb.co/pndR0hk/dragonair.png', 'https://i.ibb.co/yynXF4J/Dragonair.png'),
    ('Dragonite', 'dragon', 'https://i.ibb.co/P4yywCy/dragonite.png', 'https://i.ibb.co/F3sW8N9/Dragonite.png'),
    ('Mewtwo', 'psychic', 'https://i.ibb.co/PF6Zm8g/mewtwo.png', 'https://i.ibb.co/7CdcVjT/Mewtwo.png'),
    ('Mew', 'psychic', 'https://i.ibb.co/DzHzCvH/mew.png', 'https://i.ibb.co/HYPFxK7/Mew.png')
