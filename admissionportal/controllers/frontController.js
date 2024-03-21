

class frontController{
    static home = async(req, res) =>{
        try{
            res.render("home")
        } catch(error){
            console.log(error);
        }
    }

    static notHome = async(req,res) => {
        try {
            res.render("notHome")
        } catch (error) {
            
        }
    }

    static someFunc = async(req, res) => {
        try{
            console.log(req.body.name);
            res.redirect("notHome")
        } catch(error){
            console.log(error);
        }
    }
}

module.exports = frontController