import React, { useEffect, useState } from "react";
import MovieTable from "../components/MovieTable";
import axios from "axios";

const MYKEY = "695a2b76f4976abc05590efa15fa7e2f";

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

function DateSelector({ selectedDate, onDateChange }) {
  return (
    <div>
      <input
        type="date"
        max={formatDate(new Date())}
        value={formatDate(selectedDate)}
        onChange={(event) => onDateChange(new Date(event.target.value))}
      />
      <p>선택한 날짜: {formatDate(selectedDate)}</p>
    </div>
  );
}

function MovieDay() {
  const initialDate = new Date();
  initialDate.setDate(initialDate.getDate() - 1);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setError(null);
  };

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      try {
        const formattedDate = formatDate(selectedDate);
        const response = await axios.get(
          // axios로 데이터 가져오기
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${MYKEY}&targetDt=${formattedDate}`
        );
        const json = response.data;
        setMovies(json.boxOfficeResult.dailyBoxOfficeList);
      } catch (error) {
        setError("일별 영화 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [selectedDate]);

  return (
    <div className="container">
      <h1>일별 영화 정보 조회</h1>
      <DateSelector selectedDate={selectedDate} onDateChange={handleDateChange} />
      <MovieTable loading={loading} error={error} movies={movies} />
    </div>
  );
}

export default MovieDay;
