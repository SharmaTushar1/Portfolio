export default function Skill({skillName, skillBgColor}: Skill) {
  return (
    <div className="text-zinc-100 p-1 rounded-sm text-xs font-semibold mr-2 max-w-fit my-1" style={{backgroundColor: `${skillBgColor}`}}>{skillName}</div>
  );
}