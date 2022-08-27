module.exports = (sequelize, Sequelize) => {
    const emp = sequelize.define("employee", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      }
    },{
      timestamps: false,
      freezeTableName: true,
    });
    return emp;
  };