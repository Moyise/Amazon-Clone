const products = [
  {
    name: "Samsung Galaxy S21+ Plus 5G",
    image: "/images/samsung3.png",
    images: [
      "/images/samsung3.png",
      "/images/samsung4.png",
      "/images/samsung5.png",
      "/images/samsung6.png",
      "/images/samsung.png",
      "/images/samsung2.png",
    ],
    description:
      "Pro Grade Camera: Zoom in close, take photos and videos like a pro, and capture incredible share-ready moments with our easy-to-use, multi-lens camera.",
    brand: "Samsung",
    category: "CellPhones",
    price: 999.99,
    countInStock: 4,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Apple iPhone X 64GB Smartphone - Space Gray",
    image: "/images/iphoneX1.png",
    images: [
      "/images/iphoneX1.png",
      "/images/iphoneX2.png",
      "/images/iphoneX3.png",
      "/images/iphoneX4.png",
      "/images/iphoneX5.png",
    ],
    description: "Apple iPhone X 64GB Smartphone - Space Gray - Unlocked - Refurbished",
    brand: "Apple",
    category: "CellPhones",
    price: 899.99,
    countInStock: 6,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "PlayStation DualSense Wireless Controller",
    image: "/images/ps5C.png",
    images: [
      "/images/ps5C.png",
      "/images/ps5C2.png",
      "/images/ps5C3.png",
      "/images/ps5C4.png",
      "/images/ps5C5.png",
      "/images/ps5C6.png",
    ],
    description:
      "Haptic feedback** - Feel physically responsive feedback to your in-game actions with dual actuators which replace traditional rumble motors. In your hands, these dynamic vibrations can simulate the feeling of everything from environments to the recoil of different weapons.",
    brand: "Sony",
    category: "PlayStation5",
    price: 69.99,
    countInStock: 12,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "SanDisk 128GB Ultra MicroSDXC UHS-I Memory Card with Adapter",
    image: "/images/sanDisk1.png",
    images: [
      "/images/sanDisk1.png",
      "/images/sanDisk2.png",
      "/images/sanDisk3.png",
      "/images/sanDisk4.png",
      "/images/sanDisk5.png",
      "/images/sanDisk6.png",
    ],
    description: `Ideal for Android smartphones and tablets, and MIL cameras
Up to 128GB to store even more hours of Full HD video (2). 1GB=1,000,000,000 bytes. 1TB=1,000,000,000,000 bytes. Actual user storage less. (2) Full HD (1920x1080) video support may vary based upon host device, file attributes, and other factors. See official SanDisk website.`,
    brand: "SanDisk",
    category: "Accessories",
    price: 19.99,
    countInStock: 15,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Logitech BRIO Ultra HD Webcam for Video Conferencing, Recording, and Streaming - Black",
    image: "/images/logitech1.png",
    images: [
      "/images/logitech1.png",
      "/images/logitech2.png",
      "/images/logitech3.png",
      "/images/logitech4.png",
    ],
    description: `Spectacular video quality: A premium glass lens, 4k image sensor, high dynamic range (Hdr), and autofocus deliver beautiful, true to life video
Look great in any light: Right light 3 automatically adjusts exposure and contrast to compensate for glare and backlighting. Supports multiple connection types, including USB 2.0 type a and USB 3.0 type a and C connections`,
    brand: "Logitech",
    category: "Accessories",
    price: 199.99,
    countInStock: 7,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Garmin 010-02064-00 Instinct, Rugged Outdoor Watch with GPS",
    image: "/images/watch1.png",
    images: [
      "/images/watch1.png",
      "/images/watch2.png",
      "/images/watch3.png",
      "/images/watch4.png",
      "/images/watch5.png",
    ],
    description: `Rugged GPS watch built to withstand the toughest environments
Constructed to U.S. Military standard 810G for thermal, shock and water resistance (rated to 100 meters)
Built in 3 axis compass and barometric altimeter, plus multiple global navigation satellite systems (GPS, Glonass and Galileo) support helps track in more challenging environments than GPS alone
`,
    brand: "Garmin",
    category: "GPS&Navigation",
    price: 195.99,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Garmin Fenix 6S Pro, Premium Multisport GPS Watch",
    image: "/images/garmin1.png",
    images: [
      "/images/garmin1.png",
      "/images/garmin2.png",
      "/images/garmin3.png",
      "/images/garmin4.png",
    ],
    description: `Fit for performance with rugged, sophisticated design that features an always-on 1.2” sunlight-readable display with bezels in stainless steel, titanium or diamond-like carbon (DLC) coating Enhanced estimated wrist heart rate and Pulse Ox to support advanced sleep monitoring and altitude acclimation at high elevations (this is not a medical device and is not intended for use in the diagnosis or monitoring of any medical condition)
`,
    brand: "Garmin",
    category: "GPS&Navigation",
    price: 120.99,
    countInStock: 9,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Beats Studio3 Wireless Noise Cancelling On-Ear Headphones - Apple W1 Headphone",
    image: "/images/beats1.png",
    images: [
      "/images/beats1.png",
      "/images/beats2.png",
      "/images/beats3.png",
      "/images/beats4.png",
      "/images/beats5.png",
    ],
    description: `High-performance wireless noise cancelling headphones in midnight black Compatible with iOS and Android devices. Pure adaptive noise canceling (pure ANC) actively blocks external noise Real-time Audio calibration preserves a Premium listening experience Up to 22 hours of battery life enables full-featured all-day wireless playback`,
    brand: "Beats",
    category: "Headphones",
    price: 229.99,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black",
    image: "/images/sony1.png",
    images: [
      "/images/sony1.png",
      "/images/sony2.png",
      "/images/sony3.png",
      "/images/sony4.png",
    ],
    description: `Industry-leading noise canceling with Dual Noise Sensor technology
Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo
Up to 30-hour battery life with quick charging (10 min charge for 5 hours of playback)
Touch Sensor controls to pause/play/skip tracks, control volume, activate your voice assistant, and answer phone calls`,
    brand: "Sony",
    category: "Headphones",
    price: 349.99,
    countInStock: 6,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Alienware AW3420DW NEW Curved 34 Inch WQHD 3440 X 1440 120Hz, Monitor, Lunar Light",
    image: "/images/alienware1.png",
    images: [
      "/images/alienware1.png",
      "/images/alienware2.png",
      "/images/alienware3.png",
    ],
    description: `Experience breathtaking views with a combination of immersive features
A 1900R curved, wide 21: 9 display maximizes the field of view and provides an even, consistent viewing experience
With a WQHD (3440x1440) resolution, the image is sharp and detailed delivering an immersive experience
A 120Hz refresh rate with NVIDIA G-SYNC provides buttery smooth gameplay and realism
`,
    brand: "Alienware",
    category: "Monitors",
    price: 1099.99,
    countInStock: 4,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Asus Rog Swift PG35VQ 35” Curved HDR Gaming Monitor 200Hz (3440 X 1440) 2ms G-Sync Ultimate Eye Care DisplayPort HDMI USB Aura Sync HDR10 Display HDR 1000",
    image: "/images/asus1.png",
    images: [
      "/images/asus1.png",
      "/images/asus2.png",
      "/images/asus3.png",
      "/images/asus4.png",
      "/images/asus5.png",
    ],
    description: `35" UWQHD (3440x1440) 21: 9 curved hdr gaming monitor provides an immersive panoramic gaming experience with 200hz refresh rate and 2ms (gtg) response time
Nvidia g sync ultimate technology delivers vivid realism with hdr for lifelike contrast & color, with the brightest whites & darkest blacks, that brings out details like never before
Quantum dot technology provides the cinema standard dci p3 color gamut for realistic colors and smoother gradation`,
    brand: "ASUS",
    category: "Monitors",
    price: 2499.99,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Epson Perfection V600 Color Photo, Image, Film, Negative & Document Scanner",
    image: "/images/scanner1.png",
    images: ["/images/scanner1.png", "/images/scanner2.png", "/images/scanner3.png"],
    description: `Create extraordinary enlargements from film: 6400 x 9600 dpi for enlargements up to 17 Inches x 22 Inches. Maximum Scan Area 8.5 x 11.7 inches. TPU 2.7 x 9.5 inches
Remove the appearance of dust and scratches from film: Digital ICE for Film
Remove the appearance of tears and creases from photos: Digital ICE for prints
`,
    brand: "Epson",
    category: "Scanners",
    price: 499.99,
    countInStock: 5,
    rating: 5,
    numReviews: 0,
  },
  {
    name:
      "Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistant",
    image: "/images/backpack1.png",
    images: [
      "/images/backpack1.png",
      "/images/backpack2.png",
      "/images/backpack3.png",
      "/images/backpack4.png",
    ],
    description: `One separate laptop compartment hold 15.6 Inch Laptop as well as 15 Inch,14 Inch and 13 Inch Laptop. One spacious packing compartment roomy for daily necessities,tech electronics accessories. Front compartment with many pockets, pen pockets and key fob hook, make your items organized and easier to find`,
    brand: "Matein",
    category: "LaptopAccessories",
    price: 25.99,
    countInStock: 30,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)`,
    image: "/images/seagata1.png",
    images: ["/images/seagata1.png", "/images/seagata2.png", "/images/seagata3.png"],
    description: `Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive
Designed to work with Windows or Mac computers, this external hard drive makes backup a snap just drag and drop
`,
    brand: "Seagate",
    category: "DataStorage",
    price: 62.99,
    countInStock: 30,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `ecobee4 Smart Thermostat with Built-In Alexa, Room Sensor Included`,
    image: "/images/ecobee1.png",
    images: ["/images/ecobee1.png", "/images/ecobee2.png"],
    description: `SAVE MONEY: Homeowners save up to 23% annually on heating or cooling costs, plus ecobee pays for itself in under 2 years (compared to a hold of 72 degrees).
ROOM SENSORS: Place them in the rooms that matter the most and have the temperature balanced throughout your whole home. Measuring both occupancy and temperature, sensors signal your ecobee Smart Thermostat to automatically switch to the right mode for comfort when you’re home or for savings when you’re not. One Room Sensor included, 2-pack sold separately`,
    brand: "Ecobee",
    category: "AmazonSmartHome",
    price: 279.99,
    countInStock: 2,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `Arlo Pro 2 Home Security Camera System (2 pack) with Siren, Wireless, 1080p HD, Audio, Night Vision, Compatible with Alexa`,
    image: "/images/arlo1.png",
    images: [
      "/images/arlo1.png",
      "/images/arlo2.png",
      "/images/arlo3.png",
      "/images/arlo4.png",
    ],
    description: `This Certified Refurbished product is tested and certified to look and work like new. The refurbishing process includes functionality testing, basic cleaning, inspection, and repackaging. The product ships with all relevant accessories, a minimum 90-day warranty, and may arrive in a generic box. Only select sellers who maintain a high performance bar may offer Certified Refurbished products on Amazon.com
Works with Alexa for voice control (Alexa device sold separately).
`,
    brand: "NETGEAR",
    category: "SecurityCameras",
    price: 199.99,
    countInStock: 15,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `PlayStation 4 Console - 1TB Slim Edition`,
    image: "/images/playstation41.png",
    images: [
      "/images/playstation41.png",
      "/images/playstation42.png",
      "/images/playstation43.png",
      "/images/playstation44.png",
    ],
    description: `Includes a new slim 1TB PlayStation  4 system, a matching DualShock 4 Wireless Controller.
Play online with your friends, save games online and more with PlayStation Plus membership (sold separately).
`,
    brand: "Sony",
    category: "Games",
    price: 369.99,
    countInStock: 19,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd`,
    image: "/images/xboxX1.png",
    images: [
      "/images/xboxX1.png",
      "/images/xboxX2.png",
      "/images/xboxX3.png",
      "/images/xboxX4.png",
    ],
    description: `Games play better on Xbox One X. Experience 40 percent more power than any other console
6 teraflops of graphical processing power and a 4K Blu ray player provides more immersive gaming and entertainment
Play with the greatest community of gamers on the most advanced multiplayer network
Works with all your Xbox One games and accessories
Great for 1080p screens games run smoothly, look great, and load quickly
`,
    brand: "Microsoft",
    category: "XboxSeriesX&S",
    price: 449.99,
    countInStock: 10,
    rating: 5,
    numReviews: 0,
  },
  {
    name: `Nintendo Switch with Neon Blue and Neon Red Joy‑Con`,
    image: "/images/nintendo1.png",
    images: [
      "/images/nintendo1.png",
      "/images/nintendo2.png",
      "/images/nintendo3.png",
      "/images/nintendo4.png",
    ],
    description: `3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode
6.2-inch, multi-touch capacitive touch screen
4.5-9+ Hours of Battery Life *Will vary depending on software usage conditions
Connects over Wi-Fi for multiplayer gaming; Up to 8 consoles can be connected for local wireless multiplayer
Model number: HAC-001(-01)
`,
    brand: "Nintendo",
    category: "NintendoSwitch",
    price: 320.99,
    countInStock: 20,
    rating: 5,
    numReviews: 0,
  },
];

export default products;
