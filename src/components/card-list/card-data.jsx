import rodizio from '../../assets/images/rodizio_SAMBO.png'
import buffet from '../../assets/images/buffet_SAMBO.png'
import cocktails from '../../assets/images/cocktails_SAMBO.png'

const CARD_DATA = [
    {
        id: 1,
        title: "Buffet",
        routeName: "buffet",
        description: "Try our best salad to join your meat and enjoy a delightful experience",
        image: buffet,
        clicked : false

    },
    {
        id: 2,
        title: "Cocktails",
        routeName: "cocktails",
        description: "Enjoy top level cocktails served by our exprienced barman, a perfect match to your dinner",
        image: cocktails,
        clicked : false

    },
    {
        id: 3,
        title: "Rodizio",
        routeName: "rodizio",
        description: "A selection of 14 different meats brought to your table by our professional passadors, all of them cooked to your preferred cooking, from rare to well done",
        image: rodizio,
        clicked : false

    }
]

export default CARD_DATA;