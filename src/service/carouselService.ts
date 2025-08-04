import http from './http';
import { API_CONFIG } from '../config/APIConfig';

export interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
}

export const carouselService = {
  async getCarouselItems(): Promise<ICarouselItem[]> {
    const response = await http.get<ICarouselItem[]>(API_CONFIG.ENDPOINTS.CAROUSEL);
    return response.data;
  },
};