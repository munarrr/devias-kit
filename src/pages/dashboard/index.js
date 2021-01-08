import React from 'react';
import TopCards from './top'
import PieChart from './pie'
import axios from 'axios'
import GroupedBar from './label'
import LatestProducts from './latestProducts'
import LatestOrders from './LatestOrders'


const Dashboard = () => {
  const [usersData, setUsersData] = React.useState([]);
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users));
  }, []);

  return (
    <div className="col-9">
      <TopCards />
      <GroupedBar />
      <PieChart />
      <LatestProducts />
      <LatestOrders users={usersData}/>
      </div>
  );
};

export default Dashboard;
