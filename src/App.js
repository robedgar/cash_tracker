import './App.css';

function App() {
  return (
    <main>
      <h1>
        £900<span>.00</span>
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
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung Tv</div>
            <div className="description">It was time for new Tv</div>
          </div>
          <div className="right">
            <div className="price red">-£600</div>
            <div className="datetime">09-12-2022 09:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">New React site</div>
            <div className="description">Freelance work </div>
          </div>
          <div className="right">
            <div className="price green">+£700</div>
            <div className="datetime">02-11-2022 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description">Phone upgrade</div>
          </div>
          <div className="right">
            <div className="price red">£900</div>
            <div className="datetime">12-12-2022 13:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
