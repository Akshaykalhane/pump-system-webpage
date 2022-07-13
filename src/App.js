
import './App.css';

function App() {
  return (
   <>
     <div className="logo"> <img src="https://i.ibb.co/0hK7410/logo.png" alt="logo" /> </div>
     <div className="main-content">
        <div className="content-div content-div1">
            <img src="https://i.ibb.co/p09WpMF/1.png" alt="award" />
        </div>
        <div className="content-div content-div2">
            <h2 className="content-heading"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
            <ul className="content-list">
                <li>   C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src="https://i.ibb.co/pRhS4zP/2.png" alt="" />
            <p className="tag-line">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
    </div>
    <div className="achive">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
    </div>

    <div className="pump-img-div">
        <img src="https://i.ibb.co/L028cYc/3.png" alt="" />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    </div>
    <footer className="footer">
        <div className="footer-heading">
            <h2>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h2>
        </div>
        <div className="footer-category">
            <ul className="footer-list">
                <li>CHEMICALS & PROCESS</li>
                <li>POWER</li>
                <li>WATER & WASTE WATER</li>
                <li>OILS & GAS</li>
                <li>PHARMA</li>
                <li>SUGARS & DISTILLERIES</li>
                <li>PAPER & PULP</li>
                <li>MARINE & DEFENCE</li>
                <li>DEFENCE METAL & MINING </li>
                <li>FOOD & BEVERAGE</li>
                <li>PETROCHEMICAL & REFINERIES</li>
                <li>SOLAR </li>
                <li>BUILDING </li>
                <li>HVAC </li>
                <li>IRE FIGHTING</li>
                <li style={{border:'none'}}>AGRICULTURE & RESIDENTIAL</li>
            </ul>
        </div>
    </footer>
    <div className="contact-us-div">
        <ul className="contact">
            <li><i className="fa fa-phone"></i> Toll free 1800 200 1234</li>
            <li><i className="fa fa-facebook-f"></i> www.facebook.com/cripumps</li>
            <li><i className="fa fa-globe"></i>www.crigroups.com</li>
        </ul>
    </div>
   </>
  );
}

export default App;
