exports = function(agency, emailAddress){
  console.log(`Checking email address: ${emailAddress} for agency: ${agency}`);
  var userCollection = context.services.get("mongodb-atlas")
    .db("wildaid").collection("User");
  
  return userCollection.findOne({email: emailAddress, "agency.name": agency})
  .then ( userDoc => { 
    if (userDoc) {
      console.log('Matches Agency Member rule');
      return (true);
    } else {
      return false;
    }
  }).catch( e => { console.log(e); return false; }); 
};
