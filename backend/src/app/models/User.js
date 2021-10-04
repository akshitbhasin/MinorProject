import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    console.log('IN USER');
    super.init(
      {
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        bio: Sequelize.TEXT,
        avatar_url: Sequelize.STRING,
        html_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
