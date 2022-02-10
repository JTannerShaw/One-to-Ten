import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getMatches } from '../../../store/matches';
import { getSurveyResponses } from '../../../store/surveyResponses';
import Confirmation from '../../Utils/Confirmation/Confirmation'
import '../Profiles.css';
import './UserProfile.css';

function SessionProfile({ sessionUser }) {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(sessionUser.isActive || true);
    const allMatches = useSelector(state => state.matches.allMatches);

    //to get number of questions completed by user
    const allSurveys = useSelector(state => state.surveyResponses.bySurveyId);
    const surveyList = Object.keys(allSurveys)
    //subtract base survey and multiply by number of questions
    const numberOfQuestions = (surveyList.length - 1) * 3

    useEffect(() => {
        dispatch(getMatches(sessionUser.id));
        dispatch(getSurveyResponses(sessionUser.id));
    }, []);


    const handleDeactivate = () => {
        console.log('handle deactivate')
        setIsActive(false)
    };

    return (
        <>
            <div id="dark__background"></div>
            <div id="flex__container--split">
                <div className="flex__container--child flex__container--padded">
                    <h1 className="accent-color-2">
                        Hello {sessionUser.first_name}
                    </h1>
                    {!isActive &&
                        <>
                            <p className="p-1 accent-color-5">
                                Complete the Icebreaker survey to activate your profile.
                            </p>
                        </>
                    }
                    <div className="profile__navigation">
                        {isActive &&
                            <>
                                <p className="profile__navigation--link">
                                    <Link className="underline-slide" to={`/users/${sessionUser.id}/matches`}>
                                        View Matches
                                    </Link>
                                </p>
                                <p className="profile__navigation--link">
                                    <Link className="underline-slide" to="/surveys">
                                        Answer Questions
                                    </Link>
                                </p>

                            </>
                        }

                        <p className="profile__navigation--link">
                            <Link className="underline-slide" to={`/users/${sessionUser.id}/profile`}>
                                Edit Profile
                            </Link>
                        </p>
                        {isActive &&
                            <Confirmation
                                warningText={`Are you sure? This action is irreversible and will delete all survey response and match data.`}
                                confirmAction={handleDeactivate}
                                confirmText={`Confirm`}
                                hideText={`Nevermind`}
                            >
                                <p
                                    className="deactivate"
                                >
                                    Deactivate Profile
                                </p>
                            </Confirmation>
                        }
                    </div>
                </div>
                <div className="flex__container--child flex__container--padded">
                    {isActive ?
                        <div className="profile__stats">
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">{numberOfQuestions}</div>
                                <div className="profile__stats--caption">Questions Answered</div>
                            </div>
                            <div className="profile__stats--section">
                                <div className="profile__stats--num">{allMatches?.length}</div>
                                <div className="profile__stats--caption">Matches Found</div>
                            </div>
                        </div>
                        :
                        <NavLink to="/first-survey">
                            <div className='icebreaker-container'>
                                <div className='icebreaker-circle'>
                                    <div className='expanding-circle'>
                                    </div>
                                </div>
                                <h2 className='icebreaker-label'>
                                    Icebreaker
                                </h2>
                            </div>
                        </NavLink>
                    }
                </div>
            </div>
        </>
    )
}

export default SessionProfile;
