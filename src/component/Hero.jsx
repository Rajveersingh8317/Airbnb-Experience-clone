import Logo from "../../public/assets/photo-grid.png"
function Hero(){
    return(
        <section className="hero">
            <img src={Logo} className="hero-photo"/>
            <h1 className="hero-header">Online Experience</h1>
            <p className="hero-text">Jion unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}
export default Hero