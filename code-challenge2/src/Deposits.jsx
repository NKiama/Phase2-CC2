import { useState } from 'react';

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState('');
  const [amount, setAmount] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onDeposit(goalId, Number(amount));
    setGoalId('');
    setAmount('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Deposit</h2>
      <select value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select goal</option>
        {goals.map(g => (
          <option key={g.id} value={g.id}>{g.name}</option>
        ))}
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;