import rodizio from '../../assets/images/rodizio.jpeg'
import buffet from '../../assets/images/buffet.jpeg'
import cocktails from '../../assets/images/cocktails.jpeg'

const CARD_DATA = [
    {
        id: 1,
        title: "Buffet",
        routeName: "buffet",
        description: "Try our best salad to join your meat and enjoy a delightful experience",
        image: buffet
    },
    {
        id: 2,
        title: "Rodizio",
        routeName: "rodizio",
        description: "A selection of 14 different meats brought to your table by our professional passadors, all of them cooked to your preferred cooking, from rare to well done",
        image: rodizio
    },
    {
        id: 3,
        title: "Cocktails",
        routeName: "cocktails",
        description: "Enjoy top level cocktails served by our exprienced barman, a perfect match to your dinner",
        image: cocktails
    }
]

export default CARD_DATA;