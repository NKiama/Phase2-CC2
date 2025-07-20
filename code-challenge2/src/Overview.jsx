function Overview({ goals }) {
  const total = goals.length;
  const saved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div>
      <h2>Overview</h2>
      <p>Total goals: {total}</p>
      <p>Total saved: ${saved}</p>
      <p>Completed goals: {completed}</p>
    </div>
  );
}

export default Overview;