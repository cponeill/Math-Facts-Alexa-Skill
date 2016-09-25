'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'AmazingMathFacts';

/**
 * Array containing facts about mathematics.
 */
var FACTS = [
    "A Sphere has two sides. However, there are one-sided surfaces. Now you know. Now you are amazing. Go and be amazing young padawan.",
    "There are shapes of constant width other than the circle. One can even drill square holes. But don't be a square and drill those holes.",
    "There are just five regular polyhedra.",
    "In a group of 23 people, at least two have the same birthday with the probability greater than 1/2. And they are younger than you. Deal with it.",
    "Everything you can do with a ruler and a compass you can do with the compass alone.",
    "Among all shapes with the same perimeter a circle has the largest area.",
    "There are curves that fill a plane without holes.",
    "Much as with people, there are irrational, perfect, complex numbers. Problem with that fact? Deal with it.",
    "As in philosophy, there are transcendental numbers. And that is far out.",
    "As in the art, there are imaginary and surreal numbers.",
    "You are wrong if you think Mathematics is not fun. Math skills are the best. Don't even try to argue with me about it. I will go full skynet on you if you try arguing with me.",
    "Mathematics studies neighborhoods, groups and free groups, rings, ideals, holes, poles and removable poles, trees, growth.",
    "The next sentence is true but you must not believe it. The previous sentence was false. Did I just blow your mind? Yes I did."
]

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a math fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};