import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const courseSchema = new mongoose.Schema({
    __id: mongoose.Schema.Types.ObjectId,
    name: {type: String, requireed: true},
    thuonghieu: {type: String,requireed: true},
    cauhinh: {type: Array,requireed: true},
    gia: {type: Array,requireed: true},
    
});



//export const schema = model.schema;
export default  mongoose.model('Dienthoai',courseSchema);
