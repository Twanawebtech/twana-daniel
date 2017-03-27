//SendGrid API Key
var SG_KEY = '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';

//people we are allowed to email
var RECIPS = ["twanawebtech@gmail.com","twanawebtech@gmail.com"];

var helper = require('sendgrid').mail;

function main(args) {

    let from_email = new helper.Email(RECIPS[0]);
    let to_email = new helper.Email(RECIPS[0]);

    /*
     Ok, so args will be our form data. Look for a few special item
     */

    if(args["_from"]) {
        from_email = new helper.Email(args["_from"]);
    }

    if(args["_to"]) {
        if(RECIPS.indexOf(args["_to"]) === -1) {
            return {error:"Invalid _to address: "+args["_to"]};
        } else {
            to_email = new helper.Email(args["_to"]);
        }
    }

    let subject = 'Form Submission';

    if(args["_subject"]) {
        subject = args["_subject"];
    }

    /*
     Now loop through the rest of the args to create the form submission email.
     */

    //todo: make date a bit prettier
    let date = new Date();
    let content = `
Form Submitted at ${date}
--------------------------------
`;

    for(let key in args) {
        //blanket ignore if _*
        if(key.indexOf("_") != 0) {
            content += `
${key}:         ${args[key]}
`;
        }
    }

    let mailContent = new helper.Content('text/plain', content);
    let mail = new helper.Mail(from_email, subject, to_email, mailContent);
    let sg = require('sendgrid')(SG_KEY);

    return new Promise( (resolve, reject) => {

            var request = sg.emptyRequest({
                method: 'POST',
                path: '/v3/mail/send',
                body: mail.toJSON()
            });

    sg.API(request, function(error, response) {
        if(error) {
            console.log(error.response.body);
            reject({error:error.message})
        } else {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
            resolve({result:'Ok'});
        }
    });

});

}

exports.main = main;