const{ sequelize, DataTypes }= require('sequelize');

export async function likesDB(connection){
const likes = connection.define('likes', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      user_emmiter: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_receive: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      is_match: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    });
    
    await likes.sync().then(console.log("The table for the likes model was just (re)created!"))
    return likes;
  }

