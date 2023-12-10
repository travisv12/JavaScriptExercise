let numParticipants = prompt("Enter the number of participants:");

    numParticipants = parseInt(numParticipants);

    if (isNaN(numParticipants) || numParticipants <= 0) {
        document.write("<h2>Please enter a valid number of participants.</h2>");
    } else {
        let participantNames = [];
        for (let i = 0; i < numParticipants; i++) {
            let participantName = prompt("Enter the name of participant " + (i + 1) + ":");
            participantNames.push(participantName);
        }
        participantNames.sort();
        document.write("<h2>Participant Names:</h2>");
        document.write("<ol>");
        for (let i = 0; i < participantNames.length; i++) {
            document.write("<li>" + participantNames[i] + "</li>");
        }
        document.write("</ol>");
    }





