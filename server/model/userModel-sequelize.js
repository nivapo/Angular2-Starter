/**
 * Created by srinivasan on 17/09/17.
 */

var getUser = function(database, Sequelize) {
  var User = database.define('User', {
    nick: Sequelize.STRING,
    userName: Sequelize.STRING,
    provider: Sequelize.STRING,
    email: Sequelize.STRING,
    phone: Sequelize.STRING,
    twitter: Sequelize.STRING,
    skype: Sequelize.STRING,
    myhash: Sequelize.STRING,
    mysalt: Sequelize.STRING
  });

}
