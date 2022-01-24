const{ sequelize, DataTypes }= require('sequelize');

export async function userDB(connection){
const users = connection.define('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      password:{
        type:DataTypes.STRING
      },
      email:{
        type: DataTypes.STRING,
      },
      bio: {
        type: DataTypes.TEXT,
      },
      avatar_url: {
        type: DataTypes.STRING,
      },
      html_url: {
        type: DataTypes.STRING,
        
      },
      interests: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "None" 
      },
      locations: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "None" 
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: 0
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: 0
      },
      isReferer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0

      },
      

    });
    // const users = userDB.userDB(connection);
    console.log(users === connection.models.users);
    await users.sync().then(console.log("The table for the User model was just (re)created!"));
    return users;
}