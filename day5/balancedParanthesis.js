let expression = '{({}{(})}';

function isBalanced(expression) {
    let array = [];

    for (let bracket of expression) {
        if (bracket == '{' || bracket == '(') {
            array.push(bracket);
        } else if (bracket == '}') {
            if (array.length == 0) return false;
            else if (array[array.length - 1] != '{') return false;
            else array.pop();
        } else if (bracket == ')') {
            if (array.length == 0) return false;
            else if (array[array.length - 1] != '(') return false;
            else array.pop();
        }
    }

    if (array.length == 0) return true;
    else return false;
}

if (isBalanced(expression)) {
    console.log('1');
} else {
    console.log('0');
}
