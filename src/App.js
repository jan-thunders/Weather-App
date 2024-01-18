import React,{useState} from "react"; 
import winter from "./images/winter.avif"
const App = () => {
   const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [hemisphere, setHemisphere] = useState("");
    const [month, setMonth] = useState(()=>{
        return new Date().getMonth() + 1
    });

    


    function getLocation() {
          let la,lt
          if(navigator.geolocation){
               navigator.geolocation.getCurrentPosition(
                (position) => {
                    la = position.coords.latitude;
                    lt = position.coords.longitude;
                    setLatitude(la);
                    setLongitude(lt);
                
                    if(la > 0){
                        setHemisphere("Northen Hemisphere");
                    }
                    else if(la < 0){
                        setHemisphere("Southern Hemisphere");
                    }
                    else{
                            setHemisphere("Equator");
                    }
            } 
            )

          }          
    }


    return(
        <div>
               <button onClick={getLocation}>Get Location</button>
                <h1>Latitude: {latitude}</h1>
                <h1>Longitude: {longitude}</h1>
                <h1>Hemisphere: {hemisphere}</h1>
                <h1>Month: {month}</h1>

               {/*  winter condition */}

               {
                hemisphere && ((hemisphere=="Northen Hemisphere" && (month>=11 || month <=3)) 
                 ||  (hemisphere=="Southern Hemisphere" && (month>=5 && month <=9))
                )
                && 
                (
                    <div>
                        <h1>Winter Season </h1>
                        <img src={winter} alt="winter" />
                    </div>
                )
               }

                {/*  summer condition */}

                {
                     // write on your own:
                }
               
           
               




        </div>
    )
}

export default App;



