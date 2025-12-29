export type Step = {
  title: string;
  fields: {
    name: string;
    label: string;
    type: "text" | "select" | "number";
    options?: string[];
  }[];
};

export const projectFormConfig: Record<string, Step[]> = {
  Residential: [
    {
      title: "Purpose",
      fields: [
        {
          name: "purpose",
          label: "Purpose",
          type: "select",
          options: [
            "Buy",
            "Sell",
            "Rent",
            "Joint Venture",
            "Property Exchange",
            "Investment",
          ],
        },
      ],
    },
    {
      title: "Property Type",
      fields: [
        {
          name: "propertyType",
          label: "Property Type",
          type: "select",
          options: [
            "Flats",
            "Villas",
            "Plots & Lands",
            "Group Housing",
            "Farmhouses",
            "Penthouses",
          ],
        },
      ],
    },
    {
      title: "Location",
      fields: [
        { name: "city", label: "City", type: "text" },
        { name: "locality", label: "Locality / Landmark", type: "text" },
      ],
    },
    {
      title: "Property & Budget",
      fields: [
        { name: "size", label: "Size (sq ft)", type: "number" },
        { name: "budget", label: "Budget Range (₹)", type: "text" },
      ],
    },
    {
      title: "Contact Info",
      fields: [
        { name: "name", label: "Full Name", type: "text" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "email", label: "Email", type: "text" },
      ],
    },
  ],

  Commercial: [
    {
      title: "Purpose",
      fields: [
        {
          name: "purpose",
          label: "Purpose",
          type: "select",
          options: [
            "Buy",
            "Sell",
            "Rent",
            "Joint Venture",
            "Property Exchange",
            "Investment",
          ],
        },
      ],
    },
    {
      title: "Type",
      fields: [
        {
          name: "commercialType",
          label: "Commercial Type",
          type: "select",
          options: [
            "Shops",
            "Showrooms",
            "Office Space",
            "Kiosk",
            "Hotels",
            "Hospitals",
            "Schools",
          ],
        },
      ],
    },
    {
      title: "Specs",
      fields: [
        { name: "area", label: "Area (sq ft)", type: "number" },
        { name: "parking", label: "Parking", type: "text" },
      ],
    },
    {
      title: "Location & Price",
      fields: [
        { name: "location", label: "Location", type: "text" },
        { name: "price", label: "Price Range", type: "text" },
      ],
    },
    {
      title: "Contact Info",
      fields: [
        { name: "name", label: "Full Name", type: "text" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "email", label: "Email", type: "text" },
      ],
    },
  ],

  Agricultural: [
    {
      title: "Purpose",
      fields: [
        { name: "purpose", label: "Purpose", type: "select", options: ["Buy", "Sell"] },
      ],
    },
    {
      title: "Land Type",
      fields: [
        { name: "landType", label: "Land Type", type: "text" },
      ],
    },
    {
      title: "Land & Facilities",
      fields: [
        { name: "area", label: "Land Area", type: "number" },
        { name: "facilities", label: "Facilities", type: "text" },
      ],
    },
    {
      title: "Location & Price",
      fields: [
        { name: "location", label: "Location", type: "text" },
        { name: "price", label: "Expected Price", type: "text" },
      ],
    },
    {
      title: "Contact Info",
      fields: [
        { name: "name", label: "Name", type: "text" },
        { name: "phone", label: "Phone", type: "text" },
      ],
    },
  ],

  Industrial: [
    {
      title: "Purpose",
      fields: [
        { name: "purpose", label: "Purpose", type: "select", options: ["Buy", "Sell", "Lease"] },
      ],
    },
    {
      title: "Property Type",
      fields: [
        {
          name: "industrialType",
          label: "Industrial Type",
          type: "select",
          options: ["Factory", "Warehouse", "Industrial Land"],
        },
      ],
    },
    {
      title: "Specs",
      fields: [
        { name: "power", label: "Power Availability", type: "text" },
        { name: "road", label: "Road Access", type: "text" },
        { name: "area", label: "Area", type: "number" },
      ],
    },
    {
      title: "Location & Price",
      fields: [
        { name: "location", label: "Location", type: "text" },
        { name: "price", label: "Price Range", type: "text" },
      ],
    },
    {
      title: "Contact Info",
      fields: [
        { name: "name", label: "Name", type: "text" },
        { name: "phone", label: "Phone", type: "text" },
      ],
    },
  ],
};
