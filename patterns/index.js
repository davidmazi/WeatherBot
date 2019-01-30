const patternDict = [{
    pattern: '\\b(hi|hello|hey)\\b',
    intent: 'Hello'
},
{
    pattern: '\\b(bye|exit)\\b',
    intent: 'Exit'
},
{
    pattern: '\\b(hot|cold|weather)\\b',
    intent: 'Weather'
},
{
    pattern: '\\b(today|now)\\b',
    intent: 'Today'
}];

module.exports = patternDict;