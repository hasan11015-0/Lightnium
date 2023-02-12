
 import './footerStyles.css'
 
 function About_store(){

        return(
            <div className='about_store'>

            <h1 className='about'>About Your Store</h1>
            <p>
                We dare to be different and we invite you to do the same.<br/>
                We'd love you to join us on this colourful adventure of being<br/>
                you. You are here to be yourself. Fully and unapologetically.<br/><br/>
                Now, let's show to the world what we are made of!
            </p>
            
            <div className='other_links'>
                <a href=''><img src='./Rectangle6.jpg' alt='a'/>abc</a>
                <a href=''><img src='./Rectangle6.jpg' alt='a'/>def</a>
                <a href=''><img src='./Rectangle6.jpg' alt='a'/>ghi</a>
                <a href=''><img src='./Rectangle6.jpg' alt='a'/>jkl</a>
            </div>

            </div>
)


}

//Helpful Link code

function Helpful_Links(){

    return(
        <div className='helpful_link'>

        <h1>Helpful Links</h1>
        
            <ul>
            <ul><a href="" alt=''>Home</a></ul> 
            <ul><a href="" alt=''>Shop</a></ul> 
            <ul><a href="" alt=''>About</a></ul>
            <ul><a href="" alt=''>Blog</a></ul> 
            </ul>
            
            
        

        </div>
)


}

function Quick_Shop(){

    return(
        <div className='quick_shop'>

        <h1>Quick Shop</h1>
        
        
           <ul>
           <ul><a href="" alt=''>Blended Smooties</a></ul>
           <ul><a href="" alt=''>Juices</a></ul>
           <ul><a href="" alt=''>Original Smooties</a></ul>
           <ul><a href="" alt=''>Seasonal Smooties</a></ul>
           
           </ul> 
        

        </div>
)


}

function Lets_Stay_in_Touch(){

    return(
        <div className='lets_stay_in_touch'>

        <h1>Let's Stay in Touch</h1>
        
        <p>
            Sign up for exclusive offers, original stories,<br/>
            events and more
        </p>
        <form>
        <input type='email-address' placeholder='Enter your Email Address'/>

        <button>Subscribe</button>
        </form>
        

        </div>
)


}


export default function Footer(){

    return(
    <>
    <div className="footer_part">
    <About_store/>
    <Helpful_Links/>
    <Quick_Shop/>
    <Lets_Stay_in_Touch/>
    </div>
    
    
    
    
    
    </>
)


}