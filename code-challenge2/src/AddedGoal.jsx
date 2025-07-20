import { useState } from 'react';

function AddGoalForm({ onAdd }) {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [category, setCategory] = useState('');
  const [deadline, setDeadline] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newGoal = {
      name,
      targetAmount: Number(target),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAdd(newGoal);
    setName('');
    setTarget('');
    setCategory('');
    setDeadline('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Goal</h2>
      <input placeholder="Goal name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="number" placeholder="Target amount" value={target} onChange={e => setTarget(e.target.value)} required />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="text" placeholder="Deadline (YYYY-MM-DD)" value={deadline} onChange={e => setDeadline(e.target.value)} required />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddGoalForm;