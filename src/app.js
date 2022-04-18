let str = `
010-1234-5678
mingu@email.com
http://info.cern.ch/
home of the first website
abbcccdddd
http://localhost:1234/
가나다라마바사아자차카타파하
`;

console.log(str.match(/.{1,}(?=@)/g));
