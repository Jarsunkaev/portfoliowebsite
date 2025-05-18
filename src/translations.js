// src/translations.js - Updated with detailed service page translations
const translations = {
  // Navbar translations (preserved)
  navbar: {
    services: {
      hu: 'Szolgáltatások',
      en: 'Services'
    },
    portfolio: {
      hu: 'Portfólió',
      en: 'Portfolio'
    },
    about: {
      hu: 'Rólunk',
      en: 'About'
    },
    contact: {
      hu: 'Kapcsolat',
      en: 'Contact'
    },
    consultation: {
      hu: 'Ingyenes Konzultáció',
      en: 'Free Consultation'
    },
    pricing: {
      hu: 'Áraink',
      en: 'Pricing'
    }
  },
  
  // Hero section translations with enhanced marketing copy (preserved)
  hero: {
    badge: {
      hu: 'Egyedi Webfejlesztés',
      en: 'Custom Web Solutions'
    },
    title: {
      hu: 'Fejlessze Vállalkozását',
      en: 'Elevate Your Business'
    },
    titleHighlight: {
      hu: 'Digitális Megoldásokkal',
      en: 'With Digital Innovation'
    },
    description: {
      hu: 'Hozzon létre hatékony online jelenlétet egyedi weboldalakkal és alkalmazásokkal, amelyek lenyűgözik az ügyfeleit és fellendítik vállalkozását.',
      en: 'Create a powerful online presence with custom websites and applications that impress your clients and drive business growth.'
    },
    clients: {
      hu: 'Már bizalmat szavaztak nekünk az <span>Egészségügy</span>, <span>Turizmus</span> és <span>Kisvállalkozások</span> területén',
      en: 'Trusted by clients in <span>Healthcare</span>, <span>Tourism</span>, and <span>Small Business</span> industries'
    },
    primaryButton: {
      hu: 'Kezdjünk Együtt',
      en: 'Let\'s Get Started'
    },
    secondaryButton: {
      hu: 'Projektek Megtekintése',
      en: 'View Projects'
    },
    element1: {
      hu: 'Mobilra Optimalizált',
      en: 'Mobile Optimized'
    },
    element2: {
      hu: 'Egyedi Fejlesztés',
      en: 'Custom Built'
    },
    element3: {
      hu: 'Modern Technológiák',
      en: 'Modern Stack'
    }
  },
  
  // Services section translations - UPDATED AND EXPANDED
  services: {
    mainTitle: { // Used from your existing services.title
      hu: 'Szolgáltatások',
      en: 'Services'
    },
    mainSubtitleAccent: { // Used from your existing services.subtitle
      hu: 'Amit Kínálunk',
      en: 'What We Offer'
    },
    overallDescription: { 
      hu: 'Csúcsminőségű digitális megoldásokat szállítunk, amelyek az Ön üzleti igényeire szabva javítják online jelenlétét és elősegítik a növekedést.',
      en: 'We deliver cutting-edge digital solutions tailored to your business needs, enhancing your online presence and driving growth.' 
    },
    keyFeatures: { 
      hu: 'Főbb Jellemzők', 
      en: 'Key Features' 
    },
    learnMore: { 
      hu: 'Tudj Meg Többet', 
      en: 'Learn More' 
    },
    categories: {
      all: { 
        hu: 'Minden Szolgáltatás', 
        en: 'All Services' 
      },
      websites: { 
        hu: 'Weboldalak', 
        en: 'Websites' 
      },
      ecommerce: { 
        hu: 'E-kereskedelem', 
        en: 'E-commerce' 
      },
      apps: { 
        hu: 'Platformok és Alkalmazások', 
        en: 'Platforms & Apps' 
      },
      general: { // Fallback category if needed
        hu: 'Általános', 
        en: 'General'
      } 
    },
    customWebDevelopment: {
      title: { 
        hu: 'Egyedi Webfejlesztés', 
        en: 'Custom Web Development' 
      },
      description: { 
        hu: 'Egyedi, nagy teljesítményű weboldalakat és webalkalmazásokat készítünk, amelyek az Ön specifikus üzleti céljaihoz és márkaidentitásához igazodnak.', 
        en: 'Crafting unique, high-performance websites and web applications tailored to your specific business goals and brand identity.' 
      },
      features: {
        responsive: { 
          hu: 'Teljesen Reszponzív Dizájn', 
          en: 'Fully Responsive Design' 
        },
        seo: { 
          hu: 'Keresőoptimalizált Struktúra', 
          en: 'SEO Optimized Structure' 
        },
        performance: { 
          hu: 'Villámgyors Teljesítmény', 
          en: 'Blazing Fast Performance' 
        },
        cmsIntegration: { 
          hu: 'CMS Integráció (pl. WordPress, Strapi)', 
          en: 'CMS Integration (e.g., WordPress, Strapi)' 
        },
        customDesign: { 
          hu: 'Testreszabott UI/UX Dizájn', 
          en: 'Tailored UI/UX Design' 
        },
        scalability: { 
          hu: 'Skálázható Architektúra', 
          en: 'Scalable Architecture' 
        }
      }
    },
    ecommerceSolutions: {
      title: { 
        hu: 'E-kereskedelmi Megoldások', 
        en: 'E-commerce Solutions' 
      },
      description: { 
        hu: 'Robusztus online áruházakat építünk, amelyek növelik az eladásokat és zökkenőmentes vásárlói élményt nyújtanak.', 
        en: 'Building robust online stores that drive sales and provide seamless customer experiences.' 
      },
      features: {
        productManagement: { 
          hu: 'Fejlett Termékmenedzsment', 
          en: 'Advanced Product Management' 
        },
        secureCheckout: { 
          hu: 'Biztonságos Fizetési Folyamat', 
          en: 'Secure Checkout Process' 
        },
        inventoryTracking: { 
          hu: 'Készletkövetés', 
          en: 'Inventory Tracking' 
        },
        shippingIntegration: { 
          hu: 'Szállítási Rendszer Integráció', 
          en: 'Shipping System Integration' 
        },
        customerAccounts: { 
          hu: 'Vásárlói Fiókok', 
          en: 'Customer Accounts' 
        },
        salesAnalytics: { 
          hu: 'Értékesítési Analitika', 
          en: 'Sales Analytics' 
        }
      }
    },
    paymentIntegration: {
      title: { 
        hu: 'Fizetési Rendszer Integráció', 
        en: 'Payment Integration' 
      },
      description: { 
        hu: 'Biztonságosan integrálunk különböző fizetési átjárókat a zökkenőmentes tranzakciók érdekében online áruházakba és alkalmazásokba.', 
        en: 'Securely integrate various payment gateways for smooth transactions in online stores and applications.' 
      },
      features: {
        multipleGateways: { 
          hu: 'Több Fizetési Átjáró (pl. Stripe, PayPal)', 
          en: 'Multiple Gateways (e.g., Stripe, PayPal)' 
        },
        subscriptionBilling: { 
          hu: 'Előfizetéses és Ismétlődő Fizetések', 
          en: 'Subscription & Recurring Billing' 
        },
        pciCompliance: { 
          hu: 'PCI DSS Kompatibilis Megoldások', 
          en: 'PCI DSS Compliant Solutions' 
        },
        multiCurrency: { 
          hu: 'Több Valuta Támogatása', 
          en: 'Multi-currency Support' 
        },
        fraudDetection: { 
          hu: 'Csalásfelderítési Eszközök', 
          en: 'Fraud Detection Tools' 
        },
        seamlessCheckout: { 
          hu: 'Zökkenőmentes Fizetési Élmény', 
          en: 'Seamless Checkout Experience' 
        }
      }
    },
    adminPlatforms: {
      title: { 
        hu: 'Admin Felületek és Irányítópultok', 
        en: 'Admin Platforms & Dashboards' 
      },
      description: { 
        hu: 'Hatékony adminisztrációs felületeket fejlesztünk az alkalmazások és adatok hatékony kezeléséhez, riportáláshoz és elemzéshez.', 
        en: 'Develop powerful admin panels for managing your application and data effectively, including reporting and analytics.' 
      },
      features: {
        userManagement: { 
          hu: 'Felhasználókezelés', 
          en: 'User Management' 
        },
        contentManagement: { 
          hu: 'Tartalomkezelő Rendszerek (CMS)', 
          en: 'Content Management Systems (CMS)' 
        },
        dataAnalytics: { 
          hu: 'Adatanalitika és Vizualizáció', 
          en: 'Data Analytics & Visualization' 
        },
        rolePermissions: { 
          hu: 'Szerepkör Alapú Jogosultságkezelés', 
          en: 'Role-based Access Control' 
        },
        reportingTools: { 
          hu: 'Egyedi Riportkészítő Eszközök', 
          en: 'Custom Reporting Tools' 
        },
        customDashboards: { 
          hu: 'Személyre Szabott Irányítópultok', 
          en: 'Personalized Dashboards' 
        }
      }
    },
    websiteMaintenance: {
      title: { 
        hu: 'Weboldal Karbantartás és Támogatás', 
        en: 'Website Maintenance & Support' 
      },
      description: { 
        hu: 'Proaktív karbantartási és támogatási szolgáltatásainkkal biztosítjuk weboldala zökkenőmentes működését és naprakészségét.', 
        en: 'Keep your website running smoothly and up-to-date with our proactive maintenance and support services.' 
      },
      features: {
        regularUpdates: { 
          hu: 'Rendszeres Szoftver- és Biztonsági Frissítések', 
          en: 'Regular Software & Security Updates' 
        },
        securityMonitoring: { 
          hu: 'Biztonsági Monitorozás és Hibajavítás', 
          en: 'Security Monitoring & Patching' 
        },
        backupSolutions: { 
          hu: 'Automatizált Mentések és Visszaállítás', 
          en: 'Automated Backups & Recovery' 
        },
        performanceOptimization: { 
          hu: 'Teljesítményoptimalizálás', 
          en: 'Performance Optimization' 
        },
        bugFixes: { 
          hu: 'Gyors Hibajavítás és Problémamegoldás', 
          en: 'Swift Bug Fixes & Troubleshooting' 
        },
        technicalSupport: { 
          hu: 'Dedikált Technikai Támogatás', 
          en: 'Dedicated Technical Support' 
        }
      }
    },
    bookingSystems: {
      title: { 
        hu: 'Foglalási és Időpontkezelő Rendszerek', 
        en: 'Booking & Reservation Systems' 
      },
      description: { 
        hu: 'Testreszabott foglalási megoldások időpontokhoz, szolgáltatásokhoz és eseményekhez, automatizált értesítésekkel és fizetési lehetőségekkel.', 
        en: 'Custom booking solutions for appointments, services, and events, with automated notifications and payment options.' 
      },
      features: {
        realTimeAvailability: { 
          hu: 'Valós Idejű Elérhetőségi Naptár', 
          en: 'Real-time Availability Calendar' 
        },
        onlinePayments: { 
          hu: 'Biztonságos Online Fizetés', 
          en: 'Secure Online Payments' 
        },
        automatedReminders: { 
          hu: 'Automatizált Email/SMS Emlékeztetők', 
          en: 'Automated Email/SMS Reminders' 
        },
        calendarSync: { 
          hu: 'Naptár Szinkronizáció (pl. Google, Outlook)', 
          en: 'Calendar Synchronization (e.g., Google, Outlook)' 
        },
        customizableForms: { 
          hu: 'Testreszabható Foglalási Űrlapok', 
          en: 'Customizable Booking Forms' 
        },
        groupBookings: { 
          hu: 'Csoportos Foglalások és Kezelés', 
          en: 'Group Bookings & Management' 
        }
      }
    },
    multilingualSites: {
      title: { 
        hu: 'Többnyelvű Weboldalak Készítése', 
        en: 'Multilingual Website Development' 
      },
      description: { 
        hu: 'Bővítse elérését olyan weboldalakkal, amelyek az ügyfelei nyelvén szólnak, teljes körű fordítási és lokalizációs támogatással.', 
        en: 'Expand your reach with websites that speak your customers\' language, including full translation and localization support.' 
      },
      features: {
        contentTranslation: { 
          hu: 'Professzionális Tartalomfordítás és Kezelés', 
          en: 'Professional Content Translation & Management' 
        },
        languageSwitcher: { 
          hu: 'Intuitív Nyelvválasztó', 
          en: 'Intuitive Language Switcher' 
        },
        localizedSEO: { 
          hu: 'Lokalizált SEO (hreflang, stb.)', 
          en: 'Localized SEO (hreflang, etc.)' 
        },
        rtlSupport: { 
          hu: 'RTL (Jobbról Balra) Nyelvi Támogatás', 
          en: 'RTL (Right-to-Left) Language Support' 
        },
        regionalFormatting: { 
          hu: 'Regionális Dátum/Szám/Valuta Formátumok', 
          en: 'Regional Date/Number/Currency Formatting' 
        },
        easyManagement: { 
          hu: 'Nyelvi Verziók Könnyű Kezelése', 
          en: 'Easy Management of Language Versions' 
        }
      }
    }
  },
  
  // Projects section translations (preserved)
  projects: {
    title: {
      hu: 'Portfólió',
      en: 'Portfolio'
    },
    subtitle: {
      hu: 'Fedezze fel legutóbbi munkáimat különböző iparágakban, valódi üzleti kihivásokra kínált egyedi megoldásokkal',
      en: 'Explore my recent work across different industries, showcasing custom solutions for real business challenges'
    },
    categories: {
      all: {
        hu: 'Összes Projekt',
        en: 'All Projects'
      },
      healthcare: {
        hu: 'Egészségügy',
        en: 'Healthcare'
      },
      tourism: {
        hu: 'Turizmus',
        en: 'Tourism'
      },
      smallBusiness: {
        hu: 'Kisvállalkozás',
        en: 'Small Business'
      },
      customFeatures: {
        hu: 'Egyedi Funkciók',
        en: 'Custom Features'
      }
    },
    challengeSolutionTitle: {
      hu: 'Kihívás & Megoldás',
      en: 'Challenge & Solution'
    },
    problemLabel: {
      hu: 'Probléma',
      en: 'Problem'
    },
    solutionLabel: {
      hu: 'Megoldás',
      en: 'Solution'
    },
    viewCaseStudyButton: {
      hu: 'Esettanulmány Megtekintése',
      en: 'View Case Study'
    },
    viewCaseStudy: {
      hu: 'Esettanulmány megtekintése',
      en: 'View Case Study'
    }
  },
  
  // Pricing section translations (preserved)
  pricing: {
    title: {
      hu: 'Árak és',
      en: 'Our'
    },
    titleHighlight: {
      hu: 'Csomagok',
      en: 'Pricing'
    },
    subtitle: {
      hu: 'Válasszon az Ön vállalkozásának megfelelő csomagot egyösszegű fizetéssel és opcionális karbantartással.',
      en: 'Choose a plan with one-time payment and optional maintenance that works best for your business.'
    },
    basicPlan: {
      hu: 'Kezdő',
      en: 'Starter'
    },
    businessPlan: {
      hu: 'Professzionális',
      en: 'Professional'
    },
    enterprisePlan: {
      hu: 'Vállalati',
      en: 'Enterprise'
    },
    popular: {
      hu: 'Legnépszerűbb',
      en: 'Most Popular'
    },
    month: {
      hu: 'hónap',
      en: 'month'
    },
    maintenance: {
      hu: 'Karbantartás',
      en: 'Maintenance'
    },
    basicDesc: {
      hu: 'Tökéletes kisebb vállalkozásoknak, akik most kezdik online jelenlétüket.',
      en: 'Perfect for small businesses just starting their online presence.'
    },
    businessDesc: {
      hu: 'Ideális növekvő vállalkozásoknak, amelyeknek fejlettebb funkciókra van szükségük.',
      en: 'Ideal for growing businesses that need more advanced features.'
    },
    enterpriseDesc: {
      hu: 'Vállalkozások számára, amelyeknek átfogó digitális megoldásokra van szükségük.',
      en: 'For businesses that need comprehensive digital solutions.'
    },
    responsive: {
      hu: 'Reszponzív Weboldal (max. 5 oldal)',
      en: 'Responsive Website (up to 5 pages)'
    },
    responsiveBusiness: {
      hu: 'Prémium Weboldal (max. 10 oldal)',
      en: 'Premium Website (up to 10 pages)'
    },
    responsiveEnterprise: {
      hu: 'Egyedi Webalkalmazás',
      en: 'Custom Web Application'
    },
    contentManagement: {
      hu: 'Alapszintű CMS integráció',
      en: 'Basic CMS Integration'
    },
    multilingualBasic: {
      hu: 'Kétnyelvű támogatás (HU/EN)',
      en: 'Bilingual Support (HU/EN)'
    },
    multilingualFull: {
      hu: 'Többnyelvű támogatás (max. 5 nyelv)',
      en: 'Multilingual Support (Up to 5 languages)'
    },
    seo: {
      hu: 'Alapszintű SEO beállítás',
      en: 'Basic SEO Setup'
    },
    seoAdvanced: {
      hu: 'Fejlett SEO optimalizálás',
      en: 'Advanced SEO Optimization'
    },
    contact: {
      hu: 'Kapcsolati űrlap',
      en: 'Contact Form' 
    },
    analytics: {
      hu: 'Google Analytics integráció',
      en: 'Google Analytics Integration'
    },
    bookingBasic: {
      hu: 'Alapszintű foglalási rendszer',
      en: 'Basic Booking System'
    },
    bookingFull: {
      hu: 'Fejlett foglalási rendszer',
      en: 'Advanced Booking System'
    },
    designRevisions: {
      hu: '2 dizájn módosítás',
      en: '2 Design Revisions'
    },
    designRevisionsPlus: {
      hu: 'Korlátlan dizájn módosítás',
      en: 'Unlimited Design Revisions'
    },
    adminDashboard: {
      hu: 'Egyedi admin felület',
      en: 'Custom Admin Dashboard'
    },
    integration: {
      hu: 'Harmadik féltől származó integrációk',
      en: 'Third-party Integrations'
    },
    training: {
      hu: 'Személyzeti képzés és dokumentáció',
      en: 'Staff Training & Documentation'
    },
    customTitle: {
      hu: 'Egyedi megoldásra van szüksége?',
      en: 'Need a Custom Solution?'
    },
    customText: {
      hu: 'Megértjük, hogy minden vállalkozásnak egyedi igényei vannak. Lépjen kapcsolatba velünk személyre szabott ajánlatért, amely az Ön speciális követelményeihez igazodik.',
      en: 'We understand that every business has unique needs. Contact us for a personalized quote tailored to your specific requirements.'
    },
    getStarted: {
      hu: 'Kezdjük el',
      en: 'Get Started'
    },
    contactUs: {
      hu: 'Kapcsolat',
      en: 'Contact Us'
    }
  },
  
  // Contact section translations (preserved)
  contact: {
    title: {
      hu: 'Kapcsolat',
      en: 'Contact'
    },
    subtitle: {
      hu: 'Lépjen Kapcsolatba Velünk',
      en: 'Get In Touch'
    },
    infoTitle: {
      hu: 'Kapcsolati Információk',
      en: 'Contact Information'
    },
    infoText: {
      hu: 'Vegye fel velem a kapcsolatot az alábbi elérhetőségeken, vagy töltse ki az űrlapot, és hamarosan válaszolok Önnek.',
      en: 'Get in touch with me using the contact information below, or fill out the form and I will get back to you soon.'
    },
    consultationTitle: {
      hu: 'Ingyenes Konzultáció',
      en: 'Free Consultation'
    },
    consultationText: {
      hu: 'Foglaljon egy 30 perces ingyenes konzultációt, hogy megbeszéljük projektjét és a lehetséges megoldásokat.',
      en: 'Book a 30-minute free consultation to discuss your project and potential solutions.'
    },
    availabilityTitle: {
      hu: 'Elérhetőség',
      en: 'Availability'
    },
    availabilityText: {
      hu: 'Általában 24 órán belül válaszolok. Sürgős esetben hívjon telefonon.',
      en: 'I typically respond within 24 hours. For urgent matters, please call.'
    },
    formTitle: {
      hu: 'Küldjön Üzenetet',
      en: 'Send a Message'
    },
    name: {
      hu: 'Név*',
      en: 'Name*'
    },
    email: {
      hu: 'Email*',
      en: 'Email*'
    },
    phone: {
      hu: 'Telefonszám',
      en: 'Phone Number'
    },
    projectType: {
      hu: 'Projekt Típusa*',
      en: 'Project Type*'
    },
    projectTypeOptions: {
      select: {
        hu: 'Válasszon Projekt Típust',
        en: 'Select Project Type'
      },
      website: {
        hu: 'Új Weboldal',
        en: 'New Website'
      },
      booking: {
        hu: 'Foglalási Rendszer',
        en: 'Booking System'
      },
      dashboard: {
        hu: 'Admin Felület',
        en: 'Admin Dashboard'
      },
      multilingual: {
        hu: 'Többnyelvű Weboldal',
        en: 'Multilingual Website'
      },
      maintenance: {
        hu: 'Weboldal Karbantartás',
        en: 'Website Maintenance'
      },
      other: {
        hu: 'Egyéb',
        en: 'Other'
      }
    },
    budget: {
      hu: 'Hozzávetőleges Költségvetés',
      en: 'Approximate Budget'
    },
    budgetOptions: {
      select: {
        hu: 'Válasszon Költségvetési Tartományt',
        en: 'Select Budget Range'
      },
      small: {
        hu: '€500 - €1,500',
        en: '€500 - €1,500'
      },
      medium: {
        hu: '€1,500 - €3,500',
        en: '€1,500 - €3,500'
      },
      large: {
        hu: '€3,500 - €7,000',
        en: '€3,500 - €7,000'
      },
      enterprise: {
        hu: '€7,000+',
        en: '€7,000+'
      },
      flexible: {
        hu: 'Rugalmas/Nem Biztos',
        en: 'Flexible/Not Sure'
      }
    },
    timeline: {
      hu: 'Kívánt Időkeret',
      en: 'Desired Timeline'
    },
    timelineOptions: {
      select: {
        hu: 'Válasszon Időkeretet',
        en: 'Select Timeline'
      },
      urgent: {
        hu: 'Sürgős (1-2 hét)',
        en: 'ASAP (1-2 weeks)'
      },
      standard: {
        hu: 'Normál (3-4 hét)',
        en: 'Standard (3-4 weeks)'
      },
      relaxed: {
        hu: 'Rugalmas (1-2 hónap)',
        en: 'Flexible (1-2 months)'
      },
      planning: {
        hu: 'Csak Tervezés',
        en: 'Just Planning Ahead'
      }
    },
    message: {
      hu: 'Projekt Részletek*',
      en: 'Project Details*'
    },
    messagePlaceholder: {
      hu: 'Kérjük, írja le projektjét, követelményeit és minden szükséges funkciót...',
      en: 'Please describe your project, requirements, and any specific features you need...'
    },
    submit: {
      hu: 'Üzenet Küldése',
      en: 'Send Message'
    },
    sending: {
      hu: 'Küldés...',
      en: 'Sending...'
    },
    successTitle: {
      hu: 'Üzenet Elküldve!',
      en: 'Message Sent!'
    },
    successText: {
      hu: 'Köszönjük, hogy kapcsolatba lépett velünk. 24-48 órán belül válaszolunk a projektjével kapcsolatban.',
      en: 'Thank you for reaching out. I\'ll get back to you within 24-48 hours to discuss your project.'
    }
  },
  
  // Footer translations (preserved)
  footer: {
    aboutText: {
      hu: 'Egyedi webes megoldásokat készítünk vállalkozásoknak, amelyek ki akarnak tűnni. Magyarországon székelve, európai ügyfeleket szolgálunk ki.',
      en: 'Creating custom web solutions for businesses that want to stand out. Based in Hungary, serving clients across Europe.'
    },
    quickLinks: {
      hu: 'Gyors Linkek',
      en: 'Quick Links'
    },
    home: {
      hu: 'Főoldal',
      en: 'Home'
    },
    services: {
      hu: 'Szolgáltatások',
      en: 'Services'
    },
    portfolio: {
      hu: 'Portfólió',
      en: 'Portfolio'
    },
    about: {
      hu: 'Rólunk',
      en: 'About'
    },
    contact: {
      hu: 'Kapcsolat',
      en: 'Contact'
    },
    pricing: {
      hu: 'Áraink',
      en: 'Pricing'
    },
    contactInfo: {
      hu: 'Kapcsolati Információk',
      en: 'Contact Information'
    },
    location: {
      hu: 'Budapest, Magyarország',
      en: 'Budapest, Hungary'
    },
    copyright: {
      hu: 'Minden jog fenntartva | Webfejlesztés & Egyedi Megoldások',
      en: 'All rights reserved | Web Development & Custom Solutions'
    },
    backToTop: {
      hu: 'Vissza a tetejére',
      en: 'Back to top'
    }
  },
  
  // About section translations (preserved)
  about: {
    title: {
      hu: 'Rólam',
      en: 'About Me'
    },
    paragraph1: {
      hu: 'Webfejlesztő vagyok, aki egyedi weboldalak és webalkalmazások készítésére specializálódott vállalkozások számára Magyarországon és Európában. Mind a front-end, mind a back-end fejlesztésben szaktudással rendelkezem, teljes digitális megoldásokat kínálva, amelyek segítenek a vállalkozásoknak kitűnni.',
      en: 'I\'m a web developer specializing in creating custom websites and web applications for businesses across Hungary and Europe. With expertise in both front-end and back-end development, I deliver complete digital solutions that help businesses stand out.'
    },
    paragraph2: {
      hu: 'Az elektromérnöki hátterem egyedi perspektívát ad a problémamegoldásban és a hatékony, jól strukturált alkalmazások építésében. Ez a technikai alap lehetővé teszi számomra, hogy olyan megoldásokat hozzak létre, amelyek nemcsak jól néznek ki, hanem kivételesen jól is teljesítenek.',
      en: 'My background in electrical engineering gives me a unique perspective on problem-solving and building efficient, well-structured applications. This technical foundation allows me to create solutions that not only look good but also perform exceptionally well.'
    },
    paragraph3: {
      hu: 'Büszke vagyok arra, hogy testreszabott megoldásokat fejlesztek különböző iparágak számára, különös szaktudással az egészségügy, turizmus és kisvállalkozási szektorokban. Legyen szó többnyelvű weboldalról, egyedi foglalási rendszerről vagy adminisztrációs vezérlőpultról, életre tudom kelteni az Ön elképzelését.',
      en: 'I take pride in developing tailored solutions for various industries, with particular expertise in healthcare, tourism, and small business sectors. Whether you need a multilingual website, a custom booking system, or an administrative dashboard, I can bring your vision to life.'
    },
    valuesTitle: {
      hu: 'Mitől vagyok különleges',
      en: 'What Sets Me Apart'
    },
    values: {
      quality: {
        title: {
          hu: 'Minőségi Kód',
          en: 'Quality Code'
        },
        description: {
          hu: 'Tiszta, jól dokumentált kód, amely tartós és könnyen karbantartható.',
          en: 'Clean, well-documented code that\'s built to last and easy to maintain.'
        }
      },
      timely: {
        title: {
          hu: 'Időben Történő Szállítás',
          en: 'Timely Delivery'
        },
        description: {
          hu: 'Projektek ütemezett szállítása, rendszeres frissítésekkel a fejlesztés során.',
          en: 'Projects delivered on schedule with regular updates throughout development.'
        }
      },
      communication: {
        title: {
          hu: 'Világos Kommunikáció',
          en: 'Clear Communication'
        },
        description: {
          hu: 'Rendszeres frissítések egyszerű nyelven, gyors válaszidőkkel.',
          en: 'Regular updates in plain language, with quick response times.'
        }
      },
      attention: {
        title: {
          hu: 'Figyelem a Részletekre',
          en: 'Attention to Detail'
        },
        description: {
          hu: 'Gondos tesztelés és csiszolás, hogy minden aspektus tökéletes legyen.',
          en: 'Careful testing and polishing to ensure every aspect is perfect.'
        }
      }
    },
    processTitle: {
      hu: 'Munkafolyamatom',
      en: 'My Work Process'
    },
    process: {
      discovery: {
        title: {
          hu: 'Megismerés',
          en: 'Discovery'
        },
        description: {
          hu: 'Vállalkozása, céljai és konkrét projektkövetelményeinek megértése.',
          en: 'Understanding your business, goals, and specific project requirements.'
        }
      },
      planning: {
        title: {
          hu: 'Tervezés',
          en: 'Planning'
        },
        description: {
          hu: 'Részletes ütemterv készítése határidőkkel, funkciókkal és műszaki specifikációkkal.',
          en: 'Creating a detailed roadmap with timeline, features, and technical specifications.'
        }
      },
      development: {
        title: {
          hu: 'Fejlesztés',
          en: 'Development'
        },
        description: {
          hu: 'Weboldalának vagy alkalmazásának elkészítése rendszeres előrehaladási frissítésekkel.',
          en: 'Building your website or application with regular progress updates.'
        }
      },
      launch: {
        title: {
          hu: 'Indítás és Támogatás',
          en: 'Launch & Support'
        },
        description: {
          hu: 'Projektje élesítése és folyamatos karbantartás biztosítása szükség szerint.',
          en: 'Going live with your project and providing ongoing maintenance as needed.'
        }
      }
    }
  }
};

export default translations;