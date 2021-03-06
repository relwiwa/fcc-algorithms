/*  Return true if the passed string looks like a valid US phone number.
    The user may fill out the form field any way they choose as long as it
    has the format of a valid US number. The following are examples of valid
    formats for US numbers (refer to the tests below for other variants):
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
    For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
    Your job is to validate or reject the US phone number based on any combination of the formats
    provided above. The area code is required. If the country code is provided, you must confirm
    that the country code is 1. Return true if the string is a valid US phone number;
    otherwise return false. */

const telephoneCheck = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError;
  }
  /* pattern explained:
    (1|1(\s|-))?      optional country code, followed by space/dash or not
                      need to ensure, that there is no trailing space/dash
                      without country code
    \d{3}\(s|-)?      group of three digits followed by an optional
                      space/dash
                      there are 2 blocks of three digits and one of four
    (\s|-)            space or dash
    (\d{3}\)|\d{3})   area code with or without brackets
    -(?!\()           dash is only allowed, when not followed by bracket
    (\(\d{3}\)(?!-)   area code in brackets is only allowed, when not
                      followed by dash
    (?!-)             not followed by dash */

  const pattern = /^(1|1(\s|-(?!\()))?(\(\d{3}\)(?!-)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g;
  return pattern.test(str);
};

module.exports = telephoneCheck;
