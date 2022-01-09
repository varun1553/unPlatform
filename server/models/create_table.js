module.exports = (sequelize,DataTypes) =>{
    const likes = sequelize.define("likes",{
        likecnt:{
            type:DataTypes.INTEGER,
        }
    });
    return likes;

};
