interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  return (
    <div className="mr-4 ">
      {score >= 50 ? (
        <p className="text-green-500 font-semibold">{score}</p>
      ) : (
        <p className="text-violet-500">{score}</p>
      )}
    </div>
  );
};

export default CriticScore;
