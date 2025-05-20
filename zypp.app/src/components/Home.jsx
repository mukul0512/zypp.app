import Navbar from "./Navbar";
import bgImage from "../assets/bgImg/Ranked-Banner-bgImg.png"
import riderLoveBgImage from "../assets/bgImg/rider-love-bgImg.jpg"
import { Link } from "react-router-dom";

const Home = () => {
    const linkStyle = {
        border: '1px solid black',
        padding: '5px',
        margin: '10px 0 10px 0'
    }

    return (
        <div>
            {/* header section  */}
            <header>
                <Navbar />
            </header >

            {/* main section   */}
            <main>
                <div style={{ border: '1px solid red', height: '100vh', marginTop: '10px', margin: '30px' }}>   {/* parent-container   */}
                    <div> {/* child-container   */}
                        <img src={bgImage} alt="Ranked_Banner_bgImg" />
                    </div>
                </div>

                <div style={{ border: '1px solid black', display: 'flex', flexDirection: 'column', margin: '30px' }}> {/* what-Offer-Section   */}
                    <div style={{ margin: '30px', border: '1px solid black' }}>
                        <p>WHAT WE OFFER</p>
                        <h3 style={{ fontWeight: 'bold' }}>Explore categories of services that meets your goals of saving money and reducing emissions</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', margin: '50px', border: '1px solid black' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                            <img src={riderLoveBgImage} alt="rider-love-post" />
                            <div style={{ display: 'flex', height: '45px', backgroundColor: 'black', color: 'white', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '15px' }}>
                                <button style={{ display: 'flex', cursor: 'pointer', marginRight: '10px', marginBottom: '3px' }}>Read More</button>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        <div style={{ border: '1px solid black' }}>
                            <ul style={{ marginTop: '50%' }}>
                                <div style={{ padding: '20px', border: '1px solid black' }}>
                                    <h4>EV For All</h4>
                                </div>
                                <li style={linkStyle} className="hover:bg-green-300"><Link to="/zyppLastMileDeliveries"><strong>Zypp Last Mile Deliveries:</strong> Save on petrol cost, Rent a eScooter </Link></li>
                                <li style={linkStyle} className="hover:bg-green-300"><Link to="/evDeliveries"><strong>EV Deliveries:</strong> Get dedicated rider for last mile deliveries</Link></li>
                                <li style={linkStyle} className="hover:bg-green-300"><Link to="/3WheelerBigEarnings"><strong>3 Wheeler for big earnings:</strong> Ensure big orders delivered emission-free </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main >

            {/* footer section  */}
            <footer>

            </footer >
        </div >
    )
}
export default Home;