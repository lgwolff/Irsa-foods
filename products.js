const PRODUCTS = [
    {
        name: "Mayfair WoW chocolate filled biscuits",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S3a1e4645b0d84ee59e1cca029e0d3960k.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair chocday chocolate coated biscuit",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S1ef50b5393064aec91b53ad1a01b405eO.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair A1 biscuits pack of 12",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Scd89d223c8e84a3eaace4b3fbbe8232df.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair café classic khatai style biscuits 24 packs",
        price: 300,
        image: "https://static-01.daraz.pk/p/fa4318455f3b4108628ec4b214535a2b.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair Hearts Puff Pastry Sweet and Crunchy",
        price: 300,
        image: "https://static-01.daraz.pk/p/02763bfb9a7ef6579b92c97835f4d14f.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair Special Egg & Milk Cookies",
        price: 300,
        image: "https://static-01.daraz.pk/p/8206703b72cfe3375605cd7ccd36f8c9.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair zeera royale Zeera biscuits",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Sac6d4d25cd6f449f957b577a763100a0r.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Orange Flavoured Jar of 250 pieces",
        price: 600,
        image: "https://pk-live-21.slatic.net/kf/S841ea69c188e4060a471214c2a4b201cC.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Fruit Gala Jumbo mango Flavoured Chew 100Pcs Pack",
        price: 239,
        image: "https://pk-live-21.slatic.net/kf/Sdd411555a02c4a1fb4d20f463a2e86d8D.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Strawberry Flavoured Chew 100Pcs Pack",
        price: 239,
        image: "https://static-01.daraz.pk/p/07179dcbb7f3b022879d3ba34be045ff.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Green Apple Flavoured Chew 100Pcs Pack",
        price: 239,
        image: "https://static-01.daraz.pk/p/17db2a35aa50803d052cc2bc0a70a0d3.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Frooto Amrood Flavoured Candy Pack Of 50",
        price: 200,
        image: "https://static-01.daraz.pk/p/deb41e009e2e6ec33d60866b803e0fad.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Wobbly peach jelly with real fruit pulp",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Se3de2fe0c09b4b65b449653aa5c61e88g.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair creamers strawberry & creme flavor candy. pack of 60",
        price: 300,
        image: "https://static-01.daraz.pk/p/6f2f887a2be0e0d297febf3c5d8f78db.jpg",
        category: "Candeis"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Blueberry Flavoured Chew 60Pcs Pack",
        price: 300,
        image: "https://static-01.daraz.pk/p/71d02779954098b8dd516f98bad05c77.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Wobbly strawberry jelly with real fruit pulp",
        price: 300,
        image: "https://static-01.daraz.pk/p/bfc2cf25a3135810bbf09e7341f6e1b8.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair zeera royale zeera biscuits",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S729acae3b115433b8a1d921ae0bcdec1k.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Black Currant Flavoured Chew 60Pcs Pack",
        price: 300,
        image: "https://static-01.daraz.pk/p/34c8ace7b4625ba42c4f08dba689876d.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Frooto Chaska Xtreme Green Mango Flavoured Candy 100",
        price: 300,
        image: "https://static-01.daraz.pk/p/76c34289462174ea2a9aa3f6c5f67d53.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair Fruit Gala Jumbo Lychee Flavoured Chew 60Pcs Pack",
        price: 300,
        image: "https://static-01.daraz.pk/p/8bbbb56238d034f57cba3389f0de25f6.jpg",
        category: "Candies"
    },
    {
        name: "Mayfair kinnu Flavoured center filled candy pack of 60",
        price: 300,
        image: "https://static-01.daraz.pk/p/d00f1fbe69812d3c0144dc7602f22cde.jpg",
        category: "Candies"
    },
    {
        name: "LU Gala Egg biscuits pack of 10",
        price: 400,
        image: "https://static-01.daraz.pk/p/dd870693be67d5c746f8ba6cfbf9687a.jpg",
        category: "Biscuits"
    },
    {
        name: "Tiger Energy Biscuits Box Of 12",
        price: 400,
        image: "https://static-01.daraz.pk/p/834f6165fc65ddb05519ad56fc8aac9e.jpg",
        category: "Biscuits"
    },
    {
        name: "Candi original caramelized biscuits pack of 8+1 till scheme valid",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/S264de3606d214824ba8d305fd1e2e7cfH.jpg",
        category: "Biscuits"
    },
    {
        name: "Prince chocolate filled sandwich biscuits",
        price: 350,
        image: "https://pk-live-21.slatic.net/kf/S506947ffc4e64e8a9dbb527f3f94cb2ag.jpg",
        category: "Biscuits"
    },
    {
        name: "prince chocolate filled sandwich biscuits",
        price: 350,
        image: "https://static-01.daraz.pk/p/ab7f6f249c541da06fb3815253a13780.jpg",
        category: "Biscuits"
    },
    {
        name: "LU prince mini stars pack of 24",
        price: 300,
        image: "https://static-01.daraz.pk/p/194e47b55e5023e42b0ebad1dbdce9ba.jpg",
        category: "Biscuits"
    },
    {
        name: "Mini Oreo Chocolate Filled biscuits",
        price: 300,
        image: "https://static-01.daraz.pk/p/79926075d6170067cb7e224d05071e51.jpg",
        category: "Biscuits"
    },
    {
        name: "LU prince mini fingers pack of 6",
        price: 400,
        image: "https://static-01.daraz.pk/p/4e0ae9e617016b4f46e3589b2a0eb0b3.jpg",
        category: "Biscuits"
    },
    {
        name: "milcolu plain biscuits pack of 16",
        price: 300,
        image: "https://static-01.daraz.pk/p/e6409d0013c086e7cda1527c3c455871.jpg",
        category: "Biscuits"
    },
    {
        name: "prince enrobed chocolate covered sandwich biscuits",
        price: 500,
        image: "https://static-01.daraz.pk/p/a29eddd7001e5b576d368e7a488192f8.jpg",
        category: "Biscuits"
    },
    {
        name: "LU Bakery NanKhatai pack of 16",
        price: 400,
        image: "https://static-01.daraz.pk/p/2feff66bd29d083d6952731da331d9ac.jpg",
        category: "Biscuits"
    },
    {
        name: "Bakery NanKhatai biscuits pack of 6",
        price: 400,
        image: "https://static-01.daraz.pk/p/4c7a5d563125e846dc18a318a3f7b711.jpg",
        category: "Biscuits"
    },
    {
        name: "baby & baba gold diapers for baby 52 pieces 48, 44, 40",
        price: 1350,
        image: "https://static-01.daraz.pk/p/2a4a10338987263107a378603746b9d4.jpg",
        category: "Baby & Mother"
    },
    {
        name: "rani float fruit drink original pack of 24 cans",
        price: 4500,
        image: "https://static-01.daraz.pk/p/4a1639279070db44ada969ff98a6699d.jpg",
        category: "Drinks"
    },
    {
        name: "sooper classic chocolate biscuits pack of 6",
        price: 500,
        image: "https://static-01.daraz.pk/p/ad713b8b150d37c048d9aa847d26a2d4.jpg",
        category: "Biscuits"
    },
    {
        name: "masoom baby feeding bottle 125ml",
        price: 300,
        image: "https://static-01.daraz.pk/p/65caf87a5bb1f81c2767c013e1246495.jpg",
        category: "Baby & Mother"
    },
    {
        name: "hilal cupkake chocolate filled cake",
        price: 600,
        image: "https://static-01.daraz.pk/p/dae40aaad9bbdd2ddc858fec968ca41e.jpg",
        category: "Cakes"
    },
    {
        name: "Hilal kake soft vanila cake with Strawberry filling",
        price: 600,
        image: "https://static-01.daraz.pk/p/d2e9eb8e28dfaed2d1d4f6475bcefe18.jpg",
        category: "Cakes"
    },
    {
        name: "peek freans sooper soft bakes plain cake",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S5234f0b6a5ff4903a6024cab78d84c24w.jpg",
        category: "Biscuits"
    },
    {
        name: "hilal cupkake Strawberry jam filled cupcake",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S023266f6a799445d930de595b172e7476.jpg",
        category: "Cakes"
    },
    {
        name: "fruti float juice fuirt flavoured juice with real pulps",
        price: 4000,
        image: "https://static-01.daraz.pk/p/a456c676eb5fc53bd2414a15db737850.jpg",
        category: "Drinks"
    },
    {
        name: "Innovative Olys yummy chocolate filled biscuits",
        price: 300,
        image: "https://static-01.daraz.pk/p/1ef1a3d0563c2d71b45e235c95895002.jpg",
        category: "Biscuits"
    },
    {
        name: "Lotte Choco Pie Chocolate Coated Cream Filled Sandwich Pack Of 12",
        price: 520,
        image: "https://static-01.daraz.pk/p/0c76f7830a87b78a7ffc4f76e89fdfa8.jpg",
        category: "Cakes"
    },
    {
        name: "Cadbury Dairy Milk Rs.20 Pack Of 24",
        price: 580,
        image: "https://static-01.daraz.pk/p/0f3449d160d9e02ee91c328d51800d64.jpg",
        category: "Chocolates"
    },
    {
        name: "Giggly Twenty4 Caramel & Nougats filled chocolate",
        price: 400,
        image: "https://static-01.daraz.pk/p/1a27b76127b2bce53dc9b0c5bfe3d88e.jpg",
        category: "Chocolates"
    },
    {
        name: "Tapal Danedar Tea 900Gm pack",
        price: 2900,
        image: "https://static-01.daraz.pk/p/22806953e0894a89ee86fa24f353d026.jpg",
        category: "Grocery"
    },
    {
        name: "candyland bisca chocolate with caramel and biscuit",
        price: 300,
        image: "https://static-01.daraz.pk/p/0a2f3b0259ad6b0df731087229af85c2.jpg",
        category: "Chocolates"
    },
    {
        name: "bisconni chocolate chip cookies pack of 10",
        price: 300,
        image: "https://static-01.daraz.pk/p/c6f38bea188abe4f784a5f3ffdfd373f.jpg",
        category: "Biscuits"
    },
    {
        name: "bisconni chocolatto Centre filled chocolate biscuits pack of 8",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/Sac54b1811c2e4b94a2ddd8ec1c17066eC.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair A1 egg and milk biscuits pack of 8",
        price: 300,
        image: "https://static-01.daraz.pk/p/b979869b85d518d5503ac65f9277ba77.jpg",
        category: "Biscuits"
    },
    {
        name: "bisconni Chocolato Centre filled chocolate biscuits",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/Sf5165b035b6043ebaa5329d0d847ac08l.jpg",
        category: "Biscuits"
    },
    {
        name: "Cadbury bubbly chocolate pack of 24",
        price: 1800,
        image: "https://static-01.daraz.pk/p/cb754e39bd47369da6d938e0e6dfa977.jpg",
        category: "Chocolates"
    },
    {
        name: "Peek Freans Party Pik Biscuits Pack Of 6",
        price: 400,
        image: "https://static-01.daraz.pk/p/c0e418643e45eba24c61ce124b2f67ee.jpg",
        category: "Biscuits"
    },
    {
        name: "Hilal Panda Soft Cake Pack Of 10",
        price: 600,
        image: "https://static-01.daraz.pk/p/6cb37e910d41ce373036b870cc030194.jpg",
        category: "Cakes"
    },
    {
        name: "Peek Freans Peanut Pik Biscuits Pack Of 6",
        price: 500,
        image: "https://static-01.daraz.pk/p/2b6c0d90a945b398c9f281a18b0bccbc.jpg",
        category: "Biscuits"
    },
    {
        name: "Albina Double Layers Chocolate Cake Box Of 24",
        price: 1500,
        image: "https://static-01.daraz.pk/p/d4e4ac6e6284fc113abff3ec77864dc2.jpg",
        category: "Cakes"
    },
    {
        name: "Peek Freans Smile Donuts Pakck Of 6",
        price: 800,
        image: "https://static-01.daraz.pk/p/6c40afc396c3a010845661c33dc562b7.jpg",
        category: "Cakes"
    },
    {
        name: "Cadbury Eclair Pack Of 50 Eclairs",
        price: 400,
        image: "https://static-01.daraz.pk/p/fa3a19fd531c0d424b1fe0cb2bbc5ae2.jpg",
        category: "Candies"
    },
    {
        name: "Cadbury Eclair Gold pack of 45 Pieces",
        price: 600,
        image: "https://static-01.daraz.pk/p/215ff8feeb1da2ccc5fb69aa983da590.jpg",
        category: "Candies"
    },
    {
        name: "Young's Mayonnaise 45Ml 12 Pouches",
        price: 840,
        image: "https://static-01.daraz.pk/p/a672124311dd97470c8904730c702352.jpg",
        category: "Grocery"
    },
    {
        name: "Bisconni Flo Chocolate Coated Bar Box Of 11 Pack",
        price: 300,
        image: "https://static-01.daraz.pk/p/bb224757ffac230e210bf7cb287b6b0b.jpg",
        category: "Cakes"
    },
    {
        name: "Batook Cardamom Flavored Chewing Gum Pack Of 20",
        price: 800,
        image: "https://static-01.daraz.pk/p/d4482910c639c0cab52a146ffbd4dcb5.jpg",
        category: "Candies"
    },
    {
        name: "Batook Specialmint Flavored Chewing Gum Pack Of 20",
        price: 800,
        image: "https://static-01.daraz.pk/p/3d0ad1472650c021775ece1ffe06e164.jpg",
        category: "Candies"
    },
    {
        name: "Snickers Nougats With Caramel And Peanuts Filled Chocolate Bar",
        price: 5000,
        image: "https://static-01.daraz.pk/p/baba4e4c0552f6dc83908629a2cd95f4.jpg",
        category: "Chocolates"
    },
    {
        name: "Mars Nougats And Almond Covered Chocolate Bar Box Of 40",
        price: 7000,
        image: "https://static-01.daraz.pk/p/5b66e7e11df60e52aa24c2eff4d2bc27.jpg",
        category: "Chocolates"
    },
    {
        name: "Lindo Cream Plain Donut Cake Box of 24",
        price: 1900,
        image: "https://static-01.daraz.pk/p/194676a73a75b49159031d09dc561003.jpg",
        category: "Cakes"
    },
    {
        name: "Bont Cocoa Coated Peanuts Toffee",
        price: 1900,
        image: "https://static-01.daraz.pk/p/f1064ee539fe19ec9fffb233a81779f0.jpg",
        category: "Candies"
    },
    {
        name: "B&L Sponge Layer Cake Box Of 24",
        price: 1900,
        image: "https://static-01.daraz.pk/p/97af7cb15090bb43624761e3b353b61e.jpg",
        category: "Cakes"
    },
    {
        name: "Albina Cocoa Cake With Vanilla Cream Box Of 24",
        price: 1900,
        image: "https://static-01.daraz.pk/p/c9fce136929a4d46c2a3c4fbbc2da7b4.jpg",
        category: "Cakes"
    },
    {
        name: "Hiss White Chocolate like white kit kat - Fresh Stock - Irani Chocolate - Imported Chocolate - White Chocolate - Irani Kit Kat 12 pieces",
        price: 3600,
        image: "https://static-01.daraz.pk/p/fde482bd4539a7136ab3e63b921c6f40.jpg",
        category: "Chocolates"
    },
    {
        name: "BOOSTER Stimulantt Drink 12 Pcs Bottle 250ml",
        price: 1499,
        image: "https://static-01.daraz.pk/p/d41b2fc5fbf9214f61b3acd71f601314.jpg",
        category: "Drinks"
    },
    {
        name: "LU BAKERI Classic Eggs and Milk Biscuits Pack Of 8",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Sba8eeb0ff104494da41f4f368641f2d7e.jpg",
        category: "Biscuits"
    },
    {
        name: "TYPE C USB to USB OTG Adapter for Android Smartphones",
        price: 200,
        image: "https://pk-live-21.slatic.net/kf/Sdf4a587c47cc43b3abef11c779d8dc80N.jpg",
        category: "Accessories"
    },
    {
        name: "Mayfair Creamers Candy Chocolate - Pack of 60",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S010d0e3ab8c44f529b20aea9bb572864E.jpg",
        category: "Candies"
    },
    {
        name: "PEEK FREANS Rio Double Chocolate Filled Biscuits (Pack Of 6)",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/Seab6c98431f74934916c80f4152e69aaU.jpg",
        category: "Biscuits"
    },
    {
        name: "PEEK FREANS RIO Strawberry Vanilla Cream Filled Biscuits (pack of 6)",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S98133bf77122428091ff89d93cb52b54y.jpg",
        category: "Biscuits"
    },
    {
        name: "PEEK FREANS RIO Fruity Treat Chocolate Filled Biscuits (Pack Of 6)",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S6e7b691281d64b109f82fe4ce725de1cA.jpg",
        category: "Biscuits"
    },
    {
        name: "Oreo Crispy By LU Thin & Creamy Sandwich Cookies",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S1b6b949561954ad1927019fb0e0a8907l.jpg",
        category: "Biscuits"
    },
    {
        name: "LU BAKERI Butter Cookies Box Of 6 Snack Pack",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S3a570902549d42ec94abe22ae8ec7615o.jpg",
        category: "Biscuits"
    },
    {
        name: "Iphone Dual Lightning Headphone Adapter Audio Charge Dongle Jack Splitter 2in1 Charger AUX Music Earbud Adaptador Apple MFI Certified Compatible for 7 8Plus X 13 12 11 12 13 14 Pro Max Mini Xs Se",
        price: 700,
        image: "https://pk-live-21.slatic.net/kf/Sae92fc9140ab4019acc8bdd5b198ad64n.jpg",
        category: "Accessories"
    },
    {
        name: "GIGGLY Eclair Plus Center FilledChocolate Candy",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/Se645841d54564f15934bdc9e467790417.jpg",
        category: "Candies"
    },
    {
        name: "POWER FULL Energy Drink 250Ml Pack Of 24",
        price: 4900,
        image: "https://pk-live-21.slatic.net/kf/S9ee6c4fea90447bb988a825847eb5b76Y.jpg",
        category: "Drinks"
    },
    {
        name: "Boom Boom Bubble Gum Box (50 pcs)",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/S8c4ed59ad82e4b3da4cc657493b97efbR.jpg",
        category: "Candies"
    },
    {
        name: "Mini White Ultrasonic Air Humidifier Romantic Light USB Essential Oil Diffuser Car Purifier Aroma Anion Mist Maker",
        price: 700,
        image: "https://pk-live-21.slatic.net/kf/S16d4d0d3127844918c388647d1724c6aq.jpg",
        category: "Accessories"
    },
    {
        name: "LU Oreo Original Bar Pack Box Of 12",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/Se632a559858d4834b1facd69ca62c7e0A.jpg",
        category: "Biscuits"
    },
    {
        name: "WHEATABLE Sugar Free Biscuits Pack of 6/12",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/Scdebd0306adc46dcb8f2746e803af940o.jpg",
        category: "Biscuits"
    },
    {
        name: "MAYFAIR Eclair New Royal Eclair Pack Of 90",
        price: 600,
        image: "https://pk-live-21.slatic.net/kf/Scf27775adc03489aaf9b18cec73839faf.jpg",
        category: "Candies"
    },
    {
        name: "Peek Freans Choco Lava Mini Half Roll Pack Of 8",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/Sb636c8c3569f411797a5c41661e5a182a.jpg",
        category: "Biscuits"
    },
    {
        name: "CANDYLAND Buttons Premium Milk Chocolate Rs:30",
        price: 400,
        image: "https://pk-live-21.slatic.net/kf/Sfcb0c8fa51924c5ea61414af61b5a9deX.jpg",
        category: "Candies"
    },
    {
        name: "INNOVATIVE Frisky Wafers Orange Flavours",
        price: 550,
        image: "https://pk-live-21.slatic.net/kf/S87b67e2cf44b4e058fbbc7666ebf6c27h.jpg",
        category: "Biscuits"
    },
    {
        name: "INNOVATIVE Frisky Rolls Hazelnut/ Milk/ chocolate Pack Of 2",
        price: 550,
        image: "https://pk-live-21.slatic.net/kf/S3ba7105fac6d42e5b80846d49be728e9z.jpg",
        category: "Biscuits"
    },
    {
        name: "INNOVATIVE Frisky Wafers Strawberry Flavours",
        price: 550,
        image: "https://pk-live-21.slatic.net/kf/S31bfdb62f2c4415ba976805af519d545o.jpg",
        category: "Biscuits"
    },
    {
        name: "INNOVATIVE Frisky Wafers Chocolate Flavours",
        price: 550,
        image: "https://pk-live-21.slatic.net/kf/S31a0fb8733db4adabfc702d0334db695p.jpg",
        category: "Biscuits"
    },
    {
        name: "INNOVATIVE Bricklane Chocolate 50gm Pack Of 3",
        price: 450,
        image: "https://pk-live-21.slatic.net/kf/S5804be531125445e8bb940c82dcf274f6.jpg",
        category: "Chocolates"
    },
    {
        name: "belVita Kleija With Cardamom Biscuit 62g - Pack of 12",
        price: 999,
        image: "https://pk-live-21.slatic.net/kf/S91ca182ec07a4fedbb1402c6d38ba320y.jpg",
        category: "Biscuits"
    },
    {
        name: "Belvita Bran Rich In Fibre Biscuits 62g, 12 Packs",
        price: 999,
        image: "https://pk-live-21.slatic.net/kf/Sbadf31b43f5c42e59fe4b640630421dfQ.jpg",
        category: "Biscuits"
    },
    {
        name: "Mayfair Chaska Xtreme New Flavour Chaska Amrood 100 pcs",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Sc192c74a2b9446ebb791e5fadc91a77aR.jpg",
        category: "Candies"
    },
    {
        name: "OREO Mini Chocolate Munch Pack 100 G Each Pack",
        price: 499,
        image: "https://pk-live-21.slatic.net/kf/S625b836e7cdf4570822ccf4884d984b0F.jpg",
        category: "Biscuits"
    },
    {
        name: "Pack Of 100 balloons Multicolor huge size",
        price: 480,
        image: "https://pk-live-21.slatic.net/kf/Sbee1313817b1412dac49edffe71a65ccA.jpg",
        category: "Baby & Mother"
    },
    {
        name: "INNOVATIVE Bittens Chocolate 35gm Smooth Chocolate",
        price: 499,
        image: "https://pk-live-21.slatic.net/kf/S60e6e8afd8f14fe389b4acbd88e8d035S.jpg",
        category: "Chocolates"
    },
    {
        name: "Custom Items Box Filled With Your Needs",
        price: 9999,
        image: "https://pk-live-21.slatic.net/kf/S8dab9fc5512a47bf93fa3b424ed7e24dW.jpg",
        category: "Gifts"
    },
    {
        name: "BIRTHDAY Gift Box Filled With Customer's Choice",
        price: 3999,
        image: "https://pk-live-21.slatic.net/kf/Sf8a7345d373c4c97a5f8045cd2def2bd4.jpg",
        category: "Gifts"
    },
    {
        name: "MAYFAIR Chaska Orange/amrood/green mango Flavour Candy",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Sf7d6af54c3cc493980b0fb30c491e062c.jpg",
        category: "Candies"
    },
    {
        name: "Vintage Garden Perfume For Women",
        price: 1150,
        image: "https://static-01.daraz.pk/p/0d80d9b1c84a019e3652bbca67dc77b6.jpg",
        category: "Fragrance"
    },
    {
        name: "Romantique Perfume For Women Best Perfume",
        price: 1150,
        image: "https://static-01.daraz.pk/p/dfba0d5d82a26f909e801bb35cc6059b.jpg",
        category: "Fragrance"
    },
    {
        name: "Everscent Women perfume 100ml top quality",
        price: 1150,
        image: "https://pk-live-21.slatic.net/kf/Sb9d6c11a60cc457396f487023c4b22943.jpg",
        category: "Fragrance"
    },
    {
        name: "Simple Perfume For Women 100ml",
        price: 1150,
        image: "https://static-01.daraz.pk/p/9423311109395b9366168d611cb22ab6.jpg",
        category: "Fragrance"
    },
    {
        name: "Dorall Men Perfume For Men 100ml",
        price: 1150,
        image: "https://pk-live-21.slatic.net/kf/S35616a4f47944b6abfe361810df5ddc1d.jpg",
        category: "Fragrance"
    },
    {
        name: "Red/Gold/Silver/Green Secret Perfume For Men",
        price: 1150,
        image: "https://static-01.daraz.pk/p/9e1bb742d45d34c9905c2a33f5cbf70d.jpg",
        category: "Fragrance"
    },
    {
        name: "Lady Dorall Perfume For Women 100 ml",
        price: 1150,
        image: "https://pk-live-21.slatic.net/kf/S66efea53b19948d093d2793c87f8d3688.jpg",
        category: "Fragrance"
    },
    {
        name: "KIMS Superb Chocolate Cake 25g Pack Of 12",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S17a3c5e60e2b4f5a8b964a96bb35166cl.jpg",
        category: "Biscuits"
    },
    {
        name: "GIBS Badam Cookies Rich Almond Cookies",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/Sdccdd7f09e5c4d62944c2ddead3655f3o.jpg",
        category: "Biscuits"
    },
    {
        name: "GIBS Bento Beans Eat With Joy Pack Of 12",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S562660b1e1914208960ec4565d912494U.jpg",
        category: "Candies"
    },
    {
        name: "BILI for Samsung Galaxy Note 10 Plus / Note 10 Plus 5G / Note 10 Pro Back Cover The Claw Of Devil Multicolor Liquid Silicone Phone Case Soft Square Lens Protection Phone Cases",
        price: 499,
        image: "https://pk-live-21.slatic.net/kf/Sb4e1c203f36b4e15a0259cb3cf01ea3fx.jpg",
        category: "Accessories"
    },
    {
        name: "Customised Phone Case With Photos Of Your Choice For Vivo/iphone/samsung/oppo/realmi/redmi/techno/iphone x,xr,11,12,13,14,15",
        price: 799,
        image: "https://pk-live-21.slatic.net/kf/Sa88fa304d2764209ade2b1a16cdc0d7bq.jpg",
        category: "Accessories"
    },
    {
        name: "Surprise Box With Chocolate 3 Layers Box",
        price: 3999,
        image: "https://pk-live-21.slatic.net/kf/S33382479a10045d481bc4d26b7bc9925j.jpg",
        category: "Gifts"
    },
    {
        name: "Fully Personalized Custom Spotify SoundCloud Song Acrylic Glass Plaque High Quality Keychain | Best For Anniversaries, Birthday Gifts or Special Occasions | Spotify Key Chain | Keychain Acrylic",
        price: 350,
        image: "https://pk-live-21.slatic.net/kf/S3c1a8c42ac9b4062af85d1b64c4bc90fV.jpg",
        category: "Gifts"
    },
    {
        name: "CUSTOMIZE HOLY QURAN HOLDER/REHEL",
        price: 799,
        image: "https://pk-live-21.slatic.net/kf/S3edda14c18d64b008ca4611ffb47f597D.jpg",
        category: "Gifts"
    },
    {
        name: "Cadbury Mini Fingers Chocolate pack of 12 pouches",
        price: 300,
        image: "https://pk-live-21.slatic.net/kf/S18816e60296d4ac49b734a0855cc3ebes.jpg",
        category: "Chocolates"
    },
    {
        name: "Mayfair Delight Croissant Chocolate Cream Croissant Pack Of 6",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/S0bce2b9017934b2fbf79a0baf20a3d0eb.jpg",
        category: "Cakes"
    },
    {
        name: "HIGH QUALITY 5D Fancy Nails Random Designs",
        price: 500,
        image: "https://pk-live-21.slatic.net/kf/Sde669f15d1d045aaa49c72de34af6836i.jpg",
        category: "Make-up"
    },
    {
        name: "Christine Twin Face Contouring Kit",
        price: 1699,
        image: "https://pk-live-21.slatic.net/kf/Sbbd237e01f9444c6bbb3aa5a8918aaa9y.jpg",
        category: "Make-up"
    },
    {
        name: "Cadbury Choco bakes Chocolate Filled Cookies",
        price: 600,
        image: "https://pk-live-21.slatic.net/kf/S0fe85e3ce95a4872a2c8f5c6fad10d675.jpg",
        category: "Biscuits"
    },
    {
        name: "TREPA Organic Hair Growth Oil 100%",
        price: 1150,
        image: "https://pk-live-21.slatic.net/kf/Se649c1247e024a90884b02655a69e8dei.jpg",
        category: "Personal Care"
    },
    {
        name: "BOOSTER Candy Pack of 100 Pieces",
        price: 1000,
        image: "https://pk-live-21.slatic.net/kf/S3e9532163be640d7b513665c7b15d2fdM.jpg",
        category: "Candies"
    },
    {
        name: "CADBURY Cream And Choc Chocolate Coated Biscuits",
        price: 600,
        image: "https://pk-live-21.slatic.net/kf/S1727847241df4951a27769c8dff17bceG.jpg",
        category: "Biscuits"
    },
    {
        name: "LAVASHAK Sweet and Sour 80 Pcs Deal",
        price: 1599,
        image: "https://pk-live-21.slatic.net/kf/S969790357c784c17ab513d408c0402747.jpg",
        category: "Candies"
    }
];