const productModel = require("./../models/product.model")

exports.product=function(req,res){
    res.render("auth/create");
}

exports.postProduct= function(req,res){
    const data = req.body;

       try {
        // if(req.file){
        //     const file = req.file;
        //     const fq = require("fs");
        //     const img = fq.readFileSync(file.path);
        //     data.thumbnail ={
        //         contentType: file.mimetype,
        //         data: img.toString("base64")
        //     }
        // }
       const u = new productModel(data);
       u.save();
    
       res.redirect("/")
       } catch (error) {
        return res.send(error)
    }

}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    console.log(productId);
    try {
      // Sử dụng Model để xóa sản phẩm dựa trên ID
      const deletedProduct = await productModel.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.send("Product not found");
      }
  
      res.send("Product deleted successfully");
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
};

// exports.editProduct = async (req, res) => {
//   const productId = req.params.id;
//   console.log(productId);
//   try {
//     const updatedProduct = await productModel.findByIdAndUpdate(
//       productId,
//       req.body,
//       { new: true }
//     );
//     if (!updatedProduct) {
//       res.status(404).json({ error: 'Product not found' });
//     } else {
//       res.json(updatedProduct);
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };


exports.putProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;
  console.log(productId);

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Render trang chỉnh sửa và truyền dữ liệu sản phẩm đã được cập nhật vào trang
    res.render('auth/edit', { product: updatedProduct });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



 