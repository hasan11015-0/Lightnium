import './learningStyles.css'

export function ShopList(){

        
        return (
            
            
        <div className='shoplist'>
            {products.map((products)=>{
                    return <Shop key={products.id} {...products}/>
            })
            }
            
        </div>
                
        )        
            
        
}

function Shop({image,productName,price}){
    const eventHandler=(e)=>{
        alert('Shop Items')
        console.log(e.target)
    }

    function complexExample(productName){

    }
    return(
    
    <div className='shopitem' onMouseOver={()=>{console.log(productName)}}>
        <img src={image} alt={productName}/>
        <h3>{productName}</h3>
        <h6>{price}</h6>
        
    </div>
    
    )
    
}

const products=[
    {
        id:1,
        productName:'Ginger Grapeshot',
        image:'https://media.istockphoto.com/id/120742288/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=vOX4uGn3ikeILHPOiQz7Hc44XBxUMbbsythJStTFcOE=',
        price:'$4.00 USD'
    },
    {   id:2,
        productName:'Grapefruit and Cinamon',
        image:'https://media.istockphoto.com/id/120742288/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=vOX4uGn3ikeILHPOiQz7Hc44XBxUMbbsythJStTFcOE=',
        price:'$4.00 USD $5.00 USD'
    },

    {
        id:3,
        productName:'Orange Grapefruit',
        image:'https://media.istockphoto.com/id/120742288/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=vOX4uGn3ikeILHPOiQz7Hc44XBxUMbbsythJStTFcOE=',
        price:'$4.00 USD'
    },
    {   id:4,
        productName:'Ginger Grapeshot',
        image:'https://media.istockphoto.com/id/120742288/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=vOX4uGn3ikeILHPOiQz7Hc44XBxUMbbsythJStTFcOE=',
        price:'$4.00 USD'
    },
    {   id:5,
        productName:'Ginger Grapeshot',
        image:'https://media.istockphoto.com/id/120742288/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=vOX4uGn3ikeILHPOiQz7Hc44XBxUMbbsythJStTFcOE=',
        price:'$4.00 USD'
    }
]

