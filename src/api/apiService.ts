import axios from 'axios';

// 封装网络请求接口
export const getHeadCarousel = async (): Promise<string[]> => {
  try {
    const response = await axios.get<string[]>('./mock/HeadCarousel.json');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface DailyPickData {
  [key: string]: string[];
}
export const getDailyPickData = async (): Promise<DailyPickData> => {
  try {
    const response = await axios.get<DailyPickData>('./mock/DailyPick.json');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}