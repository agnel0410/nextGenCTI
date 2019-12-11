
let response

exports.main = async (event, context, callback) => {
    try {
        console.log(JSON.stringify(event))
        console.log(`event.bot.name = ${event.bot.name}`)
        console.log(`Utterance = ${event.inputTranscript}`)
        !event.inputTranscript
					? (response = {
                            sessionAttributes: {
                                capturedUtterance: false,
                                subject: event.inputTranscript
                            },
                            dialogAction: {
                                type: "Close",
                                fulfillmentState: "Fulfilled",
                                message: {
                                    contentType: "PlainText",
                                    content: "Sorry i did not understand that!. Please select an option."
                                }
							}
					  })
					: (response = {
                            sessionAttributes: {
                                capturedUtterance: true,
								subject: event.inputTranscript
							},
							dialogAction: {
								type: "Close",
								fulfillmentState: "Fulfilled",
								message: {
									contentType: "PlainText",
									content: "Okay."
								}
							}
					  });

    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
