// NavLinks for the TopNavBar
export const TopNavData = [
    {
      label:"English", 
      link:"/", 
      tree:"null",
    },
    {
        label: "Order Status",
        link: "/blog",

    },
    {
        label: "Live chat",
        link: "/portfolio",

    },
    {
        label: "Join XPLR Pass™",
        link: "/join",

    },
    {
        label: "Find a Store",
        link: "/store-locator",

    },
    {
        label: "Gift Cards",
        link: "/store-locator",

    },
    {
        label: "Help",
        link: "/help",
    },
    {
        label: "Sign In",
        link: "/login",
    },
];


// NavLinks for the NavBar
export const NavBarData = [
    {
    label:"Black Friday Sale", 
    link:"/black-friday-sale", 
    img:"/blackFriday.jpg",
    tree:[
        {
            label:"Shop Sale",
            link:"/shop-sale",
            branches:null,
        },
        {
            label:"Women's Sale",
            link:"/women's-sale",
            branches:null,
        },
        {
            label:"Men's Sale",
            link:"/men's-sale",
            branches:null,
        },
        {
            label:"Kids' Sale",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Bags & Gear Sale",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Women's Footwear Sale",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Men's Footwear Sale",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Shop All Sale",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]
    },
    {
    label: "Men's",
    link: "/mens",
    img:"/catmen.jpg",
    tree:[
        {
            label:"Shop All",
            link:"/mens",
            branches:null,
        },
        {
            label:"Sale",
            link:"/mens-sale",
            branches:null,
        },
        {
            label:"Featured",
            link:null,
            branches:[
                {
                    label:"New Arrivals",
                    link:"/mens-new-arrivals",
                    branches:null
                },
                {
                    label:"Best Sellers",
                    link:"/mens-best-sellers",
                    branches:null
                },
                {
                    label:"New Arrivals",
                    link:"/mens-new-arrivals",
                    branches:null
                },
                {
                    label:"Big Sizes",
                    link:"/mens-big-sizes",
                    branches:null
                },
                {
                    label:"Gift Guide",
                    link:"/gift-guide",
                    branches:null
                },
                {
                    label:"Freeride ",
                    link:"/freeride",
                    branches:null
                }
            ],
        },
        {
            label:"Shop By Activity",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Jackets & Vests",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Fleece",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Tops",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Bottoms",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"Footwear",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"Accessories",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"Collections",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]

    },
    {
    label: "Women's",
    link: "/women",
    img:null,
    tree:[
        {
            label:"Shop Sale",
            link:"/shop-sale",
            branches:null,
        },
        {
            label:"Women's Sale",
            link:"/women's-sale",
            branches:null,
        },
        {
            label:"Men's Sale",
            link:"/men's-sale",
            branches:null,
        },
        {
            label:"Kids' Sale",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Bags & Gear Sale",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Women's Footwear Sale",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Men's Footwear Sale",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Shop All Sale",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]
    },
    {
    label: "Kids'",
    link: "/kids",
    tree:null,

    },
    {
    label: "Footwear",
    link: "/footwear",
    tree:null,

    },
    {
    label: "Bags & Gear",
    link: "bags-and-gear",
    tree:null,

    },
    {
    label: "Renewed",
    link: "renewed",
    tree:null,
    },
    {
    label: "About Us",
    link: "about-us",
    tree:null,
    },
];

// Data for the Slider section 
export const SliderData = [
    {
        img:["/catwomen.jpg","/catmen.jpg","/catkids.jpg"]
    }
]


// Data for the Categories section 
export const CategoriesData = [
    {
        label: "Women's",
        link:"/womens-scale", 
        img:"/catwomen.jpg"
    },
    {
        label: "Mens's",
        link:"/mens-scale", 
        img:"/catmen.jpg"
    },
    {
        label: "kid's",
        link:"/kids-scale", 
        img:"/catkids.jpg"
    },
    {
        label: "Accessories's",
        link:"/accessories-scale", 
        img:"/accessories.jpg"
    },
    {
        label: "Bags and Gear's",
        link:"/bags-gear-scale", 
        img:"/catbag.jpg"
    },
    {
        label: "Women's footwear",
        link:"/womens-scale", 
        img:"/catwomenshoes.jpg"
    },
    {
        label: "Men's footwear",
        link:"/men's-scale", 
        img:"/catmenshoes.jpg"
    }
]

// Slider Data



// NavLinks for the Mobile NavBar
export interface NavBarDataMobileItem {
    label: string;
    link?: string | null;
    img?: string | null;
    tree?: NavBarDataMobileItem[] | null;
    branches?: NavBarDataMobileItem[] | null;
}

export const NavBarDataMobile:NavBarDataMobileItem[] = [
    {
    label:"Black Friday Sale", 
    link:null, 
    img:"/blackFriday.jpg",
    tree:[
        {
            label:"Shop Sale",
            link:"/shop-sale",
            branches:null,
        },
        {
            label:"Women's Sale",
            link:"/women's-sale",
            branches:null,
        },
        {
            label:"Men's Sale",
            link:"/men's-sale",
            branches:null,
        },
        {
            label:"Kids' Sale",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Bags & Gear Sale",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Women's Footwear Sale",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Men's Footwear Sale",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Shop All Sale",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]
    },
    {
    label: "Men's",
    link: null,
    img:"/catmen.jpg",
    tree:[
        {
            label:"Shop All",
            link:"/mens",
            branches:null,
        },
        {
            label:"Sale",
            link:"/mens-sale",
            branches:null,
        },
        {
            label:"Featured",
            link:null,
            branches:[
                {
                    label:"New Arrivals",
                    link:"/mens-new-arrivals",
                    branches:null
                },
                {
                    label:"Best Sellers",
                    link:"/mens-best-sellers",
                    branches:null
                },
                {
                    label:"New Arrivals",
                    link:"/mens-new-arrivals",
                    branches:null
                },
                {
                    label:"Big Sizes",
                    link:"/mens-big-sizes",
                    branches:null
                },
                {
                    label:"Gift Guide",
                    link:"/gift-guide",
                    branches:null
                },
                {
                    label:"Freeride ",
                    link:"/freeride",
                    branches:null
                }
            ],
        },
        {
            label:"Shop By Activity",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Jackets & Vests",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Fleece",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Tops",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Bottoms",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"footwear",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"Accessories",
            link:"/shop-all-sale",
            branches:null,
        },
        {
            label:"Collections",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]

    },
    {
    label: "Women's",
    link: null,
    img:null,
    tree:[
        {
            label:"Shop Sale",
            link:"/shop-sale",
            branches:null,
        },
        {
            label:"Women's Sale",
            link:"/women's-sale",
            branches:null,
        },
        {
            label:"Men's Sale",
            link:"/men's-sale",
            branches:null,
        },
        {
            label:"Kids' Sale",
            link:"kid's-sale",
            branches:null,
        },
        {
            label:"Bags & Gear Sale",
            link:"/bags-and-gear-sale",
            branches:null,
        },
        {
            label:"Women's Footwear Sale",
            link:"women-footwear-sale",
            branches:null,
        },
        {
            label:"Men's Footwear Sale",
            link:"/men-footwear-sale",
            branches:null,
        },
        {
            label:"Shop All Sale",
            link:"/shop-all-sale",
            branches:null,
        }
        
        ]
    },
    {
    label: "Kids'",
    link: "/kids",
    tree:null,

    },
    {
    label: "Footwear",
    link: "/footwear",
    tree:null,

    },
    {
    label: "Bags & Gear",
    link: "bags-and-gear",
    tree:null,

    },
    {
    label: "Renewed",
    link: "renewed",
    tree:null,
    },
    {
    label: "About Us",
    link: "about-us",
    tree:null,
    },
];