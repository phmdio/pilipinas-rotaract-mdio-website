// Sample data structure for district details
// This would be populated with real data for each district

interface DistrictRepresentative {
  rotaryYear: string;
  name: string;
  dates: string;
  club?: string;
  clubName?: string;
  year?: string;
}

interface DistrictDetail {
  title: string;
  description: string;
  composition: string[];
  gallery: string[];
  representatives: DistrictRepresentative[];
  headerImage?: string;
  mainClub?: string;
  activities?: string[];
  mission?: string;
  vision?: string;
}

const districtDetails: Record<string, DistrictDetail> = {
  "3770": {
    title: "Rotaract Clubs in Eastern Northern Luzon which include the Philippine provinces of Apayao, Aurora, Batanes, Bulacan, Cagayan, Ifugao, Isabela, Kalinga, Nueva Ecija, Nueva Vizcaya, and Quirino",
    description: "District 3770 is the first Rotary International district in the Philippines in terms of numerical sequence. It may be small in numbers but through the years, it has been able to build a strong base of sturdy, passionate and competent Rotaract clubs that develop effective leaders and promote responsible citizenship.",
    activities: [
      "Club Officers Seminar and Training",
      "Rotary Youth Conference",
      "District Assembly and District Conference",
      "World Rotaract Week",
      "Sportsfest"
    ],
    mission: "District 3770 has been steadfast in pursuing vigorously the object and mission of Rotary in this side of the world. It is backed by Rotaractors who are committed to fellowship and service. Its strength is sustained by well-planned programs and activities advanced by every District Governor and District Rotaract Representative that adhere strictly to the tenets and prescriptions of Rotary International.",
    vision: "Rotaractors of the district will never stop providing quality service projects to respective communities, making positive change in the nation and creating life changing experiences to young professionals. District 3770 is willing to take a stand for world peace and understanding. It will not stop making a difference to individuals - Filipinos and Rotaractors.",
    composition: [
      "12 Community-Based Clubs",
      "8 University-Based Clubs",
      "Total Membership of over 560 Rotaractors",
      "Served over 75 communities",
      "Partnered with 15+ organizations"
    ],
    highlights: "A notable achievement for Rotaract District 3770 has been their robust implementation of the Rotary Focus Areas. For the Rotaract year 2023-2024, the district has organized over 30 projects focusing on the environment, community economic development, basic education and literacy. The Building Better Communities Initiative has gained regional recognition, with District 3770 Representatives participating in the Asia Pacific Rotaract Conference last year.",
    gallery: [
      "/public/lovable-uploads/4d99be47-042e-4607-a857-b9192a721d26.png",
      "/public/lovable-uploads/a24f0229-a045-4eb2-a9fa-a4bc8552f4d9.png",
      "/public/lovable-uploads/4d99be47-042e-4607-a857-b9192a721d26.png",
      "/public/lovable-uploads/a24f0229-a045-4eb2-a9fa-a4bc8552f4d9.png",
      "/public/lovable-uploads/4d99be47-042e-4607-a857-b9192a721d26.png",
    ],
    representatives: [
      { rotaryYear: "Rotary Year 2023-2024 | Term of Office", name: "Betsy Roanne Carmel De Silva", club: "Rotaract Club of Santa Maria", year: "RY 2005-2010", dates: "July 1, 2023 - June 30, 2024" },
      { rotaryYear: "Rotary Year 2022-2023 | Term of Office", name: "Rommel Brylle Atenza", club: "Rotaract Club of Malolos", year: "RY 2010-2011", dates: "July 1, 2022 - June 30, 2023" },
      { rotaryYear: "Rotary Year 2021-2022 | Term of Office", name: "Cherrie Rose Gallardo", club: "Rotaract Club of Santa Maria", year: "RY 2011-2012", dates: "July 1, 2021 - June 30, 2022" },
      { rotaryYear: "Rotary Year 2020-2021 | Term of Office", name: "Maria Katrina Martinez", club: "Rotaract Club of Santa Maria", year: "RY 2012-2013", dates: "July 1, 2020 - June 30, 2021" },
      { rotaryYear: "Rotary Year 2019-2020 | Term of Office", name: "Vincent Paul Perez", club: "Rotaract Club of Santa Maria", year: "RY 2013-2014", dates: "July 1, 2019 - June 30, 2020" },
      { rotaryYear: "Rotary Year 2018-2019 | Term of Office", name: "Ma. Lerrie Sy-Alvarado", club: "Rotaract Club of Malolos", year: "RY 2014-2015", dates: "July 1, 2018 - June 30, 2019" },
      { rotaryYear: "Rotary Year 2017-2018 | Term of Office", name: "Reynier Adriano", club: "Rotaract Club of Malolos", year: "RY 2015-2016", dates: "July 1, 2017 - June 30, 2018" },
      { rotaryYear: "Rotary Year 2016-2017 | Term of Office", name: "Romwel Joseph Zamora", club: "Rotaract Club of San Jose Del Monte", year: "RY 2016-2017", dates: "July 1, 2016 - June 30, 2017" },
      { rotaryYear: "Rotary Year 2015-2016 | Term of Office", name: "Neriza Glorioso", club: "Rotaract Club of Santa Maria", year: "RY 2017-2018", dates: "July 1, 2015 - June 30, 2016" },
      { rotaryYear: "Rotary Year 2014-2015 | Term of Office", name: "Manuel Joseph Franco", club: "Rotaract Club of Calumpit", year: "RY 2018-2019", dates: "July 1, 2014 - June 30, 2015" },
      { rotaryYear: "Rotary Year 2013-2014 | Term of Office", name: "Jhun Eric Baria", club: "Rotaract Club of San Jose Del Monte", year: "RY 2019-2020", dates: "July 1, 2013 - June 30, 2014" },
      { rotaryYear: "Rotary Year 2012-2013 | Term of Office", name: "Mannie Mambie", club: "Rotaract Club of San Jose Del Monte", year: "RY 2020-2021", dates: "July 1, 2012 - June 30, 2013" },
      { rotaryYear: "Rotary Year 2011-2012 | Term of Office", name: "Daniel Balubal", club: "Rotaract Club of Santiago", year: "RY 2021-2022", dates: "July 1, 2011 - June 30, 2012" }
    ],
    headerImage: "/assets/district/3770.jpeg",
    mainClub: "Biringan City"
  },
  "3780": {
    title: "Rotaract Clubs in Manila and surrounding areas",
    description: "District 3780 is known for its vibrant community of Rotaractors working in the bustling metropolitan area of Manila.",
    composition: [
      "15 Community-Based Clubs",
      "10 University-Based Clubs",
      "Total Membership of over 700 Rotaractors",
      "Served over 90 communities",
      "Partnered with 20+ organizations"
    ],
    gallery: [
      "/assets/district/3780.jpeg",
      "/assets/district/3780.jpeg",
      "/assets/district/3780.jpeg"
    ],
    representatives: [
      { rotaryYear: "Rotary Year 2023-2024 | Term of Office", name: "Ana Gonzales", dates: "July 1, 2023 - June 30, 2024" },
      { rotaryYear: "Rotary Year 2022-2023 | Term of Office", name: "Mark Lim", dates: "July 1, 2022 - June 30, 2023" },
      { rotaryYear: "Rotary Year 2021-2022 | Term of Office", name: "Rachel Castro", dates: "July 1, 2021 - June 30, 2022" },
      { rotaryYear: "Rotary Year 2020-2021 | Term of Office", name: "David Santos", dates: "July 1, 2020 - June 30, 2021" },
      { rotaryYear: "Rotary Year 2019-2020 | Term of Office", name: "Michelle Tan", dates: "July 1, 2019 - June 30, 2020" }
    ],
    headerImage: "/assets/district/3780.jpeg",  
    mainClub: "Makati Central"
  }
};

// Add more detailed data for other districts
["3790", "3800", "3810", "3820", "3830", "3850", "3860", "3870"].forEach(id => {
  if (!districtDetails[id]) {
    let districtInfo = {
      title: "",
      description: "",
      composition: [],
      mainClub: ""
    };

    switch(id) {
      case "3790":
        districtInfo.title = "Rotaract Clubs in North Luzon";
        districtInfo.description = "District 3790 encompasses the northern provinces of Luzon, known for their rich cultural heritage and agricultural communities. Rotaractors in this district focus on rural development and educational initiatives.";
        districtInfo.composition = ["14 Community-Based Clubs", "9 University-Based Clubs", "Total Membership of over 650 Rotaractors"];
        districtInfo.mainClub = "Baguio";
        break;
      case "3800":
        districtInfo.title = "Rotaract Clubs in Metro Manila Central";
        districtInfo.description = "District 3800 serves the bustling heart of Metro Manila, where Rotaractors address urban challenges through innovative service projects focused on education, health, and sustainable city development.";
        districtInfo.composition = ["18 Community-Based Clubs", "12 University-Based Clubs", "Total Membership of over 800 Rotaractors"];
        districtInfo.mainClub = "Manila";
        break;
      case "3810":
        districtInfo.title = "Rotaract Clubs in Manila Bay Area";
        districtInfo.description = "District 3810 covers the Manila Bay area and surrounding cities, where Rotaractors lead environmental conservation efforts, particularly focused on Manila Bay cleanup and sustainable coastal development.";
        districtInfo.composition = ["16 Community-Based Clubs", "8 University-Based Clubs", "Total Membership of over 720 Rotaractors"];
        districtInfo.mainClub = "Manila Bay";
        break;
      case "3820":
        districtInfo.title = "Rotaract Clubs in Southern Luzon";
        districtInfo.description = "District 3820 encompasses the southern provinces of Luzon, including parts of the Bicol Region, where Rotaractors are known for disaster preparedness initiatives and cultural preservation projects.";
        districtInfo.composition = ["13 Community-Based Clubs", "7 University-Based Clubs", "Total Membership of over 580 Rotaractors"];
        districtInfo.mainClub = "Naga";
        break;
      case "3830":
        districtInfo.title = "Rotaract Clubs in Metro Manila South";
        districtInfo.description = "District 3830 serves the southern areas of Metro Manila and nearby provinces, with Rotaractors leading professional development programs and urban poverty alleviation initiatives.";
        districtInfo.composition = ["19 Community-Based Clubs", "11 University-Based Clubs", "Total Membership of over 850 Rotaractors"];
        districtInfo.mainClub = "Makati";
        break;
      case "3850":
        districtInfo.title = "Rotaract Clubs in Western Visayas";
        districtInfo.description = "District 3850 covers the Western Visayas region, where Rotaractors implement innovative agricultural projects, cultural exchange programs, and tourism-related community development initiatives.";
        districtInfo.composition = ["12 Community-Based Clubs", "8 University-Based Clubs", "Total Membership of over 600 Rotaractors"];
        districtInfo.mainClub = "Iloilo";
        break;
      case "3860":
        districtInfo.title = "Rotaract Clubs in Central and Eastern Visayas";
        districtInfo.description = "District 3860 encompasses Central and Eastern Visayas, including Cebu and surrounding islands, where Rotaractors focus on marine conservation, tourism development, and healthcare outreach.";
        districtInfo.composition = ["15 Community-Based Clubs", "10 University-Based Clubs", "Total Membership of over 700 Rotaractors"];
        districtInfo.mainClub = "Cebu";
        break;
      case "3870":
        districtInfo.title = "Rotaract Clubs in Mindanao";
        districtInfo.description = "District 3870 serves the northern areas of Mindanao, where Rotaractors lead peace-building initiatives, cultural diversity programs, and sustainable development projects for indigenous communities.";
        districtInfo.composition = ["14 Community-Based Clubs", "9 University-Based Clubs", "Total Membership of over 620 Rotaractors"];
        districtInfo.mainClub = "Cagayan de Oro";
        break;
    }

    districtDetails[id] = {
      title: districtInfo.title,
      description: districtInfo.description,
      composition: districtInfo.composition,
      highlights: `District ${id} has implemented various successful projects focusing on the Rotary's areas of focus, creating lasting impact in their communities through youth empowerment, environmental sustainability, and community development programs.`,
      gallery: [
        `/assets/district/${id}.jpeg`,
        `/assets/district/${id}.jpeg`,
        `/assets/district/${id}.jpeg`
      ],
      representatives: [
        { rotaryYear: "Rotary Year 2023-2024 | Term of Office", name: "District Representative", club: `Rotaract Club of ${districtInfo.mainClub}`, year: "RY 2023-2024", dates: "July 1, 2023 - June 30, 2024" },
        { rotaryYear: "Rotary Year 2022-2023 | Term of Office", name: "Previous Representative", club: `Rotaract Club of ${districtInfo.mainClub}`, year: "RY 2022-2023", dates: "July 1, 2022 - June 30, 2023" },
        { rotaryYear: "Rotary Year 2021-2022 | Term of Office", name: "Past Representative", club: `Rotaract Club of ${districtInfo.mainClub}`, year: "RY 2021-2022", dates: "July 1, 2021 - June 30, 2022" }
      ],
      headerImage: `/assets/district/${id}.jpeg`,
      mainClub: districtInfo.mainClub
    };
  }
});

export const getDistrictDetail = (districtId: string): DistrictDetail => {
  return districtDetails[districtId] || {
    title: `District ${districtId}`,
    description: "This district is currently updating its information. Please check back soon for a complete profile of its activities, membership, and achievements.",
    composition: ["Community-Based Clubs", "University-Based Clubs", "Active Rotaractors"],
    highlights: "Information about district highlights and achievements coming soon.",
    gallery: [`/assets/district/default.jpeg`],
    representatives: [],
    headerImage: "/assets/district/default.jpeg",
    mainClub: "District Headquarters"
  };
};
