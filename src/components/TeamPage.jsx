import MemberCard from "./MemberCard";

function TeamPage ({members}) {
    return(
        <div className="team-page">
            <h1>Our Team ({members.length} team members)</h1>
            <div className="team-grid">
                {/* Loop through each team member and display a MemberCard */}
                {members.map ((member, index) => (
                    <MemberCard
                       key={index}
                       {...member}
                    />
                ))}
            </div>
        </div>

    );
}

export default TeamPage;