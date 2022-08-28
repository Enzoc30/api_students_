const { Model, DataTypes } = require('sequelize');
const sequelize = require('./models');

class Students extends Model {} 

Students.init({
	id : {
		type: DataTypes.INTEGER,
		primaryKey: true
		
	},
	firstname: {
		type : DataTypes.TEXT,
		allowNull: false
	},
	lastname : {
		type : DataTypes.TEXT,
		allowNull: false
	},
	gender : {
		type : DataTypes.TEXT,
		allowNull: false
	},
	age : {
		type : DataTypes.TEXT,
		allowNull: false
	}   
}, {
	sequelize,
	modelName: 'students',
	timestamps: false
})

module.exports = Students;