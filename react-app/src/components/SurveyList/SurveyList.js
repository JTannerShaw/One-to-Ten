import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSurveyResponses } from '../../store/surveyResponses';
import { getSurveys } from '../../store/surveys';
import SurveyButton from './SurveyButton/SurveyButton';

import './SurveyList.css';


function SurveyList() {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const surveys = useSelector(state => state.surveys);
    const surveyResponses = useSelector(state => state.surveyResponses.bySurveyId);

    //change from object to array to make iterable
    const surveyList = Object.values(surveys).splice(1);
    const surveyResponseList = Object.values(surveyResponses);

    const [deleteResponseMode, setDeleteResponseMode] = useState(false)

    useEffect(() => {
        dispatch(getSurveys());
        dispatch(getSurveyResponses(sessionUser.id));
    }, [dispatch])


    const toggleDeleteResponse = () => {
        setDeleteResponseMode(!deleteResponseMode)
    }

    return (
        <div className='survey-page__container'>

        <div id="surveys__container">
                {surveyList.map(survey => {
                    let completed = surveyResponseList.map(response => response.survey_id).includes(survey.id)
                    return (
                        <SurveyButton
                            key={survey.id}
                            name={survey.name}
                            id={survey.id}
                            completed={completed}
                            deleteResponseMode={deleteResponseMode}
                            setDeleteResponseMode={setDeleteResponseMode}
                        />
                    )
                }
                )}
            </div>
            <h5
                    className={`edit-toggle underline-slide activated-${deleteResponseMode}`}
                onClick={toggleDeleteResponse}>
                Delete A Response
            </h5>
            </div>
            )
                }


export default SurveyList;
