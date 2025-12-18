const userModel = require('../models/userModel')

const getAllBooks = async(req,res) =>{
    try {
        const books = await userModel.getAllBooks()
        res.json(books)
    }
    catch (error) {
        res.status(500).json(
            {
                message : "Error Get All Book",
                status : 500
            }
        )
    }
}

const getBookByCode = async(req,res)=>{
    try {
        const book = await userModel.getBookByCode(req.params.code);

        if(!book){
            return res.status(404).json({
                message : 'Data Not Found'
            })
        }
        res.json(book)
    }
    catch (error){
        res.status(500).json({message:error})
    }
}

module.exports = {getAllBooks,getBookByCode}
