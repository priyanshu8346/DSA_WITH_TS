// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.


function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let stack:number[] =[]
    let hmap: {[key: number]: number} ={}
    let ans:number[] =[]

    for(let i: number = nums2.length - 1; i >= 0; i--){
        while(stack.length!== 0 && nums2[i] >= stack[stack.length - 1]){
            stack.pop()
        }
        if (stack.length === 0){
            stack.push(nums2[i])
            hmap[nums2[i]] = -1
        }
        else{
            hmap[nums2[i]] = stack[stack.length - 1]
            stack.push(nums2[i])
        }
    }
    for (const num of nums1){
        ans.push(hmap[num])
    }
    return ans
};