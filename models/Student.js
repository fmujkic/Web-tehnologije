module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {

        ime: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        index: {
            type: DataTypes.STRING,
            allowNull: true,

        },
    });


    Student.associate = models => {

        Student.belongsToMany(models.Grupa, { through: 'GrupaStudent' });
    }

    return Student;
};