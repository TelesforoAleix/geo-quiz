
const geoData = [
    {
      "Municipi": "Abella de la Conca",
      "Comarca": "Pallars Jussà",
      "Codi": 250019,
      "Altitud (m)": 956,
      "Superfície (km²)": 78.3,
      "Població": 166
    },
    {
      "Municipi": "Abrera",
      "Comarca": "Baix Llobregat",
      "Codi": "080018",
      "Altitud (m)": 105,
      "Superfície (km²)": 19.9,
      "Població": 12821
    },
    {
      "Municipi": "Àger",
      "Comarca": "Noguera",
      "Codi": 250024,
      "Altitud (m)": 642,
      "Superfície (km²)": 160.6,
      "Població": 582
    },
    {
      "Municipi": "Agramunt",
      "Comarca": "Urgell",
      "Codi": 250030,
      "Altitud (m)": 337,
      "Superfície (km²)": 79.7,
      "Població": 5505
    },
    {
      "Municipi": "Aguilar de Segarra",
      "Comarca": "Bages",
      "Codi": "080023",
      "Altitud (m)": 480,
      "Superfície (km²)": 43.3,
      "Població": 293
    },
    {
      "Municipi": "Agullana",
      "Comarca": "Alt Empordà",
      "Codi": 170010,
      "Altitud (m)": 166,
      "Superfície (km²)": 27.7,
      "Població": 921
    },
    {
      "Municipi": "Aiguafreda",
      "Comarca": "Vallès Oriental",
      "Codi": "080142",
      "Altitud (m)": 404,
      "Superfície (km²)": 7.9,
      "Població": 2572
    },
    {
      "Municipi": "Aiguamúrcia",
      "Comarca": "Alt Camp",
      "Codi": 430017,
      "Altitud (m)": 314,
      "Superfície (km²)": 73,
      "Població": 983
    },
    {
      "Municipi": "Aiguaviva",
      "Comarca": "Gironès",
      "Codi": 170025,
      "Altitud (m)": 169,
      "Superfície (km²)": 13.9,
      "Població": 771
    },
    {
      "Municipi": "Aitona",
      "Comarca": "Segrià",
      "Codi": 250387,
      "Altitud (m)": 110,
      "Superfície (km²)": 66.9,
      "Població": 2520
    },
    {
      "Municipi": "Alamús, els",
      "Comarca": "Segrià",
      "Codi": 250045,
      "Altitud (m)": 212,
      "Superfície (km²)": 20.5,
      "Població": 792
    },
    {
      "Municipi": "Alàs i Cerc",
      "Comarca": "Alt Urgell",
      "Codi": 250058,
      "Altitud (m)": 768,
      "Superfície (km²)": 57.7,
      "Població": 325
    },
    {
      "Municipi": "Albagés, l'",
      "Comarca": "Garrigues",
      "Codi": 250061,
      "Altitud (m)": 372,
      "Superfície (km²)": 25.7,
      "Població": 356
    },
    {
      "Municipi": "Albanyà",
      "Comarca": "Alt Empordà",
      "Codi": 170031,
      "Altitud (m)": 239,
      "Superfície (km²)": 94.4,
      "Població": 170
    },
    {
      "Municipi": "Albatàrrec",
      "Comarca": "Segrià",
      "Codi": 250077,
      "Altitud (m)": 147,
      "Superfície (km²)": 10.5,
      "Població": 2228
    },
    {
      "Municipi": "Albesa",
      "Comarca": "Noguera",
      "Codi": 250083,
      "Altitud (m)": 237,
      "Superfície (km²)": 37.6,
      "Població": 1580
    },
    {
      "Municipi": "Albi, l'",
      "Comarca": "Garrigues",
      "Codi": 250096,
      "Altitud (m)": 526,
      "Superfície (km²)": 32.5,
      "Població": 764
    },
    {
      "Municipi": "Albinyana",
      "Comarca": "Baix Penedès",
      "Codi": 430022,
      "Altitud (m)": 198,
      "Superfície (km²)": 19.4,
      "Població": 2664
    },
    {
      "Municipi": "Albiol, l'",
      "Comarca": "Baix Camp",
      "Codi": 430038,
      "Altitud (m)": 823,
      "Superfície (km²)": 20.3,
      "Població": 539
    },
    {
      "Municipi": "Albons",
      "Comarca": "Baix Empordà",
      "Codi": 170046,
      "Altitud (m)": 25,
      "Superfície (km²)": 11.1,
      "Població": 816
    },
    {
      "Municipi": "Alcanar",
      "Comarca": "Montsià",
      "Codi": 430043,
      "Altitud (m)": 72,
      "Superfície (km²)": 47.1,
      "Població": 9772
    },
    {
      "Municipi": "Alcanó",
      "Comarca": "Segrià",
      "Codi": 250100,
      "Altitud (m)": 214,
      "Superfície (km²)": 21,
      "Població": 244
    },
    {
      "Municipi": "Alcarràs",
      "Comarca": "Segrià",
      "Codi": 250117,
      "Altitud (m)": 137,
      "Superfície (km²)": 114.3,
      "Població": 10000
    },
    {
      "Municipi": "Alcoletge",
      "Comarca": "Segrià",
      "Codi": 250122,
      "Altitud (m)": 213,
      "Superfície (km²)": 16.7,
      "Població": 3544
    },
    {
      "Municipi": "Alcover",
      "Comarca": "Alt Camp",
      "Codi": 430056,
      "Altitud (m)": 243,
      "Superfície (km²)": 46,
      "Població": 5267
    },
    {
      "Municipi": "Aldea, l'",
      "Comarca": "Baix Ebre",
      "Codi": 439044,
      "Altitud (m)": 9,
      "Superfície (km²)": 35.2,
      "Població": 4487
    },
    {
      "Municipi": "Aldover",
      "Comarca": "Baix Ebre",
      "Codi": 430069,
      "Altitud (m)": 14,
      "Superfície (km²)": 20.2,
      "Població": 879
    },
    {
      "Municipi": "Aleixar, l'",
      "Comarca": "Baix Camp",
      "Codi": 430075,
      "Altitud (m)": 262,
      "Superfície (km²)": 26.1,
      "Població": 947
    },
    {
      "Municipi": "Alella",
      "Comarca": "Maresme",
      "Codi": "080039",
      "Altitud (m)": 90,
      "Superfície (km²)": 9.6,
      "Població": 10110
    },
    {
      "Municipi": "Alfara de Carles",
      "Comarca": "Baix Ebre",
      "Codi": 430081,
      "Altitud (m)": 334,
      "Superfície (km²)": 63.9,
      "Població": 364
    },
    {
      "Municipi": "Alfarràs",
      "Comarca": "Segrià",
      "Codi": 250138,
      "Altitud (m)": 281,
      "Superfície (km²)": 11.4,
      "Població": 2778
    },
    {
      "Municipi": "Alfés",
      "Comarca": "Segrià",
      "Codi": 250143,
      "Altitud (m)": 236,
      "Superfície (km²)": 31.9,
      "Població": 285
    },
    {
      "Municipi": "Alforja",
      "Comarca": "Baix Camp",
      "Codi": 430094,
      "Altitud (m)": 374,
      "Superfície (km²)": 38.2,
      "Població": 1984
    },
    {
      "Municipi": "Algerri",
      "Comarca": "Noguera",
      "Codi": 250156,
      "Altitud (m)": 345,
      "Superfície (km²)": 54.3,
      "Població": 438
    },
    {
      "Municipi": "Alguaire",
      "Comarca": "Segrià",
      "Codi": 250169,
      "Altitud (m)": 304,
      "Superfície (km²)": 50.1,
      "Població": 3006
    },
    {
      "Municipi": "Alins",
      "Comarca": "Pallars Sobirà",
      "Codi": 250175,
      "Altitud (m)": 1048,
      "Superfície (km²)": 183.2,
      "Població": 283
    },
    {
      "Municipi": "Alió",
      "Comarca": "Alt Camp",
      "Codi": 430108,
      "Altitud (m)": 263,
      "Superfície (km²)": 7.3,
      "Població": 512
    },
    {
      "Municipi": "Almacelles",
      "Comarca": "Segrià",
      "Codi": 250194,
      "Altitud (m)": 247,
      "Superfície (km²)": 49,
      "Població": 6976
    },
    {
      "Municipi": "Almatret",
      "Comarca": "Segrià",
      "Codi": 250208,
      "Altitud (m)": 462,
      "Superfície (km²)": 56.8,
      "Població": 305
    },
    {
      "Municipi": "Almenar",
      "Comarca": "Segrià",
      "Codi": 250215,
      "Altitud (m)": 329,
      "Superfície (km²)": 66.6,
      "Població": 3360
    },
    {
      "Municipi": "Almoster",
      "Comarca": "Baix Camp",
      "Codi": 430115,
      "Altitud (m)": 290,
      "Superfície (km²)": 6,
      "Població": 1309
    },
    {
      "Municipi": "Alòs de Balaguer",
      "Comarca": "Noguera",
      "Codi": 250220,
      "Altitud (m)": 297,
      "Superfície (km²)": 69.1,
      "Població": 114
    },
    {
      "Municipi": "Alp",
      "Comarca": "Cerdanya",
      "Codi": 170062,
      "Altitud (m)": 1158,
      "Superfície (km²)": 44.3,
      "Població": 1721
    },
    {
      "Municipi": "Alpens",
      "Comarca": "Osona",
      "Codi": "080044",
      "Altitud (m)": 855,
      "Superfície (km²)": 13.8,
      "Població": 273
    },
    {
      "Municipi": "Alpicat",
      "Comarca": "Segrià",
      "Codi": 250236,
      "Altitud (m)": 264,
      "Superfície (km²)": 15.3,
      "Població": 6450
    },
    {
      "Municipi": "Alt Àneu",
      "Comarca": "Pallars Sobirà",
      "Codi": 250241,
      "Altitud (m)": 1076,
      "Superfície (km²)": 217.8,
      "Població": 449
    },
    {
      "Municipi": "Altafulla",
      "Comarca": "Tarragonès",
      "Codi": 430120,
      "Altitud (m)": 52,
      "Superfície (km²)": 7,
      "Població": 5684
    },
    {
      "Municipi": "Amer",
      "Comarca": "Selva",
      "Codi": 170078,
      "Altitud (m)": 186,
      "Superfície (km²)": 40.1,
      "Població": 2415
    },
    {
      "Municipi": "Ametlla de Mar, l'",
      "Comarca": "Baix Ebre",
      "Codi": 430136,
      "Altitud (m)": 19,
      "Superfície (km²)": 66.9,
      "Població": 7330
    },
    {
      "Municipi": "Ametlla del Vallès, l'",
      "Comarca": "Vallès Oriental",
      "Codi": "080057",
      "Altitud (m)": 281,
      "Superfície (km²)": 14.2,
      "Població": 9283
    },
    {
      "Municipi": "Ampolla, l'",
      "Comarca": "Baix Ebre",
      "Codi": 439060,
      "Altitud (m)": 8,
      "Superfície (km²)": 35.7,
      "Població": 3631
    },
    {
      "Municipi": "Amposta",
      "Comarca": "Montsià",
      "Codi": 430141,
      "Altitud (m)": 8,
      "Superfície (km²)": 138.3,
      "Població": 22225
    },
    {
      "Municipi": "Anglès",
      "Comarca": "Selva",
      "Codi": 170084,
      "Altitud (m)": 181,
      "Superfície (km²)": 16.3,
      "Població": 5839
    },
    {
      "Municipi": "Anglesola",
      "Comarca": "Urgell",
      "Codi": 250273,
      "Altitud (m)": 335,
      "Superfície (km²)": 23.5,
      "Població": 1365
    },
    {
      "Municipi": "Arbeca",
      "Comarca": "Garrigues",
      "Codi": 250292,
      "Altitud (m)": 332,
      "Superfície (km²)": 58.3,
      "Població": 2113
    },
    {
      "Municipi": "Arboç, l'",
      "Comarca": "Baix Penedès",
      "Codi": 430167,
      "Altitud (m)": 166,
      "Superfície (km²)": 14.1,
      "Població": 5692
    },
    {
      "Municipi": "Arbolí",
      "Comarca": "Baix Camp",
      "Codi": 430154,
      "Altitud (m)": 714,
      "Superfície (km²)": 20.8,
      "Població": 131
    },
    {
      "Municipi": "Arbúcies",
      "Comarca": "Selva",
      "Codi": 170097,
      "Altitud (m)": 291,
      "Superfície (km²)": 86.2,
      "Població": 6527
    },
    {
      "Municipi": "Arenys de Mar",
      "Comarca": "Maresme",
      "Codi": "080060",
      "Altitud (m)": 10,
      "Superfície (km²)": 6.8,
      "Població": 16280
    },
    {
      "Municipi": "Arenys de Munt",
      "Comarca": "Maresme",
      "Codi": "080076",
      "Altitud (m)": 121,
      "Superfície (km²)": 21.3,
      "Població": 9391
    },
    {
      "Municipi": "Argelaguer",
      "Comarca": "Garrotxa",
      "Codi": 170101,
      "Altitud (m)": 183,
      "Superfície (km²)": 12.5,
      "Població": 428
    },
    {
      "Municipi": "Argençola",
      "Comarca": "Anoia",
      "Codi": "080082",
      "Altitud (m)": 716,
      "Superfície (km²)": 47.1,
      "Població": 227
    },
    {
      "Municipi": "Argentera, l'",
      "Comarca": "Baix Camp",
      "Codi": 430173,
      "Altitud (m)": 344,
      "Superfície (km²)": 10.1,
      "Població": 132
    },
    {
      "Municipi": "Argentona",
      "Comarca": "Maresme",
      "Codi": "080095",
      "Altitud (m)": 88,
      "Superfície (km²)": 25.4,
      "Població": 12845
    },
    {
      "Municipi": "Armentera, l'",
      "Comarca": "Alt Empordà",
      "Codi": 170118,
      "Altitud (m)": 7,
      "Superfície (km²)": 5.6,
      "Població": 1063
    },
    {
      "Municipi": "Arnes",
      "Comarca": "Terra Alta",
      "Codi": 430189,
      "Altitud (m)": 506,
      "Superfície (km²)": 43,
      "Població": 456
    },
    {
      "Municipi": "Arres",
      "Comarca": "Val d'Aran",
      "Codi": 250313,
      "Altitud (m)": 1224,
      "Superfície (km²)": 11.6,
      "Població": 71
    },
    {
      "Municipi": "Arsèguel",
      "Comarca": "Alt Urgell",
      "Codi": 250328,
      "Altitud (m)": 950,
      "Superfície (km²)": 10.6,
      "Població": 79
    },
    {
      "Municipi": "Artés",
      "Comarca": "Bages",
      "Codi": "080109",
      "Altitud (m)": 316,
      "Superfície (km²)": 17.9,
      "Població": 5981
    },
    {
      "Municipi": "Artesa de Lleida",
      "Comarca": "Segrià",
      "Codi": 250334,
      "Altitud (m)": 202,
      "Superfície (km²)": 23.9,
      "Població": 1522
    },
    {
      "Municipi": "Artesa de Segre",
      "Comarca": "Noguera",
      "Codi": 250349,
      "Altitud (m)": 318,
      "Superfície (km²)": 175.9,
      "Població": 3528
    },
    {
      "Municipi": "Ascó",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430192,
      "Altitud (m)": 70,
      "Superfície (km²)": 73.6,
      "Població": 1637
    },
    {
      "Municipi": "Aspa",
      "Comarca": "Segrià",
      "Codi": 250365,
      "Altitud (m)": 256,
      "Superfície (km²)": 10.2,
      "Població": 217
    },
    {
      "Municipi": "Avellanes i Santa Linya, les",
      "Comarca": "Noguera",
      "Codi": 250371,
      "Altitud (m)": 567,
      "Superfície (km²)": 103,
      "Població": 444
    },
    {
      "Municipi": "Avià",
      "Comarca": "Berguedà",
      "Codi": "080116",
      "Altitud (m)": 677,
      "Superfície (km²)": 27.2,
      "Població": 2249
    },
    {
      "Municipi": "Avinyó",
      "Comarca": "Bages",
      "Codi": "080121",
      "Altitud (m)": 353,
      "Superfície (km²)": 63.2,
      "Població": 2297
    },
    {
      "Municipi": "Avinyonet de Puigventós",
      "Comarca": "Alt Empordà",
      "Codi": 170123,
      "Altitud (m)": 70,
      "Superfície (km²)": 12.3,
      "Població": 1684
    },
    {
      "Municipi": "Avinyonet del Penedès",
      "Comarca": "Alt Penedès",
      "Codi": "080137",
      "Altitud (m)": 280,
      "Superfície (km²)": 29.1,
      "Població": 1738
    },
    {
      "Municipi": "Badalona",
      "Comarca": "Barcelonès",
      "Codi": "080155",
      "Altitud (m)": 6,
      "Superfície (km²)": 21.2,
      "Població": 224301
    },
    {
      "Municipi": "Badia del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "089045",
      "Altitud (m)": 120,
      "Superfície (km²)": 0.9,
      "Població": 13055
    },
    {
      "Municipi": "Bagà",
      "Comarca": "Berguedà",
      "Codi": "080168",
      "Altitud (m)": 785,
      "Superfície (km²)": 43.1,
      "Població": 2147
    },
    {
      "Municipi": "Baix Pallars",
      "Comarca": "Pallars Sobirà",
      "Codi": 250390,
      "Altitud (m)": 591,
      "Superfície (km²)": 129.4,
      "Població": 355
    },
    {
      "Municipi": "Balaguer",
      "Comarca": "Noguera",
      "Codi": 250404,
      "Altitud (m)": 233,
      "Superfície (km²)": 57.3,
      "Població": 17544
    },
    {
      "Municipi": "Balenyà",
      "Comarca": "Osona",
      "Codi": "080174",
      "Altitud (m)": 587,
      "Superfície (km²)": 17.4,
      "Població": 3965
    },
    {
      "Municipi": "Balsareny",
      "Comarca": "Bages",
      "Codi": "080180",
      "Altitud (m)": 327,
      "Superfície (km²)": 36.9,
      "Població": 3306
    },
    {
      "Municipi": "Banyeres del Penedès",
      "Comarca": "Baix Penedès",
      "Codi": 430206,
      "Altitud (m)": 173,
      "Superfície (km²)": 12.2,
      "Població": 3356
    },
    {
      "Municipi": "Banyoles",
      "Comarca": "Pla de l'Estany",
      "Codi": 170157,
      "Altitud (m)": 172,
      "Superfície (km²)": 11.1,
      "Població": 20492
    },
    {
      "Municipi": "Barbens",
      "Comarca": "Pla d'Urgell",
      "Codi": 250411,
      "Altitud (m)": 283,
      "Superfície (km²)": 7.6,
      "Població": 929
    },
    {
      "Municipi": "Barberà de la Conca",
      "Comarca": "Conca de Barberà",
      "Codi": 430213,
      "Altitud (m)": 475,
      "Superfície (km²)": 26.6,
      "Població": 484
    },
    {
      "Municipi": "Barberà del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "082520",
      "Altitud (m)": 146,
      "Superfície (km²)": 8.3,
      "Població": 33353
    },
    {
      "Municipi": "Barcelona",
      "Comarca": "Barcelonès",
      "Codi": "080193",
      "Altitud (m)": 9,
      "Superfície (km²)": 101.4,
      "Població": 1655956
    },
    {
      "Municipi": "Baronia de Rialb, la",
      "Comarca": "Noguera",
      "Codi": 250426,
      "Altitud (m)": 388,
      "Superfície (km²)": 145.1,
      "Població": 225
    },
    {
      "Municipi": "Bàscara",
      "Comarca": "Alt Empordà",
      "Codi": 170160,
      "Altitud (m)": 66,
      "Superfície (km²)": 17.5,
      "Població": 1053
    },
    {
      "Municipi": "Bassella",
      "Comarca": "Alt Urgell",
      "Codi": 250447,
      "Altitud (m)": 423,
      "Superfície (km²)": 70.3,
      "Població": 220
    },
    {
      "Municipi": "Batea",
      "Comarca": "Terra Alta",
      "Codi": 430228,
      "Altitud (m)": 376,
      "Superfície (km²)": 128.4,
      "Població": 1863
    },
    {
      "Municipi": "Bausen",
      "Comarca": "Val d'Aran",
      "Codi": 250450,
      "Altitud (m)": 931,
      "Superfície (km²)": 17.7,
      "Població": 70
    },
    {
      "Municipi": "Begues",
      "Comarca": "Baix Llobregat",
      "Codi": "080207",
      "Altitud (m)": 399,
      "Superfície (km²)": 50.4,
      "Població": 7429
    },
    {
      "Municipi": "Begur",
      "Comarca": "Baix Empordà",
      "Codi": 170139,
      "Altitud (m)": 200,
      "Superfície (km²)": 20.7,
      "Població": 4229
    },
    {
      "Municipi": "Belianes",
      "Comarca": "Urgell",
      "Codi": 250463,
      "Altitud (m)": 373,
      "Superfície (km²)": 15.7,
      "Població": 510
    },
    {
      "Municipi": "Bellaguarda",
      "Comarca": "Garrigues",
      "Codi": 251706,
      "Altitud (m)": 640,
      "Superfície (km²)": 17.1,
      "Població": 296
    },
    {
      "Municipi": "Bellcaire d'Empordà",
      "Comarca": "Baix Empordà",
      "Codi": 170182,
      "Altitud (m)": 35,
      "Superfície (km²)": 12.6,
      "Població": 727
    },
    {
      "Municipi": "Bellcaire d'Urgell",
      "Comarca": "Noguera",
      "Codi": 250479,
      "Altitud (m)": 267,
      "Superfície (km²)": 31.4,
      "Població": 1225
    },
    {
      "Municipi": "Bell-lloc d'Urgell",
      "Comarca": "Pla d'Urgell",
      "Codi": 250485,
      "Altitud (m)": 196,
      "Superfície (km²)": 34.9,
      "Població": 2374
    },
    {
      "Municipi": "Bellmunt d'Urgell",
      "Comarca": "Noguera",
      "Codi": 250498,
      "Altitud (m)": 379,
      "Superfície (km²)": 5.1,
      "Població": 177
    },
    {
      "Municipi": "Bellmunt del Priorat",
      "Comarca": "Priorat",
      "Codi": 430234,
      "Altitud (m)": 261,
      "Superfície (km²)": 8.9,
      "Població": 285
    },
    {
      "Municipi": "Bellprat",
      "Comarca": "Anoia",
      "Codi": "080214",
      "Altitud (m)": 653,
      "Superfície (km²)": 31,
      "Població": 72
    },
    {
      "Municipi": "Bellpuig",
      "Comarca": "Urgell",
      "Codi": 250501,
      "Altitud (m)": 308,
      "Superfície (km²)": 35,
      "Població": 5182
    },
    {
      "Municipi": "Bellvei",
      "Comarca": "Baix Penedès",
      "Codi": 430249,
      "Altitud (m)": 108,
      "Superfície (km²)": 8.3,
      "Població": 2361
    },
    {
      "Municipi": "Bellver de Cerdanya",
      "Comarca": "Cerdanya",
      "Codi": 250518,
      "Altitud (m)": 1061,
      "Superfície (km²)": 98.2,
      "Població": 2251
    },
    {
      "Municipi": "Bellvís",
      "Comarca": "Pla d'Urgell",
      "Codi": 250523,
      "Altitud (m)": 207,
      "Superfície (km²)": 46.7,
      "Població": 2251
    },
    {
      "Municipi": "Benavent de Segrià",
      "Comarca": "Segrià",
      "Codi": 250539,
      "Altitud (m)": 234,
      "Superfície (km²)": 7.4,
      "Població": 1581
    },
    {
      "Municipi": "Benifallet",
      "Comarca": "Baix Ebre",
      "Codi": 430252,
      "Altitud (m)": 19,
      "Superfície (km²)": 62.4,
      "Població": 736
    },
    {
      "Municipi": "Benissanet",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430265,
      "Altitud (m)": 26,
      "Superfície (km²)": 23.1,
      "Població": 1161
    },
    {
      "Municipi": "Berga",
      "Comarca": "Berguedà",
      "Codi": "080229",
      "Altitud (m)": 704,
      "Superfície (km²)": 22.6,
      "Població": 16994
    },
    {
      "Municipi": "Besalú",
      "Comarca": "Garrotxa",
      "Codi": 170195,
      "Altitud (m)": 151,
      "Superfície (km²)": 4.9,
      "Població": 2512
    },
    {
      "Municipi": "Bescanó",
      "Comarca": "Gironès",
      "Codi": 170209,
      "Altitud (m)": 102,
      "Superfície (km²)": 35.9,
      "Població": 5171
    },
    {
      "Municipi": "Beuda",
      "Comarca": "Garrotxa",
      "Codi": 170216,
      "Altitud (m)": 338,
      "Superfície (km²)": 35.9,
      "Població": 212
    },
    {
      "Municipi": "Bigues i Riells del Fai",
      "Comarca": "Vallès Oriental",
      "Codi": "080235",
      "Altitud (m)": 307,
      "Superfície (km²)": 28.6,
      "Població": 9944
    },
    {
      "Municipi": "Biosca",
      "Comarca": "Segarra",
      "Codi": 250557,
      "Altitud (m)": 455,
      "Superfície (km²)": 66.2,
      "Població": 185
    },
    {
      "Municipi": "Bisbal d'Empordà, la",
      "Comarca": "Baix Empordà",
      "Codi": 170221,
      "Altitud (m)": 39,
      "Superfície (km²)": 20.6,
      "Població": 11364
    },
    {
      "Municipi": "Bisbal de Falset, la",
      "Comarca": "Priorat",
      "Codi": 430271,
      "Altitud (m)": 372,
      "Superfície (km²)": 14.1,
      "Població": 206
    },
    {
      "Municipi": "Bisbal del Penedès, la",
      "Comarca": "Baix Penedès",
      "Codi": 430287,
      "Altitud (m)": 189,
      "Superfície (km²)": 32.5,
      "Població": 4168
    },
    {
      "Municipi": "Biure",
      "Comarca": "Alt Empordà",
      "Codi": 172348,
      "Altitud (m)": 81,
      "Superfície (km²)": 10,
      "Població": 240
    },
    {
      "Municipi": "Blancafort",
      "Comarca": "Conca de Barberà",
      "Codi": 430290,
      "Altitud (m)": 428,
      "Superfície (km²)": 14.5,
      "Població": 390
    },
    {
      "Municipi": "Blanes",
      "Comarca": "Selva",
      "Codi": 170237,
      "Altitud (m)": 13,
      "Superfície (km²)": 17.7,
      "Població": 41517
    },
    {
      "Municipi": "Boadella i les Escaules",
      "Comarca": "Alt Empordà",
      "Codi": 170293,
      "Altitud (m)": 82,
      "Superfície (km²)": 10.8,
      "Població": 262
    },
    {
      "Municipi": "Bolvir",
      "Comarca": "Cerdanya",
      "Codi": 170242,
      "Altitud (m)": 1145,
      "Superfície (km²)": 10.3,
      "Població": 508
    },
    {
      "Municipi": "Bonastre",
      "Comarca": "Baix Penedès",
      "Codi": 430304,
      "Altitud (m)": 177,
      "Superfície (km²)": 25,
      "Població": 744
    },
    {
      "Municipi": "Bòrdes, Es",
      "Comarca": "Val d'Aran",
      "Codi": 250576,
      "Altitud (m)": 852,
      "Superfície (km²)": 21.4,
      "Població": 280
    },
    {
      "Municipi": "Bordils",
      "Comarca": "Gironès",
      "Codi": 170255,
      "Altitud (m)": 42,
      "Superfície (km²)": 7.3,
      "Població": 1794
    },
    {
      "Municipi": "Borges Blanques, les",
      "Comarca": "Garrigues",
      "Codi": 250582,
      "Altitud (m)": 304,
      "Superfície (km²)": 61.6,
      "Població": 6199
    },
    {
      "Municipi": "Borges del Camp, les",
      "Comarca": "Baix Camp",
      "Codi": 430311,
      "Altitud (m)": 238,
      "Superfície (km²)": 8.2,
      "Població": 2195
    },
    {
      "Municipi": "Borrassà",
      "Comarca": "Alt Empordà",
      "Codi": 170268,
      "Altitud (m)": 73,
      "Superfície (km²)": 9.5,
      "Població": 795
    },
    {
      "Municipi": "Borredà",
      "Comarca": "Berguedà",
      "Codi": "080240",
      "Altitud (m)": 854,
      "Superfície (km²)": 43.5,
      "Població": 439
    },
    {
      "Municipi": "Bossòst",
      "Comarca": "Val d'Aran",
      "Codi": 250595,
      "Altitud (m)": 710,
      "Superfície (km²)": 28.2,
      "Població": 1138
    },
    {
      "Municipi": "Bot",
      "Comarca": "Terra Alta",
      "Codi": 430326,
      "Altitud (m)": 286,
      "Superfície (km²)": 34.9,
      "Població": 560
    },
    {
      "Municipi": "Botarell",
      "Comarca": "Baix Camp",
      "Codi": 430332,
      "Altitud (m)": 196,
      "Superfície (km²)": 12,
      "Població": 1152
    },
    {
      "Municipi": "Bovera",
      "Comarca": "Garrigues",
      "Codi": 250560,
      "Altitud (m)": 297,
      "Superfície (km²)": 31.1,
      "Població": 261
    },
    {
      "Municipi": "Bràfim",
      "Comarca": "Alt Camp",
      "Codi": 430347,
      "Altitud (m)": 236,
      "Superfície (km²)": 6.4,
      "Població": 687
    },
    {
      "Municipi": "Breda",
      "Comarca": "Selva",
      "Codi": 170274,
      "Altitud (m)": 169,
      "Superfície (km²)": 5,
      "Població": 3892
    },
    {
      "Municipi": "Bruc, el",
      "Comarca": "Anoia",
      "Codi": "080253",
      "Altitud (m)": 489,
      "Superfície (km²)": 47.2,
      "Població": 2275
    },
    {
      "Municipi": "Brull, el",
      "Comarca": "Osona",
      "Codi": "080266",
      "Altitud (m)": 843,
      "Superfície (km²)": 41,
      "Població": 286
    },
    {
      "Municipi": "Brunyola i Sant Martí Sapresa",
      "Comarca": "Selva",
      "Codi": 170280,
      "Altitud (m)": 247,
      "Superfície (km²)": 36.8,
      "Població": 398
    },
    {
      "Municipi": "Cabacés",
      "Comarca": "Priorat",
      "Codi": 430350,
      "Altitud (m)": 358,
      "Superfície (km²)": 31.3,
      "Població": 305
    },
    {
      "Municipi": "Cabanabona",
      "Comarca": "Noguera",
      "Codi": 250609,
      "Altitud (m)": 421,
      "Superfície (km²)": 14.2,
      "Població": 62
    },
    {
      "Municipi": "Cabanelles",
      "Comarca": "Alt Empordà",
      "Codi": 170314,
      "Altitud (m)": 194,
      "Superfície (km²)": 55.6,
      "Població": 276
    },
    {
      "Municipi": "Cabanes",
      "Comarca": "Alt Empordà",
      "Codi": 170307,
      "Altitud (m)": 26,
      "Superfície (km²)": 15,
      "Població": 938
    },
    {
      "Municipi": "Cabanyes, les",
      "Comarca": "Alt Penedès",
      "Codi": "080272",
      "Altitud (m)": 252,
      "Superfície (km²)": 1.2,
      "Població": 993
    },
    {
      "Municipi": "Cabó",
      "Comarca": "Alt Urgell",
      "Codi": 250616,
      "Altitud (m)": 768,
      "Superfície (km²)": 80.3,
      "Població": 101
    },
    {
      "Municipi": "Cabra del Camp",
      "Comarca": "Alt Camp",
      "Codi": 430363,
      "Altitud (m)": 493,
      "Superfície (km²)": 27,
      "Població": 1282
    },
    {
      "Municipi": "Cabrera d'Anoia",
      "Comarca": "Anoia",
      "Codi": "080288",
      "Altitud (m)": 299,
      "Superfície (km²)": 17,
      "Població": 1667
    },
    {
      "Municipi": "Cabrera de Mar",
      "Comarca": "Maresme",
      "Codi": "080291",
      "Altitud (m)": 104,
      "Superfície (km²)": 9,
      "Població": 4948
    },
    {
      "Municipi": "Cabrils",
      "Comarca": "Maresme",
      "Codi": "080305",
      "Altitud (m)": 147,
      "Superfície (km²)": 7.1,
      "Població": 7803
    },
    {
      "Municipi": "Cadaqués",
      "Comarca": "Alt Empordà",
      "Codi": 170329,
      "Altitud (m)": 23,
      "Superfície (km²)": 26.4,
      "Població": 2916
    },
    {
      "Municipi": "Calaf",
      "Comarca": "Anoia",
      "Codi": "080312",
      "Altitud (m)": 680,
      "Superfície (km²)": 9.2,
      "Població": 3549
    },
    {
      "Municipi": "Calafell",
      "Comarca": "Baix Penedès",
      "Codi": 430379,
      "Altitud (m)": 67,
      "Superfície (km²)": 20.4,
      "Població": 30482
    },
    {
      "Municipi": "Calders",
      "Comarca": "Moianès",
      "Codi": "080348",
      "Altitud (m)": 552,
      "Superfície (km²)": 33.1,
      "Població": 1098
    },
    {
      "Municipi": "Caldes d'Estrac",
      "Comarca": "Maresme",
      "Codi": "080327",
      "Altitud (m)": 33,
      "Superfície (km²)": 0.9,
      "Població": 3213
    },
    {
      "Municipi": "Caldes de Malavella",
      "Comarca": "Selva",
      "Codi": 170335,
      "Altitud (m)": 84,
      "Superfície (km²)": 57.3,
      "Població": 8391
    },
    {
      "Municipi": "Caldes de Montbui",
      "Comarca": "Vallès Oriental",
      "Codi": "080333",
      "Altitud (m)": 203,
      "Superfície (km²)": 37.5,
      "Població": 18102
    },
    {
      "Municipi": "Calella",
      "Comarca": "Maresme",
      "Codi": "080351",
      "Altitud (m)": 5,
      "Superfície (km²)": 8,
      "Població": 19762
    },
    {
      "Municipi": "Calldetenes",
      "Comarca": "Osona",
      "Codi": "080370",
      "Altitud (m)": 489,
      "Superfície (km²)": 5.8,
      "Població": 2596
    },
    {
      "Municipi": "Callús",
      "Comarca": "Bages",
      "Codi": "080386",
      "Altitud (m)": 260,
      "Superfície (km²)": 12.5,
      "Població": 2100
    },
    {
      "Municipi": "Calonge de Segarra",
      "Comarca": "Anoia",
      "Codi": "080364",
      "Altitud (m)": 688,
      "Superfície (km²)": 37.2,
      "Població": 188
    },
    {
      "Municipi": "Calonge i Sant Antoni",
      "Comarca": "Baix Empordà",
      "Codi": 170340,
      "Altitud (m)": 22,
      "Superfície (km²)": 33.6,
      "Població": 12004
    },
    {
      "Municipi": "Camarasa",
      "Comarca": "Noguera",
      "Codi": 250621,
      "Altitud (m)": 321,
      "Superfície (km²)": 157.1,
      "Població": 795
    },
    {
      "Municipi": "Camarles",
      "Comarca": "Baix Ebre",
      "Codi": 439039,
      "Altitud (m)": 13,
      "Superfície (km²)": 25.2,
      "Població": 3365
    },
    {
      "Municipi": "Cambrils",
      "Comarca": "Baix Camp",
      "Codi": 430385,
      "Altitud (m)": 24,
      "Superfície (km²)": 35.2,
      "Població": 36441
    },
    {
      "Municipi": "Camós",
      "Comarca": "Pla de l'Estany",
      "Codi": 170353,
      "Altitud (m)": 168,
      "Superfície (km²)": 15.7,
      "Població": 718
    },
    {
      "Municipi": "Campdevànol",
      "Comarca": "Ripollès",
      "Codi": 170366,
      "Altitud (m)": 738,
      "Superfície (km²)": 32.6,
      "Població": 3215
    },
    {
      "Municipi": "Campelles",
      "Comarca": "Ripollès",
      "Codi": 170372,
      "Altitud (m)": 1303,
      "Superfície (km²)": 18.6,
      "Població": 165
    },
    {
      "Municipi": "Campins",
      "Comarca": "Vallès Oriental",
      "Codi": "080399",
      "Altitud (m)": 321,
      "Superfície (km²)": 7.3,
      "Població": 592
    },
    {
      "Municipi": "Campllong",
      "Comarca": "Gironès",
      "Codi": 170388,
      "Altitud (m)": 113,
      "Superfície (km²)": 8.6,
      "Població": 534
    },
    {
      "Municipi": "Camprodon",
      "Comarca": "Ripollès",
      "Codi": 170391,
      "Altitud (m)": 947,
      "Superfície (km²)": 103.4,
      "Població": 2487
    },
    {
      "Municipi": "Canejan",
      "Comarca": "Val d'Aran",
      "Codi": 250637,
      "Altitud (m)": 906,
      "Superfície (km²)": 48.3,
      "Població": 96
    },
    {
      "Municipi": "Canet d'Adri",
      "Comarca": "Gironès",
      "Codi": 170405,
      "Altitud (m)": 217,
      "Superfície (km²)": 44.4,
      "Població": 740
    },
    {
      "Municipi": "Canet de Mar",
      "Comarca": "Maresme",
      "Codi": "080403",
      "Altitud (m)": 15,
      "Superfície (km²)": 5.6,
      "Població": 15014
    },
    {
      "Municipi": "Canonja, la",
      "Comarca": "Tarragonès",
      "Codi": 439076,
      "Altitud (m)": 50,
      "Superfície (km²)": 7.3,
      "Població": 5925
    },
    {
      "Municipi": "Canovelles",
      "Comarca": "Vallès Oriental",
      "Codi": "080410",
      "Altitud (m)": 175,
      "Superfície (km²)": 6.7,
      "Població": 17025
    },
    {
      "Municipi": "Cànoves i Samalús",
      "Comarca": "Vallès Oriental",
      "Codi": "080425",
      "Altitud (m)": 346,
      "Superfície (km²)": 29.2,
      "Població": 3320
    },
    {
      "Municipi": "Cantallops",
      "Comarca": "Alt Empordà",
      "Codi": 170412,
      "Altitud (m)": 200,
      "Superfície (km²)": 19.6,
      "Població": 326
    },
    {
      "Municipi": "Canyelles",
      "Comarca": "Garraf",
      "Codi": "080431",
      "Altitud (m)": 142,
      "Superfície (km²)": 14.2,
      "Població": 5201
    },
    {
      "Municipi": "Capafonts",
      "Comarca": "Baix Camp",
      "Codi": 430398,
      "Altitud (m)": 751,
      "Superfície (km²)": 13.4,
      "Població": 111
    },
    {
      "Municipi": "Capçanes",
      "Comarca": "Priorat",
      "Codi": 430402,
      "Altitud (m)": 223,
      "Superfície (km²)": 22.5,
      "Població": 423
    },
    {
      "Municipi": "Capellades",
      "Comarca": "Anoia",
      "Codi": "080446",
      "Altitud (m)": 317,
      "Superfície (km²)": 2.9,
      "Població": 5415
    },
    {
      "Municipi": "Capmany",
      "Comarca": "Alt Empordà",
      "Codi": 170427,
      "Altitud (m)": 107,
      "Superfície (km²)": 26.4,
      "Població": 665
    },
    {
      "Municipi": "Capolat",
      "Comarca": "Berguedà",
      "Codi": "080459",
      "Altitud (m)": 1279,
      "Superfície (km²)": 34.1,
      "Població": 88
    },
    {
      "Municipi": "Cardedeu",
      "Comarca": "Vallès Oriental",
      "Codi": "080462",
      "Altitud (m)": 193,
      "Superfície (km²)": 12.1,
      "Població": 19047
    },
    {
      "Municipi": "Cardona",
      "Comarca": "Bages",
      "Codi": "080478",
      "Altitud (m)": 507,
      "Superfície (km²)": 66.7,
      "Població": 4561
    },
    {
      "Municipi": "Carme",
      "Comarca": "Anoia",
      "Codi": "080484",
      "Altitud (m)": 351,
      "Superfície (km²)": 11.7,
      "Població": 797
    },
    {
      "Municipi": "Caseres",
      "Comarca": "Terra Alta",
      "Codi": 430419,
      "Altitud (m)": 324,
      "Superfície (km²)": 42.9,
      "Població": 242
    },
    {
      "Municipi": "Cassà de la Selva",
      "Comarca": "Gironès",
      "Codi": 170448,
      "Altitud (m)": 137,
      "Superfície (km²)": 45.2,
      "Població": 10833
    },
    {
      "Municipi": "Casserres",
      "Comarca": "Berguedà",
      "Codi": "080497",
      "Altitud (m)": 611,
      "Superfície (km²)": 29.5,
      "Població": 1638
    },
    {
      "Municipi": "Castell d'Aro, Platja d'Aro i s'Agaró",
      "Comarca": "Baix Empordà",
      "Codi": 170486,
      "Altitud (m)": 5,
      "Superfície (km²)": 21.8,
      "Població": 12533
    },
    {
      "Municipi": "Castell de l'Areny",
      "Comarca": "Berguedà",
      "Codi": "080575",
      "Altitud (m)": 954,
      "Superfície (km²)": 24.4,
      "Població": 69
    },
    {
      "Municipi": "Castell de Mur",
      "Comarca": "Pallars Jussà",
      "Codi": 259046,
      "Altitud (m)": 532,
      "Superfície (km²)": 62.4,
      "Població": 179
    },
    {
      "Municipi": "Castellar de la Ribera",
      "Comarca": "Solsonès",
      "Codi": 250642,
      "Altitud (m)": 657,
      "Superfície (km²)": 60.2,
      "Població": 141
    },
    {
      "Municipi": "Castellar de n'Hug",
      "Comarca": "Berguedà",
      "Codi": "080522",
      "Altitud (m)": 1395,
      "Superfície (km²)": 47.1,
      "Població": 171
    },
    {
      "Municipi": "Castellar del Riu",
      "Comarca": "Berguedà",
      "Codi": "080500",
      "Altitud (m)": 920,
      "Superfície (km²)": 32.7,
      "Població": 169
    },
    {
      "Municipi": "Castellar del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "080517",
      "Altitud (m)": 331,
      "Superfície (km²)": 44.9,
      "Població": 25122
    },
    {
      "Municipi": "Castellbell i el Vilar",
      "Comarca": "Bages",
      "Codi": "080538",
      "Altitud (m)": 178,
      "Superfície (km²)": 28.5,
      "Població": 4062
    },
    {
      "Municipi": "Castellbisbal",
      "Comarca": "Vallès Occidental",
      "Codi": "080543",
      "Altitud (m)": 132,
      "Superfície (km²)": 31,
      "Població": 12811
    },
    {
      "Municipi": "Castellcir",
      "Comarca": "Moianès",
      "Codi": "080556",
      "Altitud (m)": 773,
      "Superfície (km²)": 34.2,
      "Població": 775
    },
    {
      "Municipi": "Castelldans",
      "Comarca": "Garrigues",
      "Codi": 250674,
      "Altitud (m)": 353,
      "Superfície (km²)": 65.1,
      "Població": 887
    },
    {
      "Municipi": "Castelldefels",
      "Comarca": "Baix Llobregat",
      "Codi": "080569",
      "Altitud (m)": 3,
      "Superfície (km²)": 12.9,
      "Població": 68327
    },
    {
      "Municipi": "Castellet i la Gornal",
      "Comarca": "Alt Penedès",
      "Codi": "080581",
      "Altitud (m)": 137,
      "Superfície (km²)": 47.5,
      "Població": 2569
    },
    {
      "Municipi": "Castellfollit de la Roca",
      "Comarca": "Garrotxa",
      "Codi": 170464,
      "Altitud (m)": 296,
      "Superfície (km²)": 0.7,
      "Població": 938
    },
    {
      "Municipi": "Castellfollit de Riubregós",
      "Comarca": "Anoia",
      "Codi": "080608",
      "Altitud (m)": 467,
      "Superfície (km²)": 26.2,
      "Població": 162
    },
    {
      "Municipi": "Castellfollit del Boix",
      "Comarca": "Bages",
      "Codi": "080594",
      "Altitud (m)": 700,
      "Superfície (km²)": 58.9,
      "Població": 462
    },
    {
      "Municipi": "Castellgalí",
      "Comarca": "Bages",
      "Codi": "080615",
      "Altitud (m)": 266,
      "Superfície (km²)": 17.2,
      "Població": 2308
    },
    {
      "Municipi": "Castellnou de Bages",
      "Comarca": "Bages",
      "Codi": "080620",
      "Altitud (m)": 469,
      "Superfície (km²)": 29.2,
      "Població": 1415
    },
    {
      "Municipi": "Castellnou de Seana",
      "Comarca": "Pla d'Urgell",
      "Codi": 250680,
      "Altitud (m)": 269,
      "Superfície (km²)": 16.1,
      "Població": 709
    },
    {
      "Municipi": "Castelló d'Empúries",
      "Comarca": "Alt Empordà",
      "Codi": 170470,
      "Altitud (m)": 17,
      "Superfície (km²)": 42.3,
      "Població": 11787
    },
    {
      "Municipi": "Castelló de Farfanya",
      "Comarca": "Noguera",
      "Codi": 250693,
      "Altitud (m)": 358,
      "Superfície (km²)": 52.6,
      "Població": 530
    },
    {
      "Municipi": "Castellolí",
      "Comarca": "Anoia",
      "Codi": "080636",
      "Altitud (m)": 415,
      "Superfície (km²)": 25.3,
      "Població": 653
    },
    {
      "Municipi": "Castellserà",
      "Comarca": "Urgell",
      "Codi": 250707,
      "Altitud (m)": 267,
      "Superfície (km²)": 15.8,
      "Població": 986
    },
    {
      "Municipi": "Castellterçol",
      "Comarca": "Moianès",
      "Codi": "080641",
      "Altitud (m)": 726,
      "Superfície (km²)": 31.9,
      "Població": 2729
    },
    {
      "Municipi": "Castellvell del Camp",
      "Comarca": "Baix Camp",
      "Codi": 430424,
      "Altitud (m)": 219,
      "Superfície (km²)": 5.2,
      "Població": 3017
    },
    {
      "Municipi": "Castellví de la Marca",
      "Comarca": "Alt Penedès",
      "Codi": "080654",
      "Altitud (m)": 198,
      "Superfície (km²)": 28.4,
      "Població": 1671
    },
    {
      "Municipi": "Castellví de Rosanes",
      "Comarca": "Baix Llobregat",
      "Codi": "080667",
      "Altitud (m)": 178,
      "Superfície (km²)": 16.4,
      "Població": 2085
    },
    {
      "Municipi": "Catllar, el",
      "Comarca": "Tarragonès",
      "Codi": 430430,
      "Altitud (m)": 59,
      "Superfície (km²)": 26.4,
      "Població": 5118
    },
    {
      "Municipi": "Cava",
      "Comarca": "Alt Urgell",
      "Codi": 250714,
      "Altitud (m)": 1335,
      "Superfície (km²)": 42.2,
      "Població": 46
    },
    {
      "Municipi": "Cellera de Ter, la",
      "Comarca": "Selva",
      "Codi": 171899,
      "Altitud (m)": 166,
      "Superfície (km²)": 14.6,
      "Població": 2013
    },
    {
      "Municipi": "Celrà",
      "Comarca": "Gironès",
      "Codi": 170499,
      "Altitud (m)": 71,
      "Superfície (km²)": 19.5,
      "Població": 5462
    },
    {
      "Municipi": "Centelles",
      "Comarca": "Osona",
      "Codi": "080673",
      "Altitud (m)": 496,
      "Superfície (km²)": 15.2,
      "Població": 7737
    },
    {
      "Municipi": "Cercs",
      "Comarca": "Berguedà",
      "Codi": "082687",
      "Altitud (m)": 650,
      "Superfície (km²)": 47.4,
      "Població": 1197
    },
    {
      "Municipi": "Cerdanyola del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "082665",
      "Altitud (m)": 82,
      "Superfície (km²)": 30.6,
      "Població": 57752
    },
    {
      "Municipi": "Cervelló",
      "Comarca": "Baix Llobregat",
      "Codi": "080689",
      "Altitud (m)": 122,
      "Superfície (km²)": 24.1,
      "Població": 9461
    },
    {
      "Municipi": "Cervera",
      "Comarca": "Segarra",
      "Codi": 250729,
      "Altitud (m)": 548,
      "Superfície (km²)": 55.2,
      "Població": 9468
    },
    {
      "Municipi": "Cervià de les Garrigues",
      "Comarca": "Garrigues",
      "Codi": 250735,
      "Altitud (m)": 444,
      "Superfície (km²)": 34.2,
      "Població": 645
    },
    {
      "Municipi": "Cervià de Ter",
      "Comarca": "Gironès",
      "Codi": 170502,
      "Altitud (m)": 45,
      "Superfície (km²)": 9.9,
      "Població": 1007
    },
    {
      "Municipi": "Cistella",
      "Comarca": "Alt Empordà",
      "Codi": 170519,
      "Altitud (m)": 130,
      "Superfície (km²)": 25.6,
      "Població": 301
    },
    {
      "Municipi": "Ciutadilla",
      "Comarca": "Urgell",
      "Codi": 250740,
      "Altitud (m)": 519,
      "Superfície (km²)": 17,
      "Població": 188
    },
    {
      "Municipi": "Clariana de Cardener",
      "Comarca": "Solsonès",
      "Codi": 250753,
      "Altitud (m)": 500,
      "Superfície (km²)": 40.8,
      "Població": 158
    },
    {
      "Municipi": "Cogul, el",
      "Comarca": "Garrigues",
      "Codi": 250766,
      "Altitud (m)": 279,
      "Superfície (km²)": 17.5,
      "Població": 155
    },
    {
      "Municipi": "Colera",
      "Comarca": "Alt Empordà",
      "Codi": 170545,
      "Altitud (m)": 10,
      "Superfície (km²)": 24.4,
      "Població": 477
    },
    {
      "Municipi": "Coll de Nargó",
      "Comarca": "Alt Urgell",
      "Codi": 250772,
      "Altitud (m)": 573,
      "Superfície (km²)": 151.4,
      "Població": 558
    },
    {
      "Municipi": "Collbató",
      "Comarca": "Baix Llobregat",
      "Codi": "080692",
      "Altitud (m)": 388,
      "Superfície (km²)": 18.1,
      "Població": 4823
    },
    {
      "Municipi": "Colldejou",
      "Comarca": "Baix Camp",
      "Codi": 430458,
      "Altitud (m)": 431,
      "Superfície (km²)": 14.5,
      "Població": 161
    },
    {
      "Municipi": "Collsuspina",
      "Comarca": "Moianès",
      "Codi": "080706",
      "Altitud (m)": 901,
      "Superfície (km²)": 15.1,
      "Població": 387
    },
    {
      "Municipi": "Colomers",
      "Comarca": "Baix Empordà",
      "Codi": 170558,
      "Altitud (m)": 41,
      "Superfície (km²)": 4.4,
      "Població": 207
    },
    {
      "Municipi": "Coma i la Pedra, la",
      "Comarca": "Solsonès",
      "Codi": 251636,
      "Altitud (m)": 1004,
      "Superfície (km²)": 60.6,
      "Població": 277
    },
    {
      "Municipi": "Conca de Dalt",
      "Comarca": "Pallars Jussà",
      "Codi": 251615,
      "Altitud (m)": 507,
      "Superfície (km²)": 166.5,
      "Població": 435
    },
    {
      "Municipi": "Conesa",
      "Comarca": "Conca de Barberà",
      "Codi": 430461,
      "Altitud (m)": 705,
      "Superfície (km²)": 29,
      "Població": 120
    },
    {
      "Municipi": "Constantí",
      "Comarca": "Tarragonès",
      "Codi": 430477,
      "Altitud (m)": 81,
      "Superfície (km²)": 30.9,
      "Població": 6849
    },
    {
      "Municipi": "Copons",
      "Comarca": "Anoia",
      "Codi": "080713",
      "Altitud (m)": 432,
      "Superfície (km²)": 18.7,
      "Població": 342
    },
    {
      "Municipi": "Corbera d'Ebre",
      "Comarca": "Terra Alta",
      "Codi": 430483,
      "Altitud (m)": 337,
      "Superfície (km²)": 53.1,
      "Població": 1017
    },
    {
      "Municipi": "Corbera de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "080728",
      "Altitud (m)": 342,
      "Superfície (km²)": 18.4,
      "Població": 15529
    },
    {
      "Municipi": "Corbins",
      "Comarca": "Segrià",
      "Codi": 250788,
      "Altitud (m)": 211,
      "Superfície (km²)": 21,
      "Població": 1481
    },
    {
      "Municipi": "Corçà",
      "Comarca": "Baix Empordà",
      "Codi": 170577,
      "Altitud (m)": 43,
      "Superfície (km²)": 16.3,
      "Població": 1293
    },
    {
      "Municipi": "Cornellà de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "080734",
      "Altitud (m)": 27,
      "Superfície (km²)": 7,
      "Població": 90076
    },
    {
      "Municipi": "Cornellà del Terri",
      "Comarca": "Pla de l'Estany",
      "Codi": 170561,
      "Altitud (m)": 96,
      "Superfície (km²)": 27.7,
      "Població": 2398
    },
    {
      "Municipi": "Cornudella de Montsant",
      "Comarca": "Priorat",
      "Codi": 430496,
      "Altitud (m)": 533,
      "Superfície (km²)": 63.5,
      "Població": 1002
    },
    {
      "Municipi": "Creixell",
      "Comarca": "Tarragonès",
      "Codi": 430509,
      "Altitud (m)": 48,
      "Superfície (km²)": 10.5,
      "Població": 4067
    },
    {
      "Municipi": "Crespià",
      "Comarca": "Pla de l'Estany",
      "Codi": 170583,
      "Altitud (m)": 138,
      "Superfície (km²)": 11.4,
      "Població": 242
    },
    {
      "Municipi": "Cruïlles, Monells i Sant Sadurní de l'Heura",
      "Comarca": "Baix Empordà",
      "Codi": 179011,
      "Altitud (m)": 110,
      "Superfície (km²)": 99.8,
      "Població": 1319
    },
    {
      "Municipi": "Cubelles",
      "Comarca": "Garraf",
      "Codi": "080749",
      "Altitud (m)": 12,
      "Superfície (km²)": 13.5,
      "Població": 16950
    },
    {
      "Municipi": "Cubells",
      "Comarca": "Noguera",
      "Codi": 250791,
      "Altitud (m)": 499,
      "Superfície (km²)": 39.2,
      "Població": 343
    },
    {
      "Municipi": "Cunit",
      "Comarca": "Baix Penedès",
      "Codi": 430516,
      "Altitud (m)": 10,
      "Superfície (km²)": 9.7,
      "Població": 15246
    },
    {
      "Municipi": "Darnius",
      "Comarca": "Alt Empordà",
      "Codi": 170600,
      "Altitud (m)": 193,
      "Superfície (km²)": 34.9,
      "Població": 541
    },
    {
      "Municipi": "Das",
      "Comarca": "Cerdanya",
      "Codi": 170617,
      "Altitud (m)": 1219,
      "Superfície (km²)": 14.6,
      "Població": 258
    },
    {
      "Municipi": "Deltebre",
      "Comarca": "Baix Ebre",
      "Codi": 439018,
      "Altitud (m)": 6,
      "Superfície (km²)": 107.4,
      "Població": 11834
    },
    {
      "Municipi": "Dosrius",
      "Comarca": "Maresme",
      "Codi": "080752",
      "Altitud (m)": 147,
      "Superfície (km²)": 40.7,
      "Població": 5920
    },
    {
      "Municipi": "Duesaigües",
      "Comarca": "Baix Camp",
      "Codi": 430537,
      "Altitud (m)": 268,
      "Superfície (km²)": 13.6,
      "Població": 226
    },
    {
      "Municipi": "Escala, l'",
      "Comarca": "Alt Empordà",
      "Codi": 170622,
      "Altitud (m)": 14,
      "Superfície (km²)": 16.3,
      "Població": 10676
    },
    {
      "Municipi": "Esparreguera",
      "Comarca": "Baix Llobregat",
      "Codi": "080765",
      "Altitud (m)": 187,
      "Superfície (km²)": 27.4,
      "Població": 22392
    },
    {
      "Municipi": "Espinelves",
      "Comarca": "Osona",
      "Codi": 170638,
      "Altitud (m)": 752,
      "Superfície (km²)": 17.4,
      "Població": 247
    },
    {
      "Municipi": "Espluga Calba, l'",
      "Comarca": "Garrigues",
      "Codi": 250812,
      "Altitud (m)": 434,
      "Superfície (km²)": 21.5,
      "Població": 327
    },
    {
      "Municipi": "Espluga de Francolí, l'",
      "Comarca": "Conca de Barberà",
      "Codi": 430542,
      "Altitud (m)": 411,
      "Superfície (km²)": 57,
      "Població": 3758
    },
    {
      "Municipi": "Esplugues de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "080771",
      "Altitud (m)": 110,
      "Superfície (km²)": 4.6,
      "Població": 46968
    },
    {
      "Municipi": "Espolla",
      "Comarca": "Alt Empordà",
      "Codi": 170643,
      "Altitud (m)": 124,
      "Superfície (km²)": 43.6,
      "Població": 410
    },
    {
      "Municipi": "Esponellà",
      "Comarca": "Pla de l'Estany",
      "Codi": 170656,
      "Altitud (m)": 142,
      "Superfície (km²)": 16.1,
      "Població": 468
    },
    {
      "Municipi": "Espot",
      "Comarca": "Pallars Sobirà",
      "Codi": 250827,
      "Altitud (m)": 1318,
      "Superfície (km²)": 97.3,
      "Població": 385
    },
    {
      "Municipi": "Espunyola, l'",
      "Comarca": "Berguedà",
      "Codi": "080787",
      "Altitud (m)": 803,
      "Superfície (km²)": 35.5,
      "Població": 269
    },
    {
      "Municipi": "Esquirol, l'",
      "Comarca": "Osona",
      "Codi": "082541",
      "Altitud (m)": 693,
      "Superfície (km²)": 61.8,
      "Població": 2265
    },
    {
      "Municipi": "Estamariu",
      "Comarca": "Alt Urgell",
      "Codi": 250886,
      "Altitud (m)": 1084,
      "Superfície (km²)": 21.2,
      "Població": 134
    },
    {
      "Municipi": "Estany, l'",
      "Comarca": "Moianès",
      "Codi": "080790",
      "Altitud (m)": 870,
      "Superfície (km²)": 10.3,
      "Població": 403
    },
    {
      "Municipi": "Estaràs",
      "Comarca": "Segarra",
      "Codi": 250851,
      "Altitud (m)": 596,
      "Superfície (km²)": 21,
      "Població": 164
    },
    {
      "Municipi": "Esterri d'Àneu",
      "Comarca": "Pallars Sobirà",
      "Codi": 250864,
      "Altitud (m)": 957,
      "Superfície (km²)": 8.5,
      "Població": 874
    },
    {
      "Municipi": "Esterri de Cardós",
      "Comarca": "Pallars Sobirà",
      "Codi": 250870,
      "Altitud (m)": 1212,
      "Superfície (km²)": 16.6,
      "Població": 61
    },
    {
      "Municipi": "Falset",
      "Comarca": "Priorat",
      "Codi": 430555,
      "Altitud (m)": 364,
      "Superfície (km²)": 31.6,
      "Població": 2829
    },
    {
      "Municipi": "Far d'Empordà, el",
      "Comarca": "Alt Empordà",
      "Codi": 170059,
      "Altitud (m)": 44,
      "Superfície (km²)": 9,
      "Població": 611
    },
    {
      "Municipi": "Farrera",
      "Comarca": "Pallars Sobirà",
      "Codi": 250899,
      "Altitud (m)": 1294,
      "Superfície (km²)": 61.9,
      "Població": 123
    },
    {
      "Municipi": "Fatarella, la",
      "Comarca": "Terra Alta",
      "Codi": 430568,
      "Altitud (m)": 487,
      "Superfície (km²)": 56.5,
      "Població": 873
    },
    {
      "Municipi": "Febró, la",
      "Comarca": "Baix Camp",
      "Codi": 430574,
      "Altitud (m)": 754,
      "Superfície (km²)": 16.1,
      "Població": 38
    },
    {
      "Municipi": "Figaró-Montmany",
      "Comarca": "Vallès Oriental",
      "Codi": "081347",
      "Altitud (m)": 330,
      "Superfície (km²)": 15,
      "Població": 1157
    },
    {
      "Municipi": "Fígols",
      "Comarca": "Berguedà",
      "Codi": "080804",
      "Altitud (m)": 1154,
      "Superfície (km²)": 29.3,
      "Població": 46
    },
    {
      "Municipi": "Fígols i Alinyà",
      "Comarca": "Alt Urgell",
      "Codi": 259084,
      "Altitud (m)": 602,
      "Superfície (km²)": 101.8,
      "Població": 256
    },
    {
      "Municipi": "Figuera, la",
      "Comarca": "Priorat",
      "Codi": 430580,
      "Altitud (m)": 576,
      "Superfície (km²)": 18.7,
      "Població": 120
    },
    {
      "Municipi": "Figueres",
      "Comarca": "Alt Empordà",
      "Codi": 170669,
      "Altitud (m)": 39,
      "Superfície (km²)": 19.3,
      "Població": 47841
    },
    {
      "Municipi": "Figuerola del Camp",
      "Comarca": "Alt Camp",
      "Codi": 430593,
      "Altitud (m)": 474,
      "Superfície (km²)": 22.7,
      "Població": 338
    },
    {
      "Municipi": "Flaçà",
      "Comarca": "Gironès",
      "Codi": 170675,
      "Altitud (m)": 34,
      "Superfície (km²)": 6.5,
      "Població": 1148
    },
    {
      "Municipi": "Flix",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430607,
      "Altitud (m)": 47,
      "Superfície (km²)": 116.9,
      "Població": 3348
    },
    {
      "Municipi": "Floresta, la",
      "Comarca": "Garrigues",
      "Codi": 250925,
      "Altitud (m)": 316,
      "Superfície (km²)": 5.5,
      "Població": 155
    },
    {
      "Municipi": "Fogars de la Selva",
      "Comarca": "Selva",
      "Codi": "080826",
      "Altitud (m)": 45,
      "Superfície (km²)": 32.1,
      "Població": 1631
    },
    {
      "Municipi": "Fogars de Montclús",
      "Comarca": "Vallès Oriental",
      "Codi": "080811",
      "Altitud (m)": 386,
      "Superfície (km²)": 39.7,
      "Població": 481
    },
    {
      "Municipi": "Foixà",
      "Comarca": "Baix Empordà",
      "Codi": 170681,
      "Altitud (m)": 85,
      "Superfície (km²)": 18.8,
      "Població": 293
    },
    {
      "Municipi": "Folgueroles",
      "Comarca": "Osona",
      "Codi": "080832",
      "Altitud (m)": 552,
      "Superfície (km²)": 10.5,
      "Població": 2261
    },
    {
      "Municipi": "Fondarella",
      "Comarca": "Pla d'Urgell",
      "Codi": 250931,
      "Altitud (m)": 243,
      "Superfície (km²)": 5.4,
      "Població": 786
    },
    {
      "Municipi": "Fonollosa",
      "Comarca": "Bages",
      "Codi": "080847",
      "Altitud (m)": 525,
      "Superfície (km²)": 51.7,
      "Població": 1555
    },
    {
      "Municipi": "Fontanals de Cerdanya",
      "Comarca": "Cerdanya",
      "Codi": 170694,
      "Altitud (m)": 1180,
      "Superfície (km²)": 28.7,
      "Població": 532
    },
    {
      "Municipi": "Fontanilles",
      "Comarca": "Baix Empordà",
      "Codi": 170708,
      "Altitud (m)": 29,
      "Superfície (km²)": 9.3,
      "Població": 170
    },
    {
      "Municipi": "Fontcoberta",
      "Comarca": "Pla de l'Estany",
      "Codi": 170715,
      "Altitud (m)": 207,
      "Superfície (km²)": 17.3,
      "Població": 1441
    },
    {
      "Municipi": "Font-rubí",
      "Comarca": "Alt Penedès",
      "Codi": "080850",
      "Altitud (m)": 319,
      "Superfície (km²)": 37.4,
      "Població": 1441
    },
    {
      "Municipi": "Foradada",
      "Comarca": "Noguera",
      "Codi": 250946,
      "Altitud (m)": 455,
      "Superfície (km²)": 28.6,
      "Població": 185
    },
    {
      "Municipi": "Forallac",
      "Comarca": "Baix Empordà",
      "Codi": 179026,
      "Altitud (m)": 51,
      "Superfície (km²)": 50.6,
      "Població": 1753
    },
    {
      "Municipi": "Forès",
      "Comarca": "Conca de Barberà",
      "Codi": 430614,
      "Altitud (m)": 866,
      "Superfície (km²)": 16,
      "Població": 47
    },
    {
      "Municipi": "Fornells de la Selva",
      "Comarca": "Gironès",
      "Codi": 170736,
      "Altitud (m)": 102,
      "Superfície (km²)": 11.9,
      "Població": 2732
    },
    {
      "Municipi": "Fortià",
      "Comarca": "Alt Empordà",
      "Codi": 170741,
      "Altitud (m)": 8,
      "Superfície (km²)": 10.8,
      "Població": 787
    },
    {
      "Municipi": "Franqueses del Vallès, les",
      "Comarca": "Vallès Oriental",
      "Codi": "080863",
      "Altitud (m)": 181,
      "Superfície (km²)": 29.1,
      "Població": 20493
    },
    {
      "Municipi": "Freginals",
      "Comarca": "Montsià",
      "Codi": 430629,
      "Altitud (m)": 126,
      "Superfície (km²)": 17.6,
      "Població": 416
    },
    {
      "Municipi": "Fuliola, la",
      "Comarca": "Urgell",
      "Codi": 250962,
      "Altitud (m)": 275,
      "Superfície (km²)": 11.1,
      "Població": 1234
    },
    {
      "Municipi": "Fulleda",
      "Comarca": "Garrigues",
      "Codi": 250978,
      "Altitud (m)": 581,
      "Superfície (km²)": 16.2,
      "Població": 89
    },
    {
      "Municipi": "Gaià",
      "Comarca": "Bages",
      "Codi": "080902",
      "Altitud (m)": 481,
      "Superfície (km²)": 39.5,
      "Població": 177
    },
    {
      "Municipi": "Galera, la",
      "Comarca": "Montsià",
      "Codi": 430635,
      "Altitud (m)": 112,
      "Superfície (km²)": 27.5,
      "Població": 714
    },
    {
      "Municipi": "Gallifa",
      "Comarca": "Vallès Occidental",
      "Codi": "080879",
      "Altitud (m)": 502,
      "Superfície (km²)": 16.3,
      "Població": 187
    },
    {
      "Municipi": "Gandesa",
      "Comarca": "Terra Alta",
      "Codi": 430640,
      "Altitud (m)": 363,
      "Superfície (km²)": 71.2,
      "Població": 3128
    },
    {
      "Municipi": "Garcia",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430653,
      "Altitud (m)": 73,
      "Superfície (km²)": 52.4,
      "Població": 549
    },
    {
      "Municipi": "Garidells, els",
      "Comarca": "Alt Camp",
      "Codi": 430666,
      "Altitud (m)": 132,
      "Superfície (km²)": 3.1,
      "Població": 198
    },
    {
      "Municipi": "Garriga, la",
      "Comarca": "Vallès Oriental",
      "Codi": "080885",
      "Altitud (m)": 252,
      "Superfície (km²)": 18.8,
      "Població": 17028
    },
    {
      "Municipi": "Garrigàs",
      "Comarca": "Alt Empordà",
      "Codi": 170754,
      "Altitud (m)": 101,
      "Superfície (km²)": 19.9,
      "Població": 469
    },
    {
      "Municipi": "Garrigoles",
      "Comarca": "Baix Empordà",
      "Codi": 170767,
      "Altitud (m)": 92,
      "Superfície (km²)": 9.4,
      "Població": 190
    },
    {
      "Municipi": "Garriguella",
      "Comarca": "Alt Empordà",
      "Codi": 170773,
      "Altitud (m)": 56,
      "Superfície (km²)": 21,
      "Població": 970
    },
    {
      "Municipi": "Gavà",
      "Comarca": "Baix Llobregat",
      "Codi": "080898",
      "Altitud (m)": 9,
      "Superfície (km²)": 30.8,
      "Població": 47498
    },
    {
      "Municipi": "Gavet de la Conca",
      "Comarca": "Pallars Jussà",
      "Codi": 250984,
      "Altitud (m)": 421,
      "Superfície (km²)": 90.9,
      "Població": 261
    },
    {
      "Municipi": "Gelida",
      "Comarca": "Alt Penedès",
      "Codi": "080919",
      "Altitud (m)": 196,
      "Superfície (km²)": 26.7,
      "Població": 7944
    },
    {
      "Municipi": "Ger",
      "Comarca": "Cerdanya",
      "Codi": 170789,
      "Altitud (m)": 1135,
      "Superfície (km²)": 33.4,
      "Població": 510
    },
    {
      "Municipi": "Gimenells i el Pla de la Font",
      "Comarca": "Segrià",
      "Codi": 259123,
      "Altitud (m)": 258,
      "Superfície (km²)": 55.8,
      "Població": 1113
    },
    {
      "Municipi": "Ginestar",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430672,
      "Altitud (m)": 26,
      "Superfície (km²)": 15.8,
      "Població": 780
    },
    {
      "Municipi": "Girona",
      "Comarca": "Gironès",
      "Codi": 170792,
      "Altitud (m)": 70,
      "Superfície (km²)": 39.1,
      "Població": 104038
    },
    {
      "Municipi": "Gironella",
      "Comarca": "Berguedà",
      "Codi": "080924",
      "Altitud (m)": 469,
      "Superfície (km²)": 6.8,
      "Població": 4982
    },
    {
      "Municipi": "Gisclareny",
      "Comarca": "Berguedà",
      "Codi": "080930",
      "Altitud (m)": 1340,
      "Superfície (km²)": 36.5,
      "Població": 27
    },
    {
      "Municipi": "Godall",
      "Comarca": "Montsià",
      "Codi": 430688,
      "Altitud (m)": 168,
      "Superfície (km²)": 33.6,
      "Població": 618
    },
    {
      "Municipi": "Golmés",
      "Comarca": "Pla d'Urgell",
      "Codi": 250997,
      "Altitud (m)": 275,
      "Superfície (km²)": 16.6,
      "Població": 1907
    },
    {
      "Municipi": "Gombrèn",
      "Comarca": "Ripollès",
      "Codi": 170806,
      "Altitud (m)": 919,
      "Superfície (km²)": 43.3,
      "Població": 202
    },
    {
      "Municipi": "Gósol",
      "Comarca": "Berguedà",
      "Codi": 251001,
      "Altitud (m)": 1423,
      "Superfície (km²)": 56.3,
      "Població": 228
    },
    {
      "Municipi": "Granada, la",
      "Comarca": "Alt Penedès",
      "Codi": "080945",
      "Altitud (m)": 272,
      "Superfície (km²)": 6.5,
      "Població": 2218
    },
    {
      "Municipi": "Granadella, la",
      "Comarca": "Garrigues",
      "Codi": 251018,
      "Altitud (m)": 528,
      "Superfície (km²)": 88.7,
      "Població": 756
    },
    {
      "Municipi": "Granera",
      "Comarca": "Moianès",
      "Codi": "080958",
      "Altitud (m)": 782,
      "Superfície (km²)": 23.7,
      "Població": 93
    },
    {
      "Municipi": "Granja d'Escarp, la",
      "Comarca": "Segrià",
      "Codi": 251023,
      "Altitud (m)": 78,
      "Superfície (km²)": 38.5,
      "Població": 935
    },
    {
      "Municipi": "Granollers",
      "Comarca": "Vallès Oriental",
      "Codi": "080961",
      "Altitud (m)": 145,
      "Superfície (km²)": 14.9,
      "Població": 62950
    },
    {
      "Municipi": "Granyanella",
      "Comarca": "Segarra",
      "Codi": 251039,
      "Altitud (m)": 508,
      "Superfície (km²)": 24.4,
      "Població": 149
    },
    {
      "Municipi": "Granyena de les Garrigues",
      "Comarca": "Garrigues",
      "Codi": 251057,
      "Altitud (m)": 366,
      "Superfície (km²)": 20.5,
      "Població": 156
    },
    {
      "Municipi": "Granyena de Segarra",
      "Comarca": "Segarra",
      "Codi": 251044,
      "Altitud (m)": 636,
      "Superfície (km²)": 16.3,
      "Població": 154
    },
    {
      "Municipi": "Gratallops",
      "Comarca": "Priorat",
      "Codi": 430691,
      "Altitud (m)": 321,
      "Superfície (km²)": 13.5,
      "Població": 236
    },
    {
      "Municipi": "Gualba",
      "Comarca": "Vallès Oriental",
      "Codi": "080977",
      "Altitud (m)": 177,
      "Superfície (km²)": 23.3,
      "Població": 1662
    },
    {
      "Municipi": "Gualta",
      "Comarca": "Baix Empordà",
      "Codi": 170813,
      "Altitud (m)": 15,
      "Superfície (km²)": 9,
      "Població": 439
    },
    {
      "Municipi": "Guardiola de Berguedà",
      "Comarca": "Berguedà",
      "Codi": "080996",
      "Altitud (m)": 720,
      "Superfície (km²)": 61.7,
      "Població": 935
    },
    {
      "Municipi": "Guiamets, els",
      "Comarca": "Priorat",
      "Codi": 430705,
      "Altitud (m)": 226,
      "Superfície (km²)": 12.1,
      "Població": 265
    },
    {
      "Municipi": "Guils de Cerdanya",
      "Comarca": "Cerdanya",
      "Codi": 170828,
      "Altitud (m)": 1385,
      "Superfície (km²)": 22,
      "Població": 601
    },
    {
      "Municipi": "Guimerà",
      "Comarca": "Urgell",
      "Codi": 251095,
      "Altitud (m)": 555,
      "Superfície (km²)": 25.8,
      "Població": 255
    },
    {
      "Municipi": "Guingueta d'Àneu, la",
      "Comarca": "Pallars Sobirà",
      "Codi": 259031,
      "Altitud (m)": 919,
      "Superfície (km²)": 108.4,
      "Població": 282
    },
    {
      "Municipi": "Guissona",
      "Comarca": "Segarra",
      "Codi": 251109,
      "Altitud (m)": 484,
      "Superfície (km²)": 18.1,
      "Població": 7525
    },
    {
      "Municipi": "Guixers",
      "Comarca": "Solsonès",
      "Codi": 251116,
      "Altitud (m)": 840,
      "Superfície (km²)": 66.4,
      "Població": 131
    },
    {
      "Municipi": "Gurb",
      "Comarca": "Osona",
      "Codi": "081000",
      "Altitud (m)": 516,
      "Superfície (km²)": 51.6,
      "Població": 2697
    },
    {
      "Municipi": "Horta de Sant Joan",
      "Comarca": "Terra Alta",
      "Codi": 430712,
      "Altitud (m)": 542,
      "Superfície (km²)": 119,
      "Població": 1172
    },
    {
      "Municipi": "Hospitalet de Llobregat, l'",
      "Comarca": "Barcelonès",
      "Codi": "081017",
      "Altitud (m)": 8,
      "Superfície (km²)": 12.4,
      "Població": 276617
    },
    {
      "Municipi": "Hostalets de Pierola, els",
      "Comarca": "Anoia",
      "Codi": "081629",
      "Altitud (m)": 361,
      "Superfície (km²)": 33.5,
      "Població": 3189
    },
    {
      "Municipi": "Hostalric",
      "Comarca": "Selva",
      "Codi": 170834,
      "Altitud (m)": 189,
      "Superfície (km²)": 3.4,
      "Població": 4396
    },
    {
      "Municipi": "Igualada",
      "Comarca": "Anoia",
      "Codi": "081022",
      "Altitud (m)": 313,
      "Superfície (km²)": 8.1,
      "Població": 41287
    },
    {
      "Municipi": "Isona i Conca Dellà",
      "Comarca": "Pallars Jussà",
      "Codi": 251155,
      "Altitud (m)": 659,
      "Superfície (km²)": 139.4,
      "Població": 1056
    },
    {
      "Municipi": "Isòvol",
      "Comarca": "Cerdanya",
      "Codi": 170849,
      "Altitud (m)": 1088,
      "Superfície (km²)": 10.8,
      "Població": 338
    },
    {
      "Municipi": "Ivars d'Urgell",
      "Comarca": "Pla d'Urgell",
      "Codi": 251137,
      "Altitud (m)": 265,
      "Superfície (km²)": 24.3,
      "Població": 1605
    },
    {
      "Municipi": "Ivars de Noguera",
      "Comarca": "Noguera",
      "Codi": 251121,
      "Altitud (m)": 314,
      "Superfície (km²)": 27.1,
      "Població": 333
    },
    {
      "Municipi": "Ivorra",
      "Comarca": "Segarra",
      "Codi": 251142,
      "Altitud (m)": 567,
      "Superfície (km²)": 15.4,
      "Població": 100
    },
    {
      "Municipi": "Jafre",
      "Comarca": "Baix Empordà",
      "Codi": 170852,
      "Altitud (m)": 44,
      "Superfície (km²)": 6.6,
      "Població": 388
    },
    {
      "Municipi": "Jonquera, la",
      "Comarca": "Alt Empordà",
      "Codi": 170865,
      "Altitud (m)": 110,
      "Superfície (km²)": 56.9,
      "Població": 3351
    },
    {
      "Municipi": "Jorba",
      "Comarca": "Anoia",
      "Codi": "081038",
      "Altitud (m)": 380,
      "Superfície (km²)": 30.9,
      "Població": 829
    },
    {
      "Municipi": "Josa i Tuixén",
      "Comarca": "Alt Urgell",
      "Codi": 259101,
      "Altitud (m)": 1206,
      "Superfície (km²)": 68.2,
      "Població": 126
    },
    {
      "Municipi": "Juià",
      "Comarca": "Gironès",
      "Codi": 170871,
      "Altitud (m)": 94,
      "Superfície (km²)": 8.4,
      "Població": 337
    },
    {
      "Municipi": "Juncosa",
      "Comarca": "Garrigues",
      "Codi": 251180,
      "Altitud (m)": 575,
      "Superfície (km²)": 76.5,
      "Població": 381
    },
    {
      "Municipi": "Juneda",
      "Comarca": "Garrigues",
      "Codi": 251193,
      "Altitud (m)": 264,
      "Superfície (km²)": 47.3,
      "Població": 3520
    },
    {
      "Municipi": "Les",
      "Comarca": "Val d'Aran",
      "Codi": 251214,
      "Altitud (m)": 634,
      "Superfície (km²)": 23.5,
      "Població": 1008
    },
    {
      "Municipi": "Linyola",
      "Comarca": "Pla d'Urgell",
      "Codi": 251229,
      "Altitud (m)": 248,
      "Superfície (km²)": 28.7,
      "Població": 2737
    },
    {
      "Municipi": "Llacuna, la",
      "Comarca": "Anoia",
      "Codi": "081043",
      "Altitud (m)": 615,
      "Superfície (km²)": 52.2,
      "Població": 946
    },
    {
      "Municipi": "Lladó",
      "Comarca": "Alt Empordà",
      "Codi": 170887,
      "Altitud (m)": 197,
      "Superfície (km²)": 13.5,
      "Població": 848
    },
    {
      "Municipi": "Lladorre",
      "Comarca": "Pallars Sobirà",
      "Codi": 251235,
      "Altitud (m)": 1052,
      "Superfície (km²)": 147,
      "Població": 255
    },
    {
      "Municipi": "Lladurs",
      "Comarca": "Solsonès",
      "Codi": 251240,
      "Altitud (m)": 834,
      "Superfície (km²)": 128,
      "Població": 185
    },
    {
      "Municipi": "Llagosta, la",
      "Comarca": "Vallès Oriental",
      "Codi": "081056",
      "Altitud (m)": 45,
      "Superfície (km²)": 3,
      "Població": 13114
    },
    {
      "Municipi": "Llagostera",
      "Comarca": "Gironès",
      "Codi": 170890,
      "Altitud (m)": 160,
      "Superfície (km²)": 76.4,
      "Població": 9197
    },
    {
      "Municipi": "Llambilles",
      "Comarca": "Gironès",
      "Codi": 170904,
      "Altitud (m)": 143,
      "Superfície (km²)": 14.6,
      "Població": 714
    },
    {
      "Municipi": "Llanars",
      "Comarca": "Ripollès",
      "Codi": 170911,
      "Altitud (m)": 983,
      "Superfície (km²)": 24.7,
      "Població": 535
    },
    {
      "Municipi": "Llançà",
      "Comarca": "Alt Empordà",
      "Codi": 170926,
      "Altitud (m)": 4,
      "Superfície (km²)": 28,
      "Població": 4960
    },
    {
      "Municipi": "Llardecans",
      "Comarca": "Segrià",
      "Codi": 251253,
      "Altitud (m)": 397,
      "Superfície (km²)": 66,
      "Població": 418
    },
    {
      "Municipi": "Llavorsí",
      "Comarca": "Pallars Sobirà",
      "Codi": 251266,
      "Altitud (m)": 811,
      "Superfície (km²)": 68.5,
      "Població": 342
    },
    {
      "Municipi": "Lleida",
      "Comarca": "Segrià",
      "Codi": 251207,
      "Altitud (m)": 155,
      "Superfície (km²)": 212.3,
      "Població": 142990
    },
    {
      "Municipi": "Llers",
      "Comarca": "Alt Empordà",
      "Codi": 170932,
      "Altitud (m)": 142,
      "Superfície (km²)": 21.3,
      "Població": 1225
    },
    {
      "Municipi": "Lles de Cerdanya",
      "Comarca": "Cerdanya",
      "Codi": 251272,
      "Altitud (m)": 1471,
      "Superfície (km²)": 102.8,
      "Població": 295
    },
    {
      "Municipi": "Lliçà d'Amunt",
      "Comarca": "Vallès Oriental",
      "Codi": "081075",
      "Altitud (m)": 145,
      "Superfície (km²)": 22.3,
      "Població": 16083
    },
    {
      "Municipi": "Lliçà de Vall",
      "Comarca": "Vallès Oriental",
      "Codi": "081081",
      "Altitud (m)": 125,
      "Superfície (km²)": 10.8,
      "Població": 6727
    },
    {
      "Municipi": "Llimiana",
      "Comarca": "Pallars Jussà",
      "Codi": 251288,
      "Altitud (m)": 790,
      "Superfície (km²)": 41.7,
      "Població": 133
    },
    {
      "Municipi": "Llinars del Vallès",
      "Comarca": "Vallès Oriental",
      "Codi": "081069",
      "Altitud (m)": 198,
      "Superfície (km²)": 27.6,
      "Població": 10476
    },
    {
      "Municipi": "Llívia",
      "Comarca": "Cerdanya",
      "Codi": 170947,
      "Altitud (m)": 1224,
      "Superfície (km²)": 12.9,
      "Població": 1511
    },
    {
      "Municipi": "Lloar, el",
      "Comarca": "Priorat",
      "Codi": 430727,
      "Altitud (m)": 219,
      "Superfície (km²)": 6.6,
      "Població": 107
    },
    {
      "Municipi": "Llobera",
      "Comarca": "Solsonès",
      "Codi": 251291,
      "Altitud (m)": 855,
      "Superfície (km²)": 39.2,
      "Població": 212
    },
    {
      "Municipi": "Llorac",
      "Comarca": "Conca de Barberà",
      "Codi": 430733,
      "Altitud (m)": 648,
      "Superfície (km²)": 23.3,
      "Població": 97
    },
    {
      "Municipi": "Llorenç del Penedès",
      "Comarca": "Baix Penedès",
      "Codi": 430748,
      "Altitud (m)": 162,
      "Superfície (km²)": 4.6,
      "Població": 2386
    },
    {
      "Municipi": "Lloret de Mar",
      "Comarca": "Selva",
      "Codi": 170950,
      "Altitud (m)": 5,
      "Superfície (km²)": 48.7,
      "Població": 41159
    },
    {
      "Municipi": "Llosses, les",
      "Comarca": "Ripollès",
      "Codi": 170963,
      "Altitud (m)": 895,
      "Superfície (km²)": 114,
      "Població": 202
    },
    {
      "Municipi": "Lluçà",
      "Comarca": "Osona",
      "Codi": "081094",
      "Altitud (m)": 745,
      "Superfície (km²)": 53,
      "Població": 291
    },
    {
      "Municipi": "Maçanet de Cabrenys",
      "Comarca": "Alt Empordà",
      "Codi": 171024,
      "Altitud (m)": 370,
      "Superfície (km²)": 67.9,
      "Població": 755
    },
    {
      "Municipi": "Maçanet de la Selva",
      "Comarca": "Selva",
      "Codi": 171030,
      "Altitud (m)": 100,
      "Superfície (km²)": 45.6,
      "Població": 7822
    },
    {
      "Municipi": "Madremanya",
      "Comarca": "Gironès",
      "Codi": 170979,
      "Altitud (m)": 177,
      "Superfície (km²)": 13.7,
      "Població": 295
    },
    {
      "Municipi": "Maià de Montcal",
      "Comarca": "Garrotxa",
      "Codi": 170985,
      "Altitud (m)": 241,
      "Superfície (km²)": 17.3,
      "Població": 464
    },
    {
      "Municipi": "Maials",
      "Comarca": "Segrià",
      "Codi": 251333,
      "Altitud (m)": 395,
      "Superfície (km²)": 57.1,
      "Població": 905
    },
    {
      "Municipi": "Maldà",
      "Comarca": "Urgell",
      "Codi": 251305,
      "Altitud (m)": 428,
      "Superfície (km²)": 31.4,
      "Població": 242
    },
    {
      "Municipi": "Malgrat de Mar",
      "Comarca": "Maresme",
      "Codi": "081108",
      "Altitud (m)": 4,
      "Superfície (km²)": 8.8,
      "Població": 19150
    },
    {
      "Municipi": "Malla",
      "Comarca": "Osona",
      "Codi": "081115",
      "Altitud (m)": 580,
      "Superfície (km²)": 11,
      "Població": 266
    },
    {
      "Municipi": "Manlleu",
      "Comarca": "Osona",
      "Codi": "081120",
      "Altitud (m)": 461,
      "Superfície (km²)": 17.2,
      "Població": 21182
    },
    {
      "Municipi": "Manresa",
      "Comarca": "Bages",
      "Codi": "081136",
      "Altitud (m)": 238,
      "Superfície (km²)": 41.7,
      "Població": 78570
    },
    {
      "Municipi": "Marçà",
      "Comarca": "Priorat",
      "Codi": 430764,
      "Altitud (m)": 315,
      "Superfície (km²)": 16.1,
      "Població": 594
    },
    {
      "Municipi": "Margalef",
      "Comarca": "Priorat",
      "Codi": 430751,
      "Altitud (m)": 379,
      "Superfície (km²)": 34.7,
      "Població": 108
    },
    {
      "Municipi": "Marganell",
      "Comarca": "Bages",
      "Codi": "082423",
      "Altitud (m)": 291,
      "Superfície (km²)": 13.5,
      "Població": 297
    },
    {
      "Municipi": "Martorell",
      "Comarca": "Baix Llobregat",
      "Codi": "081141",
      "Altitud (m)": 56,
      "Superfície (km²)": 12.8,
      "Població": 28643
    },
    {
      "Municipi": "Martorelles",
      "Comarca": "Vallès Oriental",
      "Codi": "081154",
      "Altitud (m)": 96,
      "Superfície (km²)": 3.6,
      "Població": 4895
    },
    {
      "Municipi": "Mas de Barberans",
      "Comarca": "Montsià",
      "Codi": 430770,
      "Altitud (m)": 348,
      "Superfície (km²)": 78.8,
      "Població": 545
    },
    {
      "Municipi": "Masarac",
      "Comarca": "Alt Empordà",
      "Codi": 171002,
      "Altitud (m)": 85,
      "Superfície (km²)": 12.6,
      "Població": 301
    },
    {
      "Municipi": "Masdenverge",
      "Comarca": "Montsià",
      "Codi": 430786,
      "Altitud (m)": 54,
      "Superfície (km²)": 14.6,
      "Població": 1133
    },
    {
      "Municipi": "Masies de Roda, les",
      "Comarca": "Osona",
      "Codi": "081167",
      "Altitud (m)": 468,
      "Superfície (km²)": 16.4,
      "Població": 745
    },
    {
      "Municipi": "Masies de Voltregà, les",
      "Comarca": "Osona",
      "Codi": "081173",
      "Altitud (m)": 533,
      "Superfície (km²)": 22.4,
      "Població": 3224
    },
    {
      "Municipi": "Masllorenç",
      "Comarca": "Baix Penedès",
      "Codi": 430799,
      "Altitud (m)": 304,
      "Superfície (km²)": 6.6,
      "Població": 574
    },
    {
      "Municipi": "Masnou, el",
      "Comarca": "Maresme",
      "Codi": "081189",
      "Altitud (m)": 27,
      "Superfície (km²)": 3.4,
      "Població": 24176
    },
    {
      "Municipi": "Masó, la",
      "Comarca": "Alt Camp",
      "Codi": 430803,
      "Altitud (m)": 115,
      "Superfície (km²)": 3.6,
      "Població": 297
    },
    {
      "Municipi": "Maspujols",
      "Comarca": "Baix Camp",
      "Codi": 430810,
      "Altitud (m)": 214,
      "Superfície (km²)": 3.7,
      "Població": 857
    },
    {
      "Municipi": "Masquefa",
      "Comarca": "Anoia",
      "Codi": "081192",
      "Altitud (m)": 257,
      "Superfície (km²)": 17.1,
      "Població": 9819
    },
    {
      "Municipi": "Masroig, el",
      "Comarca": "Priorat",
      "Codi": 430825,
      "Altitud (m)": 192,
      "Superfície (km²)": 15.5,
      "Població": 467
    },
    {
      "Municipi": "Massalcoreig",
      "Comarca": "Segrià",
      "Codi": 251312,
      "Altitud (m)": 94,
      "Superfície (km²)": 14.1,
      "Població": 566
    },
    {
      "Municipi": "Massanes",
      "Comarca": "Selva",
      "Codi": 171019,
      "Altitud (m)": 164,
      "Superfície (km²)": 26.1,
      "Població": 830
    },
    {
      "Municipi": "Massoteres",
      "Comarca": "Segarra",
      "Codi": 251327,
      "Altitud (m)": 502,
      "Superfície (km²)": 26.1,
      "Població": 218
    },
    {
      "Municipi": "Matadepera",
      "Comarca": "Vallès Occidental",
      "Codi": "081206",
      "Altitud (m)": 423,
      "Superfície (km²)": 25.4,
      "Població": 9891
    },
    {
      "Municipi": "Mataró",
      "Comarca": "Maresme",
      "Codi": "081213",
      "Altitud (m)": 28,
      "Superfície (km²)": 22.5,
      "Població": 129613
    },
    {
      "Municipi": "Mediona",
      "Comarca": "Alt Penedès",
      "Codi": "081228",
      "Altitud (m)": 430,
      "Superfície (km²)": 47.6,
      "Població": 2629
    },
    {
      "Municipi": "Menàrguens",
      "Comarca": "Noguera",
      "Codi": 251348,
      "Altitud (m)": 205,
      "Superfície (km²)": 20.3,
      "Població": 774
    },
    {
      "Municipi": "Meranges",
      "Comarca": "Cerdanya",
      "Codi": 170998,
      "Altitud (m)": 1539,
      "Superfície (km²)": 37.3,
      "Població": 116
    },
    {
      "Municipi": "Mieres",
      "Comarca": "Garrotxa",
      "Codi": 171058,
      "Altitud (m)": 286,
      "Superfície (km²)": 26.3,
      "Població": 351
    },
    {
      "Municipi": "Milà, el",
      "Comarca": "Alt Camp",
      "Codi": 430831,
      "Altitud (m)": 166,
      "Superfície (km²)": 4.1,
      "Població": 180
    },
    {
      "Municipi": "Miralcamp",
      "Comarca": "Pla d'Urgell",
      "Codi": 251351,
      "Altitud (m)": 287,
      "Superfície (km²)": 14.9,
      "Població": 1371
    },
    {
      "Municipi": "Miravet",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430846,
      "Altitud (m)": 43,
      "Superfície (km²)": 32.3,
      "Població": 691
    },
    {
      "Municipi": "Moià",
      "Comarca": "Moianès",
      "Codi": "081385",
      "Altitud (m)": 717,
      "Superfície (km²)": 75.3,
      "Població": 6670
    },
    {
      "Municipi": "Molar, el",
      "Comarca": "Priorat",
      "Codi": 430859,
      "Altitud (m)": 228,
      "Superfície (km²)": 22.8,
      "Població": 308
    },
    {
      "Municipi": "Molins de Rei",
      "Comarca": "Baix Llobregat",
      "Codi": "081234",
      "Altitud (m)": 37,
      "Superfície (km²)": 15.9,
      "Població": 26568
    },
    {
      "Municipi": "Mollerussa",
      "Comarca": "Pla d'Urgell",
      "Codi": 251370,
      "Altitud (m)": 250,
      "Superfície (km²)": 7.1,
      "Població": 15301
    },
    {
      "Municipi": "Mollet de Peralada",
      "Comarca": "Alt Empordà",
      "Codi": 171061,
      "Altitud (m)": 59,
      "Superfície (km²)": 6,
      "Població": 215
    },
    {
      "Municipi": "Mollet del Vallès",
      "Comarca": "Vallès Oriental",
      "Codi": "081249",
      "Altitud (m)": 65,
      "Superfície (km²)": 10.8,
      "Població": 51692
    },
    {
      "Municipi": "Molló",
      "Comarca": "Ripollès",
      "Codi": 171077,
      "Altitud (m)": 1182,
      "Superfície (km²)": 43.1,
      "Població": 376
    },
    {
      "Municipi": "Molsosa, la",
      "Comarca": "Solsonès",
      "Codi": 251364,
      "Altitud (m)": 667,
      "Superfície (km²)": 26.9,
      "Població": 104
    },
    {
      "Municipi": "Monistrol de Calders",
      "Comarca": "Moianès",
      "Codi": "081287",
      "Altitud (m)": 447,
      "Superfície (km²)": 22,
      "Població": 752
    },
    {
      "Municipi": "Monistrol de Montserrat",
      "Comarca": "Bages",
      "Codi": "081271",
      "Altitud (m)": 161,
      "Superfície (km²)": 11.8,
      "Població": 3176
    },
    {
      "Municipi": "Montagut i Oix",
      "Comarca": "Garrotxa",
      "Codi": 171096,
      "Altitud (m)": 276,
      "Superfície (km²)": 93.7,
      "Població": 981
    },
    {
      "Municipi": "Montblanc",
      "Comarca": "Conca de Barberà",
      "Codi": 430862,
      "Altitud (m)": 350,
      "Superfície (km²)": 91.1,
      "Població": 7464
    },
    {
      "Municipi": "Montbrió del Camp",
      "Comarca": "Baix Camp",
      "Codi": 430884,
      "Altitud (m)": 132,
      "Superfície (km²)": 10.7,
      "Població": 3096
    },
    {
      "Municipi": "Montcada i Reixac",
      "Comarca": "Vallès Occidental",
      "Codi": "081252",
      "Altitud (m)": 36,
      "Superfície (km²)": 23.5,
      "Població": 36823
    },
    {
      "Municipi": "Montclar",
      "Comarca": "Berguedà",
      "Codi": "081304",
      "Altitud (m)": 728,
      "Superfície (km²)": 21.9,
      "Població": 129
    },
    {
      "Municipi": "Montellà i Martinet",
      "Comarca": "Cerdanya",
      "Codi": 251399,
      "Altitud (m)": 967,
      "Superfície (km²)": 55,
      "Població": 639
    },
    {
      "Municipi": "Montesquiu",
      "Comarca": "Osona",
      "Codi": "081311",
      "Altitud (m)": 577,
      "Superfície (km²)": 4.9,
      "Població": 1106
    },
    {
      "Municipi": "Montferrer i Castellbò",
      "Comarca": "Alt Urgell",
      "Codi": 251403,
      "Altitud (m)": 732,
      "Superfície (km²)": 176.7,
      "Població": 1093
    },
    {
      "Municipi": "Montferri",
      "Comarca": "Alt Camp",
      "Codi": 430897,
      "Altitud (m)": 229,
      "Superfície (km²)": 19.2,
      "Població": 437
    },
    {
      "Municipi": "Montgai",
      "Comarca": "Noguera",
      "Codi": 251386,
      "Altitud (m)": 286,
      "Superfície (km²)": 28.9,
      "Població": 637
    },
    {
      "Municipi": "Montgat",
      "Comarca": "Maresme",
      "Codi": "081265",
      "Altitud (m)": 20,
      "Superfície (km²)": 2.9,
      "Població": 12458
    },
    {
      "Municipi": "Montmajor",
      "Comarca": "Berguedà",
      "Codi": "081326",
      "Altitud (m)": 756,
      "Superfície (km²)": 76.5,
      "Població": 483
    },
    {
      "Municipi": "Montmaneu",
      "Comarca": "Anoia",
      "Codi": "081332",
      "Altitud (m)": 709,
      "Superfície (km²)": 13.6,
      "Població": 197
    },
    {
      "Municipi": "Montmell, el",
      "Comarca": "Baix Penedès",
      "Codi": 430901,
      "Altitud (m)": 429,
      "Superfície (km²)": 72.8,
      "Població": 1891
    },
    {
      "Municipi": "Montmeló",
      "Comarca": "Vallès Oriental",
      "Codi": "081350",
      "Altitud (m)": 72,
      "Superfície (km²)": 4,
      "Població": 8822
    },
    {
      "Municipi": "Montoliu de Lleida",
      "Comarca": "Segrià",
      "Codi": 251425,
      "Altitud (m)": 166,
      "Superfície (km²)": 7.3,
      "Població": 485
    },
    {
      "Municipi": "Montoliu de Segarra",
      "Comarca": "Segarra",
      "Codi": 251410,
      "Altitud (m)": 689,
      "Superfície (km²)": 29.5,
      "Població": 184
    },
    {
      "Municipi": "Montornès de Segarra",
      "Comarca": "Segarra",
      "Codi": 251431,
      "Altitud (m)": 605,
      "Superfície (km²)": 12.3,
      "Població": 91
    },
    {
      "Municipi": "Montornès del Vallès",
      "Comarca": "Vallès Oriental",
      "Codi": "081363",
      "Altitud (m)": 116,
      "Superfície (km²)": 10.2,
      "Població": 16752
    },
    {
      "Municipi": "Mont-ral",
      "Comarca": "Alt Camp",
      "Codi": 430918,
      "Altitud (m)": 888,
      "Superfície (km²)": 34.7,
      "Població": 184
    },
    {
      "Municipi": "Mont-ras",
      "Comarca": "Baix Empordà",
      "Codi": 171100,
      "Altitud (m)": 88,
      "Superfície (km²)": 12.3,
      "Població": 1670
    },
    {
      "Municipi": "Mont-roig del Camp",
      "Comarca": "Baix Camp",
      "Codi": 430923,
      "Altitud (m)": 120,
      "Superfície (km²)": 63.3,
      "Població": 13682
    },
    {
      "Municipi": "Montseny",
      "Comarca": "Vallès Oriental",
      "Codi": "081379",
      "Altitud (m)": 528,
      "Superfície (km²)": 26.8,
      "Població": 379
    },
    {
      "Municipi": "Móra d'Ebre",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430939,
      "Altitud (m)": 38,
      "Superfície (km²)": 45.1,
      "Població": 5656
    },
    {
      "Municipi": "Móra la Nova",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430944,
      "Altitud (m)": 31,
      "Superfície (km²)": 15.9,
      "Població": 3253
    },
    {
      "Municipi": "Morell, el",
      "Comarca": "Tarragonès",
      "Codi": 430957,
      "Altitud (m)": 104,
      "Superfície (km²)": 5.9,
      "Població": 3881
    },
    {
      "Municipi": "Morera de Montsant, la",
      "Comarca": "Priorat",
      "Codi": 430960,
      "Altitud (m)": 743,
      "Superfície (km²)": 52.9,
      "Població": 159
    },
    {
      "Municipi": "Muntanyola",
      "Comarca": "Osona",
      "Codi": "081290",
      "Altitud (m)": 807,
      "Superfície (km²)": 40.3,
      "Població": 721
    },
    {
      "Municipi": "Mura",
      "Comarca": "Bages",
      "Codi": "081398",
      "Altitud (m)": 454,
      "Superfície (km²)": 47.8,
      "Població": 227
    },
    {
      "Municipi": "Nalec",
      "Comarca": "Urgell",
      "Codi": 251459,
      "Altitud (m)": 487,
      "Superfície (km²)": 9.3,
      "Població": 93
    },
    {
      "Municipi": "Naut Aran",
      "Comarca": "Val d'Aran",
      "Codi": 250254,
      "Altitud (m)": 1267,
      "Superfície (km²)": 255.8,
      "Població": 1920
    },
    {
      "Municipi": "Navarcles",
      "Comarca": "Bages",
      "Codi": "081402",
      "Altitud (m)": 269,
      "Superfície (km²)": 5.5,
      "Població": 6112
    },
    {
      "Municipi": "Navàs",
      "Comarca": "Bages",
      "Codi": "081419",
      "Altitud (m)": 370,
      "Superfície (km²)": 80.6,
      "Població": 6161
    },
    {
      "Municipi": "Navata",
      "Comarca": "Alt Empordà",
      "Codi": 171117,
      "Altitud (m)": 145,
      "Superfície (km²)": 18.5,
      "Població": 1460
    },
    {
      "Municipi": "Navès",
      "Comarca": "Solsonès",
      "Codi": 251462,
      "Altitud (m)": 610,
      "Superfície (km²)": 145.3,
      "Població": 318
    },
    {
      "Municipi": "Nou de Berguedà, la",
      "Comarca": "Berguedà",
      "Codi": "081424",
      "Altitud (m)": 876,
      "Superfície (km²)": 25,
      "Població": 170
    },
    {
      "Municipi": "Nou de Gaià, la",
      "Comarca": "Tarragonès",
      "Codi": 430976,
      "Altitud (m)": 93,
      "Superfície (km²)": 4.3,
      "Població": 629
    },
    {
      "Municipi": "Nulles",
      "Comarca": "Alt Camp",
      "Codi": 430982,
      "Altitud (m)": 231,
      "Superfície (km²)": 10.6,
      "Població": 546
    },
    {
      "Municipi": "Odèn",
      "Comarca": "Solsonès",
      "Codi": 251484,
      "Altitud (m)": 1130,
      "Superfície (km²)": 114.4,
      "Població": 247
    },
    {
      "Municipi": "Òdena",
      "Comarca": "Anoia",
      "Codi": "081430",
      "Altitud (m)": 421,
      "Superfície (km²)": 52.7,
      "Població": 3697
    },
    {
      "Municipi": "Ogassa",
      "Comarca": "Ripollès",
      "Codi": 171122,
      "Altitud (m)": 951,
      "Superfície (km²)": 45.2,
      "Població": 228
    },
    {
      "Municipi": "Olèrdola",
      "Comarca": "Alt Penedès",
      "Codi": "081458",
      "Altitud (m)": 189,
      "Superfície (km²)": 30.2,
      "Població": 3951
    },
    {
      "Municipi": "Olesa de Bonesvalls",
      "Comarca": "Alt Penedès",
      "Codi": "081461",
      "Altitud (m)": 265,
      "Superfície (km²)": 30.8,
      "Població": 2108
    },
    {
      "Municipi": "Olesa de Montserrat",
      "Comarca": "Baix Llobregat",
      "Codi": "081477",
      "Altitud (m)": 124,
      "Superfície (km²)": 16.6,
      "Població": 24458
    },
    {
      "Municipi": "Oliana",
      "Comarca": "Alt Urgell",
      "Codi": 251497,
      "Altitud (m)": 469,
      "Superfície (km²)": 32.4,
      "Població": 1860
    },
    {
      "Municipi": "Oliola",
      "Comarca": "Noguera",
      "Codi": 251500,
      "Altitud (m)": 452,
      "Superfície (km²)": 86.3,
      "Població": 198
    },
    {
      "Municipi": "Olius",
      "Comarca": "Solsonès",
      "Codi": 251517,
      "Altitud (m)": 742,
      "Superfície (km²)": 54.8,
      "Població": 994
    },
    {
      "Municipi": "Olivella",
      "Comarca": "Garraf",
      "Codi": "081483",
      "Altitud (m)": 211,
      "Superfície (km²)": 38.8,
      "Població": 4417
    },
    {
      "Municipi": "Olost",
      "Comarca": "Osona",
      "Codi": "081496",
      "Altitud (m)": 572,
      "Superfície (km²)": 29.4,
      "Població": 1218
    },
    {
      "Municipi": "Olot",
      "Comarca": "Garrotxa",
      "Codi": 171143,
      "Altitud (m)": 443,
      "Superfície (km²)": 29,
      "Població": 38003
    },
    {
      "Municipi": "Oluges, les",
      "Comarca": "Segarra",
      "Codi": 251522,
      "Altitud (m)": 528,
      "Superfície (km²)": 19,
      "Població": 166
    },
    {
      "Municipi": "Olvan",
      "Comarca": "Berguedà",
      "Codi": "081445",
      "Altitud (m)": 553,
      "Superfície (km²)": 35.6,
      "Població": 894
    },
    {
      "Municipi": "Omellons, els",
      "Comarca": "Garrigues",
      "Codi": 251538,
      "Altitud (m)": 385,
      "Superfície (km²)": 11.1,
      "Població": 197
    },
    {
      "Municipi": "Omells de na Gaia, els",
      "Comarca": "Urgell",
      "Codi": 251543,
      "Altitud (m)": 560,
      "Superfície (km²)": 13.5,
      "Població": 120
    },
    {
      "Municipi": "Ordis",
      "Comarca": "Alt Empordà",
      "Codi": 171156,
      "Altitud (m)": 98,
      "Superfície (km²)": 8.6,
      "Població": 393
    },
    {
      "Municipi": "Organyà",
      "Comarca": "Alt Urgell",
      "Codi": 251556,
      "Altitud (m)": 558,
      "Superfície (km²)": 12.5,
      "Població": 799
    },
    {
      "Municipi": "Orís",
      "Comarca": "Osona",
      "Codi": "081509",
      "Altitud (m)": 576,
      "Superfície (km²)": 27.2,
      "Població": 354
    },
    {
      "Municipi": "Oristà",
      "Comarca": "Osona",
      "Codi": "081516",
      "Altitud (m)": 468,
      "Superfície (km²)": 68.5,
      "Població": 585
    },
    {
      "Municipi": "Orpí",
      "Comarca": "Anoia",
      "Codi": "081521",
      "Altitud (m)": 375,
      "Superfície (km²)": 15.2,
      "Població": 164
    },
    {
      "Municipi": "Òrrius",
      "Comarca": "Maresme",
      "Codi": "081537",
      "Altitud (m)": 259,
      "Superfície (km²)": 5.7,
      "Població": 799
    },
    {
      "Municipi": "Os de Balaguer",
      "Comarca": "Noguera",
      "Codi": 251569,
      "Altitud (m)": 463,
      "Superfície (km²)": 136,
      "Població": 1081
    },
    {
      "Municipi": "Osor",
      "Comarca": "Selva",
      "Codi": 171169,
      "Altitud (m)": 340,
      "Superfície (km²)": 52.1,
      "Població": 422
    },
    {
      "Municipi": "Ossó de Sió",
      "Comarca": "Urgell",
      "Codi": 251575,
      "Altitud (m)": 391,
      "Superfície (km²)": 26.3,
      "Població": 196
    },
    {
      "Municipi": "Pacs del Penedès",
      "Comarca": "Alt Penedès",
      "Codi": "081542",
      "Altitud (m)": 201,
      "Superfície (km²)": 6.3,
      "Població": 911
    },
    {
      "Municipi": "Palafolls",
      "Comarca": "Maresme",
      "Codi": "081555",
      "Altitud (m)": 16,
      "Superfície (km²)": 16.6,
      "Població": 9823
    },
    {
      "Municipi": "Palafrugell",
      "Comarca": "Baix Empordà",
      "Codi": 171175,
      "Altitud (m)": 64,
      "Superfície (km²)": 26.9,
      "Població": 23864
    },
    {
      "Municipi": "Palamós",
      "Comarca": "Baix Empordà",
      "Codi": 171181,
      "Altitud (m)": 12,
      "Superfície (km²)": 14,
      "Població": 18333
    },
    {
      "Municipi": "Palau d'Anglesola, el",
      "Comarca": "Pla d'Urgell",
      "Codi": 251581,
      "Altitud (m)": 250,
      "Superfície (km²)": 12.3,
      "Població": 2185
    },
    {
      "Municipi": "Palau de Santa Eulàlia",
      "Comarca": "Alt Empordà",
      "Codi": 171194,
      "Altitud (m)": 86,
      "Superfície (km²)": 8.4,
      "Població": 128
    },
    {
      "Municipi": "Palau-sator",
      "Comarca": "Baix Empordà",
      "Codi": 171215,
      "Altitud (m)": 20,
      "Superfície (km²)": 12.4,
      "Població": 318
    },
    {
      "Municipi": "Palau-saverdera",
      "Comarca": "Alt Empordà",
      "Codi": 171208,
      "Altitud (m)": 78,
      "Superfície (km²)": 16.5,
      "Població": 1494
    },
    {
      "Municipi": "Palau-solità i Plegamans",
      "Comarca": "Vallès Occidental",
      "Codi": "081568",
      "Altitud (m)": 130,
      "Superfície (km²)": 14.9,
      "Població": 15125
    },
    {
      "Municipi": "Pallaresos, els",
      "Comarca": "Tarragonès",
      "Codi": 431009,
      "Altitud (m)": 120,
      "Superfície (km²)": 5.1,
      "Població": 4967
    },
    {
      "Municipi": "Pallejà",
      "Comarca": "Baix Llobregat",
      "Codi": "081574",
      "Altitud (m)": 41,
      "Superfície (km²)": 8.3,
      "Població": 11715
    },
    {
      "Municipi": "Palma d'Ebre, la",
      "Comarca": "Ribera d'Ebre",
      "Codi": 430995,
      "Altitud (m)": 335,
      "Superfície (km²)": 37.9,
      "Població": 340
    },
    {
      "Municipi": "Palma de Cervelló, la",
      "Comarca": "Baix Llobregat",
      "Codi": "089058",
      "Altitud (m)": 100,
      "Superfície (km²)": 5.5,
      "Població": 3036
    },
    {
      "Municipi": "Palol de Revardit",
      "Comarca": "Pla de l'Estany",
      "Codi": 171236,
      "Altitud (m)": 152,
      "Superfície (km²)": 18,
      "Població": 470
    },
    {
      "Municipi": "Pals",
      "Comarca": "Baix Empordà",
      "Codi": 171241,
      "Altitud (m)": 55,
      "Superfície (km²)": 25.8,
      "Població": 2566
    },
    {
      "Municipi": "Papiol, el",
      "Comarca": "Baix Llobregat",
      "Codi": "081580",
      "Altitud (m)": 135,
      "Superfície (km²)": 9,
      "Població": 4318
    },
    {
      "Municipi": "Pardines",
      "Comarca": "Ripollès",
      "Codi": 171254,
      "Altitud (m)": 1226,
      "Superfície (km²)": 31.1,
      "Població": 169
    },
    {
      "Municipi": "Parets del Vallès",
      "Comarca": "Vallès Oriental",
      "Codi": "081593",
      "Altitud (m)": 98,
      "Superfície (km²)": 9.1,
      "Població": 18893
    },
    {
      "Municipi": "Parlavà",
      "Comarca": "Baix Empordà",
      "Codi": 171267,
      "Altitud (m)": 40,
      "Superfície (km²)": 6.2,
      "Població": 413
    },
    {
      "Municipi": "Passanant i Belltall",
      "Comarca": "Conca de Barberà",
      "Codi": 431016,
      "Altitud (m)": 714,
      "Superfície (km²)": 27.4,
      "Població": 179
    },
    {
      "Municipi": "Pau",
      "Comarca": "Alt Empordà",
      "Codi": 171289,
      "Altitud (m)": 33,
      "Superfície (km²)": 10.7,
      "Població": 557
    },
    {
      "Municipi": "Paüls",
      "Comarca": "Baix Ebre",
      "Codi": 431021,
      "Altitud (m)": 378,
      "Superfície (km²)": 43.8,
      "Població": 558
    },
    {
      "Municipi": "Pedret i Marzà",
      "Comarca": "Alt Empordà",
      "Codi": 171292,
      "Altitud (m)": 22,
      "Superfície (km²)": 8.7,
      "Població": 181
    },
    {
      "Municipi": "Penelles",
      "Comarca": "Noguera",
      "Codi": 251641,
      "Altitud (m)": 276,
      "Superfície (km²)": 25.5,
      "Població": 428
    },
    {
      "Municipi": "Pera, la",
      "Comarca": "Baix Empordà",
      "Codi": 171306,
      "Altitud (m)": 93,
      "Superfície (km²)": 11.5,
      "Població": 452
    },
    {
      "Municipi": "Perafita",
      "Comarca": "Osona",
      "Codi": "081607",
      "Altitud (m)": 754,
      "Superfície (km²)": 19.6,
      "Població": 423
    },
    {
      "Municipi": "Perafort",
      "Comarca": "Tarragonès",
      "Codi": 431037,
      "Altitud (m)": 125,
      "Superfície (km²)": 9.5,
      "Població": 1294
    },
    {
      "Municipi": "Peralada",
      "Comarca": "Alt Empordà",
      "Codi": 171328,
      "Altitud (m)": 32,
      "Superfície (km²)": 43.6,
      "Població": 2024
    },
    {
      "Municipi": "Peramola",
      "Comarca": "Alt Urgell",
      "Codi": 251654,
      "Altitud (m)": 566,
      "Superfície (km²)": 56.2,
      "Població": 343
    },
    {
      "Municipi": "Perelló, el",
      "Comarca": "Baix Ebre",
      "Codi": 431042,
      "Altitud (m)": 142,
      "Superfície (km²)": 100.7,
      "Població": 2913
    },
    {
      "Municipi": "Piera",
      "Comarca": "Anoia",
      "Codi": "081614",
      "Altitud (m)": 324,
      "Superfície (km²)": 57.2,
      "Població": 17196
    },
    {
      "Municipi": "Piles, les",
      "Comarca": "Conca de Barberà",
      "Codi": 431055,
      "Altitud (m)": 676,
      "Superfície (km²)": 22.4,
      "Població": 230
    },
    {
      "Municipi": "Pineda de Mar",
      "Comarca": "Maresme",
      "Codi": "081635",
      "Altitud (m)": 10,
      "Superfície (km²)": 10.7,
      "Població": 28840
    },
    {
      "Municipi": "Pinell de Brai, el",
      "Comarca": "Terra Alta",
      "Codi": 431068,
      "Altitud (m)": 189,
      "Superfície (km²)": 57,
      "Població": 1009
    },
    {
      "Municipi": "Pinell de Solsonès",
      "Comarca": "Solsonès",
      "Codi": 251667,
      "Altitud (m)": 800,
      "Superfície (km²)": 91.1,
      "Població": 195
    },
    {
      "Municipi": "Pinós",
      "Comarca": "Solsonès",
      "Codi": 251673,
      "Altitud (m)": 823,
      "Superfície (km²)": 104.3,
      "Població": 281
    },
    {
      "Municipi": "Pira",
      "Comarca": "Conca de Barberà",
      "Codi": 431074,
      "Altitud (m)": 385,
      "Superfície (km²)": 8,
      "Població": 510
    },
    {
      "Municipi": "Pla de Santa Maria, el",
      "Comarca": "Alt Camp",
      "Codi": 431080,
      "Altitud (m)": 381,
      "Superfície (km²)": 35,
      "Població": 2389
    },
    {
      "Municipi": "Pla del Penedès, el",
      "Comarca": "Alt Penedès",
      "Codi": "081640",
      "Altitud (m)": 216,
      "Superfície (km²)": 9.6,
      "Població": 1316
    },
    {
      "Municipi": "Planes d'Hostoles, les",
      "Comarca": "Garrotxa",
      "Codi": 171334,
      "Altitud (m)": 370,
      "Superfície (km²)": 37.5,
      "Població": 1755
    },
    {
      "Municipi": "Planoles",
      "Comarca": "Ripollès",
      "Codi": 171349,
      "Altitud (m)": 1136,
      "Superfície (km²)": 18.8,
      "Població": 314
    },
    {
      "Municipi": "Plans de Sió, els",
      "Comarca": "Segarra",
      "Codi": 259118,
      "Altitud (m)": 412,
      "Superfície (km²)": 55.9,
      "Població": 521
    },
    {
      "Municipi": "Poal, el",
      "Comarca": "Pla d'Urgell",
      "Codi": 251689,
      "Altitud (m)": 216,
      "Superfície (km²)": 8.9,
      "Població": 653
    },
    {
      "Municipi": "Pobla de Cérvoles, la",
      "Comarca": "Garrigues",
      "Codi": 251692,
      "Altitud (m)": 663,
      "Superfície (km²)": 61.9,
      "Població": 203
    },
    {
      "Municipi": "Pobla de Claramunt, la",
      "Comarca": "Anoia",
      "Codi": "081653",
      "Altitud (m)": 265,
      "Superfície (km²)": 18.5,
      "Població": 2311
    },
    {
      "Municipi": "Pobla de Lillet, la",
      "Comarca": "Berguedà",
      "Codi": "081666",
      "Altitud (m)": 843,
      "Superfície (km²)": 51.5,
      "Població": 1087
    },
    {
      "Municipi": "Pobla de Mafumet, la",
      "Comarca": "Tarragonès",
      "Codi": 431093,
      "Altitud (m)": 98,
      "Superfície (km²)": 6.2,
      "Població": 4087
    },
    {
      "Municipi": "Pobla de Massaluca, la",
      "Comarca": "Terra Alta",
      "Codi": 431107,
      "Altitud (m)": 357,
      "Superfície (km²)": 43.4,
      "Població": 338
    },
    {
      "Municipi": "Pobla de Montornès, la",
      "Comarca": "Tarragonès",
      "Codi": 431114,
      "Altitud (m)": 56,
      "Superfície (km²)": 12.3,
      "Població": 3235
    },
    {
      "Municipi": "Pobla de Segur, la",
      "Comarca": "Pallars Jussà",
      "Codi": 251713,
      "Altitud (m)": 524,
      "Superfície (km²)": 32.8,
      "Població": 3042
    },
    {
      "Municipi": "Poboleda",
      "Comarca": "Priorat",
      "Codi": 431129,
      "Altitud (m)": 343,
      "Superfície (km²)": 14,
      "Població": 330
    },
    {
      "Municipi": "Polinyà",
      "Comarca": "Vallès Occidental",
      "Codi": "081672",
      "Altitud (m)": 123,
      "Superfície (km²)": 8.8,
      "Població": 8480
    },
    {
      "Municipi": "Pont d'Armentera, el",
      "Comarca": "Alt Camp",
      "Codi": 431135,
      "Altitud (m)": 349,
      "Superfície (km²)": 21.7,
      "Població": 494
    },
    {
      "Municipi": "Pont de Bar, el",
      "Comarca": "Alt Urgell",
      "Codi": 250306,
      "Altitud (m)": 861,
      "Superfície (km²)": 42.6,
      "Població": 162
    },
    {
      "Municipi": "Pont de Molins",
      "Comarca": "Alt Empordà",
      "Codi": 171352,
      "Altitud (m)": 43,
      "Superfície (km²)": 8.7,
      "Població": 558
    },
    {
      "Municipi": "Pont de Suert, el",
      "Comarca": "Alta Ribagorça",
      "Codi": 251734,
      "Altitud (m)": 838,
      "Superfície (km²)": 148.1,
      "Població": 2417
    },
    {
      "Municipi": "Pont de Vilomara i Rocafort, el",
      "Comarca": "Bages",
      "Codi": "081825",
      "Altitud (m)": 202,
      "Superfície (km²)": 27.4,
      "Població": 4087
    },
    {
      "Municipi": "Pontils",
      "Comarca": "Conca de Barberà",
      "Codi": 431418,
      "Altitud (m)": 551,
      "Superfície (km²)": 67.6,
      "Població": 129
    },
    {
      "Municipi": "Pontons",
      "Comarca": "Alt Penedès",
      "Codi": "081688",
      "Altitud (m)": 584,
      "Superfície (km²)": 25.9,
      "Població": 525
    },
    {
      "Municipi": "Pontós",
      "Comarca": "Alt Empordà",
      "Codi": 171365,
      "Altitud (m)": 94,
      "Superfície (km²)": 13.7,
      "Població": 282
    },
    {
      "Municipi": "Ponts",
      "Comarca": "Noguera",
      "Codi": 251728,
      "Altitud (m)": 363,
      "Superfície (km²)": 30.5,
      "Població": 2684
    },
    {
      "Municipi": "Porqueres",
      "Comarca": "Pla de l'Estany",
      "Codi": 171371,
      "Altitud (m)": 148,
      "Superfície (km²)": 33.5,
      "Població": 4717
    },
    {
      "Municipi": "Porrera",
      "Comarca": "Priorat",
      "Codi": 431140,
      "Altitud (m)": 316,
      "Superfície (km²)": 28.8,
      "Població": 435
    },
    {
      "Municipi": "Port de la Selva, el",
      "Comarca": "Alt Empordà",
      "Codi": 171404,
      "Altitud (m)": 12,
      "Superfície (km²)": 41.6,
      "Població": 1044
    },
    {
      "Municipi": "Portbou",
      "Comarca": "Alt Empordà",
      "Codi": 171387,
      "Altitud (m)": 28,
      "Superfície (km²)": 9.2,
      "Població": 1068
    },
    {
      "Municipi": "Portella, la",
      "Comarca": "Segrià",
      "Codi": 251749,
      "Altitud (m)": 259,
      "Superfície (km²)": 12.3,
      "Població": 731
    },
    {
      "Municipi": "Pradell de la Teixeta",
      "Comarca": "Priorat",
      "Codi": 431153,
      "Altitud (m)": 463,
      "Superfície (km²)": 21.8,
      "Població": 173
    },
    {
      "Municipi": "Prades",
      "Comarca": "Baix Camp",
      "Codi": 431166,
      "Altitud (m)": 950,
      "Superfície (km²)": 32.6,
      "Població": 665
    },
    {
      "Municipi": "Prat de Comte",
      "Comarca": "Terra Alta",
      "Codi": 431172,
      "Altitud (m)": 363,
      "Superfície (km²)": 26.4,
      "Població": 189
    },
    {
      "Municipi": "Prat de Llobregat, el",
      "Comarca": "Baix Llobregat",
      "Codi": "081691",
      "Altitud (m)": 8,
      "Superfície (km²)": 31.4,
      "Població": 65409
    },
    {
      "Municipi": "Pratdip",
      "Comarca": "Baix Camp",
      "Codi": 431188,
      "Altitud (m)": 245,
      "Superfície (km²)": 36.3,
      "Població": 728
    },
    {
      "Municipi": "Prats de Lluçanès",
      "Comarca": "Osona",
      "Codi": "081712",
      "Altitud (m)": 707,
      "Superfície (km²)": 13.8,
      "Població": 2682
    },
    {
      "Municipi": "Prats de Rei, els",
      "Comarca": "Anoia",
      "Codi": "081705",
      "Altitud (m)": 608,
      "Superfície (km²)": 26.1,
      "Població": 560
    },
    {
      "Municipi": "Prats i Sansor",
      "Comarca": "Cerdanya",
      "Codi": 251752,
      "Altitud (m)": 1124,
      "Superfície (km²)": 6.6,
      "Població": 255
    },
    {
      "Municipi": "Preixana",
      "Comarca": "Urgell",
      "Codi": 251765,
      "Altitud (m)": 328,
      "Superfície (km²)": 21.5,
      "Població": 402
    },
    {
      "Municipi": "Preixens",
      "Comarca": "Noguera",
      "Codi": 251771,
      "Altitud (m)": 315,
      "Superfície (km²)": 28.7,
      "Població": 411
    },
    {
      "Municipi": "Premià de Dalt",
      "Comarca": "Maresme",
      "Codi": "082303",
      "Altitud (m)": 142,
      "Superfície (km²)": 6.6,
      "Població": 10528
    },
    {
      "Municipi": "Premià de Mar",
      "Comarca": "Maresme",
      "Codi": "081727",
      "Altitud (m)": 8,
      "Superfície (km²)": 2.1,
      "Població": 28702
    },
    {
      "Municipi": "Preses, les",
      "Comarca": "Garrotxa",
      "Codi": 171390,
      "Altitud (m)": 474,
      "Superfície (km²)": 9.4,
      "Població": 1903
    },
    {
      "Municipi": "Prullans",
      "Comarca": "Cerdanya",
      "Codi": 251790,
      "Altitud (m)": 1096,
      "Superfície (km²)": 21.2,
      "Població": 268
    },
    {
      "Municipi": "Puigcerdà",
      "Comarca": "Cerdanya",
      "Codi": 171411,
      "Altitud (m)": 1202,
      "Superfície (km²)": 18.9,
      "Població": 9775
    },
    {
      "Municipi": "Puigdàlber",
      "Comarca": "Alt Penedès",
      "Codi": "081748",
      "Altitud (m)": 239,
      "Superfície (km²)": 0.4,
      "Població": 572
    },
    {
      "Municipi": "Puiggròs",
      "Comarca": "Garrigues",
      "Codi": 251804,
      "Altitud (m)": 334,
      "Superfície (km²)": 9.9,
      "Població": 257
    },
    {
      "Municipi": "Puigpelat",
      "Comarca": "Alt Camp",
      "Codi": 431191,
      "Altitud (m)": 252,
      "Superfície (km²)": 9.5,
      "Població": 1220
    },
    {
      "Municipi": "Puig-reig",
      "Comarca": "Berguedà",
      "Codi": "081751",
      "Altitud (m)": 455,
      "Superfície (km²)": 45.8,
      "Població": 4390
    },
    {
      "Municipi": "Puigverd d'Agramunt",
      "Comarca": "Urgell",
      "Codi": 251811,
      "Altitud (m)": 366,
      "Superfície (km²)": 17,
      "Població": 261
    },
    {
      "Municipi": "Puigverd de Lleida",
      "Comarca": "Segrià",
      "Codi": 251826,
      "Altitud (m)": 219,
      "Superfície (km²)": 12.5,
      "Població": 1395
    },
    {
      "Municipi": "Pujalt",
      "Comarca": "Anoia",
      "Codi": "081764",
      "Altitud (m)": 770,
      "Superfície (km²)": 31.4,
      "Població": 220
    },
    {
      "Municipi": "Quar, la",
      "Comarca": "Berguedà",
      "Codi": "081770",
      "Altitud (m)": 885,
      "Superfície (km²)": 38.3,
      "Població": 42
    },
    {
      "Municipi": "Quart",
      "Comarca": "Gironès",
      "Codi": 171426,
      "Altitud (m)": 91,
      "Superfície (km²)": 38.1,
      "Població": 4026
    },
    {
      "Municipi": "Queralbs",
      "Comarca": "Ripollès",
      "Codi": 170433,
      "Altitud (m)": 1236,
      "Superfície (km²)": 93.5,
      "Població": 197
    },
    {
      "Municipi": "Querol",
      "Comarca": "Alt Camp",
      "Codi": 431205,
      "Altitud (m)": 565,
      "Superfície (km²)": 72.3,
      "Població": 589
    },
    {
      "Municipi": "Rabós",
      "Comarca": "Alt Empordà",
      "Codi": 171432,
      "Altitud (m)": 106,
      "Superfície (km²)": 45.1,
      "Població": 219
    },
    {
      "Municipi": "Rajadell",
      "Comarca": "Bages",
      "Codi": "081786",
      "Altitud (m)": 361,
      "Superfície (km²)": 45.5,
      "Població": 573
    },
    {
      "Municipi": "Ràpita, la",
      "Comarca": "Montsià",
      "Codi": 431362,
      "Altitud (m)": 11,
      "Superfície (km²)": 53.7,
      "Població": 15329
    },
    {
      "Municipi": "Rasquera",
      "Comarca": "Ribera d'Ebre",
      "Codi": 431212,
      "Altitud (m)": 174,
      "Superfície (km²)": 51.3,
      "Població": 815
    },
    {
      "Municipi": "Regencós",
      "Comarca": "Baix Empordà",
      "Codi": 171447,
      "Altitud (m)": 78,
      "Superfície (km²)": 6.3,
      "Població": 269
    },
    {
      "Municipi": "Rellinars",
      "Comarca": "Vallès Occidental",
      "Codi": "081799",
      "Altitud (m)": 322,
      "Superfície (km²)": 17.8,
      "Població": 922
    },
    {
      "Municipi": "Renau",
      "Comarca": "Tarragonès",
      "Codi": 431227,
      "Altitud (m)": 175,
      "Superfície (km²)": 8.2,
      "Població": 160
    },
    {
      "Municipi": "Reus",
      "Comarca": "Baix Camp",
      "Codi": 431233,
      "Altitud (m)": 117,
      "Superfície (km²)": 52.8,
      "Població": 108535
    },
    {
      "Municipi": "Rialp",
      "Comarca": "Pallars Sobirà",
      "Codi": 251832,
      "Altitud (m)": 725,
      "Superfície (km²)": 63.3,
      "Població": 667
    },
    {
      "Municipi": "Riba, la",
      "Comarca": "Alt Camp",
      "Codi": 431248,
      "Altitud (m)": 263,
      "Superfície (km²)": 8,
      "Població": 570
    },
    {
      "Municipi": "Riba-roja d'Ebre",
      "Comarca": "Ribera d'Ebre",
      "Codi": 431251,
      "Altitud (m)": 76,
      "Superfície (km²)": 99.1,
      "Població": 1146
    },
    {
      "Municipi": "Ribera d'Ondara",
      "Comarca": "Segarra",
      "Codi": 259059,
      "Altitud (m)": 570,
      "Superfície (km²)": 54.5,
      "Població": 456
    },
    {
      "Municipi": "Ribera d'Urgellet",
      "Comarca": "Alt Urgell",
      "Codi": 251850,
      "Altitud (m)": 702,
      "Superfície (km²)": 107,
      "Població": 937
    },
    {
      "Municipi": "Ribes de Freser",
      "Comarca": "Ripollès",
      "Codi": 171450,
      "Altitud (m)": 912,
      "Superfície (km²)": 41.9,
      "Població": 1836
    },
    {
      "Municipi": "Riells i Viabrea",
      "Comarca": "Selva",
      "Codi": 171463,
      "Altitud (m)": 96,
      "Superfície (km²)": 27,
      "Població": 4427
    },
    {
      "Municipi": "Riera de Gaià, la",
      "Comarca": "Tarragonès",
      "Codi": 431264,
      "Altitud (m)": 28,
      "Superfície (km²)": 8.8,
      "Població": 1779
    },
    {
      "Municipi": "Riner",
      "Comarca": "Solsonès",
      "Codi": 251863,
      "Altitud (m)": 830,
      "Superfície (km²)": 47.1,
      "Població": 267
    },
    {
      "Municipi": "Ripoll",
      "Comarca": "Ripollès",
      "Codi": 171479,
      "Altitud (m)": 691,
      "Superfície (km²)": 73.7,
      "Població": 10818
    },
    {
      "Municipi": "Ripollet",
      "Comarca": "Vallès Occidental",
      "Codi": "081803",
      "Altitud (m)": 79,
      "Superfície (km²)": 4.3,
      "Població": 39189
    },
    {
      "Municipi": "Riu de Cerdanya",
      "Comarca": "Cerdanya",
      "Codi": 259139,
      "Altitud (m)": 1173,
      "Superfície (km²)": 12.3,
      "Població": 95
    },
    {
      "Municipi": "Riudarenes",
      "Comarca": "Selva",
      "Codi": 171485,
      "Altitud (m)": 84,
      "Superfície (km²)": 47.6,
      "Població": 2328
    },
    {
      "Municipi": "Riudaura",
      "Comarca": "Garrotxa",
      "Codi": 171498,
      "Altitud (m)": 572,
      "Superfície (km²)": 23.6,
      "Població": 524
    },
    {
      "Municipi": "Riudecanyes",
      "Comarca": "Baix Camp",
      "Codi": 431270,
      "Altitud (m)": 195,
      "Superfície (km²)": 17.1,
      "Població": 1354
    },
    {
      "Municipi": "Riudecols",
      "Comarca": "Baix Camp",
      "Codi": 431286,
      "Altitud (m)": 299,
      "Superfície (km²)": 19.5,
      "Població": 1223
    },
    {
      "Municipi": "Riudellots de la Selva",
      "Comarca": "Selva",
      "Codi": 171501,
      "Altitud (m)": 98,
      "Superfície (km²)": 13.1,
      "Població": 2087
    },
    {
      "Municipi": "Riudoms",
      "Comarca": "Baix Camp",
      "Codi": 431299,
      "Altitud (m)": 125,
      "Superfície (km²)": 32.4,
      "Població": 6900
    },
    {
      "Municipi": "Riumors",
      "Comarca": "Alt Empordà",
      "Codi": 171518,
      "Altitud (m)": 7,
      "Superfície (km²)": 6.5,
      "Població": 235
    },
    {
      "Municipi": "Roca del Vallès, la",
      "Comarca": "Vallès Oriental",
      "Codi": "081810",
      "Altitud (m)": 123,
      "Superfície (km²)": 36.9,
      "Població": 10899
    },
    {
      "Municipi": "Rocafort de Queralt",
      "Comarca": "Conca de Barberà",
      "Codi": 431303,
      "Altitud (m)": 566,
      "Superfície (km²)": 8.5,
      "Població": 243
    },
    {
      "Municipi": "Roda de Berà",
      "Comarca": "Tarragonès",
      "Codi": 431310,
      "Altitud (m)": 57,
      "Superfície (km²)": 16.5,
      "Població": 7807
    },
    {
      "Municipi": "Roda de Ter",
      "Comarca": "Osona",
      "Codi": "081831",
      "Altitud (m)": 443,
      "Superfície (km²)": 2.2,
      "Població": 6696
    },
    {
      "Municipi": "Rodonyà",
      "Comarca": "Alt Camp",
      "Codi": 431325,
      "Altitud (m)": 312,
      "Superfície (km²)": 8.5,
      "Població": 527
    },
    {
      "Municipi": "Roquetes",
      "Comarca": "Baix Ebre",
      "Codi": 431331,
      "Altitud (m)": 14,
      "Superfície (km²)": 136.9,
      "Població": 8298
    },
    {
      "Municipi": "Roses",
      "Comarca": "Alt Empordà",
      "Codi": 171523,
      "Altitud (m)": 5,
      "Superfície (km²)": 45.9,
      "Població": 19984
    },
    {
      "Municipi": "Rosselló",
      "Comarca": "Segrià",
      "Codi": 251898,
      "Altitud (m)": 252,
      "Superfície (km²)": 9.9,
      "Població": 3331
    },
    {
      "Municipi": "Rourell, el",
      "Comarca": "Alt Camp",
      "Codi": 431346,
      "Altitud (m)": 114,
      "Superfície (km²)": 2.3,
      "Població": 387
    },
    {
      "Municipi": "Rubí",
      "Comarca": "Vallès Occidental",
      "Codi": "081846",
      "Altitud (m)": 123,
      "Superfície (km²)": 32.3,
      "Població": 80034
    },
    {
      "Municipi": "Rubió",
      "Comarca": "Anoia",
      "Codi": "081859",
      "Altitud (m)": 629,
      "Superfície (km²)": 48,
      "Població": 256
    },
    {
      "Municipi": "Rupià",
      "Comarca": "Baix Empordà",
      "Codi": 171539,
      "Altitud (m)": 66,
      "Superfície (km²)": 5.3,
      "Població": 316
    },
    {
      "Municipi": "Rupit i Pruit",
      "Comarca": "Osona",
      "Codi": "089019",
      "Altitud (m)": 822,
      "Superfície (km²)": 47.8,
      "Població": 276
    },
    {
      "Municipi": "Sabadell",
      "Comarca": "Vallès Occidental",
      "Codi": "081878",
      "Altitud (m)": 190,
      "Superfície (km²)": 37.8,
      "Població": 217968
    },
    {
      "Municipi": "Sagàs",
      "Comarca": "Berguedà",
      "Codi": "081884",
      "Altitud (m)": 738,
      "Superfície (km²)": 44.6,
      "Població": 152
    },
    {
      "Municipi": "Salàs de Pallars",
      "Comarca": "Pallars Jussà",
      "Codi": 251902,
      "Altitud (m)": 573,
      "Superfície (km²)": 20.3,
      "Població": 355
    },
    {
      "Municipi": "Saldes",
      "Comarca": "Berguedà",
      "Codi": "081901",
      "Altitud (m)": 1215,
      "Superfície (km²)": 66.4,
      "Població": 301
    },
    {
      "Municipi": "Sales de Llierca",
      "Comarca": "Garrotxa",
      "Codi": 171544,
      "Altitud (m)": 260,
      "Superfície (km²)": 35.8,
      "Població": 167
    },
    {
      "Municipi": "Sallent",
      "Comarca": "Bages",
      "Codi": "081918",
      "Altitud (m)": 278,
      "Superfície (km²)": 65.2,
      "Població": 6828
    },
    {
      "Municipi": "Salomó",
      "Comarca": "Tarragonès",
      "Codi": 431359,
      "Altitud (m)": 165,
      "Superfície (km²)": 12.2,
      "Població": 550
    },
    {
      "Municipi": "Salou",
      "Comarca": "Tarragonès",
      "Codi": 439057,
      "Altitud (m)": 2,
      "Superfície (km²)": 15.1,
      "Població": 30087
    },
    {
      "Municipi": "Salt",
      "Comarca": "Gironès",
      "Codi": 171557,
      "Altitud (m)": 83,
      "Superfície (km²)": 6.6,
      "Població": 33337
    },
    {
      "Municipi": "Sanaüja",
      "Comarca": "Segarra",
      "Codi": 251919,
      "Altitud (m)": 409,
      "Superfície (km²)": 33,
      "Població": 399
    },
    {
      "Municipi": "Sant Adrià de Besòs",
      "Comarca": "Barcelonès",
      "Codi": "081944",
      "Altitud (m)": 14,
      "Superfície (km²)": 3.8,
      "Població": 37906
    },
    {
      "Municipi": "Sant Agustí de Lluçanès",
      "Comarca": "Osona",
      "Codi": "081957",
      "Altitud (m)": 816,
      "Superfície (km²)": 13.2,
      "Població": 109
    },
    {
      "Municipi": "Sant Andreu de la Barca",
      "Comarca": "Baix Llobregat",
      "Codi": "081960",
      "Altitud (m)": 42,
      "Superfície (km²)": 5.5,
      "Població": 26862
    },
    {
      "Municipi": "Sant Andreu de Llavaneres",
      "Comarca": "Maresme",
      "Codi": "081976",
      "Altitud (m)": 114,
      "Superfície (km²)": 11.8,
      "Població": 11839
    },
    {
      "Municipi": "Sant Andreu Salou",
      "Comarca": "Gironès",
      "Codi": 171576,
      "Altitud (m)": 132,
      "Superfície (km²)": 6,
      "Població": 171
    },
    {
      "Municipi": "Sant Aniol de Finestres",
      "Comarca": "Garrotxa",
      "Codi": 171833,
      "Altitud (m)": 289,
      "Superfície (km²)": 47.7,
      "Població": 364
    },
    {
      "Municipi": "Sant Antoni de Vilamajor",
      "Comarca": "Vallès Oriental",
      "Codi": "081982",
      "Altitud (m)": 258,
      "Superfície (km²)": 13.7,
      "Població": 6565
    },
    {
      "Municipi": "Sant Bartomeu del Grau",
      "Comarca": "Osona",
      "Codi": "081995",
      "Altitud (m)": 868,
      "Superfície (km²)": 34.4,
      "Població": 939
    },
    {
      "Municipi": "Sant Boi de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "082009",
      "Altitud (m)": 30,
      "Superfície (km²)": 21.5,
      "Població": 83667
    },
    {
      "Municipi": "Sant Boi de Lluçanès",
      "Comarca": "Osona",
      "Codi": "082016",
      "Altitud (m)": 813,
      "Superfície (km²)": 19.5,
      "Població": 572
    },
    {
      "Municipi": "Sant Cebrià de Vallalta",
      "Comarca": "Maresme",
      "Codi": "082037",
      "Altitud (m)": 71,
      "Superfície (km²)": 15.7,
      "Població": 3791
    },
    {
      "Municipi": "Sant Celoni",
      "Comarca": "Vallès Oriental",
      "Codi": "082021",
      "Altitud (m)": 152,
      "Superfície (km²)": 65.2,
      "Població": 18423
    },
    {
      "Municipi": "Sant Climent de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "082042",
      "Altitud (m)": 87,
      "Superfície (km²)": 10.8,
      "Població": 4190
    },
    {
      "Municipi": "Sant Climent Sescebes",
      "Comarca": "Alt Empordà",
      "Codi": 171582,
      "Altitud (m)": 86,
      "Superfície (km²)": 24.4,
      "Població": 674
    },
    {
      "Municipi": "Sant Cugat del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "082055",
      "Altitud (m)": 124,
      "Superfície (km²)": 48.2,
      "Població": 97579
    },
    {
      "Municipi": "Sant Cugat Sesgarrigues",
      "Comarca": "Alt Penedès",
      "Codi": "082068",
      "Altitud (m)": 266,
      "Superfície (km²)": 6.2,
      "Població": 1021
    },
    {
      "Municipi": "Sant Esteve de la Sarga",
      "Comarca": "Pallars Jussà",
      "Codi": 251961,
      "Altitud (m)": 875,
      "Superfície (km²)": 92.9,
      "Població": 130
    },
    {
      "Municipi": "Sant Esteve de Palautordera",
      "Comarca": "Vallès Oriental",
      "Codi": "082074",
      "Altitud (m)": 231,
      "Superfície (km²)": 10.6,
      "Població": 3037
    },
    {
      "Municipi": "Sant Esteve Sesrovires",
      "Comarca": "Baix Llobregat",
      "Codi": "082080",
      "Altitud (m)": 183,
      "Superfície (km²)": 18.6,
      "Població": 7889
    },
    {
      "Municipi": "Sant Feliu de Buixalleu",
      "Comarca": "Selva",
      "Codi": 171595,
      "Altitud (m)": 402,
      "Superfície (km²)": 61.9,
      "Població": 862
    },
    {
      "Municipi": "Sant Feliu de Codines",
      "Comarca": "Vallès Oriental",
      "Codi": "082107",
      "Altitud (m)": 480,
      "Superfície (km²)": 15,
      "Població": 6496
    },
    {
      "Municipi": "Sant Feliu de Guíxols",
      "Comarca": "Baix Empordà",
      "Codi": 171609,
      "Altitud (m)": 4,
      "Superfície (km²)": 16.2,
      "Població": 22643
    },
    {
      "Municipi": "Sant Feliu de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "082114",
      "Altitud (m)": 25,
      "Superfície (km²)": 11.8,
      "Població": 45956
    },
    {
      "Municipi": "Sant Feliu de Pallerols",
      "Comarca": "Garrotxa",
      "Codi": 171616,
      "Altitud (m)": 473,
      "Superfície (km²)": 34.9,
      "Població": 1596
    },
    {
      "Municipi": "Sant Feliu Sasserra",
      "Comarca": "Bages",
      "Codi": "082129",
      "Altitud (m)": 617,
      "Superfície (km²)": 22.4,
      "Població": 620
    },
    {
      "Municipi": "Sant Ferriol",
      "Comarca": "Garrotxa",
      "Codi": 171621,
      "Altitud (m)": 146,
      "Superfície (km²)": 42.2,
      "Població": 251
    },
    {
      "Municipi": "Sant Fost de Campsentelles",
      "Comarca": "Vallès Oriental",
      "Codi": "082093",
      "Altitud (m)": 112,
      "Superfície (km²)": 13.2,
      "Població": 9175
    },
    {
      "Municipi": "Sant Fruitós de Bages",
      "Comarca": "Bages",
      "Codi": "082135",
      "Altitud (m)": 247,
      "Superfície (km²)": 22.2,
      "Població": 9137
    },
    {
      "Municipi": "Sant Gregori",
      "Comarca": "Gironès",
      "Codi": 171637,
      "Altitud (m)": 112,
      "Superfície (km²)": 49.2,
      "Població": 4198
    },
    {
      "Municipi": "Sant Guim de Freixenet",
      "Comarca": "Segarra",
      "Codi": 251924,
      "Altitud (m)": 738,
      "Superfície (km²)": 25.1,
      "Població": 1152
    },
    {
      "Municipi": "Sant Guim de la Plana",
      "Comarca": "Segarra",
      "Codi": 251977,
      "Altitud (m)": 556,
      "Superfície (km²)": 12.5,
      "Població": 205
    },
    {
      "Municipi": "Sant Hilari Sacalm",
      "Comarca": "Selva",
      "Codi": 171642,
      "Altitud (m)": 803,
      "Superfície (km²)": 83.3,
      "Població": 5894
    },
    {
      "Municipi": "Sant Hipòlit de Voltregà",
      "Comarca": "Osona",
      "Codi": "082153",
      "Altitud (m)": 536,
      "Superfície (km²)": 0.9,
      "Població": 3704
    },
    {
      "Municipi": "Sant Iscle de Vallalta",
      "Comarca": "Maresme",
      "Codi": "081939",
      "Altitud (m)": 129,
      "Superfície (km²)": 17.8,
      "Població": 1445
    },
    {
      "Municipi": "Sant Jaume d'Enveja",
      "Comarca": "Montsià",
      "Codi": 439023,
      "Altitud (m)": 7,
      "Superfície (km²)": 60.8,
      "Població": 3641
    },
    {
      "Municipi": "Sant Jaume de Frontanyà",
      "Comarca": "Berguedà",
      "Codi": "082166",
      "Altitud (m)": 1072,
      "Superfície (km²)": 21.3,
      "Població": 29
    },
    {
      "Municipi": "Sant Jaume de Llierca",
      "Comarca": "Garrotxa",
      "Codi": 171655,
      "Altitud (m)": 203,
      "Superfície (km²)": 6.8,
      "Població": 868
    },
    {
      "Municipi": "Sant Jaume dels Domenys",
      "Comarca": "Baix Penedès",
      "Codi": 431378,
      "Altitud (m)": 213,
      "Superfície (km²)": 24.5,
      "Població": 2781
    },
    {
      "Municipi": "Sant Joan de les Abadesses",
      "Comarca": "Ripollès",
      "Codi": 171674,
      "Altitud (m)": 773,
      "Superfície (km²)": 53.7,
      "Població": 3295
    },
    {
      "Municipi": "Sant Joan de Mollet",
      "Comarca": "Gironès",
      "Codi": 171680,
      "Altitud (m)": 54,
      "Superfície (km²)": 3.2,
      "Població": 521
    },
    {
      "Municipi": "Sant Joan de Vilatorrada",
      "Comarca": "Bages",
      "Codi": "082188",
      "Altitud (m)": 277,
      "Superfície (km²)": 16.4,
      "Població": 10919
    },
    {
      "Municipi": "Sant Joan Despí",
      "Comarca": "Baix Llobregat",
      "Codi": "082172",
      "Altitud (m)": 10,
      "Superfície (km²)": 6.2,
      "Població": 34552
    },
    {
      "Municipi": "Sant Joan les Fonts",
      "Comarca": "Garrotxa",
      "Codi": 171851,
      "Altitud (m)": 342,
      "Superfície (km²)": 31.9,
      "Població": 3081
    },
    {
      "Municipi": "Sant Jordi Desvalls",
      "Comarca": "Gironès",
      "Codi": 171668,
      "Altitud (m)": 57,
      "Superfície (km²)": 11.7,
      "Població": 847
    },
    {
      "Municipi": "Sant Julià de Cerdanyola",
      "Comarca": "Berguedà",
      "Codi": "089030",
      "Altitud (m)": 954,
      "Superfície (km²)": 11.8,
      "Població": 241
    },
    {
      "Municipi": "Sant Julià de Ramis",
      "Comarca": "Gironès",
      "Codi": 171693,
      "Altitud (m)": 128,
      "Superfície (km²)": 18.8,
      "Població": 3699
    },
    {
      "Municipi": "Sant Julià de Vilatorta",
      "Comarca": "Osona",
      "Codi": "082205",
      "Altitud (m)": 600,
      "Superfície (km²)": 15.9,
      "Població": 3235
    },
    {
      "Municipi": "Sant Julià del Llor i Bonmatí",
      "Comarca": "Selva",
      "Codi": 179032,
      "Altitud (m)": 160,
      "Superfície (km²)": 9.7,
      "Població": 1358
    },
    {
      "Municipi": "Sant Just Desvern",
      "Comarca": "Baix Llobregat",
      "Codi": "082212",
      "Altitud (m)": 122,
      "Superfície (km²)": 7.8,
      "Població": 20478
    },
    {
      "Municipi": "Sant Llorenç d'Hortons",
      "Comarca": "Alt Penedès",
      "Codi": "082227",
      "Altitud (m)": 196,
      "Superfície (km²)": 19.7,
      "Població": 2572
    },
    {
      "Municipi": "Sant Llorenç de la Muga",
      "Comarca": "Alt Empordà",
      "Codi": 171714,
      "Altitud (m)": 173,
      "Superfície (km²)": 31.8,
      "Població": 274
    },
    {
      "Municipi": "Sant Llorenç de Morunys",
      "Comarca": "Solsonès",
      "Codi": 251930,
      "Altitud (m)": 925,
      "Superfície (km²)": 4.3,
      "Població": 1002
    },
    {
      "Municipi": "Sant Llorenç Savall",
      "Comarca": "Vallès Occidental",
      "Codi": "082233",
      "Altitud (m)": 466,
      "Superfície (km²)": 41.1,
      "Població": 2533
    },
    {
      "Municipi": "Sant Martí d'Albars",
      "Comarca": "Osona",
      "Codi": "082251",
      "Altitud (m)": 629,
      "Superfície (km²)": 14.7,
      "Població": 121
    },
    {
      "Municipi": "Sant Martí de Centelles",
      "Comarca": "Osona",
      "Codi": "082248",
      "Altitud (m)": 404,
      "Superfície (km²)": 25.6,
      "Població": 1240
    },
    {
      "Municipi": "Sant Martí de Llémena",
      "Comarca": "Gironès",
      "Codi": 171729,
      "Altitud (m)": 256,
      "Superfície (km²)": 43.1,
      "Població": 709
    },
    {
      "Municipi": "Sant Martí de Riucorb",
      "Comarca": "Urgell",
      "Codi": 259025,
      "Altitud (m)": 409,
      "Superfície (km²)": 34.9,
      "Població": 652
    },
    {
      "Municipi": "Sant Martí de Tous",
      "Comarca": "Anoia",
      "Codi": "082264",
      "Altitud (m)": 465,
      "Superfície (km²)": 39.2,
      "Població": 1268
    },
    {
      "Municipi": "Sant Martí Sarroca",
      "Comarca": "Alt Penedès",
      "Codi": "082270",
      "Altitud (m)": 291,
      "Superfície (km²)": 35.3,
      "Població": 3377
    },
    {
      "Municipi": "Sant Martí Sesgueioles",
      "Comarca": "Anoia",
      "Codi": "082286",
      "Altitud (m)": 646,
      "Superfície (km²)": 3.9,
      "Població": 359
    },
    {
      "Municipi": "Sant Martí Vell",
      "Comarca": "Gironès",
      "Codi": 171735,
      "Altitud (m)": 65,
      "Superfície (km²)": 17.5,
      "Població": 269
    },
    {
      "Municipi": "Sant Mateu de Bages",
      "Comarca": "Bages",
      "Codi": "082299",
      "Altitud (m)": 569,
      "Superfície (km²)": 102.9,
      "Població": 632
    },
    {
      "Municipi": "Sant Miquel de Campmajor",
      "Comarca": "Pla de l'Estany",
      "Codi": 171740,
      "Altitud (m)": 217,
      "Superfície (km²)": 33.2,
      "Població": 247
    },
    {
      "Municipi": "Sant Miquel de Fluvià",
      "Comarca": "Alt Empordà",
      "Codi": 171753,
      "Altitud (m)": 28,
      "Superfície (km²)": 3.5,
      "Població": 834
    },
    {
      "Municipi": "Sant Mori",
      "Comarca": "Alt Empordà",
      "Codi": 171766,
      "Altitud (m)": 51,
      "Superfície (km²)": 7.5,
      "Població": 178
    },
    {
      "Municipi": "Sant Pau de Segúries",
      "Comarca": "Ripollès",
      "Codi": 171772,
      "Altitud (m)": 867,
      "Superfície (km²)": 8.7,
      "Població": 742
    },
    {
      "Municipi": "Sant Pere de Ribes",
      "Comarca": "Garraf",
      "Codi": "082310",
      "Altitud (m)": 44,
      "Superfície (km²)": 40.8,
      "Població": 31702
    },
    {
      "Municipi": "Sant Pere de Riudebitlles",
      "Comarca": "Alt Penedès",
      "Codi": "082325",
      "Altitud (m)": 246,
      "Superfície (km²)": 5.4,
      "Població": 2466
    },
    {
      "Municipi": "Sant Pere de Torelló",
      "Comarca": "Osona",
      "Codi": "082331",
      "Altitud (m)": 621,
      "Superfície (km²)": 55.1,
      "Població": 2571
    },
    {
      "Municipi": "Sant Pere de Vilamajor",
      "Comarca": "Vallès Oriental",
      "Codi": "082346",
      "Altitud (m)": 305,
      "Superfície (km²)": 34.7,
      "Població": 4856
    },
    {
      "Municipi": "Sant Pere Pescador",
      "Comarca": "Alt Empordà",
      "Codi": 171788,
      "Altitud (m)": 5,
      "Superfície (km²)": 18.5,
      "Població": 2121
    },
    {
      "Municipi": "Sant Pere Sallavinera",
      "Comarca": "Anoia",
      "Codi": "081897",
      "Altitud (m)": 588,
      "Superfície (km²)": 22,
      "Població": 162
    },
    {
      "Municipi": "Sant Pol de Mar",
      "Comarca": "Maresme",
      "Codi": "082359",
      "Altitud (m)": 15,
      "Superfície (km²)": 7.5,
      "Població": 5771
    },
    {
      "Municipi": "Sant Quintí de Mediona",
      "Comarca": "Alt Penedès",
      "Codi": "082362",
      "Altitud (m)": 326,
      "Superfície (km²)": 13.8,
      "Població": 2415
    },
    {
      "Municipi": "Sant Quirze de Besora",
      "Comarca": "Osona",
      "Codi": "082378",
      "Altitud (m)": 587,
      "Superfície (km²)": 8.1,
      "Població": 2109
    },
    {
      "Municipi": "Sant Quirze del Vallès",
      "Comarca": "Vallès Occidental",
      "Codi": "082384",
      "Altitud (m)": 188,
      "Superfície (km²)": 14.1,
      "Població": 20188
    },
    {
      "Municipi": "Sant Quirze Safaja",
      "Comarca": "Moianès",
      "Codi": "082397",
      "Altitud (m)": 627,
      "Superfície (km²)": 26.2,
      "Població": 677
    },
    {
      "Municipi": "Sant Ramon",
      "Comarca": "Segarra",
      "Codi": 251945,
      "Altitud (m)": 641,
      "Superfície (km²)": 18.5,
      "Població": 490
    },
    {
      "Municipi": "Sant Sadurní d'Anoia",
      "Comarca": "Alt Penedès",
      "Codi": "082401",
      "Altitud (m)": 162,
      "Superfície (km²)": 19,
      "Població": 12941
    },
    {
      "Municipi": "Sant Sadurní d'Osormort",
      "Comarca": "Osona",
      "Codi": "082418",
      "Altitud (m)": 531,
      "Superfície (km²)": 30.6,
      "Població": 89
    },
    {
      "Municipi": "Sant Salvador de Guardiola",
      "Comarca": "Bages",
      "Codi": "080983",
      "Altitud (m)": 334,
      "Superfície (km²)": 37.2,
      "Població": 3422
    },
    {
      "Municipi": "Sant Vicenç de Castellet",
      "Comarca": "Bages",
      "Codi": "082628",
      "Altitud (m)": 176,
      "Superfície (km²)": 17.1,
      "Població": 10061
    },
    {
      "Municipi": "Sant Vicenç de Montalt",
      "Comarca": "Maresme",
      "Codi": "082649",
      "Altitud (m)": 143,
      "Superfície (km²)": 8.1,
      "Població": 6707
    },
    {
      "Municipi": "Sant Vicenç de Torelló",
      "Comarca": "Osona",
      "Codi": "082652",
      "Altitud (m)": 555,
      "Superfície (km²)": 6.6,
      "Població": 2071
    },
    {
      "Municipi": "Sant Vicenç dels Horts",
      "Comarca": "Baix Llobregat",
      "Codi": "082634",
      "Altitud (m)": 22,
      "Superfície (km²)": 9.1,
      "Població": 28422
    },
    {
      "Municipi": "Santa Bàrbara",
      "Comarca": "Montsià",
      "Codi": 431384,
      "Altitud (m)": 79,
      "Superfície (km²)": 28.2,
      "Població": 3749
    },
    {
      "Municipi": "Santa Cecília de Voltregà",
      "Comarca": "Osona",
      "Codi": "082439",
      "Altitud (m)": 519,
      "Superfície (km²)": 8.6,
      "Població": 184
    },
    {
      "Municipi": "Santa Coloma de Cervelló",
      "Comarca": "Baix Llobregat",
      "Codi": "082444",
      "Altitud (m)": 73,
      "Superfície (km²)": 7.5,
      "Població": 8373
    },
    {
      "Municipi": "Santa Coloma de Farners",
      "Comarca": "Selva",
      "Codi": 171805,
      "Altitud (m)": 142,
      "Superfície (km²)": 70.6,
      "Població": 13787
    },
    {
      "Municipi": "Santa Coloma de Gramenet",
      "Comarca": "Barcelonès",
      "Codi": "082457",
      "Altitud (m)": 56,
      "Superfície (km²)": 7,
      "Població": 119195
    },
    {
      "Municipi": "Santa Coloma de Queralt",
      "Comarca": "Conca de Barberà",
      "Codi": 431397,
      "Altitud (m)": 674,
      "Superfície (km²)": 33.9,
      "Població": 2811
    },
    {
      "Municipi": "Santa Cristina d'Aro",
      "Comarca": "Baix Empordà",
      "Codi": 171812,
      "Altitud (m)": 30,
      "Superfície (km²)": 67.6,
      "Població": 5656
    },
    {
      "Municipi": "Santa Eugènia de Berga",
      "Comarca": "Osona",
      "Codi": "082460",
      "Altitud (m)": 538,
      "Superfície (km²)": 7,
      "Població": 2295
    },
    {
      "Municipi": "Santa Eulàlia de Riuprimer",
      "Comarca": "Osona",
      "Codi": "082476",
      "Altitud (m)": 568,
      "Superfície (km²)": 13.8,
      "Població": 1448
    },
    {
      "Municipi": "Santa Eulàlia de Ronçana",
      "Comarca": "Vallès Oriental",
      "Codi": "082482",
      "Altitud (m)": 236,
      "Superfície (km²)": 14.2,
      "Població": 7852
    },
    {
      "Municipi": "Santa Fe del Penedès",
      "Comarca": "Alt Penedès",
      "Codi": "082495",
      "Altitud (m)": 240,
      "Superfície (km²)": 3.4,
      "Població": 362
    },
    {
      "Municipi": "Santa Llogaia d'Àlguema",
      "Comarca": "Alt Empordà",
      "Codi": 171827,
      "Altitud (m)": 42,
      "Superfície (km²)": 1.9,
      "Població": 396
    },
    {
      "Municipi": "Santa Margarida de Montbui",
      "Comarca": "Anoia",
      "Codi": "082508",
      "Altitud (m)": 316,
      "Superfície (km²)": 27.6,
      "Població": 10418
    },
    {
      "Municipi": "Santa Margarida i els Monjos",
      "Comarca": "Alt Penedès",
      "Codi": "082515",
      "Altitud (m)": 161,
      "Superfície (km²)": 17.2,
      "Població": 7629
    },
    {
      "Municipi": "Santa Maria d'Oló",
      "Comarca": "Moianès",
      "Codi": "082589",
      "Altitud (m)": 542,
      "Superfície (km²)": 66.2,
      "Població": 1084
    },
    {
      "Municipi": "Santa Maria de Besora",
      "Comarca": "Osona",
      "Codi": "082536",
      "Altitud (m)": 866,
      "Superfície (km²)": 24.7,
      "Població": 164
    },
    {
      "Municipi": "Santa Maria de Martorelles",
      "Comarca": "Vallès Oriental",
      "Codi": "082567",
      "Altitud (m)": 181,
      "Superfície (km²)": 4.5,
      "Població": 882
    },
    {
      "Municipi": "Santa Maria de Merlès",
      "Comarca": "Berguedà",
      "Codi": "082554",
      "Altitud (m)": 532,
      "Superfície (km²)": 52.1,
      "Població": 174
    },
    {
      "Municipi": "Santa Maria de Miralles",
      "Comarca": "Anoia",
      "Codi": "082573",
      "Altitud (m)": 543,
      "Superfície (km²)": 25,
      "Població": 138
    },
    {
      "Municipi": "Santa Maria de Palautordera",
      "Comarca": "Vallès Oriental",
      "Codi": "082592",
      "Altitud (m)": 208,
      "Superfície (km²)": 16.9,
      "Població": 9853
    },
    {
      "Municipi": "Santa Oliva",
      "Comarca": "Baix Penedès",
      "Codi": 431401,
      "Altitud (m)": 101,
      "Superfície (km²)": 9.7,
      "Població": 3671
    },
    {
      "Municipi": "Santa Pau",
      "Comarca": "Garrotxa",
      "Codi": 171848,
      "Altitud (m)": 496,
      "Superfície (km²)": 49,
      "Població": 1614
    },
    {
      "Municipi": "Santa Perpètua de Mogoda",
      "Comarca": "Vallès Occidental",
      "Codi": "082606",
      "Altitud (m)": 74,
      "Superfície (km²)": 15.8,
      "Població": 25863
    },
    {
      "Municipi": "Santa Susanna",
      "Comarca": "Maresme",
      "Codi": "082613",
      "Altitud (m)": 10,
      "Superfície (km²)": 12.6,
      "Població": 3854
    },
    {
      "Municipi": "Santpedor",
      "Comarca": "Bages",
      "Codi": "081923",
      "Altitud (m)": 336,
      "Superfície (km²)": 16.6,
      "Població": 7668
    },
    {
      "Municipi": "Sarral",
      "Comarca": "Conca de Barberà",
      "Codi": 431423,
      "Altitud (m)": 467,
      "Superfície (km²)": 52.4,
      "Població": 1605
    },
    {
      "Municipi": "Sarrià de Ter",
      "Comarca": "Gironès",
      "Codi": 171864,
      "Altitud (m)": 70,
      "Superfície (km²)": 4.2,
      "Població": 5335
    },
    {
      "Municipi": "Sarroca de Bellera",
      "Comarca": "Pallars Jussà",
      "Codi": 252017,
      "Altitud (m)": 1002,
      "Superfície (km²)": 87.5,
      "Població": 118
    },
    {
      "Municipi": "Sarroca de Lleida",
      "Comarca": "Segrià",
      "Codi": 252000,
      "Altitud (m)": 201,
      "Superfície (km²)": 42.2,
      "Població": 388
    },
    {
      "Municipi": "Saus, Camallera i Llampaies",
      "Comarca": "Alt Empordà",
      "Codi": 171870,
      "Altitud (m)": 86,
      "Superfície (km²)": 11.4,
      "Població": 890
    },
    {
      "Municipi": "Savallà del Comtat",
      "Comarca": "Conca de Barberà",
      "Codi": 431439,
      "Altitud (m)": 825,
      "Superfície (km²)": 14.8,
      "Població": 53
    },
    {
      "Municipi": "Secuita, la",
      "Comarca": "Tarragonès",
      "Codi": 431444,
      "Altitud (m)": 169,
      "Superfície (km²)": 17.8,
      "Població": 1788
    },
    {
      "Municipi": "Selva de Mar, la",
      "Comarca": "Alt Empordà",
      "Codi": 171886,
      "Altitud (m)": 48,
      "Superfície (km²)": 7.2,
      "Població": 221
    },
    {
      "Municipi": "Selva del Camp, la",
      "Comarca": "Baix Camp",
      "Codi": 431457,
      "Altitud (m)": 246,
      "Superfície (km²)": 35.3,
      "Població": 5745
    },
    {
      "Municipi": "Senan",
      "Comarca": "Conca de Barberà",
      "Codi": 431460,
      "Altitud (m)": 652,
      "Superfície (km²)": 11.7,
      "Població": 44
    },
    {
      "Municipi": "Sénia, la",
      "Comarca": "Montsià",
      "Codi": 430445,
      "Altitud (m)": 369,
      "Superfície (km²)": 108.4,
      "Població": 5602
    },
    {
      "Municipi": "Senterada",
      "Comarca": "Pallars Jussà",
      "Codi": 252022,
      "Altitud (m)": 729,
      "Superfície (km²)": 34.5,
      "Població": 160
    },
    {
      "Municipi": "Sentiu de Sió, la",
      "Comarca": "Noguera",
      "Codi": 250352,
      "Altitud (m)": 281,
      "Superfície (km²)": 29.6,
      "Població": 444
    },
    {
      "Municipi": "Sentmenat",
      "Comarca": "Vallès Occidental",
      "Codi": "082671",
      "Altitud (m)": 207,
      "Superfície (km²)": 28.8,
      "Població": 9461
    },
    {
      "Municipi": "Serinyà",
      "Comarca": "Pla de l'Estany",
      "Codi": 171903,
      "Altitud (m)": 188,
      "Superfície (km²)": 17.4,
      "Població": 1163
    },
    {
      "Municipi": "Seròs",
      "Comarca": "Segrià",
      "Codi": 252043,
      "Altitud (m)": 103,
      "Superfície (km²)": 85.8,
      "Població": 1865
    },
    {
      "Municipi": "Serra de Daró",
      "Comarca": "Baix Empordà",
      "Codi": 171910,
      "Altitud (m)": 15,
      "Superfície (km²)": 7.9,
      "Població": 238
    },
    {
      "Municipi": "Setcases",
      "Comarca": "Ripollès",
      "Codi": 171925,
      "Altitud (m)": 1265,
      "Superfície (km²)": 49.1,
      "Població": 187
    },
    {
      "Municipi": "Seu d'Urgell, la",
      "Comarca": "Alt Urgell",
      "Codi": 252038,
      "Altitud (m)": 691,
      "Superfície (km²)": 15.5,
      "Població": 12479
    },
    {
      "Municipi": "Seva",
      "Comarca": "Osona",
      "Codi": "082690",
      "Altitud (m)": 663,
      "Superfície (km²)": 30.4,
      "Població": 3775
    },
    {
      "Municipi": "Sidamon",
      "Comarca": "Pla d'Urgell",
      "Codi": 252056,
      "Altitud (m)": 232,
      "Superfície (km²)": 8.1,
      "Població": 771
    },
    {
      "Municipi": "Sils",
      "Comarca": "Selva",
      "Codi": 171931,
      "Altitud (m)": 76,
      "Superfície (km²)": 29.9,
      "Població": 6616
    },
    {
      "Municipi": "Sitges",
      "Comarca": "Garraf",
      "Codi": "082704",
      "Altitud (m)": 10,
      "Superfície (km²)": 43.9,
      "Població": 32086
    },
    {
      "Municipi": "Siurana",
      "Comarca": "Alt Empordà",
      "Codi": 170524,
      "Altitud (m)": 33,
      "Superfície (km²)": 10.5,
      "Població": 186
    },
    {
      "Municipi": "Sobremunt",
      "Comarca": "Osona",
      "Codi": "082711",
      "Altitud (m)": 881,
      "Superfície (km²)": 13.8,
      "Població": 86
    },
    {
      "Municipi": "Soleràs, el",
      "Comarca": "Garrigues",
      "Codi": 252069,
      "Altitud (m)": 381,
      "Superfície (km²)": 12.2,
      "Població": 321
    },
    {
      "Municipi": "Solivella",
      "Comarca": "Conca de Barberà",
      "Codi": 431476,
      "Altitud (m)": 489,
      "Superfície (km²)": 21.4,
      "Població": 632
    },
    {
      "Municipi": "Solsona",
      "Comarca": "Solsonès",
      "Codi": 252075,
      "Altitud (m)": 664,
      "Superfície (km²)": 17.7,
      "Població": 9213
    },
    {
      "Municipi": "Sora",
      "Comarca": "Osona",
      "Codi": "082726",
      "Altitud (m)": 716,
      "Superfície (km²)": 31.7,
      "Població": 217
    },
    {
      "Municipi": "Soriguera",
      "Comarca": "Pallars Sobirà",
      "Codi": 252081,
      "Altitud (m)": 1258,
      "Superfície (km²)": 106.4,
      "Població": 442
    },
    {
      "Municipi": "Sort",
      "Comarca": "Pallars Sobirà",
      "Codi": 252094,
      "Altitud (m)": 692,
      "Superfície (km²)": 105.1,
      "Població": 2244
    },
    {
      "Municipi": "Soses",
      "Comarca": "Segrià",
      "Codi": 252108,
      "Altitud (m)": 118,
      "Superfície (km²)": 30.2,
      "Població": 1846
    },
    {
      "Municipi": "Subirats",
      "Comarca": "Alt Penedès",
      "Codi": "082732",
      "Altitud (m)": 243,
      "Superfície (km²)": 55.9,
      "Població": 3245
    },
    {
      "Municipi": "Sudanell",
      "Comarca": "Segrià",
      "Codi": 252115,
      "Altitud (m)": 152,
      "Superfície (km²)": 8.7,
      "Població": 886
    },
    {
      "Municipi": "Sunyer",
      "Comarca": "Segrià",
      "Codi": 252120,
      "Altitud (m)": 211,
      "Superfície (km²)": 12.7,
      "Població": 327
    },
    {
      "Municipi": "Súria",
      "Comarca": "Bages",
      "Codi": "082747",
      "Altitud (m)": 326,
      "Superfície (km²)": 23.6,
      "Població": 6035
    },
    {
      "Municipi": "Susqueda",
      "Comarca": "Selva",
      "Codi": 171946,
      "Altitud (m)": 816,
      "Superfície (km²)": 50.6,
      "Població": 97
    },
    {
      "Municipi": "Tagamanent",
      "Comarca": "Vallès Oriental",
      "Codi": "082763",
      "Altitud (m)": 354,
      "Superfície (km²)": 43.3,
      "Població": 344
    },
    {
      "Municipi": "Talamanca",
      "Comarca": "Bages",
      "Codi": "082779",
      "Altitud (m)": 552,
      "Superfície (km²)": 29.4,
      "Població": 223
    },
    {
      "Municipi": "Talarn",
      "Comarca": "Pallars Jussà",
      "Codi": 252154,
      "Altitud (m)": 572,
      "Superfície (km²)": 28,
      "Població": 590
    },
    {
      "Municipi": "Talavera",
      "Comarca": "Segarra",
      "Codi": 252167,
      "Altitud (m)": 791,
      "Superfície (km²)": 30.1,
      "Població": 282
    },
    {
      "Municipi": "Tallada d'Empordà, la",
      "Comarca": "Baix Empordà",
      "Codi": 171959,
      "Altitud (m)": 20,
      "Superfície (km²)": 16.6,
      "Població": 475
    },
    {
      "Municipi": "Taradell",
      "Comarca": "Osona",
      "Codi": "082785",
      "Altitud (m)": 623,
      "Superfície (km²)": 26.5,
      "Població": 6797
    },
    {
      "Municipi": "Tarragona",
      "Comarca": "Tarragonès",
      "Codi": 431482,
      "Altitud (m)": 68,
      "Superfície (km²)": 57.9,
      "Població": 138326
    },
    {
      "Municipi": "Tàrrega",
      "Comarca": "Urgell",
      "Codi": 252173,
      "Altitud (m)": 373,
      "Superfície (km²)": 88.4,
      "Població": 18189
    },
    {
      "Municipi": "Tarrés",
      "Comarca": "Garrigues",
      "Codi": 252189,
      "Altitud (m)": 578,
      "Superfície (km²)": 13,
      "Població": 118
    },
    {
      "Municipi": "Tarroja de Segarra",
      "Comarca": "Segarra",
      "Codi": 252192,
      "Altitud (m)": 460,
      "Superfície (km²)": 7.6,
      "Població": 181
    },
    {
      "Municipi": "Tavèrnoles",
      "Comarca": "Osona",
      "Codi": "082750",
      "Altitud (m)": 537,
      "Superfície (km²)": 18.8,
      "Població": 339
    },
    {
      "Municipi": "Tavertet",
      "Comarca": "Osona",
      "Codi": "082802",
      "Altitud (m)": 869,
      "Superfície (km²)": 32.5,
      "Població": 126
    },
    {
      "Municipi": "Teià",
      "Comarca": "Maresme",
      "Codi": "082819",
      "Altitud (m)": 128,
      "Superfície (km²)": 6.6,
      "Població": 6682
    },
    {
      "Municipi": "Térmens",
      "Comarca": "Noguera",
      "Codi": 252206,
      "Altitud (m)": 208,
      "Superfície (km²)": 27.5,
      "Població": 1330
    },
    {
      "Municipi": "Terrades",
      "Comarca": "Alt Empordà",
      "Codi": 171962,
      "Altitud (m)": 228,
      "Superfície (km²)": 21,
      "Població": 347
    },
    {
      "Municipi": "Terrassa",
      "Comarca": "Vallès Occidental",
      "Codi": "082798",
      "Altitud (m)": 277,
      "Superfície (km²)": 70.2,
      "Població": 225274
    },
    {
      "Municipi": "Tiana",
      "Comarca": "Maresme",
      "Codi": "082824",
      "Altitud (m)": 136,
      "Superfície (km²)": 8,
      "Població": 9220
    },
    {
      "Municipi": "Tírvia",
      "Comarca": "Pallars Sobirà",
      "Codi": 252213,
      "Altitud (m)": 991,
      "Superfície (km²)": 8.5,
      "Població": 143
    },
    {
      "Municipi": "Tiurana",
      "Comarca": "Noguera",
      "Codi": 252228,
      "Altitud (m)": 387,
      "Superfície (km²)": 15.9,
      "Població": 67
    },
    {
      "Municipi": "Tivenys",
      "Comarca": "Baix Ebre",
      "Codi": 431495,
      "Altitud (m)": 13,
      "Superfície (km²)": 53.5,
      "Població": 914
    },
    {
      "Municipi": "Tivissa",
      "Comarca": "Ribera d'Ebre",
      "Codi": 431508,
      "Altitud (m)": 309,
      "Superfície (km²)": 209.4,
      "Població": 1633
    },
    {
      "Municipi": "Tona",
      "Comarca": "Osona",
      "Codi": "082830",
      "Altitud (m)": 596,
      "Superfície (km²)": 16.5,
      "Població": 8440
    },
    {
      "Municipi": "Torà",
      "Comarca": "Segarra",
      "Codi": 252234,
      "Altitud (m)": 448,
      "Superfície (km²)": 93.3,
      "Població": 1236
    },
    {
      "Municipi": "Tordera",
      "Comarca": "Maresme",
      "Codi": "082845",
      "Altitud (m)": 34,
      "Superfície (km²)": 84.1,
      "Població": 18421
    },
    {
      "Municipi": "Torelló",
      "Comarca": "Osona",
      "Codi": "082858",
      "Altitud (m)": 508,
      "Superfície (km²)": 13.5,
      "Població": 14922
    },
    {
      "Municipi": "Torms, els",
      "Comarca": "Garrigues",
      "Codi": 252249,
      "Altitud (m)": 476,
      "Superfície (km²)": 13.8,
      "Població": 142
    },
    {
      "Municipi": "Tornabous",
      "Comarca": "Urgell",
      "Codi": 252252,
      "Altitud (m)": 289,
      "Superfície (km²)": 24.2,
      "Població": 849
    },
    {
      "Municipi": "Torre de Cabdella, la",
      "Comarca": "Pallars Jussà",
      "Codi": 252271,
      "Altitud (m)": 1075,
      "Superfície (km²)": 165.3,
      "Població": 793
    },
    {
      "Municipi": "Torre de Claramunt, la",
      "Comarca": "Anoia",
      "Codi": "082861",
      "Altitud (m)": 363,
      "Superfície (km²)": 15,
      "Població": 4020
    },
    {
      "Municipi": "Torre de Fontaubella, la",
      "Comarca": "Priorat",
      "Codi": 431515,
      "Altitud (m)": 369,
      "Superfície (km²)": 7.1,
      "Població": 119
    },
    {
      "Municipi": "Torre de l'Espanyol, la",
      "Comarca": "Ribera d'Ebre",
      "Codi": 431520,
      "Altitud (m)": 164,
      "Superfície (km²)": 27.9,
      "Població": 621
    },
    {
      "Municipi": "Torrebesses",
      "Comarca": "Segrià",
      "Codi": 252265,
      "Altitud (m)": 287,
      "Superfície (km²)": 27.5,
      "Població": 297
    },
    {
      "Municipi": "Torredembarra",
      "Comarca": "Tarragonès",
      "Codi": 431536,
      "Altitud (m)": 15,
      "Superfície (km²)": 8.7,
      "Població": 17614
    },
    {
      "Municipi": "Torrefarrera",
      "Comarca": "Segrià",
      "Codi": 252287,
      "Altitud (m)": 214,
      "Superfície (km²)": 23.5,
      "Població": 4879
    },
    {
      "Municipi": "Torrefeta i Florejacs",
      "Comarca": "Segarra",
      "Codi": 259078,
      "Altitud (m)": 475,
      "Superfície (km²)": 88.9,
      "Població": 612
    },
    {
      "Municipi": "Torregrossa",
      "Comarca": "Pla d'Urgell",
      "Codi": 252304,
      "Altitud (m)": 232,
      "Superfície (km²)": 40.5,
      "Població": 2212
    },
    {
      "Municipi": "Torrelameu",
      "Comarca": "Noguera",
      "Codi": 252311,
      "Altitud (m)": 201,
      "Superfície (km²)": 10.9,
      "Població": 774
    },
    {
      "Municipi": "Torrelavit",
      "Comarca": "Alt Penedès",
      "Codi": "082877",
      "Altitud (m)": 202,
      "Superfície (km²)": 23.7,
      "Població": 1494
    },
    {
      "Municipi": "Torrelles de Foix",
      "Comarca": "Alt Penedès",
      "Codi": "082883",
      "Altitud (m)": 367,
      "Superfície (km²)": 36.7,
      "Població": 2614
    },
    {
      "Municipi": "Torrelles de Llobregat",
      "Comarca": "Baix Llobregat",
      "Codi": "082896",
      "Altitud (m)": 126,
      "Superfície (km²)": 13.6,
      "Població": 6217
    },
    {
      "Municipi": "Torrent",
      "Comarca": "Baix Empordà",
      "Codi": 171978,
      "Altitud (m)": 44,
      "Superfície (km²)": 8,
      "Població": 170
    },
    {
      "Municipi": "Torres de Segre",
      "Comarca": "Segrià",
      "Codi": 252326,
      "Altitud (m)": 119,
      "Superfície (km²)": 50.6,
      "Població": 2281
    },
    {
      "Municipi": "Torre-serona",
      "Comarca": "Segrià",
      "Codi": 252332,
      "Altitud (m)": 197,
      "Superfície (km²)": 5.9,
      "Població": 415
    },
    {
      "Municipi": "Torroella de Fluvià",
      "Comarca": "Alt Empordà",
      "Codi": 171984,
      "Altitud (m)": 9,
      "Superfície (km²)": 16.9,
      "Població": 769
    },
    {
      "Municipi": "Torroella de Montgrí",
      "Comarca": "Baix Empordà",
      "Codi": 171997,
      "Altitud (m)": 31,
      "Superfície (km²)": 65.9,
      "Població": 12232
    },
    {
      "Municipi": "Torroja del Priorat",
      "Comarca": "Priorat",
      "Codi": 431541,
      "Altitud (m)": 332,
      "Superfície (km²)": 13.2,
      "Població": 139
    },
    {
      "Municipi": "Tortellà",
      "Comarca": "Garrotxa",
      "Codi": 172001,
      "Altitud (m)": 276,
      "Superfície (km²)": 11.1,
      "Població": 815
    },
    {
      "Municipi": "Tortosa",
      "Comarca": "Baix Ebre",
      "Codi": 431554,
      "Altitud (m)": 12,
      "Superfície (km²)": 218.5,
      "Població": 34864
    },
    {
      "Municipi": "Toses",
      "Comarca": "Ripollès",
      "Codi": 172018,
      "Altitud (m)": 1444,
      "Superfície (km²)": 57.9,
      "Població": 189
    },
    {
      "Municipi": "Tossa de Mar",
      "Comarca": "Selva",
      "Codi": 172023,
      "Altitud (m)": 5,
      "Superfície (km²)": 38.6,
      "Població": 6185
    },
    {
      "Municipi": "Tremp",
      "Comarca": "Pallars Jussà",
      "Codi": 252347,
      "Altitud (m)": 468,
      "Superfície (km²)": 302.8,
      "Població": 5991
    },
    {
      "Municipi": "Ullà",
      "Comarca": "Baix Empordà",
      "Codi": 172044,
      "Altitud (m)": 21,
      "Superfície (km²)": 7.3,
      "Població": 1203
    },
    {
      "Municipi": "Ullastrell",
      "Comarca": "Vallès Occidental",
      "Codi": "082900",
      "Altitud (m)": 342,
      "Superfície (km²)": 7.3,
      "Població": 2169
    },
    {
      "Municipi": "Ullastret",
      "Comarca": "Baix Empordà",
      "Codi": 172057,
      "Altitud (m)": 49,
      "Superfície (km²)": 11.1,
      "Població": 265
    },
    {
      "Municipi": "Ulldecona",
      "Comarca": "Montsià",
      "Codi": 431567,
      "Altitud (m)": 133,
      "Superfície (km²)": 126.9,
      "Població": 6500
    },
    {
      "Municipi": "Ulldemolins",
      "Comarca": "Priorat",
      "Codi": 431573,
      "Altitud (m)": 650,
      "Superfície (km²)": 38.2,
      "Població": 419
    },
    {
      "Municipi": "Ultramort",
      "Comarca": "Baix Empordà",
      "Codi": 172039,
      "Altitud (m)": 30,
      "Superfície (km²)": 4.4,
      "Població": 223
    },
    {
      "Municipi": "Urús",
      "Comarca": "Cerdanya",
      "Codi": 172060,
      "Altitud (m)": 1263,
      "Superfície (km²)": 17.4,
      "Població": 212
    },
    {
      "Municipi": "Vacarisses",
      "Comarca": "Vallès Occidental",
      "Codi": "082917",
      "Altitud (m)": 382,
      "Superfície (km²)": 40.7,
      "Població": 7453
    },
    {
      "Municipi": "Vajol, la",
      "Comarca": "Alt Empordà",
      "Codi": 170144,
      "Altitud (m)": 546,
      "Superfície (km²)": 4.7,
      "Població": 97
    },
    {
      "Municipi": "Vall d'en Bas, la",
      "Comarca": "Garrotxa",
      "Codi": 172076,
      "Altitud (m)": 510,
      "Superfície (km²)": 90.7,
      "Població": 3177
    },
    {
      "Municipi": "Vall de Bianya, la",
      "Comarca": "Garrotxa",
      "Codi": 172082,
      "Altitud (m)": 367,
      "Superfície (km²)": 93.6,
      "Població": 1359
    },
    {
      "Municipi": "Vall de Boí, la",
      "Comarca": "Alta Ribagorça",
      "Codi": 250432,
      "Altitud (m)": 1111,
      "Superfície (km²)": 219.5,
      "Població": 1092
    },
    {
      "Municipi": "Vall de Cardós",
      "Comarca": "Pallars Sobirà",
      "Codi": 259010,
      "Altitud (m)": 898,
      "Superfície (km²)": 56.2,
      "Població": 383
    },
    {
      "Municipi": "Vallbona d'Anoia",
      "Comarca": "Anoia",
      "Codi": "082922",
      "Altitud (m)": 289,
      "Superfície (km²)": 6.5,
      "Població": 1428
    },
    {
      "Municipi": "Vallbona de les Monges",
      "Comarca": "Urgell",
      "Codi": 252385,
      "Altitud (m)": 481,
      "Superfície (km²)": 34.1,
      "Població": 222
    },
    {
      "Municipi": "Vallcebre",
      "Comarca": "Berguedà",
      "Codi": "082938",
      "Altitud (m)": 1123,
      "Superfície (km²)": 28,
      "Població": 274
    },
    {
      "Municipi": "Vallclara",
      "Comarca": "Conca de Barberà",
      "Codi": 431589,
      "Altitud (m)": 625,
      "Superfície (km²)": 13.6,
      "Població": 95
    },
    {
      "Municipi": "Vallfogona de Balaguer",
      "Comarca": "Noguera",
      "Codi": 252402,
      "Altitud (m)": 235,
      "Superfície (km²)": 27,
      "Població": 1993
    },
    {
      "Municipi": "Vallfogona de Ripollès",
      "Comarca": "Ripollès",
      "Codi": 171707,
      "Altitud (m)": 956,
      "Superfície (km²)": 39.2,
      "Població": 222
    },
    {
      "Municipi": "Vallfogona de Riucorb",
      "Comarca": "Conca de Barberà",
      "Codi": 431592,
      "Altitud (m)": 573,
      "Superfície (km²)": 10.9,
      "Població": 93
    },
    {
      "Municipi": "Vallgorguina",
      "Comarca": "Vallès Oriental",
      "Codi": "082943",
      "Altitud (m)": 222,
      "Superfície (km²)": 22.1,
      "Població": 3208
    },
    {
      "Municipi": "Vallirana",
      "Comarca": "Baix Llobregat",
      "Codi": "082956",
      "Altitud (m)": 177,
      "Superfície (km²)": 23.9,
      "Població": 15795
    },
    {
      "Municipi": "Vall-llobrega",
      "Comarca": "Baix Empordà",
      "Codi": 172095,
      "Altitud (m)": 49,
      "Superfície (km²)": 5.5,
      "Població": 923
    },
    {
      "Municipi": "Vallmoll",
      "Comarca": "Alt Camp",
      "Codi": 431606,
      "Altitud (m)": 161,
      "Superfície (km²)": 16.7,
      "Població": 1941
    },
    {
      "Municipi": "Vallromanes",
      "Comarca": "Vallès Oriental",
      "Codi": "082969",
      "Altitud (m)": 153,
      "Superfície (km²)": 10.7,
      "Població": 2709
    },
    {
      "Municipi": "Valls",
      "Comarca": "Alt Camp",
      "Codi": 431613,
      "Altitud (m)": 215,
      "Superfície (km²)": 55.3,
      "Població": 24954
    },
    {
      "Municipi": "Valls d'Aguilar, les",
      "Comarca": "Alt Urgell",
      "Codi": 259062,
      "Altitud (m)": 669,
      "Superfície (km²)": 123.8,
      "Població": 277
    },
    {
      "Municipi": "Valls de Valira, les",
      "Comarca": "Alt Urgell",
      "Codi": 252398,
      "Altitud (m)": 740,
      "Superfície (km²)": 171.3,
      "Població": 787
    },
    {
      "Municipi": "Vandellòs i l'Hospitalet de l'Infant",
      "Comarca": "Baix Camp",
      "Codi": 431628,
      "Altitud (m)": 281,
      "Superfície (km²)": 102.7,
      "Població": 6976
    },
    {
      "Municipi": "Vansa i Fórnols, la",
      "Comarca": "Alt Urgell",
      "Codi": 259097,
      "Altitud (m)": 989,
      "Superfície (km²)": 106.1,
      "Població": 180
    },
    {
      "Municipi": "Veciana",
      "Comarca": "Anoia",
      "Codi": "082975",
      "Altitud (m)": 564,
      "Superfície (km²)": 38.9,
      "Població": 184
    },
    {
      "Municipi": "Vendrell, el",
      "Comarca": "Baix Penedès",
      "Codi": 431634,
      "Altitud (m)": 49,
      "Superfície (km²)": 36.8,
      "Població": 39685
    },
    {
      "Municipi": "Ventalló",
      "Comarca": "Alt Empordà",
      "Codi": 172109,
      "Altitud (m)": 28,
      "Superfície (km²)": 25.1,
      "Població": 909
    },
    {
      "Municipi": "Verdú",
      "Comarca": "Urgell",
      "Codi": 252424,
      "Altitud (m)": 434,
      "Superfície (km²)": 35.8,
      "Població": 885
    },
    {
      "Municipi": "Verges",
      "Comarca": "Baix Empordà",
      "Codi": 172116,
      "Altitud (m)": 23,
      "Superfície (km²)": 9.7,
      "Població": 1165
    },
    {
      "Municipi": "Vespella de Gaià",
      "Comarca": "Tarragonès",
      "Codi": 431649,
      "Altitud (m)": 191,
      "Superfície (km²)": 18,
      "Població": 495
    },
    {
      "Municipi": "Vic",
      "Comarca": "Osona",
      "Codi": "082981",
      "Altitud (m)": 484,
      "Superfície (km²)": 30.6,
      "Població": 48235
    },
    {
      "Municipi": "Vidrà",
      "Comarca": "Osona",
      "Codi": 172121,
      "Altitud (m)": 982,
      "Superfície (km²)": 34.4,
      "Població": 179
    },
    {
      "Municipi": "Vidreres",
      "Comarca": "Selva",
      "Codi": 172137,
      "Altitud (m)": 93,
      "Superfície (km²)": 48.1,
      "Població": 8452
    },
    {
      "Municipi": "Vielha e Mijaran",
      "Comarca": "Val d'Aran",
      "Codi": 252430,
      "Altitud (m)": 974,
      "Superfície (km²)": 211.7,
      "Població": 5740
    },
    {
      "Municipi": "Vilabella",
      "Comarca": "Alt Camp",
      "Codi": 431652,
      "Altitud (m)": 254,
      "Superfície (km²)": 18.2,
      "Població": 729
    },
    {
      "Municipi": "Vilabertran",
      "Comarca": "Alt Empordà",
      "Codi": 172142,
      "Altitud (m)": 19,
      "Superfície (km²)": 2.3,
      "Població": 994
    },
    {
      "Municipi": "Vilablareix",
      "Comarca": "Gironès",
      "Codi": 172155,
      "Altitud (m)": 99,
      "Superfície (km²)": 6.2,
      "Població": 3508
    },
    {
      "Municipi": "Vilada",
      "Comarca": "Berguedà",
      "Codi": "082994",
      "Altitud (m)": 757,
      "Superfície (km²)": 22.3,
      "Població": 430
    },
    {
      "Municipi": "Viladamat",
      "Comarca": "Alt Empordà",
      "Codi": 172174,
      "Altitud (m)": 13,
      "Superfície (km²)": 11.7,
      "Població": 485
    },
    {
      "Municipi": "Viladasens",
      "Comarca": "Gironès",
      "Codi": 172168,
      "Altitud (m)": 96,
      "Superfície (km²)": 15.7,
      "Població": 222
    },
    {
      "Municipi": "Viladecans",
      "Comarca": "Baix Llobregat",
      "Codi": "083015",
      "Altitud (m)": 18,
      "Superfície (km²)": 20.4,
      "Població": 66615
    },
    {
      "Municipi": "Viladecavalls",
      "Comarca": "Vallès Occidental",
      "Codi": "083008",
      "Altitud (m)": 274,
      "Superfície (km²)": 20.1,
      "Població": 7794
    },
    {
      "Municipi": "Vilademuls",
      "Comarca": "Pla de l'Estany",
      "Codi": 172180,
      "Altitud (m)": 120,
      "Superfície (km²)": 61.5,
      "Població": 838
    },
    {
      "Municipi": "Viladrau",
      "Comarca": "Osona",
      "Codi": 172207,
      "Altitud (m)": 821,
      "Superfície (km²)": 50.7,
      "Població": 1134
    },
    {
      "Municipi": "Vilafant",
      "Comarca": "Alt Empordà",
      "Codi": 172214,
      "Altitud (m)": 54,
      "Superfície (km²)": 8.4,
      "Població": 5624
    },
    {
      "Municipi": "Vilafranca del Penedès",
      "Comarca": "Alt Penedès",
      "Codi": "083054",
      "Altitud (m)": 223,
      "Superfície (km²)": 19.7,
      "Població": 40596
    },
    {
      "Municipi": "Vilagrassa",
      "Comarca": "Urgell",
      "Codi": 252445,
      "Altitud (m)": 355,
      "Superfície (km²)": 19.9,
      "Població": 624
    },
    {
      "Municipi": "Vilajuïga",
      "Comarca": "Alt Empordà",
      "Codi": 172235,
      "Altitud (m)": 31,
      "Superfície (km²)": 13.1,
      "Població": 1161
    },
    {
      "Municipi": "Vilalba dels Arcs",
      "Comarca": "Terra Alta",
      "Codi": 431750,
      "Altitud (m)": 450,
      "Superfície (km²)": 67.3,
      "Població": 626
    },
    {
      "Municipi": "Vilalba Sasserra",
      "Comarca": "Vallès Oriental",
      "Codi": "083067",
      "Altitud (m)": 200,
      "Superfície (km²)": 6.1,
      "Població": 753
    },
    {
      "Municipi": "Vilaller",
      "Comarca": "Alta Ribagorça",
      "Codi": 252458,
      "Altitud (m)": 981,
      "Superfície (km²)": 59.2,
      "Població": 510
    },
    {
      "Municipi": "Vilallonga de Ter",
      "Comarca": "Ripollès",
      "Codi": 172240,
      "Altitud (m)": 1067,
      "Superfície (km²)": 64.2,
      "Població": 401
    },
    {
      "Municipi": "Vilallonga del Camp",
      "Comarca": "Tarragonès",
      "Codi": 431665,
      "Altitud (m)": 124,
      "Superfície (km²)": 9,
      "Població": 2436
    },
    {
      "Municipi": "Vilamacolum",
      "Comarca": "Alt Empordà",
      "Codi": 172253,
      "Altitud (m)": 5,
      "Superfície (km²)": 5.6,
      "Població": 379
    },
    {
      "Municipi": "Vilamalla",
      "Comarca": "Alt Empordà",
      "Codi": 172266,
      "Altitud (m)": 45,
      "Superfície (km²)": 8.8,
      "Població": 1188
    },
    {
      "Municipi": "Vilamaniscle",
      "Comarca": "Alt Empordà",
      "Codi": 172272,
      "Altitud (m)": 169,
      "Superfície (km²)": 5.5,
      "Població": 200
    },
    {
      "Municipi": "Vilamòs",
      "Comarca": "Val d'Aran",
      "Codi": 252477,
      "Altitud (m)": 1255,
      "Superfície (km²)": 15.4,
      "Població": 173
    },
    {
      "Municipi": "Vilanant",
      "Comarca": "Alt Empordà",
      "Codi": 172288,
      "Altitud (m)": 98,
      "Superfície (km²)": 16.9,
      "Població": 411
    },
    {
      "Municipi": "Vilanova d'Escornalbou",
      "Comarca": "Baix Camp",
      "Codi": 431671,
      "Altitud (m)": 226,
      "Superfície (km²)": 17.2,
      "Població": 595
    },
    {
      "Municipi": "Vilanova de Bellpuig",
      "Comarca": "Pla d'Urgell",
      "Codi": 252483,
      "Altitud (m)": 290,
      "Superfície (km²)": 14,
      "Població": 1186
    },
    {
      "Municipi": "Vilanova de l'Aguda",
      "Comarca": "Noguera",
      "Codi": 252496,
      "Altitud (m)": 409,
      "Superfície (km²)": 53.7,
      "Població": 197
    },
    {
      "Municipi": "Vilanova de la Barca",
      "Comarca": "Segrià",
      "Codi": 252542,
      "Altitud (m)": 195,
      "Superfície (km²)": 21.6,
      "Població": 1090
    },
    {
      "Municipi": "Vilanova de Meià",
      "Comarca": "Noguera",
      "Codi": 252509,
      "Altitud (m)": 633,
      "Superfície (km²)": 105.2,
      "Població": 444
    },
    {
      "Municipi": "Vilanova de Prades",
      "Comarca": "Conca de Barberà",
      "Codi": 431687,
      "Altitud (m)": 893,
      "Superfície (km²)": 21.5,
      "Població": 114
    },
    {
      "Municipi": "Vilanova de Sau",
      "Comarca": "Osona",
      "Codi": "083036",
      "Altitud (m)": 558,
      "Superfície (km²)": 58.8,
      "Població": 309
    },
    {
      "Municipi": "Vilanova de Segrià",
      "Comarca": "Segrià",
      "Codi": 252516,
      "Altitud (m)": 255,
      "Superfície (km²)": 8.5,
      "Població": 1044
    },
    {
      "Municipi": "Vilanova del Camí",
      "Comarca": "Anoia",
      "Codi": "083020",
      "Altitud (m)": 302,
      "Superfície (km²)": 10.3,
      "Població": 12757
    },
    {
      "Municipi": "Vilanova del Vallès",
      "Comarca": "Vallès Oriental",
      "Codi": "089024",
      "Altitud (m)": 91,
      "Superfície (km²)": 15.2,
      "Població": 5608
    },
    {
      "Municipi": "Vilanova i la Geltrú",
      "Comarca": "Garraf",
      "Codi": "083073",
      "Altitud (m)": 22,
      "Superfície (km²)": 34,
      "Població": 68768
    },
    {
      "Municipi": "Vilaplana",
      "Comarca": "Baix Camp",
      "Codi": 431690,
      "Altitud (m)": 366,
      "Superfície (km²)": 23.2,
      "Població": 557
    },
    {
      "Municipi": "Vila-rodona",
      "Comarca": "Alt Camp",
      "Codi": 431704,
      "Altitud (m)": 259,
      "Superfície (km²)": 33.1,
      "Població": 1365
    },
    {
      "Municipi": "Vila-sacra",
      "Comarca": "Alt Empordà",
      "Codi": 172305,
      "Altitud (m)": 16,
      "Superfície (km²)": 6,
      "Població": 799
    },
    {
      "Municipi": "Vila-sana",
      "Comarca": "Pla d'Urgell",
      "Codi": 252521,
      "Altitud (m)": 249,
      "Superfície (km²)": 19.1,
      "Població": 760
    },
    {
      "Municipi": "Vila-seca",
      "Comarca": "Tarragonès",
      "Codi": 431711,
      "Altitud (m)": 45,
      "Superfície (km²)": 21.6,
      "Població": 23459
    },
    {
      "Municipi": "Vilassar de Dalt",
      "Comarca": "Maresme",
      "Codi": "082140",
      "Altitud (m)": 142,
      "Superfície (km²)": 8.9,
      "Població": 9254
    },
    {
      "Municipi": "Vilassar de Mar",
      "Comarca": "Maresme",
      "Codi": "082191",
      "Altitud (m)": 10,
      "Superfície (km²)": 4,
      "Població": 21039
    },
    {
      "Municipi": "Vilaür",
      "Comarca": "Alt Empordà",
      "Codi": 172229,
      "Altitud (m)": 65,
      "Superfície (km²)": 5.5,
      "Població": 168
    },
    {
      "Municipi": "Vilaverd",
      "Comarca": "Conca de Barberà",
      "Codi": 431726,
      "Altitud (m)": 269,
      "Superfície (km²)": 12.6,
      "Població": 477
    },
    {
      "Municipi": "Vilella Alta, la",
      "Comarca": "Priorat",
      "Codi": 431732,
      "Altitud (m)": 327,
      "Superfície (km²)": 5.2,
      "Població": 130
    },
    {
      "Municipi": "Vilella Baixa, la",
      "Comarca": "Priorat",
      "Codi": 431747,
      "Altitud (m)": 218,
      "Superfície (km²)": 5.6,
      "Població": 201
    },
    {
      "Municipi": "Vilobí d'Onyar",
      "Comarca": "Selva",
      "Codi": 172333,
      "Altitud (m)": 122,
      "Superfície (km²)": 32.6,
      "Població": 3269
    },
    {
      "Municipi": "Vilobí del Penedès",
      "Comarca": "Alt Penedès",
      "Codi": "083041",
      "Altitud (m)": 286,
      "Superfície (km²)": 9.3,
      "Població": 1142
    },
    {
      "Municipi": "Vilopriu",
      "Comarca": "Baix Empordà",
      "Codi": 172327,
      "Altitud (m)": 82,
      "Superfície (km²)": 16.4,
      "Població": 210
    },
    {
      "Municipi": "Vilosell, el",
      "Comarca": "Garrigues",
      "Codi": 252537,
      "Altitud (m)": 665,
      "Superfície (km²)": 18.9,
      "Població": 191
    },
    {
      "Municipi": "Vimbodí i Poblet",
      "Comarca": "Conca de Barberà",
      "Codi": 431763,
      "Altitud (m)": 496,
      "Superfície (km²)": 66.1,
      "Població": 905
    },
    {
      "Municipi": "Vinaixa",
      "Comarca": "Garrigues",
      "Codi": 252555,
      "Altitud (m)": 479,
      "Superfície (km²)": 37.6,
      "Població": 446
    },
    {
      "Municipi": "Vinebre",
      "Comarca": "Ribera d'Ebre",
      "Codi": 431779,
      "Altitud (m)": 34,
      "Superfície (km²)": 26.4,
      "Població": 410
    },
    {
      "Municipi": "Vinyols i els Arcs",
      "Comarca": "Baix Camp",
      "Codi": 431785,
      "Altitud (m)": 95,
      "Superfície (km²)": 10.8,
      "Població": 2351
    },
    {
      "Municipi": "Viver i Serrateix",
      "Comarca": "Berguedà",
      "Codi": "083089",
      "Altitud (m)": 729,
      "Superfície (km²)": 66.8,
      "Població": 174
    },
    {
      "Municipi": "Xerta",
      "Comarca": "Baix Ebre",
      "Codi": 430521,
      "Altitud (m)": 12,
      "Superfície (km²)": 32.4,
      "Població": 1161
    }
  ];

  export default geoData;