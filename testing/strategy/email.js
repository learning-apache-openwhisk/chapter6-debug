const Validator = require("./lib/validator.js")

function checkEmail(input) {
  var re = /\S+@\S+\.\S+/;
  //var re = /\S+\.\S+@\S+\.\S+/;
  return re.test(input)	
}

var errmsg = " does not look like an email"

class EmailValidator extends Validator {
    validator(value) {
        let error = super.validator(value);
        if (error) return error;
        if(checkEmail(value))
            return "";
        return value+errmsg
    }
}

function main(args) {
    if(args.errmsg) {
        errmsg = args.errmsg
        delete args.errmsg
    }
    return new EmailValidator("email").validate(args)
}

module.exports = {
	main: main,
	checkEmail: checkEmail
}
