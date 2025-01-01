// 30 dec
// Recursion Time Complexity

// Technique1 : Substitution method(used when +k or -k)

// function fun(n){
//     if(n==1){
//         return 1;
//     }
//     return 1+fun(n-1)
// }

// TC - O(n)


// function fun(n){
//     if(n==1){
//         return 1;
//     }
//     return n + fun(n-1)
// }

// TC - O(n^2)

// Technique - 2 Tree method  (for *k or /k)

// function fun(n){
//     if(n==1){
//         return 1;
//     }

//     return 2*fun(n/2)
// }

// TC = O(n)

// function fun(n){
//     if(n==1){
//         return 1
//     }
//     return 2*fun(n/2) + n;
// }

// TC = O(nlogn)

// Ultimate technique - Master method

// T(n) = aT(n/b) + f(n),
// where,
// n = size of input
// a = number of subproblems in the recursion
// n/b = size of each subproblem. All subproblems are assumed 
//      to have the same size.
// f(n) = cost of the work done outside the recursive call, 
//       which includes the cost of dividing the problem and
//       cost of merging the solutions

// Here, a ≥ 1 and b > 1 are constants, and f(n) is polynomial

// 1. If f(n) = O(nlogb a-ϵ), then T(n) = Θ(nlogb a).

// 2. If f(n) = Θ(nlogb a), then T(n) = Θ(nlogb a * log n).

// 3. If f(n) = Ω(nlogb a+ϵ), then T(n) = Θ(f(n)).

