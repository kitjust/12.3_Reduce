
[1,9,9,2,1,1,2,4,1,2,6].reduce(function(accumulator,next){
    return accumulator += next;
})
38

[1,9,9,2,1,1,2,4,1,2,6].reduce(function(accumulator,next){
    return accumulator += next;
}, -19)
19

[1,9,9,2,1,1,2,4,1,2,6].reduce(function(accumulator,next){
    return accumulator += next;
}, -38)
0


function extractValue(arr, key) {
    return arr.reduce(function(accumulator, next){
        accumulator.push(next[key])
        return accumulator
    }, [])
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


function vowelCount(str) {
    const vowels = "aeiou" 
    return str.split('').reduce(function(accumulator,next) {
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1) {
            if(accumulator[lowerCased])
                accumulator[lowerCased]++
            else
                accumulator[lowerCased] = 1
        }
        return accumulator
    }, {});
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};


function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator,next,idx) {
        accumulator[idx][key] = value;
        return accumulator
    },arr);
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
addKeyAndValue(arr, 'title', 'Instructor')
/*[
    {title: 'Instructor', name: 'Elie'},
    {title: 'Instructor', name: 'Tim'},
    {title: 'Instructor', name: 'Matt'},
    {title: 'Instructor', name: 'Colt'}
]*/


function partition(arr, cb) {
    return arr.reduce(function(accumulator,next) {
        if(cb(next))
            accumulator[0].push(next)
        else
            accumulator[1].push(next)
        return accumulator
    }, [ [], [] ]);
}

function isEven(val) {
    return val % 2 === 0;
}
const arr = [1,2,3,4,5,6,7,8];
partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}
const names = ['Elie', 'Colt', 'Tim', 'Matt'];
partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
