import Marquee from "react-fast-marquee";
import { Asterisk } from "@phosphor-icons/react";



export const MarqueeFeature = () => (
    <Marquee 
    className="bg-secondary text-black 
              h-10 font-semibold 
              tracking-widest uppercase" 
    gradient='true'
    gradientColor="white"
    gradientWidth={25}
    pauseOnHover={false} 
    speed='70' 
    direction="left"
    
    >
      <div className="flex items-center gap-2 mr-16 font-robo">
      <Asterisk size={16}/>
      <p>GET 70% OFF ON YOUR FIRST PURCHASE</p>
      <Asterisk size={16}/>
      </div>
      <div className="flex items-center gap-2 mr-16 font-robo">
        <Asterisk size={16}/>
        <p>Check out our New Arrivals</p>
        <Asterisk size={16}/>
      </div>
      <div className="flex items-center gap-2 mr-16 font-robo">
        <Asterisk size={16}/>
        <p>Subscribe for early access on New arrivals</p>
        <Asterisk size={16}/>
      </div>
    </Marquee>
  );

  