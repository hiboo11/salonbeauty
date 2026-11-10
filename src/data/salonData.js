export const salonInfo = {
  name: "Aina Nails",
  tagline: "Manucure & Pédicure Haute Couture à Agadir",
  address: "Av. Laayoune, Quartier Al Wifaq, Agadir 80100",
  city: "Agadir",
  postalCode: "80100",
  district: "Quartier Al Wifaq",
  phone: "+212 6 81 46 35 64",
  phoneDisplay: "06 81 46 35 64",
  phoneRaw: "212681463564",
  whatsappUrl: "https://wa.me/212681463564",
  hours: "Ouvert 7j/7 jusqu'à 22:00",
  hoursDetail: {
    weekdays: "10:00 - 22:00",
    saturday: "10:00 - 22:00",
    sunday: "10:00 - 22:00",
  },
  durationInfo: "1h à 4h selon le soin choisi",
  googleRating: 5.0,
  reviewCount: 46,
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const whyChooseUs = [
  {
    id: 1,
    title: "Note Parfaite 5.0 / 5",
    subtitle: "46 avis vérifiés Google",
    description: "Une satisfaction cliente absolue attestée par des dizaines de clientes fidèles à Agadir et de passage.",
    icon: "Award",
    badge: "100% Satisfaite"
  },
  {
    id: 2,
    title: "Hygiène & Stérilisation Médicale",
    subtitle: "Autoclave & kits à usage unique",
    description: "Tous les instruments métalliques sont stérilisés en autoclave sous sachets scellés ouverts devant vous. Limes et polissoirs à usage unique.",
    icon: "ShieldCheck",
    badge: "Norme Hospitalière"
  },
  {
    id: 3,
    title: "Prothésistes Ongulaires Expertes",
    subtitle: "Maîtrise de la Manucure Russe",
    description: "Une technique d'orfèvre avec cuticules ciselées au millimètre pour une repousse invisible pendant 3 à 4 semaines.",
    icon: "Sparkles",
    badge: "Haute Précision"
  },
  {
    id: 4,
    title: "Nail Art & Sur-Mesure Exclusif",
    subtitle: "De l'effet Glazed au Nail Art 3D",
    description: "Reproductions de modèles Pinterest, motifs personnalisés à main levée, incrustations de cristaux, effet marbre et finitions chrome miroir.",
    icon: "Palette",
    badge: "Création Artistique"
  },
  {
    id: 5,
    title: "Produits & Vernis Premium",
    subtitle: "Formules protectrices 10-Free",
    description: "Sélection des plus grandes marques internationales professionnelles non agressives pour préserver la kératine naturelle de vos ongles.",
    icon: "Gem",
    badge: "Qualité Supérieure"
  },
  {
    id: 6,
    title: "Confort Lounge & 7j/7 jusqu'à 22h",
    subtitle: "Horaires tardifs & détente",
    description: "Ambiance feutrée, thé à la menthe marocain ou café expresso offert, fauteuils spa massants pour un moment de pur lâcher-prise.",
    icon: "Clock",
    badge: "7j/7 - 22h00"
  }
];

export const serviceCategories = [
  {
    id: "manucure",
    title: "Manucure & Vernis",
    shortTitle: "Manucure",
    description: "Soins délicats de la plaque unguéale, nettoyage cuticulaire russe et poses sublimatrices.",
    icon: "Sparkles",
    services: [
      {
        id: "man-russe",
        name: "Manucure Russe Signature",
        tag: "Populaire",
        duration: "1h15",
        price: "180 DH",
        description: "Nettoyage minutieux et cuticules travaillées aux embouts diamantés. Finition nette qui prolonge la tenue du vernis.",
        features: ["Diagnostic de la plaque", "Embouts stériles diamantés", "Polissage haute brillance", "Huile nourrissante bio"]
      },
      {
        id: "man-semi",
        name: "Pose Vernis Semi-Permanent",
        tag: "Essentiel",
        duration: "1h15",
        price: "160 DH",
        description: "Application soignée d'une base protectrice, 2 couches de couleur ultra-pigmentée et top coat ultra glossy.",
        features: ["Tenue garantie 3 à 4 semaines", "Plus de 150 teintes nude & tendances", "Brillance miroir sans écaillement"]
      },
      {
        id: "man-combo",
        name: "Combo : Manucure Russe + Semi-Permanent",
        tag: "Coup de Cœur",
        duration: "1h45",
        price: "260 DH",
        description: "La prestation star chez Aina Nails. Repousse invisible pendant des semaines et couleur impeccablement posée sous cuticule.",
        features: ["Travail d'orfèvre de la cuticule", "Alignement parfait de l'apex", "Reflet lumière sans distorsion"]
      },
      {
        id: "man-french",
        name: "French Manucure Élégante / Baby Boomer",
        tag: "Intemporel",
        duration: "1h30",
        price: "220 DH",
        description: "Ligne de sourire ultra fine ou dégradé fondu délicat effet nude naturel sur base laiteuse.",
        features: ["Tracé millimétré à main levée", "Nuances nude et rosées sur-mesure", "Finition verre trempé ultra glossy"]
      },
      {
        id: "man-classique",
        name: "Manucure Soin Classique",
        tag: "Soin Naturel",
        duration: "1h00",
        price: "130 DH",
        description: "Remise en forme harmonieuse de l'ongle, bain émollient tiède, gommage doux et modelage hydratant.",
        features: ["Limage selon morphologie de la main", "Bain tiède émollient", "Massage relaxant des mains"]
      }
    ]
  },
  {
    id: "extensions",
    title: "Extensions & Prothèses",
    shortTitle: "Extensions & Gel",
    description: "Allongement sur-mesure, modelage de la forme idéale et résistance absolue sans agresser l'ongle.",
    icon: "Layers",
    services: [
      {
        id: "ext-gel",
        name: "Pose Complète Gel Sculpté (Chablon)",
        tag: "Excellence",
        duration: "2h15",
        price: "350 DH",
        description: "Extensions sur-mesure sculptées sans colle ni capsules en plastique. Rendu fin, ultra naturel et solide.",
        features: ["Technique chablon sans colle", "Création d'un apex naturel résistant", "Longueur & forme au choix"]
      },
      {
        id: "ext-acrylique",
        name: "Ongles en Acrylique Haute Résistance",
        tag: "Robuste",
        duration: "2h30",
        price: "380 DH",
        description: "Modelage renforcé poudre et liquide acrylique haute technologie. Idéal pour ongles longs ou très sollicités.",
        features: ["Tenue extrême pour ongles fragiles", "Idéal pour le rallongement long", "Structure solide et équilibrée"]
      },
      {
        id: "ext-remplissage",
        name: "Remplissage Gel / Acrylique (Entretien)",
        tag: "Entretien",
        duration: "1h45",
        price: "240 DH",
        description: "Entretien recommandé toutes les 3 à 4 semaines. Retrait de l'ancien gel, comblement de la repousse et nouvelle pose.",
        features: ["Assainissement de l'ongle", "Nouvelle architecture de l'ongle", "Nouvelle couleur ou motif au choix"]
      },
      {
        id: "ext-formes",
        name: "Formes Spécifiques Personnalisées",
        tag: "Stylisme",
        duration: "Inclus / +30min",
        price: "Sur Devis",
        description: "Sculpture géométrique selon vos mains : Amande Russe, Ballerine (Coffin), Carré Parfait, Stiletto ou Oval chic.",
        features: ["Adaptation morphologique personnalisée", "Symétrie parfaite des 10 doigts", "Finitions douces sans accroche"]
      },
      {
        id: "ext-protheses",
        name: "Faux Ongles & Prothèses Express",
        tag: "Express",
        duration: "1h30",
        price: "220 DH",
        description: "Pose complète de capsules préformées haute qualité avec renfort gel protecteur pour un événement immédiat.",
        features: ["Idéal pour soirée ou mariage express", "Tenue 2 à 3 semaines", "Finition vernis au choix"]
      }
    ]
  },
  {
    id: "nailart",
    title: "Nail Art & Stylisme",
    shortTitle: "Nail Art",
    description: "L'art sur le bout des doigts : de la tendance Hailey Bieber Chrome aux incrustations de bijoux.",
    icon: "Palette",
    services: [
      {
        id: "art-glazed",
        name: "Chrome Glazed & Effet Miroir / Perle",
        tag: "Tendance Clean Girl",
        duration: "1h30",
        price: "200 DH",
        description: "L'effet iconique Glazed Donut ou perle irisée sur base nude. Reflets lumineux subtils sous la lumière d'Agadir.",
        features: ["Poudres chrome ultra fines", "Reflets or blanc, champagne ou rose", "Top coat ultra résistant anti-rayures"]
      },
      {
        id: "art-couture",
        name: "Nail Art Haute Couture & Motifs Main Levée",
        tag: "Création Unique",
        duration: "2h00",
        price: "À partir de 280 DH",
        description: "Marbre délicat, micro-motifs floraux, feuilles d'or 24k, lignes géométriques abstraites et cristaux de Swarovski.",
        features: ["Création personnalisée sur photo ou modèle", "Strass et bijoux d'ongles scellés", "Pinceaux de précision d'artisanat"]
      },
      {
        id: "art-reparation",
        name: "Réparation d'Ongle Abîmé ou Fissuré",
        tag: "Urgence Ongle",
        duration: "20 min",
        price: "40 DH / ongle",
        description: "Sauvetage d'un ongle cassé ou fendillé grâce à un renfort en fibre de soie ou acrylgel sans recouper tous vos ongles.",
        features: ["Sauvetage invisible", "Reprise de la teinte exacte", "Solidité immédiate retrouvée"]
      },
      {
        id: "art-depose",
        name: "Dépose Douce Sécurisée & Soin Kératine",
        tag: "Santé de l'Ongle",
        duration: "45 min",
        price: "80 DH",
        description: "Retrait minutieux de gel ou semi-permanent sans ponçage agressif, suivi d'un masque fortifiant riche en vitamines.",
        features: ["Zéro douleur, zéro échauffement", "Plaque d'ongle respectée intacte", "Soin kératine fortifiant inclus"]
      }
    ]
  },
  {
    id: "pedicure",
    title: "Soins Pédicure & Spa",
    shortTitle: "Pédicure",
    description: "Une parenthèse royale pour chouchouter vos pieds, callosités adoucies et ongles vernis à la perfection.",
    icon: "Sparkles",
    services: [
      {
        id: "ped-spa",
        name: "Pédicure Spa Complète Relaxante",
        tag: "Signature Détente",
        duration: "1h30",
        price: "250 DH",
        description: "Bain bouillonnant aux sels aromatiques, traitement des callosités à la râpe douce, gommage exfoliant et massage relaxant.",
        features: ["Bain tiède aux huiles essentielles", "Élimination des peaux mortes", "Massage voûte plantaire délassant", "Pieds doux comme de la soie"]
      },
      {
        id: "ped-russe",
        name: "Pédicure Russe Soin Haute Précision",
        tag: "Précision",
        duration: "1h15",
        price: "200 DH",
        description: "Nettoyage cuticulaire complet des orteils à la ponceuse de précision. Contour ultra propre et symétrique.",
        features: ["Embouts stérilisés micro-diamant", "Correction des petits coins incarnés", "Préparation optimale pour le vernis"]
      },
      {
        id: "ped-semi",
        name: "Pose Vernis Pieds (Classique ou Semi)",
        tag: "Esthétique",
        duration: "45 min",
        price: "140 DH",
        description: "Mise en couleur éclatante avec vernis semi-permanent longue durée résistant au sable et à la piscine.",
        features: ["Sèche instantanément sous lampe UV", "Tenue jusqu'à 6 semaines", "Brillance éclatante inaltérable"]
      },
      {
        id: "ped-rituel",
        name: "Le Grand Rituel Royal Mains & Pieds",
        tag: "Expérience Ultime",
        duration: "3h30 à 4h00",
        price: "480 DH",
        description: "Le soin d'exception Aina Nails combinant Manucure Russe + Pédicure Spa Complète + Poses Semi-Permanentes mains et pieds.",
        features: ["Soin global tête aux pieds", "Thé marocain et mignardises offerts", "Durée 3h30 à 4h de pur luxe", "Remise package avantageuse"]
      }
    ]
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Manucure Russe & Nude Poudré",
    category: "manucure",
    tag: "Clean Girl",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    description: "Cuticules impeccables, base laiteuse nude et reflet miroir liquide."
  },
  {
    id: 2,
    title: "French Manucure Micro Ligne Blanche",
    category: "manucure",
    tag: "Haute Couture",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    description: "Tracé ultra fin au millimètre sur base rosée naturelle translucide."
  },
  {
    id: 3,
    title: "Ongles en Gel Sculpté Forme Amande",
    category: "extensions",
    tag: "Gel Sculpté",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    description: "Chablon sans capsule, structure solide et courbe apex parfaite."
  },
  {
    id: 4,
    title: "Nail Art Glazed Donut & Reflets Or",
    category: "nailart",
    tag: "Tendance Glazed",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Poudre chromée nacrée avec fines touches de dorure 24 carats."
  },
  {
    id: 5,
    title: "Pédicure Spa & Vernis Bordeaux Glossy",
    category: "pedicure",
    tag: "Soin Pieds",
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
    description: "Pieds satinés, peau douce et vernis longue tenue étincelant."
  },
  {
    id: 6,
    title: "Baby Boomer Dégradé Pêche Rosée",
    category: "nailart",
    tag: "Baby Boomer",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
    description: "Transition douce et fondue du blanc laiteux vers un rose quartz."
  },
  {
    id: 7,
    title: "Extensions Acrylique Forme Ballerine",
    category: "extensions",
    tag: "Acrylique",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80",
    description: "Modelage symétrique et lignes franches pour un look sophistiqué."
  },
  {
    id: 8,
    title: "Soin des Cuticules & Massage Huile d'Argan",
    category: "manucure",
    tag: "Soin Agadir",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80",
    description: "Nutrition intense à l'huile d'argan pure de la région du Souss."
  }
];

export const reviewsData = [
  {
    id: 1,
    name: "Sofia Bennis",
    city: "Agadir",
    rating: 5,
    date: "Il y a 1 semaine",
    service: "Manucure Russe + Semi-Permanent",
    comment: "Franchement le meilleur salon de manucure d'Agadir ! La manucure russe est réalisée avec une précision chirurgicale, mes cuticules n'ont jamais été aussi nettes. L'hygiène est irréprochable avec des outils sous sachets scellés. Déjà 3 semaines et mon vernis n'a pas bougé d'un millimètre.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Kenza El Alami",
    city: "Agadir / Quartier Al Wifaq",
    rating: 5,
    date: "Il y a 2 semaines",
    service: "Pose Complète Gel Sculpté",
    comment: "Habitant juste à côté dans le quartier Al Wifaq, Aina Nails est devenu mon adresse incontournable. Les prothésistes sont d'une gentillesse incroyable, le thé à la menthe est délicieux et le résultat sur mes ongles en gel est ultra naturel et super solide.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Camille Dubois",
    city: "Touriste (Paris)",
    rating: 5,
    date: "Il y a 3 semaines",
    service: "Pédicure Spa + Nail Art Chrome",
    comment: "De passage en vacances à Agadir, j'ai réservé en catastrophe via WhatsApp. Réponse immédiate ! Le salon est ouvert tard jusqu'à 22h, ce qui est tellement pratique après une journée à la plage. La pédicure spa est un vrai moment de bonheur dans des fauteuils ultra confortables.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Meriem Tazi",
    city: "Agadir",
    rating: 5,
    date: "Il y a 1 mois",
    service: "Nail Art Haute Couture",
    comment: "J'avais montré une photo trouvée sur Pinterest d'un Nail Art très compliqué avec effet marbre et dorures. La prothésiste a fait exactement la même chose, voire encore plus beau ! Le niveau artistique est digne des plus grands salons parisiens.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 5,
    name: "Nadia Chraibi",
    city: "Agadir",
    rating: 5,
    date: "Il y a 1 mois",
    service: "Le Grand Rituel Royal Mains & Pieds",
    comment: "J'ai pris la formule complète de 3h30 pour mon mariage : manucure russe, pédicure spa et French baby boomer. Je me suis sentie traitée comme une reine. Un grand merci à toute l'équipe d'Aina Nails pour leur accueil chaleureux et leur perfectionnisme.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 6,
    name: "Sarah Amrani",
    city: "Agadir",
    rating: 5,
    date: "Il y a 2 mois",
    service: "Dépose & Renfort Kératine",
    comment: "Mes ongles étaient très abîmés par un autre salon. Chez Aina Nails, ils ont pris le temps de tout réparer sans douleur avec un soin profond. Aujourd'hui mes ongles sont sains, forts et sublimes. 5 étoiles amplement méritées !",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80"
  }
];

export const faqData = [
  {
    question: "Combien de temps dure une prestation chez Aina Nails ?",
    answer: "La durée varie de 1h (manucure classique ou pose vernis) à 2h15 pour des extensions gel, et jusqu'à 3h30 - 4h pour notre Grand Rituel Royal combinant mains et pieds. Nous privilégions la minutie et la perfection plutôt que la précipitation."
  },
  {
    question: "Comment réserver un créneau horaire ?",
    answer: "La prise de rendez-vous est immédiate et sans tracas via notre bouton WhatsApp (+212 6 81 46 35 64). Vous choisissez votre soin, votre jour et l'heure souhaitée, et notre équipe vous confirme la disponibilité en quelques instants."
  },
  {
    question: "Quels sont vos horaires et êtes-vous ouverts le week-end ?",
    answer: "Oui ! Aina Nails est ouvert 7 jours sur 7, de 10h00 jusqu'à 22h00 sans interruption. Idéal pour venir après vos journées de travail ou le dimanche en toute sérénité."
  },
  {
    question: "Où se situe exactement le salon à Agadir ?",
    answer: "Nous sommes situés sur l'Avenue Laayoune, dans le Quartier Al Wifaq à Agadir (Code postal 80100). Le salon est facile d'accès et dispose de places de stationnement à proximité immédiate."
  },
  {
    question: "En quoi consiste la Manucure Russe ?",
    answer: "La manucure russe est une technique haut de gamme réalisée à sec avec des embouts diamantés stérilisés. Elle permet de nettoyer le pourtour de l'ongle au plus près, permettant d'appliquer le vernis très près de la cuticule. Résultat : une repousse invisible pendant 3 à 4 semaines !"
  },
  {
    question: "Les instruments sont-ils stérilisés ?",
    answer: "L'hygiène est notre priorité absolue : nous utilisons un autoclave de qualité médicale. Chaque kit d'instruments métalliques est conditionné sous sachet stérile individuel ouvert uniquement au début de votre séance."
  }
];

export function generateWhatsAppLink({ service = "", date = "", time = "", name = "", note = "" }) {
  let message = "Bonjour Aina Nails Agadir ! ✨\n\n";
  message += "Je souhaite réserver un rendez-vous pour une prestation :\n";
  if (service) message += `💅 *Prestation :* ${service}\n`;
  if (date) message += `📅 *Date souhaitée :* ${date}\n`;
  if (time) message += `⏰ *Heure souhaitée :* ${time}\n`;
  if (name) message += `👤 *Mon nom :* ${name}\n`;
  if (note) message += `📝 *Précisions :* ${note}\n`;
  message += "\nPouvez-vous me confirmer vos disponibilités ? Merci beaucoup !";

  return `https://wa.me/212681463564?text=${encodeURIComponent(message)}`;
}