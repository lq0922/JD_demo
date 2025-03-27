import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const FootPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0); // 当前激活的 Tab 索引
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 当前轮播图索引

  const getTabData = () => {
    const data: Record<number, { longImages: string[]; }> = {
      0: {
        longImages: [
          require("../../../assets/images/footitem1.png"),
          "https://ts4.tc.mm.bing.net/th?id=OIP-C.3nrDn8IrD3x5iVX0PI6cDgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
          "https://ts4.tc.mm.bing.net/th?id=OIP-C.tHAIAaw4ZNlr4v2ldAkvYwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        ]
      },
      1: {
        longImages: [
          "https://ts4.tc.mm.bing.net/th?id=OIP-C.3nrDn8IrD3x5iVX0PI6cDgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        ],
      },
      2: {
        longImages: [
          "https://ts4.tc.mm.bing.net/th?id=OIP-C.tHAIAaw4ZNlr4v2ldAkvYwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        ],
      },
      3: {
        longImages: [
          "https://ts1.tc.mm.bing.net/th?id=OIP-C.XS6EtBzAmWWa31cfFvcx6QHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        ],
      },
    };
    return data[activeTab] || { longImages: [], scrollImages: [] };
  };

  const getScrollImages = (): string[] => {
    const data: { scrollImages: string[] } = {
      scrollImages: [
        require("../../../assets/images/footScroll1.png"),
        require("../../../assets/images/footScroll2.png"),
        require("../../../assets/images/footScroll3.png"),
        require("../../../assets/images/footScroll4.png"),
        "https://ts1.tc.mm.bing.net/th?id=OIP-C.XS6EtBzAmWWa31cfFvcx6QHaHa&w=249&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        "https://ts4.tc.mm.bing.net/th?id=OIP-C.3nrDn8IrD3x5iVX0PI6cDgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      ],
    };
    return data.scrollImages || [];
  };

  const tabData = getTabData();
  const scrollImages = getScrollImages();
  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % tabData.longImages.length
      );
    }, 3000); // 每 3 秒切换一次
    return () => clearInterval(interval);
  }, [tabData.longImages]);

  return (
    <div className="footer">
      <div className="tabs">
        {["五折鞋服", "五折运动", "五折美妆", "五折配饰"].map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => {
              setActiveTab(index);
              setCurrentImageIndex(0); // 切换 Tab 时重置轮播图索引
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="long-images">
        <Link to="/WaitPage">
          <div
            className="long-image"
            style={{
              backgroundImage: `url(${tabData.longImages[currentImageIndex]})`,
            }}
          ></div>
        </Link>
        <div className="indicators">
          {tabData.longImages.map((_, index) => (
            <div
              key={index}
              className={`indicator ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="scroll-img">
        {scrollImages.map((image, index) => (
          <Link to="/WaitPage" key={index}>
            <div
              className="scroll-image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FootPage;