function initializeCandidates(candidateNames) {
        let candidates = [];
        for (let i = 0; i < candidateNames.length; i++) {
            candidates.push({
                name: candidateNames[i],
                votes: 0
            });
        }
        return candidates;
    }
    function conductVoting(candidates, numVoters) {
    for (let i = 1; i <= numVoters; i++) {
        let vote = prompt("Voter " + i + ", enter the name of the candidate you want to vote for (press Enter for an empty vote):");
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name === vote) {
                candidates[j].votes++;
                console.log("Vote recorded for " + vote);
                break;
            }
        }
        if (vote === "") {
            console.log("Empty vote recorded");
        } else {
            console.log("Invalid candidate name. Vote not recorded.");
        }
    }
}
    function announceWinnerAndResults(candidates) {
        let winner = candidates[0];
    for (let i = 1; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
        console.log("The winner is " + winner.name + " with " + winner.votes + " votes.");
        console.log("Results:");
        candidates.forEach(function(candidate) {
            console.log(candidate.name + ": " + candidate.votes + " votes");
        });
    }
     let numCandidates = parseInt(prompt("Enter the number of candidates:"));
    let candidateNames = [];
    for (let i = 1; i <= numCandidates; i++) {
        let candidateName = prompt("Name for candidate " + i + ":");
        candidateNames.push(candidateName);
    }
    let candidates = initializeCandidates(candidateNames);
    let numVoters = parseInt(prompt("Enter the number of voters:"));
    conductVoting(candidates, numVoters);
    announceWinnerAndResults(candidates);