const assert = require('assert');
const ruleArt = require('../../../src/compile/adapter/rule.art');
const esTokenizer = require('../../../src/compile/es-tokenizer');


module.exports = {
    before: () => {
        console.log('#compile/adapter/rule.art');
    },

    'rule.art': {
        '_split': ()=>{
            let code;
            let esTokens;
            let result;

            code = 'a b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a', 'b', 'c'], result);

            code = 'a b   c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a', 'b', 'c'], result);    

            code = 'a.b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a.b', 'c'], result);   

            code = 'a. b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a.b', 'c'], result);

            code = 'a[b] c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a[b]', 'c'], result);  

            code = 'a["b"] c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a["b"]', 'c'], result); 

            code = 'a[" b "] c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a[" b "]', 'c'], result); 

            code = 'a + b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a+b', 'c'], result);

            code = 'a - b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a-b', 'c'], result);

            code = 'a * b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a*b', 'c'], result);

            code = 'a / b c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a/b', 'c'], result);

            code = '++ a c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['++a', 'c'], result);

            code = 'a + b + c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a+b+c'], result);

            code = 'a + b.f + c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a+b.f+c'], result);

            code = 'a ? b : c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a?b:c'], result);

            code = 'a.f ? b : c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a.f?b:c'], result);

            code = 'a. f ? b : c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a.f?b:c'], result);

            code = 'a ? b : c . d';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a?b:c.d'], result);

            code = 'a ? b : c e';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['a?b:c', 'e'], result);

            code = '(a + b) / c';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['(a+b)/c'], result);

            code = '(a + b) / c[a]';
            esTokens = esTokenizer(code);
            result = ruleArt._split(esTokens);
            assert.deepEqual(['(a+b)/c[a]'], result);

        }
    }
};

