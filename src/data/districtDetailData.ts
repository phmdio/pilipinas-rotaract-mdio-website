
// Sample data structure for district details
// This would be populated with real data for each district

interface DistrictRepresentative {
  rotaryYear: string;
  name: string;
  dates: string;
}

interface DistrictDetail {
  title: string;
  description: string;
  composition: string[];
  highlights: string;
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
      { rotaryYear: "Rotary Year 2023-2024 | Term of Office", name: "John Dela Cruz", dates: "July 1, 2023 - June 30, 2024" },
      { rotaryYear: "Rotary Year 2022-2023 | Term of Office", name: "Maria Santos", dates: "July 1, 2022 - June 30, 2023" },
      { rotaryYear: "Rotary Year 2021-2022 | Term of Office", name: "Peter Reyes", dates: "July 1, 2021 - June 30, 2022" },
      { rotaryYear: "Rotary Year 2020-2021 | Term of Office", name: "Anna Garcia", dates: "July 1, 2020 - June 30, 2021" },
      { rotaryYear: "Rotary Year 2019-2020 | Term of Office", name: "Mike Tan", dates: "July 1, 2019 - June 30, 2020" },
      { rotaryYear: "Rotary Year 2018-2019 | Term of Office", name: "Sarah Lim", dates: "July 1, 2018 - June 30, 2019" },
      { rotaryYear: "Rotary Year 2017-2018 | Term of Office", name: "James Co", dates: "July 1, 2017 - June 30, 2018" }
    ],
    headerImage: "/public/lovable-uploads/8dde7e86-fd9e-4713-9917-b37609e31f4b.png",
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
    highlights: "District 3780 has been at the forefront of urban development initiatives, addressing challenges unique to metropolitan areas through innovative service projects and collaborative efforts with various sectors.",
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
    headerImage: "/public/lovable-uploads/8dde7e86-fd9e-4713-9917-b37609e31f4b.png",
    mainClub: "Makati Central"
  }
};

// Add placeholder data for all other districts
["3790", "3800", "3810", "3820", "3830", "3850", "3860", "3870"].forEach(id => {
  if (!districtDetails[id]) {
    districtDetails[id] = {
      title: `Rotaract Clubs in District ${id}`,
      description: `District ${id} is home to numerous passionate Rotaractors dedicated to service above self.`,
      composition: [
        "Community-Based Clubs",
        "University-Based Clubs",
        "Growing membership",
        "Active community service"
      ],
      highlights: `District ${id} has implemented various successful projects focusing on the Rotary's areas of focus, creating lasting impact in their communities.`,
      gallery: [
        `/assets/district/${id}.jpeg`,
        `/assets/district/${id}.jpeg`,
        `/assets/district/${id}.jpeg`
      ],
      representatives: [
        { rotaryYear: "Rotary Year 2023-2024 | Term of Office", name: "District Representative", dates: "July 1, 2023 - June 30, 2024" },
        { rotaryYear: "Rotary Year 2022-2023 | Term of Office", name: "District Representative", dates: "July 1, 2022 - June 30, 2023" },
        { rotaryYear: "Rotary Year 2021-2022 | Term of Office", name: "District Representative", dates: "July 1, 2021 - June 30, 2022" }
      ],
      headerImage: "/public/lovable-uploads/8dde7e86-fd9e-4713-9917-b37609e31f4b.png",
      mainClub: "Local City"
    };
  }
});

export const getDistrictDetail = (districtId: string): DistrictDetail => {
  return districtDetails[districtId] || {
    title: `District ${districtId}`,
    description: "Information not available",
    composition: ["Information not available"],
    highlights: "Information not available",
    gallery: ["/assets/placeholder.svg"],
    representatives: [],
    headerImage: "/public/lovable-uploads/8dde7e86-fd9e-4713-9917-b37609e31f4b.png",
    mainClub: "Main Club"
  };
};
