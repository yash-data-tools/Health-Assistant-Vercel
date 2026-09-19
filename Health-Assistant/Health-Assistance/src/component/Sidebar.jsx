import { Link, useLocation } from "react-router";
import "../styles/sidebar.css"

export function Sidebar() {
  const location = useLocation();

  const sidebaritems = [
    {
      image: "images/health_safety.png",
      title: "Health Assistant",
      path :"/"
    },
    {
      image: "images/bmi_calc.png",
      title: "BMI Calculator",
      path:"/bmi"
    },
    {
      image: "images/history.png",
      title: "History",
      path:"/history"
    },
    {
      image: "images/info.png",
      title: "About",
      path:"/about"
    },
    {
      image: "images/shield.png",
      title: "Disclaimer"
    }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="images/heart-rate.png" alt="" className="logo" />
        <div className="title">Health Assistant <div>Ai Powered</div></div>
      </div>
      <div className="sections">

        {
          sidebaritems.map((item, index) => {
            const className = location.pathname === item.path ? "section active" : "section";
            const content = (
              <>
                <img src={item.image} alt="" className="section-image" />
                <span>{item.title}</span>
              </>
            );

            if (item.path) {
              return (
                <Link key={index} to={item.path} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <div key={index} className={className}>
                {content}
              </div>
            );
          })
        }
      </div>
      <div className="information">
        <div className="info">
          <img src="images/side-heart.png" alt="" className="health" />
          <span>This assistant does not replace a doctor.</span>
        </div>
        <div className="final-info">
          If your symptoms are severe or worsening, seek immediate medical attention.
        </div>
      </div>
    </div>
  );
}
