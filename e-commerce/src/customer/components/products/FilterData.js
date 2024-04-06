export const color = [
  "white",
  "black",
  "red",
  "marun",
  "being",
  "pink",
  "Green",
  "yellow",
];

export const filters =[
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id:"size",
    name:"Size",
    options:[
      {value:"S",label:"S"},
      {value:"M",label:"M"},
      {value:"L",label:"L"},
    ]
  }


]

export const singleFilter = [
  {
    id: "price",
    name: "price",
    options: [
      { value: "159-399", label: "₹159-399" },
      { value: "399-499", label: "₹399-499" },
      { value: "159-599", label: "₹499-599" },
      { value: "529-699", label: "₹659-699" },
      { value: "549-799", label: "₹459-799" },
      { value: "369-999", label: "₹409-899" },
      { value: "849-1099", label: "₹559-999" },
      { value: "909-50009", label: "₹159-100000" },
    
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% And Above" },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
    ],
  },
  {
    id:"stoke",
    name:"Availability",
    options:[
      { value: "in_stoke", label: "In Stoke" },
      { value: "out_of_stoke", label: "Out Of Stoke" },
    ],
  }
];

