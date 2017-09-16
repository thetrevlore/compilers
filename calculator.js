var tokenTypes = [
    ["NUMBER",    /^\d+/ ],
    ["ADD",       /^\+/  ],
    ["SUB",       /^\-/  ],
    ["MUL",       /^\*/  ],
    ["DIV",       /^\//  ],
    ["LPAREN",    /^\(/  ],
    ["RPAREN",    /^\)/  ]
];

function Calculator(inputString){
    this.tokenStream = this.lexer(inputString)
}

Calculator.prototype.lexer = function(inputString){
    return inputString.split("").map((token) => {
        let obj = {};

        tokenTypes.forEach((types) => {
            if(token.match(types[1])){
                obj["name"] = types[0];
                obj["value"] = token;
            }
        });

        return obj;
    });
}

Calculator.prototype.peek = function(){
    return this.tokenStream[0] || null;
}

Calculator.prototype.get = function(){
    return this.tokenStream.shift();
}


let calc = new Calculator("1+(2*3)+4");
console.log("Before get: ", calc.tokenStream);
calc.get();
console.log("After get: ", calc.tokenStream);

