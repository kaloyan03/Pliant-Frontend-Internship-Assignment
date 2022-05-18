function calculateTeamBestVelocity(sprintsArray) {
    if (sprintsArray.length < 3) {
        return Error('Sprints cannot be less than 3!');
    }

    let bestSprintVelocity = 0;

    for (let i = 0; i < sprintsArray.length; i++) {
        try {
            let currFirstSprint = sprintsArray[i];
            let currSecondSprint = sprintsArray[i + 1];
            let currThirdSprint = sprintsArray[i + 2];

            let currentSprintVelocity = currFirstSprint + currSecondSprint + currThirdSprint;

            if (currentSprintVelocity > bestSprintVelocity) {
                bestSprintVelocity = currentSprintVelocity;
            }
        } catch {
            break;
        }

    }

    return bestSprintVelocity;
}


// console.log(calculateTeamBestVelocity([11, 14, 10, 12]));
// console.log(calculateTeamBestVelocity([12, 9, 1, 5, 11, 5]));
// console.log(calculateTeamBestVelocity([76, 80]));
// console.log(calculateTeamBestVelocity([76, 80, 81, 77, 83, 78, 80]));

