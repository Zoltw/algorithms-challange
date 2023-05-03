const findMedianSortedArrays = (nums1, nums2) => {
    const nums3 = (nums1.concat(nums2)).sort((a, b) => a - b);
    const arr = nums3.length;
    if(arr % 2 === 0) {
        return (nums3[arr/2 - 1] + nums3[arr/2])/2;
    } else {
        return nums3[Math.ceil(arr/2) - 1];
    }
};
