const categories = [
    {
        id: 1,
        title: "T-shirts",
        description: "Trending T-shirts for Men's",
        imgUrl: "https://mogulclub.co.uk/wp-content/uploads/2017/03/Black-Original-T-Shirt-Model-768x1024.png",
        products: [
            {
                id: 1,
                title: "Wrangler Rodeo Cowboy T-Shirt",
                price: 300,
                image: "https://m.media-amazon.com/images/I/61rDG+kQImL._AC_UL960_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 210
                }
            },
            {
                id: 2,
                title: "Ariat USA Black Wordmark full Sleeve T-Shirt - Medium",
                price: 350,
                image: "https://m.media-amazon.com/images/I/91U3srtJeYL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 290
                }
            },
            {
                id: 3,
                title: "Ariat Liberty USA Brown Digi Camo Short Sleeve T-Shirt",
                price: 320,
                image: "https://m.media-amazon.com/images/I/71zRMNf2uvL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 50
                }
            },
            {
                id: 4,
                title: "Wrangler Buffalo Trace Kentucky Green T-Shirt",
                price: 250,
                image: "https://m.media-amazon.com/images/I/71RyQBggmbL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 150
                }
            },
            {
                id: 5,
                title: "Wrangler Buffalo Trace Dark Mash T-Shirt",
                price: 250,
                image: "https://m.media-amazon.com/images/I/612Ueesdn4L._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 4,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Cinch Cattleman's Outpost T-Shirt",
                price: 250,
                image: "https://m.media-amazon.com/images/I/51VJGDPcICL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 20
                }
            }
        ]
    },
    {
        id: 2,
        title: "Jackets",
        description: "Casual Jackets for Men's",
        imgUrl: "https://i.pinimg.com/736x/83/31/98/833198b75cf414689b9a26b4169e9051.jpg",
        products: [
            {
                id: 1,
                title: "EKLENTSON Men's Winter Jacket",
                price: 300,
                image: "https://m.media-amazon.com/images/I/61B8GLTxD1L._AC_SX679_.jpg",
                rating: {
                    rate: 3,
                    count: 210
                }
            },
            {
                id: 2,
                title: "MAGCOMSEN Men's Winter Coat Military Jacket",
                price: 350,
                image: "https://m.media-amazon.com/images/I/81YFuxY173L._AC_SX522_.jpg",
                rating: {
                    rate: 5,
                    count: 290
                }
            },
            {
                id: 3,
                title: "MAGCOMSEN Men's Winter Jacket Lined Sherpa Jacket",
                price: 320,
                image: "https://m.media-amazon.com/images/I/81habRWowZL._AC_SX466_.jpg",
                rating: {
                    rate: 3,
                    count: 50
                }
            },
            {
                id: 4,
                title: "CRYSULLY Men's Winter Casual Thicken Jacket",
                price: 250,
                image: "https://m.media-amazon.com/images/I/71QtgUCzRlL._AC_SX569_.jpg",
                rating: {
                    rate: 5,
                    count: 150
                }
            },
            {
                id: 5,
                title: "wantdo Men's Soft Shell Jackets",
                price: 250,
                image: "https://m.media-amazon.com/images/I/71aGgPemPtL._AC_SX522_.jpg",
                rating: {
                    rate: 4,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Men's Hooded Softshell Jacket",
                price: 250,
                image: "https://m.media-amazon.com/images/I/81vyvBRw1vL._AC_SX466_.jpg",
                rating: {
                    rate: 3,
                    count: 20
                }
            }
        ]
        
    },
    {
        id: 3,
        title: "Shoes",
        description: "Stylish Sneakers for Men's",
        imgUrl: "http://yesofcorsa.com/wp-content/uploads/2019/11/Male-Sneakers-Model-Desktop-Wallpaper.jpg",
        products: [
            {
                id: 1,
                title: "Feethit Mens Non Slip Walking Sneakers Lightweight Breathable Slip on Running Shoes",
                price: 300,
                image: "https://m.media-amazon.com/images/I/61-DL6P+HgL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 210
                }
            },
            {
                id: 2,
                title: "Ahico Mens Fashion Sneakers High Top Walking Shoes Sport Athletic Casual Shoe Vogue Stylish Men",
                price: 350,
                image: "https://m.media-amazon.com/images/I/61V58VibShL._AC_SY575_.jpg",
                rating: {
                    rate: 5,
                    count: 290
                }
            },
            {
                id: 3,
                title: "Feethit Mens Slip On Walking Shoes Lightweight Breathable Non Slip Running Shoes",
                price: 320,
                image: "https://m.media-amazon.com/images/I/71MUqFMkDML._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 50
                }
            },
            {
                id: 4,
                title: "Jousen Men's Fashion Sneakers High Top Dress Sneakers Boots for Men",
                price: 250,
                image: "https://m.media-amazon.com/images/I/81WTR1lXm7L._AC_SX695_.jpg",
                rating: {
                    rate: 5,
                    count: 150
                }
            },
            {
                id: 5,
                title: "Slow Man High Top Men's Sneakers",
                price: 250,
                image: "https://m.media-amazon.com/images/I/61VM2INP77L._AC_SY575_.jpg",
                rating: {
                    rate: 4,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Ben Sherman Men's Harvey Sneaker",
                price: 250,
                image: "https://m.media-amazon.com/images/I/61pzO5dMGEL._AC_SY575_.jpg",
                rating: {
                    rate: 3,
                    count: 20
                }
            }
        ]
        
    },
    {
        id: 4,
        title: "Accessories",
        description: "Accessories for Men's for every outfit",
        imgUrl: "https://lh3.googleusercontent.com/KqQDMooNHD1GsKvJvVqJkDzj1baKFMny7Ov848lXW3GzdSLSEhbOFuHjCg0DIYtVNb9ysHrKSaxWDC7Aj7ZlZRu7lqjxiq12KYYZluo=w1000",
        products: [
            {
                id: 1,
                title: "HENGOSEN Aviator Sunglasses with Carbon Fiber Temple for Men",
                price: 300,
                image: "https://m.media-amazon.com/images/I/618mOPA2lfL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 210
                }
            },
            {
                id: 2,
                title: "VOOTAI Slim Wallet for Men, Stocking Stuffers for Men",
                price: 350,
                image: "https://m.media-amazon.com/images/I/81K8DG6U3PL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 290
                }
            },
            {
                id: 3,
                title: "Syhood Winter Fleece Balaclava Ski Tactical Heavyweight Balaclava",
                price: 320,
                image: "https://m.media-amazon.com/images/I/71qLt9oXitL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 50
                }
            },
            {
                id: 4,
                title: "Neleus Men's Workout Tank Tops 3 Pack Sleeveless Running Shirts",
                price: 250,
                image: "https://m.media-amazon.com/images/I/71eeBqVibbL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 150
                }
            },
            {
                id: 5,
                title: "Mens Leather Bracelet - Mens Bracelets with Genuine Leather and 316L Magnetic Stainlness Steel Clasp",
                price: 250,
                image: "https://m.media-amazon.com/images/I/71GhLB9OVGL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 4,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Ben Sherman Men's Harvey Sneaker",
                price: 250,
                image: "https://m.media-amazon.com/images/I/51VQnIf8-xL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 20
                }
            }
        ]
    },
    {
        id: 5,
        title: "Hats",
        description: "Stylish Hats for Men's",
        imgUrl: "https://i.pinimg.com/originals/04/b3/3f/04b33f8059ce671b3569b7c4bb28f7a3.jpg",
        products: [
            {
                id: 1,
                title: "SELLORIA - Branded hat for stylish men's",
                price: 300,
                image: "https://m.media-amazon.com/images/I/41OgLEtNIxL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 210
                }
            },
            {
                id: 2,
                title: "Boldfit Boldfit Head Caps for Men",
                price: 350,
                image: "https://m.media-amazon.com/images/I/51iWJwdpjXL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 290
                }
            },
            {
                id: 3,
                title: "JAZAA - Bucket Hat for Women & Men",
                price: 320,
                image: "https://m.media-amazon.com/images/I/511bc6uY14L._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 50
                }
            },
            {
                id: 4,
                title: "ILU - Cap for Men & Women",
                price: 250,
                image: "https://m.media-amazon.com/images/I/91+yD3UV+jL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 5,
                    count: 150
                }
            },
            {
                id: 5,
                title: "UMANI - Cotton with Jute Classic Design Fedora Hats",
                price: 250,
                image: "https://m.media-amazon.com/images/I/81IfU-cueqL._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 4,
                    count: 20
                }
            },
            {
                id: 6,
                title: "Jockey - CP21 Polyester Solid Cap with Adjustable Back Closure",
                price: 250,
                image: "https://m.media-amazon.com/images/I/51hwB7uvlzS._AC_UL480_FMwebp_QL65_.jpg",
                rating: {
                    rate: 3,
                    count: 20
                }
            }
        ]
    },
    // {
    //     id: 6,
    //     title: "Casuals",
    //     description: "Trendy casuals for Men's",
    //     imgUrl: "https://cdn.luxe.digital/media/sites/7/2019/01/11174347/casual-dress-code-men-street-style-luxe-digital.jpg",
        
    // },
    // {
    //     id: 7,
    //     title: "Blazers",
    //     description: "Stunning Blazers for Men's",
    //     imgUrl: "https://i.pinimg.com/originals/b1/45/19/b1451967a96853ed4b8511c106bb9842.jpg",
        
    // },
    // {
    //     id: 8,
    //     title: "Hoodie",
    //     description: "Hoodie's for Men's which makes more stylish",
    //     imgUrl: "https://i.pinimg.com/originals/b0/e3/7e/b0e37e5688e63ec962ee859f688e54ed.jpg",
        
    // },
]

export { categories }