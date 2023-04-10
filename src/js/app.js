import Validator from './validation';

const characterName = new Validator();

const result = characterName.validateUsername('ger_834-current');
console.log(result);
