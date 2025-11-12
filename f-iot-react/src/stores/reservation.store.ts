//! reservation.store.ts
// : 예약/주문 관련 상태 (도메인 상태)
// - 푸드트럭 예약 / 주문 같은 실제  "비즈니스 로직" 상태
// - 특정 가게(트럭)의 예약 내역을 불러오고, 선택한 가게(트럭)과 타임슬롯을 관리하는 전역상태

import { create } from "zustand";

//@ 원산지) types 폴터
export interface Reservation {
  id: number;             // 예약 고유 PK값
  trunckId: number;       // trunck 고유 PK 값(FK)
  userId: number;         // 사용자 고유 PK값 (FK)
  date: string;           // "2025-11-12"
  timeSlot: string;       // "10:00-11:00"
  status: string          // "CONFIRMED" | "CANCELLED"
}

// 스토어 내부의 객체 타입
interface ReservationState {
  selectedTrunckId: number | null;
  selectedTimeSlot: string | null;
  reservationList: Reservation[];

  fetchReservations: (trunckId: number) => Promise<void>;
  clearSelection: () => void;
}

// 스토어 생성
export const useReservationStore = create<ReservationState>();