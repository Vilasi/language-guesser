# language-guesser

A Node.js script that takes a string argument passed in the CLI and attempts to guess which language it is. Only supports natural linguistic languages. If JavaScript is passed as an argument it will delete your system's root directory (I'm jk not really).

Packages to use: 1) colors - colorize 2) franc - Take language sample and return 3 letter str language code 3) langs - Take 3 letter str language code and return plain english language (IE, langs.where("3", "kor");
// {"name":"Korean", "local":"한국어", "1":"ko", "2":"kor", "2T":"kor", "2B":"kor", "3":"kor"})
