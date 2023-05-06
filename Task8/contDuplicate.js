const containsDuplicate = (nums) => {
    const obj = {};

    for(const value of nums) {
        if(value in obj) {
            return true;
        } else {
            obj[value] = 1;
        }
    }
    return false;
};
