const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
            
    },
    email: {
        type: String,
        required: true,
          
    },  
    text:  {
        type: String,
        required: true,
         
            
    },
    movie_id: {
       type:String,
       required:true,
    },
    date:  {
        type: Date,
        default: Date.now,
       }
   
        
    
    
});
module.exports = mongoose.model('Comments',CommentSchema);