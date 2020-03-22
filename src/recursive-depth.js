module.exports = class DepthCalculator {
             /* throw 'Not implemented'; */
        // remove line with error and write your code here
        calculateDepth(arr) {
            let depth = 0;
            const calculateDepth = this.calculateDepth.bind(this);
            if (arr && typeof arr === 'object' && arr.length >= 0) {
                depth++;
                if (arr.length > 0 ) {
                    const itemsDepth = arr.map(calculateDepth);
                    depth += Math.max.apply(this, itemsDepth);
                }
            }
            return depth;
        }
    }
