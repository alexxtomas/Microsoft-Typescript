/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

interface Loan {
    principal: number
    interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    const { principal, interestRate } = loanTerms
    // Calculates the monthly payment of an interest only loan
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}



/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(conventionalLoanTerms: ConventionalLoan): string {
    const { interestRate, months, principal } = conventionalLoanTerms
    // Calculates the monthly payment of a conventional loan
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = principal * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 3000, interestRate: 10 });
let conventionalPayment = calculateConventionalLoanPayment({ interestRate: 10, months: 12, principal: 50000 });

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
