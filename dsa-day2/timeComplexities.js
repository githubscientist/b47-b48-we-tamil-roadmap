/*
    Time Complexity

    Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm

        - time complexity
        - space complexity
    
    time complexity => amount of time taken by an algorithm to run!
    space complexity => amount of space required by an algorithm to run!

    Mathematical notations: Asymptotic Notations

    1. Big - 'O'(Oh) - Upper Bound
    2. Big - 'Ω'(Omega) - Lower Bound
    3. Big - 'θ'(Theta) - Tight Bound

    Situations/Cases: (Input)

    1. Worst Case
    2. Best Case
    3. Average Case

    Time Complexity: Upper Bound, Worst Case - Big - 'O'

    Example:

    Algorithm: Linear Search

    Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Case(first element): If the key = 1, Comparisons => 1 => Best Case => O(1) - abbr: Order of 1

    Case(middle element): If the key = 5, Comparisons => 5 => Average Case => O(N/2) => O(N)

    Case(last element): If the key = 10, Comparisons => 10 => Worst Case => O(N)
        (element not present): If the key = 13, Comparisons => 10 => Worst Case => O(N)
*/

/*
    Example 1:

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    Time Complexity: O(N+M)

    Options:

    O(1)
    O(logN)
    O(N)
    O(N logN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    Solution:

    let a = 0, b = 0; // declarations, initializations, conditionals, expressions, assignments
    => O(1), Constant Time

    for (i = 0; i < N; i++) {
        a = a + rand();
    }

    Total Executions = Values of i
    i = 0, 1, 2, 3, 4, 5, 6, ...., N-1 => N

    N = 5, i = 0, 1, 2, 3, 4 => 5 executions
    N = 10, executions = 10

    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total executions = values of j
    j = 0, 1, 2, 3, 4, 5...., M-1 => M

    total time complexity, T(N, M) = 1 + N + M
                                   = N + M (Since 1 is constant)
                                   = O(N + M)
*/

/*
    Example: 2

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }

    Time Complexity: O(N)

    total time complexity, T(N) = 1 + N + N
                                = N + N
                                = 2N
                                = N (Since 2 is a constant)
                                = O(N)
*/

/*
    Example: 3

    let M = 2N;
    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }

    total time complexity, T(N) = 2 + N + M
                                = 2 + N + 2N
                                = 2 + 3N
                                = 3N
                                = N
                                = O(N)
*/

/*
    Example: 4

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < M; j++) {
            b = b + rand();
        }
    }

    time complexity, T(N) = 1 + N * M
                          = N * M
                          = O(N * M)
*/

/*
    Example: 5

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    time complexity, T(N) = 1 + N * N
                          = N * N
                          = N^2
                          = O(N^2)

    1. Make some assumptions
    2. Find the number of executions for every assumption
    3. Look for the pattern between the N and the number of executions
    4. Derive the time complexity

    let a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }

    N = 4,
        i = 0; j = 0, 1, 2, 3 => 4 times
        i = 1; j = 0, 1, 2, 3 => 4 times
        i = 2; j = 0, 1, 2, 3 => 4 times
        i = 3; j = 0, 1, 2, 3 => 4 times

        total executions = 4 + 4 + 4 + 4
                         = 16

    N = 4, executions = 16
    N = 5, executions = 25
    N = 6, executions = 36

    O(N^2)
*/

/*
    Example: 6

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Time Complexity: O(N^2)

    Assume N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 5 executions
    i = 1; j = 5, 4, 3, 2 => 4 executions
    i = 2; j = 5, 4, 3 => 3 executions
    i = 3; j = 5, 4 => 2 executions
    i = 4; j = 5 => 1 execution

    total executions = 5 + 4 + 3 + 2 + 1 
                     = 15

    For N = 4, executions = 10
    For N = 5, executions = 15
    For N = 6, executions = 21
    For N = 10, executions = 55

    Executions = Sum of the first N natural numbers
               = N + N-1 + N-2 + N-3 + N-4+ .... 1
               = (N * (N+1))/2
    
    total time complexity, T(N) = 1 + [N * (N+1)]/2
                                = 1 + 1/2 * (N^2 + N)
                                = 1/2 * (N^2 + N)
                                = N^2 + N
                                = N^2 (since N^2 is the highest polynomial)
                                = O(N^2)

*/