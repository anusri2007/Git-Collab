import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Header />

      <div>
        <Sidebar />

        <main>
          <h1>Student Dashboard</h1>
          <p>Welcome to the Student Dashboard!</p>
        <p>Student settings are available here.</p>
          <h2>My Courses</h2>
          <ul>
            <li>Web Development</li>
            <li>Database Management</li>
            <li>Computer Networks</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;