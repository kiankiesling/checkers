export function arrayEquals(A1: [], A2: []) {
    if (A1.length != A2.length) {
        return false;
    }
    for (let a in A1) {
        if (A1[a] != A2[a]) {
            return false;
        }
    }
    return true;
}