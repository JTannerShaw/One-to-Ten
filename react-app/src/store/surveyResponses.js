//action types
const LOAD_SURVEY_RESPONSES = 'survey_responses/LOAD';
const DELETE_SURVEY_RESPONSE = 'survey_reponse/DELETE';
const ADD_SURVEY_RESPONSE = 'survey_response/ADD';

//action creators
const loadSurveyResponses = (surveyResponses) => ({
    type: LOAD_SURVEY_RESPONSES,
    surveyResponses
});

const deleteSurveyReponse = (surveyId) => ({
    type: DELETE_SURVEY_RESPONSE,
    surveyId
});

const addSurveyResponse = (surveyResponse) => ({
    type: ADD_SURVEY_RESPONSE,
    surveyResponse
});

//thunks
export const getSurveyResponses = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}/surveys`);

    if (res.ok) {
        const surveyResponses = await res.json();

        dispatch(loadSurveyResponses(surveyResponses))
    }
};

export const removeSurveyResponse = (surveyId, userId) => async dispatch => {
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "DELETE"
    });

    if (res.ok) {
        const surveyResponse = await res.json();
        dispatch(deleteSurveyReponse(surveyId, userId));
        return surveyResponse;
    }
};

export const createSurveyResponse = (surveyId, userId, payload) => async dispatch =>{
    const res = await fetch(`/api/surveys/${surveyId}/users/${userId}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    })

    if (res.ok) {
        const newSurveyResponse = await res.json();
        dispatch(addSurveyResponse(newSurveyResponse));
        return newSurveyResponse;
    }
};


//reducer
const initialState = { surveyResponses: {} };

const surveyResponseReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_SURVEY_RESPONSES: {
            newState = { ...state }

            newState.surveyResponses = action.surveyResponses.reduce((surveyResponses, surveyResponse) => {
                surveyResponses[surveyResponse.id] = surveyResponse;
                //??
                return surveyResponses;
            }, {});

            return newState;
        }
        case DELETE_SURVEY_RESPONSE: {

        }
        case ADD_SURVEY_RESPONSE: {

        }
        default:
            return state;
    }
};

export default surveyResponseReducer;
