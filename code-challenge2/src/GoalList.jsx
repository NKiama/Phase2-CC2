function GoalList({ goals, onDelete }) {
  return (
    <div>
      <h2>Your Goals</h2>
      {goals.map(goal => {
        const percent = Math.round((goal.savedAmount / goal.targetAmount) * 100);
        const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
        let status = '';

        if (goal.savedAmount >= goal.targetAmount) status = '✅ Done';
        else if (daysLeft < 0) status = '⚠️ Overdue';
        else if (daysLeft <= 30) status = '⏳ Hurry';
        else status = 'In progress';

        return (
          <div key={goal.id}>
            <h3>{goal.name}</h3>
            <p>${goal.savedAmount} / ${goal.targetAmount}</p>
            <p>{percent}% saved</p>
            <p>Category: {goal.category}</p>
            <p>Deadline: {goal.deadline}</p>
            <p>Status: {status}</p>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default GoalList;