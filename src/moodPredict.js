

// example questions <- actual log will be done by some sort of interface with the frontend
// --------------------------------------
const q0 = new questionResponse(0.2, 0);
answerList.push(q0);
const q1 = new questionResponse(0.4, 1);
answerList.push(q1);
const q2 = new questionResponse(0.5, 2);
answerList.push(q2);
const q3 = new questionResponse(0.5, 3);
answerList.push(q3);
// --------------------------------------

console.log(answerList);



function updateMoodValues(anx, sad, ang, hap) {
    moodDict.anxiety += anx;
    moodDict.sadness += sad;
    moodDict.anger += ang;
    moodDict.happiness += hap;
}

function questionUpdateValues(qNum, val) {
    val = val/10;
    switch (qNum) {
        case 1: // Did you sleep well last night?
            updateMoodValues(1.5 * (0.7 - val), 0, 1.2 * (1 - val), 0.5 * val);
            break;
        case 2: // How is you appetite today?
            updateMoodValues(0.3 * Math.abs(0.5 - val), 0.2 * Math.abs(0.5 - val), 0, 0);
            break;
        case 3: // have you felt energised when trying to work?
            updateMoodValues(0.8 * (0.6 - val), 1.0 * (0.9 - val), 0.8 * val, 0.5 * val);
            break;
        case 4: // How much is going through your head?
            updateMoodValues(val * 1.5, 0, val * 1.0, val * 0.5);
            break;
        case 5: // How easy did you find it to relax today?
            updateMoodValues(0.7 * (0.8 - val), 0.6 * (0.6 - val), 0.5 * (1 - val), 0.8 * val);
            break;
        case 6: // How much interest or pleasure do you find in doing things today?
            updateMoodValues(1 * (0.7 - val), 1.5 * (0.8 - val), 0.5 * (0.5 - val), val * 2);
            break;
        case 7: // How sociable are you today when compared to a typical day?
            updateMoodValues(1.5 * (1 - val), 1.1 * (1 - val), 1 * (0.7 - val), val * 1.0);
            break;
        case 8: // Do you feel hot in the upper part of your body?
            updateMoodValues(0.5 * val, 0.2 * val, 0.6 * val, 0.2 * val);
            break;
        case 9: // Are your muscles stiff and tight?
            updateMoodValues(0.5 * val, 0.2 * val, 0.6 * val, 0.2 * val);
            break;
        case 10: // Are you experiencing a headache or any other kind of pain?
            updateMoodValues(0.5 * val, 0.2 * val, 0.6 * val, 0.2 * val);
            break;
        



            /*
        case 0: // How much is going through your head?
            updateMoodValues(val * 1.5, 0, val * 1.0, val * 0.5); 
            break;
        case 1: // Did you find your day enjoyable?
            updateMoodValues(1 * (0.7 - val), 1.5 * (0.8 - val), 0.5 * (0.5 - val), val * 2);
            break;
        case 2: // How hungry have you been feeling?
            updateMoodValues(0.3 * Math.abs(0.5 - val), 0.2 * Math.abs(0.5 - val), 0, 0);
            break;
        case 3: // How sociable are you today compared to usual?
            updateMoodValues(1.5 * (1 - val), 1.1 * (1 - val), 1 * (0.7 - val), val * 1.0);
            break;

            // many more cases (as many as questions)
            */

        default:
            console.log("invalid question number");
    }
}



// evaluate every question response
for (const qr of answerList) {
    questionUpdateValues(qr.questionNumber, qr.questionAnswer);
}
 

console.log(moodDict);


// find argmax of mood
var largestMoodScore = 0;
var predictedMood = "";
for(let mood in moodDict) {
    if (largestMoodScore < moodDict[mood]) {
        predictedMood = mood;
        largestMoodScore = moodDict[mood];
    }
}


console.log("Predominant mood is: " + predictedMood)

