export interface FilterItem {
    label: string;
    tree: {
        label: string;
        color?: string; // Optional color property
    }[];
}

export const filterData: FilterItem[] = [
    {
        label: "Sort",
        tree: [
            { label: "Relevance" },
            { label: "What's New" },
            { label: "Price Low To High" },
            { label: "Price High To Low" },
            { label: "Rating" },
            { label: "Best Selling" },
        ],
    },
    {
        label: "$$$",
        tree: [
            { label: "$0 - $100 (622)" },
            { label: "$100 - $200 (347)" },
            { label: "$200 - $300 (34)" },
            { label: "$300 - $400 (7)" },
            { label: "$400 - $500 (6)" },
        ],
    },

    {
        label: "Size",
        tree: [
            { label: "XS (6) (48)" },
            { label: "S (7/8) (38)" },
            { label: "M (10) (33)" },
            { label: "L (12) (31)" },
            { label: "XL (14/16) (24)" },
            { label: "XXL (18/20) (36)" },
        ],
    },
    {
        label: "Gender",
        tree: [
            { label: "Womens (497)" },
            { label: "Mens (326)" },
            { label: "Unisex (159)" },
            { label: "Girls (42)" },
            { label: "Boys (42)" },
        ],
    },
    {
        label: "Category",
        tree: [
            { label: "Accessories (57)" },
            { label: "Backpacks (1)" },
            { label: "Bags & Totes (5)" },
            { label: "Bottoms (244)" },
            { label: "Dresses & Skirts (6)" },
            { label: "Footwear (115)" },
            { label: "Jackets (220)" },
            { label: "One-Pieces (9)" },
            { label: "Sleeping Bags (34)" },
            { label: "Tents (33)" },
            { label: "Tops (268)" },
            { label: "Vests (24)" },
        ],
    },
    {
        label: "Style",
        tree: [
            { label: "1 Person Tent (2)" },
            { label: "1/2 Zip (15)" },
            { label: "1/4 Zip (37)" },
            { label: "2 Person Tent (8)" },
            { label: "3 Person Tent (7)" },
        ],
    },
    {
        label: "color",
        tree: [
            {
                label: "Beige",
                color: "#CC9966",
            },
            {
                label: "Black",
                color: "#070707",
            },
            {
                label: "Blue",
                color: "#1106da",
            },
            {
                label: "Brown",
                color: "#452709",
            },
        ],
    },
];