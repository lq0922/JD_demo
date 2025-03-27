import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Tip from "../../../components/tip";
import "./index.css";
import { getDailyPickData } from "../../../api/apiService";

interface DailyPickData {
  [key: string]: string[];
}

const DailyPick: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [focusedDate, setFocusedDate] = useState(15);
  const [tipMessage, setTipMessage] = useState<string | null>(null);
  const [dailyPickData, setDailyPickData] = useState<DailyPickData>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDailyPickData();
        setDailyPickData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubscribeClick = () => {
    setIsSubscribed(prev => !prev);
    setTipMessage(isSubscribed ? "取消订阅成功" : "订阅成功");
  };

  const getWeekDates = (): number[] => {
    return [13, 14, 15, 16, 17, 18, 19];
  };

  const weekDates = getWeekDates();
  const today = 15;

  // 根据日期返回对应的内容
  const getItemData = (date: number): string[] => {
    return dailyPickData[date.toString()] || [];
  };

  const itemData = getItemData(focusedDate);

  return (
    <div className="daily-pick">
      <div className="month"></div>
      <div className="daily-pick-title">每日推荐</div>
      <div className="daily-pick-sub" onClick={handleSubscribeClick}>{isSubscribed ? '已订阅' : '订阅'}</div>
      <div className="daily-pick-date" style={{ position: "relative" }}>
        {weekDates.map((date, index) => (
          <div key={index} className="date">
            <div
              className={`${focusedDate === date ? "focused" : ""} day`}
              onClick={() => {
                if (date >= today) setFocusedDate(date);
              }}
            >
              {date}
              {focusedDate === date && <div className="dayBox">
                <div className="dayBoxText"></div>
              </div>}
            </div>
          </div>
        ))}
        <div className="dayContent">
          {itemData.length > 0 ? (
            itemData.map((content, itemIndex) => (
              <Link to="/WaitPage" key={itemIndex}>
                <div
                  className={`item${itemIndex + 1}`}
                  style={{ backgroundImage: `url(${content})` }}
                />
              </Link>
            ))
          ) : (
            <p>加载中...</p>
          )}
        </div>
      </div>
      {tipMessage && <Tip message={tipMessage} onClose={() => setTipMessage(null)} />}
    </div>
  );
};

export default DailyPick;