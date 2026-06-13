const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://parekhmegh155_db_user:Eventport11@ac-zipccpe-shard-00-00.ksne4da.mongodb.net:27017,ac-zipccpe-shard-00-01.ksne4da.mongodb.net:27017,ac-zipccpe-shard-00-02.ksne4da.mongodb.net:27017/Ajenda?ssl=true&replicaSet=atlas-hh0j3r-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Event-manager"
)
.then(() => {
  console.log("Database Connected Successfully");
})
.catch((err) => {
  console.log("Database Connection Error:", err);
});

module.exports = mongoose;