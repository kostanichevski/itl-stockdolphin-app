import styles from "./index.css";

function Dashboard() {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="upperside">
          <div className="title">
            <p>Itl StockDolphin</p>
          </div>
          <div className="sidebar-btns">
            <button>Dashboard</button>
            <button>Inventory</button>
            <button>Reports</button>
            <button>Suppliers</button>
          </div>
        </div>
        <div className="unused">
          <div className="logout-btn">
            <button>Log out</button>
          </div>
        </div>
      </div>
      <div className="menu"></div>
    </div>
  );
}

export default Dashboard;
