import { Col, Image } from 'react-bootstrap';

/**
 * Custom hook for rendering team members (directors, staff, teachers)
 * @param {Array} teamMembers - Array of team member objects
 * @param {Function} getAnimationClass - Optional function to get animation class for each member
 * @returns {Array} Array of rendered team member components
 */
export const useTeamRenderer = (teamMembers, getAnimationClass = () => '') => {
    return teamMembers.map((member, index) => (
        <Col xs={12} sm={6} md={4} lg={4} key={member.id || index + 1}>
            <div className={`our-team ${getAnimationClass(member)}`}>
                <div className='picture'>
                    <Image src={member.image} fluid alt={member.name} />
                </div>
                <div className='team-content'>
                    <h3 className='name'>{member.name}</h3>
                    <h4 className='title'>{member.position || member.designation}</h4>
                    {member.qualification && (
                        <h4 className='title'>{member.qualification}</h4>
                    )}
                    {member.registrationNumber && (
                        <h4 className='title'>রেজিঃ নং: {member.registrationNumber}</h4>
                    )}
                    {member.mobileNumber && (
                        <h4 className='title'>মোবাইল: {member.mobileNumber}</h4>
                    )}
                </div>
            </div>
        </Col>
    ));
};