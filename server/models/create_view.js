
module.exports = (sequelize,DataTypes) =>{
    const views = sequelize.define("views",{
        viewcnt:{
            type:DataTypes.INTEGER,
        }
    });
    return views;

};