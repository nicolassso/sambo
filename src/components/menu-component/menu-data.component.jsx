const MENU_DATA = [
    {
        id: 1,
        title: 'weymouth',
        price:{
            lunch:{ 
                kids:{
                    babies: 'FREE',
                    fivetoeight: 6.95,
                    nineplus: 12.50
                },
                adult: 18.95
            },
            dinner:{
                weekday: 26.85,
                weekend: 28.95
            }
        }
    },
    {
        id: 2,
        title: 'poole',
        price:{
            lunch:{ 
                kids:{
                    babies: 'FREE',
                    fivetoeight: 8.95,
                    nineplus: 14.95
                },
                adult:{
                    weekday: 24.95,
                    weekend: 28.95
                } 
            },
            dinner: 34.95
        }
    }
]

export default MENU_DATA;