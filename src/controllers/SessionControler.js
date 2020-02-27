const User = require('../models/User');

module.exports ={
  async store(req, res){
    const { email } = req.body;

    // criar uma var que pode mudar, e joga o campo digitado
    let user = await User.findOne({ email });

    // se ele nao encontrar ele cria
    if (!user){
      user = await User.create({ email});
    }

    return res.json(user);
  }
};