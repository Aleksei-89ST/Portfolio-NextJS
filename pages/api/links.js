const links = [
    {
        _id: 'link_1',
        icon: {
            path:'/icons/htmllessons.svg',
            width: 76
        },
        gradient : {
            from: 'red',
            to:'#00bbd5'
        },
        // link:
        title: 'Мои знания'
    },
  
]
export default function handler(req,res) {
        res.status(200).json(links)
}