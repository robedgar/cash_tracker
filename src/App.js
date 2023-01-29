import './App.css';

function App() {
  return (
    <main>
      <h1>
        £400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={'+200 New Samsung tv'} />
          <input type="datetime-local" />
        </div>
        <div className="description">
          <input type="text" placeholder={'description'} />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction"></div>
      </div>
    </main>
  );
}

export default App;
