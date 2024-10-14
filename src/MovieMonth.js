import React, { useState, useEffect } from "react";
import MovieTable from "../components/MovieTable";
import { format, setMonth, subMonths } from "date-fns"; // 날짜 포맷 라이브러리
import { ko } from "date-fns/locale"; // 한글로 패치

const MYKEY = "695a2b76f4976abc05590efa15fa7e2f";

function MonthSelector({ selectedDate, onMonthChange }) {
  const months = Array.from({ length: 12 }, (_, i) => {
    const date = setMonth(selectedDate, i);
    const formattedMonth = format(date, "MMMM", { locale: ko });
    return (
      <option key={i} value={i}>
        {formattedMonth}
      </option>
    );
  });

  return (
    <div>
      <select value={selectedDate.getMonth()} onChange={onMonthChange}>
        {months}
      </select>
      <br />
      <p>{format(selectedDate, "yyyy년 MM월")}</p>
    </div>
  );
}

function MovieMonth() {
  const initialDate = subMonths(new Date(), 1); // 현재 날짜에서 1달을 빼서 이전 월로 초기화
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  // 선택한 월에 따라 데이터 가져오는 함수
  const fetchMovies = async (date) => {
    setLoading(true);
    setError(null);

    try {
      const formattedDate = format(date, "yyyyMMdd");
      const response = await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${MYKEY}&targetDt=${formattedDate}`
      );
      const json = await response.json();

      setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    } catch (error) {
      setError("월별 영화 정보를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(selectedDate);
  }, [selectedDate]);

  // 월 변경 핸들러
  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setSelectedDate(setMonth(initialDate, selectedMonth)); // 초기값을 기준으로 월 변경
  };

  return (
    <div className="container">
      <h1>월별 영화 정보 조회</h1>
      <MonthSelector selectedDate={selectedDate} onMonthChange={handleMonthChange} />
      <MovieTable loading={loading} error={error} movies={movies} />
    </div>
  );
}

export default MovieMonth;
