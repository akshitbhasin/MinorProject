const{ sequelize, DataTypes }= require('sequelize');

export async function dislikesDB(connection){
  const dislikes = connection.define('dislikes', {
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
  await dislikes.sync().then(console.log("The table for the dislikes model was just (re)created!"))
  return dislikes;
}

     