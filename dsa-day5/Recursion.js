/*
    Recursion: is a function that calls itself.

    Example: for a recursion function
*/

// named function
// function sayHello() {
//     console.log('hello');    
// }

// sayHello();

// recursion function
// function sayHello() {
//     console.log('hello');    
//     sayHello();
//     return; // non-reachable code or dead code
// }

// sayHello();

/*
    sayHello()
        - console.log('hello')
        - sayHello()
            - console.log('hello')
            - sayHello()
                - console.log('hello')
                - sayHello()
                    - console.log('hello')
                    - sayHello()
                        ...
                        ...
*/

// recursive function
// function sayHello() {
//     console.log('hello');    
//     sayHello();
// }

// sayHello();

// iteration
// Problem: print the message hello N times

// function sayHello(N) {
//     for (let i = 1; i <= N; i++){
//         console.log('hello');
//     }
// }

// sayHello(3);

// function sayHello(N) {
//     if (N == 0) return;

//     console.log('hello');
//     sayHello(N-1);
// }

// sayHello(3);

/*
    Recursion Tree

    sayHello(3)
        - N = 3; 3 == 0; false
        - console.log('hello')
        - sayHello(2)
            - N = 2; 2 == 0; false
            - console.log('hello')
            - sayHello(1)
                - N = 1; 1 == 0; false
                - console.log('hello')
                - sayHello(0)
                    - N = 0; 0 == 0; true; return

    sayHello(3)
*/

// program: write a recursion function to print the natural numbers from N to 1

/*
    Input: 5
    Output:
    5
    4
    3
    2
    1

    Input: 3
    Output:
    3
    2
    1
*/

// function print(N) {
//     if (N == 0) return;
//     console.log(N);
//     print(N - 1);
// }

// print(3);

// function print(N) {
//     if (N == 0) return;
//     print(N - 1);
//     console.log(N);
//     print(10);
// }

// print(5);
/*
    print(5)
        - N = 5; 5 == 0; false
        - print(4)
            - N = 4; 4 == 0; false
            - print(3)
                - N = 3; 3 == 0; false
                - print(2)
                    - N = 2; 2 == 0; false
                    - print(1)
                        - N = 1; 1 == 0; false
                        - print(0)
                            - N = 0; 0 == 0; true; return
                        - console.log(1) x
                    - console.log(2) x
                - console.log(3) x
            - console.log(4) x
        - console.log(5) x

    print(5)
*/

// let array = [34, 12, 645, 23, 76, 3];

// function reverseArray(array, index) {
//     if (index == array.length) return;

//     console.log(array[index]);
//     reverseArray(array, index + 1);
// }

// reverseArray(array, 0);

