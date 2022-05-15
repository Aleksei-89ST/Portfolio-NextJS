const me = {
   siteName: 'Portfolio' ,
   avatar: '/avatar.jpeg',
   description: 
   '<p>Меня зовут Алексей , я уже больше года занимаюсь веб-разработкой.</p>'
}
export default function handler(req,res) {
        res.status(200).json(me)
}