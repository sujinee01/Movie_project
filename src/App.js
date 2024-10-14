import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./Login">로그인</Link>
        </li>
        <li>
          <Link to="./Join">회원가입</Link>
        </li>
        <li>
          <Link to="./MovieDay">일별</Link>
        </li>
        <li>
          <Link to="./MovieMonth">월별</Link>
        </li>
      </ul>
      <Routes>
        <Route path="./" element={<Home />} />
        <Route path = "./Login" element={<Login/>} />
        <Route path = "./Join" element={<Join/>} />
        <Route path="./MovieDay" element={<MovieDay />} />
        <Route path="./MovieMonth" element={<MovieMonth />} />
      </Routes>
    </div>
  );
}

export default App;
