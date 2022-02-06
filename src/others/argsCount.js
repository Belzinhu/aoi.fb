async function argsCount(model, key) {

    let fb = require("firebase")
    let db = fb.database()

    let result = await db.ref(model+"/"+key).once("value")
        result = result.val()

   return result.length || 0
}
  
module.exports = argsCount