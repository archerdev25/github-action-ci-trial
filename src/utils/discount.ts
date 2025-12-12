export const calculateDiscount = (price: number, isMember: boolean): number => {
    if (isMember) {
        return price * 0.9; // 會員打 9 折
    } else {
        return price; // 非會員原價
    }
};
