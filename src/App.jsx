import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer.jsx"
import Offers from "./Offers";
import TrendDest from "./TrendDest";
import pic1 from "./assets/offers_react_1.jpg";
import pic2 from "./assets/offers_react_2.webp";
import ct1 from "./assets/NewDelhi.jpg";
import ct2 from "./assets/banglore.jpg";
import ct3 from "./assets/mumbai.webp";
import ct4 from "./assets/hyderabad.jpg";
import ct5 from "./assets/chennai.webp";

function App() {
  return (
    <div>  
        
        <Navbar />
        <SearchBar />
        <div className="off" style={{marginTop:'200px',marginLeft:'200px'}}>
          <h1>Offer</h1>
          <p style={{color:'#5D5D5E',marginTop:'10px',marginBottom:'10px'}}>Promotions, deals, and special offers for you</p>
        <div className="off1">
        <Offers 
        bg_img={pic1}
        upper_body="Late Escape Deals"
        title="Go for a good time,not a long time"
        lower_body="Squeeze out the last bit of sun with atleast 15% off"
        butt_Text="Find Deals"
        />
        </div >
        <div className="off2">
           <Offers 
        bg_img={pic2}
        upper_body=""
        title="Go for a good time,not a long time"
        lower_body=""
        butt_Text="Explore Deals"
        />
        </div>
        </div>
        <h1 style={{marginTop:'50px',marginLeft:'200px',fontFamily:'Segoe UI'}}>Trending destinations</h1>
        <p style={{marginTop:'7px',marginLeft:'201px',fontFamily:'Segoe UI'}}>Most popular choices for travelers from India</p>
        <div style={{marginTop:'50px',marginLeft:'200px',display:'flex'}}>
        <div style={{flex:'1'}}>
        <TrendDest 
        bg_img={ct1}
        wth="542px"
        hth="271.8px"
        title="New Delhi"
        />
        </div>
        <div style={{flex:'1',marginLeft:'0px'}}>
          <TrendDest 
        bg_img={ct2}
        wth="542px"
        hth="271.8px"
        title="Banglore"
        />
        </div>
        </div>
        <div style={{marginTop:'50px',marginLeft:'200px',display:'flex',gap:'0px'}}>
        <div style={{flex:'1'}}>
        <TrendDest 
        bg_img={ct5}
       wth="356px"
        hth="267.4px"
        title="Chennai"
        />
        </div>
        <div style={{flex:'1',marginLeft:'0px'}}>
          <TrendDest 
        bg_img={ct3}
        wth="356px"
        hth="267.4px"
        title="Mumbai"
        />
        </div>
         <div style={{flex:'1',marginLeft:'0px'}}>
          <TrendDest 
        bg_img={ct4}
        wth="356px"
        hth="267.4px"
        title="Hyderabad"
        />
        </div>
        </div>
        <Footer />
      </div>
  );
      
      
}
  
export default App;
