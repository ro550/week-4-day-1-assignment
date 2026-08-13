

function MemberCard({name, role, avatar, bio}) {
    return (
        <div className="member-card">
            <img
                src={avatar}
                alt={name}
            />
            <h3>{name}</h3>
            <p className="member-role">{role}</p>
            <p>{bio}</p>
        </div>
    );
}

export default MemberCard;