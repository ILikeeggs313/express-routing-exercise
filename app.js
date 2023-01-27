const express = require('express');
const res = require('express/lib/response');
const ExpressError = require('../../../Downloads/express-routing-solution/expressError');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/mean', (req, res, next) => {
    function findMean(nums){
        if(nums.length === 0) return 0;
        return nums.reduce(function (acc, cur) {
          return acc + cur;
        }) / nums.length
      };
    if (!req.query.nums){
        throw new ExpressError('bad request, invalid numbers', 400)
    }
    let result = {
        operation: 'mean',
        result: findMean(nums)
    }
    return res.send(result);
})

app.get('/median', (req, res, next) => {
    function findMedian(nums){
        nums.sort((a, b) => a - b);

        let middleIndex = Math.floor(nums.length / 2);
        let median;

        if (nums.length % 2 === 0) {
            median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
        } else {
            median = nums[middleIndex];
        }
        return median
    }
    try{
        let result = {
            operation: 'median',
            result: findMedian(nums)
        }
        return res.send(result);
    } catch (e){
        return next(new ExpressError('bad request, invalid numbers', 400))
    }
    
})

app.get('/mode', (req, res, next) => {
    function getMode(nums){
        nums = [1,3,5,7];
        let empty = []
        for(i = 0; i < list.length; i++){
            if(nums[i] == nums[i+1]){
                empty = list[i]
                i += 1
            }
            else{
                i += 1
            }
        }
    }
    if(!req.query.nums){
        throw new ExpressError('bad request, invalid array', 400)
    }
    let result = {
        operation: 'mode',
        result: getMode(nums)
    }
    return res.send(result)
})

app.listen(3000, () => {
    console.log('server starting on port 3000')
})