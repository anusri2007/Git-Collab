import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
//Coordinator Dashboard component
function Dashboard() {
  return (
    <div>
      <Header />

      <div>
        <Sidebar />

        <main>
          <h1>Coordinator Dashboard</h1>
          <p>Welcome to the Coordinator Dashboard!</p>

          <h2>Overview</h2>
          <ul>
            <li>Total Students: 120</li>
            <li>Active Courses: 8</li>
            <li>Pending Assignments: 15</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;