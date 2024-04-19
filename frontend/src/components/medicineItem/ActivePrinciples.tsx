

interface Principle {
  id: string | number;
  name: string;
}

interface ActivePrinciplesProps {
  principles: Principle[];
}

const ActivePrinciples = ({ principles }:ActivePrinciplesProps) => {
  return (
    <div>
      <h3>Princípios ativos:</h3>
      <ul className="active-principles">
        {principles.map(principle => (
          <li key={principle.id}>{principle.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivePrinciples;
