import express from 'express'

const app = express();

app.get('/api/products', (req,res) => {
    const products = [
        {
            id:1,
            name:'table wooden',
            price:200,
            image:'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id:2,
            name:'table glass',
            price:250,
            image:'https://images.pexels.com/photos/8365657/pexels-photo-8365657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id:3,
            name:'table plastic',
            price:300,
            image:'https://images.pexels.com/photos/7319130/pexels-photo-7319130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
        {
            id:4,
            name:'table metal',
            price:350,
            image:'https://images.pexels.com/photos/3993292/pexels-photo-3993292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        },
    ]

    //res.send(product)

    //for a little delay
    //http://localhost:3000/api/products?search=metal
    if(req.query.search){
        const filterProducts = products.filter((product)=> product.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(()=>{
        res.send(products)
    },3000)

})


const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})
