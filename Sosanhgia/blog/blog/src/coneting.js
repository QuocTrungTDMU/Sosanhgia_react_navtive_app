import mongoose from "mongoose";
mongoose.set('strictQuery', true);
async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Dienthoai');
        console.log(' Successful Connect')
    } catch (error) {
        console.log('Kết nối lõ rùi Kiệt ơiii')
    }
}
export default connect;