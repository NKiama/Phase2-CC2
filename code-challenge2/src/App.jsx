import { useEffect, useState } from 'react';
import AddGoalForm from './AddedGoal';
import DepositForm from './Deposits'; 
import Overview from './Overview';
import GoalList from './GoalList';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  function addGoal(goal) {
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal)
    })
      .then(res => res.json())
      .then(newGoal => setGoals([...goals, newGoal]));
  }

  function deposit(goalId, amount) {
    const goal = goals.find(g => g.id === goalId);
    const updatedAmount = goal.savedAmount + amount;

    fetch(`http://localhost:3000/goals/${goalId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedAmount })
    })
      .then(res => res.json())
      .then(updatedGoal => {
        const updatedGoals = goals.map(g => g.id === goalId ? updatedGoal : g);
        setGoals(updatedGoals);
      });
  }

  function deleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, { method: 'DELETE' })
      .then(() => setGoals(goals.filter(g => g.id !== id)));
  }

  return (
    <div>
      <h1>Goal Planner</h1>
      <AddGoalForm onAdd={addGoal} />
      <DepositForm goals={goals} onDeposit={deposit} />
      <Overview goals={goals} />
      <GoalList goals={goals} onDelete={deleteGoal} />
    </div>
  );
}

export default App;