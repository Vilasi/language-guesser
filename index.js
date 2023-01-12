import colors from 'colors';
import { franc, francAll } from 'franc';
import langs from 'langs';

// Gets 3rd argument when running node script and processes therein
const languageCode = franc(process.argv[2]);
if(languageCode === 'und') {
    console.log('This language sample is unknown. Please provide a larger sample size and ensure the passed sample is a string contained withing quotes " "'.red);
} else {
    const languageAnalysisObject = langs.where('3', languageCode);
    console.log(`Our best guess is that this language is: ${languageAnalysisObject.name.green}`);
    console.log(`Local language name: ${languageAnalysisObject.local.green}`);
    console.log('Not the language you were expecting? Try entering a longer sample size.');
}
