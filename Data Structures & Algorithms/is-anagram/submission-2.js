class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let objS = {}
        let objT = {}
        for(let i = 0; i < s.length; i++){
            if(objS[s[i]]){
                objS[s[i]] += 1
            }else{
            objS[s[i]] = 1
            }
        }
        for(let i = 0; i < t.length; i++){
            if(objT[t[i]]){
                objT[t[i]] += 1
            }else{
                objT[t[i]] = 1
            }
        }
        console.log({"objS: " : objS , "objT: " : objT})
        for ( let key in objS){
            if (objT[key] !== objS[key]){
                return false
            }
        }
        return true

    }
}
