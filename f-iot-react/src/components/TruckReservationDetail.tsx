import { useReservationStore } from '@/stores/reservation.store'
import React, { useState } from 'react'

//! 가게(트럭)의 예약 정보 - 상세 페이지
// : 상세가 없으면 안내 메세지 표시
// - 상세 새로고침 버튼으로 fetchReservationById 호출 - 단건 업데이트 가능
function TruckReservationDetail() {
  const {
    selectedTruckId,
    selectedTimeSlot,
    reservationList,

    setSelectedTimeSlot,
    fetchReservationById
  } = useReservationStore();

  const [loading, setLoading] = useState<boolean>(false);
  const [actionMessage, setActionMessage] = useState<String | null>(null);

  if(!selectedTruckId) {
    return (
      <div className='panel'>
        <h2 className='panel-title'>예약 상세</h2>
        <p className='muted'>트럭을 선택하면 예약 상세를 볼 수 있습니다.</p>
    </div>
    )
  }

  if (!selectedTimeSlot) {
    return (
      <div className='panel'>
        <h2 className='panel-title'>예약 상세</h2>
        <p className='muted'>좌측 예약 목록에서 항목을 선택하세요.</p>
    </div>
    )
  }

  // selectedTimeSlot 기준으로 예약 찾기 (동일)
  const reservation = reservationList.find(reservation =>
    reservation.timeSlot === selectedTimeSlot
  );

  if(!reservation) {
    return (
      <div className='panel'>
      <h2 className='panel-title'>예약 상세</h2>
      <p className='muted'>선택한 예약 정보를 찾을 수 없습니다.</p>
      <div style={{ marginTop: 12}}>
        <button type='button' className='small-btn' onClick={() => setSelectedTimeSlot(null)}>
          선택 해체
        </button>
      </div>
    </div>
    )
  }

  // 단건 새로고침 (store)
  const refreshReservation = async () => {
    setActionMessage(null);
    setLoading(true);

    try {
      await fetchReservationById(reservation.truckId, reservation.id);
      setActionMessage("상세 정보를 새로고침 했습니다.")
    } catch (e) {
      console.error("refreshReservation error: ", e);
      setActionMessage("상세 정보를 가져오는 중 오류가 발생하였습니다.");
    } finally {
      setLoading(false);
    }
  }

  // 예약 취소 핸들러 (지금은 구현 없음)
  const handleCancel = async () => {
    setActionMessage(null);
    setLoading(true);
    try {
      // await cancelReservation(reservation.id);
      // setActionMessage("예약을 취소했습니다.")
      setActionMessage("취소 기능이 구현되지 않았습니다.");
    } catch (e) {
      console.error("cancel error: ", e);
      setActionMessage("예약 취소 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='panel'>
      <h2 className='panel-title'>예약 상세</h2>

      <div className="detail-row">
        <div className='detail-label'>예약 ID</div>
        <div className='detail-value'>{reservation.id}</div>
      </div>
      <div className="detail-row">
        <div className='detail-label'>시간대</div>
        <div className='detail-value'>{reservation.timeSlot}</div>
      </div>
      <div className="detail-row">
        <div className='detail-label'>날짜</div>
        <div className='detail-value'>{reservation.timeSlot}</div>
      </div>
      <div className="detail-row">
        <div className='detail-label'>상태</div>
        <div className='detail-value'>{reservation.status}</div>
      </div>
      <div className="detail-row">
        <div className='detail-label'>예약자</div>
        <div className='detail-value'>{reservation.userId}</div>
      </div>

    </div>
  )
}

export default TruckReservationDetail