import React from "react";
import { Link } from 'react-router-dom';
import "./index.css"
const HotPick: React.FC = () => {
  return (
    <div className="hot-pick">
      <div className="hot-pick-title">
        <div className="hot-pick-title-icon"></div>
        <div className="hot-pick-title-text">热门推荐</div>
      </div>
      <div className="hot-pick-content">
        {
          [1, 2, 3, 4].map((item, index) => (
            <Link to="/WaitPage" key={index}>
              <div key={index} className={`hot-pick-item${item}`}></div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default HotPick;