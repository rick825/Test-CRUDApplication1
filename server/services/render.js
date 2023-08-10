
exports.homeRoute = (req,res) =>{
    res.render('index',{title:'Home'});
}


exports.add_userRoute = (req,res) =>{
    res.render('add_user',{title:'add-user'});
}

exports.update_userRoute = (req,res) =>{
    res.render('update_user',{title:'update-user'});
}

