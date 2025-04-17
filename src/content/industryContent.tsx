export type Industry = {
  industry: string;
  description: string;
  icon: string;
};

export const IndustryContent: Industry[] = [
  {
    industry: "Construction & Fabrication Maintenance",
    description:
      "KAVOD Engineering Services provides construction inspection & fabrication inspection services. Our capabilities include traditional NDT inspection services as well as a full range of advanced NDT services that meet the different international standards for material quality acceptance.",
    icon: "/svg/Wrench.svg",
  },
  {
    industry: "Oil & Gas",
    description:
      "KAVOD works closely with pipeline operators to provide independent non-destructive testing (NDT) for every aspect of the upstream, midstream, and downstream processes to maintain safety and regulatory compliance.",
    icon: "/svg/Drop.svg",
  },
  {
    industry: "Manufacturing & Heavy Industry",
    description:
      "From machinery components to large-scale metal structures, KAVOD's expertise in materials testing and inspection ensures manufacturing processes remain efficient, compliant, and free from defects.",
    icon: "/svg/Buildings.svg",
  },
  {
    industry: "Transportation & Infrastructure",
    description:
      "KAVOD enhances the safety and longevity of roads, bridges, and transit systems through expert welding inspections, material testing, and failure analysis, ensuring resilience in every structure.",
    icon: "/svg/Car.svg",
  },
  {
    industry: "Aerospace",
    description:
      "Our precision aviation inspection & NDT techniques can detect a variety of defects, such as material thickness flaws, welding defects, porosity, cracks, corrosion and other hard to detect defects. We employ a variety of NDT methods along with visual inspections depending on the component being tested.",
    icon: "/svg/AirplaneTakeoff.svg",
  },
  {
    industry: "Nuclear & Power Generation",
    description:
      "Energy infrastructure must be built to last. KAVOD delivers specialized testing and inspection to maintain safety, efficiency, and compliance in nuclear and power facilities, securing the future of energy production.",
    icon: "/svg/ChargingStation.svg",
  },
];
