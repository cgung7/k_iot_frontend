// reservationApi.ts
// : 예약 관련 API 호출 메서드 작성 (비동기 함수)

import { publicApi } from "./axiosInstance";

export const getAllReservations = async (truckId: number) => {
  const res = await publicApi.get(`/trucks/${truckId}/reservations`);
  return res.data.data;
};
