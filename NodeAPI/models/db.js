const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/QLNL', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
console.log('Kết nối database thành công');

},(err)=>{
console.log('Kết nối không thành công');
});

require('./userModel');