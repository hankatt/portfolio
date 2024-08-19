import '../App.css'

function Header() {
  return (
    <>
      <div id="header" className="spaceBetween wrap">
        {/* <nav>
        <a href="index.html" className="navigation-link active">Home</a>
        <a href="#!" className="navigation-link">Portfolio</a>
        <a href="about.html" className="navigation-link">Contact</a>
        </nav> */}
        <h1 className="body-text">henrik wiberg</h1>
        <a href="https://www.linkedin.com/in/hewiberg" className="navigation-link" target="_blank">linkedin</a>
      </div>
    </>
  );
}

export default Header;