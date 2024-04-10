import './App.css';

function App() {
  return (
      <div className="App">

          <label for="userId">ID</label>
          <input id="userId" type="text"/>
          <br/>
          <label for="passWord">password</label>
          <input id="passWord" type="text"/>
          <button> 로그인</button>
      </div>
  );
}

export default App;
