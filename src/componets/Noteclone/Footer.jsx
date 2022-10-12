function Footer(){
 let year=new Date().getFullYear();

 return(
  <div className="Footer">
  <p className="footer">copyright © {year}</p>
  </div>
 )
}
export default Footer;