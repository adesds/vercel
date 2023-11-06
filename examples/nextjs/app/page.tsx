type ClassifiedEmails = {
  personal: string[];
  business: string[];
  other: string[];
};

function classifyAndExtractEmails(textList: string[]): ClassifiedEmails {
  const emailRegex: RegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
  const classifiedEmails: ClassifiedEmails = {
    personal: [],
    business: [],
    other: [],
  };

  textList.forEach((text: string) => {
    const emailsInText: string[] | null = text.match(emailRegex);
    if (emailsInText) {
      emailsInText.forEach((email: string) => {
        const domain: string = email.split('@')[1].toLowerCase();
        if (domain.includes('gmail') || domain.includes('yahoo')) {
          classifiedEmails.personal.push(email);
        } else if (domain.includes('company') || domain.includes('business')) {
          classifiedEmails.business.push(email);
        } else {
          classifiedEmails.other.push(email);
        }
      });
    }
  });

  return classifiedEmails;
}

// Example list of text that may contain email addresses
const textList: string[] = [
  "meverdel@oberlin.edu:lambofgod",
  "yvysarobafub@yahoo.com:yslqgf019",
  "taigue@hotmail.com:4410Tryon!",
  "fsufan_1973@mail.ru:lordgod33",
  "itssammietay@aim.com:Cassie11",
  "eddie.basketball@hotmail.com:eddmont.",
  "william_lattao@yahoo.com:primus88",
  "matthew3959bwp@topemail24.info:hf9482GafThe",
  "matthew3959bwp@topemail24.info:hf9482GafThe",
];

// Classify and extract email addresses from the list of text
const classifiedEmails: ClassifiedEmails = classifyAndExtractEmails(textList);

// Print the classified email addresses
console.log("Personal Emails:");
console.log(classifiedEmails.personal);
console.log("Business Emails:");
console.log(classifiedEmails.business);
console.log("Other Emails:");
console.log(classifiedEmails.other);
