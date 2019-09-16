const { sum, sumNew, sumToFixed } = require('../src/math.js')

describe('Math addition test', () => {
  it("tested by RegExp", () => {
    // Given
    const firstNumber = 2
    const secondNumber = 2
    let consoleTable = [];
    // When
    for (let i = 0; i <= firstNumber; i=sumToFixed(i,0.1)) {
    	for (let j = 0; j <= secondNumber; j=sumToFixed(j,0.1)) {
    		let total = i+j;
    		let sumNewTotal = sumNew(i,j);
    		let sumToFixedTotal = sumToFixed(i,j);

            //匹配最多两位小数  注意：.小数点可以匹配除了换行符（\n）以外的任意一个字符
    		let regexp = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    		if(sumNewTotal!=0){
                // Then
    			expect(sumNewTotal.toString()).toMatch(regexp);
    		}
    		let tableItem = {
    			normalAdd:total,
    			addByPrecision:sumNewTotal,
    			addThenToFixed:sumToFixedTotal,
    			i:i,
    			j:j
    		}
            // 未通过的值
    		if(!regexp.test(total)){
    			consoleTable.push(tableItem);
    		}
    	}
    }
    // console.table(consoleTable);
  })
})

describe('Math module', () => {
  it("tested by toFixed", () => {
    // Given
    const firstNumber = 2
    const secondNumber = 2
    // When
    for (let i = 0; i <= firstNumber; i=sumToFixed(i,0.1)) {
        let consoleTable = [];
        for (let j = 0; j <= secondNumber; j=sumToFixed(j,0.1)) {
            let total = i+j;
            let sumNewTotal = sumNew(i,j);
            let sumToFixedTotal = sumToFixed(i,j);
            // Then
            expect(sumNewTotal).toBe(sumToFixedTotal);
            
            // let tableItem = {
            //     normalAdd:total,
            //     addByPrecision:sumNewTotal,
            //     addThenToFixed:sumToFixedTotal,
            //     i:i,
            //     j:j
            // }
            // consoleTable.push(tableItem);
        }
        // console.table(consoleTable);
    }
  })
})
