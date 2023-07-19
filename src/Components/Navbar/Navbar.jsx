import React from "react";
function Navbar({handleScroll,Ref1,Ref2,Ref3,Ref4,Ref5,Ref6,Ref7}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark  shadow fixed-top">
        <div className="container-fluid">
          <span className="navbar-brand text-white ms-lg-5  cursor-pointer"  onClick={()=>handleScroll(Ref1)}>
            Rajneesh
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-lg-5">
                <li className="nav-item" 
                 data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>handleScroll(Ref1)}>
                  <span

                    className="nav-link li-hover  text-light"
                    aria-current="page"
                  >
                    Home
                  </span>
                </li>
                <li className="nav-item"  
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
                onClick={()=>handleScroll(Ref2)}>
                  <span
                    className="nav-link li-hover  text-light"
                    aria-current="page"
                    
                  >
                    About
                  </span>
                </li>
                <li className="nav-item" 
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>handleScroll(Ref3)}>
                  <span
                    className="nav-link li-hover  text-light"
                    aria-current="page"
                   
                  >
                    Resume
                  </span>
                </li>
                <li className="nav-item"
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>handleScroll(Ref4)}>
                  <span
                    className="nav-link li-hover  text-light"
                    aria-current="page"
                   
                  >
                    Services
                  </span>
                </li>
                <li className="nav-item"
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>handleScroll(Ref5)}>
                  <span
                    className="nav-link li-hover  text-light"
                    aria-current="page"
                  >
                    Skills
                  </span>
                </li>
                <li className="nav-item" 
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>handleScroll(Ref6)}>
                  <span
                    className="nav-link  li-hover text-light"
                    aria-current="page"
                  >
                    Projects
                  </span>
                </li>
                <li className="nav-item" 
                
                data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent"
                data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>handleScroll(Ref7)}>
                  <span
                    className="nav-link  li-hover text-light"
                    aria-current="page"
                  >
                    Contact
                  </span>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link text-light"
                    aria-current="page"
                    href="#"
                  >
                    My Blog
                  </a>
                </li> */}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
